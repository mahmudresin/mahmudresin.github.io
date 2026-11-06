import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "../data";
import { ArrowUp, ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { scrollToTarget } from "../utils/smoothScroll";

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Live Dhaka local time ticker with safe error handling
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
      } catch (err) {
        // Fallback to local time string if timezone not recognized
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
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  const words = ["LET'S", "BUILD", "SOMETHING", "MEANINGFUL."];

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative pt-32 pb-20 px-6 md:px-16 bg-black text-white border-t border-white/10 overflow-hidden"
    >
      {/* Background oversized word */}
      <div className="absolute left-1/2 -translate-x-1/2 top-10 text-[18vw] font-serif font-black text-stroke-white opacity-5 select-none pointer-events-none whitespace-nowrap">
        COLLABORATE
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-6 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
            07 // INITIATE DIALOGUE
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 h-px bg-white/20 origin-left"
          />
        </div>

        {/* Dramatic Headline: "LET'S BUILD SOMETHING MEANINGFUL." */}
        <div className="mb-14 overflow-hidden">
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.05]">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-3 md:mr-6">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={inView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2 + i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`inline-block ${
                    word === "SOMETHING" ? "italic text-neutral-400 font-light" : ""
                  }`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>
        </div>

        {/* Subtitle & Availability Status */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed mb-8 max-w-xl">
              Available for research engineering collaborations, core systems architecture, protocol
              development, and innovative technical endeavors worldwide.
            </p>

            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/20 bg-neutral-900/60 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              <span className="font-mono text-xs text-neutral-300 uppercase tracking-widest">
                AVAILABLE // CONTRACT & FULL-TIME ROLES 2025–2026
              </span>
            </div>
          </motion.div>

          {/* Timezone & Coordinate card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="lg:col-span-5 border border-white/15 bg-neutral-900/40 p-6 backdrop-blur-sm"
          >
            <div className="flex justify-between items-center font-mono text-xs text-neutral-400 mb-4 pb-2 border-b border-white/10">
              <span>LOCATION & TIMEZONE</span>
              <span>DHAKA, BANGLADESH</span>
            </div>
            <div className="flex items-baseline justify-between">
              <div>
                <span className="font-mono text-[10px] text-neutral-500 block uppercase">
                  LOCAL SYSTEM TIME (UTC+6)
                </span>
                <span className="font-mono text-2xl text-white tracking-widest">
                  {currentTime || "12:00:00"}
                </span>
              </div>
              <span className="px-2 py-1 bg-white/10 text-[10px] font-mono text-neutral-300 uppercase">
                BST ACTIVE
              </span>
            </div>
          </motion.div>
        </div>

        {/* Interactive Direct Contact Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="border-t border-b border-white/15 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-20"
        >
          {/* Email Click & Copy */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
              DIRECT DISPATCH
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="font-serif text-2xl sm:text-3xl md:text-4xl text-white hover:text-neutral-300 transition-colors tracking-tight underline underline-offset-8 decoration-white/30 hover:decoration-white"
              >
                {personalInfo.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-3.5 py-2 border border-white/20 bg-neutral-900 text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-green-400" />
                    <span>COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Send Email Action Button */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-xs font-mono tracking-[0.2em] uppercase font-semibold hover:bg-neutral-200 transition-colors"
          >
            <Mail size={15} />
            <span>SEND EMAIL</span>
            <ArrowUpRight
              size={15}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </motion.div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-white/10 bg-neutral-900/30 p-6 flex items-center justify-between hover:border-white/40 hover:bg-neutral-900/60 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <Linkedin size={18} className="text-white" />
              <div>
                <span className="font-mono text-xs text-neutral-400 block tracking-widest uppercase">
                  NETWORK
                </span>
                <span className="font-serif text-lg text-white">LinkedIn</span>
              </div>
            </div>
            <ArrowUpRight
              size={16}
              className="text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-white/10 bg-neutral-900/30 p-6 flex items-center justify-between hover:border-white/40 hover:bg-neutral-900/60 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <Github size={18} className="text-white" />
              <div>
                <span className="font-mono text-xs text-neutral-400 block tracking-widest uppercase">
                  SOURCE CODE
                </span>
                <span className="font-serif text-lg text-white">GitHub</span>
              </div>
            </div>
            <ArrowUpRight
              size={16}
              className="text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          </a>

          <a
            href={personalInfo.cvPath}
            download="Yeamin_Mahmud_Resin_CV.pdf"
            className="group border border-white/10 bg-neutral-900/30 p-6 flex items-center justify-between hover:border-white/40 hover:bg-neutral-900/60 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 border border-white flex items-center justify-center font-mono text-[9px] text-white">
                CV
              </div>
              <div>
                <span className="font-mono text-xs text-neutral-400 block tracking-widest uppercase">
                  DOSSIER
                </span>
                <span className="font-serif text-lg text-white">Curriculum Vitae</span>
              </div>
            </div>
            <ArrowUpRight
              size={16}
              className="text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          </a>
        </div>

        {/* Footer Area with Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-white/10 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} YEAMIN MAHMUD RESIN. ENGINEERED WITH MATHEMATICAL RIGOR.
          </div>

          <button
            onClick={() => scrollToTarget(0)}
            className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
          >
            <span className="tracking-widest uppercase">RETURN TO TOP</span>
            <div className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white group-hover:-translate-y-1 transition-all">
              <ArrowUp size={12} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
