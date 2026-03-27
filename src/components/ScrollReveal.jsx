import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * ScrollReveal — premium scroll-triggered animation wrapper.
 * Supports multiple animation presets for a $50M startup feel.
 *
 * @param {'fade-up'|'fade-down'|'fade-left'|'fade-right'|'scale'|'blur'|'flip'} variant
 * @param {number} delay - seconds
 * @param {number} duration - seconds
 * @param {boolean} once - trigger only once
 */
const presets = {
    'fade-up': { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
    'fade-down': { hidden: { opacity: 0, y: -60 }, visible: { opacity: 1, y: 0 } },
    'fade-left': { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } },
    'fade-right': { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } },
    'scale': { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } },
    'blur': { hidden: { opacity: 0, filter: 'blur(12px)' }, visible: { opacity: 1, filter: 'blur(0px)' } },
    'blur-up': { hidden: { opacity: 0, y: 40, filter: 'blur(10px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)' } },
    'flip': { hidden: { opacity: 0, rotateX: 30, y: 30 }, visible: { opacity: 1, rotateX: 0, y: 0 } },
};

const ScrollReveal = ({
    children,
    variant = 'fade-up',
    delay = 0,
    duration = 0.7,
    once = true,
    className = '',
    threshold = 0.15,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const { hidden, visible } = presets[variant] || presets['fade-up'];

    return (
        <motion.div
            ref={ref}
            initial={hidden}
            animate={isInView ? visible : hidden}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94], // premium easeOutQuart
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

/**
 * StaggerReveal — reveals children one by one with stagger delay.
 * Wrap around a list of items for a cascading reveal effect.
 */
export const StaggerReveal = ({
    children,
    variant = 'fade-up',
    stagger = 0.12,
    duration = 0.6,
    once = true,
    className = '',
    threshold = 0.1,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const { hidden, visible } = presets[variant] || presets['fade-up'];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: stagger,
            },
        },
    };

    const itemVariants = {
        hidden,
        visible: {
            ...visible,
            transition: {
                duration,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={className}
        >
            {Array.isArray(children)
                ? children.map((child, i) => (
                    <motion.div key={i} variants={itemVariants}>
                        {child}
                    </motion.div>
                ))
                : children}
        </motion.div>
    );
};

export default ScrollReveal;
