"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface DeviceSceneProps {
  scrollProgress: number;
  lowPower?: boolean;
}

function DeviceMockup({
  type,
  position,
  rotation,
  scale,
  color,
  progress,
}: {
  type: "phone" | "tablet" | "browser";
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
  progress: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15;
      ref.current.rotation.z += delta * 0.08;
    }
  });

  const getDeviceGeometry = () => {
    switch (type) {
      case "phone":
        return {
          width: 0.2,
          height: 0.4,
          depth: 0.015,
          bezel: 0.015,
        };
      case "tablet":
        return {
          width: 0.35,
          height: 0.26,
          depth: 0.012,
          bezel: 0.02,
        };
      case "browser":
        return {
          width: 0.4,
          height: 0.3,
          depth: 0.01,
          bezel: 0.015,
        };
    }
  };

  const device = getDeviceGeometry();

  return (
    <group
      ref={ref}
      position={position}
      rotation={rotation}
      scale={[scale * progress, scale * progress, scale * progress]}
    >
      {/* bezel/frame */}
      <mesh>
        <boxGeometry
          args={[device.width + device.bezel * 2, device.height + device.bezel * 2, device.depth + 0.003]}
        />
        <meshBasicMaterial color={color} wireframe opacity={0.5} transparent />
      </mesh>

      {/* screen area */}
      <mesh position={[0, 0, device.depth * 0.6]}>
        <planeGeometry args={[device.width, device.height]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* screen grid lines */}
      {type !== "browser" && (
        <>
          <lineSegments>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[
                  new Float32Array([
                    -device.width / 2,
                    device.height / 4,
                    device.depth,
                    device.width / 2,
                    device.height / 4,
                    device.depth,
                  ]),
                  3,
                ]}
              />
            </bufferGeometry>
            <lineBasicMaterial color={color} transparent opacity={0.25} />
          </lineSegments>
        </>
      )}
    </group>
  );
}

export function DeviceScene({ scrollProgress, lowPower }: DeviceSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = pointer.y * 0.15;
      groupRef.current.rotation.y += pointer.x * 0.08 + delta * 0.02;
    }
  });

  // camera orbit as scroll progresses
  const cameraAngle = scrollProgress * Math.PI * 2;

  return (
    <group ref={groupRef}>
      <DeviceMockup
        type="phone"
        position={[-1.2, 0.3, 0]}
        rotation={[0.15, -0.5, 0.08]}
        scale={1}
        color="#4de8ff"
        progress={Math.min(1, scrollProgress * 1.2)}
      />
      <DeviceMockup
        type="tablet"
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        scale={1.1}
        color="#8b7fff"
        progress={Math.min(1, scrollProgress * 1.2 - 0.1)}
      />
      <DeviceMockup
        type="browser"
        position={[1.2, -0.25, 0]}
        rotation={[-0.1, 0.5, -0.08]}
        scale={1}
        color="#3cff8e"
        progress={Math.min(1, scrollProgress * 1.2 - 0.2)}
      />
    </group>
  );
}
