import { Terminal, Send, MessageCircle, Sparkles, Activity, Users, MapPin, Calendar } from 'lucide-react';

const ALL_PRODUCTS = [
    {
        name: 'Kairi Kana',
        subtitle: 'KILL THE CHAOS',
        desc: 'An Agentic AI powered by 16 specialized agents, from financial auditing to schedule mapping. Snap your world and let Kairi organize your life, right from your chat. No complex apps needed.',
        icon: <Sparkles className="text-[#C48B68]" size={24} />,
        status: 'LIVE',
        gridClass: 'md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[400px]',
        titleClass: 'text-4xl md:text-5xl',
        url: 'https://kairikana.vercel.app/'
    },
    {
        name: 'Siren',
        subtitle: 'SILENT OUTREACH, LOUD RESULTS',
        desc: 'AI email marketing engine. Crafts, personalizes, and sends campaigns that convert.',
        icon: <Send className="text-[#C48B68]" size={20} />,
        status: 'LIVE',
        gridClass: 'md:col-span-1 md:row-span-1',
        titleClass: 'text-2xl',
        url: 'https://wa.me/6285753442122?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Agent%20Siren'
    },
    {
        name: 'Brajadhenta',
        subtitle: 'WRITE ONCE, RANK FOREVER',
        desc: 'Auto-blogger that researches, writes, and publishes SEO content while you sleep.',
        icon: <Terminal className="text-[#C48B68]" size={20} />,
        status: 'LIVE',
        gridClass: 'md:col-span-1 md:row-span-1',
        titleClass: 'text-2xl',
        url: 'https://wa.me/6285753442122?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Agent%20Brajadhenta'
    },
    {
        name: 'Valeria',
        subtitle: 'YOUR CHANNEL, AUTOMATED',
        desc: 'Full YouTube automation, from scripting to scheduling. Build a content empire hands-free.',
        icon: <Activity className="text-[#C48B68]" size={20} />,
        status: 'LIVE',
        gridClass: 'md:col-span-2 md:row-span-1',
        titleClass: 'text-2xl',
        url: 'https://wa.me/6285753442122?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Agent%20Valeria'
    },
    {
        name: 'Rhovayne',
        subtitle: 'THREADS THAT CONVERT',
        desc: 'Thread automation for social platforms. Generate viral content at scale.',
        icon: <MessageCircle className="text-white/40 group-hover:text-[#C48B68] transition-colors" size={20} />,
        status: 'BUILDING',
        gridClass: 'md:col-span-1',
        titleClass: 'text-xl'
    },
    {
        name: 'Asverath',
        subtitle: 'MICRO AUDIENCES, MACRO REVENUE',
        desc: 'Micro-creator lead gen. Find and qualify leads from niche creators automatically.',
        icon: <Users className="text-white/40 group-hover:text-[#C48B68] transition-colors" size={20} />,
        status: 'BUILDING',
        gridClass: 'md:col-span-1',
        titleClass: 'text-xl'
    },
    {
        name: 'Morneth',
        subtitle: 'MAP THE OPPORTUNITY',
        desc: 'Google Maps lead gen on autopilot. Extract and organize location-based leads.',
        icon: <MapPin className="text-white/40 group-hover:text-[#C48B68] transition-colors" size={20} />,
        status: 'BUILDING',
        gridClass: 'md:col-span-1',
        titleClass: 'text-xl'
    },
    {
        name: 'Solenne',
        subtitle: 'BOOK WHILE YOU SLEEP',
        desc: 'Freelance appointment gen. AI finds prospects, pitches, and books calls for you.',
        icon: <Calendar className="text-white/40 group-hover:text-[#C48B68] transition-colors" size={20} />,
        status: 'BUILDING',
        gridClass: 'md:col-span-1',
        titleClass: 'text-xl'
    }
];

export default ALL_PRODUCTS;
