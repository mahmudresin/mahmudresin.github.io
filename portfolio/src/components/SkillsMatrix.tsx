import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data";
import { Terminal, Code, Cpu, Database, Wrench, Layers } from "lucide-react";

const codeSnippets: Record<string, { lang: string; code: string; desc: string }> = {
  "C++ Systems": {
    lang: "cpp",
    desc: "Lock-free circular buffer for real-time sensor DMA streaming",
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
    desc: "Parameterized Quantum Circuit (PQC) for Martian terrain classification",
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

  const categoryIcons: Record<string, React.ReactNode> = {
    "Programming Languages": <Code size={15} />,
    "Embedded Systems": <Cpu size={15} />,
    "Sensors & Hardware": <Layers size={15} />,
    Development: <Terminal size={15} />,
    "Machine Learning": <Layers size={15} />,
    Databases: <Database size={15} />,
    "Tools & Platforms": <Wrench size={15} />,
  };

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative py-28 md:py-36 px-6 md:px-16 bg-neutral-950 text-white border-t border-white/10 overflow-hidden"
    >
      {/* Background oversized word */}
      <div className="absolute left-4 top-24 text-[14vw] font-serif font-black text-stroke-white opacity-5 select-none pointer-events-none whitespace-nowrap">
        EXPERTISE
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-16 md:mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
            04 // TECHNICAL EXPERTISE
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 h-px bg-white/20 origin-left"
          />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: catIndex * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="border border-white/10 bg-neutral-900/40 p-6 backdrop-blur-sm hover:border-white/30 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white">
                  <span className="text-neutral-400 group-hover:text-white transition-colors">
                    {categoryIcons[category] || <Terminal size={15} />}
                  </span>
                  <span>{category}</span>
                </div>
                <span className="font-mono text-[10px] text-neutral-500">
                  0{catIndex + 1}
                </span>
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-sans text-neutral-300 bg-white/5 border border-white/10 px-2.5 py-1.5 hover:bg-white hover:text-black hover:border-white transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Architecture Code Snippet Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border border-white/20 bg-black overflow-hidden"
        >
          {/* Terminal Title Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/10 bg-neutral-900/80 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
              </div>
              <span className="font-mono text-xs text-neutral-400 ml-2">
                ARCHITECTURE // IMPLEMENTATION SNAPSHOT
              </span>
            </div>

            {/* Code Tabs */}
            <div className="flex items-center gap-1 mt-2 sm:mt-0">
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

          {/* Description line */}
          <div className="px-6 py-2.5 bg-neutral-950 border-b border-white/5 font-mono text-xs text-neutral-400 flex items-center justify-between">
            <span>{codeSnippets[activeSnippetKey].desc}</span>
            <span className="text-[10px] text-neutral-500 uppercase">
              SYNTAX: {codeSnippets[activeSnippetKey].lang}
            </span>
          </div>

          {/* Code block */}
          <div className="p-6 overflow-x-auto font-mono text-xs md:text-sm text-neutral-300 leading-relaxed bg-black/90">
            <pre className="selection:bg-white selection:text-black">
              <code>{codeSnippets[activeSnippetKey].code}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

