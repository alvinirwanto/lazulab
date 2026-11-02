import { faqs } from "@/content/site-content";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { LatestPosts } from "@/components/sections/latest-posts";
import { Pricing } from "@/components/sections/pricing";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Tools } from "@/components/sections/tools";
import { CtaBanner } from "@/components/sections/cta-banner";
import { WhyUs } from "@/components/sections/why-us";
import { Work } from "@/components/sections/work";
import { JsonLd } from "@/components/ui/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, homeTitle, siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: homeTitle,
  absoluteTitle: true,
  description: siteConfig.description,
  path: "/",
});

// Structured data uses only facts shown on the page. Add address, logo and
// sameAs links here once they are confirmed.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      // Upgrades to a local business listing once a real address is set in lib/site.ts.
      "@type": siteConfig.address ? "ProfessionalService" : "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.name,
      url: absoluteUrl(),
      description: siteConfig.description,
      ...(siteConfig.address
        ? {
            address: { "@type": "PostalAddress", addressCountry: "ID", ...siteConfig.address },
            telephone: siteConfig.phone,
            email: siteConfig.email,
            areaServed: { "@type": "Country", name: "Indonesia" },
          }
        : {}),
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: siteConfig.name,
      inLanguage: "id-ID",
      url: absoluteUrl(),
      publisher: { "@id": absoluteUrl("/#organization") },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Tools />
      <CtaBanner />
      <Process />
      <Work />
      <Pricing />
      <Faq />
      <LatestPosts />
      <Contact />
      <JsonLd data={structuredData} />
    </>
  );
}
