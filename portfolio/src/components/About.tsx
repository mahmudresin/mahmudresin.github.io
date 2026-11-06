import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo, aboutText } from "../data";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  const ledger = [
    { label: "PRIMARY POST", value: "Research Engineer at TOI DLT Foundation" },
    { label: "CORE LANGUAGES", value: "C, Modern C++, Python, Java" },
    { label: "SPECIALIZATION", value: "Distributed Infrastructure, Embedded IoT, Quantum ML" },
    { label: "EDUCATION", value: "B.Sc. in CSE (82% Standing) · M.Sc. in CSE (In Progress)" },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 md:py-36 px-6 md:px-12 bg-neutral-950 text-white border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-baseline justify-between pb-8 mb-16 border-b border-white/[0.08]">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
            01 / CURATORIAL PROFILE
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
            ENGINEERING & RESEARCH BIOGRAPHY
          </span>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Portrait & Formal Ledger */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative border border-white/15 p-2 bg-black">
              <div className="aspect-[4/5] overflow-hidden bg-neutral-900">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top filter grayscale contrast-125 brightness-95 hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="text-[11px] font-mono text-neutral-400 tracking-[0.15em] uppercase border-b border-white/[0.08] pb-3">
              FIG. 01 — YEAMIN MAHMUD RESIN · RESEARCH ARCHIVE
            </div>

            {/* Architectural Ledger Table */}
            <div className="space-y-4 pt-2">
              {ledger.map((item, i) => (
                <div key={i} className="border-b border-white/[0.06] pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
                    {item.label}
                  </span>
                  <span className="font-sans text-neutral-200 text-left sm:text-right font-medium">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Thesis & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white mb-10 leading-[1.18] tracking-tight"
            >
              Methodical investigation into{" "}
              <span className="italic text-neutral-300">low-level systems</span>, distributed
              gateways, and emerging computational paradigms.
            </motion.h2>

            <div className="space-y-6 text-neutral-300 text-sm md:text-base leading-[1.85] font-sans max-w-2xl mb-12">
              {aboutText.split("\n\n").map((para, i) => (
                <p key={i} className="text-neutral-300">
                  {para}
                </p>
              ))}
            </div>

            {/* Core Values Quote */}
            <div className="p-6 border-l border-white/30 bg-neutral-900/30">
              <p className="font-serif italic text-base text-neutral-200 leading-relaxed mb-2">
                "I approach engineering problems with a methodical mindset, valuing reliability,
                clarity, and mathematical correctness in code, protocol specifications, and system
                documentation."
              </p>
              <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
                YEAMIN MAHMUD RESIN · ENGINEERING ETHOS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
