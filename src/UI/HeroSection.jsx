import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';
import ScrollReveal from '../components/ScrollReveal';

const HeroSection = () => {
    const { scrollYProgress } = useScroll();
    const yOrbs = useTransform(scrollYProgress, [0, 1], [0, 500]);

    return (
        <section className="relative min-h-screen pt-32 md:pt-40 pb-20 flex flex-col items-center justify-center overflow-hidden" aria-label="Hero">
            <motion.div style={{ y: yOrbs }} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#C48B68] rounded-full blur-[150px] opacity-[0.1] animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-[#E5CDB3] rounded-full blur-[120px] opacity-[0.08]"></div>
            </motion.div>

            <div className="absolute inset-0 bg-grid opacity-60 [mask-image:linear-gradient(to_bottom,black_20%,transparent_90%)] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center w-full max-w-7xl px-4">
                {/* Stacked typography with pb to prevent descender clipping */}
                <div className="flex flex-col items-center justify-center font-serif font-bold tracking-tight leading-none w-full text-center mb-6 md:mb-10 relative px-2">
                    <motion.div initial={{ opacity: 0, y: 40, filter: "blur(20px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1, delay: 0.1, ease: "easeOut" }} className="w-full pb-1">
                        <span className="text-gradient-accent text-[15vw] sm:text-[14vw] md:text-[12vw] lg:text-[11rem] xl:text-[13rem] block drop-shadow-2xl">Stop</span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 40, filter: "blur(20px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} className="w-full pb-1">
                        <span className="text-gradient-accent text-[13vw] sm:text-[12vw] md:text-[11vw] lg:text-[10rem] xl:text-[12rem] block drop-shadow-2xl">Working</span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 40, filter: "blur(20px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} className="w-full pb-1">
                        <span className="text-gradient-accent text-[11vw] sm:text-[10vw] md:text-[9vw] lg:text-[8rem] xl:text-[9.5rem] block drop-shadow-2xl opacity-90">For Your</span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 40, filter: "blur(20px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1, delay: 0.7, ease: "easeOut" }} className="relative w-full pb-2">
                        <div className="absolute inset-0 bg-[#C48B68] blur-[100px] opacity-30 animate-pulse pointer-events-none"></div>
                        <span className="text-gradient-accent text-[16vw] sm:text-[15vw] md:text-[13vw] lg:text-[12rem] xl:text-[14rem] block drop-shadow-2xl relative z-10">Apps.</span>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}
                    className="text-base md:text-2xl text-white/50 max-w-2xl font-light leading-relaxed mb-10 md:mb-12 relative z-10 mt-2 md:mt-8 px-4"
                >
                    We deliver AI automation through <span className="text-[#C48B68] font-medium">WhatsApp</span> & <span className="text-[#C48B68] font-medium">Telegram</span>.<br />
                    No new apps. No UI. No fatigue. Just intelligence.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-20 relative z-10 w-full sm:w-auto px-4 sm:px-0"
                >
                    <a href="#products" className="px-8 py-4 bg-[#C48B68] text-black rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-all text-center">Explore The Arsenal</a>
                    <a href="#philosophy" className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:border-white transition-all text-center">Our Manifesto</a>
                </motion.div>

                {/* Stats Row */}
                <ScrollReveal variant="fade-up" delay={0.2}>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-32 text-center">
                        <div className="flex flex-col items-center gap-2">
                            <AnimatedCounter from={0} to={8} />
                            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-white/40">AI Agents</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="font-serif text-5xl md:text-7xl font-bold text-[#E5CDB3]">0</span>
                            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-white/40">Apps Needed</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="font-serif text-5xl md:text-7xl font-bold text-[#E5CDB3]">∞</span>
                            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-white/40">Time Saved</span>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default HeroSection;
