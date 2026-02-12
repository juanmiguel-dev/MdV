
import React from 'react';

const VortexAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center opacity-30 pointer-events-none overflow-hidden">
      <svg className="w-[120%] h-[120%] animate-vortex" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#0ea5e9', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#020617', stopOpacity: 0 }} />
          </radialGradient>
        </defs>
        <circle cx="50%" cy="50%" r="48" fill="none" stroke="url(#grad)" strokeWidth="0.5" strokeDasharray="5,10" />
        <circle cx="50%" cy="50%" r="40" fill="none" stroke="url(#grad)" strokeWidth="0.5" strokeDasharray="3,15" />
        <circle cx="50%" cy="50%" r="30" fill="none" stroke="url(#grad)" strokeWidth="1" strokeDasharray="10,20" />
        {[...Array(8)].map((_, i) => (
          <path
            key={i}
            d={`M50 50 Q ${50 + Math.cos(i * Math.PI / 4) * 40} ${50 + Math.sin(i * Math.PI / 4) * 40} ${50 + Math.cos((i+1) * Math.PI / 4) * 45} ${50 + Math.sin((i+1) * Math.PI / 4) * 45}`}
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="0.2"
            opacity="0.5"
          />
        ))}
      </svg>
    </div>
  );
};

export default VortexAnimation;
