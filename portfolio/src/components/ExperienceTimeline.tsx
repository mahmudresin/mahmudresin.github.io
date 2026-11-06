import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "../data";

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-24 md:py-36 px-6 md:px-12 bg-neutral-950 text-white border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-baseline justify-between pb-8 mb-16 border-b border-white/[0.08]">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
            03 / CHRONOLOGY
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
            PROFESSIONAL & RESEARCH POSTS
          </span>
        </div>

        {/* Swiss Chronology Table */}
        <div className="space-y-0 divide-y divide-white/[0.08]">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="py-10 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group hover:bg-white/[0.02] -mx-4 px-4 transition-colors"
            >
              {/* Column 1: Period & Nature (3 cols) */}
              <div className="lg:col-span-3">
                <span className="font-mono text-xs text-neutral-400 tracking-[0.18em] uppercase block mb-1">
                  {exp.period}
                </span>
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest px-2 py-0.5 border border-white/10 inline-block">
                  {exp.type}
                </span>
              </div>

              {/* Column 2: Role & Organization (4 cols) */}
              <div className="lg:col-span-4">
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-white mb-1 group-hover:text-neutral-200 transition-colors">
                  {exp.company}
                </h3>
                <p className="font-mono text-xs tracking-[0.15em] text-neutral-400 uppercase">
                  {exp.role}
                </p>
              </div>

              {/* Column 3: Responsibilities & Deliverables (5 cols) */}
              <div className="lg:col-span-5">
                <ul className="space-y-3">
                  {exp.responsibilities.map((r, i) => (
                    <li
                      key={i}
                      className="text-sm font-sans text-neutral-300 leading-relaxed flex items-start gap-3"
                    >
                      <span className="font-mono text-neutral-400 mt-1 flex-shrink-0">—</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
