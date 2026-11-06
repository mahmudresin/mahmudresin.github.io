import { motion } from "framer-motion";
import { Activity, Compass, Cpu, GitBranch, Layers, Radio, Shield, Waves } from "lucide-react";

interface VisualProps {
  isHovered: boolean;
}

/**
 * 1. Multi-Sensor Wearable Health Watch
 * Monochromatic ECG Waveform & Sensor Telemetry Visualizer
 */
export function WearableHealthVisual({ isHovered }: VisualProps) {
  return (
    <div className="relative w-full h-48 md:h-56 bg-neutral-950 border border-white/10 overflow-hidden flex flex-col justify-between p-4 font-mono select-none">
      {/* Background Telemetry Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25" />

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex items-center justify-between text-[10px] text-neutral-400">
        <div className="flex items-center gap-2">
          <Activity size={12} className={isHovered ? "text-white animate-pulse" : "text-neutral-500"} />
          <span>REAL-TIME BIOMETRIC TELEMETRY</span>
        </div>
        <span className="px-1.5 py-0.5 border border-white/15 bg-white/5 text-neutral-300">
          MAX30102 // LSM9DS1
        </span>
      </div>

      {/* Centerpiece: Animated ECG / PPG Waveform */}
      <div className="relative z-10 w-full h-20 flex items-center">
        <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
          {/* Reference baseline */}
          <line x1="0" y1="50" x2="500" y2="50" stroke="rgba(255, 255, 255, 0.1)" strokeDasharray="4 4" />
          {/* ECG Pulse Path */}
          <motion.path
            d="M 0 50 L 80 50 L 95 48 L 105 52 L 115 50 L 135 50 L 145 20 L 155 85 L 165 40 L 175 58 L 185 50 L 260 50 L 275 48 L 285 52 L 295 50 L 315 50 L 325 15 L 335 90 L 345 35 L 355 58 L 365 50 L 500 50"
            fill="none"
            stroke="white"
            strokeWidth={isHovered ? "2" : "1.5"}
            className="animate-ecg"
          />
        </svg>

        {/* Oscillating Pulse Indicator */}
        <motion.div
          animate={isHovered ? { scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] } : {}}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2 px-2.5 py-1 bg-black/80 border border-white/20 text-xs text-white"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span>74 BPM</span>
        </motion.div>
      </div>

      {/* Bottom Sensor Registers */}
      <div className="relative z-10 grid grid-cols-3 gap-2 text-[9px] text-neutral-400 border-t border-white/10 pt-2">
        <div>
          <span className="text-neutral-600 block">SPO2 SAT</span>
          <span className="text-white">98.4% NORMAL</span>
        </div>
        <div>
          <span className="text-neutral-600 block">9-DOF IMU</span>
          <span className="text-white">Δθ: 0.04°/s</span>
        </div>
        <div>
          <span className="text-neutral-600 block">CLOCK</span>
          <span className="text-white">I2C @ 400kHz</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 2. Mars Terrain Analysis and Classification
 * Monochromatic Martian Topographic Contour & Quantum Bloch Vector
 */
export function MarsQuantumVisual({ isHovered }: VisualProps) {
  return (
    <div className="relative w-full h-48 md:h-56 bg-neutral-950 border border-white/10 overflow-hidden flex flex-col justify-between p-4 font-mono select-none">
      {/* Background Topographic Contour Rings */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <svg className="w-full h-full" viewBox="0 0 300 200">
          <motion.ellipse
            cx="150"
            cy="100"
            rx="120"
            ry="75"
            fill="none"
            stroke="white"
            strokeWidth="0.8"
            strokeDasharray="6 4"
            animate={isHovered ? { rotate: 360 } : {}}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          />
          <motion.ellipse
            cx="150"
            cy="100"
            rx="85"
            ry="50"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <motion.ellipse
            cx="150"
            cy="100"
            rx="50"
            ry="30"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
          />
          <circle cx="150" cy="100" r="4" fill="white" />
        </svg>
      </div>

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between text-[10px] text-neutral-400">
        <div className="flex items-center gap-2">
          <Compass size={12} className={isHovered ? "text-white" : "text-neutral-500"} />
          <span>TOPOGRAPHIC ELEVATION // GALE CRATER</span>
        </div>
        <span className="px-1.5 py-0.5 border border-white/15 bg-white/5 text-neutral-300">
          TENSORFLOW QUANTUM // CIRQ
        </span>
      </div>

      {/* Center Quantum Telemetry Coordinates */}
      <div className="relative z-10 my-auto flex justify-between items-center px-4">
        <div className="border-l-2 border-white pl-2">
          <span className="text-[10px] text-neutral-500 block">STATE VECTOR</span>
          <span className="text-xs text-white">|ψ⟩ = α|0⟩ + β|1⟩</span>
        </div>
        <div className="text-right border-r-2 border-white pr-2">
          <span className="text-[10px] text-neutral-500 block">CONTOUR RESOLUTION</span>
          <span className="text-xs text-white">0.25m / PIXEL</span>
        </div>
      </div>

      {/* Bottom Quantum Model Specs */}
      <div className="relative z-10 grid grid-cols-3 gap-2 text-[9px] text-neutral-400 border-t border-white/10 pt-2">
        <div>
          <span className="text-neutral-600 block">CIRCUIT DEPTH</span>
          <span className="text-white">16 LAYERS</span>
        </div>
        <div>
          <span className="text-neutral-600 block">FIDELITY</span>
          <span className="text-white">94.8% AUC</span>
        </div>
        <div>
          <span className="text-neutral-600 block">CLASSIFIER</span>
          <span className="text-white">Q-VARIATIONAL</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 3. Local Connect — Healthcare Locum Marketplace
 * Monochromatic Distributed Node Architecture & Webhook Mesh
 */
export function LocalConnectVisual({ isHovered }: VisualProps) {
  return (
    <div className="relative w-full h-48 md:h-56 bg-neutral-950 border border-white/10 overflow-hidden flex flex-col justify-between p-4 font-mono select-none">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between text-[10px] text-neutral-400">
        <div className="flex items-center gap-2">
          <GitBranch size={12} className={isHovered ? "text-white" : "text-neutral-500"} />
          <span>FINANCIAL WORKFLOW & VERIFICATION MESH</span>
        </div>
        <span className="px-1.5 py-0.5 border border-white/15 bg-white/5 text-neutral-300">
          REACT // SUPABASE // STRIPE
        </span>
      </div>

      {/* Distributed Architecture Interconnected Nodes */}
      <div className="relative z-10 my-auto flex items-center justify-between px-2">
        {/* Node 1: Client */}
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded border border-white/40 flex items-center justify-center bg-black">
            <Radio size={12} className="text-white" />
          </div>
          <span className="text-[9px] text-neutral-400 mt-1">CLIENT</span>
        </div>

        {/* Bus line 1 */}
        <div className="flex-1 h-px bg-white/20 relative mx-2">
          <motion.div
            animate={{ left: ["0%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
            className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_white]"
          />
        </div>

        {/* Node 2: Gateway */}
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded border border-white flex items-center justify-center bg-white text-black">
            <Cpu size={12} />
          </div>
          <span className="text-[9px] text-white mt-1">GATEWAY</span>
        </div>

        {/* Bus line 2 */}
        <div className="flex-1 h-px bg-white/20 relative mx-2">
          <motion.div
            animate={{ left: ["0%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "linear", delay: 0.9 }}
            className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_white]"
          />
        </div>

        {/* Node 3: Escrow / Stripe */}
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded border border-white/40 flex items-center justify-center bg-black">
            <Shield size={12} className="text-white" />
          </div>
          <span className="text-[9px] text-neutral-400 mt-1">ESCROW</span>
        </div>
      </div>

      {/* Bottom Distributed Node Logs */}
      <div className="relative z-10 grid grid-cols-3 gap-2 text-[9px] text-neutral-400 border-t border-white/10 pt-2">
        <div>
          <span className="text-neutral-600 block">VERIFICATION</span>
          <span className="text-white">ID CHECK 200 OK</span>
        </div>
        <div>
          <span className="text-neutral-600 block">WEBHOOK</span>
          <span className="text-white">PAYMENT.SUCCESS</span>
        </div>
        <div>
          <span className="text-neutral-600 block">LATENCY</span>
          <span className="text-white">18ms AVG</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 4. Poker Simulator — Game Theory Application
 * Monochromatic Expectiminimax Decision Lattice & Probability Bars
 */
export function PokerSimulatorVisual({ isHovered }: VisualProps) {
  return (
    <div className="relative w-full h-48 md:h-56 bg-neutral-950 border border-white/10 overflow-hidden flex flex-col justify-between p-4 font-mono select-none">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between text-[10px] text-neutral-400">
        <div className="flex items-center gap-2">
          <Layers size={12} className={isHovered ? "text-white" : "text-neutral-500"} />
          <span>EXPECTIMINIMAX GAME TREE LATTICE</span>
        </div>
        <span className="px-1.5 py-0.5 border border-white/15 bg-white/5 text-neutral-300">
          NUMPY // PANDAS // SIMULATION
        </span>
      </div>

      {/* Kinetic Monte Carlo Probability Bars */}
      <div className="relative z-10 my-auto space-y-2">
        <div>
          <div className="flex justify-between text-[9px] text-neutral-400 mb-0.5">
            <span>ACTION: CALL / CHECK</span>
            <span className="text-white">EV: +1.42 BB</span>
          </div>
          <div className="w-full h-1.5 bg-neutral-800 rounded-none overflow-hidden">
            <motion.div
              className="h-full bg-white"
              animate={isHovered ? { width: ["65%", "78%", "65%"] } : { width: "70%" }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[9px] text-neutral-400 mb-0.5">
            <span>ACTION: OPTIMAL RAISE</span>
            <span className="text-white">EV: +3.85 BB</span>
          </div>
          <div className="w-full h-1.5 bg-neutral-800 rounded-none overflow-hidden">
            <motion.div
              className="h-full bg-white"
              animate={isHovered ? { width: ["82%", "94%", "82%"] } : { width: "88%" }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Game Theory Stats */}
      <div className="relative z-10 grid grid-cols-3 gap-2 text-[9px] text-neutral-400 border-t border-white/10 pt-2">
        <div>
          <span className="text-neutral-600 block">ITERATIONS</span>
          <span className="text-white">100,000 RUNS</span>
        </div>
        <div>
          <span className="text-neutral-600 block">NASH EQUILIBRIUM</span>
          <span className="text-white">CONVERGED</span>
        </div>
        <div>
          <span className="text-neutral-600 block">DEPTH</span>
          <span className="text-white">6-PLY TREE</span>
        </div>
      </div>
    </div>
  );
}

