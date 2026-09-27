import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  onOpenDemo: (prefillGrade?: string) => void;
  currentPage: string;
  onNavigate: (route: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemo, currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", route: "home" },
    { label: "Programs", route: "programs" },
    { label: "Courses", route: "courses" },
    { label: "Mentors", route: "mentors" },
    { label: "How It Works", route: "how" },
    { label: "Parent Reviews", route: "parents" },
    { label: "FAQ", route: "faq" }
  ];

  const handleNavClick = (e: React.MouseEvent, route: string) => {
    e.preventDefault();
    onNavigate(route);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBFAF6]/90 backdrop-blur-md border-b border-[#E8E2D2] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark with mathematical vertex icon */}
        <button
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-[#191733] hover:opacity-90 transition-opacity cursor-pointer"
        >
          <svg className="w-7 h-7 flex-none" viewBox="0 0 28 28" fill="none">
            <path
              d="M3 24 L12 7 L16 15 L25 3"
              stroke="#4B3DF0"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="7" r="3" fill="#FF6A45" />
          </svg>
          <span>MathsVertex</span>
        </button>

        {/* Zone 2: Clean text navigation links with active state */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#56517A]">
          {navLinks.map((link) => {
            const isActive =
              currentPage === link.route ||
              (link.route === "programs" && currentPage.startsWith("program/")) ||
              (link.route === "mentors" && currentPage.startsWith("mentor/"));

            return (
              <button
                key={link.route}
                onClick={(e) => handleNavClick(e, link.route)}
                className={`transition-colors py-1 relative cursor-pointer ${
                  isActive
                    ? "text-[#4B3DF0] font-semibold"
                    : "hover:text-[#191733]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#4B3DF0] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary action button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenDemo()}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#FF6A45] hover:bg-[#f1562e] transition-transform active:scale-95 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
          >
            <span>Book Free Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#191733] hover:bg-[#E8E2D2]/50 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBFAF6] border-b border-[#E8E2D2] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.route}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(e, link.route);
                }}
                className={`px-3 py-2 text-left text-base font-medium rounded-lg transition-colors cursor-pointer ${
                  currentPage === link.route ? "bg-[#EDEBFE] text-[#4B3DF0] font-semibold" : "text-[#191733] hover:bg-[#EDEBFE]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[#E8E2D2]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 px-4 rounded-xl text-center text-sm font-semibold text-white bg-[#FF6A45] shadow-sm flex items-center justify-center gap-2"
            >
              <span>Book Free Demo Class</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs text-[#56517A] mt-2">
              45 min · Free diagnostic · No credit card required
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

