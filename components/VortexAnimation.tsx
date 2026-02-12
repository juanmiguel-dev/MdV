
import React from 'react';

const VortexAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center opacity-60 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15)_0%,transparent_70%)] blur-3xl animate-pulse-slow"></div>
      <svg className="w-[140%] h-[140%] animate-vortex-smooth" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#0ea5e9', stopOpacity: 0.6 }} />
            <stop offset="40%" style={{ stopColor: '#0ea5e9', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: '#020617', stopOpacity: 0 }} />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Concentric rings with different dash patterns for depth */}
        <circle cx="50" cy="50" r="48" fill="none" stroke="url(#grad)" strokeWidth="0.3" strokeDasharray="1,4" opacity="0.4" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="url(#grad)" strokeWidth="0.4" strokeDasharray="10,20" opacity="0.6" />
        <circle cx="50" cy="50" r="32" fill="none" stroke="url(#grad)" strokeWidth="0.6" strokeDasharray="20,10" opacity="0.8" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="url(#grad)" strokeWidth="1" opacity="0.9" filter="url(#glow)" />

        {/* Spiraling arms with quadratic curves */}
        {[...Array(12)].map((_, i) => (
          <path
            key={i}
            d={`M50 50 Q ${50 + Math.cos(i * Math.PI / 6) * 30} ${50 + Math.sin(i * Math.PI / 6) * 30} ${50 + Math.cos((i + 1) * Math.PI / 6) * 60} ${50 + Math.sin((i + 1) * Math.PI / 6) * 60}`}
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="0.15"
            opacity="0.4"
            filter="url(#glow)"
            transform={`rotate(${i * 30} 50 50)`}
          />
        ))}
      </svg>
      
      <style>{`
        .animate-vortex-smooth {
          animation: rotate-vortex 40s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        @keyframes rotate-vortex {
          from { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          to { transform: rotate(360deg) scale(1); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default VortexAnimation;
