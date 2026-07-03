import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Play, ChevronRight, Lock, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

// Import images
import valeriaMain from '../assets/agent-valeria.png';
import valeriaPose2 from '../assets/agent-valeria Pose 2.png';
import valeriaPose3 from '../assets/agent-valeria Pose 3.png';
import valeriaOnDuty1 from '../assets/On duty valeria 1.png';
import valeriaOnDuty2 from '../assets/On duty valeria 2.png';
import valeriaOnDuty3 from '../assets/On duty valeria 3.png';
import valeriaStandardImg from '../assets/Valeria Standar Package.png';
import valeriaUltimateImg from '../assets/Valeria Ultimate Package.png';

const heroSequence = [
  { type: 'pose', src: valeriaMain },
  { type: 'onduty', src: valeriaOnDuty1 },
  { type: 'pose', src: valeriaPose2 },
  { type: 'onduty', src: valeriaOnDuty2 },
  { type: 'pose', src: valeriaPose3 },
  { type: 'onduty', src: valeriaOnDuty3 }
];

const getAddons = (lang) => {
  if (lang === 'id') {
    return [
      "600+ Video Kucing AI Lucu",
      "800+ Video Bayi & Hewan",
      "350+ Video Positive Vibes",
      "3100+ Video Kucing & Anjing",
      "1000+ Video ASMR Memuaskan",
      "9500+ Video Motivasi",
      "5000+ Video Lucu",
      "1200+ Video Masakan",
      "1000+ Video AI Talking Object",
      "300+ Video Restorasi",
      "4000+ Video Seni & Kerajinan"
    ];
  }
  return [
    "600+ Cute AI Cat Videos",
    "800+ Baby & Animal Videos",
    "350+ Positive Vibes Videos",
    "3100+ Dog & Cat Videos",
    "1000+ Satisfying ASMR Videos",
    "9500+ Motivational Videos",
    "5000+ Funny Videos",
    "1200+ Cooking Videos",
    "1000+ AI Talking Object Videos",
    "300+ Restoration Videos",
    "4000+ Art & Craft Videos"
  ];
};

