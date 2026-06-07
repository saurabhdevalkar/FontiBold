import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy · FontiBold" },
      { name: "description", content: "How FontiBold handles your data: nothing is stored on our servers; everything runs in your browser." },
      { property: "og:title", content: "Privacy Policy · FontiBold" },
      { property: "og:description", content: "How FontiBold handles your data." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 prose-invert">
      <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
      <div className="mt-6 space-y-4 leading-relaxed text-foreground/90">
        <p><strong>What we collect.</strong> FontiBold runs entirely in your browser. We do not collect, store, or transmit the text you type into the generator.</p>
        <p><strong>Local storage.</strong> Your favorite styles and recent inputs are stored locally in your browser (localStorage) and never leave your device.</p>
        <p><strong>Analytics.</strong> We use privacy-respecting analytics to count page views. No personal data is collected.</p>
        <p><strong>Advertising.</strong> Pages may display advertisements (such as Google AdSense) that use cookies to serve relevant ads. You can opt out via your browser settings or ad provider preferences.</p>
        <p><strong>Contact.</strong> Questions about privacy? Email hello@textibold.com.</p>
      </div>
    </article>
  ),
});