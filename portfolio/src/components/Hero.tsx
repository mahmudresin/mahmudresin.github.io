import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ChevronRight, Download, Github, Linkedin, Terminal } from "lucide-react";
import { personalInfo } from "../data";
import { scrollToTarget } from "../utils/smoothScroll";

export function Hero({ ready }: { ready: boolean }) {
  // Mouse position for subtle parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax transform for background elements
  const bgTextX = useTransform(smoothMouseX, [-500, 500], [-35, 35]);
  const bgTextY = useTransform(smoothMouseY, [-500, 500], [-20, 20]);
  const geometryRotate = useTransform(smoothMouseX, [-500, 500], [-8, 8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 pt-28 pb-16 overflow-hidden bg-neutral-950 text-white selection:bg-white selection:text-black">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      {/* Oversized Outlined Background Typography with Mouse Parallax */}
      <motion.div
        style={{ x: bgTextX, y: bgTextY }}
        className="absolute -right-16 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-5 font-serif font-black text-[18vw] leading-none text-stroke-strong tracking-tighter hidden md:block whitespace-nowrap"
      >
        SYSTEMS
      </motion.div>

      {/* Floating Geometric Wireframe Ring */}
      <motion.div
        style={{ rotate: geometryRotate }}
        className="absolute right-12 lg:right-32 top-1/4 w-72 h-72 lg:w-96 lg:h-96 rounded-full border border-white/5 pointer-events-none hidden sm:flex items-center justify-center"
      >
        <div className="w-48 h-48 rounded-full border border-white/[0.07] border-dashed animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Eyebrow with Animated Hairline & Pulse */}
        <div className="flex items-center gap-4 mb-8">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-10 h-px bg-white origin-left"
          />
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-2.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span className="font-mono text-[11px] md:text-xs tracking-[0.3em] uppercase text-neutral-400">
              RESEARCH ENGINEER · TOI DLT FOUNDATION
            </span>
          </motion.div>
        </div>

        {/* Cinematic Name: Masked Word-by-Word Slide Reveal */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal leading-[0.95] tracking-tight text-white mb-8">
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "115%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              Yeamin
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "115%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block italic text-neutral-400 font-light"
            >
              Mahmud
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "115%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-white"
            >
              Resin
            </motion.span>
          </div>
        </h1>

        {/* Headline & Mission */}
        <div className="overflow-hidden mb-6 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl md:text-3xl font-serif text-neutral-200 leading-snug"
          >
            Building Intelligent Systems.{" "}
            <span className="italic text-neutral-400">Exploring Emerging Technologies.</span>
          </motion.p>
        </div>

        {/* Architectural Bio description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="text-sm md:text-base text-neutral-400 font-sans max-w-2xl leading-relaxed mb-12"
        >
          Specializing in C++, blockchain infrastructure protocols, embedded IoT architectures, and
          applied quantum-classical machine learning. Engineered with mathematical rigor and
          uncompromising reliability.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap items-center gap-5 mb-16"
        >
          <button
            onClick={() => scrollToTarget("#projects", -50)}
            className="group relative inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-xs font-mono tracking-[0.2em] uppercase font-semibold overflow-hidden hover:bg-neutral-200 transition-all duration-300"
          >
            <span>EXPLORE WORK</span>
            <ChevronRight
              size={15}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>

          <a
            href={personalInfo.cvPath}
            download="Yeamin_Mahmud_Resin_CV.pdf"
            className="group relative inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 text-xs font-mono tracking-[0.2em] uppercase font-medium hover:border-white hover:bg-white/5 transition-all duration-300"
          >
            <Download size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            <span>CURRICULUM VITAE</span>
          </a>

          <button
            onClick={() => scrollToTarget("#experience", -50)}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors tracking-widest uppercase px-4 py-3"
          >
            <Terminal size={14} />
            <span>VIEW EXPERIENCE</span>
          </button>
        </motion.div>

        {/* Social Links & Technical Coordinates */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="flex flex-wrap items-center justify-between border-t border-white/10 pt-8 gap-6 text-xs font-mono"
        >
          <div className="flex items-center gap-8">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors tracking-widest uppercase"
            >
              <Linkedin size={14} />
              <span className="relative">
                LINKEDIN
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors tracking-widest uppercase"
            >
              <Github size={14} />
              <span className="relative">
                GITHUB
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </span>
            </a>
          </div>

          <div className="text-neutral-500 font-mono text-[11px] tracking-widest uppercase">
            LOCATION: DHAKA, BD // TIMEZONE: UTC+6
          </div>
        </motion.div>
      </div>

      {/* Floating Understated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        onClick={() => scrollToTarget("#about", -60)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group select-none"
      >
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-neutral-500 group-hover:text-white transition-colors">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-neutral-500 group-hover:text-white transition-colors"
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
