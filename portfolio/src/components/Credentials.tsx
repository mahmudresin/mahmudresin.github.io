import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education, achievements, certifications, researchInterests } from "../data";

export function Credentials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="research"
      ref={containerRef}
      className="relative py-24 md:py-36 px-6 md:px-12 bg-neutral-950 text-white border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-baseline justify-between pb-8 mb-16 border-b border-white/[0.08]">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
            05 / ACADEMIC LEDGER & RESEARCH VECTORS
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
            FORMAL QUALIFICATIONS & THEORETICAL INQUIRY
          </span>
        </div>

        {/* Academic Ledger: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-white/[0.08]">
          {/* Left Column: Formal Degrees (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-neutral-400 block pb-2 border-b border-white/10">
              ACADEMIC DEGREES
            </span>

            <div className="space-y-8">
              {education.map((edu, i) => (
                <div key={edu.id} className="space-y-1">
                  <div className="flex justify-between items-baseline text-xs font-mono text-neutral-400">
                    <span>{edu.period}</span>
                    <span>0{i + 1}</span>
                  </div>
                  <h4 className="font-serif text-2xl font-light text-white">
                    {edu.institution}
                  </h4>
                  <p className="text-sm font-sans text-neutral-300">
                    {edu.degree}
                  </p>
                  {edu.specialization && (
                    <p className="text-xs font-mono text-neutral-400">
                      Focus: {edu.specialization}
                    </p>
                  )}
                  {edu.result && (
                    <span className="inline-block mt-2 font-mono text-xs px-2.5 py-0.5 border border-white/20 text-neutral-200">
                      {edu.result}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Honors & Certifications (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-neutral-400 block pb-2 border-b border-white/10">
              HONORS & VERIFIED CREDENTIALS
            </span>

            <div className="space-y-6">
              {/* Honors */}
              {achievements.map((item, i) => (
                <div key={i} className="flex justify-between items-baseline border-b border-white/[0.06] pb-3">
                  <div>
                    <h5 className="font-serif text-lg font-light text-white">
                      {item.title}
                    </h5>
                    <p className="text-xs font-mono text-neutral-400 mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
                    HONOR
                  </span>
                </div>
              ))}

              {/* Certifications */}
              {certifications.map((cert, i) => (
                <div key={i} className="flex justify-between items-baseline border-b border-white/[0.06] pb-3">
                  <div>
                    <h5 className="font-serif text-base font-light text-neutral-200">
                      {cert.title}
                    </h5>
                    <p className="text-xs font-mono text-neutral-400 mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
                    VERIFIED
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Half: Research Vectors (Theoretical Frontiers) */}
        <div className="pt-16">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-neutral-400 block mb-2">
              THEORETICAL FRONTIERS
            </span>
            <h3 className="font-serif text-3xl font-light text-white leading-snug">
              Active Research Vectors & Disciplines
            </h3>
          </div>

          {/* Typographic Research Catalogue */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchInterests.map((interest, i) => (
              <motion.div
                key={interest}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="border border-white/[0.08] p-5 hover:border-white/30 transition-colors bg-black/40 flex flex-col justify-between min-h-[130px]"
              >
                <span className="font-mono text-[11px] text-neutral-400">0{i + 1}</span>
                <span className="font-serif text-lg font-light text-white leading-tight">
                  {interest}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
