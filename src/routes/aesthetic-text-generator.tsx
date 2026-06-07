import { createFileRoute } from "@tanstack/react-router";
import { FontGenerator } from "@/components/site/FontGenerator";
import { Faq, faqJsonLd, type FaqItem } from "@/components/site/Faq";

const faqs: FaqItem[] = [
  { q: "What is aesthetic text?", a: "Aesthetic text uses full-width characters, sparkles, soft symbols, and decorative wraps to create a vaporwave or soft-girl visual style — perfect for bios and captions." },
  { q: "Where does aesthetic text look best?", a: "Instagram bios, Pinterest pins, Tumblr posts, BeReal captions, and Discord status messages." },
];

export const Route = createFileRoute("/aesthetic-text-generator")({
  head: () => ({
    meta: [
      { title: "Aesthetic Text Generator — Vaporwave & Soft Fonts · FontiBold" },
      { name: "description", content: "Generate aesthetic text — full-width vaporwave, sparkles, soft wraps and decorative styles. Copy and paste into any bio or post." },
      { property: "og:title", content: "Aesthetic Text Generator" },
      { property: "og:description", content: "Full-width vaporwave, sparkles, and soft decorative text. Free, instant, no signup." },
      { property: "og:url", content: "/aesthetic-text-generator" },
    ],
    links: [{ rel: "canonical", href: "/aesthetic-text-generator" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: () => (
    <>
      <section className="hero-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="text-gradient">Aesthetic</span> Text Generator
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Vaporwave full-width, sparkles, and soft decorative wraps — instantly.
          </p>
        </div>
      </section>
      <FontGenerator defaultText="aesthetic vibes" filterCategory="Aesthetic" />
      <Faq items={faqs} />
    </>
  ),
});