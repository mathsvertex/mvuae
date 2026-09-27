import React, { useState } from "react";
import { FAQS, FaqItem } from "../data/coachingData";
import { ChevronDown, Search, HelpCircle, MessageSquare } from "lucide-react";

interface FaqSectionProps {
  onOpenDemo: (prefillGrade?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenDemo }) => {
  const [openIds, setOpenIds] = useState<string[]>(["q1"]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-[#F4F1EA]" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4B3DF0] block mb-2">
            Clear Answers
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#191733]">
            Questions parents usually ask
          </h2>
          <p className="mt-3 text-base text-[#56517A]">
            Have a question about our batch ratios, timetable, or the free demo? We have answered the most common ones here.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-[#56517A] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search frequently asked questions (e.g. demo, recording, syllabus)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-[#E8E2D2] bg-white text-sm text-[#191733] placeholder-[#56517A]/60 focus:outline-none focus:ring-2 focus:ring-[#4B3DF0]/30 focus:border-[#4B3DF0]"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Questions" },
              { id: "demo", label: "Demo Class" },
              { id: "classes", label: "Live Batches" },
              { id: "curriculum", label: "Syllabus & Boards" },
              { id: "results", label: "Reports & Tracking" }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#191733] text-white"
                    : "bg-white text-[#56517A] hover:text-[#191733] border border-[#E8E2D2]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion list */}
        <div className="bg-white rounded-3xl border border-[#E8E2D2] divide-y divide-[#E8E2D2] overflow-hidden shadow-sm">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-sm text-[#56517A]">
              No questions found matching "{searchQuery}". You can ask us directly via WhatsApp!
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div key={faq.id} className="transition-colors">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FBFAF6] focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base sm:text-lg font-semibold text-[#191733]">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full bg-[#EDEBFE] text-[#4B3DF0] flex items-center justify-center flex-none transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-[#4B3DF0] text-white" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#56517A] leading-relaxed animate-in fade-in duration-150">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions banner */}
        <div className="mt-8 text-center text-xs text-[#56517A]">
          Have a specific board or tournament question?{" "}
          <a
            href="https://wa.me/918858079444?text=Hi%20MathsVertex,%20I%20have%20a%20question%20about%20your%20coaching%20programs."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4B3DF0] font-semibold hover:underline"
          >
            Chat with our academic counselor on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};
