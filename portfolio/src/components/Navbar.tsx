import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { scrollToTarget } from "../utils/smoothScroll";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Expertise" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export function Navbar({ ready }: { ready: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // Calculate scroll progress percentage
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((scrollY / docHeight) * 100);
      }

      // Active section spy
      const sections = navItems.map((item) => item.href.substring(1));
      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.35) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    scrollToTarget(href, -60);
  };

  return (
    <>
      {/* Top 2px Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-white/10 pointer-events-none">
        <motion.div
          className="h-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Navbar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-black/80 backdrop-blur-md border-b border-white/10"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-3 text-left focus:outline-none"
            aria-label="Back to top"
          >
            <div className="w-8 h-8 rounded-none border border-white/30 flex items-center justify-center font-serif text-sm font-medium tracking-tighter text-white group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
              Y
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm font-semibold tracking-wider text-white">
                YEAMIN M.
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-neutral-400 group-hover:text-neutral-200 transition-colors uppercase">
                RESEARCH ENG.
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-neutral-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-1.5 text-xs font-mono uppercase tracking-widest transition-colors duration-300 ${
                    isActive ? "text-white" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-white/15 rounded-full border border-white/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA: Direct Contact */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => handleNavClick("#contact")}
              className="group relative inline-flex items-center gap-2 overflow-hidden px-5 py-2 text-xs font-mono tracking-widest uppercase text-black bg-white hover:bg-neutral-200 transition-all duration-300"
            >
              <span>CONNECT</span>
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-white hover:text-neutral-400 focus:outline-none"
            aria-label="Open mobile navigation menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <span className="font-serif text-lg tracking-widest text-white">YMR // ARCHIVE</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-neutral-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col gap-6 py-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center justify-between text-left group"
                >
                  <span className="font-serif text-3xl font-light text-white group-hover:translate-x-2 group-hover:italic transition-all duration-300">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-neutral-500 tracking-widest">
                    0{i + 1}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Bottom info */}
            <div className="border-t border-white/10 pt-6 flex items-center justify-between text-xs font-mono text-neutral-400 tracking-wider">
              <span>YEAMIN MAHMUD RESIN</span>
              <span>2025</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

