import React from 'react';

export const Step3Illustration: React.FC = () => (
  <div className="w-full h-full bg-slate-900 flex items-center justify-center p-8">
    <svg viewBox="0 0 200 200" className="w-full max-w-[300px] h-auto drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
      {/* Bottle Cap Area */}
      <rect x="70" y="20" width="60" height="20" rx="4" fill="#1e293b" stroke="#0ea5e9" strokeWidth="2" />
      {/* Motor Body */}
      <rect x="80" y="40" width="40" height="50" rx="2" fill="#334155" stroke="#0ea5e9" strokeWidth="2" />
      {/* Motor Shaft */}
      <rect x="98" y="90" width="4" height="20" fill="#94a3b8" />
      {/* Rotor (Step 3 focus: attachment) */}
      <g className="animate-spin-slow" style={{ transformOrigin: '100px 105px' }}>
        <path d="M100 105 L140 105 Q150 105 150 115" fill="none" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" />
        <path d="M100 105 L60 105 Q50 105 50 115" fill="none" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
        <path d="M100 105 L100 65 Q100 55 110 55" fill="none" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
      </g>
      {/* Sealing effect */}
      <circle cx="100" cy="40" r="15" fill="none" stroke="#22d3ee" strokeWidth="1" strokeDasharray="2 4" className="animate-pulse" />
      {/* Labels */}
      <text x="145" y="45" fill="#94a3b8" fontSize="8" className="font-orbitron">MOTOR SUPERIOR</text>
      <text x="145" y="75" fill="#94a3b8" fontSize="8" className="font-orbitron">SELLADO HERMÉTICO</text>
    </svg>
  </div>
);

export const Step4Illustration: React.FC = () => (
  <div className="w-full h-full bg-slate-950 flex items-center justify-center p-8">
    <svg viewBox="0 0 200 200" className="w-full max-w-[300px] h-auto drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
      {/* Water Flow */}
      <path d="M100 0 L100 120" stroke="#0ea5e9" strokeWidth="8" strokeDasharray="10 5" className="animate-[dash_2s_linear_infinite]" opacity="0.3" />
      {/* Pelton Turbine Center */}
      <circle cx="100" cy="140" r="15" fill="#1e293b" stroke="#22d3ee" strokeWidth="2" />
      {/* Turbine Blades (Spoons) */}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 100 140)`}>
          <path d="M100 125 Q115 110 115 125 T100 140" fill="#334155" stroke="#22d3ee" strokeWidth="1.5" />
        </g>
      ))}
      {/* Generator Motor */}
      <rect x="125" y="130" width="30" height="20" rx="2" fill="#334155" stroke="#22d3ee" strokeWidth="1" />
      {/* Connecting Wires */}
      <path d="M155 135 L180 135 L180 160" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 2" />
      {/* Energy Spark */}
      <path d="M175 165 L185 175 L170 175 L180 185" fill="none" stroke="#fbbf24" strokeWidth="2" className="animate-pulse" />
      
      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -15; }
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      
      <text x="20" y="145" fill="#94a3b8" fontSize="8" className="font-orbitron">TURBINA PELTON</text>
      <text x="145" y="120" fill="#fbbf24" fontSize="8" className="font-orbitron font-bold">GENERADOR DC</text>
    </svg>
  </div>
);
