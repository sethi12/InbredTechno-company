"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<"default" | "link" | "project" | "video">("default");
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || prefersReduced) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pos.x, y: pos.y };

    function onMove(e: MouseEvent) {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
    }

    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const projectTarget = target.closest<HTMLElement>("[data-cursor='project']");
      const videoTarget = target.closest<HTMLElement>("[data-cursor='video']");
      const linkTarget = target.closest<HTMLElement>("a, button, [data-cursor='link']");

      if (videoTarget) {
        setVariant("video");
        setLabel(videoTarget.dataset.cursorLabel ?? "PLAY");
      } else if (projectTarget) {
        setVariant("project");
        setLabel(projectTarget.dataset.cursorLabel ?? "VIEW");
      } else if (linkTarget) {
        setVariant("link");
        setLabel(null);
      } else {
        setVariant("default");
        setLabel(null);
      }
    }

    let raf: number;
    function tick() {
      ring.x += (pos.x - ring.x) * 0.18;
      ring.y += (pos.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Caramel precision core dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[999] h-2 w-2 rounded-full bg-(--color-caramel) shadow-[0_0_8px_rgba(223,157,86,0.8)] will-change-transform"
      />
      {/* Interactive Cream & Caramel Aura Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[998] flex items-center justify-center rounded-full border will-change-transform transition-[width,height,border-color,background-color] duration-200 ease-out"
        style={{
          width: variant === "video" ? 96 : variant === "project" ? 88 : variant === "link" ? 46 : 30,
          height: variant === "video" ? 96 : variant === "project" ? 88 : variant === "link" ? 46 : 30,
          borderColor:
            variant === "default"
              ? "rgba(246, 238, 227, 0.3)"
              : "rgba(223, 157, 86, 0.85)",
          backgroundColor:
            variant === "video"
              ? "rgba(223, 157, 86, 0.15)"
              : variant === "project"
              ? "rgba(34, 24, 18, 0.55)"
              : "transparent",
          backdropFilter: variant === "project" || variant === "video" ? "blur(4px)" : "none",
        }}
      >
        {label && (
          <span className="font-mono text-[9px] font-semibold tracking-widest text-(--color-caramel)">
            {label}
          </span>
        )}
      </div>
    </>
  );
}
