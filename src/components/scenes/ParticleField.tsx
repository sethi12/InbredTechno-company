"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleFieldProps {
  count?: number;
  radius?: number;
  color?: string;
  size?: number;
}

/**
 * Instanced point cloud. Uses a single BufferGeometry + Points object
 * (not one mesh per particle) so counts in the thousands stay cheap.
 */
export function ParticleField({
  count = 800,
  radius = 6,
  color = "#4de8ff",
  size = 0.015,
}: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);

  /* eslint-disable react-hooks/purity -- deliberate one-time randomized layout, cached by useMemo */
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // distribute in a sphere shell for a "data field" feel
      const r = radius * (0.4 + Math.random() * 0.6);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count, radius]);
  /* eslint-enable react-hooks/purity */

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={size}
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
