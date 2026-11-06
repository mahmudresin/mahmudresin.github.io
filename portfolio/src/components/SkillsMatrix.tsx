import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data";

const codeSnippets: Record<string, { lang: string; code: string; desc: string }> = {
  "C++ Systems": {
    lang: "cpp",
    desc: "Lock-free ring buffer for real-time sensor DMA streaming",
    code: `template <typename T, size_t Capacity>
class LockFreeRingBuffer {
    std::array<T, Capacity> buffer_;
    std::atomic<size_t> head_{0};
    std::atomic<size_t> tail_{0};
public:
    bool push(const T& item) noexcept {
        const size_t current_tail = tail_.load(std::memory_order_relaxed);
        const size_t next_tail = (current_tail + 1) % Capacity;
        if (next_tail == head_.load(std::memory_order_acquire))
            return false; // Buffer full
        buffer_[current_tail] = item;
        tail_.store(next_tail, std::memory_order_release);
        return true;
    }
};`,
  },
  "Quantum ML": {
    lang: "python",
    desc: "Parameterized Quantum Circuit (PQC) for terrain ansatz",
    code: `import cirq
import tensorflow_quantum as tfq

def build_pqc_circuit(qubits, layers=4):
    circuit = cirq.Circuit()
    for layer in range(layers):
        # Parametric single-qubit rotations
        for i, q in enumerate(qubits):
            theta = sympy.Symbol(f"theta_{layer}_{i}")
            circuit.append(cirq.ry(theta)(q))
        # Entangling CNOT ladder
        for i in range(len(qubits) - 1):
            circuit.append(cirq.CNOT(qubits[i], qubits[i + 1]))
    return circuit`,
  },
  "Embedded I2C": {
    lang: "cpp",
    desc: "MAX30102 PPG FIFO interrupt-driven register reader",
    code: `void MAX30102_ReadFIFO(uint32_t* red_led, uint32_t* ir_led) {
    uint8_t buffer[6];
    Wire.beginTransmission(MAX30102_I2C_ADDR);
    Wire.write(REG_FIFO_DATA);
    Wire.endTransmission(false);
    
    Wire.requestFrom(MAX30102_I2C_ADDR, 6);
    for (int i = 0; i < 6; i++) {
        buffer[i] = Wire.read();
    }
    *red_led = ((uint32_t)buffer[0] << 16 | (uint32_t)buffer[1] << 8 | buffer[2]) & 0x03FFFF;
    *ir_led  = ((uint32_t)buffer[3] << 16 | (uint32_t)buffer[4] << 8 | buffer[5]) & 0x03FFFF;
}`,
  },
};

export function SkillsMatrix() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });
  const [activeSnippetKey, setActiveSnippetKey] = useState("C++ Systems");

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative py-24 md:py-36 px-6 md:px-12 bg-neutral-950 text-white border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-baseline justify-between pb-8 mb-16 border-b border-white/[0.08]">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
            04 / TECHNICAL TAXONOMY
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
            SYSTEMS STACK & IMPLEMENTATION DISCIPLINE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Swiss Typographic Taxonomy (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items], idx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.6, delay: idx * 0.06 }}
                  className="border-b border-white/[0.06] pb-4"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-mono text-xs tracking-[0.18em] text-white uppercase">
                      {category}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400">0{idx + 1}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm font-sans text-neutral-300">
                    {items.map((skill, sIdx) => (
                      <span key={skill} className="hover:text-white transition-colors">
                        {skill}
                        {sIdx < items.length - 1 && <span className="text-neutral-400 ml-3">/</span>}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Codebase Architecture Terminal (6 cols) */}
          <div className="lg:col-span-6 border border-white/15 bg-black">
            {/* Terminal Tab Bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-white/10 px-4 py-3 bg-neutral-900/40">
              <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
                SOURCE INSPECTION
              </span>

              <div className="flex items-center gap-1">
                {Object.keys(codeSnippets).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveSnippetKey(key)}
                    className={`px-3 py-1 font-mono text-xs uppercase tracking-wider transition-colors ${
                      activeSnippetKey === key
                        ? "bg-white text-black font-semibold"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>

            {/* Sub-header description */}
            <div className="px-6 py-2.5 border-b border-white/5 font-mono text-xs text-neutral-400 flex items-center justify-between bg-black/60">
              <span>{codeSnippets[activeSnippetKey].desc}</span>
              <span className="text-[10px] uppercase text-neutral-400">
                {codeSnippets[activeSnippetKey].lang}
              </span>
            </div>

            {/* Code Block */}
            <div className="p-6 overflow-x-auto font-mono text-xs md:text-sm text-neutral-300 leading-relaxed bg-black">
              <pre>
                <code>{codeSnippets[activeSnippetKey].code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
