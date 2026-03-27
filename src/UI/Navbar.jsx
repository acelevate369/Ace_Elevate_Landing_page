import logoAce from '../assets/Logo_AceElevate.png';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full px-4 md:px-8 py-4 md:py-6 flex justify-between items-center z-50 bg-[#080707]/80 backdrop-blur-md border-b border-white/5">
            <div className="flex items-center gap-3">
                <div className="text-base md:text-xl font-bold tracking-widest text-white flex items-center gap-2.5">
                    <img src={logoAce} alt="Ace Elevate - AI Automation Studio" className="w-8 h-8 md:w-9 md:h-9 object-contain rounded-full ring-1 ring-[#C48B68]/30" />
                    ACE ELEVATE
                </div>
            </div>
            <div className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-white/60">
                <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
                <a href="#products" className="hover:text-white transition-colors">Products</a>
                <a href="#founder" className="hover:text-white transition-colors">Founder</a>
            </div>
            <a href="#products" className="px-4 md:px-6 py-2 md:py-2.5 bg-[#C48B68] text-black text-[10px] md:text-[11px] font-bold tracking-widest uppercase rounded-full hover:bg-white transition-colors">
                Get Started
            </a>
        </nav>
    );
};

export default Navbar;
