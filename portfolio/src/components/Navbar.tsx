import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { scrollToTarget } from "../utils/smoothScroll";

const navItems = [
  { href: "#about", label: "Profile", index: "01" },
  { href: "#projects", label: "Selected Works", index: "02" },
  { href: "#experience", label: "Chronology", index: "03" },
  { href: "#skills", label: "Taxonomy", index: "04" },
  { href: "#contact", label: "Contact", index: "05" },
];

export function Navbar({ ready }: { ready: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((scrollY / docHeight) * 100);
      }

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
      {/* 1px Minimalist Scroll Hairline */}
      <div className="fixed top-0 left-0 right-0 h-[1px] z-[100] bg-white/[0.06] pointer-events-none">
        <div
          className="h-full bg-white transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Monograph Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-4 bg-neutral-950/90 backdrop-blur-md border-b border-white/[0.08]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Masthead Identity */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-baseline gap-3 text-left focus:outline-none"
            aria-label="Return to top"
          >
            <span className="font-serif text-base tracking-tight font-normal text-white group-hover:opacity-70 transition-opacity">
              Yeamin Mahmud Resin
            </span>
            <span className="hidden sm:inline font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
              / Research Engineer
            </span>
          </button>

          {/* Desktop Index Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-xs font-mono uppercase tracking-[0.18em] transition-colors relative py-1 flex items-baseline gap-1.5 ${
                    isActive ? "text-white" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <span className="text-[9px] text-neutral-400">{item.index}</span>
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-white"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Direct CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => handleNavClick("#contact")}
              className="text-xs font-mono tracking-[0.2em] uppercase px-4 py-2 border border-white/20 text-white hover:bg-white hover:text-black transition-colors duration-200"
            >
              Dispatch
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-white hover:text-neutral-400 focus:outline-none"
            aria-label="Open navigation menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black text-white flex flex-col justify-between p-8"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <span className="font-serif text-base tracking-wide">Yeamin Mahmud Resin</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-neutral-400 hover:text-white transition-colors"
                aria-label="Close navigation menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col gap-6 py-12">
              {navItems.map((item, i) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-baseline justify-between text-left group border-b border-white/5 pb-4"
                >
                  <span className="font-serif text-2xl font-light text-white group-hover:translate-x-2 transition-transform">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-neutral-400 tracking-widest">
                    {item.index}
                  </span>
                </button>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6 flex items-center justify-between text-[11px] font-mono text-neutral-400 tracking-widest uppercase">
              <span>RESEARCH ARCHIVE</span>
              <span>2026</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
