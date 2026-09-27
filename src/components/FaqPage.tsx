import React from "react";
import { FaqSection } from "./FaqSection";
import { BreadcrumbNavigation } from "./BreadcrumbNavigation";

export interface FaqPageProps {
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate: (route: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenDemo, onNavigate }) => {
  return (
    <div className="py-6 bg-[#F4F1EA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        {/* Breadcrumb Navigation */}
        <div className="mb-4">
          <BreadcrumbNavigation
            items={[{ label: "Frequently Asked Questions" }]}
            onNavigate={onNavigate}
          />
        </div>

        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4B3DF0] block mb-2">
            Knowledge Base
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#191733]">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-base text-[#56517A] leading-relaxed">
            Everything you need to know about our batch ratios, recording policies, curriculum alignment, and trial sessions.
          </p>
        </div>
      </div>

      <FaqSection onOpenDemo={onOpenDemo} />
    </div>
  );
};

