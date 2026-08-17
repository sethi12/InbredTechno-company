"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Line, Text } from "@react-three/drei";
import * as THREE from "three";

interface SaaSArchitectureProps {
  scrollProgress: number;
  lowPower?: boolean;
}

const MODULES = [
  { label: "API", color: "#4de8ff", angle: 0 },
  { label: "AUTH", color: "#8b7fff", angle: Math.PI / 3 },
  { label: "PAYMENTS", color: "#3cff8e", angle: (Math.PI / 3) * 2 },
  { label: "DATABASE", color: "#ffb84d", angle: Math.PI },
  { label: "ANALYTICS", color: "#ff5470", angle: (Math.PI / 3) * 4 },
  { label: "NOTIFICATIONS", color: "#4de8ff", angle: (Math.PI / 3) * 5 },
];

function SaaSPanel({
  label,
  color,
  position,
  progress,
}: {
  label: string;
  color: string;
  position: [number, number, number];
  progress: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
      ref.current.position.y += Math.sin(Date.now() * 0.001 + label.charCodeAt(0)) * 0.0008;
    }
  });

  return (
    <group ref={ref} position={position}>
      <mesh scale={progress}>
        <boxGeometry args={[0.35, 0.28, 0.04]} />
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.4 + progress * 0.3}
        />
      </mesh>
      <mesh scale={progress} position={[0, 0, 0.03]}>
        <planeGeometry args={[0.31, 0.24]} />
        <meshBasicMaterial color={color} transparent opacity={0.08} />
      </mesh>
      {progress > 0.6 && (
        <Text
          position={[0, 0, 0.04]}
          fontSize={0.08}
          color={color}
          anchorX="center"
          anchorY="middle"
          font={undefined}
          material-transparent
          material-opacity={Math.min(1, (progress - 0.6) * 2.5)}
          letterSpacing={0.1}
        >
          {label}
        </Text>
      )}
    </group>
  );
}

export function SaaSArchitecture({ scrollProgress, lowPower }: SaaSArchitectureProps) {
  const groupRef = useRef<THREE.Group>(null);
  const panelCount = lowPower ? 4 : 6;

  const panelPositions = useMemo(() => {
    return MODULES.slice(0, panelCount).map((m, i) => {
      const radius = 2.2;
      const x = Math.cos(m.angle) * radius;
      const y = Math.sin(m.angle) * radius;
      const z = Math.sin(m.angle * 2) * 0.3;
      return [x, y, z] as [number, number, number];
    });
  }, [panelCount]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.0008;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.25;
    }
  });

  // Each panel appears sequentially as scroll progresses
  const getProgressForPanel = (i: number) => {
    const start = i / panelCount;
    const end = (i + 1) / panelCount;
    return Math.min(1, Math.max(0, (scrollProgress - start) / (end - start)));
  };

  return (
    <group ref={groupRef}>
      {/* central core */}
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial
          color="#4de8ff"
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* connecting lines and panels */}
      {MODULES.slice(0, panelCount).map((m, i) => {
        const pos = panelPositions[i];
        const progress = getProgressForPanel(i);
        return (
          <group key={m.label}>
            <Line
              points={[
                [0, 0, 0],
                pos,
              ]}
              color={m.color}
              transparent
              opacity={progress * 0.35}
              lineWidth={1.5}
            />
            <SaaSPanel
              label={m.label}
              color={m.color}
              position={pos}
              progress={progress}
            />
          </group>
        );
      })}
    </group>
  );
}
