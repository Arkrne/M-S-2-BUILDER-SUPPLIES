import { useRef } from 'react';
import type { FC } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const StructuralBeams = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame((_state) => {
    if (groupRef.current) {
      // Gentle rotation
      groupRef.current.rotation.y += 0.002;
      
      // Mouse reaction
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.y * 0.2, 0.1);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.2, 0.1);
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(20)].map((_, i) => (
        <Float key={i} speed={1} rotationIntensity={2} floatIntensity={2}>
          <mesh 
            position={[
              (Math.random() - 0.5) * 40,
              (Math.random() - 0.5) * 40,
              (Math.random() - 0.5) * 40
            ]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]}
          >
            <boxGeometry args={[Math.random() * 8 + 2, 0.05, 0.05]} />
            <meshBasicMaterial color={i % 4 === 0 ? "#ff0000" : i % 4 === 1 ? "#2962ff" : "#ffffff"} transparent opacity={0.3} />
          </mesh>
        </Float>
      ))}
      <gridHelper args={[100, 50, '#1a1a1a', '#0d0d0d']} position={[0, -10, 0]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  );
};

const Canvas3D: FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#0a0a0a]">
      <Canvas camera={{ position: [0, 0, 25], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <StructuralBeams />
      </Canvas>
    </div>
  );
};

export default Canvas3D;
