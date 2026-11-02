import type { ComponentProps } from "react";

/** Shared page width and side gutters. */
export function Container({ className = "", ...props }: ComponentProps<"div">) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`} {...props} />;
}
