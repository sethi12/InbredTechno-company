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
  { label: "SOFTWARE", color: "#4de8ff" },
  { label: "AI", color: "#8b7fff" },
  { label: "APPLICATIONS", color: "#3cff8e" },
  { label: "ROBOTICS", color: "#ff5470" },
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
  const { pointer } = useThree();

  const orbitNodes = useMemo(() => {
    const n = lowPower ? 5 : 9;
    return new Array(n).fill(0).map((_, i) => {
      const angle = (i / n) * Math.PI * 2;
      const radius = 1.5 + (i % 3) * 0.25;
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
      coreRef.current.rotation.y += delta * 0.1;
      const mat = coreRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 1 - splitProgress;
    }

    if (innerGlowRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.4) * 0.06;
      innerGlowRef.current.scale.setScalar(pulse * (1 - splitProgress * 0.6));
      const mat = innerGlowRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = (0.5 + Math.sin(state.clock.elapsedTime * 1.4) * 0.15) * (1 - splitProgress * 0.7);
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
      <ParticleField count={lowPower ? 260 : 700} radius={5} />

      {/* central core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.85, 1]} />
        <meshBasicMaterial color="#4de8ff" wireframe transparent opacity={1} />
      </mesh>
      <mesh ref={innerGlowRef}>
        <icosahedronGeometry args={[0.6, 0]} />
        <meshBasicMaterial color="#8b7fff" transparent opacity={0.4} />
      </mesh>

      {/* orbiting nodes + connecting lines, fade out as split progresses */}
      <group visible={splitProgress < 0.85}>
        {orbitNodes.map((n, i) => {
          const t = 0; // static ring; motion applied via rotation offset in-shader-less way below
          const x = Math.cos(n.angle) * n.radius;
          const y = Math.sin(n.angle) * n.radius * 0.6 + n.tilt;
          const z = Math.sin(n.angle * 2) * 0.4;
          return (
            <group key={i}>
              <CoreNode position={[x, y, z]} color={i % 2 === 0 ? "#4de8ff" : "#8b7fff"} scale={0.7} />
              <Line
                points={[
                  [0, 0, 0],
                  [x, y, z],
                ]}
                color="#4de8ff"
                transparent
                opacity={0.12 * (1 - splitProgress)}
                lineWidth={1}
              />
            </group>
          );
        })}
      </group>

      {/* four systems the core splits into */}
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
