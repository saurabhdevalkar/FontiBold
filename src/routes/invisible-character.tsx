import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { INVISIBLE_CHARS } from "@/lib/fonts";
import { Faq, faqJsonLd, type FaqItem } from "@/components/site/Faq";

const faqs: FaqItem[] = [
  { q: "What is an invisible character?", a: "An invisible character is a Unicode code point that renders with no visible glyph. It's commonly used for empty bios, empty WhatsApp messages, or invisible names." },
  { q: "Which invisible character works on WhatsApp?", a: "The Hangul Filler (U+3164) is the most reliable invisible character for WhatsApp, Instagram captions, and Free Fire names." },
];

export const Route = createFileRoute("/invisible-character")({
  head: () => ({
    meta: [
      { title: "Invisible Character & Empty Text — Copy & Paste · FontiBold" },
      { name: "description", content: "Copy invisible Unicode characters for empty bios, blank messages, and invisible names. Hangul filler, zero-width space, braille blank and more." },
      { property: "og:title", content: "Invisible Character — Copy & Paste" },
      { property: "og:description", content: "Hangul filler, zero-width space and more — copy with one click." },
      { property: "og:url", content: "/invisible-character" },
    ],
    links: [{ rel: "canonical", href: "/invisible-character" }],
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
            <span className="text-gradient">Invisible</span> Character Tool
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Copy Unicode characters that render as nothing — useful for empty bios and blank messages.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div className="grid gap-3">
          {INVISIBLE_CHARS.map((c) => <Row key={c.name} {...c} />)}
        </div>
      </section>
      <Faq items={faqs} />
    </>
  );
}

function Row({ name, char, desc }: { name: string; char: string; desc: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    await navigator.clipboard.writeText(char);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }
  return (
    <div className="card-surface flex items-center justify-between rounded-2xl p-4">
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-muted-foreground">{desc}</div>
      </div>
      <button onClick={copy} className="inline-flex items-center gap-2 rounded-lg bg-secondary px-3 py-2 text-sm hover:bg-primary hover:text-primary-foreground">
        {copied ? <><Check className="size-4"/> Copied</> : <><Copy className="size-4"/> Copy</>}
      </button>
    </div>
  );
}