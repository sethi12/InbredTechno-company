"use client";

import { motion } from "framer-motion";

export function SectionLabel({
  index,
  label,
  light = false,
}: {
  index?: string;
  label: string;
  light?: boolean;
}) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(223,157,86,0.2)] bg-[rgba(34,24,18,0.6)] px-3.5 py-1 backdrop-blur-md">
      {index && (
        <span className="font-mono text-[10px] font-semibold tracking-wider text-(--color-caramel)">
          {index}
        </span>
      )}
      {index && <span className="h-1 w-1 rounded-full bg-(--color-caramel)/60" />}
      <span
        className={`font-mono text-[11px] font-medium tracking-widest uppercase ${
          light ? "text-(--color-ink)" : "text-(--color-ink-dim)"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export function HudLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`font-mono text-[11px] tracking-widest uppercase text-(--color-ink-dim) ${className}`}
    >
      {children}
    </div>
  );
}

export function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      animate={{ opacity: [0.4, 1, 0.4], y: [0, 4, 0] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="font-mono text-[10px] tracking-widest text-(--color-caramel) [writing-mode:vertical-rl]">
        SCROLL TO EXPLORE
      </span>
      <div className="relative h-10 w-px bg-gradient-to-b from-(--color-caramel) via-(--color-caramel)/40 to-transparent">
        <motion.div
          className="h-2 w-px bg-(--color-ink)"
          animate={{ y: [0, 32, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
