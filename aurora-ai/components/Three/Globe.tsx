"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";

function Earth() {
  const globe = useRef<THREE.Mesh>(null);

  const texture = useLoader(TextureLoader, "/textures/earth.jpg");

  texture.colorSpace = THREE.SRGBColorSpace;

  useFrame(() => {
    if (globe.current) {
      globe.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={globe}>
      <sphereGeometry args={[1.5, 128, 128]} />

      <meshPhongMaterial
        map={texture}
        color="white"
        shininess={10}
      />
    </mesh>
  );
}

function Atmosphere() {
  return (
    <mesh>
      <sphereGeometry args={[1.54, 128, 128]} />

      <meshBasicMaterial
        color="#66CCFF"
        transparent
        opacity={0.08}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

export default function Globe() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      {/* Lights */}

      <ambientLight intensity={2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      <directionalLight
        position={[-5, -5, -5]}
        intensity={1}
      />

      <pointLight
        position={[0, 3, 5]}
        intensity={1}
      />

      {/* Earth */}

      <Earth />

      <Atmosphere />

      {/* Stars */}

      <Stars
        radius={100}
        depth={60}
        count={7000}
        factor={4}
        saturation={0}
        fade
      />

      {/* Controls */}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
      />
    </Canvas>
  );
}