"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks global scroll progress (0-1) across the entire document.
 * Single rAF-driven listener shared conceptually; each call is cheap
 * (a getBoundingClientRect-free read of scrollY), so components can
 * call this independently without attaching duplicate DOM listeners
 * beyond the native scroll event.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(1, Math.max(0, scrollTop / height)) : 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return progress;
}

/**
 * Tracks scroll progress (0-1) through a specific section element:
 * 0 when the section's top enters the bottom of the viewport,
 * 1 when the section's bottom leaves the top of the viewport.
 */
export function useSectionProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    function measure() {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh;
      const passed = vh - rect.top;
      setProgress(Math.min(1, Math.max(0, passed / total)));
    }

    function onScroll() {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(measure);
    }

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [ref]);

  return progress;
}
