import React from "react";
import { HowItWorksSection } from "./HowItWorksSection";
import { BreadcrumbNavigation } from "./BreadcrumbNavigation";

export interface HowItWorksPageProps {
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate: (route: string) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onOpenDemo, onNavigate }) => {
  return (
    <div className="py-6 bg-[#FBFAF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <BreadcrumbNavigation
            items={[{ label: "How It Works" }]}
            onNavigate={onNavigate}
          />
        </div>

        <span className="text-xs font-semibold uppercase tracking-wider text-[#4B3DF0] block mb-2">
          Transparent Process
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#191733]">
          How MathsVertex Works
        </h1>
        <p className="mt-3 text-base text-[#56517A] max-w-3xl leading-relaxed">
          From your child's initial free 45-minute live diagnostic to weekly mock reports and Olympiad qualifications.
        </p>
      </div>

      <HowItWorksSection onOpenDemo={onOpenDemo} />
    </div>
  );
};
