import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function AnimatedParticles() {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.01;
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.005;
    }
  });

  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 2000;
  const posArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i += 3) {
    posArray[i] = (Math.random() - 0.5) * 100;
    posArray[i + 1] = (Math.random() - 0.5) * 100;
    posArray[i + 2] = (Math.random() - 0.5) * 100;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

  return (
    <points ref={particlesRef} geometry={particlesGeometry}>
      <pointsMaterial size={0.5} color="#A6CFFF" sizeAttenuation transparent opacity={0.5} />
    </points>
  );
}

function AnimatedShapes() {
  const shapeGroupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (shapeGroupRef.current) {
      shapeGroupRef.current.children.forEach((child, index) => {
        child.position.y = Math.sin(state.clock.getElapsedTime() * 0.3 + index) * 3;
        child.rotation.x = state.clock.getElapsedTime() * 0.1;
        child.rotation.z = state.clock.getElapsedTime() * 0.15;
      });
    }
  });

  return (
    <group ref={shapeGroupRef}>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[-15 + i * 10, 0, -20]} scale={[2, 1.5, 2]}>
          <icosahedronGeometry args={[1, 4]} />
          <meshStandardMaterial
            color="#00FFFF"
            transparent
            opacity={0.1}
            wireframe
            emissive="#00FFFF"
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function CloudBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 30], fov: 75 }} dpr={[1, 2]}>
        <ambientLight intensity={0.4} color="#A6CFFF" />
        <pointLight position={[20, 20, 20]} intensity={0.8} color="#00FFFF" />
        <pointLight position={[-20, -20, 10]} intensity={0.4} color="#6366F1" />
        <fog attach="fog" args={['#A6CFFF', 10, 100]} />
        <AnimatedParticles />
        <AnimatedShapes />
      </Canvas>
    </div>
  );
}
