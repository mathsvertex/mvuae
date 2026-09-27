import React from "react";
import { ChevronDown, Check } from "lucide-react";

export interface SegmentedControlItem {
  id: string;
  label: string;
  count?: number | string;
  icon?: React.ReactNode;
}

export interface SegmentedControlProps {
  items: SegmentedControlItem[];
  selectedId: string;
  onChange: (id: string) => void;
  className?: string;
  size?: "sm" | "md";
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  items,
  selectedId,
  onChange,
  className = "",
  size = "md"
}) => {
  return (
    <div
      className={`inline-flex flex-wrap items-center gap-1.5 p-1 bg-[#F4F1EA] rounded-full border border-[#E8E2D2] ${className}`}
      role="tablist"
    >
      {items.map((item) => {
        const isSelected = item.id === selectedId;
        const paddingClass = size === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-xs sm:text-sm";

        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={isSelected}
            onClick={() => onChange(item.id)}
            className={`rounded-full font-semibold transition-all flex items-center gap-2 cursor-pointer ${paddingClass} ${
              isSelected
                ? "bg-[#191733] text-white shadow-sm"
                : "text-[#56517A] hover:text-[#191733] hover:bg-white/60"
            }`}
          >
            {item.icon && <span>{item.icon}</span>}
            <span>{item.label}</span>
            {item.count !== undefined && (
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? "bg-white/20 text-white" : "bg-[#E8E2D2] text-[#56517A]"
                }`}
              >
                {item.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
