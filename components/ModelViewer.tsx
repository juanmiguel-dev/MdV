import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage, Center } from '@react-three/drei';

interface ModelProps {
  path: string;
}

const Model = ({ path }: ModelProps) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene} />;
};

export const ModelViewer: React.FC<{ path: string; title: string; description: string }> = ({ path, title, description }) => {
  return (
    <div className="flex flex-col bg-slate-900/50 rounded-3xl border border-slate-800 overflow-hidden backdrop-blur-sm group hover:border-cyan-500/50 transition-all duration-500 shadow-xl">
      <div className="h-[300px] w-full relative bg-slate-950/50">
        <Canvas shadows camera={{ position: [0, 0, 4], fov: 45 }}>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.5} contactShadow={true} adjustCamera={true}>
              <Center>
                <Model path={path} />
              </Center>
            </Stage>
          </Suspense>
          <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} enableZoom={false} />
        </Canvas>
        <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-800 text-[10px] text-cyan-400 font-orbitron uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
          3D Interactivo
        </div>
      </div>
      <div className="p-6">
        <h4 className="font-orbitron font-bold text-cyan-400 mb-2">{title}</h4>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
