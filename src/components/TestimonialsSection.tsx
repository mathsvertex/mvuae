import React, { useState } from "react";
import { TESTIMONIALS, Testimonial } from "../data/coachingData";
import { Quote, Star, ArrowRight, ShieldCheck } from "lucide-react";

interface TestimonialsSectionProps {
  onOpenDemo: (prefillGrade?: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenDemo }) => {
  const [filter, setFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Reviews" },
    { id: "olympiad", label: "Math Olympiads" },
    { id: "mat", label: "MAT & Aptitude" },
    { id: "school", label: "School Maths" }
  ];

  const filteredTestimonials = TESTIMONIALS.filter((t) => {
    if (filter === "all") return true;
    if (filter === "olympiad") return t.program.includes("Olympiad");
    if (filter === "mat") return t.program.includes("MAT");
    if (filter === "school") return t.program.includes("School") || t.program.includes("ASSET");
    return true;
  });

  return (
    <section className="py-20 bg-[#FBFAF6]" id="parents">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#4B3DF0] block mb-2">
              Verified Parent Feedback
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#191733]">
              What parents tell us after term one
            </h2>
            <p className="mt-3 text-base text-[#56517A]">
              Real outcomes from parents in India, UAE, Singapore and the UK whose children shifted from test anxiety to Olympiad medalists.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  filter === tab.id
                    ? "bg-[#191733] text-white"
                    : "bg-white text-[#56517A] hover:text-[#191733] border border-[#E8E2D2]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-[#E8E2D2] p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-[#191733] leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E2D2]">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full text-white font-display font-bold text-xs flex items-center justify-center flex-none ${t.avatarBg}`}
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-[#191733]">
                      {t.name}
                    </h4>
                    <p className="text-xs text-[#56517A]">{t.childInfo}</p>
                  </div>
                </div>

                {/* Outcome badge - clean text */}
                <div className="mt-3 text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <span>Result:</span>
                  <span>{t.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proof statistics banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#EDEBFE] border border-[#4B3DF0]/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#4B3DF0] flex-none" />
            <span className="text-xs sm:text-sm font-medium text-[#191733]">
              98.2% parent renewal rate across 3 consecutive terms in 2025–2026.
            </span>
          </div>

          <button
            onClick={() => onOpenDemo()}
            className="text-xs sm:text-sm font-semibold text-[#4B3DF0] hover:text-[#372ccb] flex items-center gap-1.5 cursor-pointer"
          >
            <span>Experience your child's free demo class</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
