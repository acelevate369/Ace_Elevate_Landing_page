import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, AlertTriangle, Bot } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TermsConditions = () => {
    const { lang } = useLanguage();

    const t = {
        back: lang === 'id' ? 'Kembali ke Beranda' : 'Back to Home',
        title: lang === 'id' ? 'Syarat Layanan' : 'Terms of Service',
        desc: lang === 'id'
            ? 'Dengan menggunakan Ace Elevate, Anda setuju untuk memasuki kondisi Flow. Berikut adalah aturan keterlibatan untuk ekosistem digital kami.'
            : 'By using Ace Elevate, you agree to enter the Flow state. Here are the rules of engagement for our digital ecosystem.',
        cards: lang === 'id' ? [
            { icon: <FileText className="text-[#C48B68] mb-3" size={24} />, title: "Kebijakan Penggunaan", desc: "Gunakan Ace Elevate untuk produktivitas dan pertumbuhan. Jangan gunakan untuk kegiatan ilegal atau pelecehan." },
            { icon: <AlertTriangle className="text-[#C48B68] mb-3" size={24} />, title: "Langganan", desc: "Langganan ditagih setiap bulan. Anda dapat membatalkan kapan saja, tetapi flow membutuhkan konsistensi." },
            { icon: <Bot className="text-[#C48B68] mb-3" size={24} />, title: "Keterbatasan AI", desc: "Agen kami adalah AI. Meskipun sangat akurat, mereka mungkin kadang-kadang menghasilkan ketidakakuratan. Fakta yang diverifikasi adalah tanggung jawab Anda." }
        ] : [
            { icon: <FileText className="text-[#C48B68] mb-3" size={24} />, title: "Usage Policy", desc: "Use Ace Elevate for productivity and growth. Do not use for illegal activities or harassment." },
            { icon: <AlertTriangle className="text-[#C48B68] mb-3" size={24} />, title: "Subscriptions", desc: "Subscriptions are billed monthly. You can cancel anytime, but flow requires consistency." },
            { icon: <Bot className="text-[#C48B68] mb-3" size={24} />, title: "AI Limitations", desc: "Our agents are AI. While highly accurate, they may occasionally produce inaccuracies. Verified facts are your responsibility." }
        ],
        sections: lang === 'id' ? [
            { title: "1. Penerimaan Syarat", desc: "Dengan mengakses atau menggunakan layanan Ace Elevate melalui Telegram atau antarmuka web kami, Anda setuju untuk terikat oleh Syarat ini. Jika Anda tidak setuju dengan bagian mana pun dari persyaratan ini, Anda tidak boleh mengakses layanan." },
            { title: "2. Deskripsi Layanan", desc: "Ace Elevate adalah Studio Otomatisasi AI yang menyediakan 8 agen AI khusus melalui Telegram. Kami berhak untuk mengubah, menangguhkan, atau menghentikan layanan kapan saja, meskipun kami akan berusaha memberikan pemberitahuan yang wajar." },
            { title: "3. Tanggung Jawab Pengguna", desc: "Anda bertanggung jawab untuk mengamankan akun Telegram yang digunakan untuk mengakses layanan. Anda setuju untuk tidak merekayasa balik AI, mencoba melewati batas permintaan, atau mengirim muatan berbahaya ke infrastruktur kami." },
            { title: "4. Batasan Tanggung Jawab", desc: "Ace Elevate tidak akan bertanggung jawab atas kerugian tidak langsung, insidental, khusus, konsekuensial, atau hukuman yang timbul dari penggunaan Anda atau ketidakmampuan untuk menggunakan layanan." },
            { title: "5. Perubahan Syarat", desc: "Kami berhak untuk mengubah persyaratan ini kapan saja. Kami akan memberikan pemberitahuan tentang perubahan signifikan melalui saluran resmi kami." }
        ] : [
            { title: "1. Acceptance of Terms", desc: "By accessing or using any Ace Elevate service via Telegram or our web interface, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service." },
            { title: "2. Service Description", desc: "Ace Elevate is an AI Automation Studio providing 8 specialized AI agents through Telegram. We reserve the right to modify, suspend, or discontinue the service at any time, though we will aim to provide reasonable notice." },
            { title: "3. User Responsibilities", desc: "You are responsible for safeguarding the Telegram account used to access the service. You agree not to reverse engineer the AI, attempt to bypass rate limits, or send malicious payloads to our infrastructure." },
            { title: "4. Limitation of Liability", desc: "Ace Elevate shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service." },
            { title: "5. Changes to Terms", desc: "We reserve the right to modify these terms at any time. We will provide notice of significant changes through our official channels." }
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

                {/* Terms Sections */}
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

export default TermsConditions;
