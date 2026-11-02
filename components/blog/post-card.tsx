import Link from "next/link";
import type { Post } from "@/content/types";
import { formatDate, readingTime } from "@/content/posts";
import { Cover } from "@/components/ui/cover";

type PostCardProps = {
  post: Post;
  seed?: number;
  headingLevel?: "h2" | "h3";
  featured?: boolean;
};

export function PostCard({ post, seed = 0, headingLevel: Heading = "h2", featured }: PostCardProps) {
  return (
    <article className={`group relative flex h-full gap-6 ${featured ? "flex-col lg:flex-row lg:items-center" : "flex-col"}`}>
      <Cover
        accent={post.accent}
        seed={seed}
        sizes={featured ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
        className={`aspect-[16/10] shrink-0 rounded-card transition-transform duration-500 ease-out-quint group-hover:-translate-y-1 ${
          featured ? "lg:w-[55%]" : ""
        }`}
      />
      <div className="flex flex-1 flex-col">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
          <span className="rounded-full bg-lazuardi-soft px-2.5 py-0.5 font-medium text-ink">{post.category}</span>
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span>{readingTime(post)} menit baca</span>
        </p>
        <Heading className={`mt-4 font-semibold text-balance ${featured ? "text-heading" : "text-title"}`}>
          {/* Stretched link makes the whole card clickable with one tab stop. */}
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 hover:underline">
            {post.title}
          </Link>
        </Heading>
        <p className="mt-3 text-muted">{post.excerpt}</p>
      </div>
    </article>
  );
}
