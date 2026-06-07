import { createFileRoute, Link } from "@tanstack/react-router";
import { BLOG_POSTS } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "FontiBold Blog — Stylish Text Guides & Ideas" },
      { name: "description", content: "Guides on Instagram fonts, Discord nicknames, stylish bios, gaming usernames, and how Unicode fonts work." },
      { property: "og:title", content: "FontiBold Blog" },
      { property: "og:description", content: "Guides on stylish text, Unicode fonts, and creator-friendly typography tricks." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: () => (
    <>
      <section className="hero-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="text-gradient">Blog</span>
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">Guides, ideas, and explainers from the FontiBold team.</p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <div className="grid gap-4">
          {BLOG_POSTS.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="card-surface block rounded-2xl p-6 transition-colors hover:border-primary/40"
            >
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{new Date(p.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}</div>
              <h2 className="mt-1 text-xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  ),
});