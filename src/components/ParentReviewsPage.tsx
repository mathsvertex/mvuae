import React from "react";
import { TestimonialsSection } from "./TestimonialsSection";
import { BreadcrumbNavigation } from "./BreadcrumbNavigation";

export interface ParentReviewsPageProps {
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate: (route: string) => void;
}

export const ParentReviewsPage: React.FC<ParentReviewsPageProps> = ({ onOpenDemo, onNavigate }) => {
  return (
    <div className="py-6 bg-[#FBFAF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <BreadcrumbNavigation
            items={[{ label: "Parent Reviews & Results" }]}
            onNavigate={onNavigate}
          />
        </div>

        <span className="text-xs font-semibold uppercase tracking-wider text-[#4B3DF0] block mb-2">
          Real Results
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#191733]">
          Parent Reviews &amp; Success Stories
        </h1>
        <p className="mt-3 text-base text-[#56517A] max-w-3xl leading-relaxed">
          See why 98% of parents renew with MathsVertex across India, UAE, Singapore, the UK, and the USA.
        </p>
      </div>

      <TestimonialsSection onOpenDemo={onOpenDemo} />
    </div>
  );
};
