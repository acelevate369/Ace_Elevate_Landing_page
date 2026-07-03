import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

const getFaqs = (lang) => [
    {
        question: lang === 'id' ? "Apa itu Ace Elevate?" : "What is Ace Elevate?",
        answer: lang === 'id' 
            ? "Ace Elevate adalah Studio Otomatisasi AI yang memberikan 8 agen AI khusus melalui Telegram. Setiap agen menggantikan seluruh aplikasi atau alur kerja, sehingga Anda tidak perlu mengunduh alat lain."
            : "Ace Elevate is an AI Automation Studio that delivers 8 specialized AI agents through Telegram. Each agent replaces an entire app or workflow, so you never need to download another tool."
    },
    {
        question: lang === 'id' ? "Mengapa Anda beralih dari WhatsApp ke Telegram?" : "Why did you switch from WhatsApp to Telegram?",
        answer: lang === 'id'
            ? "Kami pindah ke Telegram karena pembatasan WhatsApp dalam menjalankan fungsi AI Generatif berbasis teks. Telegram memberikan fleksibilitas dan akses API yang kami butuhkan untuk memberikan agen AI canggih kami secara efektif. Di masa mendatang, kami akan meneliti aplikasi obrolan lain yang dapat kami manfaatkan untuk memperluas ekosistem kami."
            : "We moved to Telegram due to WhatsApp's restrictions on running text-based Generative AI functions. Telegram provides the flexibility and API access we need to deliver our advanced AI agents effectively. In the future, we will research other chat apps we can utilize to expand our ecosystem."
    },
    {
        question: lang === 'id' ? "Apakah saya perlu mengunduh aplikasi baru?" : "Do I need to download any new apps?",
        answer: lang === 'id'
            ? "Tidak. Semua agen AI kami beroperasi langsung di dalam Telegram. Anda berinteraksi dengan mereka seperti yang Anda lakukan dengan kontak Anda lainnya—melalui pesan obrolan sederhana."
            : "No. All our AI agents operate directly within Telegram. You interact with them just like you would with any of your contacts—through simple chat messages."
    },
    {
        question: lang === 'id' ? "Bagaimana agen menghemat waktu saya?" : "How do the agents save me time?",
        answer: lang === 'id'
            ? "Agen kami mengotomatiskan tugas berulang seperti pemasaran email, pembuatan konten, perolehan prospek, dan penjadwalan. Dengan menangani pekerjaan berat, mereka membebaskan Anda untuk fokus pada pekerjaan bernilai tinggi atau sekadar menikmati lebih banyak waktu luang."
            : "Our agents automate repetitive tasks like email marketing, content creation, lead generation, and scheduling. By handling the heavy lifting, they free you up to focus on high-value work or simply enjoy more free time."
    }
];

const FAQItem = ({ faq, isOpen, onClick }) => {
    return (
        <div className="border-b border-white/10">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={onClick}
            >
                <span className={`text-lg md:text-xl font-medium transition-colors ${isOpen ? 'text-[#C48B68]' : 'text-white group-hover:text-[#E5CDB3]'}`}>
                    {faq.question}
                </span>
                <span className="ml-6 flex-shrink-0">
                    {isOpen ? (
                        <Minus className="text-[#C48B68]" size={24} />
                    ) : (
                        <Plus className="text-white/40 group-hover:text-[#E5CDB3]" size={24} />
                    )}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-white/50 text-base md:text-lg leading-relaxed">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQSection = () => {
    const { lang } = useLanguage();
    const [openIndex, setOpenIndex] = useState(0);
    const faqs = getFaqs(lang);

    const t = {
        tag: lang === 'id' ? 'Basis Pengetahuan' : 'Knowledge Base',
        title: lang === 'id' ? 'Pertanyaan Umum' : 'Frequently Asked'
    };

    return (
        <section className="py-24 md:py-32 px-6 bg-[#050505] relative overflow-hidden" id="faq">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C48B68]/5 via-transparent to-transparent opacity-50 pointer-events-none"></div>
            
            <div className="max-w-4xl mx-auto relative z-10">
                <ScrollReveal variant="fade-up">
                    <div className="text-center mb-16">
                        <span className="text-[#C48B68] tracking-[0.2em] uppercase text-sm font-bold mb-4 block">{t.tag}</span>
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">{t.title}</h2>
                    </div>
                </ScrollReveal>

                <div className="flex flex-col">
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} variant="fade-up" delay={index * 0.1}>
                            <FAQItem
                                faq={faq}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
