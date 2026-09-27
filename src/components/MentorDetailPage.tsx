import React from "react";
import { MENTORS } from "../data/coachingData";
import { ArrowRight, Star, Award, BookOpen, CheckCircle2 } from "lucide-react";
import { BreadcrumbNavigation } from "./BreadcrumbNavigation";

export interface MentorDetailPageProps {
  mentorId: string;
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate: (route: string) => void;
}

export const MentorDetailPage: React.FC<MentorDetailPageProps> = ({
  mentorId,
  onOpenDemo,
  onNavigate
}) => {
  const mentor = MENTORS.find((m) => m.id === mentorId) || MENTORS[2]; // Defaults to Mohd Hasib Alam

  return (
    <div className="py-12 bg-[#FBFAF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reusable Breadcrumb Navigation */}
        <div className="mb-8">
          <BreadcrumbNavigation
            items={[
              { label: "Mentors", route: "mentors" },
              { label: mentor.name }
            ]}
            onNavigate={onNavigate}
          />
        </div>

        {/* Mentor Profile Hero */}
        <div className="bg-white rounded-3xl border border-[#E8E2D2] p-8 sm:p-12 shadow-sm mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3 flex flex-col items-center text-center">
              <div
                className="w-28 h-28 rounded-3xl text-white font-display font-bold text-3xl flex items-center justify-center shadow-md mb-4"
                style={{ backgroundColor: mentor.color }}
              >
                {mentor.initials}
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                ✓ Verified Mentor
              </span>
            </div>

            <div className="md:col-span-9 space-y-4">
              <div>
                <span className="text-xs font-semibold text-[#4B3DF0] uppercase tracking-wider">
                  {mentor.role}
                </span>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#191733] mt-1">
                  {mentor.name}
                </h1>
                <p className="text-sm font-medium text-[#56517A] mt-1">
                  Specialty: {mentor.specialty}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#56517A]">
                <span className="flex items-center gap-1 text-amber-500 font-semibold">
                  ★ {mentor.rating} Parent Rating
                </span>
                <span aria-hidden="true">·</span>
                <span>{mentor.experience}</span>
                <span aria-hidden="true">·</span>
                <span>{mentor.studentsTaught}</span>
              </div>

              <p className="text-sm sm:text-base text-[#56517A] leading-relaxed">
                {mentor.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenDemo()}
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#4B3DF0] hover:bg-[#3c2ed4] transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Request Demo with {mentor.name.split(" ")[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Credentials & Teaching Method */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border border-[#E8E2D2] p-8 shadow-sm space-y-4">
            <h2 className="font-display text-xl font-bold text-[#191733] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#4B3DF0]" />
              Academic Pedigree &amp; Certifications
            </h2>
            <p className="text-sm text-[#56517A] leading-relaxed">
              {mentor.qualifications}
            </p>
            <div className="space-y-2 pt-2 text-xs text-[#191733]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Extensive training in inquiry-based mathematical pedagogy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Specialist in de-escalating student test anxiety and building problem intuition</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Weekly direct WhatsApp feedback loop with parents</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-[#E8E2D2] p-8 shadow-sm space-y-4">
            <h2 className="font-display text-xl font-bold text-[#191733] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#4B3DF0]" />
              Batch Philosophy
            </h2>
            <p className="text-sm text-[#56517A] leading-relaxed">
              "In a large classroom of 30, a quiet student who misses a single step in a proof gets left behind. In our capped batch of 6, every student speaks, every error is analyzed live on screen without judgment, and math becomes an exciting puzzle."
            </p>
            <div className="pt-2 text-xs font-semibold text-[#4B3DF0]">
              — {mentor.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
