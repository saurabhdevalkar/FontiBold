import { createFileRoute } from "@tanstack/react-router";
import { FontGenerator } from "@/components/site/FontGenerator";
import { Faq, faqJsonLd, type FaqItem } from "@/components/site/Faq";

const faqs: FaqItem[] = [
  { q: "How do I decorate my game nickname?", a: "Type your name, pick a gaming style (royal, dagger, mecha, lightning), and copy. Most games accept Unicode usernames, but a few (like Roblox) restrict character sets." },
  { q: "Will my decorated nickname work on Free Fire and PUBG?", a: "Yes — these games accept Unicode characters in usernames. Avoid combining marks if the game caps username length." },
];

export const Route = createFileRoute("/nickname-decorator")({
  head: () => ({
    meta: [
      { title: "Nickname Decorator — Gaming Name Generator · FontiBold" },
      { name: "description", content: "Decorate game nicknames with royal, dagger, mecha, and lightning Unicode styles. Stand out on Free Fire, PUBG, Discord, and more." },
      { property: "og:title", content: "Nickname Decorator — Gaming Names" },
      { property: "og:description", content: "Free gaming nickname decorator. Royal, dagger, lightning and more." },
      { property: "og:url", content: "/nickname-decorator" },
    ],
    links: [{ rel: "canonical", href: "/nickname-decorator" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: () => (
    <>
      <section className="hero-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="text-gradient">Nickname</span> Decorator
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Royal, dagger, lightning, mecha — decorate your gaming name in seconds.
          </p>
        </div>
      </section>
      <FontGenerator defaultText="Shadow" filterCategory="Gaming" />
      <Faq items={faqs} />
    </>
  ),
});