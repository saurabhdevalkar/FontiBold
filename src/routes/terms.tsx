import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service · FontiBold" },
      { name: "description", content: "The terms that govern your use of FontiBold." },
      { property: "og:title", content: "Terms of Service · FontiBold" },
      { property: "og:description", content: "Terms that govern your use of FontiBold." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-semibold tracking-tight">Terms of Service</h1>
      <div className="mt-6 space-y-4 leading-relaxed text-foreground/90">
        <p>By using FontiBold you agree to these terms. The service is provided "as is" without warranty of any kind.</p>
        <p>You are responsible for the content you generate. Don't use FontiBold to harass, impersonate, or violate any applicable law.</p>
        <p>We may update these terms occasionally. Continued use after changes constitutes acceptance.</p>
      </div>
    </article>
  ),
});