import { createFileRoute } from "@tanstack/react-router";
import { FontGenerator } from "@/components/site/FontGenerator";
import { Faq, faqJsonLd, type FaqItem } from "@/components/site/Faq";

const faqs: FaqItem[] = [
  { q: "Can I use a stylish signature in email?", a: "Yes. Copy a script or bold-script style and paste it into Gmail or Outlook signature settings. Some corporate email clients strip styles — test before relying on it." },
  { q: "Will my signature look the same on every device?", a: "Modern OSes ship Unicode fonts that cover styled letters. On very old Android/Windows versions a few characters may show as boxes." },
];

export const Route = createFileRoute("/stylish-signature-generator")({
  head: () => ({
    meta: [
      { title: "Stylish Signature Generator — Script Fonts · FontiBold" },
      { name: "description", content: "Generate a stylish signature using script and cursive Unicode fonts. Copy and paste into email, documents, or social profiles." },
      { property: "og:title", content: "Stylish Signature Generator" },
      { property: "og:description", content: "Script and cursive signatures in Unicode — one-click copy." },
      { property: "og:url", content: "/stylish-signature-generator" },
    ],
    links: [{ rel: "canonical", href: "/stylish-signature-generator" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: () => (
    <>
      <section className="hero-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="text-gradient">Stylish Signature</span> Generator
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Script and cursive Unicode for elegant signatures.</p>
        </div>
      </section>
      <FontGenerator defaultText="Your Name" filterStyles={["script","bold-script","italic-serif","bold-italic-serif","italic-sans","bold-italic-sans","fraktur","bold-fraktur"]} />
      <Faq items={faqs} />
    </>
  ),
});