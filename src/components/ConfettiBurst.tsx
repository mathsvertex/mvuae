import React, { useEffect } from "react";
import confetti from "canvas-confetti";

export interface ConfettiBurstProps {
  /**
   * When true, fires the celebratory confetti cannon
   */
  active: boolean;
  /**
   * Optional callback when burst animation initiates or ends
   */
  onComplete?: () => void;
  /**
   * Custom particle count (default: 80)
   */
  particleCount?: number;
  /**
   * Normalized screen coordinates (0 to 1) for the origin of the explosion.
   * Default: { x: 0.5, y: 0.45 }
   */
  origin?: { x: number; y: number };
  /**
   * Custom duration / spread configuration
   */
  spread?: number;
  /**
   * Disable/enable multi-cannon sequence for bigger celebrations
   */
  multiBurst?: boolean;
}

/**
 * MathsVertex Playful Brand Palette:
 * - Purple (#4B3DF0): Intellectual rigor & primary brand anchor
 * - Coral (#FF6A45): Energy, excitement & urgency
 * - Mint (#1F9C79): Growth & achievement
 * - Sun Yellow (#FFC94A): Optimism, warmth & positivity
 */
export const MATHSVERTEX_CONFETTI_COLORS = [
  "#4B3DF0", // Purple
  "#FF6A45", // Coral
  "#1F9C79", // Mint
  "#FFC94A", // Sun Yellow
  "#695DF6", // Bright Indigo
  "#FFA07A"  // Soft Coral
];

/**
 * Reusable utility function to fire MathsVertex brand confetti anywhere programmatically.
 */
export const triggerMathsVertexConfetti = (options?: {
  origin?: { x: number; y: number };
  particleCount?: number;
  spread?: number;
  multiBurst?: boolean;
}) => {
  const origin = options?.origin || { x: 0.5, y: 0.45 };
  const particleCount = options?.particleCount || 85;
  const spread = options?.spread || 80;

  // Primary explosive center burst
  confetti({
    particleCount,
    spread,
    origin,
    colors: MATHSVERTEX_CONFETTI_COLORS,
    startVelocity: 38,
    ticks: 250,
    gravity: 0.9,
    scalar: 1.1,
    shapes: ["circle", "square"],
    disableForReducedMotion: true,
    zIndex: 9999
  });

  // If multi-burst requested, add two staggered complementary wing cannons
  if (options?.multiBurst !== false) {
    setTimeout(() => {
      confetti({
        particleCount: Math.round(particleCount * 0.4),
        angle: 60,
        spread: 55,
        origin: { x: Math.max(0.1, origin.x - 0.25), y: origin.y + 0.1 },
        colors: MATHSVERTEX_CONFETTI_COLORS,
        startVelocity: 32,
        ticks: 220,
        zIndex: 9999
      });
    }, 120);

    setTimeout(() => {
      confetti({
        particleCount: Math.round(particleCount * 0.4),
        angle: 120,
        spread: 55,
        origin: { x: Math.min(0.9, origin.x + 0.25), y: origin.y + 0.1 },
        colors: MATHSVERTEX_CONFETTI_COLORS,
        startVelocity: 32,
        ticks: 220,
        zIndex: 9999
      });
    }, 240);
  }
};

/**
 * Reusable ConfettiBurst component powered by canvas-confetti.
 */
export const ConfettiBurst: React.FC<ConfettiBurstProps> = ({
  active,
  onComplete,
  particleCount = 85,
  origin = { x: 0.5, y: 0.45 },
  spread = 80,
  multiBurst = true
}) => {
  useEffect(() => {
    if (!active) return;

    triggerMathsVertexConfetti({
      origin,
      particleCount,
      spread,
      multiBurst
    });

    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [active, onComplete, particleCount, origin?.x, origin?.y, spread, multiBurst]);

  // canvas-confetti renders to its own internal full-screen canvas
  return null;
};
