import { Terminal, Send, MessageCircle, Sparkles, Activity, Users, MapPin, Calendar } from 'lucide-react';

export const getProducts = (lang) => [
    {
        name: 'Kairi Kana',
        subtitle: lang === 'id' ? 'BUNUH KEKACAUAN' : 'KILL THE CHAOS',
        desc: lang === 'id' 
            ? 'AI Agentik yang didukung oleh 16 agen khusus, mulai dari audit keuangan hingga pemetaan jadwal. Foto duniamu dan biarkan Kairi mengatur hidupmu, langsung dari chat. Tanpa aplikasi rumit.'
            : 'An Agentic AI powered by 16 specialized agents, from financial auditing to schedule mapping. Snap your world and let Kairi organize your life, right from your chat. No complex apps needed.',
        icon: <Sparkles className="text-[#C48B68]" size={24} />,
        status: 'LIVE',
        gridClass: 'md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[400px]',
        titleClass: 'text-4xl md:text-5xl',
        url: 'https://kairikana.vercel.app/'
    },
    {
        name: 'Siren',
        subtitle: lang === 'id' ? 'JANGKAUAN SENYAP, HASIL NYARING' : 'SILENT OUTREACH, LOUD RESULTS',
        desc: lang === 'id'
            ? 'Mesin email marketing AI. Membuat, mempersonalisasi, dan mengirim kampanye yang mengkonversi.'
            : 'AI email marketing engine. Crafts, personalizes, and sends campaigns that convert.',
        icon: <Send className="text-[#C48B68]" size={20} />,
        status: 'LIVE',
        gridClass: 'md:col-span-1 md:row-span-1',
        titleClass: 'text-2xl',
        url: 'https://t.me/6285753442122'
    },
    {
        name: 'Brajadhenta',
        subtitle: lang === 'id' ? 'TULIS SEKALI, RANKING SELAMANYA' : 'WRITE ONCE, RANK FOREVER',
        desc: lang === 'id'
            ? 'Auto-blogger yang meneliti, menulis, dan menerbitkan konten SEO saat kamu tidur.'
            : 'Auto-blogger that researches, writes, and publishes SEO content while you sleep.',
        icon: <Terminal className="text-[#C48B68]" size={20} />,
        status: 'LIVE',
        gridClass: 'md:col-span-1 md:row-span-1',
        titleClass: 'text-2xl',
        url: 'https://t.me/6285753442122'
    },
    {
        name: 'Valeria',
        subtitle: lang === 'id' ? 'SALURAN ANDA, TEROTOMATISASI' : 'YOUR CHANNEL, AUTOMATED',
        desc: lang === 'id'
            ? 'Otomatisasi YouTube penuh, dari penulisan naskah hingga penjadwalan. Bangun kerajaan konten tanpa tangan.'
            : 'Full YouTube automation, from scripting to scheduling. Build a content empire hands-free.',
        icon: <Activity className="text-[#C48B68]" size={20} />,
        status: 'LIVE',
        gridClass: 'md:col-span-2 md:row-span-1',
        titleClass: 'text-2xl',
        url: '/valeria'
    },
    {
        name: 'Rhovayne',
        subtitle: lang === 'id' ? 'UTAS YANG MENGKONVERSI' : 'THREADS THAT CONVERT',
        desc: lang === 'id'
            ? 'Otomatisasi utas untuk platform sosial. Hasilkan konten viral dalam skala besar.'
            : 'Thread automation for social platforms. Generate viral content at scale.',
        icon: <MessageCircle className="text-white/40 group-hover:text-[#C48B68] transition-colors" size={20} />,
        status: 'BUILDING',
        gridClass: 'md:col-span-1',
        titleClass: 'text-xl'
    },
    {
        name: 'Asverath',
        subtitle: lang === 'id' ? 'AUDIENS MIKRO, PENDAPATAN MAKRO' : 'MICRO AUDIENCES, MACRO REVENUE',
        desc: lang === 'id'
            ? 'Prospek kreator mikro. Temukan dan kualifikasi prospek dari kreator niche secara otomatis.'
            : 'Micro-creator lead gen. Find and qualify leads from niche creators automatically.',
        icon: <Users className="text-white/40 group-hover:text-[#C48B68] transition-colors" size={20} />,
        status: 'BUILDING',
        gridClass: 'md:col-span-1',
        titleClass: 'text-xl'
    },
    {
        name: 'Morneth',
        subtitle: lang === 'id' ? 'PETAKAN PELUANG' : 'MAP THE OPPORTUNITY',
        desc: lang === 'id'
            ? 'Prospek Google Maps autopilot. Ekstrak dan atur prospek berbasis lokasi.'
            : 'Google Maps lead gen on autopilot. Extract and organize location-based leads.',
        icon: <MapPin className="text-white/40 group-hover:text-[#C48B68] transition-colors" size={20} />,
        status: 'BUILDING',
        gridClass: 'md:col-span-1',
        titleClass: 'text-xl'
    },
    {
        name: 'Solenne',
        subtitle: lang === 'id' ? 'PESAN SAAT ANDA TIDUR' : 'BOOK WHILE YOU SLEEP',
        desc: lang === 'id'
            ? 'Prospek janji temu lepas. AI menemukan prospek, menawarkan, dan memesan panggilan untukmu.'
            : 'Freelance appointment gen. AI finds prospects, pitches, and books calls for you.',
        icon: <Calendar className="text-white/40 group-hover:text-[#C48B68] transition-colors" size={20} />,
        status: 'BUILDING',
        gridClass: 'md:col-span-1',
        titleClass: 'text-xl'
    }
];

export default getProducts;
