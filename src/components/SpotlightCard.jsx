import { useRef, useState } from 'react';

const SpotlightCard = ({ children, className = "" }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className={`relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#0f0e0d] transition-colors hover:border-white/10 ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
                style={{ opacity, background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(196, 139, 104, 0.1), transparent 40%)` }}
            />
            <div className="relative z-10 h-full w-full">{children}</div>
        </div>
    );
};

export default SpotlightCard;
