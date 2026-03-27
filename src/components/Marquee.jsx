import { motion } from 'framer-motion';

const Marquee = () => {
    return (
        <div className="relative w-full overflow-hidden bg-transparent text-white/20 py-6 flex items-center border-y border-white/5 mt-10">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center text-xs font-bold tracking-[0.3em] uppercase">
                        <span className="mx-8">Kairi Kana</span><span className="mx-2">•</span>
                        <span className="mx-8">Siren</span><span className="mx-2">•</span>
                        <span className="mx-8">Brajadhenta</span><span className="mx-2">•</span>
                        <span className="mx-8">Valeria</span><span className="mx-2">•</span>
                        <span className="mx-8">Rhovayne</span><span className="mx-2">•</span>
                        <span className="mx-8">Asverath</span><span className="mx-2">•</span>
                        <span className="mx-8">Morneth</span><span className="mx-2">•</span>
                        <span className="mx-8">Solenne</span><span className="mx-2">•</span>
                        <span className="mx-8">No Apps</span><span className="mx-2">•</span>
                        <span className="mx-8">No UI</span><span className="mx-2">•</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;
