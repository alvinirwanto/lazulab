import Link from "next/link";
import { absoluteUrl } from "@/lib/site";
import { JsonLd } from "./json-ld";

type Crumb = { label: string; href: string };

/** Visible breadcrumb trail plus matching BreadcrumbList structured data. */
export function Breadcrumbs({ items, tone = "dark" }: { items: Crumb[]; tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <>
      <nav aria-label="Breadcrumb" className={`text-sm ${light ? "text-white/75" : "text-muted"}`}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className={light ? "text-white" : "text-ink"}>
                    {item.label}
                  </span>
                ) : (
                  <>
                    <Link href={item.href} className={`hover:underline ${light ? "hover:text-white" : "hover:text-ink"}`}>
                      {item.label}
                    </Link>
                    <span aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            item: absoluteUrl(item.href),
          })),
        }}
      />
    </>
  );
}
