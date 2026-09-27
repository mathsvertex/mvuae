import React, { useState } from "react";
import { DIAGNOSTIC_QUESTIONS, DiagnosticQuestion } from "../data/coachingData";
import { CheckCircle2, XCircle, ArrowRight, Lightbulb, Clock, Zap } from "lucide-react";
import { DiagnosticVisualDiagram } from "./DiagnosticVisualDiagram";

interface InteractiveDiagnosticProps {
  onOpenDemo: (prefillGrade?: string) => void;
}

export const InteractiveDiagnostic: React.FC<InteractiveDiagnosticProps> = ({ onOpenDemo }) => {
  const [selectedGradeKey, setSelectedGradeKey] = useState<string>("3&4");
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number | null>>({});
  const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});

  const currentQuestion =
    DIAGNOSTIC_QUESTIONS.find((q) => q.gradeGroup === selectedGradeKey) || DIAGNOSTIC_QUESTIONS[0];

  const currentAnswer = selectedAnswers[selectedGradeKey];
  const isAnswered = currentAnswer !== undefined && currentAnswer !== null;
  const isCorrect = isAnswered && currentAnswer === currentQuestion.correctIndex;
  const revealed = showSolution[selectedGradeKey] || isAnswered;

  const handleSelectOption = (idx: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [selectedGradeKey]: idx }));
    setShowSolution((prev) => ({ ...prev, [selectedGradeKey]: true }));
  };

  const getGradeNumberForDemo = (key: string): string => {
    if (key === "1&2") return "2";
    if (key === "3&4") return "4";
    if (key === "5&6") return "6";
    return "8";
  };

  return (
    <section className="py-20 bg-[#F4F1EA] border-b border-[#E8E2D2]" id="diagnostic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4B3DF0] block mb-2">
            Try A Sample Olympiad Problem
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#191733]">
            How Olympiad alumni think vs. how schools teach
          </h2>
          <p className="mt-3 text-base text-[#56517A]">
            Try an actual diagnostic challenge below. Notice how MathsVertex mentors replace lengthy scratch algebra with spatial clarity and lightning mental models.
          </p>
        </div>

        {/* Grade Level Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { key: "1&2", label: "Grades 1 & 2 (Foundations)" },
            { key: "3&4", label: "Grades 3 & 4 (Junior Olympiad)" },
            { key: "5&6", label: "Grades 5 & 6 (Intermediate IMO / ASSET)" },
            { key: "7&8", label: "Grades 7 & 8 (Advanced Olympiad & MAT)" }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedGradeKey(tab.key)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedGradeKey === tab.key
                  ? "bg-[#191733] text-white shadow-sm"
                  : "bg-white text-[#56517A] hover:text-[#191733] hover:bg-[#E8E2D2]/50 border border-[#E8E2D2]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Challenge Card */}
        <div className="bg-white rounded-3xl border border-[#E8E2D2] shadow-sm p-6 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#E8E2D2]">
            <div>
              <span className="text-xs font-bold text-[#4B3DF0] uppercase tracking-wider">
                {currentQuestion.topic}
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#191733] mt-0.5">
                {currentQuestion.title}
              </h3>
            </div>
            <span className="text-xs text-[#56517A] bg-[#FBFAF6] px-3 py-1 rounded-full border border-[#E8E2D2]">
              Interactive Simulation
            </span>
          </div>

          {/* Problem Statement */}
          <div className="py-6 space-y-5">
            <p className="text-base sm:text-xl font-medium text-[#191733] leading-relaxed">
              "{currentQuestion.question}"
            </p>

            {/* Visual Problem Diagram Styled with Deep Navy & Gold like Hero */}
            <div className="pt-1">
              <DiagnosticVisualDiagram
                gradeGroup={selectedGradeKey}
                revealed={revealed}
              />
            </div>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {currentQuestion.options.map((opt, idx) => {
              const isChosen = currentAnswer === idx;
              const isTheCorrectOne = idx === currentQuestion.correctIndex;

              let btnStyle = "bg-[#FBFAF6] border-[#E8E2D2] text-[#191733] hover:border-[#4B3DF0]";
              if (isAnswered) {
                if (isTheCorrectOne) {
                  btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold";
                } else if (isChosen) {
                  btnStyle = "bg-rose-50 border-rose-500 text-rose-900";
                } else {
                  btnStyle = "bg-[#FBFAF6] border-[#E8E2D2] text-[#56517A] opacity-60";
                }
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleSelectOption(idx)}
                  className={`p-4 rounded-xl border-2 text-left text-sm sm:text-base flex items-center justify-between transition-all cursor-pointer ${btnStyle}`}
                >
                  <span className="font-medium">{opt}</span>
                  {isAnswered && isTheCorrectOne && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-none ml-2" />
                  )}
                  {isAnswered && isChosen && !isTheCorrectOne && (
                    <XCircle className="w-5 h-5 text-rose-500 flex-none ml-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation comparison box */}
          {revealed && (
            <div className="mt-8 pt-6 border-t border-[#E8E2D2] space-y-5 animate-in fade-in duration-300">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                    isCorrect
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {isCorrect ? "✓ Correct Answer!" : "Exam Breakdown"}
                </span>
                <span className="text-xs text-[#56517A]">
                  See the difference in methodology:
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Traditional School Way */}
                <div className="p-5 rounded-2xl bg-[#F9F8F5] border border-[#E8E2D2] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#56517A]">
                    <Clock className="w-4 h-4 text-rose-500" />
                    <span>Traditional School Rote Method (~2–3 Minutes)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#56517A] leading-relaxed">
                    {currentQuestion.roteMethod}
                  </p>
                </div>

                {/* MathsVertex Method */}
                <div className="p-5 rounded-2xl bg-[#EDEBFE] border border-[#4B3DF0]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#4B3DF0]">
                    <Zap className="w-4 h-4 text-[#4B3DF0]" />
                    <span>The MathsVertex Instinct (&lt; 10 Seconds)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#191733] font-medium leading-relaxed">
                    {currentQuestion.vertexMethod}
                  </p>
                </div>
              </div>

              {/* Core Insight Callout */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 flex items-start gap-2.5">
                <Lightbulb className="w-4 h-4 text-amber-700 flex-none mt-0.5" />
                <div>
                  <strong>Mentor's Key Takeaway:</strong> {currentQuestion.insight}
                </div>
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="mt-8 pt-6 border-t border-[#E8E2D2] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-[#56517A]">
              Want a comprehensive diagnostic across 12 math domains?
            </div>
            <button
              onClick={() => onOpenDemo(getGradeNumberForDemo(selectedGradeKey))}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#4B3DF0] hover:bg-[#3c2ed4] transition-colors cursor-pointer"
            >
              <span>Get Full Diagnostic in Free Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
