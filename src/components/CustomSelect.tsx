import React, { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

export interface CustomSelectOption {
  value: string;
  label: string;
  badge?: string;
  description?: string;
}

export interface CustomSelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: CustomSelectOption[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  disabled = false,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="block text-xs font-semibold text-[#191733] uppercase tracking-wider mb-1">
          {label}
        </label>
      )}

      {/* Select trigger button */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`w-full px-4 py-2.5 rounded-xl border text-left text-sm flex items-center justify-between transition-colors bg-[#FBFAF6] ${
          disabled
            ? "opacity-50 cursor-not-allowed border-[#E8E2D2]"
            : isOpen
            ? "border-[#4B3DF0] ring-2 ring-[#4B3DF0]/20 bg-white"
            : "border-[#E8E2D2] hover:border-[#4B3DF0]/60 cursor-pointer"
        }`}
      >
        <span className={selectedOption ? "text-[#191733] font-medium" : "text-[#56517A]"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#56517A] transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#4B3DF0]" : ""
          }`}
        />
      </button>

      {/* Floating Dropdown Menu */}
      {isOpen && (
        <>
          {/* Overlay to catch clicks outside */}
          <div
            className="fixed inset-0 z-30"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute left-0 right-0 top-full mt-1.5 z-40 bg-white rounded-2xl border border-[#E8E2D2] shadow-xl py-1.5 max-h-60 overflow-y-auto divide-y divide-[#E8E2D2]/50 animate-in fade-in zoom-in-95 duration-150">
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-[#EDEBFE] text-[#4B3DF0] font-semibold"
                      : "text-[#191733] hover:bg-[#FBFAF6]"
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span>{opt.label}</span>
                      {opt.badge && (
                        <span className="text-[10px] font-semibold text-[#4B3DF0] bg-white px-2 py-0.5 rounded-full border border-[#4B3DF0]/20">
                          {opt.badge}
                        </span>
                      )}
                    </div>
                    {opt.description && (
                      <div className="text-[11px] text-[#56517A] font-normal">
                        {opt.description}
                      </div>
                    )}
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-[#4B3DF0] flex-none" />}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
