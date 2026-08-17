"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

interface NeuralNetworkProps {
  scrollProgress: number;
  lowPower?: boolean;
}

const LAYERS = [
  { name: "DATA", x: -3, color: "#4de8ff", nodeCount: 8 },
  { name: "TRAINING", x: -1.5, color: "#8b7fff", nodeCount: 12 },
  { name: "MODEL", x: 0, color: "#3cff8e", nodeCount: 16 },
  { name: "INFERENCE", x: 1.5, color: "#ffb84d", nodeCount: 12 },
  { name: "PRODUCT", x: 3, color: "#ff5470", nodeCount: 8 },
];

interface Particle {
  position: [number, number, number];
  velocity: [number, number, number];
  progress: number;
  path: Array<[number, number, number]>;
}

function NetworkNode({
  position,
  color,
  scale = 1,
  progress,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  progress: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.15;
      ref.current.scale.setScalar(scale * pulse * progress);
      const mat = ref.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.6 * progress;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
}

export function NeuralNetwork({ scrollProgress, lowPower }: NeuralNetworkProps) {
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<Particle[]>([]);

  // Generate network nodes
  /* eslint-disable react-hooks/purity -- deliberate one-time randomized layout */
  const nodes = useMemo(() => {
    const nodeList: Array<{
      position: [number, number, number];
      layer: number;
      color: string;
    }> = [];
    LAYERS.forEach((layer, layerIdx) => {
      for (let i = 0; i < layer.nodeCount; i++) {
        const y = (i - layer.nodeCount / 2) * 0.35;
        nodeList.push({
          position: [layer.x, y, Math.random() * 0.4],
          layer: layerIdx,
          color: layer.color,
        });
      }
    });
    return nodeList;
  }, []);
  /* eslint-enable react-hooks/purity */

  // Initialize particles on first frame (safe for refs outside render)
  const particlesInitialized = useRef(false);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }

    // one-time particle initialization on first frame
    if (!particlesInitialized.current && nodes.length > 0) {
      particlesInitialized.current = true;
      /* eslint-disable react-hooks/purity -- deliberate one-time initialization */
      particlesRef.current = Array.from({ length: lowPower ? 20 : 60 }, () => {
        const startLayer = Math.floor(Math.random() * (LAYERS.length - 1));
        const startNode = nodes[nodes.findIndex((n) => n.layer === startLayer)];
        const endNode = nodes[nodes.findIndex((n) => n.layer === startLayer + 1)];

        return {
          position: startNode ? [...startNode.position] : [0, 0, 0],
          velocity: [0, 0, 0],
          progress: Math.random(),
          path:
            startNode && endNode ? [startNode.position, endNode.position] : [[0, 0, 0]],
        } as Particle;
      });
      /* eslint-enable react-hooks/purity */
    }

    // animate particles
    particlesRef.current.forEach((p) => {
      p.progress += delta * (0.3 + scrollProgress * 0.4);
      if (p.progress > 1) {
        p.progress = 0;
        const currentLayer = Math.floor(Math.random() * (LAYERS.length - 1));
        const startNodes = nodes.filter((n) => n.layer === currentLayer);
        const endNodes = nodes.filter((n) => n.layer === currentLayer + 1);
        if (startNodes.length && endNodes.length) {
          const start = startNodes[Math.floor(Math.random() * startNodes.length)];
          const end = endNodes[Math.floor(Math.random() * endNodes.length)];
          p.path = [start.position, end.position];
          p.position = [...start.position];
        }
      } else if (p.path.length > 1) {
        const [start, end] = p.path;
        p.position = [
          start[0] + (end[0] - start[0]) * p.progress,
          start[1] + (end[1] - start[1]) * p.progress,
          start[2] + (end[2] - start[2]) * p.progress,
        ];
      }
    });
  });

  const layerProgress = Math.min(1, scrollProgress * 1.3);

  return (
    <group ref={groupRef}>
      {/* nodes */}
      {nodes.map((n, i) => (
        <NetworkNode
          key={i}
          position={n.position}
          color={n.color}
          progress={Math.min(1, (scrollProgress - n.layer * 0.1) * 1.2)}
          scale={0.8 + n.layer * 0.15}
        />
      ))}

      {/* connections */}
      {LAYERS.map((layer, i) => {
        if (i === LAYERS.length - 1) return null;
        const nextLayer = LAYERS[i + 1];
        const currentNodes = nodes.filter((n) => n.layer === i);
        const nextNodes = nodes.filter((n) => n.layer === i + 1);

        return (
          <group key={`layer-${i}`}>
            {currentNodes.slice(0, lowPower ? 4 : 6).map((n, ni) => {
              const targetIdx = Math.floor((ni / currentNodes.length) * nextNodes.length);
              const target = nextNodes[targetIdx];
              if (!target) return null;

              return (
                <Line
                  key={`line-${ni}`}
                  points={[n.position, target.position]}
                  color={n.color}
                  transparent
                  opacity={Math.min(1, (scrollProgress - i * 0.08) * 0.25)}
                  lineWidth={0.8}
                />
              );
            })}
          </group>
        );
      })}

      {/* data particles */}
      {/* eslint-disable react-hooks/refs -- safe: particles initialized on first frame before render */}
      {particlesRef.current.map((p, i) => (
        <mesh key={i} position={p.position}>
          <sphereGeometry args={[0.04, 6, 6]} />
          <meshBasicMaterial
            color="#4de8ff"
            transparent
            opacity={Math.max(0, 1 - Math.abs(p.progress - 0.5) * 2) * scrollProgress * 0.8}
          />
        </mesh>
      ))}
      {/* eslint-enable react-hooks/refs */}
    </group>
  );
}
