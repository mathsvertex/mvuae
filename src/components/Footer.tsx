import React from "react";
import { ArrowRight, MessageSquare, Mail, Phone } from "lucide-react";
import { BUSINESS_WHATSAPP_NUMBER } from "../data/coachingData";

interface FooterProps {
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate?: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo, onNavigate }) => {
  const handleNav = (route: string) => {
    if (onNavigate) {
      onNavigate(route);
    } else {
      window.location.hash = route;
    }
  };

  return (
    <div>
      {/* Final Call to Action Band */}
      <section className="bg-[#FBFAF6] py-16" id="book">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#4B3DF0] text-white rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-xl">
            {/* Background mathematical decoration */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#FFD700]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#FFD700]">
                Zero Risk · No Credit Card Required
              </span>

              <h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight text-white">
                See a live class before you decide anything
              </h2>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                Book a free 45-minute demo—your child meets a real mentor, and you get a diagnostic starting point, not an aggressive sales call.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onOpenDemo()}
                  className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-[#4B3DF0] bg-white hover:bg-slate-100 transition-all transform active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Free Demo Class</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <a
                  href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=Hi%20MathsVertex,%20I%20would%20like%20to%20inquire%20about%20your%20upcoming%20batches.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-4 rounded-full text-base font-semibold text-white border border-white/40 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="text-xs text-white/60">
                Batches are strictly capped at 6 students to maintain direct mentor engagement.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiet Footer */}
      <footer className="bg-[#FBFAF6] border-t border-[#E8E2D2] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {/* Col 1: Wordmark & Statement */}
            <div className="md:col-span-2 space-y-3">
              <button
                onClick={() => handleNav("home")}
                className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-[#191733] cursor-pointer"
              >
                <svg className="w-6 h-6 flex-none" viewBox="0 0 28 28" fill="none">
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
              <p className="text-sm text-[#56517A] max-w-md leading-relaxed">
                Live online coaching for competitive mathematics from school syllabus to international Olympiads (IMO, IOM, MAT, ASSET). Batches strictly capped at 6 students.
              </p>
              <div className="text-xs text-[#56517A] pt-1">
                Serving students across UAE, India, Singapore, UK, and USA.
              </div>
            </div>

            {/* Col 2: Programs Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-sm text-[#191733] mb-3">
                Programs &amp; Syllabi
              </h4>
              <ul className="space-y-2 text-xs text-[#56517A]">
                <li><button onClick={() => handleNav("program/school-maths")} className="hover:text-[#4B3DF0] transition-colors cursor-pointer text-left">School Maths (Class 1–10)</button></li>
                <li><button onClick={() => handleNav("program/olympiads")} className="hover:text-[#4B3DF0] transition-colors cursor-pointer text-left">Math Olympiads (IMO / IOM)</button></li>
                <li><button onClick={() => handleNav("program/mat-reasoning")} className="hover:text-[#4B3DF0] transition-colors cursor-pointer text-left">MAT (Mental Ability Test)</button></li>
                <li><button onClick={() => handleNav("program/asset-prep")} className="hover:text-[#4B3DF0] transition-colors cursor-pointer text-left">ASSET Preparation</button></li>
                <li><button onClick={() => handleNav("program/mental-maths")} className="hover:text-[#4B3DF0] transition-colors cursor-pointer text-left">Mental Maths Program</button></li>
                <li><button onClick={() => handleNav("program/grade-elevation")} className="hover:text-[#4B3DF0] transition-colors cursor-pointer text-left">Grade Elevation Program</button></li>
              </ul>
            </div>

            {/* Col 3: Direct Contact */}
            <div>
              <h4 className="font-display font-semibold text-sm text-[#191733] mb-3">
                Contact &amp; Admissions
              </h4>
              <ul className="space-y-2.5 text-xs text-[#56517A]">
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#4B3DF0]" />
                  <span>hello@mathsvertex.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#4B3DF0]" />
                  <span>+91 90000 00000</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp: +91 88580 79444</span>
                </li>
                <li className="pt-1">
                  <button
                    onClick={() => onOpenDemo()}
                    className="text-[#FF6A45] font-semibold hover:underline cursor-pointer"
                  >
                    Book a free demo class →
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#E8E2D2] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#56517A]">
            <div>© 2026 MathsVertex. Online coaching for competitive math exams. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <span>Privacy Policy</span>
              <span aria-hidden="true">·</span>
              <span>Terms of Service</span>
              <span aria-hidden="true">·</span>
              <span>Parent Trust Code</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

