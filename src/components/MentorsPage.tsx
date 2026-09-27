import React, { useState } from "react";
import { MENTORS, Mentor } from "../data/coachingData";
import { ArrowRight, Star, ShieldCheck, Award, BookOpen } from "lucide-react";
import { SegmentedControl } from "./SegmentedControl";
import { BreadcrumbNavigation } from "./BreadcrumbNavigation";

export interface MentorsPageProps {
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate: (route: string) => void;
}

export const MentorsPage: React.FC<MentorsPageProps> = ({ onOpenDemo, onNavigate }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all");

  const filterItems = [
    { id: "all", label: "All Faculty", count: MENTORS.length },
    { id: "olympiad", label: "Olympiad & IMO", count: 1 },
    { id: "school", label: "School Curriculum", count: 2 },
    { id: "mat", label: "MAT & ASSET", count: 2 },
    { id: "speed", label: "Speed & Mental Maths", count: 1 }
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
    <div className="py-12 bg-[#FBFAF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <BreadcrumbNavigation
            items={[{ label: "Mentors" }]}
            onNavigate={onNavigate}
          />
        </div>

        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4B3DF0] block mb-2">
            The MathsVertex Mentorship Desk
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#191733]">
            Our Faculty &amp; Academic Leads
          </h1>
          <p className="mt-3 text-base text-[#56517A] leading-relaxed">
            Every MathsVertex mentor is background-verified, has competed in or prepared students for national and international Olympiads, and leads live batches strictly capped at 6 students.
          </p>
        </div>

        <div className="mb-10 overflow-x-auto pb-2">
          <SegmentedControl
            items={filterItems}
            selectedId={selectedSpecialty}
            onChange={(id) => setSelectedSpecialty(id)}
          />
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white rounded-3xl border border-[#E8E2D2] p-7 flex flex-col justify-between hover:shadow-lg transition-all group"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-14 h-14 rounded-2xl text-white font-display font-bold text-xl flex items-center justify-center shadow-sm"
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

                <div className="text-xs text-[#191733] bg-[#FBFAF6] p-3 rounded-2xl border border-[#E8E2D2] space-y-1 mb-5">
                  <div className="font-medium text-[#56517A]">Credentials:</div>
                  <div className="font-semibold">{mentor.qualifications}</div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-[#E8E2D2] space-y-2">
                <button
                  onClick={() => onNavigate(`mentor/${mentor.id}`)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#4B3DF0] bg-[#EDEBFE] hover:bg-[#dedafc] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>View Full Mentor Profile &amp; Pedagogy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenDemo()}
                  className="w-full py-2 px-4 rounded-xl text-xs font-medium text-[#56517A] hover:text-[#191733] transition-colors cursor-pointer"
                >
                  Request Demo With {mentor.name.split(" ")[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
