import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "../data";
import { ArrowUp, ArrowUpRight, Check, Copy } from "lucide-react";
import { scrollToTarget } from "../utils/smoothScroll";

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      try {
        const timeStr = now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Dhaka",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        setCurrentTime(timeStr);
      } catch {
        setCurrentTime(now.toTimeString().slice(0, 8));
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    try {
      navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative pt-24 pb-16 px-6 md:px-12 bg-neutral-950 text-white border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-baseline justify-between pb-8 mb-16 border-b border-white/[0.08]">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
            06 / INITIATE DIALOGUE
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
            COLLABORATION & RESEARCH INQUIRY
          </span>
        </div>

        {/* Monumental Editorial Headline */}
        <div className="mb-16 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[-0.03em] text-white leading-[0.98]"
          >
            Let's build <span className="italic font-light text-neutral-300">something</span>{" "}
            meaningful.
          </motion.h2>
        </div>

        {/* 2-Column Functional Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-white/[0.08]">
          {/* Left Column: Direct Dispatch & Time (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-base sm:text-lg font-sans text-neutral-300 max-w-xl leading-relaxed">
              Open to research collaborations, core engineering roles, and technical discussions
              concerning distributed systems, embedded architectures, and intelligent computation.
            </p>

            {/* Email Dispatch Box */}
            <div className="border border-white/15 p-6 bg-black/60 max-w-xl space-y-3">
              <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase block">
                DIRECT ELECTRONIC MAIL
              </span>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-serif text-xl sm:text-2xl text-white hover:text-neutral-300 transition-colors underline underline-offset-4 decoration-white/20"
                >
                  {personalInfo.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 border border-white/20 hover:border-white font-mono text-xs uppercase tracking-wider text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-white" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* System Status & Timezone */}
            <div className="flex flex-wrap items-baseline gap-6 text-xs font-mono text-neutral-400 uppercase tracking-wider pt-2">
              <div>
                <span>LOCAL TIME: </span>
                <span className="text-white">{currentTime || "12:00:00"} BST (UTC+6)</span>
              </div>
              <span>/</span>
              <div>
                <span>STATUS: </span>
                <span className="text-white">AVAILABLE FOR 2026 ENGAGEMENTS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Channels & Index (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-neutral-400 block pb-2 border-b border-white/10 mb-4">
              CHANNELS & NETWORKS
            </span>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10 p-4 flex items-center justify-between hover:border-white hover:bg-white hover:text-black transition-colors group"
            >
              <span className="font-mono text-xs tracking-wider uppercase">LinkedIn Network</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10 p-4 flex items-center justify-between hover:border-white hover:bg-white hover:text-black transition-colors group"
            >
              <span className="font-mono text-xs tracking-wider uppercase">GitHub Repositories</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={personalInfo.cvPath}
              download="Yeamin_Mahmud_Resin_CV.pdf"
              className="border border-white/10 p-4 flex items-center justify-between hover:border-white hover:bg-white hover:text-black transition-colors group"
            >
              <span className="font-mono text-xs tracking-wider uppercase">Curriculum Vitae (PDF)</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Colophon & Return to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-baseline justify-between gap-4 text-xs font-mono text-neutral-400 tracking-wider">
          <div>
            © {new Date().getFullYear()} YEAMIN MAHMUD RESIN · MONOGRAPH EDITION
          </div>

          <button
            onClick={() => scrollToTarget(0)}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>RETURN TO SUMMIT</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </section>
  );
}
