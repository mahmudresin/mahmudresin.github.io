import { motion } from "framer-motion";

interface VisualProps {
  isHovered?: boolean;
}

/**
 * 01. Multi-Sensor Wearable Health Watch
 * Architectural Hardware Bus & Sensor Interface Schematic
 */
export function WearableHealthVisual({ isHovered = false }: VisualProps) {
  return (
    <div className="w-full bg-neutral-900/60 border border-white/10 p-5 font-mono text-xs select-none">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-[10px] text-neutral-400 tracking-wider">
        <span>HARDWARE TOPOLOGY // BUS ARCHITECTURE</span>
        <span className="text-white">I2C · SPI · UART</span>
      </div>

      {/* Sensor Interconnect Schematic */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-[11px]">
        <div className="p-3 border border-white/10 bg-black/50">
          <span className="text-neutral-500 block text-[9px] uppercase">SENSOR 01</span>
          <span className="text-white font-medium">MAX30102 PPG</span>
          <span className="text-neutral-400 block text-[10px] mt-1">SPO2 & Heart-Rate @ 400kHz</span>
        </div>
        <div className="p-3 border border-white/10 bg-black/50">
          <span className="text-neutral-500 block text-[9px] uppercase">SENSOR 02</span>
          <span className="text-white font-medium">LSM9DS1 IMU</span>
          <span className="text-neutral-400 block text-[10px] mt-1">9-DOF Motion Telemetry</span>
        </div>
        <div className="p-3 border border-white/10 bg-black/50">
          <span className="text-neutral-500 block text-[9px] uppercase">SENSOR 03</span>
          <span className="text-white font-medium">NMEA GPS Module</span>
          <span className="text-neutral-400 block text-[10px] mt-1">UART Coordinate Streaming</span>
        </div>
      </div>

      {/* Real-time ECG Pulse Waveform Trace */}
      <div className="w-full h-12 bg-black/70 border border-white/5 relative overflow-hidden flex items-center px-2">
        <svg className="w-full h-full" viewBox="0 0 600 60" preserveAspectRatio="none">
          <line x1="0" y1="30" x2="600" y2="30" stroke="rgba(255, 255, 255, 0.1)" strokeDasharray="3 3" />
          <motion.path
            d="M 0 30 L 120 30 L 135 28 L 145 32 L 155 30 L 175 30 L 185 8 L 195 52 L 205 20 L 215 38 L 225 30 L 320 30 L 335 28 L 345 32 L 355 30 L 375 30 L 385 6 L 395 54 L 405 18 L 415 38 L 425 30 L 600 30"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            className="animate-ecg-draw"
          />
        </svg>
      </div>
    </div>
  );
}

/**
 * 02. Mars Terrain Analysis and Classification
 * Parameterized Quantum Circuit (PQC) & Terrain Classification Ansatz
 */
export function MarsQuantumVisual({ isHovered = false }: VisualProps) {
  return (
    <div className="w-full bg-neutral-900/60 border border-white/10 p-5 font-mono text-xs select-none">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-[10px] text-neutral-400 tracking-wider">
        <span>QUANTUM ANSATZ // CIRQ & TF QUANTUM</span>
        <span className="text-white">8-QUBIT PQC MODEL</span>
      </div>

      {/* Quantum Circuit Wire Representation */}
      <div className="space-y-2 py-2">
        <div className="flex items-center gap-2 text-[10px]">
          <span className="text-neutral-400 w-8">q_0:</span>
          <div className="flex-1 h-px bg-white/20 relative flex items-center justify-around">
            <span className="px-1.5 py-0.5 bg-black border border-white/30 text-white text-[9px]">Ry(θ0)</span>
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            <span className="px-1.5 py-0.5 bg-black border border-white/30 text-white text-[9px]">Rz(φ0)</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[10px]">
          <span className="text-neutral-400 w-8">q_1:</span>
          <div className="flex-1 h-px bg-white/20 relative flex items-center justify-around">
            <span className="px-1.5 py-0.5 bg-black border border-white/30 text-white text-[9px]">Ry(θ1)</span>
            <span className="w-2.5 h-2.5 border border-white rounded-full flex items-center justify-center text-[8px]">+</span>
            <span className="px-1.5 py-0.5 bg-black border border-white/30 text-white text-[9px]">Rz(φ1)</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[10px]">
          <span className="text-neutral-400 w-8">q_2:</span>
          <div className="flex-1 h-px bg-white/20 relative flex items-center justify-around">
            <span className="px-1.5 py-0.5 bg-black border border-white/30 text-white text-[9px]">Ry(θ2)</span>
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            <span className="px-1.5 py-0.5 bg-black border border-white/30 text-white text-[9px]">Rz(φ2)</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-[10px] text-neutral-400 border-t border-white/10 pt-3 mt-3">
        <span>BENCHMARK: CLASSICAL CNN VS. VARIATIONAL QNN</span>
        <span className="text-white">SURFACE: GALE CRATER</span>
      </div>
    </div>
  );
}

/**
 * 03. Local Connect — Healthcare Locum Marketplace
 * Distributed Payment Escrow & Credential Verification Pipeline
 */
export function LocalConnectVisual({ isHovered = false }: VisualProps) {
  return (
    <div className="w-full bg-neutral-900/60 border border-white/10 p-5 font-mono text-xs select-none">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-[10px] text-neutral-400 tracking-wider">
        <span>TRANSACTION & VERIFICATION STATE MACHINE</span>
        <span className="text-white">SUPABASE · STRIPE CONNECT</span>
      </div>

      {/* Distributed State Machine Stages */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px]">
        <div className="p-2 border border-white/15 bg-black/60">
          <span className="text-neutral-500 block text-[9px]">STATE 01</span>
          <span className="text-white">Shift Match</span>
        </div>
        <div className="p-2 border border-white/15 bg-black/60">
          <span className="text-neutral-500 block text-[9px]">STATE 02</span>
          <span className="text-white">Credential Auth</span>
        </div>
        <div className="p-2 border border-white/15 bg-black/60">
          <span className="text-neutral-500 block text-[9px]">STATE 03</span>
          <span className="text-white">Escrow Lock</span>
        </div>
        <div className="p-2 border border-white/15 bg-black/60">
          <span className="text-neutral-500 block text-[9px]">STATE 04</span>
          <span className="text-white">Stripe Settlement</span>
        </div>
      </div>

      <div className="flex justify-between items-center text-[10px] text-neutral-400 border-t border-white/10 pt-3 mt-4">
        <span>ARCHITECTURE: ASYNCHRONOUS WEBHOOK RECONCILIATION</span>
        <span className="text-white">HIPAA-COMPLIANT FLOW</span>
      </div>
    </div>
  );
}

/**
 * 04. Poker Simulator — Game Theory Application
 * Expectiminimax Probabilistic Decision Tree & Payoff Matrix
 */
export function PokerSimulatorVisual({ isHovered = false }: VisualProps) {
  return (
    <div className="w-full bg-neutral-900/60 border border-white/10 p-5 font-mono text-xs select-none">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-[10px] text-neutral-400 tracking-wider">
        <span>EXPECTIMINIMAX DECISION LATTICE</span>
        <span className="text-white">IMPERFECT INFORMATION SEARCH</span>
      </div>

      {/* Decision Tree ASCII Schematic */}
      <div className="p-3 bg-black/60 border border-white/10 text-[10px] leading-relaxed text-neutral-300">
        <div>Root State: Pot Odds & Hand Range Distribution</div>
        <div className="text-neutral-500">├── [MAX Node] Player Decisions (Bet / Check / Fold)</div>
        <div className="text-neutral-500">│   ├── [CHANCE Node] Turn / River Card Probability (P = 1/47)</div>
        <div className="text-neutral-500">│   └── [MIN Node] Adversary Counter-Strategy (Nash Equilibrium)</div>
        <div>└── Evaluation: +3.85 BB Expected Value Convergence (100k Trials)</div>
      </div>

      <div className="flex justify-between items-center text-[10px] text-neutral-400 border-t border-white/10 pt-3 mt-3">
        <span>MONTE CARLO VARIANCE REDUCTION</span>
        <span className="text-white">NUMPY · PANDAS · MATPLOTLIB</span>
      </div>
    </div>
  );
}
