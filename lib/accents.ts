import type { Accent } from "@/content/types";

/** Background and foreground pairs for project and article covers. */
export const accentClasses: Record<Accent, { bg: string; fg: string; panel: string }> = {
  ink: { bg: "bg-ink", fg: "text-lazuardi-bright", panel: "bg-white" },
  lazuardi: { bg: "bg-lazuardi", fg: "text-white", panel: "bg-white" },
  coral: { bg: "bg-coral", fg: "text-white", panel: "bg-white" },
  graphite: { bg: "bg-graphite", fg: "text-white", panel: "bg-lazuardi-soft" },
};
