import { Quote } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SpotlightCard from '../components/SpotlightCard';

const FounderSection = () => {
    return (
        <section id="founder" className="py-24 md:py-40 px-4 md:px-6 relative flex flex-col items-center justify-center text-center" aria-label="The Founder">
            <ScrollReveal variant="fade-up">
                <p className="text-[#C48B68] tracking-[0.3em] text-[10px] font-bold uppercase mb-12 md:mb-16">The Founder</p>
            </ScrollReveal>

            <ScrollReveal variant="scale" duration={0.9} delay={0.15}>
                <div className="relative max-w-4xl w-full">
                    {/* Corner Decorations */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#C48B68]/30"></div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#C48B68]/30"></div>
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#C48B68]/30"></div>
                    <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#C48B68]/30"></div>

                    <SpotlightCard className="p-8 md:p-20">
                        <ScrollReveal variant="flip" delay={0.3} duration={0.8}>
                            <Quote className="text-[#C48B68]/30 w-10 h-10 md:w-12 md:h-12 mx-auto mb-6 md:mb-8" />
                        </ScrollReveal>

                        {/* Avatar with Pulse Ring */}
                        <ScrollReveal variant="scale" delay={0.4} duration={0.7}>
                            <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-8 md:mb-10">
                                <div className="absolute inset-0 rounded-full border border-[#C48B68]/50 animate-ping opacity-30"></div>
                                <div className="absolute inset-0 rounded-full border border-[#C48B68] opacity-50"></div>
                                <div className="w-full h-full rounded-full bg-[#181615] flex items-center justify-center text-2xl md:text-3xl font-bold font-serif text-gradient-accent relative z-10 pb-1">
                                    Ω
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal variant="blur-up" delay={0.5} duration={1}>
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold leading-[1.3] text-white mb-8 md:mb-10 px-2 md:px-0">
                                "I saw a world drowning in <span className="text-[#C48B68]">application waste</span>. Without realizing it, humanity had become exhausted by the very tools meant to free them. That's why I'm here, <span className="text-[#E5CDB3]">to lighten your burden</span>."
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal variant="fade-up" delay={0.7}>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <div className="w-12 h-[1px] bg-[#C48B68]/50 mb-3"></div>
                                <h3 className="text-lg md:text-xl font-serif font-bold text-white tracking-widest">Omega Yorha</h3>
                                <p className="text-[10px] tracking-[0.3em] text-[#C48B68] uppercase font-bold">Founder & CEO</p>
                            </div>
                        </ScrollReveal>
                    </SpotlightCard>
                </div>
            </ScrollReveal>
        </section>
    );
};

export default FounderSection;
