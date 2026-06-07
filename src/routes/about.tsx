import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About FontiBold — Stylish Text For Everyone" },
      { name: "description", content: "FontiBold is a fast, free Unicode font tool for creators, gamers, and writers who want their words to stand out." },
      { property: "og:title", content: "About FontiBold" },
      { property: "og:description", content: "Fast, free Unicode font tool — built for creators." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-semibold tracking-tight">About <span className="text-gradient">FontiBold</span></h1>
      <div className="mt-6 space-y-5 leading-relaxed text-foreground/90">
        <p>FontiBold is a fast, free tool that converts plain text into 75+ stylish Unicode fonts. We built it because every other "font generator" felt slow, cluttered, and stuck in 2012.</p>
        <p>Our goal is simple: type once, copy anywhere. No accounts, no popups, no upsells. Just clean typography that works on Instagram, TikTok, Discord, X and every modern app.</p>
        <p>Everything runs in your browser. We don't store your text and we don't track what you type.</p>
      </div>
    </article>
  ),
});