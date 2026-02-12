
import React, { memo } from 'react';

const VortexAnimation: React.FC = memo(() => {
  return (
    <div className="relative w-full h-full flex items-center justify-center opacity-60 pointer-events-none overflow-hidden transform-gpu">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15)_0%,transparent_70%)] blur-3xl"></div>
      <svg className="w-[140%] h-[140%] animate-vortex-smooth" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" style={{ backfaceVisibility: 'hidden' }}>
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#0ea5e9', stopOpacity: 0.6 }} />
            <stop offset="40%" style={{ stopColor: '#0ea5e9', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: '#020617', stopOpacity: 0 }} />
          </radialGradient>
        </defs>
        
        {/* Simplified geometry for performance */}
        <circle cx="50" cy="50" r="40" fill="none" stroke="url(#grad)" strokeWidth="0.4" strokeDasharray="10,20" opacity="0.6" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="url(#grad)" strokeWidth="1" opacity="0.9" />

        {[...Array(8)].map((_, i) => (
          <path
            key={i}
            d={`M50 50 Q ${50 + Math.cos(i * Math.PI / 4) * 30} ${50 + Math.sin(i * Math.PI / 4) * 30} ${50 + Math.cos((i + 1) * Math.PI / 4) * 60} ${50 + Math.sin((i + 1) * Math.PI / 4) * 60}`}
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="0.15"
            opacity="0.4"
            transform={`rotate(${i * 45} 50 50)`}
          />
        ))}
      </svg>
      
      <style>{`
        .animate-vortex-smooth {
          animation: rotate-vortex 60s linear infinite;
        }
        @keyframes rotate-vortex {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
});

export default VortexAnimation;
