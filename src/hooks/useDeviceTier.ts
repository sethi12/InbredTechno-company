"use client";

import { useEffect, useState } from "react";

export type DeviceTier = "high" | "low";

/**
 * Rough heuristic used to scale 3D scene complexity: particle counts,
 * DPR cap, shadow quality. Defaults to "high" during SSR/first paint
 * so desktop users don't flash a downgraded scene.
 */
export function useDeviceTier(): DeviceTier {
  const [tier, setTier] = useState<DeviceTier>("high");

  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const isNarrow = window.innerWidth < 820;
    const lowCores =
      typeof navigator !== "undefined" &&
      "hardwareConcurrency" in navigator &&
      navigator.hardwareConcurrency <= 4;

    if ((isCoarsePointer && isNarrow) || lowCores) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time capability gate on mount
      setTier("low");
    }
  }, []);

  return tier;
}
