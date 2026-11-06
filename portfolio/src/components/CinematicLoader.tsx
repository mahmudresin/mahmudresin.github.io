import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CinematicLoaderProps {
  onComplete: () => void;
}

export function CinematicLoader({ onComplete }: CinematicLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Fast, guaranteed-completion progress counter
    const startTime = Date.now();
    const duration = 1200; // 1.2s total intro

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const current = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(current);

      if (current >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          onComplete();
        }, 150);
      }
    }, 25);

    // Hard fallback safety: ensure dismissal after 1.5s no matter what
    const safety = setTimeout(() => {
      clearInterval(timer);
      setIsDone(true);
      onComplete();
    }, 1500);

    return () => {
      clearInterval(timer);
      clearTimeout(safety);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.7,
              ease: [0.77, 0, 0.175, 1],
            },
          }}
          className="fixed inset-0 z-[10000] bg-black text-white flex flex-col justify-between p-8 md:p-14 select-none overflow-hidden"
        >
          {/* Subtle architectural background grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          {/* Top metadata row */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-neutral-400">
                SYSTEM // INITIALIZATION
              </span>
            </div>
            <div className="font-mono text-[11px] tracking-[0.25em] text-neutral-500 hidden sm:block">
              RESIN.PORTFOLIO.2025
            </div>
          </div>

          {/* Centerpiece: Animated Monogram & Identity */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto">
            {/* SVG Monogram with animated stroke paths */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-8">
              <svg
                viewBox="0 0 120 120"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="56"
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                />
                <path d="M12 28 V12 H28" stroke="white" strokeWidth="1.5" />
                <path d="M108 28 V12 H92" stroke="white" strokeWidth="1.5" />
                <path d="M12 92 V108 H28" stroke="white" strokeWidth="1.5" />
                <path d="M108 92 V108 H92" stroke="white" strokeWidth="1.5" />

                <text
                  x="50%"
                  y="54%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="font-serif font-medium text-3xl tracking-widest fill-white"
                >
                  YMR
                </text>
              </svg>
            </div>

            <div className="text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-white mb-2">
                Yeamin Mahmud Resin
              </h2>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-neutral-400">
                Research Engineer · Systems Architecture
              </p>
            </div>
          </div>

          {/* Bottom ticker & progress bar */}
          <div className="relative z-10 max-w-xl mx-auto w-full">
            <div className="flex items-end justify-between font-mono text-xs mb-3 text-neutral-400">
              <span className="tracking-widest">LOADING ARCHIVE</span>
              <span className="text-xl font-light text-white font-serif">
                {String(progress).padStart(2, "0")}%
              </span>
            </div>

            <div className="w-full h-px bg-neutral-800 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 bottom-0 bg-white transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-neutral-600 mt-2 tracking-widest uppercase">
              <span>LAT: 23.8103° N</span>
              <span>STATE READY</span>
              <span>LON: 90.4125° E</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
