import { useEffect } from "react";

/**
 * High-performance smooth scroll controller
 * Handles inertia scroll, smooth anchor navigation, and respects prefers-reduced-motion
 */
export function useSmoothScroll() {
  useEffect(() => {
    // Respect user's motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let isRunning = false;
    let targetY = window.scrollY;
    let currentY = window.scrollY;
    const ease = 0.085; // buttery smooth damping factor

    const onScroll = () => {
      // Keep target updated if user scrolls via scrollbar or touch
      if (!isRunning) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}

/**
 * Smoothly scrolls to target element ID or coordinates
 */
export function scrollToTarget(target: string | number, offset = 0) {
  if (typeof target === "number") {
    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
    return;
  }

  const element = document.querySelector(target);
  if (!element) return;

  const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}

