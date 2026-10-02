"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface AITrainingVisualizationProps {
  scrollProgress: number;
  lowPower?: boolean;
}

function useParticleSystem(count: number, seed: number) {
  return useMemo(() => {
    const rng = (n: number) => {
      const x = Math.sin(n + seed) * 43758.5453;
      return x - Math.floor(x);
    };
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const target = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // random scattered start positions (raw data)
      pos[i * 3] = (rng(i * 3) - 0.5) * 10;
      pos[i * 3 + 1] = (rng(i * 3 + 1) - 0.5) * 8;
      pos[i * 3 + 2] = (rng(i * 3 + 2) - 0.5) * 6;
      vel[i * 3] = 0;
      vel[i * 3 + 1] = 0;
      vel[i * 3 + 2] = 0;
      // organized target positions (trained model — grid-like)
      const row = Math.floor(i / 16);
      const col = i % 16;
      target[i * 3] = (col - 8) * 0.35;
      target[i * 3 + 1] = (row - Math.floor(count / 32)) * 0.35;
      target[i * 3 + 2] = (rng(i * 3 + 99) - 0.5) * 0.4;
    }
    return { pos, vel, target };
  }, [count, seed]);
}

export function AITrainingVisualization({ scrollProgress, lowPower }: AITrainingVisualizationProps) {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const count = lowPower ? 220 : 540;
  const { pos, target } = useParticleSystem(count, 7);
  const initialPos = useMemo(() => new Float32Array(pos), [pos]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    const geo = pointsRef.current.geometry;
    const attr = geo.attributes.position as THREE.BufferAttribute;
    const current = attr.array as Float32Array;
    const speed = delta * 1.2 * scrollProgress;

    for (let i = 0; i < count; i++) {
      current[i * 3] += (target[i * 3] - current[i * 3]) * speed;
      current[i * 3 + 1] += (target[i * 3 + 1] - current[i * 3 + 1]) * speed;
      current[i * 3 + 2] += (target[i * 3 + 2] - current[i * 3 + 2]) * speed;
    }
    attr.needsUpdate = true;

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.06;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.12;
    }
  });

  const color = useMemo(() => {
    if (scrollProgress < 0.33) return "#df9d56"; // Caramel
    if (scrollProgress < 0.66) return "#fbf7ee"; // Cream
    return "#5cb88a"; // Sage Emerald
  }, [scrollProgress]);

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[initialPos, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={color}
          size={scrollProgress > 0.5 ? 0.045 : 0.065}
          transparent
          opacity={0.75}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {/* Central Chocolate-Caramel Crystal Lattice */}
      {scrollProgress > 0.6 && (
        <mesh scale={scrollProgress * 0.85}>
          <icosahedronGeometry args={[0.5, 1]} />
          <meshBasicMaterial
            color="#df9d56"
            wireframe
            transparent
            opacity={(scrollProgress - 0.6) * 2}
          />
        </mesh>
      )}
    </group>
  );
}
