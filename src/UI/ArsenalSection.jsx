import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import SpotlightCard from '../components/SpotlightCard';
import ALL_PRODUCTS from '../data/products';

/** Individual card wrapper that animates on scroll without breaking grid layout */
const AnimatedGridItem = ({ children, index, className = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.15 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const ArsenalSection = () => {
    return (
        <section id="products" className="py-20 md:py-32 px-4 md:px-6 lg:px-12 relative z-10 bg-[#0A0A0A] border-y border-white/5" aria-label="AI Agent Products">
            <div className="max-w-[90rem] mx-auto">
                <div className="mb-16 md:mb-20">
                    <ScrollReveal variant="fade-up" duration={0.6}>
                        <p className="text-[#C48B68] tracking-[0.3em] text-[10px] font-bold uppercase mb-6 md:mb-8">The Arsenal</p>
                    </ScrollReveal>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8">
                        <ScrollReveal variant="blur-up" duration={0.9} delay={0.1}>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gradient-accent leading-tight pb-2 max-w-3xl">Meet Your<br />AI Workforce.</h2>
                        </ScrollReveal>
                        <ScrollReveal variant="fade-up" delay={0.3}>
                            <p className="text-white/50 text-base md:text-lg max-w-md font-light pb-2">
                                Eight specialized agents. Each replaces an entire app, or an entire team. All from your chat.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>

                {/* LIVE products - bento grid with individual card animations */}
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 mb-4">
                    {ALL_PRODUCTS.filter(p => p.status === 'LIVE').map((product, idx) => (
                        <AnimatedGridItem key={idx} index={idx} className={product.gridClass}>
                            <a
                                href={product.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full"
                                aria-label={`Learn more about ${product.name}`}
                            >
                                <SpotlightCard className="p-6 md:p-10 group flex flex-col justify-between h-full">
                                    <div className="flex justify-between items-start mb-8 md:mb-12">
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#1f1a18] flex items-center justify-center group-hover:bg-[#C48B68]/20 group-hover:scale-110 transition-all duration-500">
                                            {product.icon}
                                        </div>
                                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C48B68]/30 bg-[#C48B68]/10 text-[#C48B68]">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#C48B68] animate-pulse"></div>
                                            <span className="text-[9px] tracking-[0.2em] font-bold uppercase">{product.status}</span>
                                        </div>
                                    </div>

                                    <div className="flex-1 flex flex-col justify-end">
                                        <h3 className={`font-serif font-bold text-white mb-2 group-hover:text-[#E5CDB3] transition-colors ${product.titleClass}`}>{product.name}</h3>
                                        <p className="text-[10px] tracking-[0.2em] font-bold text-[#C48B68] mb-4 uppercase">{product.subtitle}</p>
                                        <p className="text-white/40 text-sm md:text-base leading-relaxed font-light md:max-w-[85%]">
                                            {product.desc}
                                        </p>
                                    </div>
                                </SpotlightCard>
                            </a>
                        </AnimatedGridItem>
                    ))}
                </div>

                {/* BUILDING products - individual card animations preserving grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {ALL_PRODUCTS.filter(p => p.status === 'BUILDING').map((product, idx) => (
                        <AnimatedGridItem key={idx} index={idx} className={product.gridClass}>
                            <SpotlightCard className="p-5 md:p-8 group flex flex-col justify-between h-full opacity-70 hover:opacity-100">
                                <div className="flex justify-between items-start mb-6 md:mb-8">
                                    <div className="w-10 h-10 rounded-xl bg-black/50 border border-white/5 flex items-center justify-center group-hover:border-white/20 transition-colors">
                                        {product.icon}
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-amber-600/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                                        <span className="text-[9px] tracking-[0.2em] font-bold uppercase">{product.status}</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className={`font-serif font-bold text-white mb-1 group-hover:text-[#E5CDB3] transition-colors ${product.titleClass}`}>{product.name}</h3>
                                    <p className="text-[9px] tracking-[0.2em] font-bold text-[#C48B68] mb-3 uppercase">{product.subtitle}</p>
                                    <p className="text-white/40 text-sm leading-relaxed font-light">
                                        {product.desc}
                                    </p>
                                </div>
                            </SpotlightCard>
                        </AnimatedGridItem>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArsenalSection;
