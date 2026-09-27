import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { ProgramsPage } from "./components/ProgramsPage";
import { ProgramDetailPage } from "./components/ProgramDetailPage";
import { MentorsPage } from "./components/MentorsPage";
import { MentorDetailPage } from "./components/MentorDetailPage";
import { CoursesPage } from "./components/CoursesPage";
import { HowItWorksPage } from "./components/HowItWorksPage";
import { ParentReviewsPage } from "./components/ParentReviewsPage";
import { FaqPage } from "./components/FaqPage";
import { Footer } from "./components/Footer";
import { DemoModal } from "./components/DemoModal";

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [prefillGrade, setPrefillGrade] = useState<string | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState<string>("home");

  const handleOpenDemo = (grade?: string) => {
    setPrefillGrade(grade);
    setDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setDemoModalOpen(false);
    setPrefillGrade(undefined);
  };

  const handleNavigate = (route: string) => {
    window.location.hash = route;
    setCurrentPage(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Listen to hash changes for deep linking across all pages
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "").trim();
      if (!hash || hash === "home") {
        setCurrentPage("home");
      } else if (hash === "book") {
        setDemoModalOpen(true);
      } else {
        setCurrentPage(hash);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  // Update HTML document title based on current page
  useEffect(() => {
    const pageTitles: Record<string, string> = {
      home: "MathsVertex — Online Coaching for Competitive Math Exams",
      programs: "Programs & Curriculum Tracks — MathsVertex",
      courses: "Dedicated Math Accelerators & Courses — MathsVertex",
      mentors: "Our Faculty & Olympiad Mentors — MathsVertex",
      how: "How It Works: Free Demo to Olympiad Peak — MathsVertex",
      parents: "Parent Reviews & Exam Results — MathsVertex",
      faq: "Frequently Asked Questions — MathsVertex"
    };

    if (currentPage.startsWith("program/")) {
      document.title = "16-Week Syllabus & Program Details — MathsVertex";
    } else if (currentPage.startsWith("mentor/")) {
      document.title = "Mentor Pedagogy & Profile — MathsVertex";
    } else {
      document.title = pageTitles[currentPage] || "MathsVertex — Online Competitive Math Coaching";
    }
  }, [currentPage]);

  // Render the current view
  const renderCurrentView = () => {
    if (currentPage.startsWith("program/")) {
      const programId = currentPage.replace("program/", "");
      return (
        <ProgramDetailPage
          programId={programId}
          onOpenDemo={handleOpenDemo}
          onNavigate={handleNavigate}
        />
      );
    }

    if (currentPage.startsWith("mentor/")) {
      const mentorId = currentPage.replace("mentor/", "");
      return (
        <MentorDetailPage
          mentorId={mentorId}
          onOpenDemo={handleOpenDemo}
          onNavigate={handleNavigate}
        />
      );
    }

    switch (currentPage) {
      case "programs":
        return <ProgramsPage onOpenDemo={handleOpenDemo} onNavigate={handleNavigate} />;
      case "courses":
        return <CoursesPage onOpenDemo={handleOpenDemo} onNavigate={handleNavigate} />;
      case "mentors":
        return <MentorsPage onOpenDemo={handleOpenDemo} onNavigate={handleNavigate} />;
      case "how":
        return <HowItWorksPage onOpenDemo={handleOpenDemo} onNavigate={handleNavigate} />;
      case "parents":
        return <ParentReviewsPage onOpenDemo={handleOpenDemo} onNavigate={handleNavigate} />;
      case "faq":
        return <FaqPage onOpenDemo={handleOpenDemo} onNavigate={handleNavigate} />;
      case "home":
      default:
        return <HomePage onOpenDemo={handleOpenDemo} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFAF6] text-[#191733]">
      {/* Dynamic Header */}
      <Header
        onOpenDemo={handleOpenDemo}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Dynamic Page Main Content */}
      <main className="flex-1 animate-in fade-in duration-150">
        {renderCurrentView()}
      </main>

      {/* Global Footer */}
      <Footer onOpenDemo={handleOpenDemo} onNavigate={handleNavigate} />

      {/* Free Demo Booking Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={handleCloseDemo}
        prefillGrade={prefillGrade}
      />
    </div>
  );
}

