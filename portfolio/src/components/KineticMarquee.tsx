export function KineticMarquee() {
  const itemsTop = [
    "ENGINEERING",
    "RESEARCH",
    "INNOVATION",
    "TECHNOLOGY",
    "BLOCKCHAIN INFRASTRUCTURE",
    "EMBEDDED SYSTEMS",
    "INTELLIGENT COMPUTATION",
  ];

  const itemsBottom = [
    "C++ ARCHITECTURE",
    "DISTRIBUTED PROTOCOLS",
    "QUANTUM CIRCUITS",
    "MACHINE LEARNING",
    "SYSTEM RELIABILITY",
    "RPC GATEWAYS",
    "ALGORITHMIC MODELING",
  ];

  return (
    <div className="relative py-12 md:py-16 overflow-hidden bg-black border-y border-white/10 select-none">
      {/* Top Track: Solid & Dim Contrast */}
      <div className="overflow-hidden mb-3">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {[...itemsTop, ...itemsTop, ...itemsTop].map((item, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="font-serif text-2xl md:text-4xl font-light tracking-wider text-neutral-300 hover:text-white transition-colors">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Track: Reverse Outlined Architectural Typography */}
      <div className="overflow-hidden">
        <div className="animate-marquee-reverse flex items-center gap-12 whitespace-nowrap">
          {[...itemsBottom, ...itemsBottom, ...itemsBottom].map((item, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="font-serif text-2xl md:text-4xl font-light tracking-wider text-stroke-white hover:text-neutral-300 transition-colors">
                {item}
              </span>
              <span className="w-1.5 h-1.5 bg-neutral-700 rotate-45" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

