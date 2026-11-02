import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "dark" | "light" | "soft" | "lazuardi" | "outline-light";
type Size = "md" | "sm";

const variants: Record<Variant, string> = {
  dark: "bg-ink text-white hover:bg-graphite",
  light: "bg-white text-ink hover:bg-lazuardi-soft",
  soft: "bg-mist text-ink hover:bg-line",
  lazuardi: "bg-lazuardi text-white hover:bg-lazuardi-deep",
  "outline-light": "text-white ring-1 ring-white/25 hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "min-h-13 px-7 text-base",
  sm: "min-h-10 px-4 text-sm",
};

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: Variant; size?: Size };

export function ButtonLink({ variant = "dark", size = "md", className = "", ...props }: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 rounded-control font-medium transition-[background-color,transform] duration-200 active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
