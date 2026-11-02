import { ImageResponse } from "next/og";
import { siteConfig } from "./site";

export const ogSize = { width: 1200, height: 630 };

type OgImageInput = {
  title: string;
  /** Small line above the title, e.g. "Blog" or a category. */
  eyebrow?: string;
};

/** Branded 1200×630 share image: white sheet with a lazuardi panel. */
export function renderOgImage({ title, eyebrow }: OgImageInput) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", padding: 40, background: "#ffffff" }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 64,
            borderRadius: 40,
            background: "#1c3faa",
            color: "#ffffff",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 32 }}>
            <div style={{ display: "flex", fontWeight: 600 }}>{siteConfig.name}</div>
            {eyebrow ? (
              <div style={{ display: "flex", padding: "8px 20px", borderRadius: 999, background: "rgba(255,255,255,0.15)", fontSize: 24 }}>
                {eyebrow}
              </div>
            ) : null}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 60 ? 60 : 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
