import ScrollReveal, { StaggerReveal } from '../components/ScrollReveal';
import SpotlightCard from '../components/SpotlightCard';

const PhilosophySection = () => {
    return (
        <section id="philosophy" className="py-20 md:py-32 px-4 md:px-6 lg:px-12 max-w-[90rem] mx-auto relative z-10" aria-label="Our Philosophy">
            <div className="mb-16 md:mb-20">
                <ScrollReveal variant="fade-up" duration={0.6}>
                    <p className="text-[#C48B68] tracking-[0.3em] text-[10px] font-bold uppercase mb-8 md:mb-12">Our Philosophy</p>
                </ScrollReveal>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-end">
                    <ScrollReveal variant="blur-up" duration={0.9} delay={0.1}>
                        <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] font-serif font-bold leading-[1.1] pb-2 text-gradient-accent">
                            The World Doesn't Need Another App.
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal variant="fade-up" delay={0.3} duration={0.8}>
                        <p className="text-base md:text-lg text-white/50 leading-relaxed font-light pb-4">
                            We were promised technology would simplify life. Instead, we ended up working for our apps. Every notification, every update, every new tool... it all adds up to <strong className="text-white font-medium">digital exhaustion</strong>.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            <StaggerReveal variant="scale" stagger={0.15} duration={0.7} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {[
                    { num: "01", title: "App Fatigue is Real", stat: "80+", statDesc: "AVG APPS PER USER", desc: "80+ apps per person. Each one screams for attention. We believe the future isn't more software. It's invisible software." },
                    { num: "02", title: "No UI, No Problem", stat: "0", statDesc: "LEARNING CURVE", desc: "Our agents live in WhatsApp & Telegram, platforms already in your muscle memory. Zero onboarding. Zero friction. Pure output." },
                    { num: "03", title: "Automate, Don't Accumulate", stat: "100%", statDesc: "HANDS-FREE", desc: "We don't add tools to your stack. We replace entire workflows with silent intelligence that runs in the background while you live your life." }
                ].map((item, i) => (
                    <SpotlightCard key={i} className="p-8 md:p-10 flex flex-col justify-between">
                        <div>
                            <div className="text-4xl font-serif font-black text-[#1a1918] opacity-40 mb-8 md:mb-10">{item.num}</div>
                            <div className="text-[#C48B68] font-serif text-4xl md:text-5xl font-bold mb-2 pb-1">{item.stat}</div>
                            <div className="text-[9px] tracking-[0.2em] uppercase text-white/30 font-bold mb-8 md:mb-10">{item.statDesc}</div>
                            <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4">{item.title}</h3>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed font-light">{item.desc}</p>
                    </SpotlightCard>
                ))}
            </StaggerReveal>
        </section>
    );
};

export default PhilosophySection;
