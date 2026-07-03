import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicy = () => {
    const { lang } = useLanguage();

    const t = {
        back: lang === 'id' ? 'Kembali ke Beranda' : 'Back to Home',
        title: lang === 'id' ? 'Manifesto Privasi' : 'Privacy Manifesto',
        desc: lang === 'id' 
            ? 'Ace Elevate dibangun dengan premis sederhana: Data Anda adalah milik Anda. Kami tidak menjual data pribadi Anda. Kami tidak melatih model publik pada percakapan pribadi Anda tanpa persetujuan.'
            : 'Ace Elevate is built on a simple premise: Your data is yours. We do not sell your personal data. We do not train public models on your private conversations without consent.',
        cards: lang === 'id' ? [
            { icon: <Shield className="text-[#C48B68] mb-3" size={24} />, title: "Enkripsi Perusahaan", desc: "Semua data Anda tetap berada dalam lingkungan basis data terenkripsi dan berkeamanan tinggi. Kami menggunakan standar industri AES-256 untuk data saat istirahat." },
            { icon: <Lock className="text-[#C48B68] mb-3" size={24} />, title: "Keamanan Telegram", desc: "Kami memanfaatkan infrastruktur enkripsi end-to-end Telegram untuk pengiriman pesan, memastikan tidak ada pencegatan oleh perantara." },
            { icon: <Eye className="text-[#C48B68] mb-3" size={24} />, title: "Pribadi Berdasarkan Desain", desc: "Kenangan dan log Anda di-sandbox. Hanya ANDA dan instans agen AI pribadi Anda yang memiliki akses ke konteks Anda." }
        ] : [
            { icon: <Shield className="text-[#C48B68] mb-3" size={24} />, title: "Enterprise Encryption", desc: "All your data stays in an encrypted, high-security database environment. We use industry-standard AES-256 for data at rest." },
            { icon: <Lock className="text-[#C48B68] mb-3" size={24} />, title: "Telegram Security", desc: "We leverage Telegram's end-to-end encryption infrastructure for message delivery, ensuring no middleman interception." },
            { icon: <Eye className="text-[#C48B68] mb-3" size={24} />, title: "Private by Design", desc: "Your memories and logs are sandboxed. Only YOU and your personal AI agent instance have access to your context." }
        ],
        sections: lang === 'id' ? [
            { title: "1. Pengumpulan Data", desc: "Kami hanya mengumpulkan apa yang diperlukan untuk berfungsi: nomor telepon Anda (untuk identifikasi Telegram), email Anda (untuk manajemen akun), dan teks/gambar yang Anda kirim secara sukarela ke agen AI kami." },
            { title: "2. Bagaimana Kami Menggunakan Data Anda", desc: "Masukan Anda diproses oleh agen AI khusus kami untuk memberikan respons, mengatur tugas Anda, mengotomatiskan alur kerja Anda, dan memberikan hasil. Kami tidak pernah membagikan log percakapan Anda dengan pengiklan pihak ketiga." },
            { title: "3. Penyimpanan & Keamanan Data", desc: "Kami menggunakan infrastruktur basis data cloud tingkat perusahaan yang aman dengan Row Level Security (RLS) diaktifkan. Ini berarti data Anda secara logis terisolasi. Bahkan dalam sistem kami sendiri, kontrol akses yang ketat diterapkan untuk mencegah akses tidak sah." },
            { title: "4. Hak-hak Anda", desc: "Anda berhak meminta ekspor penuh data Anda atau penghapusan total akun Anda (\"Hak untuk Dilupakan\") kapan saja dengan menghubungi dukungan kami." }
        ] : [
            { title: "1. Data Collection", desc: "We collect only what is necessary to function: your phone number (for Telegram identification), your email (for account management), and the text/images you voluntarily send to our AI agents." },
            { title: "2. How We Use Your Data", desc: "Your inputs are processed by our specialized AI agents to provide responses, organize your tasks, automate your workflows, and deliver results. We never share your conversation logs with third-party advertisers." },
            { title: "3. Data Storage & Security", desc: "We utilize a secure, enterprise-grade cloud database infrastructure with Row Level Security (RLS) enabled. This means your data is logically isolated. Even within our own systems, strict access controls are in place to prevent unauthorized access." },
            { title: "4. Your Rights", desc: "You have the right to request a full export of your data or a complete deletion of your account (\"Right to be Forgotten\") at any time by contacting our support." }
        ],
        effective: lang === 'id' ? 'Tanggal Efektif: Januari 2026' : 'Effective Date: January 2026'
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
                    {t.sections.map((sec, i) => (
                        <section key={i}>
                            <h2 className="text-2xl font-serif font-bold text-white mb-4">{sec.title}</h2>
                            <p>{sec.desc}</p>
                        </section>
                    ))}

                    <div className="pt-8 border-t border-white/10 text-white/30 text-sm">
                        <p>{t.effective}</p>
                        <p>Ace Elevate &copy; {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
