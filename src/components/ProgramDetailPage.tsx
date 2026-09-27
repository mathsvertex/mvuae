import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { BreadcrumbNavigation } from "./BreadcrumbNavigation";
import { MathGraphic } from "./MathGraphic";
import { ProgramIcon } from "./ProgramIcon";

export interface ProgramDetailPageProps {
  programId: string;
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate: (route: string) => void;
}

export const ProgramDetailPage: React.FC<ProgramDetailPageProps> = ({
  programId,
  onOpenDemo,
  onNavigate
}) => {
  // Mapping of detailed syllabus, timeline, and mentor info for each topic
  const detailsMap: Record<string, {
    title: string;
    badge: string;
    gradeSpan: string;
    headline: string;
    overview: string;
    batchRatio: string;
    weeklySessions: string;
    keyMentor: string;
    mentorRole: string;
    modules: { title: string; weeks: string; topics: string[] }[];
    sampleProblem: { q: string; a: string; timeSaved: string };
    examFocus: string[];
  }> = {
    "school-maths": {
      title: "School Maths Curriculum Mastery",
      badge: "Curriculum Excellence · Class 1 to 10",
      gradeSpan: "Class 1–10",
      headline: "Master every school syllabus topic with 100% conceptual clarity — before tests arrive.",
      overview: "Designed for CBSE, IB (PYP/MYP), Cambridge (Checkpoint/IGCSE), and American curriculums. We do not just teach step-by-step textbook exercises; we teach the foundational theorems, algebraic proofs, and geometry visualization so school homework becomes effortless.",
      batchRatio: "1:6 Mentor to Student Ratio",
      weeklySessions: "3 Live Interactive Sessions / Week",
      keyMentor: "Sakshi Arora",
      mentorRole: "Lead Mentor · School Maths (M.Sc. Maths, 7+ yrs teaching)",
      modules: [
        {
          title: "Phase 1: Number Systems, Fractions & Pre-Algebra",
          weeks: "Weeks 1–4",
          topics: ["Visual unit fractions & decimals", "Integers & coordinate geometry", "Fast prime factorization & LCM shortcuts"]
        },
        {
          title: "Phase 2: Algebraic Foundations & Equations",
          weeks: "Weeks 5–8",
          topics: ["Variable balance models", "Linear equations in one & two variables", "Word problem translation algorithms"]
        },
        {
          title: "Phase 3: Spatial Geometry & Mensuration",
          weeks: "Weeks 9–12",
          topics: ["Angle chasing and parallel line theorems", "Area and volume proofs without formula cramming", "Coordinate graphing and slopes"]
        },
        {
          title: "Phase 4: School Term Exam Simulation Series",
          weeks: "Weeks 13–16",
          topics: ["Timed board mock tests", "Error-log analysis & correction clinics", "Subjective answer presentation techniques"]
        }
      ],
      sampleProblem: {
        q: "If 3x + 7 = 28, find the value of 6x - 5.",
        a: "MathsVertex Direct Scale: Notice 6x is 2 × (3x). 3x = 21, so 6x = 42. Therefore 42 - 5 = 37 in 3 seconds!",
        timeSaved: "Solves in 3 sec vs 45 sec standard derivation"
      },
      examFocus: ["CBSE Board Exams", "Cambridge Checkpoint & IGCSE", "IB MYP eAssessments", "School Mid-Terms & Finals"]
    },
    "olympiads": {
      title: "Math Olympiads (IMO / IOM / SASMO / AMC)",
      badge: "Elite Competition Track · Class 3 to 12",
      gradeSpan: "Class 3–12",
      headline: "The elite problem-solving framework that took 340+ students to national medals in 2026.",
      overview: "Standard school curriculum teaches algorithms; Olympiads reward non-routine intuition. Our mentors are Olympiad alumni who teach modular arithmetic, Pigeonhole Principle, combinatorics, and geometry construction tricks tested in IMO, SilverZone IOM, SASMO, Kangaroo Math, and AMC 8/10.",
      batchRatio: "1:6 Elite Batch Ratio",
      weeklySessions: "3 Live Sessions + 1 Timed Mock / Week",
      keyMentor: "Mohd Hasib Alam",
      mentorRole: "Head Mentor · Math Olympiads (IMO/IOM Specialist, 8+ yrs coaching)",
      modules: [
        {
          title: "Phase 1: Number Theory & Divisibility Elegance",
          weeks: "Weeks 1–4",
          topics: ["Modular arithmetic clocks", "Divisibility patterns beyond standard rules", "Diophantine equations and GCD Euclid algorithms"]
        },
        {
          title: "Phase 2: Combinatorics, Counting & Logic",
          weeks: "Weeks 5–8",
          topics: ["Dirichlet's Pigeonhole Principle", "Permutations & Combinations (Stars and Bars)", "Inclusion-Exclusion and tournament trees"]
        },
        {
          title: "Phase 3: Non-Routine Geometry & Visual Proofs",
          weeks: "Weeks 9–12",
          topics: ["Cyclic quadrilaterals & inscribed angles", "Auxiliary constructions & symmetry reflection", "Area ratios without trigonometry"]
        },
        {
          title: "Phase 4: IMO Level 1 & Level 2 Master Camp",
          weeks: "Weeks 13–16",
          topics: ["10-year past papers solved under tournament clocks", "Negative marking risk management", "Speed elimination strategies"]
        }
      ],
      sampleProblem: {
        q: "Find the remainder when 3^2026 is divided by 5.",
        a: "MathsVertex Cycle Method: Powers of 3 mod 5 cycle in 4s: 3^1=3, 3^2=4, 3^3=2, 3^4=1. 2026 = 4 × 506 + 2. Remainder is 3^2 mod 5 = 4!",
        timeSaved: "Solved in 8 seconds paperless"
      },
      examFocus: ["SOF IMO Level 1 & 2", "SilverZone IOM", "Singapore & Asian Schools SASMO", "AMC 8 & AMC 10", "Kangaroo Math"]
    },
    "mat-reasoning": {
      title: "Mental Ability Test (MAT) & Logical Reasoning",
      badge: "Cognitive Aptitude & Logic · Class 4 to 10",
      gradeSpan: "Class 4–10",
      headline: "Deconstruct non-verbal matrices, coding-decoding, and spatial reasoning under pressure.",
      overview: "Mental Ability Tests (MAT) determine scholarship qualifications and competitive aptitude. We train students to decipher complex series, spatial paper folds, syllogisms, and directional puzzles using cognitive visualization techniques.",
      batchRatio: "1:6 Mentor to Student Ratio",
      weeklySessions: "2 Live Classes + Timed Logic Drills / Week",
      keyMentor: "Preeti Kumari",
      mentorRole: "Lead Mentor · MAT & Cognitive Logic (6+ yrs teaching)",
      modules: [
        {
          title: "Phase 1: Series Detection & Number Matrices",
          weeks: "Weeks 1–4",
          topics: ["Alpha-numeric patterns and Fibonacci variations", "Grid matrix logic & hidden relations", "Direction sense & blood relations"]
        },
        {
          title: "Phase 2: Non-Verbal & Spatial Reasoning",
          weeks: "Weeks 5–8",
          topics: ["Paper folding, cutting & punch hole detection", "Mirror & water image transformations", "Embedded figures and cube dissections"]
        },
        {
          title: "Phase 3: Analytical Logic & Deductions",
          weeks: "Weeks 9–12",
          topics: ["Venn diagrams for complex categorical sets", "Syllogisms and truth-teller logic puzzles", "Seating arrangement constraint grids"]
        },
        {
          title: "Phase 4: Scholarship Exam Simulation",
          weeks: "Weeks 13–16",
          topics: ["NTSE and aptitude benchmark papers", "Rapid elimination heuristics", "Error rate reduction under time pressure"]
        }
      ],
      sampleProblem: {
        q: "If CLOCK is coded as 3-12-15-3-11, what is the value of TIME multiplied by 2?",
        a: "Direct positional indexing with mental summation, executed in 5 seconds flat.",
        timeSaved: "Zero scratch work needed"
      },
      examFocus: ["NTSE Stage 1 & 2", "Competitive School Aptitude Tests", "Talent Search Exams", "Gifted & Talented Assessments"]
    },
    "asset-prep": {
      title: "ASSET Mathematics Diagnostic Prep",
      badge: "Concept Insights & Trap Avoidance · Class 3 to 9",
      gradeSpan: "Class 3–9",
      headline: "Master high-order critical reasoning and identify the subtle traps in Educational Initiatives ASSET.",
      overview: "ASSET tests whether students understand the true concept rather than superficial textbook rules. Our ASSET preparation focuses on reading comprehension of math problems, analyzing misleading distractors, and learning to explain mathematical models.",
      batchRatio: "1:6 Focused Batch",
      weeklySessions: "2 Live Interactive Sessions / Week",
      keyMentor: "Afreen Javed",
      mentorRole: "Lead Mentor · ASSET Prep (M.Sc. Applied Maths, 5+ yrs teaching)",
      modules: [
        {
          title: "Phase 1: Deconstructing ASSET Trap Questions",
          weeks: "Weeks 1–4",
          topics: ["Why 70% of students choose the distractor option", "Interpreting non-standard mathematical diagrams", "Data sufficiency and estimation methods"]
        },
        {
          title: "Phase 2: Real-World Math Modeling",
          weeks: "Weeks 5–8",
          topics: ["Rates, proportions & scale representations", "Probability without textbook formulas", "Measurement units and realistic error bounds"]
        },
        {
          title: "Phase 3: High-Order Thinking Skills (HOTS)",
          weeks: "Weeks 9–12",
          topics: ["Multi-step deduction questions", "Visualizing 3D perspectives from 2D nets", "Pattern generalization and formula discovery"]
        },
        {
          title: "Phase 4: Mock Test & Detailed Percentile Review",
          weeks: "Weeks 13–16",
          topics: ["Full-length ASSET simulations", "Personal skill breakdown report", "Confidence building on unfamiliar problem stems"]
        }
      ],
      sampleProblem: {
        q: "Which fraction is closer to 1/2: 4/9 or 5/11?",
        a: "MathsVertex Cross Deviation: 4/9 vs 4.5/9 (gap = 0.5/9 = 1/18). 5/11 vs 5.5/11 (gap = 0.5/11 = 1/22). Since 1/22 < 1/18, 5/11 is closer!",
        timeSaved: "Calculated in 4 seconds without common denominators"
      },
      examFocus: ["Ei ASSET Summer & Winter Tests", "ASSET Talent Search", "High-Order Thinking (HOTS) Assessments"]
    },
    "mental-maths": {
      title: "Dedicated Mental Maths Accelerator",
      badge: "Speed Arithmetic & Working Memory · Class 2 to 8",
      gradeSpan: "Class 2–8",
      headline: "Calculate 3x to 5x faster in your head — ditch scratch paper and calculation panic.",
      overview: "A specialized 12-week course designed for students who hesitate with basic multiplication, division, fractions, or time pressure. Taught through structured mental number lines, Vedic chunking, and daily 5-minute timed audio drills.",
      batchRatio: "1:6 Small Batch",
      weeklySessions: "2 Live Lightning Drill Sessions / Week",
      keyMentor: "Raj Deepak",
      mentorRole: "Lead Mentor · Mental Maths & Speed Calculation (9+ yrs experience)",
      modules: [
        {
          title: "Module 1: Lightning Left-to-Right Addition & Subtraction",
          weeks: "Weeks 1–3",
          topics: ["Thinking in friendly tens and hundreds", "Eliminating carry-over cognitive friction", "Mental compensation techniques"]
        },
        {
          title: "Module 2: Vedic Base Multiplication & Squares",
          weeks: "Weeks 4–6",
          topics: ["Multiplication near bases 10, 50, 100", "Squaring numbers ending in 5 in 1 second", "Criss-cross 2-digit multiplication in the head"]
        },
        {
          title: "Module 3: Fractions, Decimals & Percentages at Sight",
          weeks: "Weeks 7–9",
          topics: ["15% and 25% rapid mental discounts", "Fraction benchmark comparisons", "Mental division with clean remainder visualization"]
        },
        {
          title: "Module 4: Lightning Speed Championship",
          weeks: "Weeks 10–12",
          topics: ["30-question speed drills in 90 seconds", "Confidence under timed pressure", "Official speed calculation certificate"]
        }
      ],
      sampleProblem: {
        q: "Calculate 97 × 94 without writing anything down.",
        a: "MathsVertex Base 100: Deficits are -3 and -6. Cross-subtract: 97 - 6 = 91. Multiply deficits: (-3) × (-6) = 18. Answer is 9,118!",
        timeSaved: "Solved in 3 seconds vs 40 seconds long multiplication"
      },
      examFocus: ["School Speed Tests", "Olympiad Speed rounds", "Mental arithmetic agility", "Math anxiety elimination"]
    },
    "grade-elevation": {
      title: "Grade Elevation Diagnostic Program",
      badge: "Diagnostic Remediation · Class 4 to 10",
      gradeSpan: "Class 4–10",
      headline: "Close prerequisite gaps and lift your child's math scores by 2 full letter grades in 90 days.",
      overview: "Most math struggles are not caused by current coursework, but by a concept that was half-understood 1–2 years ago (like fractions, negative numbers, or ratios). We diagnose the root cause and systematically repair it with encouraging 1:6 mentorship.",
      batchRatio: "1:6 Zero-Judgment Batch",
      weeklySessions: "3 Live Restorative Sessions / Week",
      keyMentor: "Kartik Raghav",
      mentorRole: "Lead Mentor · Grade Elevation (B.Ed., M.Sc. Maths, 6+ yrs remedial specialist)",
      modules: [
        {
          title: "Phase 1: Deep Root-Cause Diagnostic",
          weeks: "Weeks 1–2",
          topics: ["Testing 12 foundational math branches", "Pinpointing exact grade-level missing prerequisites", "Building an encouraging, safe-to-fail rapport"]
        },
        {
          title: "Phase 2: Fundamental Restoration Sprint",
          weeks: "Weeks 3–6",
          topics: ["Fractions & proportional thinking reset", "Mastering negative integers and order of operations", "Word problem translation step-by-step"]
        },
        {
          title: "Phase 3: Current School Syllabus Synchronization",
          weeks: "Weeks 7–10",
          topics: ["Syncing with school chapter test schedule", "Practicing school textbook + exemplar problems", "Targeted practice on high-weightage topics"]
        },
        {
          title: "Phase 4: Independent Confidence & Exam Readiness",
          weeks: "Weeks 11–12",
          topics: ["Mock school term exams", "Self-checking techniques to catch silly mistakes", "Parent report showing measurable grade jump"]
        }
      ],
      sampleProblem: {
        q: "Why do we flip and multiply when dividing fractions like (2/3) ÷ (4/5)?",
        a: "We show the visual division model so the child finally understands 'why' it works, permanently ending rote confusion.",
        timeSaved: "Restores permanent confidence"
      },
      examFocus: ["School Grade Recovery (C/D to A)", "Mid-Term and Final Exam Turnarounds", "Foundation Building for High School"]
    }
  };

  const program = detailsMap[programId] || detailsMap["olympiads"];

  return (
    <div className="py-12 bg-[#FBFAF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reusable Breadcrumb Navigation */}
        <div className="mb-8">
          <BreadcrumbNavigation
            items={[
              { label: "Programs", route: "programs" },
              { label: program.title }
            ]}
            onNavigate={onNavigate}
          />
        </div>

        {/* Hero Header */}
        <div className="bg-[#0A1128] text-white rounded-3xl p-8 sm:p-12 mb-12 relative overflow-hidden border border-white/10 shadow-xl">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 max-w-6xl">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFD700] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#FFD700]" />
                {program.badge}
              </span>

              <h1 className="font-display text-3xl sm:text-5xl font-bold leading-tight text-white">
                {program.title}
              </h1>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                {program.headline}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenDemo()}
                  className="px-6 py-3.5 rounded-full text-sm font-semibold text-[#0A1128] bg-[#FFD700] hover:bg-[#ffe247] transition-all transform active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Free Demo For This Program</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate("programs")}
                  className="px-6 py-3.5 rounded-full text-sm font-semibold text-white/80 border border-white/20 hover:bg-white/10 transition-colors"
                >
                  View All Programs
                </button>
              </div>
            </div>

            {/* Official 80px Brand Icon */}
            <div className="hidden md:flex p-3 rounded-3xl bg-white/10 border border-white/15 backdrop-blur-md shadow-2xl">
              <ProgramIcon type={programId} size={84} />
            </div>
          </div>

          {/* Quick Metrics Bar inside Hero */}
          <div className="mt-10 pt-6 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-white/70">
            <div>
              <span className="block text-[#FFD700] font-display font-bold text-lg">{program.batchRatio}</span>
              <span>Capped for 1-on-1 interaction</span>
            </div>
            <div>
              <span className="block text-[#FFD700] font-display font-bold text-lg">{program.weeklySessions}</span>
              <span>Live two-way Zoom classes</span>
            </div>
            <div>
              <span className="block text-[#FFD700] font-display font-bold text-lg">{program.keyMentor}</span>
              <span>{program.mentorRole}</span>
            </div>
            <div>
              <span className="block text-[#4FCBA4] font-display font-bold text-lg">Weekly Mock Reports</span>
              <span>Sent directly on WhatsApp</span>
            </div>
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main 8-Column Content */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="bg-white rounded-3xl border border-[#E8E2D2] p-8 shadow-sm space-y-4">
              <h2 className="font-display text-2xl font-bold text-[#191733]">
                Program Overview &amp; Pedagogy
              </h2>
              <p className="text-sm sm:text-base text-[#56517A] leading-relaxed">
                {program.overview}
              </p>
            </div>

            {/* Structured 4-Phase Curriculum Roadmap */}
            <div className="bg-white rounded-3xl border border-[#E8E2D2] p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-2xl font-bold text-[#191733]">
                  16-Week Structured Syllabus
                </h2>
                <span className="text-xs font-semibold text-[#4B3DF0] bg-[#EDEBFE] px-3 py-1 rounded-full">
                  1:6 Live Delivery
                </span>
              </div>

              <div className="space-y-4">
                {program.modules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#FBFAF6] border border-[#E8E2D2] space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-base font-bold text-[#191733]">
                        {mod.title}
                      </h3>
                      <span className="text-xs font-semibold text-[#4B3DF0]">
                        {mod.weeks}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {mod.topics.map((t, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs text-[#56517A]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-none" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Methodology Showcase Problem */}
            <div className="bg-[#EDEBFE] rounded-3xl border border-[#4B3DF0]/30 p-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4B3DF0]">
                Sample Method Showcase
              </span>
              <h3 className="font-display text-xl font-bold text-[#191733]">
                "{program.sampleProblem.q}"
              </h3>
              <div className="p-4 rounded-xl bg-white border border-[#4B3DF0]/20 text-xs sm:text-sm text-[#191733] font-medium">
                {program.sampleProblem.a}
              </div>
              <div className="text-xs font-semibold text-emerald-800">
                ⚡ Result: {program.sampleProblem.timeSaved}
              </div>
            </div>
          </div>

          {/* Right 4-Column Sticky Action Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Real-time Studio Session Illustration */}
            <MathGraphic type="classroom-session" />

            {/* Diagnostic Report Preview Illustration */}
            <MathGraphic type="diagnostic-dashboard" />

            {/* Enrollment / Demo Card */}
            <div className="bg-white rounded-3xl border border-[#E8E2D2] p-6 shadow-sm space-y-5 sticky top-24">
              <div>
                <span className="text-xs font-semibold text-[#4B3DF0] uppercase tracking-wider block">
                  Interactive Batch of 6
                </span>
                <h3 className="font-display text-xl font-bold text-[#191733] mt-1">
                  Ready to experience this class?
                </h3>
                <p className="text-xs text-[#56517A] mt-1.5 leading-relaxed">
                  Book a free 45-minute live diagnostic session. Meet the mentor, test your baseline skills, and review the customized plan.
                </p>
              </div>

              <div className="space-y-2 text-xs text-[#191733] pt-2 border-t border-[#E8E2D2]">
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#56517A]">Target Grades:</span>
                  <span className="font-semibold">{program.gradeSpan}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#56517A]">Batch Ratio:</span>
                  <span className="font-semibold">Max 6 Students</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#56517A]">Live Frequency:</span>
                  <span className="font-semibold">2–3 sessions / week</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#56517A]">Target Exams:</span>
                  <span className="font-semibold text-right max-w-[160px] truncate">{program.examFocus.slice(0, 2).join(", ")}</span>
                </div>
              </div>

              <button
                onClick={() => onOpenDemo()}
                className="w-full py-3.5 px-4 rounded-full text-sm font-semibold text-white bg-[#FF6A45] hover:bg-[#f1562e] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Book Free Demo Class</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[11px] text-[#56517A]">
                No payment or credit card required · Free assessment report included
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
