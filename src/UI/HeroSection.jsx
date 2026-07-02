import React from 'react';
import AgentCarousel from '../components/AgentCarousel';

const HeroSection = () => {
    return (
        <main className="relative w-full min-h-screen bg-[#080707]">
            {/* The Agent Carousel IS the Hero Section now */}
            <AgentCarousel />
        </main>
    );
};

export default HeroSection;
