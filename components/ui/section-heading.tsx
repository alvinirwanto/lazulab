import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({ id, title, children, align = "left", tone = "dark", className = "" }: SectionHeadingProps) {
  return (
    <div className={`reveal ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"} ${className}`}>
      <h2 id={id} className="text-heading font-semibold text-balance">
        {title}
      </h2>
      {children ? (
        <p className={`mt-5 text-lede text-pretty ${tone === "light" ? "text-white/70" : "text-muted"}`}>{children}</p>
      ) : null}
    </div>
  );
}
