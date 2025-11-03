import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface SkillNodeProps {
  position: [number, number, number];
  skill: string;
  color: string;
  onHover: (skill: string | null) => void;
}

function SkillNode({ position, skill, color, onHover }: SkillNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      if (hovered) {
        meshRef.current.scale.setScalar(1.3);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => {
          setHovered(true);
          onHover(skill);
        }}
        onPointerOut={() => {
          setHovered(false);
          onHover(null);
        }}
      >
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.8 : 0.3}
          wireframe
        />
      </mesh>
      <Text
        position={[0, -0.8, 0]}
        fontSize={0.2}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {skill}
      </Text>
    </group>
  );
}

function SkillSphere({ onHover }: { onHover: (skill: string | null) => void }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  const skills = [
    { name: 'AWS', pos: [2, 0, 0] as [number, number, number], color: '#FF9900' },
    { name: 'Docker', pos: [-2, 0, 0] as [number, number, number], color: '#2496ED' },
    { name: 'C++', pos: [0, 2, 0] as [number, number, number], color: '#00599C' },
    { name: 'Python', pos: [0, -2, 0] as [number, number, number], color: '#3776AB' },
    { name: 'MySQL', pos: [0, 0, 2] as [number, number, number], color: '#4479A1' },
    { name: 'DevOps', pos: [0, 0, -2] as [number, number, number], color: '#00FFFF' },
    { name: 'GitHub', pos: [1.5, 1.5, 0] as [number, number, number], color: '#6e5494' },
    { name: 'VS Code', pos: [-1.5, -1.5, 0] as [number, number, number], color: '#007ACC' },
  ];

  return (
    <group ref={groupRef}>
      {skills.map((skill) => (
        <SkillNode
          key={skill.name}
          position={skill.pos}
          skill={skill.name}
          color={skill.color}
          onHover={onHover}
        />
      ))}
    </group>
  );
}

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Skills
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[500px] backdrop-blur-xl bg-white/5 dark:bg-black/5 rounded-3xl border border-white/20 overflow-hidden"
        >
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <SkillSphere onHover={setHoveredSkill} />
          </Canvas>
        </motion.div>

        {hoveredSkill && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-8"
          >
            <p className="text-2xl font-bold text-cyan-400">{hoveredSkill}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
