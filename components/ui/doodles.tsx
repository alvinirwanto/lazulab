import type { CSSProperties, SVGProps } from "react";

/** Four-point star used as a typographic ornament. */
export function Sparkle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" fill="currentColor" />
    </svg>
  );
}

type DoodleProps = { className?: string; delay?: number };

function strokeStyle(delay?: number) {
  return delay === undefined ? undefined : ({ "--delay": `${delay}ms` } as CSSProperties);
}

/** Hand-drawn flourish with a loop, ending in an arrow that points left at the CTA. */
export function LoopArrow({ className, delay }: DoodleProps) {
  return (
    <svg viewBox="0 0 240 110" fill="none" aria-hidden="true" className={className}>
      <path
        className="draw"
        style={strokeStyle(delay)}
        pathLength={1}
        d="M232 6c6 40-6 72-34 80-26 8-40-12-26-24 16-14 38 6 30 24-10 22-60 24-188 0"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        className="draw"
        style={strokeStyle((delay ?? 400) + 1000)}
        pathLength={1}
        d="M28 72 12 85l19 9"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Long wandering line that threads behind floating cards. */
export function Squiggle({ className, delay }: DoodleProps) {
  return (
    <svg viewBox="0 0 300 460" fill="none" aria-hidden="true" className={className}>
      <path
        className="draw"
        style={strokeStyle(delay)}
        pathLength={1}
        d="M120 8c60-8 140 10 120 40-24 36-150 30-170 90-18 54 120 30 130 80 10 46-70 60-60 20 8-30 70 20 70 70 0 70-160 40-180 140"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Small rising line chart scribble. */
export function TrendScribble({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 70" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4 50c8-10 12 12 20 8s6-26 14-24 4 30 14 28 8-34 18-36 6 24 16 20 10-30 26-40m0 0-12 1m12-1-2 12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
