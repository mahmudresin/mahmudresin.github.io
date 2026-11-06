export function KineticMarquee() {
  const statement = [
    "DETERMINISTIC SYSTEMS",
    "LOW-LEVEL INTEGRATION",
    "DISTRIBUTED PROTOCOLS",
    "QUANTUM MACHINE LEARNING",
    "EMBEDDED ARCHITECTURE",
    "MATHEMATICAL RIGOR",
  ];

  return (
    <div className="relative py-6 md:py-8 overflow-hidden bg-black border-b border-white/[0.08] select-none">
      <div className="animate-ticker flex items-center gap-12 whitespace-nowrap">
        {[...statement, ...statement, ...statement].map((text, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-serif text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-neutral-300 hover:text-white transition-colors">
              {text}
            </span>
            <span className="font-mono text-xs text-neutral-400">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
