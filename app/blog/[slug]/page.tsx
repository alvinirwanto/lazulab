import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatDate, getPost, posts, readingTime } from "@/content/posts";
import { PostBody, slugify } from "@/components/blog/post-body";
import { PostCard } from "@/components/blog/post-card";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Cover } from "@/components/ui/cover";
import { JsonLd } from "@/components/ui/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    ...pageMetadata({
      title: post.title,
      description: post.excerpt,
      path: `/blog/${slug}`,
      image: `/blog/${slug}/opengraph-image`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
    }),
    keywords: post.tags,
    authors: [{ name: post.author }],
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const index = posts.indexOf(post);
  const headings = post.body.filter((block) => block.type === "h2");
  const related = posts.filter((other) => other.slug !== post.slug).slice(0, 3);
  const url = absoluteUrl(`/blog/${post.slug}`);

  return (
    <>
      <article aria-labelledby="post-title">
        <Container className="pt-4">
          <Breadcrumbs
            items={[
              { label: "Beranda", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title, href: `/blog/${post.slug}` },
            ]}
          />
          <header className="mx-auto mt-10 max-w-3xl text-center">
            <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-muted">
              <span className="rounded-full bg-lazuardi-soft px-2.5 py-0.5 font-medium text-ink">{post.category}</span>
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span>{readingTime(post)} menit baca</span>
            </p>
            <h1 id="post-title" className="enter mt-6 text-heading font-semibold text-balance sm:text-[3.5rem]">
              {post.title}
            </h1>
            <p className="enter mt-6 text-lede text-muted text-pretty">{post.excerpt}</p>
            <p className="mt-6 text-sm">
              Oleh <span className="font-medium">{post.author}</span>
            </p>
          </header>
          <Cover accent={post.accent} seed={index} priority className="mt-12 aspect-[16/9] rounded-panel sm:aspect-[21/9]" />
        </Container>

        <Container className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:gap-16">

          <div className="max-w-[44rem] lg:col-span-8">
            <PostBody blocks={post.body} />
            <ul className="mt-12 flex flex-wrap gap-2 border-t border-line pt-8" aria-label="Tag">
              {post.tags.map((tag) => (
                <li key={tag} className="rounded-full bg-mist px-3 py-1 text-sm">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-32">
              {headings.length > 1 ? (
                <nav aria-labelledby="toc-title" className="rounded-card bg-mist p-6">
                  <h2 id="toc-title" className="font-semibold">
                    Daftar isi
                  </h2>
                  <ol className="mt-4 space-y-2.5 text-sm">
                    {headings.map((heading) => (
                      <li key={heading.text}>
                        <a href={`#${slugify(heading.text)}`} className="text-muted hover:text-ink hover:underline">
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              ) : null}
              <div className="on-dark rounded-card bg-ink p-6 text-white">
                <p className="text-title font-semibold">Butuh website untuk bisnis Anda?</p>
                <p className="mt-2 text-white/70">Konsultasi gratis, penawaran tertulis, tanpa kewajiban.</p>
                <ButtonLink href="/#kontak" variant="light" className="mt-5 w-full">
                  Konsultasi gratis
                </ButtonLink>
              </div>
            </div>
          </aside>
        </Container>
      </article>

      {related.length > 0 ? (
        <section aria-labelledby="related-title" className="border-t border-line py-16 sm:py-24">
          <Container>
            <h2 id="related-title" className="text-heading font-semibold">
              Artikel lainnya
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
              {related.map((other) => (
                <li key={other.slug}>
                  <PostCard post={other} seed={posts.indexOf(other)} headingLevel="h3" />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          url,
          mainEntityOfPage: url,
          inLanguage: "id-ID",
          datePublished: post.publishedAt,
          dateModified: post.updatedAt ?? post.publishedAt,
          keywords: post.tags.join(", "),
          author: { "@type": "Organization", name: post.author },
          publisher: { "@type": "Organization", name: siteConfig.name, url: absoluteUrl() },
          image: absoluteUrl(`/blog/${post.slug}/opengraph-image`),
        }}
      />
    </>
  );
}
