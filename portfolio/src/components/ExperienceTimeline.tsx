import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { experiences } from "../data";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 60%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-28 md:py-36 px-6 md:px-16 bg-neutral-950 text-white border-t border-white/10 overflow-hidden"
    >
      {/* Background oversized word */}
      <div className="absolute left-4 top-24 text-[14vw] font-serif font-black text-stroke-white opacity-5 select-none pointer-events-none whitespace-nowrap">
        EXPERIENCE
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
            02 // CHRONOLOGY & ROLES
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 h-px bg-white/20 origin-left"
          />
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-12">
          {/* Static Background Line */}
          <div className="absolute left-0 top-3 bottom-0 w-px bg-white/10" />

          {/* Animated Scroll Progress Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-0 top-3 w-px bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"
          />

          {/* Experience Items */}
          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => (
              <TimelineCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  exp,
  index,
}: {
  exp: {
    id: string;
    company: string;
    role: string;
    period: string;
    type: string;
    responsibilities: string[];
  };
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: 30 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative group"
    >
      {/* Timeline Node on Left Hairline */}
      <div className="absolute -left-[31px] md:-left-[55px] top-1.5 flex items-center justify-center">
        <div className="w-3.5 h-3.5 rounded-full bg-neutral-950 border-2 border-neutral-600 group-hover:border-white group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-white transition-colors" />
        </div>
      </div>

      {/* Card Body */}
      <div className="border border-white/10 bg-neutral-900/30 p-6 md:p-8 backdrop-blur-sm group-hover:border-white/30 group-hover:bg-neutral-900/60 transition-all duration-500">
        {/* Top Metadata Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase flex items-center gap-1.5">
              <Calendar size={13} />
              {exp.period}
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-600" />
            <span className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 border border-white/15 bg-white/5 text-neutral-300">
              {exp.type}
            </span>
          </div>

          <span className="font-mono text-xs text-neutral-500">
            RECORD #{String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Role & Company */}
        <h3 className="font-serif text-2xl md:text-3xl font-light text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
          {exp.role}
        </h3>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400 mb-6 flex items-center gap-2">
          <Briefcase size={13} />
          {exp.company}
        </p>

        {/* Responsibilities with Animated Bullet Checkpoints */}
        <div className="space-y-3 pt-4 border-t border-white/10">
          {exp.responsibilities.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
              className="flex items-start gap-3 text-sm text-neutral-300 font-sans leading-relaxed"
            >
              <ChevronRight
                size={14}
                className="mt-1 text-neutral-500 group-hover:text-white transition-colors flex-shrink-0"
              />
              <span>{r}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

