import { createClient } from 'npm:@supabase/supabase-js@2.42.0';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { tierId, price, name, email, phone, telegram, addons } = await req.json();

    const orderId = crypto.randomUUID();
    const grossAmount = parseInt(price.toString().replace(/[^0-9]/g, ''));
    
    if (!grossAmount || grossAmount <= 0) {
      return new Response(JSON.stringify({ error: 'Invalid price' }), { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 });
    }

    const serverKey = Deno.env.get("MIDTRANS_SERVER_KEY");
    if (!serverKey) {
      throw new Error("Missing MIDTRANS_SERVER_KEY in edge function secrets");
    }

    const midtransUrl = "https://app.sandbox.midtrans.com/snap/v1/transactions";

    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: grossAmount,
      },
      customer_details: {
        first_name: name || 'Valeria',
        email: email,
        phone: phone,
      },
      item_details: [
        {
          id: tierId,
          price: grossAmount,
          quantity: 1,
          name: `Package ${tierId}`,
        }
      ]
    };

    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // 1. Upsert User
    // Cek apakah user sudah ada berdasarkan email
    let { data: existingUsers, error: userFetchError } = await supabase
      .from("users")
      .select("id")
      .eq("email", email);

    let userId = existingUsers && existingUsers.length > 0 ? existingUsers[0].id : null;

    if (!userId) {
      // Jika belum ada, buat user baru
      const { data: newUser, error: userInsertError } = await supabase
        .from("users")
        .insert([{ 
          email: email, 
          whatsapp: phone,
          telegram: telegram || null,
          tier: tierId 
        }])
        .select()
        .single();
      
      if (userInsertError) {
        console.error("Error creating user:", userInsertError);
      } else {
        userId = newUser.id;
      }
    } else {
      // Jika sudah ada, update tier
      await supabase
        .from("users")
        .update({ tier: tierId, whatsapp: phone, telegram: telegram || null })
        .eq("id", userId);
    }

    // 2. Insert Payment Record
    if (userId) {
      const { error: paymentError } = await supabase
        .from("payments")
        .insert([{
          order_id: orderId,
          user_id: userId,
          tier: tierId,
          jumlah: grossAmount,
          status: 'pending'
        }]);

      if (paymentError) {
        console.error("Error creating payment record:", paymentError);
      }

      // 3. Insert Content Assets (jika ada addon)
      if (addons && Array.isArray(addons) && addons.length > 0) {
        for (const addon of addons) {
          await supabase
            .from("content_assets")
            .insert([{
              user_id: userId,
              niche: addon,
              status_terkirim: 'pending'
            }]);
        }
      }
    }

    // Hit Midtrans API
    const authString = btoa(`${serverKey}:`);
    const response = await fetch(midtransUrl, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Basic ${authString}`
      },
      body: JSON.stringify(parameter)
    });

    const midtransData = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify({ error: midtransData }), { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: response.status });
    }

    return new Response(JSON.stringify({ token: midtransData.token, orderId }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (err: any) {
    console.error("Edge Function Error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