const ValeriaPage = () => {
  const { lang } = useLanguage();
  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState([]);
  
  const ADDONS = getAddons(lang);

  // Load external scripts (Lemon.js and Snap.js)
  useEffect(() => {
    // Lemon Squeezy
    const lemonScript = document.createElement('script');
    lemonScript.src = 'https://assets.lemonsqueezy.com/lemon.js';
    lemonScript.async = true;
    lemonScript.onload = () => {
      if (window.createLemonSqueezy) {
        window.createLemonSqueezy();
      }
    };
    document.body.appendChild(lemonScript);

    // Midtrans Snap
    const snapScript = document.createElement('script');
    // Use sandbox url for testing, change to production later
    snapScript.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
    snapScript.setAttribute('data-client-key', import.meta.env.VITE_MIDTRANS_CLIENT_KEY || '');
    snapScript.async = true;
    document.body.appendChild(snapScript);

    return () => {
      if (document.body.contains(lemonScript)) document.body.removeChild(lemonScript);
      if (document.body.contains(snapScript)) document.body.removeChild(snapScript);
    };
  }, []);

  const handleCheckout = async (packageType, price, name, additionalData = null) => {
    if (lang === 'en') {
      // Lemon Squeezy
      let variantUrl = '';
      if (packageType === 'core') variantUrl = 'https://aceelevate.lemonsqueezy.com/checkout/buy/e4345408-df5d-4f8c-97cc-e7d53dfc7485?embed=1&desc=0';
      if (packageType === 'standard') variantUrl = 'https://aceelevate.lemonsqueezy.com/checkout/buy/3854a35f-c5d5-4c43-a43d-a34945a2b62d?embed=1&desc=0';
      if (packageType === 'ultimate') variantUrl = 'https://aceelevate.lemonsqueezy.com/checkout/buy/eeaa00fa-4cb7-4569-9ac2-5f4097470910?embed=1&desc=0';

      if (window.LemonSqueezy) {
        window.LemonSqueezy.Url.Open(variantUrl);
      } else {
        window.location.href = variantUrl;
      }
    } else {
      // Midtrans ID
      // To create a robust integration, we trigger Supabase Edge Function to get Snap Token
      try {
        const edgeFunctionUrl = import.meta.env.VITE_SUPABASE_EDGE_FUNCTION_URL + '/pay';
        
        // Dummy data for now since we don't have a form, or we can use default
        const orderData = {
          tierId: packageType,
          price: price,
          name: name,
          email: 'user@example.com', // In real app, prompt user or get from auth
          phone: '08123456789',
          addons: additionalData
        };

        const res = await fetch(edgeFunctionUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
          },
          body: JSON.stringify(orderData)
        });

        const data = await res.json();
        
        if (data.token) {
          window.snap.pay(data.token, {
            onSuccess: function(result){ console.log('success', result); },
            onPending: function(result){ console.log('pending', result); },
            onError: function(result){ console.log('error', result); },
            onClose: function(){ console.log('customer closed the popup without finishing the payment'); }
          });
        } else {
          console.error("No token received from backend:", data);
          alert("Gagal menginisiasi pembayaran. Pastikan Edge Function dan Kredensial benar.");
        }
      } catch (err) {
        console.error("Checkout Error:", err);
        alert("Terjadi kesalahan saat memanggil sistem pembayaran.");
      }
    }
  };

  const t = {
    returnBase: lang === 'id' ? 'Kembali ke Markas' : 'Return to Base',
    classified: lang === 'id' ? 'Rahasia // Level 5' : 'Classified // Level 5',
    heroSubtitle: lang === 'id' ? 'Operasi Saluran Otomatis & SEO' : 'Automated Channel Operations & SEO',
    heroDesc: lang === 'id' 
      ? 'Valeria menangani semua beban berat otomatisasi YouTube. Dia mengambil konten jadimu dan mendistribusikannya secara otomatis ke berbagai saluran. Mulai dari membuat deskripsi berperingkat tinggi hingga menemukan hashtag yang sempurna, dia mengelola seluruh alur unggahan agar kamu bisa fokus berkreasi.'
      : 'Valeria handles the heavy lifting of YouTube automation. She takes your finished content and deploys it automatically across multiple channels. From generating high-ranking descriptions to finding the perfect hashtags, she manages your entire upload workflow so you can focus on creating.',
    clearance: lang === 'id' ? 'Akses' : 'Clearance',
    competencies: lang === 'id' ? 'Kompetensi Utama' : 'Key Competencies',
    compList: lang === 'id' 
      ? ['• Distribusi Konten Otomatis', '• Optimasi SEO & Metadata', '• Manajemen Multi-Saluran']
      : ['• Auto Content Deployment', '• SEO & Metadata Optimization', '• Multi-Channel Management'],
    
    pricingTitle: lang === 'id' ? 'TINGKAT AKUISISI' : 'ACQUISITION TIERS',
    pricingDesc: lang === 'id' ? 'Terapkan Valeria ke dalam arsitekturmu. Pilih skala operasional yang sesuai dengan tujuan strategismu.' : 'Deploy Valeria into your architecture. Select the operational scope that matches your strategic objectives.',
    
    tier1: {
      tag: lang === 'id' ? 'Protokol Dasar' : 'Base Protocol',
      name: 'Valeria Core',
      price: lang === 'id' ? '199.000' : '19',
      strike: lang === 'id' ? '499.000' : '99',
      curr: lang === 'id' ? 'Rp ' : '$',
      mo: lang === 'id' ? '/bln' : '/mo',
      features: lang === 'id' 
        ? ["Akses ke Mesin AI Valeria", "Protokol Upload Otomatis", "Deskripsi Optimasi SEO", "Hashtag Otomatis", "Generasi Thumbnail (Riset)"]
        : ["Access to Valeria AI Engine", "Auto Upload Protocol", "SEO Optimized Descriptions", "Automated Hashtags", "Thumbnail Generation (Research)"],
      btn: lang === 'id' ? 'Inisialisasi Dasar' : 'Initialize Base'
    },
    tier2: {
      tag: lang === 'id' ? 'Add-ons Pilihan' : 'Selectable Add-ons',
      name: lang === 'id' ? 'Paket Standar' : 'Standard Package',
      subtitle: lang === 'id' ? 'Mendukung 1-3 Saluran YouTube' : 'Support 1-3 YouTube Channels',
      price: lang === 'id' ? '399.000' : '39',
      strike: lang === 'id' ? '999.000' : '129',
      curr: lang === 'id' ? 'Rp ' : '$',
      mo: lang === 'id' ? '/bln' : '/mo',
      features: lang === 'id'
        ? ["Semua di Core", "Pilih hingga 3 Video Add-ons", "Sindikasi Lintas Saluran", "Analisis SEO Lanjutan"]
        : ["Everything in Core", "Choose up to 3 Video Add-ons", "Cross-Channel Syndication", "Advanced SEO Analytics"],
      btn: lang === 'id' ? 'Terapkan & Pilih Add-ons' : 'Deploy & Select Add-ons'
    },
    tier3: {
      tag: lang === 'id' ? 'Kemampuan Maksimal' : 'Maximum Capability',
      name: lang === 'id' ? 'PAKET ULTIMATE' : 'ULTIMATE PACKAGE',
      subtitle: lang === 'id' ? 'Saluran YouTube Tanpa Batas + SEMUA Add-ons Termasuk' : 'Unlimited YouTube Channels + ALL Add-ons Included',
      price: lang === 'id' ? '799.000' : '79',
      strike: lang === 'id' ? '1.999.000' : '299',
      curr: lang === 'id' ? 'Rp ' : '$',
      mo: lang === 'id' ? '/bln' : '/mo',
      tierLabel: lang === 'id' ? 'Tingkat Enterprise' : 'Enterprise Tier',
      features: lang === 'id'
        ? ["Semua di Standar", "Antrean Upload Prioritas", "Manajemen Multi-Akun Skala Masif", "Manajer Akun Dedikasi"]
        : ["Everything in Standard", "Priority Upload Queue", "Mass-Scale Multi-Account Mgmt", "Dedicated Account Manager"],
      btn: lang === 'id' ? 'Terapkan Ultimate' : 'Deploy Ultimate',
      note: lang === 'id' ? 'Tanpa Batasan Add-on' : 'Zero Add-on Limitations'
    },

    modal: {
      title: lang === 'id' ? 'Pilih Video Add-ons' : 'Select Video Add-ons',
      subtitle: (len) => lang === 'id' ? `Paket Standar: Pilih hingga 3 (${len}/3 terpilih)` : `Standard Package: Choose up to 3 (${len}/3 selected)`,
      cancel: lang === 'id' ? 'Batal' : 'Cancel',
      confirm: lang === 'id' ? 'Konfirmasi Konfigurasi' : 'Confirm Configuration'
    }
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Automatic hero slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIdx((prev) => (prev + 1) % heroSequence.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const handleAddonToggle = (addon) => {
    if (selectedAddons.includes(addon)) {
      setSelectedAddons(selectedAddons.filter(a => a !== addon));
    } else {
      if (selectedAddons.length < 3) {
        setSelectedAddons([...selectedAddons, addon]);
      }
    }
  };

  return (
    <div className="bg-[#080707] min-h-screen w-full text-white overflow-x-hidden selection:bg-[#C48B68] selection:text-black">
      
      {/* NAVBAR OVERRIDE */}
      <nav className="fixed top-0 left-0 w-full px-6 py-4 flex items-center justify-between z-50 bg-gradient-to-b from-[#080707]/90 to-transparent backdrop-blur-sm">
        <Link to="/" className="group flex items-center gap-2 text-[#C48B68] hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-xs tracking-widest uppercase font-bold">{t.returnBase}</span>
        </Link>
        <div className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase bg-black/40 px-3 py-1 rounded-full border border-white/5">
          {t.classified}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex flex-col justify-end pb-20 lg:pb-32 pt-32 px-6 lg:px-12 overflow-hidden">
        
        {/* Dynamic Sequence Carousel */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            {heroSequence[currentHeroIdx].type === 'onduty' ? (
              <motion.img 
                key={`onduty-${currentHeroIdx}`}
                src={heroSequence[currentHeroIdx].src}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.85, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            ) : (
              <motion.div
                key={`pose-${currentHeroIdx}`}
                initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                animate={{ opacity: 0.85, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 z-0 flex items-end justify-center mix-blend-lighten pointer-events-none"
              >
                <img src={heroSequence[currentHeroIdx].src} className="h-[85vh] lg:h-[90vh] w-auto object-contain object-bottom filter drop-shadow-[0_0_50px_rgba(196,139,104,0.15)] origin-bottom" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="relative">
            {/* Localized dark glow just behind the text for readability */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,7,7,0.8)_0%,transparent_70%)] blur-2xl -z-10 scale-150" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#C48B68]" />
                <span className="font-mono text-[10px] tracking-[0.4em] text-[#C48B68] uppercase">Agent 004</span>
              </div>
              <h1 className="text-7xl sm:text-8xl md:text-9xl font-serif font-black text-white leading-[0.85] tracking-tighter mb-4 drop-shadow-2xl">
                VALERIA
              </h1>
              <p className="font-mono text-sm md:text-base text-[#E5CDB3] tracking-widest uppercase mb-6 opacity-80">
                {t.heroSubtitle}
              </p>
              <p className="text-white/80 font-sans text-sm md:text-base max-w-md leading-relaxed drop-shadow-md bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/5">
                {t.heroDesc}
              </p>
            </motion.div>
          </div>
          
          <div className="hidden lg:flex flex-col items-end text-right">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-[#080707]/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl max-w-xs shadow-2xl"
            >
              <Lock className="w-5 h-5 text-[#C48B68] mb-4 ml-auto" />
              <div className="font-mono text-[10px] text-white/50 tracking-widest uppercase mb-2">{t.clearance}</div>
              <div className="text-white font-serif text-xl tracking-wider mb-6">OMEGA-LEVEL</div>
              
              <div className="w-full h-px bg-white/10 mb-4" />
              
              <div className="font-mono text-[10px] text-white/50 tracking-widest uppercase mb-2">{t.competencies}</div>
              <ul className="text-xs font-mono text-[#E5CDB3] tracking-wider space-y-2">
                {t.compList.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="relative w-full py-24 px-6 lg:px-12 bg-[#050404] z-20">
        
        <div className="max-w-7xl mx-auto mb-16 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-white tracking-tighter mb-4">
            {t.pricingTitle.split(' ')[0]} <span className="text-[#C48B68]">{t.pricingTitle.split(' ')[1]}</span>
          </h2>
          <p className="text-white/50 font-mono text-sm tracking-widest uppercase max-w-xl">
            {t.pricingDesc}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 auto-rows-[auto]">

          {/* TIER 1: VALERIA ONLY */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 relative group rounded-2xl overflow-hidden bg-[#080707] border border-white/5 hover:border-[#C48B68]/30 transition-all duration-500 flex flex-col"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-white/10 group-hover:bg-[#C48B68] transition-colors" />
            <div className="p-8 h-full flex flex-col">
              <div className="font-mono text-[10px] text-white/50 tracking-[0.2em] uppercase mb-2">{t.tier1.tag}</div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">{t.tier1.name}</h3>
              
              <div className="flex flex-col mb-8">
                <span className="text-white/30 line-through text-lg font-mono mb-1">{t.tier1.curr}{t.tier1.strike}</span>
                <div className="text-[#C48B68] text-4xl font-black font-sans">
                  {t.tier1.curr}{t.tier1.price}<span className="text-lg text-white/30 font-normal">{t.tier1.mo}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {t.tier1.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-[#C48B68]/70 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleCheckout('core', t.tier1.price, t.tier1.name)}
                className="w-full mt-auto py-4 rounded-xl border border-white/10 text-white font-mono text-xs tracking-widest uppercase hover:bg-white/5 transition-colors"
              >
                {t.tier1.btn}
              </button>
            </div>
          </motion.div>


          {/* TIER 2: STANDARD PACKAGE (Explicit Image) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 relative group rounded-2xl overflow-hidden bg-[#080707] border border-white/10 hover:border-[#E5CDB3]/50 transition-all duration-500 flex flex-col"
          >
            {/* Explicit Image on top */}
            <div className="w-full border-b border-white/10 relative">
              <img src={valeriaStandardImg} alt="Standard Package" className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-700" />
            </div>

            <div className="p-8 flex-grow flex flex-col sm:flex-row justify-between items-start gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E5CDB3]/10 border border-[#E5CDB3]/20 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5CDB3] animate-pulse" />
                  <span className="font-mono text-[9px] text-[#E5CDB3] tracking-widest uppercase">{t.tier2.tag}</span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-2">{t.tier2.name}</h3>
                <p className="text-[#C48B68] text-sm mb-6 font-mono font-bold tracking-wide uppercase">
                  {t.tier2.subtitle}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {t.tier2.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                      <ChevronRight className="w-4 h-4 text-[#E5CDB3]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full sm:w-auto bg-black/40 backdrop-blur-md border border-white/5 p-6 rounded-xl flex flex-col items-center justify-center">
                <div className="flex flex-col items-center mb-2">
                  <span className="text-white/30 line-through text-lg font-mono mb-1">{t.tier2.curr}{t.tier2.strike}</span>
                  <div className="text-white text-4xl font-black font-sans">
                    {t.tier2.curr}{t.tier2.price}<span className="text-lg text-white/30 font-normal">{t.tier2.mo}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="mt-4 w-full px-8 py-4 rounded-xl bg-[#E5CDB3] text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-white transition-colors whitespace-nowrap shadow-[0_0_20px_rgba(229,205,179,0.2)]"
                >
                  {t.tier2.btn}
                </button>
              </div>
            </div>
          </motion.div>


          {/* TIER 3: ULTIMATE PACKAGE (Explicit Image) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="lg:col-span-12 relative group rounded-3xl overflow-hidden bg-[#080707] border border-[#C48B68]/40 hover:border-[#C48B68] transition-all duration-500 shadow-[0_0_40px_rgba(196,139,104,0.1)] hover:shadow-[0_0_80px_rgba(196,139,104,0.2)] mt-6 flex flex-col lg:flex-row"
          >
            {/* Glowing Corner Accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#C48B68] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-3xl m-2 z-20 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#C48B68] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-br-3xl m-2 z-20 pointer-events-none" />

            {/* Explicit Image Left Side */}
            <div className="w-full lg:w-2/5 relative border-b lg:border-b-0 lg:border-r border-[#C48B68]/20 flex items-center justify-center p-4">
              <img src={valeriaUltimateImg} alt="Ultimate Arsenal" className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_0_30px_rgba(196,139,104,0.3)]" />
            </div>

            {/* Content Right Side */}
            <div className="relative z-10 p-8 lg:p-12 flex-1 flex flex-col justify-center">
              <div className="flex flex-col xl:flex-row justify-between gap-12 items-start xl:items-center">
                
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C48B68]/10 border border-[#C48B68]/30 rounded-full mb-6">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C48B68] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C48B68]" />
                    </span>
                    <span className="font-mono text-[10px] font-bold text-[#C48B68] tracking-widest uppercase">{t.tier3.tag}</span>
                  </div>
                  
                  <h3 className="text-4xl lg:text-5xl font-serif font-black text-white mb-2 leading-none tracking-tighter">
                    {t.tier3.name}
                  </h3>
                  
                  <p className="text-[#C48B68] text-base mb-6 font-mono font-bold tracking-wide uppercase bg-[#C48B68]/10 inline-block px-3 py-1 rounded-md border border-[#C48B68]/20">
                    {t.tier3.subtitle}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {t.tier3.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/5 px-4 py-3 rounded-lg backdrop-blur-sm">
                        <Play className="w-3 h-3 text-[#C48B68] fill-[#C48B68]" />
                        <span className="text-xs font-mono text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center items-start xl:items-end min-w-[250px]">
                  <div className="mb-2 font-mono text-[10px] text-white/40 uppercase tracking-widest">{t.tier3.tierLabel}</div>
                  <div className="flex flex-col items-start xl:items-end mb-6">
                    <span className="text-white/30 line-through text-lg font-mono mb-1">{t.tier3.curr}{t.tier3.strike}</span>
                    <div className="text-white text-5xl lg:text-6xl font-black font-sans">
                      {t.tier3.curr}{t.tier3.price}<span className="text-xl text-white/30 font-normal">{t.tier3.mo}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleCheckout('ultimate', t.tier3.price, t.tier3.name)}
                    className="group relative w-full overflow-hidden rounded-xl bg-[#C48B68] px-8 py-5 text-black font-mono text-sm font-bold tracking-widest uppercase hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_20px_rgba(196,139,104,0.3)] hover:shadow-[0_0_40px_rgba(196,139,104,0.5)]"
                  >
                    <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1s_forwards]" />
                    {t.tier3.btn}
                  </button>
                  <div className="mt-4 font-mono text-[9px] text-[#C48B68]/70 text-right w-full uppercase tracking-widest">
                    {t.tier3.note}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────────
          ADD-ON SELECTION MODAL
          ───────────────────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#050404]/80 backdrop-blur-md"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#080707] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#050404]">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white">{t.modal.title}</h3>
                  <p className="text-[#C48B68] font-mono text-xs uppercase tracking-widest mt-1">
                    {t.modal.subtitle(selectedAddons.length)}
                  </p>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="text-white/50 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Grid List */}
              <div className="p-6 overflow-y-auto custom-scrollbar flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ADDONS.map((addon, idx) => {
                    const isSelected = selectedAddons.includes(addon);
                    const isDisabled = !isSelected && selectedAddons.length >= 3;
                    
                    return (
                      <div 
                        key={idx}
                        onClick={() => !isDisabled && handleAddonToggle(addon)}
                        className={`relative p-4 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col gap-3 ${
                          isSelected 
                            ? "bg-[#C48B68]/10 border-[#C48B68] shadow-[0_0_15px_rgba(196,139,104,0.2)]" 
                            : isDisabled
                              ? "bg-black/40 border-white/5 opacity-50 cursor-not-allowed"
                              : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex justify-between items-start gap-2">
                          <span className={`text-sm font-mono leading-tight ${isSelected ? "text-white" : "text-white/70"}`}>
                            {addon}
                          </span>
                          <div className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border transition-colors ${
                            isSelected ? "bg-[#C48B68] border-[#C48B68]" : "border-white/20 bg-black"
                          }`}>
                            {isSelected && <CheckCircle2 className="w-3 h-3 text-black" />}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-white/5 bg-[#050404] flex justify-end gap-4 items-center">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 font-mono text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                >
                  {t.modal.cancel}
                </button>
                  <button 
                    disabled={selectedAddons.length === 0}
                    onClick={() => {
                      setIsModalOpen(false);
                      handleCheckout('standard', t.tier2.price, t.tier2.name, selectedAddons);
                    }}
                    className={`px-8 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-widest transition-all ${
                      selectedAddons.length > 0 
                        ? "bg-[#C48B68] text-black hover:bg-white shadow-[0_0_20px_rgba(196,139,104,0.3)]" 
                        : "bg-white/10 text-white/30 cursor-not-allowed"
                    }`}
                  >
                    {t.modal.confirm}
                  </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #050404;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #C48B68;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #E5CDB3;
        }
      `}} />
    </div>
  );
};

export default ValeriaPage;
