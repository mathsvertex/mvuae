import React, { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, Sliders } from "lucide-react";

interface HeroProps {
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate?: (route: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onNavigate }) => {
  const [rankValue, setRankValue] = useState(0);
  const [trajectoryMode, setTrajectoryMode] = useState<"vertex" | "standard">("vertex");
  const [vertexHovered, setVertexHovered] = useState(false);

  // Counter animation on load
  useEffect(() => {
    let start = 0;
    const end = 46;
    const duration = 1600;
    const frameRate = 30;
    const step = end / (duration / frameRate);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setRankValue(end);
        clearInterval(timer);
      } else {
        setRankValue(Math.floor(start));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[#0A1128] text-white pt-16 pb-20 overflow-hidden" id="home">
      {/* Background Floating Math Symbols */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span className="absolute top-[12%] left-[6%] font-display text-4xl text-white/5 animate-float">
          ∑
        </span>
        <span className="absolute top-[68%] left-[82%] font-display text-5xl text-white/5 animate-float-delayed">
          ∫
        </span>
        <span className="absolute top-[20%] right-[10%] font-display text-4xl text-white/5 animate-float">
          π
        </span>
        <span className="absolute bottom-[22%] left-[12%] font-display text-4xl text-white/5 animate-float-delayed">
          Δ
        </span>
        <span className="absolute top-[48%] left-[45%] font-display text-3xl text-white/5 animate-float">
          √x
        </span>
        <span className="absolute top-[32%] right-[32%] font-display text-3xl text-white/5 animate-float-delayed">
          θ
        </span>
        {/* Subtle radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#4B3DF0]/20 via-[#FFD700]/10 to-transparent blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FFD700] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
              <span>Live Online Coaching · School Maths to Olympiad Level</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] tracking-tight text-white max-w-2xl text-balance">
              Every parabola has a peak. We help your child reach theirs.
            </h1>

            <p className="text-base sm:text-lg text-white/75 max-w-xl leading-relaxed">
              Small live batches of 6, mentors who have competed at the exact same Olympiads, and a personalized weekly plan built around your child’s target exam—not a generic textbook syllabus.
            </p>

            {/* CTAs per Brand Guide: Coral #FF6A45 energy CTA and crisp ghost button */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => onOpenDemo()}
                className="px-7 py-3.5 rounded-full text-base font-semibold text-white bg-[#FF6A45] hover:bg-[#fa5a32] shadow-[0_8px_24px_rgba(255,106,69,0.35)] hover:shadow-[0_12px_32px_rgba(255,106,69,0.5)] transition-all transform active:scale-97 flex items-center gap-2 cursor-pointer"
              >
                <span>Book a Free Demo Class</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => (onNavigate ? onNavigate("how") : (window.location.hash = "how"))}
                className="px-6 py-3.5 rounded-full text-base font-semibold text-white border border-white/30 hover:border-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                See How It Works
              </button>
            </div>

            {/* Micro reassurance notes */}
            <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-white/55">
              <span>✓ No card required</span>
              <span aria-hidden="true">·</span>
              <span>✓ 45-minute live diagnostic</span>
              <span aria-hidden="true">·</span>
              <span>✓ Meet your mentor before you commit</span>
            </div>
          </div>

          {/* Right Column: Interactive Parabola Art */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md bg-[#131B38]/80 backdrop-blur-md rounded-2xl border border-white/10 p-5 shadow-2xl relative">
              {/* Curve mode toggles */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                <span className="font-semibold text-white/80 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-[#FFD700]" />
                  Mathematical Curve Model
                </span>
                <div className="inline-flex rounded-lg bg-black/40 p-0.5 border border-white/10">
                  <button
                    onClick={() => setTrajectoryMode("vertex")}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                      trajectoryMode === "vertex"
                        ? "bg-[#FFD700] text-[#0A1128] font-semibold"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    MathsVertex Peak
                  </button>
                  <button
                    onClick={() => setTrajectoryMode("standard")}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                      trajectoryMode === "standard"
                        ? "bg-[#FFD700] text-[#0A1128] font-semibold"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    Standard Curve
                  </button>
                </div>
              </div>

              {/* The SVG Visualization (Selected element with enhanced styling & visuals) */}
              <div className="relative py-2">
                <svg
                  viewBox="0 0 380 290"
                  fill="none"
                  className="w-full h-auto overflow-visible select-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
                >
                  <defs>
                    <linearGradient id="goldGradientHero" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFF275" />
                      <stop offset="50%" stopColor="#FFD700" />
                      <stop offset="100%" stopColor="#FFA000" />
                    </linearGradient>
                    <linearGradient id="areaGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFD700" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#FFD700" stopOpacity="0.0" />
                    </linearGradient>
                    <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3.5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Grid Lines */}
                  <line x1="30" y1="240" x2="355" y2="240" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
                  <line x1="60" y1="25" x2="60" y2="260" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
                  
                  {/* Subtle Grid Subdivisions */}
                  <line x1="30" y1="130" x2="355" y2="130" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                  <line x1="200" y1="25" x2="200" y2="240" stroke="rgba(255,215,0,0.15)" strokeDasharray="4 4" />

                  {/* Axis arrows */}
                  <polygon points="355,237 363,240 355,243" fill="rgba(255,255,255,0.5)" />
                  <polygon points="57,25 60,17 63,25" fill="rgba(255,255,255,0.5)" />

                  <text x="345" y="260" fontFamily="Space Grotesk, sans-serif" fontSize="11" fill="rgba(255,255,255,0.5)">
                    Time (Months)
                  </text>
                  <text x="35" y="32" fontFamily="Space Grotesk, sans-serif" fontSize="11" fill="rgba(255,255,255,0.5)">
                    Rank
                  </text>

                  {/* Shaded Area under trajectory curve */}
                  {trajectoryMode === "vertex" && (
                    <path
                      d="M 65 235 C 125 55, 255 55, 335 235 Z"
                      fill="url(#areaGlow)"
                      className="animate-in fade-in duration-300"
                    />
                  )}

                  {/* Standard Curve (Faded comparison) */}
                  <path
                    d="M 65 235 C 130 185, 230 185, 340 235"
                    stroke={trajectoryMode === "standard" ? "#FF8A66" : "rgba(255,255,255,0.2)"}
                    strokeWidth={trajectoryMode === "standard" ? "3.5" : "2"}
                    strokeDasharray={trajectoryMode === "standard" ? "none" : "5 5"}
                    fill="none"
                    className="transition-all duration-300"
                  />

                  {/* MathsVertex Parabola Path with Gold Gradient & Glow */}
                  <path
                    className="parabola-path"
                    d="M 65 230 C 125 55, 255 55, 335 230"
                    stroke="url(#goldGradientHero)"
                    strokeWidth={trajectoryMode === "vertex" ? "4.5" : "2.5"}
                    fill="none"
                    strokeLinecap="round"
                    filter={trajectoryMode === "vertex" ? "url(#neonGlow)" : undefined}
                  />

                  {/* Progression Milestone Points */}
                  <circle cx="105" cy="165" r="4.5" fill="#4FCBA4" stroke="#0A1128" strokeWidth="1.5" />
                  <circle cx="290" cy="155" r="4.5" fill="#4B3DF0" stroke="#0A1128" strokeWidth="1.5" />

                  {/* Peak Point Group (Interactive Vertex) */}
                  <g
                    className="cursor-pointer transition-transform hover:scale-105"
                    onMouseEnter={() => setVertexHovered(true)}
                    onMouseLeave={() => setVertexHovered(false)}
                    onClick={() => onOpenDemo()}
                  >
                    {/* Pulsing halo */}
                    <circle cx="200" cy="74" r="28" fill="#FFD700" opacity="0.16" />
                    <circle cx="200" cy="74" r="16" fill="#FFD700" opacity="0.36" />
                    <circle cx="200" cy="74" r="7.5" fill="#FFFFFF" stroke="#FFD700" strokeWidth="3" />
                    
                    {/* Tooltip on Vertex */}
                    <g className={`transition-opacity duration-200 ${vertexHovered || trajectoryMode === "vertex" ? "opacity-100" : "opacity-90"}`}>
                      <rect
                        x="85"
                        y="16"
                        width="230"
                        height="38"
                        rx="10"
                        fill="#0A1128"
                        stroke="#FFD700"
                        strokeWidth="1.5"
                        filter="drop-shadow(0 4px 12px rgba(255,215,0,0.25))"
                      />
                      <text
                        x="200"
                        y="40"
                        textAnchor="middle"
                        fontFamily="Space Grotesk, sans-serif"
                        fontSize="11.5"
                        fill="#FFFFFF"
                        fontWeight="700"
                        letterSpacing="0.3px"
                      >
                        ⚡ VERTEX: Peak Olympiad Potential
                      </text>
                    </g>
                  </g>

                  {/* Standard Curve Point */}
                  {trajectoryMode === "standard" && (
                    <g>
                      <circle cx="195" cy="185" r="5" fill="#FF8A66" />
                      <rect x="120" y="145" width="150" height="28" rx="6" fill="#0A1128" stroke="#FF8A66" strokeWidth="1" />
                      <text x="195" y="163" textAnchor="middle" fontSize="10" fill="#FF8A66" fontWeight="600">
                        Typical School Plateau
                      </text>
                    </g>
                  )}

                  {/* Floating Stat Card Inside SVG */}
                  <g transform="translate(242, 152)">
                    <rect
                      x="0"
                      y="0"
                      width="118"
                      height="70"
                      rx="14"
                      fill="#091024"
                      stroke="#FFD700"
                      strokeWidth="1.3"
                      strokeOpacity="0.45"
                      filter="drop-shadow(0 8px 16px rgba(0,0,0,0.5))"
                    />
                    <circle cx="18" cy="22" r="4.5" fill="#4FCBA4" />
                    <text x="28" y="25" fontFamily="Space Grotesk, sans-serif" fontSize="10.5" fill="rgba(255,255,255,0.75)" fontWeight="600">
                      Average Lift
                    </text>
                    <text
                      x="16"
                      y="54"
                      fontFamily="Space Grotesk, sans-serif"
                      fontSize="22"
                      fontWeight="800"
                      fill="#4FCBA4"
                      className="tabular-nums"
                    >
                      ↑ {rankValue}%
                    </text>
                  </g>
                </svg>
              </div>

              {/* Explanatory text under graphic */}
              <div className="pt-2 text-xs text-white/70 flex items-center justify-between border-t border-white/10">
                <span>In 3 months, students average a 46% rank climb</span>
                <button
                  onClick={() => onOpenDemo()}
                  className="text-[#FFD700] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                >
                  Book Demo
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Stats Bar */}
        <div className="mt-16 pt-8 border-t border-white/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="space-y-1">
              <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFD700] tabular-nums block">
                4,200+
              </span>
              <p className="text-xs sm:text-sm text-white/70">
                Students coached across 14 countries since 2020
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFD700] tabular-nums block">
                340
              </span>
              <p className="text-xs sm:text-sm text-white/70">
                Olympiad qualifiers in 2026 alone (IMO / IOM / SASMO)
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4FCBA4] tabular-nums block">
                92%
              </span>
              <p className="text-xs sm:text-sm text-white/70">
                Saw a measurable rank improvement in just one term
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFD700] tabular-nums block">
                1:6
              </span>
              <p className="text-xs sm:text-sm text-white/70">
                Strict mentor-to-student batch ratio (never overcrowded)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust reassurance ribbon */}
      <div className="mt-10 py-3.5 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs sm:text-sm text-white/85">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4FCBA4]" />
            Background-verified Olympiad alumni mentors
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4FCBA4]" />
            Every class recorded &amp; shared immediately with parents
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4FCBA4]" />
            Official Certificate of Completion for every program
          </span>
        </div>
      </div>
    </section>
  );
};
