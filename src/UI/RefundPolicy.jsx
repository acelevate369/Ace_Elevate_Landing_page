import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, ShieldCheck, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const RefundPolicy = () => {
    const { lang } = useLanguage();

    const t = {
        back: lang === 'id' ? 'Kembali ke Beranda' : 'Back to Home',
        title: lang === 'id' ? 'Kebijakan Pengembalian Dana' : 'Refund Policy',
        desc: lang === 'id'
            ? 'Kami percaya pada Ace Elevate. Tetapi jika agen kami tidak memberikannya seperti yang dijanjikan, kami mendukung Anda.'
            : "We believe in Ace Elevate. But if our agents don't deliver as promised, we've got you covered.",
        cards: lang === 'id' ? [
            { icon: <Clock className="text-[#C48B68] mb-3" size={24} />, title: "Jaminan 14 Hari", desc: "Jika Anda tidak puas dengan layanan dalam 14 hari pertama, Anda berhak atas pengembalian dana penuh." },
            { icon: <ShieldCheck className="text-[#C48B68] mb-3" size={24} />, title: "Proses Aman", desc: "Pengembalian dana diproses dengan aman kembali ke metode pembayaran asli Anda. Semua diproses melalui admin Telegram." },
            { icon: <MessageCircle className="text-[#C48B68] mb-3" size={24} />, title: "Hubungi Dukungan", desc: "Untuk memulai pengembalian dana, cukup hubungi admin Telegram kami. Kami akan menanganinya dengan segera." }
        ] : [
            { icon: <Clock className="text-[#C48B68] mb-3" size={24} />, title: "14-Day Guarantee", desc: "If you are not satisfied with the service within the first 14 days, you are eligible for a full refund." },
            { icon: <ShieldCheck className="text-[#C48B68] mb-3" size={24} />, title: "Secure Process", desc: "Refunds are processed securely back to your original payment method. All processed via Telegram admin." },
            { icon: <MessageCircle className="text-[#C48B68] mb-3" size={24} />, title: "Contact Support", desc: "To initiate a refund, simply reach out to our Telegram admin. We'll handle it promptly." }
        ],
        s1Title: lang === 'id' ? "1. Kelayakan untuk Pengembalian Dana" : "1. Eligibility for Refund",
        s1Items: lang === 'id' ? [
            "Anda berada dalam 14 hari pertama dari pembelian awal Anda.",
            "Layanan tidak berfungsi seperti yang dijelaskan karena masalah teknis di pihak kami (misalnya, kegagalan agen AI atau kesalahan persisten).",
            "Anda tidak melanggar Syarat Layanan kami."
        ] : [
            "You are within the first 14 days of your initial purchase.",
            "The service was not functioning as described due to technical issues on our end (e.g., AI agent failure or persistent errors).",
            "You have not violated our Terms of Service."
        ],
        s2Title: lang === 'id' ? "2. Item yang Tidak Dapat Dikembalikan" : "2. Non-Refundable Items",
        s2Desc: lang === 'id' ? "Ada situasi tertentu di mana hanya pengembalian sebagian yang diberikan atau ditolak:" : "There are certain situations where only partial refunds are granted or denied:",
        s2Items: lang === 'id' ? [
            "Permintaan apa pun yang dibuat lebih dari 14 hari setelah pembelian.",
            "Pembayaran pembaruan di mana pengguna gagal membatalkan sebelum siklus penagihan.",
            "Pengembalian dana tidak tersedia jika pengguna telah melanggar Syarat Layanan kami."
        ] : [
            "Any request made more than 14 days after purchase.",
            "Renewal payments where the user failed to cancel before the billing cycle.",
            "Refunds are not available if the user has violated our Terms of Service."
        ],
        s3Title: lang === 'id' ? "3. Cara Meminta Pengembalian Dana" : "3. How to Request a Refund",
        s3DescPre: lang === 'id' ? "Untuk memulai permintaan pengembalian dana, silakan hubungi kami melalui Telegram di" : "To start a refund request, please contact us via Telegram at",
        s3DescMid: lang === 'id' ? "atau email kami di" : "or email us at",
        s3DescPost: lang === 'id' ? "dengan detail pesanan Anda. Kami akan memberi tahu Anda tentang persetujuan atau penolakan dalam waktu 2 hari kerja." : "with your order details. We will notify you of the approval or rejection within 2 business days.",
        s4Title: lang === 'id' ? "4. Waktu Pemrosesan" : "4. Processing Time",
        s4Desc: lang === 'id' ? "Jika pengembalian dana Anda disetujui, itu akan diproses dan kredit akan secara otomatis diterapkan ke metode pembayaran asli Anda, biasanya dalam 5-10 hari kerja tergantung pada penyedia pembayaran Anda." : "If your refund is approved, it will be processed and a credit will automatically be applied to your original method of payment, typically within 5-10 business days depending on your payment provider.",
        updated: lang === 'id' ? 'Terakhir Diperbarui: Januari 2026' : 'Last Updated: January 2026'
    };

    return (
        <div className="bg-[#080707] min-h-screen text-[#F9F8F6] font-sans overflow-x-hidden">
            <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
                <Link to="/" className="inline-flex items-center gap-2 text-[#C48B68] text-sm font-bold tracking-widest uppercase hover:text-white transition-colors mb-12">
                    <ArrowLeft size={16} /> {t.back}
                </Link>

                <h1 className="text-4xl md:text-6xl font-serif font-bold text-gradient-accent mb-4 pb-2">{t.title}</h1>
                <p className="text-white/50 text-lg font-light mb-12">
                    {t.desc}
                </p>

                {/* Highlight Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
                    {t.cards.map((card, i) => (
                        <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                            {card.icon}
                            <h3 className="font-serif font-bold text-white mb-2">{card.title}</h3>
                            <p className="text-white/40 text-sm leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Policy Sections */}
                <div className="space-y-10 text-white/60 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-serif font-bold text-white mb-4">{t.s1Title}</h2>
                        <ul className="list-disc list-inside space-y-2">
                            {t.s1Items.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-white mb-4">{t.s2Title}</h2>
                        <p>{t.s2Desc}</p>
                        <ul className="list-disc list-inside space-y-2 mt-3">
                            {t.s2Items.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-white mb-4">{t.s3Title}</h2>
                        <p>
                            {t.s3DescPre}{' '}
                            <a href="https://t.me/6285753442122" target="_blank" rel="noopener noreferrer" className="text-[#C48B68] hover:text-white transition-colors">
                                +62 857-5344-2122
                            </a>
                            {' '}{t.s3DescMid}{' '}
                            <a href="mailto:acelevateglobal@gmail.com" className="text-[#C48B68] hover:text-white transition-colors">
                                acelevateglobal@gmail.com
                            </a>
                            {' '}{t.s3DescPost}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-white mb-4">{t.s4Title}</h2>
                        <p>{t.s4Desc}</p>
                    </section>

                    <div className="pt-8 border-t border-white/10 text-white/30 text-sm">
                        <p>{t.updated}</p>
                        <p>Ace Elevate &copy; {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;
