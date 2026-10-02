"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

interface RobotAssemblyProps {
  scrollProgress: number;
  lowPower?: boolean;
}

const PARTS = [
  { name: "HEAD", threshold: 0.0 },
  { name: "TORSO", threshold: 0.12 },
  { name: "LEFT_ARM", threshold: 0.22 },
  { name: "RIGHT_ARM", threshold: 0.30 },
  { name: "LEFT_LEG", threshold: 0.40 },
  { name: "RIGHT_LEG", threshold: 0.48 },
  { name: "SENSORS", threshold: 0.58 },
  { name: "WHEELS", threshold: 0.66 },
];

function RobotPart({
  visible,
  children,
  position,
}: {
  visible: boolean;
  progress: number;
  children: React.ReactNode;
  position: [number, number, number];
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    const target = visible ? 1 : 0;
    const current = ref.current.scale.x;
    const next = current + (target - current) * delta * 5;
    ref.current.scale.setScalar(Math.max(0.001, next));
    const targetY = position[1];
    const dropY = visible ? targetY : targetY + 2;
    ref.current.position.y += (dropY - ref.current.position.y) * delta * 5;
  });

  return (
    <group ref={ref} position={position} scale={0.001}>
      {children}
    </group>
  );
}

export function RobotAssembly({ scrollProgress, lowPower }: RobotAssemblyProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  const partVisible = (name: string) => {
    const part = PARTS.find((p) => p.name === name);
    return part ? scrollProgress >= part.threshold : false;
  };

  const partProgress = (name: string) => {
    const part = PARTS.find((p) => p.name === name);
    if (!part) return 0;
    return Math.min(1, (scrollProgress - part.threshold) / 0.1);
  };

  const assembled = scrollProgress >= 0.75;
  const activated = scrollProgress >= 0.88;

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += (pointer.x * 0.6 - groupRef.current.rotation.y) * delta * 2;
  });

  const glowColor = activated ? "#5cb88a" : "#df9d56";
  const wireColor = assembled ? "#df9d56" : "#8d7764";

  return (
    <group ref={groupRef}>
      {/* HEAD */}
      <RobotPart visible={partVisible("HEAD")} progress={partProgress("HEAD")} position={[0, 1.8, 0]}>
        <mesh>
          <boxGeometry args={[0.6, 0.55, 0.5]} />
          <meshBasicMaterial color={wireColor} wireframe transparent opacity={0.8} />
        </mesh>
        {/* Optical Sensor Eyes */}
        {activated ? (
          <>
            <mesh position={[-0.15, 0.05, 0.26]}>
              <sphereGeometry args={[0.07, 8, 8]} />
              <meshBasicMaterial color={glowColor} transparent opacity={0.95} />
            </mesh>
            <mesh position={[0.15, 0.05, 0.26]}>
              <sphereGeometry args={[0.07, 8, 8]} />
              <meshBasicMaterial color={glowColor} transparent opacity={0.95} />
            </mesh>
          </>
        ) : (
          <>
            <mesh position={[-0.15, 0.05, 0.26]}>
              <sphereGeometry args={[0.06, 8, 8]} />
              <meshBasicMaterial color="#df9d56" transparent opacity={0.5} />
            </mesh>
            <mesh position={[0.15, 0.05, 0.26]}>
              <sphereGeometry args={[0.06, 8, 8]} />
              <meshBasicMaterial color="#df9d56" transparent opacity={0.5} />
            </mesh>
          </>
        )}
      </RobotPart>

      {/* NECK connector */}
      {partVisible("HEAD") && partVisible("TORSO") && (
        <Line points={[[0, 1.5, 0], [0, 1.28, 0]]} color={wireColor} lineWidth={2} />
      )}

      {/* TORSO */}
      <RobotPart visible={partVisible("TORSO")} progress={partProgress("TORSO")} position={[0, 0.85, 0]}>
        <mesh>
          <boxGeometry args={[0.85, 0.85, 0.55]} />
          <meshBasicMaterial color={wireColor} wireframe transparent opacity={0.75} />
        </mesh>
        {/* Core Reactor Glow */}
        {assembled && (
          <mesh>
            <boxGeometry args={[0.4, 0.4, 0.1]} />
            <meshBasicMaterial color={glowColor} transparent opacity={0.25} />
          </mesh>
        )}
      </RobotPart>

      {/* LEFT ARM */}
      <RobotPart visible={partVisible("LEFT_ARM")} progress={partProgress("LEFT_ARM")} position={[-0.7, 0.7, 0]}>
        <mesh position={[0, -0.25, 0]}>
          <boxGeometry args={[0.22, 0.8, 0.22]} />
          <meshBasicMaterial color={wireColor} wireframe transparent opacity={0.7} />
        </mesh>
        <mesh position={[0, -0.7, 0]}>
          <sphereGeometry args={[0.14, 8, 8]} />
          <meshBasicMaterial color={wireColor} wireframe transparent opacity={0.6} />
        </mesh>
      </RobotPart>

      {/* RIGHT ARM */}
      <RobotPart visible={partVisible("RIGHT_ARM")} progress={partProgress("RIGHT_ARM")} position={[0.7, 0.7, 0]}>
        <mesh position={[0, -0.25, 0]}>
          <boxGeometry args={[0.22, 0.8, 0.22]} />
          <meshBasicMaterial color={wireColor} wireframe transparent opacity={0.7} />
        </mesh>
        <mesh position={[0, -0.7, 0]}>
          <sphereGeometry args={[0.14, 8, 8]} />
          <meshBasicMaterial color={wireColor} wireframe transparent opacity={0.6} />
        </mesh>
      </RobotPart>

      {/* LEG connectors */}
      {partVisible("TORSO") && partVisible("LEFT_LEG") && (
        <Line points={[[0, 0.4, 0], [-0.28, 0.15, 0]]} color={wireColor} lineWidth={1.5} />
      )}
      {partVisible("TORSO") && partVisible("RIGHT_LEG") && (
        <Line points={[[0, 0.4, 0], [0.28, 0.15, 0]]} color={wireColor} lineWidth={1.5} />
      )}

      {/* LEFT LEG */}
      <RobotPart visible={partVisible("LEFT_LEG")} progress={partProgress("LEFT_LEG")} position={[-0.28, -0.35, 0]}>
        <mesh position={[0, -0.3, 0]}>
          <boxGeometry args={[0.25, 0.75, 0.28]} />
          <meshBasicMaterial color={wireColor} wireframe transparent opacity={0.7} />
        </mesh>
        <mesh position={[0, -0.72, 0]}>
          <boxGeometry args={[0.3, 0.2, 0.35]} />
          <meshBasicMaterial color={wireColor} wireframe transparent opacity={0.6} />
        </mesh>
      </RobotPart>

      {/* RIGHT LEG */}
      <RobotPart visible={partVisible("RIGHT_LEG")} progress={partProgress("RIGHT_LEG")} position={[0.28, -0.35, 0]}>
        <mesh position={[0, -0.3, 0]}>
          <boxGeometry args={[0.25, 0.75, 0.28]} />
          <meshBasicMaterial color={wireColor} wireframe transparent opacity={0.7} />
        </mesh>
        <mesh position={[0, -0.72, 0]}>
          <boxGeometry args={[0.3, 0.2, 0.35]} />
          <meshBasicMaterial color={wireColor} wireframe transparent opacity={0.6} />
        </mesh>
      </RobotPart>

      {/* SENSORS */}
      {!lowPower && partVisible("SENSORS") && (
        <>
          <mesh position={[0, 2.15, 0]} scale={partProgress("SENSORS")}>
            <coneGeometry args={[0.08, 0.2, 6]} />
            <meshBasicMaterial color={glowColor} transparent opacity={0.8} />
          </mesh>
          {[-0.35, 0.35].map((x) => (
            <mesh key={x} position={[x, 1.95, 0.28]} scale={partProgress("SENSORS")}>
              <sphereGeometry args={[0.055, 8, 8]} />
              <meshBasicMaterial color="#fbf7ee" transparent opacity={0.8} />
            </mesh>
          ))}
        </>
      )}

      {/* WHEELS / BASE */}
      {partVisible("WHEELS") && (
        <>
          {[-0.45, 0.45].map((x) => (
            <mesh
              key={x}
              position={[x, -1.28, 0]}
              scale={partProgress("WHEELS")}
            >
              <cylinderGeometry args={[0.18, 0.18, 0.1, 12]} />
              <meshBasicMaterial color={wireColor} wireframe transparent opacity={0.7} />
            </mesh>
          ))}
        </>
      )}

      {/* Activation Aura */}
      {activated && (
        <mesh scale={2.5}>
          <sphereGeometry args={[0.5, 8, 8]} />
          <meshBasicMaterial
            color="#5cb88a"
            transparent
            opacity={0.06}
            side={THREE.BackSide}
          />
        </mesh>
      )}
    </group>
  );
}
