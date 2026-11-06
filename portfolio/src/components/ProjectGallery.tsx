import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "../data";
import {
  WearableHealthVisual,
  MarsQuantumVisual,
  LocalConnectVisual,
  PokerSimulatorVisual,
} from "./ProjectGenerativeVisuals";
import { ArrowUpRight, ChevronDown, Github } from "lucide-react";

// In-depth technical architecture notes for each genuine project
const projectArchitectures: Record<
  string,
  {
    architecture: string;
    highlights: string[];
    roleAndScope: string;
  }
> = {
  wearable: {
    architecture:
      "Interrupt-driven I2C/SPI sensor bus executing on microcontroller firmware. Implemented digital moving-average filters and low-power telemetry aggregation.",
    highlights: [
      "Interfaced MAX30102 PPG optical sensor with real-time SPO2 and heart-rate peak detection algorithm.",
      "Calibrated 9-DOF LSM9DS1 IMU sensor with quaternion-based motion analysis.",
      "Built custom NMEA GPS sentence parser over hardware serial DMA.",
    ],
    roleAndScope: "Sole Hardware & Embedded Software Engineer",
  },
  mars: {
    architecture:
      "Hybrid Quantum-Classical Neural Network leveraging parameterized quantum circuits (PQC) in Google Cirq and TensorFlow Quantum for hyperspectral planetary terrain classification.",
    highlights: [
      "Designed 8-qubit variational quantum circuits with entangling CNOT ladders and parametric single-qubit rotations.",
      "Benchmarked classical CNN vs. quantum variational classifier under noisy intermediate-scale quantum (NISQ) conditions.",
      "Preprocessed high-resolution Martian terrain elevation datasets from orbital imagery.",
    ],
    roleAndScope: "Quantum Research & ML Engineer",
  },
  localconnect: {
    architecture:
      "Distributed healthcare locum marketplace platform with asynchronous webhook reconciliation, role-based access control, and automated compliance verification.",
    highlights: [
      "Engineered secure payment escrow handling healthcare shifts via Stripe Connect.",
      "Implemented real-time database subscriptions and instant booking synchronization with Supabase.",
      "Built rigorous professional verification pipeline validating medical license credentials.",
    ],
    roleAndScope: "Full-Stack Software Engineer (Payments & Architecture)",
  },
  poker: {
    architecture:
      "Probabilistic game-tree search engine employing Expectiminimax with alpha-beta heuristic pruning and Monte Carlo variance reduction for imperfect-information games.",
    highlights: [
      "Modeled recursive game tree accounting for opponent hand range distributions and pot odds.",
      "Conducted 100,000+ simulation runs evaluating Nash equilibrium convergence across diverse table dynamics.",
      "Visualized strategy matrix with pandas, NumPy, and dynamic matplotlib analytics.",
    ],
    roleAndScope: "Algorithm Designer & Researcher",
  },
};

export function ProjectGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-24 md:py-36 px-6 md:px-12 bg-neutral-950 text-white border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-baseline justify-between pb-8 mb-16 border-b border-white/[0.08]">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
            02 / SELECTED WORKS
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
            APPLIED SYSTEMS & RESEARCH CATALOGUE
          </span>
        </div>

        {/* Editorial Project Rows */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => {
            const details = projectArchitectures[project.id];
            const isExpanded = expandedId === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="border border-white/[0.08] bg-black/40 p-6 md:p-10 hover:border-white/20 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Metadata & Narrative */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      {/* Top Meta Line */}
                      <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-neutral-400 uppercase mb-4">
                        <span className="text-white font-serif text-lg font-normal">
                          0{index + 1}
                        </span>
                        <span>/</span>
                        <span>{project.category}</span>
                      </div>

                      {/* Project Title */}
                      <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 leading-tight">
                        {project.title}
                      </h3>

                      {/* Authentic Description */}
                      <p className="text-sm md:text-base font-sans text-neutral-300 leading-relaxed mb-6 max-w-xl">
                        {project.description}
                      </p>

                      {/* Tech Stack in Clean Typographic Brackets */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[11px] text-neutral-300 px-2.5 py-1 border border-white/10 bg-white/[0.03]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.06]">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-white hover:underline underline-offset-4"
                      >
                        <Github size={14} />
                        <span>View Repository</span>
                        <ArrowUpRight size={12} />
                      </a>

                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase text-neutral-400 hover:text-white transition-colors"
                      >
                        <span>{isExpanded ? "Hide Architecture" : "Technical Specs"}</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Authentic Technical Visualizer */}
                  <div className="lg:col-span-6">
                    {project.id === "wearable" && <WearableHealthVisual />}
                    {project.id === "mars" && <MarsQuantumVisual />}
                    {project.id === "localconnect" && <LocalConnectVisual />}
                    {project.id === "poker" && <PokerSimulatorVisual />}
                  </div>
                </div>

                {/* Expandable Technical Deep Dive Drawer */}
                <AnimatePresence>
                  {isExpanded && details && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden mt-8 pt-8 border-t border-white/[0.08]"
                    >
                      <div className="bg-neutral-900/50 p-6 border border-white/10 space-y-4">
                        <div>
                          <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase block mb-1">
                            SYSTEM DESIGN & PROTOCOL
                          </span>
                          <p className="text-sm font-sans text-neutral-200 leading-relaxed">
                            {details.architecture}
                          </p>
                        </div>

                        <div>
                          <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase block mb-2">
                            KEY ENGINEERING HIGHLIGHTS
                          </span>
                          <ul className="space-y-1.5 text-xs font-sans text-neutral-300">
                            {details.highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-neutral-500 font-mono">—</span>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-2 text-[11px] font-mono text-neutral-400">
                          ENGINEER SCOPE: {details.roleAndScope}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
