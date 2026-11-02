import { posts } from "@/content/posts";
import { PostCard } from "@/components/blog/post-card";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/ui/json-ld";
import { PageIntro } from "@/components/ui/page-intro";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, siteConfig } from "@/lib/site";

const description =
  "Panduan praktis seputar pembuatan website, SEO, dan teknologi web untuk pemilik bisnis dan UMKM di Indonesia.";

export const metadata = pageMetadata({ title: "Blog: panduan website dan SEO", description, path: "/blog" });

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageIntro
        title="Blog"
        description={description}
        breadcrumbs={
          <Breadcrumbs
            tone="light"
            items={[
              { label: "Beranda", href: "/" },
              { label: "Blog", href: "/blog" },
            ]}
          />
        }
      />
      <section aria-label="Daftar artikel" className="pb-20 sm:pb-28">
        <Container>
          {featured ? <PostCard post={featured} featured /> : null}
          {rest.length > 0 ? (
            <ul className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 border-t border-line pt-16 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, i) => (
                <li key={post.slug} className="reveal">
                  <PostCard post={post} seed={i + 1} />
                </li>
              ))}
            </ul>
          ) : null}
        </Container>
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `Blog ${siteConfig.name}`,
          description,
          url: absoluteUrl("/blog"),
          inLanguage: "id-ID",
          blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            url: absoluteUrl(`/blog/${post.slug}`),
            datePublished: post.publishedAt,
          })),
        }}
      />
    </>
  );
}
