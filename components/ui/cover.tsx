import Image from "next/image";
import type { Accent } from "@/content/types";
import { accentClasses } from "@/lib/accents";

type CoverProps = {
  accent: Accent;
  /** Varies the generated layout so neighbouring covers differ. */
  seed?: number;
  image?: { src: string; alt: string };
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Cover art for projects and articles. Shows a real image when provided,
 * otherwise a generated browser-window composition in the accent colour.
 */
export function Cover({ accent, seed = 0, image, sizes = "100vw", priority, className = "" }: CoverProps) {
  const { bg, panel } = accentClasses[accent];
  const layout = layouts[seed % layouts.length];

  return (
    <div className={`relative overflow-hidden ${bg} ${className}`}>
      {image ? (
        <Image src={image.src} alt={image.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div aria-hidden="true" className="absolute inset-0 p-[8%] pb-0">
          <div className={`h-full rounded-t-[1.25rem] ${panel} p-[4%] shadow-float`}>
            <div className="mb-[4%] flex gap-1.5">
              <span className="size-2 rounded-full bg-line" />
              <span className="size-2 rounded-full bg-line" />
              <span className="size-2 rounded-full bg-line" />
            </div>
            <div className="grid h-[80%] grid-cols-6 grid-rows-5 gap-[3%]">
              {layout.map((cell, i) => (
                <div key={i} className={`rounded-lg ${cell.tone}`} style={{ gridArea: cell.area }} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const layouts = [
  [
    { area: "1 / 1 / 2 / 4", tone: "bg-ink" },
    { area: "2 / 1 / 4 / 5", tone: "bg-lazuardi-soft" },
    { area: "1 / 5 / 4 / 7", tone: "bg-lazuardi" },
    { area: "4 / 1 / 6 / 3", tone: "bg-mist" },
    { area: "4 / 3 / 6 / 5", tone: "bg-mist" },
    { area: "4 / 5 / 6 / 7", tone: "bg-mist" },
  ],
  [
    { area: "1 / 1 / 4 / 7", tone: "bg-lazuardi-soft" },
    { area: "1 / 1 / 2 / 3", tone: "bg-ink" },
    { area: "4 / 1 / 6 / 4", tone: "bg-coral/80" },
    { area: "4 / 4 / 6 / 7", tone: "bg-mist" },
  ],
  [
    { area: "1 / 1 / 6 / 3", tone: "bg-mist" },
    { area: "1 / 3 / 3 / 7", tone: "bg-ink" },
    { area: "3 / 3 / 6 / 5", tone: "bg-lazuardi" },
    { area: "3 / 5 / 6 / 7", tone: "bg-lazuardi-soft" },
  ],
  [
    { area: "1 / 2 / 2 / 6", tone: "bg-ink" },
    { area: "2 / 1 / 4 / 7", tone: "bg-lazuardi" },
    { area: "4 / 1 / 6 / 3", tone: "bg-mist" },
    { area: "4 / 3 / 6 / 5", tone: "bg-mist" },
    { area: "4 / 5 / 6 / 7", tone: "bg-mist" },
  ],
];
