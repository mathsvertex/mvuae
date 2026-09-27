import React, { useState } from "react";
import { Zap, Sparkles, RefreshCw, Eye, Check } from "lucide-react";

export interface MentalMathVisualizerProps {
  className?: string;
  autoPlay?: boolean;
}

export const MentalMathVisualizer: React.FC<MentalMathVisualizerProps> = ({
  className = "",
  autoPlay = false
}) => {
  // Step state: 0 = idle/base numbers, 1 = deficiencies revealed, 2 = cross-subtraction & product revealed (solution)
  const [activeStep, setActiveStep] = useState<number>(autoPlay ? 2 : 2);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [interactiveMode, setInteractiveMode] = useState<"step-by-step" | "instant">("instant");

  const showDeficiencies = isHovered || activeStep >= 1;
  const showCalculations = isHovered || activeStep >= 2;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full rounded-2xl overflow-hidden bg-[#0A1128] border border-[#FFD700]/30 shadow-2xl p-5 sm:p-7 text-white transition-all duration-300 hover:border-[#FFD700]/60 hover:shadow-[0_12px_40px_rgba(255,215,0,0.15)] ${className}`}
    >
      {/* Background ambient radial grid & glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-52 h-52 bg-[#4B3DF0]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-[#FFD700]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar with tag & interactive controls */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-white/10">
        <div className="inline-flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#4FCBA4] animate-pulse" />
          <span className="text-xs font-bold tracking-wider uppercase text-white/90 font-display">
            Vedic Mental Matrix · Base 100
          </span>
          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold text-[#FFD700] bg-[#FFD700]/10 border border-[#FFD700]/25">
            Sutra: Yavadunam
          </span>
        </div>

        {/* Step toggle / hint */}
        <div className="inline-flex items-center gap-2 text-xs">
          <span className="text-white/60 text-[11px] hidden md:inline">
            {isHovered ? "⚡ Hover Active: Mental paths illuminated" : "Hover or tap to reveal mental pathways"}
          </span>
          <button
            onClick={() => setActiveStep((prev) => (prev === 2 ? 0 : prev + 1))}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-white/80 bg-white/10 hover:bg-white/20 hover:text-white border border-white/15 transition-all cursor-pointer active:scale-95"
            title="Step through calculation"
          >
            <RefreshCw className="w-3 h-3 text-[#FFD700]" />
            <span>{activeStep === 2 ? "Reset" : `Step ${activeStep + 1}/2`}</span>
          </button>
        </div>
      </div>

      {/* Main Calculation Stage */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left side: The Matrix and SVG overlay */}
        <div className="lg:col-span-8 flex flex-col items-center sm:items-start justify-center">
          {/* Base 100 Indicator Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-white/5 border border-white/15 text-[11px] font-mono text-white/70">
            <span className="text-[#FFD700] font-semibold">Reference Base = 100</span>
            <span className="text-white/30">|</span>
            <span>Deviation = Number - 100</span>
          </div>

          {/* Matrix Box */}
          <div className="relative inline-flex flex-col p-4 sm:p-5 rounded-2xl bg-[#070D1F]/90 border border-white/15 shadow-inner">
            {/* SVG Connecting Diagonal Cross-Subtractions */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20"
              viewBox="0 0 280 160"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="diagonalGlow1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4FCBA4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FFD700" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="diagonalGlow2" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#4FCBA4" stopOpacity="0.9" />
                </linearGradient>
                <filter id="svgPathGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                {/* Arrow markers */}
                <marker id="arrowGold" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#FFD700" />
                </marker>
                <marker id="arrowGreen" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#4FCBA4" />
                </marker>
              </defs>

              {/* Diagonal 1: 98 connected across to -7 (Cross Subtraction: 98 - 7 = 91) */}
              <path
                d="M 68 40 C 115 45, 145 95, 205 105"
                stroke="url(#diagonalGlow1)"
                strokeWidth={isHovered ? "3" : "2"}
                strokeDasharray={isHovered ? "none" : "5 4"}
                strokeOpacity={isHovered || showCalculations ? "1" : "0.35"}
                filter={isHovered ? "url(#svgPathGlow)" : undefined}
                markerEnd="url(#arrowGold)"
                className="transition-all duration-300"
              />

              {/* Diagonal 2: 93 connected across to -2 (Alternative Cross Subtraction: 93 - 2 = 91) */}
              <path
                d="M 68 105 C 115 100, 145 50, 205 40"
                stroke="url(#diagonalGlow2)"
                strokeWidth={isHovered ? "2.5" : "1.8"}
                strokeDasharray={isHovered ? "none" : "5 4"}
                strokeOpacity={isHovered || showCalculations ? "0.85" : "0.25"}
                filter={isHovered ? "url(#svgPathGlow)" : undefined}
                markerEnd="url(#arrowGreen)"
                className="transition-all duration-300"
              />

              {/* Vertical Multiplication Path between -2 and -7 (Right Part: (-2) × (-7) = +14) */}
              <path
                d="M 235 48 L 235 98"
                stroke="#FF6A45"
                strokeWidth={isHovered ? "2.5" : "1.8"}
                strokeDasharray="3 3"
                strokeOpacity={isHovered || showCalculations ? "0.9" : "0.3"}
                className="transition-all duration-300"
              />
            </svg>

            {/* Row 1: 98 & Difference (-2) */}
            <div className="inline-flex items-center justify-between gap-6 sm:gap-10 pb-3 z-10">
              <div className="inline-flex items-baseline gap-2">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  98
                </span>
                <span className="text-xs text-white/50 font-mono">(100 - 2)</span>
              </div>

              {/* Deficiency Pill */}
              <div
                className={`inline-flex items-center justify-center px-3 py-1 rounded-full border text-xs sm:text-sm font-mono font-bold transition-all duration-300 ${
                  showDeficiencies
                    ? "bg-[#4B3DF0]/30 border-[#4B3DF0] text-[#FFD700] shadow-[0_0_12px_rgba(75,61,240,0.4)] scale-105"
                    : "bg-white/5 border-white/20 text-white/60"
                }`}
              >
                <span>- 02</span>
              </div>
            </div>

            {/* Operator & Row 2: × 93 & Difference (-7) */}
            <div className="inline-flex items-center justify-between gap-6 sm:gap-10 pb-4 z-10">
              <div className="inline-flex items-baseline gap-2">
                <span className="font-mono text-lg text-[#FFD700] font-bold">×</span>
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  93
                </span>
                <span className="text-xs text-white/50 font-mono">(100 - 7)</span>
              </div>

              {/* Deficiency Pill */}
              <div
                className={`inline-flex items-center justify-center px-3 py-1 rounded-full border text-xs sm:text-sm font-mono font-bold transition-all duration-300 ${
                  showDeficiencies
                    ? "bg-[#FF6A45]/30 border-[#FF6A45] text-[#FF6A45] shadow-[0_0_12px_rgba(255,106,69,0.4)] scale-105"
                    : "bg-white/5 border-white/20 text-white/60"
                }`}
              >
                <span>- 07</span>
              </div>
            </div>

            {/* Separator Line */}
            <div className="w-full h-0.5 bg-gradient-to-r from-white/10 via-[#FFD700]/60 to-white/10 my-1 z-10" />

            {/* Solution Row with Partition (/ or |) */}
            <div className="inline-flex items-center justify-between pt-3 gap-6 sm:gap-10 z-10">
              {/* Left Part: 98 - 7 or 93 - 2 = 91 */}
              <div
                className={`inline-flex flex-col transition-all duration-500 transform ${
                  showCalculations
                    ? "opacity-100 translate-y-0"
                    : "opacity-30 translate-y-1"
                }`}
              >
                <div className="inline-flex items-baseline gap-2">
                  <span className="font-mono text-3xl sm:text-4xl font-black text-[#4FCBA4] drop-shadow-[0_0_12px_rgba(79,203,164,0.5)]">
                    91
                  </span>
                  <span className="text-[11px] font-mono text-white/70">
                    (98 - 7)
                  </span>
                </div>
                <span className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">
                  Left Hand (Hundreds)
                </span>
              </div>

              {/* Divider slash */}
              <div className="text-2xl font-mono text-[#FFD700]/70 font-light select-none">
                |
              </div>

              {/* Right Part: (-2) × (-7) = 14 */}
              <div
                className={`inline-flex flex-col text-right transition-all duration-700 delay-150 transform ${
                  showCalculations
                    ? "opacity-100 translate-y-0"
                    : "opacity-30 translate-y-1"
                }`}
              >
                <div className="inline-flex items-baseline justify-end gap-2">
                  <span className="text-[11px] font-mono text-white/70">
                    (-2 × -7)
                  </span>
                  <span className="font-mono text-3xl sm:text-4xl font-black text-[#FFD700] drop-shadow-[0_0_12px_rgba(255,215,0,0.5)]">
                    14
                  </span>
                </div>
                <span className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">
                  Right Hand (Units)
                </span>
              </div>
            </div>

            {/* Combined Final Answer Banner */}
            <div
              className={`mt-4 pt-3 border-t border-white/10 inline-flex items-center justify-between w-full transition-all duration-700 delay-300 ${
                showCalculations ? "opacity-100" : "opacity-40"
              }`}
            >
              <span className="text-xs text-white/70 font-medium">
                Combined Instant Answer:
              </span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FFD700]/15 border border-[#FFD700]/40">
                <span className="text-xs text-[#FFD700] font-semibold">91</span>
                <span className="text-xs text-white/50 font-bold">·</span>
                <span className="text-xs text-[#4FCBA4] font-semibold">14</span>
                <span className="text-xs font-mono font-bold text-white ml-1.5">= 9,114</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Floating Speed Metric Card & Step Breakdown */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Floating Speed Metric Card */}
          <div className="relative inline-flex flex-col p-4 rounded-xl bg-[#091024] border border-[#FFD700]/45 shadow-[0_8px_25px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <div className="inline-flex items-center justify-between mb-2">
              <div className="inline-flex items-center gap-1.5">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#FFD700]/20 text-[#FFD700] border border-[#FFD700]/30">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                </span>
                <span className="text-xs font-semibold text-white/80 font-display">
                  Calculation Time
                </span>
              </div>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold text-[#4FCBA4] bg-[#4FCBA4]/15 border border-[#4FCBA4]/30">
                Zero Scratchpad
              </span>
            </div>

            <div className="inline-flex items-baseline gap-2 my-1">
              <span className="font-mono text-3xl font-extrabold text-[#FFD700] tracking-tight">
                0.4 sec
              </span>
              <span className="text-xs text-white/50">vs 45s traditional</span>
            </div>

            <p className="text-[11px] text-white/70 leading-relaxed mt-1">
              Standard long multiplication requires 6 steps, 2 carry-overs, and column addition. Vedic base-100 requires 2 mental numbers.
            </p>
          </div>

          {/* 2-Step Micro Breakdown Cards */}
          <div className="space-y-2 text-xs">
            <div
              className={`p-3 rounded-xl border transition-all duration-300 ${
                showCalculations
                  ? "bg-[#4FCBA4]/10 border-[#4FCBA4]/40 text-white"
                  : "bg-white/5 border-white/10 text-white/60"
              }`}
            >
              <div className="inline-flex items-center gap-1.5 font-bold mb-0.5 text-[#4FCBA4]">
                <span>Step 1: Cross-Subtract</span>
                <Check className="w-3.5 h-3.5" />
              </div>
              <p className="text-[11px] text-white/80">
                Either <strong>98 - 7</strong> or <strong>93 - 2</strong> = <span className="text-[#4FCBA4] font-bold">91</span>. Both cross paths always produce the identical number!
              </p>
            </div>

            <div
              className={`p-3 rounded-xl border transition-all duration-300 ${
                showCalculations
                  ? "bg-[#FFD700]/10 border-[#FFD700]/40 text-white"
                  : "bg-white/5 border-white/10 text-white/60"
              }`}
            >
              <div className="inline-flex items-center gap-1.5 font-bold mb-0.5 text-[#FFD700]">
                <span>Step 2: Multiply Deficiencies</span>
                <Check className="w-3.5 h-3.5" />
              </div>
              <p className="text-[11px] text-white/80">
                Multiply (-2) × (-7) = <span className="text-[#FFD700] font-bold">14</span>. Append the two digits to the right of 91 to get <strong>9,114</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
