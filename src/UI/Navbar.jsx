import logoAce from '../assets/Logo_AceElevate.png';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
    const { lang, toggleLanguage } = useLanguage();

    const t = {
        philosophy: lang === 'id' ? 'Filosofi' : 'Philosophy',
        products: lang === 'id' ? 'Produk' : 'Products',
        founder: lang === 'id' ? 'Pendiri' : 'Founder',
        cta: lang === 'id' ? 'Mulai Sekarang' : 'Get Started',
    };

    return (
        <nav className="fixed top-0 left-0 w-full px-4 md:px-8 py-3 md:py-4 flex justify-between items-center z-50 bg-[#080707]/80 backdrop-blur-md border-b border-white/5">
            <div className="flex items-center gap-3">
                <div className="text-base md:text-xl font-bold tracking-widest text-white flex items-center gap-2.5">
                    <img src={logoAce} alt="Ace Elevate - AI Automation Studio" className="w-8 h-8 md:w-9 md:h-9 object-contain rounded-full ring-1 ring-[#C48B68]/30" />
                    ACE ELEVATE
                </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-white/60">
                <a href="#philosophy" className="hover:text-white transition-colors">{t.philosophy}</a>
                <a href="#products" className="hover:text-white transition-colors">{t.products}</a>
                <a href="#founder" className="hover:text-white transition-colors">{t.founder}</a>
            </div>

            <div className="flex items-center gap-4">
                {/* Language Toggle */}
                <button 
                    onClick={toggleLanguage}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-black/40 hover:bg-white/5 transition-colors font-mono text-[9px] md:text-[10px] tracking-widest text-white/70 hover:text-white"
                >
                    <span className={lang === 'en' ? 'text-[#C48B68] font-bold' : ''}>EN</span>
                    <span className="text-white/30">/</span>
                    <span className={lang === 'id' ? 'text-[#C48B68] font-bold' : ''}>ID</span>
                </button>

                <a href="#products" className="hidden sm:inline-block px-4 md:px-6 py-2 md:py-2.5 bg-[#C48B68] text-black text-[10px] md:text-[11px] font-bold tracking-widest uppercase rounded-full hover:bg-white transition-colors whitespace-nowrap">
                    {t.cta}
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
