import { privacyPolicy, privacyUpdatedAt } from "@/content/privacy";
import { formatDate } from "@/content/posts";
import { PostBody } from "@/components/blog/post-body";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Kebijakan privasi",
  description: `Bagaimana ${siteConfig.name} mengumpulkan, menggunakan, dan melindungi data pribadi Anda.`,
  path: "/kebijakan-privasi",
});

export default function PrivacyPage() {
  return (
    <article aria-labelledby="privacy-title" className="pb-20 sm:pb-28">
      <Container className="pt-4">
        <Breadcrumbs
          items={[
            { label: "Beranda", href: "/" },
            { label: "Kebijakan privasi", href: "/kebijakan-privasi" },
          ]}
        />
        <div className="mx-auto mt-10 max-w-[44rem]">
          <h1 id="privacy-title" className="text-heading font-semibold">
            Kebijakan privasi
          </h1>
          <p className="mt-4 text-sm text-muted">
            Terakhir diperbarui <time dateTime={privacyUpdatedAt}>{formatDate(privacyUpdatedAt)}</time>
          </p>
          <div className="mt-10">
            <PostBody blocks={privacyPolicy} />
          </div>
          <aside className="mt-12 rounded-card bg-mist p-6">
            <h2 className="font-semibold">Hubungi kami</h2>
            <p className="mt-2 text-muted">
              Pertanyaan atau permintaan terkait data pribadi dapat dikirim ke{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-medium text-ink underline underline-offset-4">
                {siteConfig.email}
              </a>
              .
            </p>
          </aside>
        </div>
      </Container>
    </article>
  );
}
