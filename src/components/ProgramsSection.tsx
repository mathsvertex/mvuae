import React, { useState } from "react";
import { PROGRAMS, Program } from "../data/coachingData";
import { ArrowRight, CheckCircle2, Users, Calendar } from "lucide-react";
import { ProgramIcon } from "./ProgramIcon";

interface ProgramsSectionProps {
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate?: (route: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenDemo, onNavigate }) => {
  const [filter, setFilter] = useState<"all" | "core" | "course" | "extra">("all");

  const filteredPrograms = PROGRAMS.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  // Top accent border color per program per brand guide (purple, coral, mint, sun)
  const getAccentBorder = (id: string) => {
    switch (id) {
      case "school-maths":
        return "border-t-[#4B3DF0]";
      case "olympiads":
        return "border-t-[#FF6A45]";
      case "mat-reasoning":
        return "border-t-[#1F9C79]";
      case "asset-prep":
        return "border-t-[#4B3DF0]";
      case "mental-maths":
        return "border-t-[#FFC94A]";
      case "grade-elevation":
        return "border-t-[#1F9C79]";
      default:
        return "border-t-[#4B3DF0]";
    }
  };

  return (
    <section className="py-20 bg-[#FBFAF6]" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4B3DF0] block mb-2">
            Targeted Learning Tracks
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#191733]">
            Programs designed for the exact exam your child is sitting
          </h2>
          <p className="mt-3 text-base text-[#56517A]">
            Mental Maths is not treated as an isolated drill here—every mentor weaves speed calculations and logical shortcuts directly into the student’s weekly school or Olympiad syllabus.
          </p>
        </div>

        {/* Filter Controls (Allowable functional segmented buttons) */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {[
            { id: "all", label: "All Offerings" },
            { id: "core", label: "Core Programs (School & Olympiads)" },
            { id: "course", label: "Dedicated Courses (Speed & Remediation)" },
            { id: "extra", label: "1:1 Mentoring, Bootcamps & Workshops" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                filter === tab.id
                  ? "bg-[#4B3DF0] text-white shadow-sm"
                  : "bg-white text-[#56517A] hover:text-[#191733] border border-[#E8E2D2]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className={`bg-white rounded-2xl border border-[#E8E2D2] border-t-[3px] ${getAccentBorder(
                program.id
              )} p-6 sm:p-7 flex flex-col justify-between hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all group relative`}
            >
              <div>
                {/* Header row with Icon & Metadata */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <ProgramIcon type={program.id} size={48} />
                  <div className="text-right">
                    <span className="inline-block text-xs font-semibold text-[#4B3DF0] uppercase tracking-wider">
                      {program.tag}
                    </span>
                    <div className="text-xs text-[#56517A] mt-0.5">{program.gradeSpan}</div>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-[#191733] group-hover:text-[#4B3DF0] transition-colors mb-2">
                  {program.title}
                </h3>

                <p className="text-sm text-[#56517A] leading-relaxed mb-5">
                  {program.shortDesc}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {program.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#191733]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-none" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Meta & CTA */}
              <div className="pt-4 border-t border-[#E8E2D2]/80 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#56517A]">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#4B3DF0]" />
                    {program.batchSize}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#4B3DF0]" />
                    {program.frequency}
                  </span>
                </div>

                <div className="flex gap-2">
                  {onNavigate && (
                    <button
                      onClick={() => onNavigate(`program/${program.id}`)}
                      className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold text-[#4B3DF0] bg-[#EDEBFE] hover:bg-[#dedafc] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Syllabus</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    onClick={() => onOpenDemo()}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold text-[#191733] bg-[#FBFAF6] border border-[#E8E2D2] hover:bg-[#EDEBFE] hover:text-[#4B3DF0] hover:border-[#4B3DF0]/40 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Book Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
