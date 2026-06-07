import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact FontiBold" },
      { name: "description", content: "Get in touch with the FontiBold team for feedback, partnerships, or feature requests." },
      { property: "og:title", content: "Contact FontiBold" },
      { property: "og:description", content: "Feedback, partnerships, feature requests." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <article className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 text-muted-foreground">We'd love to hear from you.</p>
      <div className="mt-8 card-surface rounded-2xl p-6">
        <div className="text-sm text-muted-foreground">Email</div>
        <a href="mailto:hello@textibold.com" className="text-lg font-medium hover:text-primary">hello@textibold.com</a>
      </div>
      <p className="mt-6 text-sm text-muted-foreground">For partnership inquiries, mention "Partnership" in the subject line. We reply within 2 business days.</p>
    </article>
  ),
});