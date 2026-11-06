import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "../data";
import {
  WearableHealthVisual,
  MarsQuantumVisual,
  LocalConnectVisual,
  PokerSimulatorVisual,
} from "./ProjectGenerativeVisuals";
import { ArrowUpRight, Github, X, Terminal, Cpu, CheckCircle } from "lucide-react";

// Technical architecture details for modal inspection
const projectArchitectures: Record<
  string,
  {
    architecture: string;
    highlights: string[];
    roleAndScope: string;
    protocolOrStack: string;
  }
> = {
  wearable: {
    architecture:
      "Interrupt-driven I2C sensor bus running on embedded microcontrollers with real-time digital filtering (bandpass, moving average) and low-power state telemetry.",
    highlights: [
      "Interfaced MAX30102 PPG sensor with real-time SPO2 and heart-rate peak detection algorithm.",
      "Calibrated 9-DOF LSM9DS1 IMU sensor with quaternion-based posture analysis.",
      "Integrated NMEA GPS packet parsing for outdoor telemetry streaming.",
    ],
    roleAndScope: "Sole Hardware & Embedded Software Engineer",
    protocolOrStack: "C++, Arduino I2C/SPI, Hardware Interrupts, Serial DMA",
  },
  mars: {
    architecture:
      "Hybrid Quantum-Classical Neural Network (QNN) leveraging parameterized quantum circuits (PQC) in Cirq and TensorFlow Quantum for hyperspectral planetary terrain classification.",
    highlights: [
      "Constructed 8-qubit variational quantum circuits with entanglement entropy optimization.",
      "Benchmarked classical CNN vs. quantum variational classifier under noisy intermediate-scale quantum (NISQ) conditions.",
      "Trained on high-resolution Martian topographic elevation data.",
    ],
    roleAndScope: "Quantum Research Lead & ML Engineer",
    protocolOrStack: "Python, TensorFlow Quantum, Cirq, SciPy, Jupyter",
  },
  localconnect: {
    architecture:
      "Distributed healthcare locum marketplace platform with asynchronous webhook reconciliation, role-based access control, and automated compliance verification.",
    highlights: [
      "Engineered secure payment escrow flow handling locum healthcare shifts via Stripe Connect.",
      "Implemented real-time database subscriptions and instant booking synchronization with Supabase.",
      "Built rigorous professional verification pipeline validating medical license credentials.",
    ],
    roleAndScope: "Full-Stack Software Engineer (Payments & Architecture)",
    protocolOrStack: "React, TypeScript, Supabase, PostgreSQL, Stripe Connect",
  },
  poker: {
    architecture:
      "Probabilistic game-tree search engine employing Expectiminimax with alpha-beta heuristic pruning and Monte Carlo variance reduction for imperfect-information games.",
    highlights: [
      "Designed recursive game tree modeling opponent hand range distributions and pot odds.",
      "Conducted 100,000+ simulation runs evaluating Nash equilibrium convergence across diverse table dynamics.",
      "Visualized strategy matrix with pandas, NumPy, and dynamic matplotlib analytics.",
    ],
    roleAndScope: "Algorithm Designer & Researcher",
    protocolOrStack: "Python, NumPy, Pandas, Game Theory, Monte Carlo",
  },
};

export function ProjectGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedProject = projects.find((p) => p.id === selectedProjectId);
  const selectedDetails = selectedProjectId ? projectArchitectures[selectedProjectId] : null;

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-28 md:py-36 px-6 md:px-16 bg-neutral-950 text-white border-t border-white/10 overflow-hidden"
    >
      {/* Background oversized word */}
      <div className="absolute right-4 top-24 text-[14vw] font-serif font-black text-stroke-white opacity-5 select-none pointer-events-none whitespace-nowrap">
        PROJECTS
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-16 md:mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
            03 // SELECTED ARCHITECTURES
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 h-px bg-white/20 origin-left"
          />
        </div>

        {/* 2x2 Interactive Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onInspect={() => setSelectedProjectId(project.id)}
            />
          ))}
        </div>
      </div>

      {/* Deep Architecture Inspection Modal */}
      <AnimatePresence>
        {selectedProject && selectedDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProjectId(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-neutral-900 border border-white/20 p-6 md:p-10 text-white max-h-[90vh] overflow-y-auto"
            >
              {/* Corner crosshairs */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-white" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedProjectId(null)}
                className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400 block mb-2">
                  {selectedProject.category} // ARCHITECTURE BLUEPRINT
                </span>
                <h3 className="font-serif text-3xl font-light text-white leading-tight">
                  {selectedProject.title}
                </h3>
              </div>

              {/* System Architecture description */}
              <div className="mb-6 border-l-2 border-white pl-4 py-1">
                <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 block mb-1">
                  SYSTEM ARCHITECTURE
                </span>
                <p className="text-sm font-sans text-neutral-200 leading-relaxed">
                  {selectedDetails.architecture}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="mb-6 space-y-2.5">
                <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 block mb-2">
                  TECHNICAL ACHIEVEMENTS
                </span>
                {selectedDetails.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300 font-sans">
                    <CheckCircle size={14} className="mt-0.5 text-white flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 block mb-2">
                  TECHNOLOGY STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white/5 border border-white/15 text-xs font-mono text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <span className="font-mono text-xs text-neutral-500">
                  ROLE: {selectedDetails.roleAndScope}
                </span>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-2.5 text-xs font-mono tracking-widest uppercase hover:bg-neutral-200 transition-colors"
                >
                  <Github size={14} />
                  <span>VIEW CODE</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onInspect,
}: {
  project: {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    github: string;
    category: string;
  };
  index: number;
  onInspect: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-60px" });

  const renderVisual = () => {
    switch (project.id) {
      case "wearable":
        return <WearableHealthVisual isHovered={isHovered} />;
      case "mars":
        return <MarsQuantumVisual isHovered={isHovered} />;
      case "localconnect":
        return <LocalConnectVisual isHovered={isHovered} />;
      case "poker":
        return <PokerSimulatorVisual isHovered={isHovered} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="view"
      className="group relative border border-white/10 bg-neutral-900/30 backdrop-blur-sm p-6 md:p-8 flex flex-col justify-between hover:border-white/30 hover:bg-neutral-900/60 transition-all duration-500"
    >
      <div>
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-light text-neutral-500 group-hover:text-white transition-colors">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-600" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
              {project.category}
            </span>
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
          >
            <Github size={13} />
            <span className="tracking-widest uppercase">REPO</span>
            <ArrowUpRight size={12} />
          </a>
        </div>

        {/* Generative Visual Component */}
        <div className="mb-6">{renderVisual()}</div>

        {/* Project Title */}
        <h3 className="font-serif text-2xl md:text-3xl font-light text-white mb-3 group-hover:text-neutral-100 transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-sm font-sans text-neutral-400 leading-relaxed mb-6 group-hover:text-neutral-300 transition-colors">
          {project.description}
        </p>
      </div>

      <div>
        {/* Technology Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono text-neutral-400 bg-white/5 border border-white/10 px-2.5 py-1 tracking-wide group-hover:border-white/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Inspect Blueprint Button */}
        <button
          onClick={onInspect}
          className="w-full flex items-center justify-between py-3 px-4 border border-white/15 bg-black/40 hover:bg-white hover:text-black text-xs font-mono uppercase tracking-[0.2em] transition-all duration-300 group/btn"
        >
          <span className="flex items-center gap-2">
            <Terminal size={13} />
            INSPECT BLUEPRINT & SPECS
          </span>
          <ArrowUpRight
            size={13}
            className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
          />
        </button>
      </div>
    </motion.div>
  );
}

