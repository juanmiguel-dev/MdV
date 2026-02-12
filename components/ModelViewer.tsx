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
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={2} />
            <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
            <Stage environment="city" intensity={0.6} contactShadow={true} adjustCamera={true}>
              <Center>
                <Model path={path} />
              </Center>
            </Stage>
          </Suspense>
          <OrbitControls makeDefault autoRotate autoRotateSpeed={1} enableZoom={true} />
        </Canvas>
        <div className="absolute top-4 left-4 bg-cyan-500/10 text-cyan-400 text-[10px] px-2 py-1 rounded border border-cyan-500/20 font-orbitron">
          INTERACTIVO
        </div>
      </div>
      <div className="p-6">
        <h4 className="font-orbitron font-bold text-cyan-400 mb-2">{title}</h4>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
