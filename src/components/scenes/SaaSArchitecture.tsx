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
  { label: "API GATEWAY", color: "#df9d56", angle: 0 },
  { label: "AUTH & RBAC", color: "#fbf7ee", angle: Math.PI / 3 },
  { label: "BILLING / STRIPE", color: "#5cb88a", angle: (Math.PI / 3) * 2 },
  { label: "POSTGRES / REDIS", color: "#e8a867", angle: Math.PI },
  { label: "REALTIME ANALYTICS", color: "#cca074", angle: (Math.PI / 3) * 4 },
  { label: "3D VISUALIZER", color: "#c57e3a", angle: (Math.PI / 3) * 5 },
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
        <boxGeometry args={[0.38, 0.28, 0.04]} />
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.45 + progress * 0.35}
        />
      </mesh>
      <mesh scale={progress} position={[0, 0, 0.03]}>
        <planeGeometry args={[0.34, 0.24]} />
        <meshBasicMaterial color={color} transparent opacity={0.12} />
      </mesh>
      {progress > 0.6 && (
        <Text
          position={[0, 0, 0.04]}
          fontSize={0.065}
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
    return MODULES.slice(0, panelCount).map((m) => {
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

  const getProgressForPanel = (i: number) => {
    const start = i / panelCount;
    const end = (i + 1) / panelCount;
    return Math.min(1, Math.max(0, (scrollProgress - start) / (end - start)));
  };

  return (
    <group ref={groupRef}>
      {/* Central Chocolate-Caramel Core */}
      <mesh>
        <sphereGeometry args={[0.32, 16, 16]} />
        <meshBasicMaterial
          color="#df9d56"
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Connecting Lines and Panels */}
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
              opacity={progress * 0.4}
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
