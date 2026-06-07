import { createFileRoute } from "@tanstack/react-router";
import { FontGenerator } from "@/components/site/FontGenerator";
import { AdSlot } from "@/components/site/AdSlot";
import { Faq, faqJsonLd, type FaqItem } from "@/components/site/Faq";

const faqs: FaqItem[] = [
  { q: "What can I use the fancy text generator for?", a: "Social media bios (Instagram, TikTok, X, Facebook), Discord usernames, gaming tags, YouTube titles, WhatsApp status, or any place that accepts text input." },
  { q: "Do fancy fonts hurt SEO on my profile?", a: "Search engines read styled Unicode the same as normal letters in most contexts, but screen readers may struggle. Use fancy fonts for accents, not for critical information." },
  { q: "How many fancy text styles does FontiBold support?", a: "Over 75 styles across classic, aesthetic, decorative, gaming, and social categories — and we keep adding more." },
  { q: "Can I save my favorite styles?", a: "Yes. Click the heart on any style to pin it to the top. Favorites are stored locally in your browser." },
];

export const Route = createFileRoute("/fancy-text-generator")({
  head: () => ({
    meta: [
      { title: "Fancy Text Generator — 75+ Styles · FontiBold" },
      { name: "description", content: "Free fancy text generator with 75+ Unicode styles: bold, italic, script, gothic, bubble, squared, full-width, gaming and more. Copy with one click." },
      { property: "og:title", content: "Fancy Text Generator — 75+ Styles" },
      { property: "og:description", content: "Type once, copy any of 75+ styled outputs. Works on Instagram, TikTok, Discord and more." },
      { property: "og:url", content: "/fancy-text-generator" },
    ],
    links: [{ rel: "canonical", href: "/fancy-text-generator" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="hero-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Fancy <span className="text-gradient">Text Generator</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Convert plain text into 75+ Unicode font styles. Type your text, pick a style, copy.
          </p>
        </div>
      </section>
      <FontGenerator />
      <div className="mx-auto max-w-6xl px-4 sm:px-6"><AdSlot label="Ad · in-content" minHeight={120} /></div>
      <Faq items={faqs} />
    </>
  );
}