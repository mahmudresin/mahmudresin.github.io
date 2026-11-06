import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CinematicLoaderProps {
  onComplete: () => void;
}

export function CinematicLoader({ onComplete }: CinematicLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1000; // 1s brisk editorial entrance

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const current = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(current);

      if (current >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          onComplete();
        }, 120);
      }
    }, 20);

    const safety = setTimeout(() => {
      clearInterval(timer);
      setIsDone(true);
      onComplete();
    }, 1200);

    return () => {
      clearInterval(timer);
      clearTimeout(safety);
    };
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
              duration: 0.8,
              ease: [0.77, 0, 0.175, 1],
            },
          }}
          className="fixed inset-0 z-[10000] bg-black text-white flex flex-col justify-between p-8 md:p-16 select-none"
        >
          {/* Masthead Header */}
          <div className="flex items-center justify-between text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
            <span>YEAMIN MAHMUD RESIN</span>
            <span>RESEARCH & ENGINEERING</span>
          </div>

          {/* Centerpiece: Clean Typographic Index */}
          <div className="my-auto flex flex-col items-center">
            <span className="font-serif text-6xl sm:text-8xl md:text-9xl font-light text-white tracking-tight">
              {String(progress).padStart(2, "0")}
            </span>
            <div className="w-24 h-px bg-white/20 mt-6 relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-white transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-neutral-500 uppercase">
            <span>DHAKA · UTC+6</span>
            <span>MONOGRAPH · 2026</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
