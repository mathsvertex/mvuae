import React from "react";
import { CoursesSection } from "./CoursesSection";
import { BreadcrumbNavigation } from "./BreadcrumbNavigation";
import { MathGraphic } from "./MathGraphic";

export interface CoursesPageProps {
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate: (route: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ onOpenDemo, onNavigate }) => {
  return (
    <div className="py-6 bg-[#FBFAF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <BreadcrumbNavigation
            items={[{ label: "Courses & Accelerators" }]}
            onNavigate={onNavigate}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#4B3DF0] block mb-2">
              Intensive Accelerators
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#191733]">
              Dedicated Courses
            </h1>
            <p className="mt-3 text-base text-[#56517A] max-w-3xl leading-relaxed">
              Targeted 12-week intensive masterclasses for parents looking to build rapid mental math speed or close foundational school math gaps.
            </p>
          </div>
          <div className="lg:col-span-4">
            <MathGraphic type="mental-speed" />
          </div>
        </div>
      </div>

      <CoursesSection onOpenDemo={onOpenDemo} />
    </div>
  );
};
