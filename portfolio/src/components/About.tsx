import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo, aboutText } from "../data";
import { Cpu, ShieldCheck, Sparkles, Terminal } from "lucide-react";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  // 3D tilt effect on portrait card
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 15, y: -y * 15 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const stats = [
    { label: "EXPERIENCE", value: "3+", desc: "Years in systems & research" },
    { label: "PROJECTS", value: "04", desc: "Production & academic builds" },
    { label: "TECH STACK", value: "15+", desc: "C++, DLT, Python, Embedded" },
    { label: "GRADUATION", value: "82%", desc: "Academic CSE standing" },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-28 md:py-36 px-6 md:px-16 bg-neutral-950 text-white overflow-hidden border-t border-white/10"
    >
      {/* Background oversized word */}
      <div className="absolute right-0 top-20 text-[16vw] font-serif font-black text-stroke-white opacity-5 select-none pointer-events-none whitespace-nowrap">
        ABOUT
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header with Animated Hairline */}
        <div className="flex items-center gap-6 mb-16 md:mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
            01 // PROFILE & BACKGROUND
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 h-px bg-white/20 origin-left"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive 3D Tilt Portrait Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transition: "transform 0.15s ease-out",
            }}
          >
            <div className="relative border border-white/20 bg-neutral-900/60 p-4 md:p-6 backdrop-blur-sm group">
              {/* Corner crosshairs */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-white" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-white" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-white" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-white" />

              {/* Image Frame */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top filter grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />

                {/* Scanline / Grain Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                {/* Architectural badge at image bottom */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-white flex items-center gap-1.5">
                    <Terminal size={12} />
                    RESEARCH ENG.
                  </span>
                  <span className="text-neutral-400">TOI DLT FDN.</span>
                </div>
              </div>

              {/* Offset decorative border underneath */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-white/10 -z-10 pointer-events-none" />
            </div>

            {/* Quick Core Competencies Badges */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="border border-white/10 bg-neutral-900/40 p-3 flex items-center gap-2 text-xs font-mono text-neutral-300">
                <Cpu size={14} className="text-white" />
                <span>Low-Level Systems</span>
              </div>
              <div className="border border-white/10 bg-neutral-900/40 p-3 flex items-center gap-2 text-xs font-mono text-neutral-300">
                <ShieldCheck size={14} className="text-white" />
                <span>DLT & Protocols</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Bio & Structured Insights */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Title with Mask Reveal */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white mb-8 leading-[1.15]"
            >
              Architecting Reliable Systems at the Intersection of{" "}
              <span className="italic text-neutral-400">Hardware, Protocols & Intelligence</span>
            </motion.h2>

            {/* Staggered Paragraphs */}
            <div className="space-y-6 text-neutral-300 text-sm md:text-base leading-relaxed font-sans mb-12">
              {aboutText.split("\n\n").map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="border-l border-white/10 pl-4 py-1"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Architectural Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10"
            >
              {stats.map((stat, i) => (
                <div key={i} className="group">
                  <div className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 mb-1">
                    {stat.label}
                  </div>
                  <div className="font-serif text-3xl font-light text-white group-hover:text-neutral-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-neutral-400 font-sans mt-1">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

