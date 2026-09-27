import React from "react";

interface DiagnosticVisualDiagramProps {
  gradeGroup: string;
  revealed?: boolean;
}

export const DiagnosticVisualDiagram: React.FC<DiagnosticVisualDiagramProps> = ({
  gradeGroup,
  revealed = false
}) => {
  if (gradeGroup === "1&2") {
    // Marble Bar Model Decomposition
    return (
      <div className="w-full bg-[#0A1128] rounded-2xl border border-white/15 p-4 sm:p-5 text-white shadow-xl relative overflow-hidden">
        {/* Floating background mathematical particle */}
        <div className="absolute top-2 right-4 text-xs font-mono text-[#FFD700]/30 select-none">
          17 + (17 - 8) = ?
        </div>
        
        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
          <span className="font-semibold text-white/90 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
            Visual Problem Diagram: Number Bond &amp; Tape Model
          </span>
          <span className="text-[#4FCBA4] font-mono text-[11px]">Primary Bar Model</span>
        </div>

        <svg viewBox="0 0 420 180" fill="none" className="w-full h-auto mt-2 select-none">
          <defs>
            <linearGradient id="mayaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4B3DF0" />
              <stop offset="100%" stopColor="#8B7CFF" />
            </linearGradient>
            <linearGradient id="liamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6A45" />
              <stop offset="100%" stopColor="#FFA07A" />
            </linearGradient>
          </defs>

          {/* Maya's Bar */}
          <text x="15" y="42" fontFamily="Space Grotesk, sans-serif" fontSize="12" fill="#FFFFFF" fontWeight="600">
            Maya
          </text>
          <rect x="75" y="24" width="280" height="28" rx="6" fill="url(#mayaGrad)" stroke="rgba(255,255,255,0.2)" />
          <text x="215" y="43" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="12" fill="#FFFFFF" fontWeight="bold">
            17 marbles
          </text>

          {/* Liam's Bar */}
          <text x="15" y="98" fontFamily="Space Grotesk, sans-serif" fontSize="12" fill="#FFFFFF" fontWeight="600">
            Liam
          </text>
          {/* Solid part (9) */}
          <rect x="75" y="80" width="148" height="28" rx="6" fill="url(#liamGrad)" stroke="rgba(255,255,255,0.2)" />
          <text x="149" y="99" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="12" fill="#FFFFFF" fontWeight="bold">
            ? (17 - 8 = 9)
          </text>

          {/* Difference dashed part (8) */}
          <rect x="223" y="80" width="132" height="28" rx="6" fill="rgba(255,255,255,0.06)" stroke="#FFD700" strokeWidth="1.5" strokeDasharray="4 4" />
          <text x="289" y="99" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="11" fill="#FFD700" fontWeight="600">
            8 fewer
          </text>

          {/* Curly bracket or summary indicator for Total */}
          <line x1="75" y1="130" x2="355" y2="130" stroke="#4FCBA4" strokeWidth="2" strokeDasharray="2 2" />
          <polygon points="75,127 70,130 75,133" fill="#4FCBA4" />
          <polygon points="355,127 360,130 355,133" fill="#4FCBA4" />
          
          <rect x="140" y="142" width="150" height="26" rx="6" fill="#0E1630" stroke="#4FCBA4" strokeWidth="1" />
          <text x="215" y="159" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="11" fill="#4FCBA4" fontWeight="bold">
            Total = 17 + 9 = 26
          </text>
        </svg>
      </div>
    );
  }

  if (gradeGroup === "3&4") {
    // Binary Power Sequence Curve & Progression Graphic
    return (
      <div className="w-full bg-[#0A1128] rounded-2xl border border-white/15 p-4 sm:p-5 text-white shadow-xl relative overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
          <span className="font-semibold text-white/90 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
            Visual Problem Diagram: Binary Powers Growth Curve
          </span>
          <span className="text-[#FFD700] font-mono text-[11px]">f(n) = 2^(n+1) - 1</span>
        </div>

        <svg viewBox="0 0 420 185" fill="none" className="w-full h-auto mt-2 select-none">
          <defs>
            <linearGradient id="seqGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4FCBA4" />
              <stop offset="50%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#FF6A45" />
            </linearGradient>
            <filter id="seqGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Axes */}
          <line x1="30" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
          <line x1="45" y1="15" x2="45" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

          {/* Exponential Growth Curve through the terms */}
          <path
            d="M 60 144 Q 180 135, 260 100 T 385 30"
            stroke="url(#seqGradient)"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            filter="url(#seqGlow)"
          />

          {/* Term 1: 3 (2^2 - 1) */}
          <circle cx="65" cy="144" r="5" fill="#4FCBA4" />
          <text x="65" y="165" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)">n=1</text>
          <text x="65" y="134" textAnchor="middle" fontSize="11" fill="#4FCBA4" fontWeight="bold">3</text>

          {/* Term 2: 7 */}
          <circle cx="125" cy="140" r="5" fill="#4FCBA4" />
          <text x="125" y="165" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)">n=2</text>
          <text x="125" y="130" textAnchor="middle" fontSize="11" fill="#4FCBA4" fontWeight="bold">7</text>

          {/* Term 3: 15 */}
          <circle cx="185" cy="128" r="5" fill="#FFD700" />
          <text x="185" y="165" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)">n=3</text>
          <text x="185" y="118" textAnchor="middle" fontSize="11" fill="#FFD700" fontWeight="bold">15</text>

          {/* Term 4: 31 */}
          <circle cx="245" cy="108" r="5.5" fill="#FFD700" />
          <text x="245" y="165" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)">n=4</text>
          <text x="245" y="98" textAnchor="middle" fontSize="11" fill="#FFD700" fontWeight="bold">31</text>

          {/* Term 5: 63 */}
          <circle cx="305" cy="74" r="6" fill="#FF6A45" />
          <text x="305" y="165" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)">n=5</text>
          <text x="305" y="64" textAnchor="middle" fontSize="11" fill="#FF6A45" fontWeight="bold">63</text>

          {/* Term 6 Target: 127 */}
          <circle cx="375" cy="30" r="9" fill="#FFD700" opacity="0.25" />
          <circle cx="375" cy="30" r="5.5" fill="#FFFFFF" stroke="#FFD700" strokeWidth="2" />
          <text x="375" y="165" textAnchor="middle" fontSize="10" fill="#FFD700" fontWeight="bold">n=6 (?)</text>
          
          <rect x="330" y="5" width="85" height="22" rx="5" fill="#0A1128" stroke="#FFD700" strokeWidth="1" />
          <text x="372" y="20" textAnchor="middle" fontSize="11" fill="#FFD700" fontWeight="bold">
            2^7 - 1 = 127
          </text>
        </svg>
      </div>
    );
  }

  if (gradeGroup === "5&6") {
    // Water Tank Unit Model Fractions Diagram
    return (
      <div className="w-full bg-[#0A1128] rounded-2xl border border-white/15 p-4 sm:p-5 text-white shadow-xl relative overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
          <span className="font-semibold text-white/90 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
            Visual Problem Diagram: 8-Unit Fraction Vessel
          </span>
          <span className="text-[#4FCBA4] font-mono text-[11px]">3/8 → 6/8 (+35 Liters)</span>
        </div>

        <svg viewBox="0 0 420 180" fill="none" className="w-full h-auto mt-2 select-none">
          <defs>
            <linearGradient id="waterInitial" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
            <linearGradient id="waterAdded" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4FCBA4" />
              <stop offset="100%" stopColor="#1F9C79" />
            </linearGradient>
          </defs>

          {/* Tank Outline (8 equal horizontal blocks) */}
          <rect x="40" y="20" width="160" height="140" rx="8" fill="#070D1F" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />

          {/* 8 Units Horizontal Grid inside tank */}
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1="40"
              y1={20 + (i * 17.5)}
              x2="200"
              y2={20 + (i * 17.5)}
              stroke="rgba(255,255,255,0.12)"
              strokeDasharray="2 2"
            />
          ))}

          {/* Bottom 3 Units (Initial 3/8) */}
          <rect x="42" y="107.5" width="156" height="51" fill="url(#waterInitial)" />
          <text x="120" y="137" textAnchor="middle" fontSize="11" fill="#FFFFFF" fontWeight="bold">
            Initial: 3/8
          </text>

          {/* Middle 3 Units (Added 35 Liters = reaches 6/8 = 3/4) */}
          <rect x="42" y="55" width="156" height="52.5" fill="url(#waterAdded)" opacity="0.85" />
          <text x="120" y="85" textAnchor="middle" fontSize="11" fill="#0A1128" fontWeight="bold">
            + 35 Liters
          </text>

          {/* Top 2 Units (Remaining empty 2/8) */}
          <text x="120" y="38" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.4)">
            Empty: 2/8
          </text>

          {/* Right Callouts Breakdown */}
          <g transform="translate(230, 30)">
            <rect x="0" y="0" width="170" height="120" rx="10" fill="#0D1633" stroke="rgba(255,255,255,0.12)" />
            <text x="15" y="25" fontSize="11" fill="#FFD700" fontWeight="bold">Visual Unit Model:</text>
            
            <text x="15" y="48" fontSize="10" fill="rgba(255,255,255,0.75)">
              • 3/4 converted = <tspan fill="#4FCBA4" fontWeight="bold">6/8 units</tspan>
            </text>
            <text x="15" y="70" fontSize="10" fill="rgba(255,255,255,0.75)">
              • Increase = 6 - 3 = <tspan fill="#FFD700" fontWeight="bold">3 units</tspan>
            </text>
            <text x="15" y="92" fontSize="10" fill="rgba(255,255,255,0.75)">
              • 3 units = 35 Liters
            </text>
            <text x="15" y="110" fontSize="10" fill="#4FCBA4" fontWeight="bold">
              • Full Tank (8 units) = 93.3 L
            </text>
          </g>
        </svg>
      </div>
    );
  }

  // Grade 7&8: Pigeonhole Principle Drawer & Socks Diagram
  return (
    <div className="w-full bg-[#0A1128] rounded-2xl border border-white/15 p-4 sm:p-5 text-white shadow-xl relative overflow-hidden">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
        <span className="font-semibold text-white/90 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
          Visual Problem Diagram: Dirichlet's Pigeonhole Principle
        </span>
        <span className="text-[#FFD700] font-mono text-[11px]">2 Color Categories (Holes)</span>
      </div>

      <svg viewBox="0 0 420 180" fill="none" className="w-full h-auto mt-2 select-none">
        {/* Drawer graphic */}
        <rect x="25" y="25" width="180" height="130" rx="10" fill="#0D1633" stroke="rgba(255,215,0,0.3)" strokeWidth="1.5" />
        <text x="115" y="45" textAnchor="middle" fontSize="11" fill="#FFD700" fontWeight="bold">
          Dark Drawer (24 Pairs)
        </text>

        {/* 2 Color Category Compartments (Pigeonholes) */}
        <rect x="40" y="58" width="70" height="85" rx="8" fill="rgba(255,106,69,0.15)" stroke="#FF6A45" strokeWidth="1.5" />
        <circle cx="75" cy="85" r="14" fill="#FF6A45" />
        <text x="75" y="90" textAnchor="middle" fontSize="11" fill="#FFFFFF" fontWeight="bold">RED</text>
        <text x="75" y="125" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)">Category 1</text>

        <rect x="120" y="58" width="70" height="85" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        <circle cx="155" cy="85" r="14" fill="#1C1930" stroke="#FFFFFF" strokeWidth="1.5" />
        <text x="155" y="90" textAnchor="middle" fontSize="10" fill="#FFFFFF" fontWeight="bold">BLACK</text>
        <text x="155" y="125" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)">Category 2</text>

        {/* Pulling Sequence on Right */}
        <g transform="translate(230, 25)">
          <rect x="0" y="0" width="170" height="130" rx="10" fill="#091024" stroke="rgba(255,255,255,0.12)" />
          
          <text x="14" y="24" fontSize="11" fill="#FFD700" fontWeight="bold">Pigeonhole Logic:</text>
          
          <g transform="translate(14, 38)">
            <circle cx="8" cy="8" r="8" fill="#FF6A45" />
            <text x="24" y="12" fontSize="10" fill="rgba(255,255,255,0.8)">Pull 1: Red Sock</text>
          </g>

          <g transform="translate(14, 62)">
            <circle cx="8" cy="8" r="8" fill="#1C1930" stroke="#FFFFFF" strokeWidth="1" />
            <text x="24" y="12" fontSize="10" fill="rgba(255,255,255,0.8)">Pull 2: Black Sock</text>
          </g>

          <g transform="translate(14, 88)">
            <circle cx="8" cy="8" r="9" fill="#4FCBA4" />
            <text x="8" y="12" textAnchor="middle" fontSize="10" fill="#0A1128" fontWeight="bold">3</text>
            <text x="24" y="12" fontSize="10" fill="#4FCBA4" fontWeight="bold">Pull 3: GUARANTEED MATCH!</text>
          </g>

          <text x="14" y="120" fontSize="9" fill="rgba(255,255,255,0.5)">
            k + 1 = 2 + 1 = 3 picks minimum
          </text>
        </g>
      </svg>
    </div>
  );
};
