import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SYMBOL_SETS } from "@/lib/fonts";
import { Faq, faqJsonLd, type FaqItem } from "@/components/site/Faq";

const faqs: FaqItem[] = [
  { q: "How do I use symbols in my bio?", a: "Click any symbol to copy it. Then paste anywhere — Instagram, Discord, TikTok, X. Symbols are real Unicode characters, so they render on every modern device." },
  { q: "Are these symbols allowed in usernames?", a: "Most apps allow them. A few (Roblox, school portals) restrict to plain ASCII; check before relying on them." },
];

export const Route = createFileRoute("/symbol-library")({
  head: () => ({
    meta: [
      { title: "Symbol Library — Hearts, Stars, Arrows · FontiBold" },
      { name: "description", content: "Free Unicode symbol library. Click any heart, star, arrow, music note, flower, or bracket to copy. Works on every platform." },
      { property: "og:title", content: "Symbol Library — Copy & Paste" },
      { property: "og:description", content: "Hearts, stars, arrows, music notes, flowers, brackets — one click to copy." },
      { property: "og:url", content: "/symbol-library" },
    ],
    links: [{ rel: "canonical", href: "/symbol-library" }],
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
            <span className="text-gradient">Symbol</span> Library
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Click any symbol to copy. Hearts, stars, arrows, music, flowers and more.</p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 space-y-8">
        {SYMBOL_SETS.map((set) => (
          <div key={set.name}>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{set.name}</h2>
            <div className="flex flex-wrap gap-2">
              {set.symbols.map((s, i) => <SymbolBtn key={i} sym={s} />)}
            </div>
          </div>
        ))}
      </section>
      <Faq items={faqs} />
    </>
  );
}

function SymbolBtn({ sym }: { sym: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => { await navigator.clipboard.writeText(sym); setCopied(true); setTimeout(() => setCopied(false), 1000); }}
      className={`card-surface flex size-12 items-center justify-center rounded-xl text-xl transition-transform hover:-translate-y-0.5 ${copied ? "ring-2 ring-primary" : ""}`}
      aria-label={`Copy ${sym}`}
    >
      {sym}
    </button>
  );
}