import React from "react";

export type ProgramIconType =
  | "school-maths"
  | "olympiads"
  | "mat-reasoning"
  | "asset-prep"
  | "mental-maths"
  | "grade-elevation";

interface ProgramIconProps {
  type: ProgramIconType | string;
  className?: string;
  size?: number;
}

/**
 * 6 Official MathsVertex Brand Icons (80x80px scalable viewBox):
 * 1. School Maths: Book icon (Purple #4B3DF0)
 * 2. Olympiad: Medal with star (Coral #FF6A45 + Sun #FFC94A)
 * 3. MAT: Logic grid pattern (Mint #1F9C79 + Purple #4B3DF0)
 * 4. ASSET: Bar chart + checkmark (Multi-color: Mint, Coral, Sun, Purple)
 * 5. Mental Maths: Brain + lightning bolt (Sun #FFC94A + Coral #FF6A45)
 * 6. Grade Elevation: Stair steps ascending (Mint #1F9C79)
 */
export const ProgramIcon: React.FC<ProgramIconProps> = ({
  type,
  className = "",
  size = 56
}) => {
  switch (type) {
    case "school-maths":
      return (
        <svg
          viewBox="0 0 80 80"
          width={size}
          height={size}
          fill="none"
          className={`flex-none ${className}`}
          aria-hidden="true"
        >
          {/* Background friendly circle */}
          <rect width="80" height="80" rx="20" fill="#EDEBFE" />
          {/* Book shape with rounded spine in Purple */}
          <path
            d="M22 24 C22 21.79 23.79 20 26 20 L37 20 C39.21 20 40 21 40 23 L40 57 C40 55 38.5 54 36 54 L26 54 C23.79 54 22 55.79 22 58 L22 24 Z"
            fill="#4B3DF0"
          />
          <path
            d="M58 24 C58 21.79 56.21 20 54 20 L43 20 C40.79 20 40 21 40 23 L40 57 C40 55 41.5 54 44 54 L54 54 C56.21 54 58 55.79 58 58 L58 24 Z"
            fill="#695DF6"
          />
          {/* Page lines */}
          <rect x="26" y="27" width="10" height="3" rx="1.5" fill="#FFFFFF" opacity="0.9" />
          <rect x="26" y="34" width="10" height="3" rx="1.5" fill="#FFFFFF" opacity="0.9" />
          <rect x="26" y="41" width="8" height="3" rx="1.5" fill="#FFFFFF" opacity="0.9" />
          
          <rect x="44" y="27" width="10" height="3" rx="1.5" fill="#FFFFFF" opacity="0.9" />
          <rect x="44" y="34" width="10" height="3" rx="1.5" fill="#FFFFFF" opacity="0.9" />
          <rect x="44" y="41" width="8" height="3" rx="1.5" fill="#FFFFFF" opacity="0.9" />

          {/* Golden Ribbon Bookmark in Sun Yellow */}
          <path d="M38 18 L42 18 L42 32 L40 30 L38 32 Z" fill="#FFC94A" />
        </svg>
      );

    case "olympiads":
      return (
        <svg
          viewBox="0 0 80 80"
          width={size}
          height={size}
          fill="none"
          className={`flex-none ${className}`}
          aria-hidden="true"
        >
          {/* Background friendly circle */}
          <rect width="80" height="80" rx="20" fill="#FFF0EC" />
          
          {/* Ribbon Neck V in Coral and Purple */}
          <path d="M26 18 L36 40 L44 40 L54 18 L46 18 L40 31 L34 18 Z" fill="#FF6A45" />
          <path d="M34 18 L40 31 L46 18 Z" fill="#4B3DF0" />

          {/* Medal Outer Ring in Sun Yellow & Core in Coral */}
          <circle cx="40" cy="48" r="18" fill="#FFC94A" />
          <circle cx="40" cy="48" r="14" fill="#FF6A45" />
          
          {/* Star in Sun Yellow */}
          <path
            d="M40 39 L42.3 44.5 L48 45 L43.8 48.8 L45.2 54.5 L40 51.5 L34.8 54.5 L36.2 48.8 L32 45 L37.7 44.5 Z"
            fill="#FFC94A"
          />
        </svg>
      );

    case "mat-reasoning":
      return (
        <svg
          viewBox="0 0 80 80"
          width={size}
          height={size}
          fill="none"
          className={`flex-none ${className}`}
          aria-hidden="true"
        >
          {/* Background friendly circle */}
          <rect width="80" height="80" rx="20" fill="#E8F7F2" />
          
          {/* 3x3 Logic Grid Pattern (Mint + Primary Purple) */}
          <rect x="22" y="22" width="10" height="10" rx="3" fill="#1F9C79" />
          <rect x="35" y="22" width="10" height="10" rx="3" fill="#4B3DF0" />
          <rect x="48" y="22" width="10" height="10" rx="3" fill="#1F9C79" />

          <rect x="22" y="35" width="10" height="10" rx="3" fill="#4B3DF0" />
          <rect x="35" y="35" width="10" height="10" rx="3" fill="#FFC94A" />
          <rect x="48" y="35" width="10" height="10" rx="3" fill="#4B3DF0" />

          <rect x="22" y="48" width="10" height="10" rx="3" fill="#1F9C79" />
          <rect x="35" y="48" width="10" height="10" rx="3" fill="#4B3DF0" />
          
          {/* Target / Missing puzzle piece with Question Mark in Coral */}
          <rect x="48" y="48" width="10" height="10" rx="3" fill="#FF6A45" />
          <text x="53" y="56" textAnchor="middle" fontSize="8" fill="#FFFFFF" fontWeight="bold">?</text>
        </svg>
      );

    case "asset-prep":
      return (
        <svg
          viewBox="0 0 80 80"
          width={size}
          height={size}
          fill="none"
          className={`flex-none ${className}`}
          aria-hidden="true"
        >
          {/* Background friendly circle */}
          <rect width="80" height="80" rx="20" fill="#EDEBFE" />

          {/* Bar Chart Bars (Ascending in brand colors) */}
          <rect x="22" y="46" width="7" height="14" rx="2.5" fill="#FFC94A" />
          <rect x="32" y="38" width="7" height="22" rx="2.5" fill="#FF6A45" />
          <rect x="42" y="28" width="7" height="32" rx="2.5" fill="#4B3DF0" />
          <rect x="52" y="20" width="7" height="40" rx="2.5" fill="#1F9C79" />

          {/* Verification Checkmark in Mint with white outline */}
          <circle cx="56" cy="22" r="9" fill="#1F9C79" stroke="#EDEBFE" strokeWidth="2" />
          <path
            d="M52 22 L55 25 L60 19"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "mental-maths":
      return (
        <svg
          viewBox="0 0 80 80"
          width={size}
          height={size}
          fill="none"
          className={`flex-none ${className}`}
          aria-hidden="true"
        >
          {/* Background friendly circle */}
          <rect width="80" height="80" rx="20" fill="#FFF8E7" />

          {/* Brain / Mental Hemisphere contour in Sun Yellow */}
          <path
            d="M26 38 C23 38 21 34 23 30 C24 27 27 26 29 27 C30 23 34 21 38 23 C40 21 44 21 46 23 C50 21 54 23 55 27 C57 26 60 27 61 30 C63 34 61 38 58 38 C60 41 59 46 56 48 C55 51 51 53 48 52 C46 55 42 56 39 55 C36 56 32 55 30 52 C27 53 23 51 22 48 C19 46 18 41 20 38 Z"
            fill="#FFC94A"
          />

          {/* Brain internal neural folds in Coral */}
          <path
            d="M32 30 C34 33 34 38 32 42 M46 30 C44 33 44 38 46 42"
            stroke="#FF6A45"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Center Lightning Bolt in Coral + White highlight */}
          <path
            d="M41 22 L33 37 L39 37 L37 54 L47 38 L41 38 Z"
            fill="#FF6A45"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "grade-elevation":
      return (
        <svg
          viewBox="0 0 80 80"
          width={size}
          height={size}
          fill="none"
          className={`flex-none ${className}`}
          aria-hidden="true"
        >
          {/* Background friendly circle */}
          <rect width="80" height="80" rx="20" fill="#E8F7F2" />

          {/* Ascending Stair Steps in Mint & Purple */}
          <path
            d="M20 58 L32 58 L32 46 L44 46 L44 34 L56 34 L56 22 L62 22 L62 58 Z"
            fill="#1F9C79"
          />
          <path
            d="M20 58 L32 58 L32 46 L44 46 L44 34 L56 34 L56 22"
            stroke="#16755A"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Upward Growth Arrow in Coral */}
          <path
            d="M25 48 L44 29 L54 39 L60 21"
            stroke="#FF6A45"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polygon points="60,21 54,23 58,27" fill="#FF6A45" />
        </svg>
      );

    default:
      return (
        <div className="w-14 h-14 rounded-2xl bg-[#EDEBFE] flex items-center justify-center text-[#4B3DF0] font-bold">
          MV
        </div>
      );
  }
};
