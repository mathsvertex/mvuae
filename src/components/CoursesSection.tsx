import React from "react";
import { ArrowRight, Zap, Target, CheckCircle2, Star } from "lucide-react";
import { MentalMathVisualizer } from "./MentalMathVisualizer";

interface CoursesSectionProps {
  onOpenDemo: (prefillGrade?: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-20 bg-[#F4F1EA] border-y border-[#E8E2D2]" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4B3DF0] block mb-2">
            Specialized Math Accelerators
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#191733]">
            Dedicated courses for parents targeting a single decisive outcome
          </h2>
          <p className="mt-3 text-base text-[#56517A]">
            Beyond our continuous exam tracks, these two intensive courses address the two most common math parent requests: rapid calculation speed and closing deep prerequisite gaps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Course 1: Mental Maths Program */}
          <div className="bg-white rounded-3xl border border-[#E8E2D2] p-8 sm:p-10 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-700 uppercase tracking-wider">
                <Zap className="w-4 h-4 text-purple-600" />
                <span>Speed, Accuracy &amp; Working Memory · Class 2–8</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#191733]">
                Mental Maths Mastery Course
              </h3>

              {/* Interactive Mental Math Visualizer */}
              <div className="my-3">
                <MentalMathVisualizer />
              </div>

              <p className="text-sm sm:text-base text-[#56517A] leading-relaxed">
                A dedicated course in mental arithmetic and visualization techniques. For parents who want mental math as its own rigorous focus—not just a casual add-on. Small batches of 6 with weekly timed lightning circuits.
              </p>

              {/* What is covered */}
              <div className="pt-2 space-y-2.5">
                {[
                  "Left-to-right lightning addition & subtraction",
                  "Vedic base multiplication (e.g. 96 × 97 in 4 seconds)",
                  "Fractions, decimals & percentages mental conversions",
                  "Eliminating scratch paper dependency and calculation anxiety"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#191733]">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 flex-none mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Outcome pill */}
              <div className="pt-3 text-xs text-[#56517A] flex items-center gap-3">
                <span className="font-semibold text-[#191733]">Batch Ratio:</span> 1:6
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-[#191733]">Pace:</span> 2 classes / week
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-[#191733]">Duration:</span> 12 weeks
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E8E2D2]">
              <button
                onClick={() => onOpenDemo()}
                className="w-full py-3.5 px-6 rounded-full text-sm font-semibold text-white bg-purple-700 hover:bg-purple-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Book a Free Mental Maths Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Course 2: Grade Elevation Program */}
          <div className="bg-white rounded-3xl border border-[#E8E2D2] p-8 sm:p-10 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
                <Target className="w-4 h-4 text-blue-600" />
                <span>Foundational Diagnostic &amp; Remediation · Class 4–10</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#191733]">
                Grade Elevation Program
              </h3>

              {/* Visual 2-Grade Lift Trajectory */}
              <div className="my-2 bg-[#0C1938] rounded-2xl border border-blue-500/30 p-4 text-white">
                <div className="flex items-center justify-between text-xs text-blue-300 font-semibold mb-1.5">
                  <span>Prerequisite Gap Recovery Trajectory</span>
                  <span className="text-[#4FCBA4] font-mono">+20–30% Lift</span>
                </div>
                <div className="flex items-center justify-between px-3 py-2 bg-black/40 rounded-xl border border-white/10 text-xs">
                  <div className="text-center">
                    <span className="text-rose-400 block font-bold">Grade D / C</span>
                    <span className="text-[10px] text-white/50">Baseline</span>
                  </div>
                  <div className="flex-1 px-4 flex items-center">
                    <div className="w-full h-1.5 bg-white/20 rounded-full relative overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-rose-500 via-[#FFD700] to-emerald-400 rounded-full w-full" />
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-[#4FCBA4] block font-bold">Grade A</span>
                    <span className="text-[10px] text-white/50">90 Days</span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#56517A] leading-relaxed">
                For students who need to catch up on school maths and lift their current grade by 2 levels. Built around closing specific concept gaps rather than dragging students along a rigid syllabus pace. Includes a comprehensive diagnostic prior to the customized plan.
              </p>

              {/* What is covered */}
              <div className="pt-2 space-y-2.5">
                {[
                  "Pinpointing hidden gaps from previous academic years",
                  "Restoring fundamental number sense, fractions & algebraic thinking",
                  "De-escalating math anxiety in an encouraging, small-batch setting",
                  "Direct preparation for upcoming school mid-terms and finals"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#191733]">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-none mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Outcome pill */}
              <div className="pt-3 text-xs text-[#56517A] flex items-center gap-3">
                <span className="font-semibold text-[#191733]">Batch Ratio:</span> 1:6
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-[#191733]">Pace:</span> 3 classes / week
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-[#191733]">Results:</span> +20–30% average lift
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E8E2D2]">
              <button
                onClick={() => onOpenDemo()}
                className="w-full py-3.5 px-6 rounded-full text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Book a Free Grade Elevation Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
