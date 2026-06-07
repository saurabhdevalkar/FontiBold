import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { TEXT_ART_PRESETS } from "@/lib/fonts";
import { Faq, faqJsonLd, type FaqItem } from "@/components/site/Faq";

const faqs: FaqItem[] = [
  { q: "What is text art (kaomoji)?", a: "Text art uses Unicode and punctuation to create faces and pictures — like ¯\\_(ツ)_/¯ — that work everywhere without images." },
  { q: "Where can I paste text art?", a: "Anywhere that accepts text: Discord, Slack, X, Reddit, comments, chat apps, code review tools." },
];

export const Route = createFileRoute("/text-art-generator")({
  head: () => ({
    meta: [
      { title: "Text Art Generator — Kaomoji & Emoticons · FontiBold" },
      { name: "description", content: "Copy classic text art and kaomoji: shrug, table flip, Lenny face, bear, cat and more. One-click copy for chat and social." },
      { property: "og:title", content: "Text Art Generator — Kaomoji" },
      { property: "og:description", content: "Shrug, table flip, Lenny, bear — copy with one click." },
      { property: "og:url", content: "/text-art-generator" },
    ],
    links: [{ rel: "canonical", href: "/text-art-generator" }],
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
            <span className="text-gradient">Text Art</span> Generator
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Classic kaomoji and emoticons — copy with one click.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-4xl grid-cols-1 gap-3 px-4 py-10 sm:grid-cols-2 sm:px-6">
        {TEXT_ART_PRESETS.map((p) => <ArtCard key={p.name} {...p} />)}
      </section>
      <Faq items={faqs} />
    </>
  );
}

function ArtCard({ name, art }: { name: string; art: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="card-surface flex items-center justify-between gap-4 rounded-2xl p-4">
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{name}</div>
        <div className="mt-1 truncate text-lg">{art}</div>
      </div>
      <button
        onClick={async () => { await navigator.clipboard.writeText(art); setCopied(true); setTimeout(() => setCopied(false), 1400); }}
        className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-secondary px-3 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
      >
        {copied ? <><Check className="size-4"/> Copied</> : <><Copy className="size-4"/> Copy</>}
      </button>
    </div>
  );
}