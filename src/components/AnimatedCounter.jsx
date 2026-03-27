import { useState, useEffect } from 'react';
import { animate, useMotionValue } from 'framer-motion';

// Animated Number Counter
const AnimatedCounter = ({ from, to, duration = 2, prefix = "", suffix = "" }) => {
    const count = useMotionValue(from);
    const [displayValue, setDisplayValue] = useState(from);

    useEffect(() => {
        const animation = animate(count, to, {
            duration: duration,
            ease: "easeOut",
            onUpdate: (latest) => setDisplayValue(Math.round(latest)),
        });
        return animation.stop;
    }, [to, duration, count]);

    return <span className="font-serif text-5xl md:text-7xl font-bold text-[#E5CDB3]">{prefix}{displayValue}{suffix}</span>;
};

export default AnimatedCounter;
