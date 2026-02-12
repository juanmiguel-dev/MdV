import React, { Suspense, useLayoutEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage, Center } from '@react-three/drei';
import * as THREE from 'three';

// Preload common models to avoid waterfalls
useGLTF.preload('/planos/cavidad_superior.glb');
useGLTF.preload('/planos/cavidad_inferior.glb');
useGLTF.preload('/planos/rotor-v1.glb');
useGLTF.preload('/planos/turbina_pelton.glb');

interface ModelProps {
  path: string;
  color?: string;
}

const Model = ({ path, color }: ModelProps) => {
  const { scene } = useGLTF(path);
  
  // Clone and modify scene only when path or color changes
  const clonedScene = useMemo(() => {
    const clone = scene.clone();
    clone.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        // Create new material for each mesh to allow individual coloring
        const newMaterial = obj.material.clone();
        
        if (color) {
          newMaterial.color.set(color);
        }
        newMaterial.roughness = 0.3;
        newMaterial.metalness = 0.8;
        newMaterial.emissive = new THREE.Color(color || '#0ea5e9');
        newMaterial.emissiveIntensity = 0.2;
        
        obj.material = newMaterial;
      }
    });
    return clone;
  }, [scene, color]);

  return <primitive object={clonedScene} />;
};

const LoadingSpinner = () => (
  <mesh>
    <sphereGeometry args={[0.5, 16, 16]} />
    <meshStandardMaterial color="#0ea5e9" wireframe />
  </mesh>
);

export const ModelViewer: React.FC<{ path: string; title: string; description: string; color?: string }> = ({ path, title, description, color }) => {
  return (
    <div className="flex flex-col bg-slate-900/50 rounded-3xl border border-slate-800 overflow-hidden backdrop-blur-sm group hover:border-cyan-500/50 transition-all duration-500 shadow-xl min-h-[450px]">
      <div className="h-[300px] w-full relative bg-slate-950/50">
        <Canvas 
          shadows 
          camera={{ position: [0, 0, 10], fov: 50 }} 
          dpr={1} 
          frameloop="demand"
          performance={{ min: 0.5 }}
        >
          <Suspense fallback={<LoadingSpinner />}>
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <Stage environment="night" intensity={0.5} contactShadow={true} adjustCamera={true}>
              <Center>
                <Model path={path} color={color} />
              </Center>
            </Stage>
          </Suspense>
          <OrbitControls makeDefault autoRotate autoRotateSpeed={1} enableZoom={false} />
        </Canvas>
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <div className="bg-cyan-500/10 text-cyan-400 text-[10px] px-2 py-1 rounded border border-cyan-500/20 font-orbitron">
            INTERACTIVO
          </div>
          {color && (
            <div className="w-3 h-3 rounded-full border border-white/20 shadow-[0_0_8px_rgba(255,255,255,0.3)]" style={{ backgroundColor: color }}></div>
          )}
        </div>
      </div>
      <div className="p-6">
        <h4 className="font-orbitron font-bold text-cyan-400 mb-2">{title}</h4>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
