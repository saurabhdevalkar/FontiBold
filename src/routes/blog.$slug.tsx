import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BLOG_POSTS } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [] };
    return {
      meta: [
        { title: `${loaderData.title} · FontiBold` },
        { name: "description", content: loaderData.excerpt },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: loaderData.title,
          description: loaderData.excerpt,
          datePublished: loaderData.date,
          author: { "@type": "Organization", name: "FontiBold" },
        }),
      }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold">Post not found</h1>
      <Link to="/blog" className="mt-4 inline-block text-primary hover:underline">Back to blog</Link>
    </div>
  ),
  component: Post,
});

function Post() {
  const post = Route.useLoaderData() as import("@/lib/blog").BlogPost;
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">← Blog</Link>
      <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
        {new Date(post.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
      </div>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">{post.title}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/90">
        {post.content.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </article>
  );
}