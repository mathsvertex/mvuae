import React from "react";
import { Hero } from "./Hero";
import { InteractiveDiagnostic } from "./InteractiveDiagnostic";
import { ProgramsSection } from "./ProgramsSection";
import { MentorsSection } from "./MentorsSection";
import { CoursesSection } from "./CoursesSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FaqSection } from "./FaqSection";

export interface HomePageProps {
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate: (route: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenDemo, onNavigate }) => {
  return (
    <>
      <Hero onOpenDemo={onOpenDemo} onNavigate={onNavigate} />
      <InteractiveDiagnostic onOpenDemo={onOpenDemo} />
      <MentorsSection onOpenDemo={onOpenDemo} />
      <ProgramsSection onOpenDemo={onOpenDemo} />
      <CoursesSection onOpenDemo={onOpenDemo} />
      <HowItWorksSection onOpenDemo={onOpenDemo} />
      <TestimonialsSection onOpenDemo={onOpenDemo} />
      <FaqSection onOpenDemo={onOpenDemo} />
    </>
  );
};
