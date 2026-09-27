import React from "react";
import { MentalMathVisualizer } from "./MentalMathVisualizer";

export type MathIllustrationType =
  | "parabola-hero"
  | "classroom-session"
  | "olympiad-trophy"
  | "diagnostic-dashboard"
  | "mental-speed"
  | "geometry-proof";

interface MathGraphicProps {
  type: MathIllustrationType;
  className?: string;
  badge?: string;
}

export const MathGraphic: React.FC<MathGraphicProps> = ({
  type,
  className = "",
  badge
}) => {
  switch (type) {
    case "parabola-hero":
      return (
        <div className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#060B1A] via-[#0D1836] to-[#0A1128] border border-white/15 p-4 shadow-2xl ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:18px_18px] opacity-15 pointer-events-none" />
          <svg viewBox="0 0 380 280" fill="none" className="w-full h-auto overflow-visible select-none">
            <defs>
              <linearGradient id="goldGradientHero" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF275" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#FFA000" />
              </linearGradient>
              <linearGradient id="areaGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FFD700" stopOpacity="0.0" />
              </linearGradient>
              <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Grid Coordinates */}
            <line x1="30" y1="235" x2="355" y2="235" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
            <line x1="55" y1="25" x2="55" y2="255" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
            <line x1="30" y1="130" x2="355" y2="130" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
            <line x1="200" y1="25" x2="200" y2="235" stroke="rgba(255,215,0,0.15)" strokeDasharray="4 4" />

            {/* Area under curve fill */}
            <path
              d="M 60 235 C 120 50, 260 50, 335 235 Z"
              fill="url(#areaGlow)"
            />

            {/* Main Parabolic Arc with glowing gold vector */}
            <path
              d="M 60 235 C 120 50, 260 50, 335 235"
              stroke="url(#goldGradientHero)"
              strokeWidth="4.5"
              fill="none"
              strokeLinecap="round"
              filter="url(#neonGlow)"
            />

            {/* Intermediate Points on the curve */}
            <circle cx="100" cy="165" r="4.5" fill="#4FCBA4" />
            <circle cx="285" cy="155" r="4.5" fill="#4B3DF0" />

            {/* Peak Vertex Point */}
            <g className="cursor-pointer">
              <circle cx="195" cy="74" r="26" fill="#FFD700" opacity="0.14" />
              <circle cx="195" cy="74" r="14" fill="#FFD700" opacity="0.28" />
              <circle cx="195" cy="74" r="7" fill="#FFFFFF" stroke="#FFD700" strokeWidth="2.5" />
              
              {/* Vertex Callout Box */}
              <rect x="95" y="16" width="200" height="34" rx="8" fill="#0A1128" stroke="#FFD700" strokeWidth="1.2" />
              <text x="195" y="38" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="11" fill="#FFD700" fontWeight="700">
                ⚡ VERTEX: Peak Olympiad Rank
              </text>
            </g>

            {/* Floating Live Metric Card */}
            <g transform="translate(245, 155)">
              <rect x="0" y="0" width="112" height="66" rx="12" fill="#091024" stroke="rgba(255,215,0,0.3)" strokeWidth="1" />
              <circle cx="18" cy="22" r="5" fill="#4FCBA4" />
              <text x="30" y="25" fontFamily="Space Grotesk, sans-serif" fontSize="10" fill="rgba(255,255,255,0.7)">
                Live Delta
              </text>
              <text x="16" y="52" fontFamily="Space Grotesk, sans-serif" fontSize="20" fontWeight="700" fill="#4FCBA4">
                ↑ 46%
              </text>
            </g>
          </svg>
          {badge && (
            <span className="absolute bottom-3 left-4 text-[10px] font-semibold text-[#FFD700] uppercase tracking-wider bg-black/40 px-2 py-0.5 rounded border border-white/10">
              {badge}
            </span>
          )}
        </div>
      );

    case "classroom-session":
      return (
        <div className={`relative w-full rounded-2xl overflow-hidden bg-[#0A1128] border border-white/15 p-5 text-white shadow-lg ${className}`}>
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              <span className="font-semibold text-white/90">MathsVertex Live Studio · Batch of 6</span>
            </div>
            <span className="text-[#FFD700] font-mono text-[11px]">UAE: 05:30 PM</span>
          </div>

          <svg viewBox="0 0 360 190" fill="none" className="w-full h-auto mt-3 select-none">
            {/* Virtual Board Background */}
            <rect x="10" y="10" width="225" height="170" rx="10" fill="#0D1633" stroke="rgba(255,255,255,0.12)" />
            
            {/* Whiteboard problem text */}
            <text x="25" y="35" fontFamily="Space Grotesk, sans-serif" fontSize="11" fill="#FFD700" fontWeight="700">
              IMO 2026: Working Backwards
            </text>
            
            {/* Geometric diagram on board */}
            <polygon points="50,140 180,140 115,60" stroke="#4FCBA4" strokeWidth="2.5" fill="rgba(79,203,164,0.1)" />
            <circle cx="115" cy="113" r="27" stroke="#FFD700" strokeWidth="1.8" fill="none" strokeDasharray="3 3" />
            <text x="105" y="117" fontSize="10" fill="#FFFFFF" fontWeight="bold">r = 3</text>
            
            {/* Small student video grid on right */}
            <rect x="245" y="10" width="105" height="48" rx="8" fill="#152147" stroke="rgba(255,215,0,0.3)" />
            <circle cx="265" cy="34" r="14" fill="#4B3DF0" />
            <text x="260" y="38" fontSize="10" fill="#FFFFFF" fontWeight="bold">HA</text>
            <text x="286" y="32" fontSize="9" fill="#FFFFFF" fontWeight="600">Hasib Sir</text>
            <text x="286" y="44" fontSize="8" fill="#4FCBA4">Mentor</text>

            <rect x="245" y="65" width="105" height="38" rx="6" fill="#111B3B" stroke="rgba(255,255,255,0.08)" />
            <circle cx="262" cy="84" r="10" fill="#FF6A45" />
            <text x="278" y="87" fontSize="9" fill="rgba(255,255,255,0.8)">Aanya (Gr 6)</text>

            <rect x="245" y="110" width="105" height="38" rx="6" fill="#111B3B" stroke="rgba(255,255,255,0.08)" />
            <circle cx="262" cy="129" r="10" fill="#1F9C79" />
            <text x="278" y="132" fontSize="9" fill="rgba(255,255,255,0.8)">Kabir (Gr 6)</text>

            <rect x="245" y="154" width="105" height="26" rx="6" fill="#0D1633" />
            <text x="297" y="171" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.5)">+ 4 Students</text>
          </svg>
        </div>
      );

    case "olympiad-trophy":
      return (
        <div className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-tr from-[#0A1128] via-[#101C42] to-[#1C1930] border border-[#FFD700]/30 p-6 text-center text-white shadow-xl ${className}`}>
          <svg viewBox="0 0 200 200" fill="none" className="w-32 h-32 mx-auto select-none">
            <defs>
              <linearGradient id="trophyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF48F" />
                <stop offset="40%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#D48806" />
              </linearGradient>
            </defs>
            {/* Halo */}
            <circle cx="100" cy="90" r="60" fill="#FFD700" opacity="0.12" />
            
            {/* Cup */}
            <path d="M60 40 L140 40 L132 100 C132 120, 118 135, 100 135 C82 135, 68 120, 68 100 Z" fill="url(#trophyGrad)" />
            {/* Handles */}
            <path d="M60 55 C40 55, 40 85, 63 90" stroke="url(#trophyGrad)" strokeWidth="7" fill="none" strokeLinecap="round" />
            <path d="M140 55 C160 55, 160 85, 137 90" stroke="url(#trophyGrad)" strokeWidth="7" fill="none" strokeLinecap="round" />
            {/* Stem & Base */}
            <rect x="94" y="135" width="12" height="22" fill="#D48806" />
            <path d="M70 157 L130 157 L124 175 L76 175 Z" fill="url(#trophyGrad)" />
            {/* Mathematical Vertex star on trophy */}
            <circle cx="100" cy="80" r="14" fill="#0A1128" />
            <text x="100" y="85" textAnchor="middle" fontSize="14" fill="#FFD700" fontWeight="bold">∑</text>
          </svg>
          <div className="mt-2 font-display text-lg font-bold text-[#FFD700]">340+ Qualifiers in 2026</div>
          <p className="text-xs text-white/70 mt-1">SOF IMO · SilverZone IOM · SASMO · AMC 8/10</p>
        </div>
      );

    case "diagnostic-dashboard":
      return (
        <div className={`relative w-full rounded-2xl overflow-hidden bg-white border border-[#E8E2D2] p-5 shadow-md ${className}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D2]">
            <div>
              <span className="text-[10px] font-bold text-[#4B3DF0] uppercase tracking-wider block">Student Diagnostic Report</span>
              <span className="font-display text-sm font-bold text-[#191733]">Aanya Sharma · Grade 6 (CBSE)</span>
            </div>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Verified Score
            </span>
          </div>

          <div className="mt-4 space-y-3">
            <div>
              <div className="flex justify-between text-xs font-semibold text-[#191733] mb-1">
                <span>Algebra &amp; Equations</span>
                <span className="text-[#4B3DF0]">94% Mastery</span>
              </div>
              <div className="w-full h-2 bg-[#EDEBFE] rounded-full overflow-hidden">
                <div className="h-full bg-[#4B3DF0] rounded-full" style={{ width: "94%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-[#191733] mb-1">
                <span>Visual Geometry &amp; Angles</span>
                <span className="text-emerald-600">88% Mastery</span>
              </div>
              <div className="w-full h-2 bg-emerald-50 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: "88%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-[#191733] mb-1">
                <span>Mental Speed Calculation</span>
                <span className="text-[#FF6A45]">3.4x Faster</span>
              </div>
              <div className="w-full h-2 bg-orange-50 rounded-full overflow-hidden">
                <div className="h-full bg-[#FF6A45] rounded-full" style={{ width: "85%" }} />
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#E8E2D2] flex items-center justify-between text-xs text-[#56517A]">
            <span>Weekly Parent WhatsApp Dispatch</span>
            <span className="font-semibold text-[#191733]">Every Sunday</span>
          </div>
        </div>
      );

    case "mental-speed":
      return <MentalMathVisualizer className={className} />;

    case "geometry-proof":
      return (
        <div className={`relative w-full rounded-2xl overflow-hidden bg-[#FBFAF6] border border-[#E8E2D2] p-4 ${className}`}>
          <svg viewBox="0 0 240 130" fill="none" className="w-full h-auto select-none">
            <circle cx="120" cy="65" r="50" stroke="#4B3DF0" strokeWidth="2" fill="none" />
            <polygon points="80,95 160,95 120,20" stroke="#FF6A45" strokeWidth="2" fill="rgba(255,106,69,0.08)" />
            <line x1="120" y1="20" x2="120" y2="95" stroke="#1F9C79" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="125" y="60" fontSize="9" fill="#1F9C79" fontWeight="600">h = 75</text>
            <circle cx="120" cy="20" r="3.5" fill="#4B3DF0" />
            <circle cx="80" cy="95" r="3.5" fill="#FF6A45" />
            <circle cx="160" cy="95" r="3.5" fill="#FF6A45" />
          </svg>
        </div>
      );

    default:
      return null;
  }
};
