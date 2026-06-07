import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer · FontiBold" },
      { name: "description", content: "Important information about font rendering and platform compatibility on FontiBold." },
      { property: "og:title", content: "Disclaimer · FontiBold" },
      { property: "og:description", content: "Font rendering and platform compatibility notes." },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: () => (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-semibold tracking-tight">Disclaimer</h1>
      <div className="mt-6 space-y-4 leading-relaxed text-foreground/90">
        <p>FontiBold uses Unicode characters to simulate font styles. Rendering depends on the operating system, app, and font installed on the viewer's device — we can't guarantee a particular look on every platform.</p>
        <p>Some apps (notably certain games and corporate tools) restrict or strip Unicode characters in usernames and bios. Check platform rules before using styled text in critical fields.</p>
        <p>Styled text may not be accessible to screen readers. Avoid using fancy fonts for essential information.</p>
      </div>
    </article>
  ),
});