import Link from "next/link";
import { Fragment } from "react";

const token = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

/** Renders inline **bold** and [label](/path) markup inside article text. */
export function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(token).map((part, i) => {
        if (part.startsWith("**")) return <strong key={i} className="font-semibold text-ink">{part.slice(2, -2)}</strong>;
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          return (
            <Link key={i} href={link[2]} className="font-medium text-lazuardi-deep underline underline-offset-4 hover:text-ink">
              {link[1]}
            </Link>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
