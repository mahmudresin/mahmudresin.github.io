import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CinematicLoaderProps {
  onComplete: () => void;
}

export function CinematicLoader({ onComplete }: CinematicLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Smooth high-frequency counter simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 850);
          }, 200);
          return 100;
        }
        // Organic non-linear acceleration
        const increment = Math.max(1, Math.floor(Math.random() * 8) + 2);
        return Math.min(100, prev + increment);
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.9,
              ease: [0.77, 0, 0.175, 1],
            },
          }}
          className="fixed inset-0 z-[10000] bg-black text-white flex flex-col justify-between p-8 md:p-14 select-none overflow-hidden"
        >
          {/* Subtle architectural background grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          {/* Top metadata row */}
          <div className="flex items-center justify-between z-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-neutral-400">
                SYSTEM // INITIALIZATION
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-mono text-[11px] tracking-[0.25em] text-neutral-500 hidden sm:block"
            >
              RESIN.PORTFOLIO.2025
            </motion.div>
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
                {/* Outer rotating coordinate ring */}
                <motion.circle
                  cx="60"
                  cy="60"
                  r="56"
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                />

                {/* Animated decorative corner marks */}
                <path d="M12 28 V12 H28" stroke="white" strokeWidth="1.5" />
                <path d="M108 28 V12 H92" stroke="white" strokeWidth="1.5" />
                <path d="M12 92 V108 H28" stroke="white" strokeWidth="1.5" />
                <path d="M108 92 V108 H92" stroke="white" strokeWidth="1.5" />

                {/* YMR Monogram Typographic Path */}
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

            {/* Name with character reveal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-center"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-white mb-2">
                Yeamin Mahmud Resin
              </h2>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-neutral-400">
                Research Engineer · Systems Architecture
              </p>
            </motion.div>
          </div>

          {/* Bottom ticker & progress bar */}
          <div className="relative z-10 max-w-xl mx-auto w-full">
            <div className="flex items-end justify-between font-mono text-xs mb-3 text-neutral-400">
              <span className="tracking-widest">LOADING ARCHIVE</span>
              <span className="text-xl font-light text-white font-serif">
                {String(progress).padStart(2, "0")}%
              </span>
            </div>

            {/* Hairline progress bar */}
            <div className="w-full h-px bg-neutral-800 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-white"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-neutral-600 mt-2 tracking-widest uppercase">
              <span>LAT: 23.8103° N</span>
              <span>BUFFERING STATE</span>
              <span>LON: 90.4125° E</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

