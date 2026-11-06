import { motion } from "framer-motion";
import { personalInfo } from "../data";
import { scrollToTarget } from "../utils/smoothScroll";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero({ ready }: { ready: boolean }) {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between px-6 md:px-12 pt-32 pb-12 bg-neutral-950 text-white selection:bg-white selection:text-black border-b border-white/[0.08]">
      {/* Top Architectural Masthead Row */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-8 border-b border-white/[0.08] text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase"
      >
        <div className="md:col-span-3">
          <span className="text-neutral-400 block mb-1">AFFILIATION</span>
          <span className="text-white">TOI DLT FOUNDATION</span>
        </div>
        <div className="md:col-span-3">
          <span className="text-neutral-400 block mb-1">ROLE & SCOPE</span>
          <span className="text-white">RESEARCH ENGINEER // C++ & DLT</span>
        </div>
        <div className="md:col-span-3">
          <span className="text-neutral-400 block mb-1">CORE SPECIALIZATION</span>
          <span className="text-white">SYSTEMS · EMBEDDED · QUANTUM ML</span>
        </div>
        <div className="md:col-span-3 md:text-right">
          <span className="text-neutral-400 block mb-1">LOCATION & TIMEZONE</span>
          <span className="text-white">DHAKA, BD · UTC+6</span>
        </div>
      </motion.div>

      {/* Main Typographic Monograph */}
      <div className="py-12 md:py-20 max-w-6xl">
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal leading-[0.92] tracking-[-0.03em] text-white mb-10">
          <span className="block">Yeamin</span>
          <span className="block italic text-neutral-300 font-light">Mahmud</span>
          <span className="block">Resin</span>
        </h1>

        {/* Asymmetrical Split: Thesis & Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-baseline pt-4">
          <div className="lg:col-span-8">
            <p className="text-lg sm:text-xl md:text-2xl font-serif text-neutral-200 leading-snug font-light max-w-2xl">
              Architecting high-reliability systems across{" "}
              <span className="text-white font-normal underline underline-offset-4 decoration-white/30">
                distributed ledger protocols
              </span>
              , embedded sensor integrations, and applied quantum-classical algorithms.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
            <button
              onClick={() => scrollToTarget("#projects", -50)}
              className="px-6 py-3.5 bg-white text-black font-mono text-xs tracking-[0.2em] uppercase font-semibold hover:bg-neutral-200 transition-colors text-center"
            >
              Explore Selected Work
            </button>
            <a
              href={personalInfo.cvPath}
              download="Yeamin_Mahmud_Resin_CV.pdf"
              className="px-6 py-3.5 border border-white/20 text-white font-mono text-xs tracking-[0.2em] uppercase hover:border-white hover:bg-white/5 transition-colors text-center flex items-center justify-center gap-2 group"
            >
              <span>Download CV (PDF)</span>
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Status & Scroll Jump */}
      <div className="flex items-center justify-between text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase pt-6 border-t border-white/[0.08]">
        <div className="flex items-center gap-3">
          <span className="inline-block w-1.5 h-1.5 bg-white rounded-full" />
          <span>Active in Systems & Protocol Research</span>
        </div>

        <button
          onClick={() => scrollToTarget("#about", -60)}
          className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
        >
          <span>Scroll to Profile</span>
          <ArrowDown size={12} />
        </button>
      </div>
    </section>
  );
}
