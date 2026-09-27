import React, { useState } from "react";
import { PROGRAMS, Program } from "../data/coachingData";
import { ArrowRight, CheckCircle2, Users, Calendar, Sparkles, Filter } from "lucide-react";
import { SegmentedControl } from "./SegmentedControl";
import { BreadcrumbNavigation } from "./BreadcrumbNavigation";
import { MathGraphic } from "./MathGraphic";
import { ProgramIcon } from "./ProgramIcon";

export interface ProgramsPageProps {
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate: (route: string) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onOpenDemo, onNavigate }) => {
  const [filter, setFilter] = useState<string>("all");

  const filterItems = [
    { id: "all", label: "All Programs", count: PROGRAMS.length },
    { id: "core", label: "Core Tracks (School & Olympiads)", count: 4 },
    { id: "course", label: "Accelerators (Speed & Elevation)", count: 2 },
    { id: "extra", label: "1:1 Mentoring & Workshops", count: 3 }
  ];

  const filteredPrograms = PROGRAMS.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

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
    <div className="py-12 bg-[#FBFAF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <BreadcrumbNavigation
            items={[{ label: "Programs" }]}
            onNavigate={onNavigate}
          />
        </div>

        {/* Header with Visual Trophy Asset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#4B3DF0] block mb-2">
              Curriculum &amp; Exam Tracks
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#191733]">
              Dedicated Math Programs
            </h1>
            <p className="mt-3 text-base text-[#56517A] leading-relaxed">
              Every competition and school board requires a distinct problem-solving instinct. Explore each specialized program below, view the complete 16-week curriculum syllabus, or book a free 45-minute live diagnostic demo.
            </p>
          </div>
          <div className="lg:col-span-4">
            <MathGraphic type="olympiad-trophy" />
          </div>
        </div>

        {/* Filter Segmented Control */}
        <div className="mb-10 overflow-x-auto pb-2">
          <SegmentedControl
            items={filterItems}
            selectedId={filter}
            onChange={(id) => setFilter(id)}
          />
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className={`bg-white rounded-3xl border border-[#E8E2D2] border-t-[3px] ${getAccentBorder(
                program.id
              )} p-7 flex flex-col justify-between hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all group`}
            >
              <div>
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

                <p className="text-sm text-[#56517A] leading-relaxed mb-6">
                  {program.shortDesc}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5 mb-6">
                  {program.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#191733]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-none mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-4 border-t border-[#E8E2D2] space-y-2.5">
                <div className="flex items-center justify-between text-xs text-[#56517A] pb-1">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#4B3DF0]" />
                    {program.batchSize}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#4B3DF0]" />
                    {program.frequency}
                  </span>
                </div>

                {/* Direct View Syllabus Link */}
                <button
                  onClick={() => onNavigate(`program/${program.id}`)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#4B3DF0] bg-[#EDEBFE] hover:bg-[#dedafc] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>View 16-Week Syllabus &amp; Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenDemo()}
                  className="w-full py-2 px-4 rounded-xl text-xs font-medium text-[#56517A] hover:text-[#191733] hover:bg-[#FBFAF6] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Book Free Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
