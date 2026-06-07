import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Wand2, Zap } from "lucide-react";
import { FontGenerator } from "@/components/site/FontGenerator";
import { AdSlot } from "@/components/site/AdSlot";
import { Faq, faqJsonLd, type FaqItem } from "@/components/site/Faq";

const faqs: FaqItem[] = [
  { q: "What is a fancy text generator?", a: "A fancy text generator converts your normal letters into Unicode characters that look like bold, italic, script, gothic, bubble, or other decorative fonts. The output is real text — not an image — so you can paste it anywhere." },
  { q: "How do I use fancy fonts on Instagram?", a: "Type your text in FontiBold, tap Copy on a style you like, and paste it into your Instagram bio, captions, or stories. Instagram preserves the styled Unicode characters." },
  { q: "Do these fancy fonts work on TikTok and Discord?", a: "Yes. Because the output is standard Unicode, it works on TikTok bios, Discord usernames and messages, X (Twitter), Facebook, WhatsApp, Telegram, and most modern apps." },
  { q: "Are these fonts safe to use?", a: "Completely safe. FontiBold runs in your browser, never stores your text, and only converts characters using public Unicode standards." },
  { q: "Why do some letters look the same?", a: "A few styles (like Script or Double-Struck) are missing certain letters in the Unicode spec, so we fall back to the nearest visually similar glyph for consistency." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FontiBold — Generate Stylish Fancy Fonts Instantly" },
      { name: "description", content: "Free Fancy Text Generator. Create stylish fonts, aesthetic text, Instagram fonts, Discord fonts, gaming nicknames, and decorative Unicode text instantly,bold text generator,bold font,bold font generator,bold text,bold,bold words,text bold,bold generator,make text bold,text generator bold,font generator, fonts, font, picsart, font style, fancy text generator, bold text generator, bold text, image enhancer, text generator, fonts copy and paste, photo enhancer,copy paste fonts, ai image enhancer, fonts style, photo editor, unblur image, collage maker, remove background, image quality enhancer, font generator copy, ai photo editor, discord fonts, cursive font generator, ai photo enhancer, bold font, image upscaler, fancy fonts, glitch text generator, stylish text generator, enhance photo, aesthetic font, cursive generator, small font, copy paste font, пиксарт, font name, enhance image quality, text font generator, upscale image, aesthetic fonts, aesthetic font generator, hd photo converter, background remover, stylish fonts,cursive generator, small font, copy paste font, пиксарт, font name, enhance image quality, text font generator, upscale image, aesthetic fonts, aesthetic font generator, hd photo converter, bg remove, stylish fonts, font style name, улучшить качество, улучшить качество, copy and paste, custom font, wingdings translator, piscart, picart, image enhancer ai, text bold, text, mejorar calidad de imagen, cursive font, pics art, copy paste, discord font, hd image converter,wingdings translator, piscart, picart, image enhancer ai, text bold, text, mejorar calidad de imagen, cursive font, pics art, copy paste, discord font, hd image converter, cursive text generator, text fonts, cool font, small font generator, cursed text generator, cool font generator, làm nét ảnh, pixart, superscript generator, text changer, tiny text generator, small text, stylish text, superscript, image enhancer free, picsart enhancer."
},
      { property: "og:title", content: "FontiBold — Generate Stylish Fancy Fonts Instantly" },
      { property: "og:description", content: "Convert plain text into 75+ stylish Unicode fonts. Works on Instagram, TikTok, Discord, X and more." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="hero-surface relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-12 text-center sm:px-6 sm:pt-28">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" /> 75+ Unicode font styles · No signup
          </div>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Generate <span className="text-gradient">Stylish Fancy Fonts</span> Instantly
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Convert normal text into bold, aesthetic, stylish, gaming, social media, and
            decorative fonts with one click. Built for creators who want to stand out.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#tool" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5">
              Start typing <ArrowRight className="size-4" />
            </a>
            <Link to="/aesthetic-text-generator" className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-5 py-2.5 text-sm font-medium hover:bg-secondary">
              Aesthetic styles
            </Link>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              { icon: Zap, title: "Instant", body: "Outputs update as you type. No waiting, no signups." },
              { icon: Wand2, title: "75+ styles", body: "Bold, italic, script, gothic, bubble, gaming, aesthetic and more." },
              { icon: Sparkles, title: "Works everywhere", body: "Pure Unicode — paste it on Instagram, TikTok, Discord, X." },
            ].map((c, i) => (
              <div key={i} className="card-surface rounded-2xl p-5 text-left">
                <c.icon className="size-5 text-primary" />
                <div className="mt-3 font-semibold">{c.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AdSlot label="Ad · 728×90" />
      </div>

      <FontGenerator />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AdSlot label="Ad · in-content" minHeight={120} />
      </div>

      <Faq items={faqs} />
    </>
  );
}
