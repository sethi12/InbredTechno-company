"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Line, Text } from "@react-three/drei";
import * as THREE from "three";
import { ParticleField } from "./ParticleField";

interface TechnologyCoreProps {
  /** 0 -> 1, driven by hero scroll. 0 = core intact, 1 = fully split into 4 systems. */
  splitProgress: number;
  lowPower?: boolean;
}

const SYSTEMS = [
  { label: "SOFTWARE", color: "#fbf7ee" },     // Silky Cream
  { label: "AI & ML", color: "#df9d56" },      // Caramel Gold
  { label: "APPLICATIONS", color: "#cca074" }, // Golden Mocha
  { label: "ROBOTICS", color: "#e8a867" },     // Warm Amber
] as const;

function CoreNode({
  position,
  color,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.15;
      ref.current.rotation.y += delta * 0.2;
    }
  });
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[0.16, 0]} />
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
}

export function TechnologyCore({ splitProgress, lowPower }: TechnologyCoreProps) {
  const group = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const innerGlowRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  const orbitNodes = useMemo(() => {
    const n = lowPower ? 5 : 9;
    return new Array(n).fill(0).map((_, i) => {
      const angle = (i / n) * Math.PI * 2;
      const radius = 1.6 + (i % 3) * 0.25;
      const tilt = (i % 2 === 0 ? 1 : -1) * 0.35;
      return { angle, radius, tilt, speed: 0.15 + (i % 4) * 0.05 };
    });
  }, [lowPower]);

  useFrame((state, delta) => {
    if (!group.current) return;

    // mouse parallax
    const targetX = pointer.y * 0.15;
    const targetY = pointer.x * 0.25;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04;
    group.current.rotation.y += (targetY - group.current.rotation.y + delta * 0.06) * 0.06;

    if (coreRef.current) {
      const s = 1 - splitProgress * 0.55;
      coreRef.current.scale.setScalar(THREE.MathUtils.lerp(coreRef.current.scale.x, s, 0.1));
      coreRef.current.rotation.y += delta * 0.12;
      coreRef.current.rotation.z += delta * 0.08;
      const mat = coreRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 1 - splitProgress;
    }

    if (innerGlowRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.4) * 0.08;
      innerGlowRef.current.scale.setScalar(pulse * (1 - splitProgress * 0.6));
      const mat = innerGlowRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = (0.55 + Math.sin(state.clock.elapsedTime * 1.4) * 0.15) * (1 - splitProgress * 0.7);
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.x += delta * 0.05;
      outerRingRef.current.rotation.y -= delta * 0.08;
    }
  });

  const systemPositions: [number, number, number][] = [
    [-1.7, 0.9, 0],
    [1.7, 0.9, 0],
    [-1.7, -0.9, 0],
    [1.7, -0.9, 0],
  ];

  return (
    <group ref={group}>
      <ParticleField count={lowPower ? 280 : 750} radius={5.5} color="#e2a05d" size={0.018} />

      {/* Central Chocolate-Gold Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshBasicMaterial color="#df9d56" wireframe transparent opacity={0.85} />
      </mesh>

      {/* Inner Cream Radiant Energy */}
      <mesh ref={innerGlowRef}>
        <icosahedronGeometry args={[0.62, 0]} />
        <meshBasicMaterial color="#fbf7ee" transparent opacity={0.45} />
      </mesh>

      {/* Outer Torus Orbit */}
      <mesh ref={outerRingRef} visible={splitProgress < 0.6}>
        <torusGeometry args={[1.35, 0.015, 8, 48]} />
        <meshBasicMaterial color="#c57e3a" transparent opacity={0.35 * (1 - splitProgress)} />
      </mesh>

      {/* Orbiting Nodes + Connecting Lines */}
      <group visible={splitProgress < 0.85}>
        {orbitNodes.map((n, i) => {
          const x = Math.cos(n.angle) * n.radius;
          const y = Math.sin(n.angle) * n.radius * 0.6 + n.tilt;
          const z = Math.sin(n.angle * 2) * 0.4;
          return (
            <group key={i}>
              <CoreNode
                position={[x, y, z]}
                color={i % 2 === 0 ? "#df9d56" : "#fbf7ee"}
                scale={0.7}
              />
              <Line
                points={[
                  [0, 0, 0],
                  [x, y, z],
                ]}
                color="#df9d56"
                transparent
                opacity={0.15 * (1 - splitProgress)}
                lineWidth={1}
              />
            </group>
          );
        })}
      </group>

      {/* Four Systems the core splits into */}
      {splitProgress > 0.05 &&
        SYSTEMS.map((sys, i) => {
          const target = systemPositions[i];
          const pos: [number, number, number] = [
            target[0] * splitProgress,
            target[1] * splitProgress,
            0,
          ];
          return (
            <group key={sys.label} position={pos}>
              <mesh scale={0.28 + splitProgress * 0.22}>
                <icosahedronGeometry args={[0.5, 0]} />
                <meshBasicMaterial
                  color={sys.color}
                  wireframe
                  transparent
                  opacity={splitProgress}
                />
              </mesh>
              {splitProgress > 0.6 && !lowPower && (
                <Text
                  position={[0, -0.55, 0]}
                  fontSize={0.11}
                  color={sys.color}
                  anchorX="center"
                  anchorY="middle"
                  font={undefined}
                  material-transparent
                  material-opacity={Math.min(1, (splitProgress - 0.6) * 2.5)}
                  letterSpacing={0.15}
                >
                  {sys.label}
                </Text>
              )}
            </group>
          );
        })}
    </group>
  );
}
