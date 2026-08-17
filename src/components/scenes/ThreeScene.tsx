"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useDeviceTier } from "@/hooks/useDeviceTier";

interface ThreeSceneProps {
  children: React.ReactNode;
  cameraPosition?: [number, number, number];
  fov?: number;
  className?: string;
}

export function ThreeScene({
  children,
  cameraPosition = [0, 0, 5],
  fov = 45,
  className,
}: ThreeSceneProps) {
  const tier = useDeviceTier();
  const dpr: [number, number] = tier === "low" ? [1, 1.25] : [1, 2];

  return (
    <Canvas
      className={className}
      dpr={dpr}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: cameraPosition, fov }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
}

/** 2D fallback shown when WebGL context creation fails. */
export function SceneFallback({ label }: { label?: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative h-64 w-64">
        <div className="absolute inset-0 animate-pulse rounded-full bg-(--color-cyan)/10 blur-2xl" />
        <div className="absolute inset-8 rounded-full border border-(--color-cyan)/30" />
        <div className="absolute inset-16 rounded-full border border-(--color-violet)/30" />
        {label && (
          <span className="hud-label absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
