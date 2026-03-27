import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Footer = () => {
    return (
        <footer className="py-20 md:py-32 px-4 md:px-6 flex flex-col items-center justify-center text-center relative bg-black border-t border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(196,139,104,0.08),transparent_60%)] pointer-events-none"></div>

            <ScrollReveal variant="fade-up">
                <p className="text-[#C48B68] tracking-[0.3em] text-[10px] font-bold uppercase mb-6">Join The Revolution</p>
            </ScrollReveal>

            <ScrollReveal variant="blur-up" delay={0.15} duration={0.9}>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-gradient-accent mb-6 md:mb-8 pb-2 leading-tight">Ready to<br />Elevate?</h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.3}>
                <p className="text-white/50 text-base md:text-lg max-w-xl font-light mb-10 md:mb-12 px-4">
                    Stop downloading. Start automating. Let your AI workforce handle everything while you focus on what actually matters.
                </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.45}>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
                    <a href="https://wa.me/6285753442122?text=Hello%2C%20I%20would%20like%20to%20get%20started%20with%20Ace%20Elevate" target="_blank" rel="noopener noreferrer" className="px-8 py-4 md:py-5 bg-[#C48B68] hover:bg-white text-black text-xs uppercase tracking-widest font-bold transition-colors flex items-center justify-center gap-3 rounded-full group">
                        Start on WhatsApp <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button className="px-8 py-4 md:py-5 bg-transparent hover:bg-white/5 border border-white/20 rounded-full text-white text-xs uppercase tracking-widest font-bold transition-colors flex items-center justify-center gap-3">
                        Start on Telegram
                    </button>
                </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2}>
                <div className="mt-24 md:mt-40 pt-8 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest text-white/30 uppercase px-4 md:px-8 gap-4">
                    <span>© {new Date().getFullYear()} Ace Elevate.</span>
                    <div className="flex gap-6">
                        <a href="https://www.instagram.com/ace_elevate.ai?igsh=MXBtNXNqMHpuajZhaQ==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                        <a href="https://www.tiktok.com/@acelevate.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TikTok</a>
                        <a href="https://www.threads.com/@ace_elevate.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Threads</a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
                    </div>
                    <span>Anti-App Protocol.</span>
                </div>
            </ScrollReveal>
        </footer>
    );
};

export default Footer;
