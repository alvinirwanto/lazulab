import { posts } from "@/content/posts";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { PostCard } from "@/components/blog/post-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function LatestPosts() {
  return (
    <section aria-labelledby="latest-posts-title" className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading id="latest-posts-title" title="Artikel terbaru">
            Panduan praktis seputar website, SEO, dan teknologi untuk bisnis Anda.
          </SectionHeading>
          <ButtonLink href="/blog" variant="soft">
            Lihat semua artikel
          </ButtonLink>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((post, i) => (
            <li key={post.slug} className="reveal">
              <PostCard post={post} seed={i} headingLevel="h3" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
