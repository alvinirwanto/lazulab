type WordmarkProps = { tone?: "dark" | "light"; className?: string };

/** Company name with a lazuardi dot behind the last syllable. */
export function Wordmark({ tone = "dark", className = "" }: WordmarkProps) {
  return (
    <span className={`inline-flex items-center text-xl font-medium tracking-tight ${tone === "light" ? "text-white" : "text-ink"} ${className}`}>
      Lazu
      <span className="relative text-white">
        <span aria-hidden="true" className="absolute top-1/2 left-[60%] size-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lazuardi" />
        <span className="relative">lab</span>
      </span>
    </span>
  );
}
