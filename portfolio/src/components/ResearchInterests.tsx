import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { researchInterests } from "../data";
import { Atom, Cpu, Network, Shield, Binary, Sparkles, Database } from "lucide-react";

export function ResearchInterests() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  const icons = [
    <Database size={18} />,
    <Cpu size={18} />,
    <Sparkles size={18} />,
    <Binary size={18} />,
    <Atom size={18} />,
    <Network size={18} />,
    <Shield size={18} />,
  ];

  return (
    <section
      id="research"
      ref={containerRef}
      className="relative py-28 md:py-36 px-6 md:px-16 bg-neutral-950 text-white border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-16 md:mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
            06 // INQUIRY & SPECIALIZATIONS
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 h-px bg-white/20 origin-left"
          />
        </div>

        {/* Section Headline */}
        <div className="mb-12 max-w-3xl">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-4xl font-light text-white leading-tight mb-4"
          >
            Research Vectors & Theoretical Frontiers
          </motion.h3>
          <p className="font-sans text-sm text-neutral-400 leading-relaxed">
            Investigating distributed protocols, low-level hardware constraints, and non-classical
            computational architectures to engineer resilient, high-throughput systems.
          </p>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {researchInterests.map((interest, i) => (
            <motion.div
              key={interest}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="border border-white/10 bg-neutral-900/30 p-6 flex flex-col justify-between hover:border-white/40 hover:bg-neutral-900/70 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-neutral-400 group-hover:text-white transition-colors">
                    {icons[i] || <Atom size={18} />}
                  </span>
                  <span className="font-mono text-xs text-neutral-600 group-hover:text-neutral-400 transition-colors">
                    0{i + 1}
                  </span>
                </div>
                <h4 className="font-serif text-xl font-light text-white group-hover:translate-x-1 transition-transform duration-300">
                  {interest}
                </h4>
              </div>

              <div className="w-full h-px bg-white/10 group-hover:bg-white/40 transition-colors mt-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

