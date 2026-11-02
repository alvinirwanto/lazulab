import type { PostBlock } from "@/content/types";
import { RichText } from "@/components/ui/rich-text";

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/** Renders article blocks with the site's type scale. */
export function PostBody({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="text-lg leading-8 text-[#3f4046]">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} id={slugify(block.text)} className="mt-14 mb-5 scroll-mt-28 text-[1.75rem] leading-tight font-semibold text-ink first:mt-0">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-10 mb-4 text-title font-semibold text-ink">
                {block.text}
              </h3>
            );
          case "ul":
          case "ol": {
            const List = block.type;
            return (
              <List key={i} className={`my-6 space-y-3 pl-6 ${block.type === "ul" ? "list-disc marker:text-lazuardi" : "list-decimal marker:font-semibold marker:text-ink"}`}>
                {block.items.map((item) => (
                  <li key={item} className="pl-1">
                    <RichText text={item} />
                  </li>
                ))}
              </List>
            );
          }
          case "callout":
            return (
              <aside key={i} className="my-8 rounded-card bg-lazuardi-soft p-6 text-ink">
                <RichText text={block.text} />
              </aside>
            );
          default:
            return (
              <p key={i} className="my-5">
                <RichText text={block.text} />
              </p>
            );
        }
      })}
    </div>
  );
}
