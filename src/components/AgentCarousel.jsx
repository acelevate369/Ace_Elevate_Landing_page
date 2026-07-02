import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronLeft, ChevronRight, Lock, Pause, Play } from "lucide-react";

// Asset imports
import agentKairi from "../assets/agent-kairi.png";
import agentSiren from "../assets/agent-siren.png";
import agentBrajadhenta from "../assets/agent-brajadhenta.png";
import agentValeria from "../assets/agent-valeria.png";
import agentRhovayne from "../assets/agent-rhovayne.png";
import agentAsverath from "../assets/agent-asverath.png";
import agentMorneth from "../assets/agent-morneth.png";
import agentSolenne from "../assets/agent-solenne.png";

const AUTOPLAY_MS = 6500;

const agents = [
  {
    id: "001",
    codename: "KAIRI KANA",
    specialty: "Personal Assistant",
    tagline: "Kill The Chaos",
    dossier:
      "Your AI-driven personal operative. Tracks habits, monitors finances, reports directly to your chat. No dashboards. No noise.",
    capabilities: ["Habit Tracking", "Financial Ops", "Chat-Native"],
    clearance: "TELEGRAM",
    image: agentKairi,
    status: "live",
  },
  {
    id: "002",
    codename: "SIREN",
    specialty: "Email Marketing",
    tagline: "Silent Outreach, Loud Results",
    dossier:
      "Precision email operative. Crafts, personalizes, and deploys campaigns designed to turn cold contacts into loyal customers.",
    capabilities: ["Cold Outreach", "Auto-Personalize", "Deploy at Scale"],
    clearance: "EMAIL / SMTP",
    image: agentSiren,
    status: "live",
  },
  {
    id: "003",
    codename: "BRAJADHENTA",
    specialty: "Content Automation",
    tagline: "Write Once, Rank Forever",
    dossier:
      "Autonomous content operative. Researches trends, writes SEO-optimized articles, and publishes across your blog while you sleep.",
    capabilities: ["Topic Research", "SEO Writing", "Auto-Publish"],
    clearance: "CMS / WORDPRESS",
    image: agentBrajadhenta,
    status: "live",
  },
  {
    id: "004",
    codename: "VALERIA",
    specialty: "YouTube Automation",
    tagline: "Your Channel, Automated",
    dossier:
      "End-to-end video operative. Scripting, voice, visuals, scheduling — deploys a full content pipeline without human editing.",
    capabilities: ["Script Gen", "Voice & Visuals", "Auto-Schedule"],
    clearance: "YOUTUBE / STUDIO",
    image: agentValeria,
    status: "live",
  },
  {
    id: "005",
    codename: "RHOVAYNE",
    specialty: "Thread Automation",
    tagline: "Threads That Convert",
    dossier:
      "Social intelligence operative. Generates viral thread content and deploys it at scale across Threads, X, and beyond.",
    capabilities: ["Viral Ideation", "Thread Writing", "Scheduled Deploy"],
    clearance: "THREADS / X",
    image: agentRhovayne,
    status: "building",
  },
  {
    id: "006",
    codename: "ASVERATH",
    specialty: "Micro-Creator Leads",
    tagline: "Micro Audiences, Macro Revenue",
    dossier:
      "Reconnaissance operative. Infiltrates niche creator communities, identifies, qualifies, and extracts high-intent leads.",
    capabilities: ["Creator Discovery", "Qualification", "Data Extract"],
    clearance: "INSTAGRAM / TIKTOK",
    image: agentAsverath,
    status: "building",
  },
  {
    id: "007",
    codename: "MORNETH",
    specialty: "Maps Lead Generation",
    tagline: "Map The Opportunity",
    dossier:
      "Geographic intelligence operative. Sweeps Google Maps for local businesses, extracts contact data, organizes leads by territory.",
    capabilities: ["Geo Sweep", "Contact Extract", "Territory Map"],
    clearance: "GOOGLE MAPS API",
    image: agentMorneth,
    status: "building",
  },
  {
    id: "008",
    codename: "SOLENNE",
    specialty: "Appointment Generation",
    tagline: "Book While You Sleep",
    dossier:
      "Booking operative for freelancers. Finds prospects, drafts pitches, handles replies, and books discovery calls autonomously.",
    capabilities: ["Prospect Hunt", "Auto-Pitch", "Book Calls"],
    clearance: "CALENDAR / CRM",
    image: agentSolenne,
    status: "building",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Slide 1: Manifesto Hero
// ─────────────────────────────────────────────────────────────────────────────

const words = ["Stop", "Working", "For", "Your", "Apps."];

const ManifestoSlide = ({ active }) => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setVisibleCount(0);
      return;
    }
    const interval = setInterval(() => {
      setVisibleCount((c) => {
        if (c >= words.length) {
          clearInterval(interval);
          return c;
        }
        return c + 1;
      });
    }, 180);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="relative w-full h-full min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#080707] pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080707] via-[#080707]/30 to-[#080707]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080707]/60 via-transparent to-[#080707]/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-30 pointer-events-none" />
      
      {/* Natural Ambient Glow for Intro */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,139,104,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-12 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C48B68]/20 bg-[#C48B68]/5"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C48B68] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C48B68]" />
          </span>
          <span className="text-xs font-mono text-[#C48B68] tracking-[0.2em] uppercase">
            AI Automation Studio
          </span>
        </motion.div>

        <h1 className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[11.4rem] font-serif font-extrabold leading-[0.85] tracking-tighter w-full">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
              animate={
                i < visibleCount
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 80, filter: "blur(10px)" }
              }
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`inline-block mr-[0.2em] ${
                word === "Apps." ? "text-transparent bg-clip-text bg-gradient-to-br from-[#C48B68] to-[#E5CDB3] drop-shadow-[0_0_20px_rgba(196,139,104,0.3)]" : "text-white"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-base md:text-xl text-white/50 max-w-3xl mx-auto mt-12 mb-12 font-sans leading-relaxed"
        >
          We deliver AI automation through{" "}
          <span className="text-[#C48B68] font-medium">Telegram</span>.
          <br className="hidden sm:block" />
          No new apps. No UI. No fatigue. Just intelligence.
        </motion.p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Slides 2-9: Agent Dossier
// ─────────────────────────────────────────────────────────────────────────────

const AgentSlide = ({ agent, active, index, total }) => {
  const isLive = agent.status === "live";

  return (
    <div className="relative w-full h-full min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#080707] pt-24">
      {/* Backdrop Natural Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className={`absolute inset-0 ${
            isLive
              ? "bg-[radial-gradient(circle_at_center,rgba(196,139,104,0.1)_0%,transparent_70%)]"
              : "bg-[radial-gradient(circle_at_center,rgba(229,205,179,0.06)_0%,transparent_70%)]"
          }`}
        />
      </div>

      {/* Massive codename watermark background */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0 mt-20">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={active ? { opacity: 0.03, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-black text-[25vw] leading-none text-white whitespace-nowrap tracking-tighter select-none"
        >
          {agent.codename.split(" ")[0]}
        </motion.span>
      </div>

      <div className="relative z-10 w-full h-full max-w-screen-2xl mx-auto px-6 lg:px-12 flex flex-col justify-end lg:flex-row lg:items-center lg:justify-between pb-12 lg:pb-12 pt-16 lg:pt-0">
        
        {/* Left: Dossier text (Left side) */}
        <div className="w-full lg:w-[350px] flex-shrink-0 relative z-20 mt-auto lg:mt-10 self-center lg:self-start mb-6 lg:mb-0">
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#080707]/30 backdrop-blur-sm p-2 rounded-2xl"
              >
                {/* Meta line */}
                <div className="flex items-center gap-4 mb-4 font-mono text-[9px] tracking-[0.3em] uppercase">
                  <span className="w-4 h-px bg-[#C48B68]" />
                  <span className="text-white/50">Classified</span>
                  <span className="text-white">// Agt {agent.id}</span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border ${
                      isLive
                        ? "bg-[#C48B68]/10 text-[#C48B68] border-[#C48B68]/30"
                        : "bg-[#E5CDB3]/10 text-[#E5CDB3] border-[#E5CDB3]/30"
                    }`}
                  >
                    <span
                      className={`w-1 h-1 rounded-full ${
                        isLive
                          ? "bg-[#C48B68] shadow-[0_0_8px_#C48B68] animate-pulse"
                          : "bg-[#E5CDB3]"
                      }`}
                    />
                    {isLive ? "Deployed" : "In Training"}
                  </span>
                </div>

                {/* Specialty label */}
                <div className="mb-2">
                  <span
                    className={`font-mono text-[10px] tracking-[0.25em] uppercase ${
                      isLive ? "text-[#C48B68]" : "text-[#E5CDB3]"
                    }`}
                  >
                    {agent.specialty}
                  </span>
                </div>

                {/* Codename */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-[0.9] tracking-tighter mb-3 drop-shadow-xl">
                  {agent.codename.split(' ').map((part, i) => (
                      <span key={i} className="block">{part}</span>
                  ))}
                </h2>

                {/* Tagline */}
                <p className="font-serif italic text-base md:text-lg text-[#E5CDB3] mb-6">
                  "{agent.tagline}"
                </p>

                {/* Dossier */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/50">
                    Dossier
                  </span>
                  <div className="flex-1 h-px bg-white/10 max-w-[80px]" />
                </div>
                <p className="text-white/60 font-sans text-xs md:text-sm leading-relaxed mb-6 max-w-sm">
                  {agent.dossier}
                </p>

                {/* Clearance + CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
                  <a
                    href="#contact"
                    className={`group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-serif font-bold text-[10px] tracking-[0.15em] uppercase transition-all duration-500 ${
                      isLive
                        ? "bg-[#C48B68] text-black hover:bg-white hover:shadow-[0_0_40px_rgba(196,139,104,0.4)]"
                        : "border border-[#E5CDB3]/40 text-[#E5CDB3] hover:bg-[#E5CDB3]/10"
                    }`}
                  >
                    {isLive ? "Recruit Agent" : "Join Waitlist"}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Center: Character Portrait (Massive, centered) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-32 md:top-40 bottom-0 w-full max-w-[1400px] pointer-events-none flex justify-center items-end z-10 overflow-visible">
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full flex justify-center items-end origin-bottom"
              >
                {/* Natural Ambient Backlight */}
                <div
                  className={`absolute bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[140px] mix-blend-screen opacity-60 ${
                    isLive ? "bg-[#C48B68]" : "bg-[#E5CDB3]"
                  }`}
                />

                {/* Floor Shadow */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[70%] h-8 rounded-[50%] bg-black blur-2xl opacity-100" />

                <img
                  src={agent.image}
                  alt={`Agent ${agent.codename}`}
                  loading={index === 1 ? "eager" : "lazy"}
                  className="relative h-full w-auto object-contain object-bottom select-none scale-[1.15] 2xl:scale-[1.25] origin-bottom"
                  style={{
                    filter: isLive
                      ? "drop-shadow(0 -10px 50px rgba(196,139,104,0.25))"
                      : "drop-shadow(0 -10px 50px rgba(229,205,179,0.15))",
                  }}
                />

                {/* Scan line overlay */}
                <motion.div
                  initial={{ y: "-10%" }}
                  animate={{ y: "110%" }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className={`absolute left-[10%] right-[10%] h-px pointer-events-none ${
                    isLive
                      ? "bg-gradient-to-r from-transparent via-[#C48B68]/40 to-transparent"
                      : "bg-gradient-to-r from-transparent via-[#E5CDB3]/40 to-transparent"
                  }`}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: Specs / Capabilities (Right side) */}
        <div className="w-full lg:w-[280px] hidden lg:flex flex-col flex-shrink-0 relative z-20 self-center lg:self-end text-right mt-10">
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="bg-[#080707]/30 backdrop-blur-sm p-2 rounded-2xl flex flex-col items-end"
              >
                {/* Integration Details */}
                <div className="mb-8 w-full">
                  <div className="flex items-center justify-end gap-3 mb-3">
                    <div className="flex-1 h-px bg-white/10 max-w-[40px]" />
                    <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/50">
                      Primary Integration
                    </span>
                  </div>
                  <div className="text-white text-xl font-serif tracking-wider uppercase flex items-center justify-end gap-2">
                    <Lock className="w-4 h-4 text-[#C48B68]" />
                    {agent.clearance}
                  </div>
                </div>

                {/* Capabilities */}
                <div className="w-full">
                  <div className="flex items-center justify-end gap-3 mb-3">
                    <div className="flex-1 h-px bg-white/10 max-w-[40px]" />
                    <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/50">
                      System Capabilities
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    {agent.capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="px-4 py-2 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md text-white/90 text-xs font-mono tracking-widest uppercase hover:border-[#C48B68]/50 transition-colors w-fit"
                      >
                        {cap}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom code label */}
                <div className="mt-8 text-right w-full">
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/30">
                    UNIT {agent.id} / {String(total).padStart(3, "0")}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Carousel
// ─────────────────────────────────────────────────────────────────────────────

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });
  const [selected, setSelected] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const progressRef = useRef(null);

  const slides = [
    { type: "hero" },
    ...agents.map((a) => ({ type: "agent", agent: a })),
  ];
  const total = slides.length;

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi || isPaused) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      emblaApi.scrollNext();
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [emblaApi, selected, isPaused]);

  const scrollTo = (i) => emblaApi?.scrollTo(i);
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section
      className="relative w-full bg-[#080707] flex flex-col"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div ref={emblaRef} className="overflow-hidden w-full h-screen">
        <div className="flex h-full">
          {slides.map((slide, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 h-full">
              {slide.type === "hero" ? (
                <ManifestoSlide active={selected === i} />
              ) : (
                <AgentSlide
                  agent={slide.agent}
                  active={selected === i}
                  index={i}
                  total={total}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom control bar - Positioned statically below the 100vh fold */}
      <div className="w-full z-20 py-12 bg-gradient-to-b from-[#080707] to-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Progress bar */}
          <div className="mb-6 flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.25em] text-white/50 tabular-nums">
              {String(selected + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
              <motion.div
                key={`${selected}-${isPaused}`}
                ref={progressRef}
                initial={{ width: "0%" }}
                animate={{ width: isPaused ? "0%" : "100%" }}
                transition={{
                  duration: isPaused ? 0 : AUTOPLAY_MS / 1000,
                  ease: "linear",
                }}
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#C48B68] to-[#E5CDB3]"
              />
            </div>
            <span className="font-mono text-[10px] tracking-[0.25em] text-white/50 tabular-nums">
              {String(total).padStart(2, "0")}
            </span>
          </div>

          {/* Controls row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Dots / tabs */}
            <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-2 max-w-full">
              {slides.map((slide, i) => {
                const active = i === selected;
                const label = slide.type === "hero" ? "INTRO" : slide.agent.codename;
                return (
                  <button
                    key={i}
                    onClick={() => scrollTo(i)}
                    className={`group relative px-4 py-2 font-mono text-[10px] tracking-[0.2em] uppercase transition-all duration-500 whitespace-nowrap rounded-full ${
                      active
                        ? "text-[#C48B68] bg-[#C48B68]/10 border border-[#C48B68]/20"
                        : "text-white/40 hover:text-white hover:bg-white/5 border border-transparent"
                    }`}
                    aria-label={`Go to slide ${label}`}
                  >
                    {slide.type === "hero" ? "01 · INTRO" : `${String(i + 1).padStart(2, "0")} · ${slide.agent.codename.split(" ")[0]}`}
                  </button>
                );
              })}
            </div>

            {/* Nav buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPaused((p) => !p)}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-[#C48B68]/40 hover:bg-[#C48B68]/10 flex items-center justify-center transition-all duration-300 backdrop-blur-md"
                aria-label={isPaused ? "Play" : "Pause"}
              >
                {isPaused ? (
                  <Play className="w-4 h-4 text-white" />
                ) : (
                  <Pause className="w-4 h-4 text-white" />
                )}
              </button>
              <div className="flex items-center gap-2 border border-white/10 rounded-full p-1 backdrop-blur-md">
                <button
                  onClick={scrollPrev}
                  className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={scrollNext}
                  className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-all duration-300"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
