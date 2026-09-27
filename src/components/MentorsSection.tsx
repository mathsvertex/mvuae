import React, { useState } from "react";
import { MENTORS, Mentor } from "../data/coachingData";
import { Star, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

interface MentorsSectionProps {
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate?: (route: string) => void;
}

export const MentorsSection: React.FC<MentorsSectionProps> = ({ onOpenDemo, onNavigate }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all");

  const specialties = [
    { id: "all", label: "All Mentors" },
    { id: "olympiad", label: "Olympiad & AMC" },
    { id: "school", label: "School Curriculum" },
    { id: "mat", label: "MAT & Logic" },
    { id: "speed", label: "Speed & Mental Maths" }
  ];

  const filteredMentors = MENTORS.filter((m) => {
    if (selectedSpecialty === "all") return true;
    if (selectedSpecialty === "olympiad") return m.role.includes("Olympiad");
    if (selectedSpecialty === "school") return m.role.includes("School") || m.role.includes("Elevation");
    if (selectedSpecialty === "mat") return m.role.includes("MAT") || m.role.includes("ASSET");
    if (selectedSpecialty === "speed") return m.role.includes("Mental");
    return true;
  });

  return (
    <section className="py-20 bg-[#FBFAF6]" id="mentors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4B3DF0] block mb-2">
            World-Class Faculty
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#191733]">
            Who is actually teaching your child
          </h2>
          <p className="mt-3 text-base text-[#56517A]">
            No revolving-door tutors or recorded lectures. Every mentor is background-verified, has competed in or coached national-level Olympiads, and takes live small batches of 6.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {specialties.map((spec) => (
            <button
              key={spec.id}
              onClick={() => setSelectedSpecialty(spec.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                selectedSpecialty === spec.id
                  ? "bg-[#191733] text-white shadow-sm"
                  : "bg-white text-[#56517A] hover:text-[#191733] border border-[#E8E2D2]"
              }`}
            >
              {spec.label}
            </button>
          ))}
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white rounded-2xl border border-[#E8E2D2] p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div>
                {/* Header with avatar */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-13 h-13 rounded-2xl text-white font-display font-bold text-lg flex items-center justify-center shadow-sm"
                      style={{ backgroundColor: mentor.color }}
                    >
                      {mentor.initials}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#191733]">
                        {mentor.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#4B3DF0]">
                        {mentor.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Unboxed metadata separator */}
                <div className="text-xs text-[#56517A] mb-3 flex items-center gap-2">
                  <span>{mentor.experience}</span>
                  <span aria-hidden="true">·</span>
                  <span>{mentor.studentsTaught}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-amber-600 font-semibold flex items-center gap-0.5">
                    ★ {mentor.rating}
                  </span>
                </div>

                <p className="text-sm text-[#56517A] leading-relaxed mb-4">
                  {mentor.description}
                </p>

                <div className="text-xs text-[#191733] bg-[#FBFAF6] p-3 rounded-xl border border-[#E8E2D2] space-y-1 mb-5">
                  <div className="font-medium text-[#56517A]">Credentials &amp; Background:</div>
                  <div className="font-semibold">{mentor.qualifications}</div>
                </div>
              </div>

              {/* Card Footer with Demo CTA & Profile link */}
              <div className="pt-4 border-t border-[#E8E2D2] flex gap-2">
                {onNavigate && (
                  <button
                    onClick={() => onNavigate(`mentor/${mentor.id}`)}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold text-[#4B3DF0] bg-[#EDEBFE] hover:bg-[#dedafc] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  onClick={() => onOpenDemo()}
                  className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold text-[#191733] bg-[#FBFAF6] border border-[#E8E2D2] hover:bg-[#EDEBFE] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Book Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Row / Why Us (From user's HTML) */}
        <div className="mt-16 pt-12 border-t border-[#E8E2D2]">
          <h3 className="font-display text-2xl font-bold text-[#191733] mb-8">
            Why our mentor model works differently
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2 p-5 rounded-2xl bg-white border border-[#E8E2D2]">
              <span className="font-display text-xl font-bold text-[#4B3DF0]">01</span>
              <h4 className="font-semibold text-base text-[#191733]">Sat These Exact Exams</h4>
              <p className="text-xs sm:text-sm text-[#56517A] leading-relaxed">
                Many of our mentors are Olympiad alumni themselves, teaching problem-solving instincts rather than just formulas.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-white border border-[#E8E2D2]">
              <span className="font-display text-xl font-bold text-[#4B3DF0]">02</span>
              <h4 className="font-semibold text-base text-[#191733]">Batches Capped at 6</h4>
              <p className="text-xs sm:text-sm text-[#56517A] leading-relaxed">
                Small enough that a mentor notices exactly which concept your child is stuck on, live on screen.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-white border border-[#E8E2D2]">
              <span className="font-display text-xl font-bold text-[#4B3DF0]">03</span>
              <h4 className="font-semibold text-base text-[#191733]">Report After Every Test</h4>
              <p className="text-xs sm:text-sm text-[#56517A] leading-relaxed">
                You get more than a score—a short note on which concepts are strong and which need another week.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-white border border-[#E8E2D2]">
              <span className="font-display text-xl font-bold text-[#4B3DF0]">04</span>
              <h4 className="font-semibold text-base text-[#191733]">Custom Weekly Plan</h4>
              <p className="text-xs sm:text-sm text-[#56517A] leading-relaxed">
                School maths, Mental Maths, and Olympiads reward different skills. The plan is matched to your child’s goal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
