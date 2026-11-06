import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education, achievements, certifications } from "../data";
import { Award, GraduationCap, CheckCircle2, ShieldCheck } from "lucide-react";

export function Credentials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={containerRef}
      className="relative py-28 md:py-36 px-6 md:px-16 bg-neutral-950 text-white border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-16 md:mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
            05 // EDUCATION & CREDENTIALS
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 h-px bg-white/20 origin-left"
          />
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap size={18} className="text-white" />
            <h3 className="font-serif text-2xl font-light text-white">Academic Qualifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="border-t-2 border-white bg-neutral-900/30 p-8 backdrop-blur-sm border-x border-b border-white/10 hover:border-white/30 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase">
                    {edu.period}
                  </span>
                  <span className="font-mono text-xs text-neutral-600">0{i + 1}</span>
                </div>
                <h4 className="font-serif text-2xl font-light text-white mb-2 group-hover:text-neutral-200 transition-colors">
                  {edu.institution}
                </h4>
                <p className="text-sm font-sans text-neutral-300 mb-4">{edu.degree}</p>
                {edu.result && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-xs font-mono text-white">
                    <CheckCircle2 size={12} />
                    <span>{edu.result}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements & Certifications Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Column 1: Honors & Achievements */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award size={18} className="text-white" />
              <h3 className="font-serif text-2xl font-light text-white">Honors & Competitions</h3>
            </div>

            <div className="space-y-4">
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
                  className="border border-white/10 bg-neutral-900/20 p-5 flex items-start gap-4 hover:border-white/30 transition-colors group"
                >
                  <span className="font-mono text-xs text-neutral-500 mt-1">
                    0{i + 1}
                  </span>
                  <div>
                    <h5 className="font-serif text-lg font-light text-white mb-1 group-hover:text-neutral-100 transition-colors">
                      {item.title}
                    </h5>
                    <p className="text-xs font-mono text-neutral-400">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Professional Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck size={18} className="text-white" />
              <h3 className="font-serif text-2xl font-light text-white">Verified Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
                  className="border border-white/10 bg-neutral-900/20 p-5 flex items-start justify-between gap-4 hover:border-white/30 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-neutral-500 mt-1">
                      0{i + 1}
                    </span>
                    <div>
                      <h5 className="font-serif text-base font-light text-white mb-1 group-hover:text-neutral-100 transition-colors">
                        {cert.title}
                      </h5>
                      <p className="text-xs font-mono text-neutral-400">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 border border-white/15 bg-white/5 text-neutral-400">
                    VERIFIED
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

