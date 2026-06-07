export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string; // markdown-ish, rendered as paragraphs
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "best-instagram-fonts",
    title: "Best Instagram Fonts for Bios in 2025",
    excerpt: "Eight Unicode fonts that consistently look great in Instagram bios — with copy/paste examples.",
    date: "2025-01-12",
    content: `Instagram bios are tiny — every character counts. The right Unicode font turns three lines of text into a personality.\n\nOur favourite picks this year are bold sans, italic serif, monospace, and small caps. Bold sans grabs attention without screaming. Italic serif reads as editorial and confident. Monospace works beautifully for designers and developers. Small caps adds quiet sophistication.\n\nAvoid stacking too many styles in one bio. Pick one accent style for your name or tagline, and keep the rest plain. Test how your bio renders in both iOS and Android — a handful of decorative glyphs fall back to boxes on older Android builds.`,
  },
  {
    slug: "best-discord-nicknames",
    title: "Best Discord Nicknames with Stylish Fonts",
    excerpt: "Decorate your Discord nickname with royal, dagger, and mecha Unicode wraps.",
    date: "2025-01-08",
    content: `Discord allows the full Unicode range in nicknames, which makes it a playground for stylised identities. The trick is balance: enough decoration to stand out in a busy member list, not so much that mods can't @-mention you.\n\nRoyal wraps (꧁༺ name ༻꧂) feel grandiose and work well for community owners. Dagger and mecha pair nicely with gaming servers. For chill servers, try small caps or italic sans — quieter, but still distinct.`,
  },
  {
    slug: "stylish-bio-ideas",
    title: "20 Stylish Bio Ideas You Can Copy Today",
    excerpt: "Ready-to-paste bio templates using mixed Unicode fonts and symbols.",
    date: "2025-01-03",
    content: `A good bio is short, specific, and visually distinct. Mix a styled name, a one-line tagline, and a single symbol. Don't fill every line.\n\nExample patterns: 'ᴄᴏғғᴇᴇ · ᴄᴏᴅᴇ · ᴄʜᴀᴏs' · '✦ designer based in Tokyo ✦' · '𝐦𝐚𝐤𝐞𝐫 of small internet things'. Copy any of these into FontiBold and tweak the name to make it yours.`,
  },
  {
    slug: "how-fancy-fonts-work",
    title: "How Fancy Fonts Actually Work (No Magic, Just Unicode)",
    excerpt: "A short, friendly explainer on how 'fancy fonts' are really just Unicode characters from different blocks.",
    date: "2024-12-28",
    content: `Fancy fonts aren't fonts at all — they're characters from the Unicode 'Mathematical Alphanumeric Symbols' block (and a few others). When you copy 𝐁𝐨𝐥𝐝 text, you're pasting separate code points like U+1D401, not styled HTML.\n\nThat's why these fonts work everywhere: any app that handles Unicode will render them. It's also why a few letters are missing in some styles — the original spec wasn't designed for general typography, so certain capitals (like B in Script) live in a different block and we have to substitute the nearest match.`,
  },
  {
    slug: "best-gaming-usernames",
    title: "Best Gaming Usernames: Style Ideas That Don't Get Old",
    excerpt: "Naming patterns and Unicode wraps that work across Free Fire, PUBG, Valorant, and CoD.",
    date: "2024-12-20",
    content: `Strong gaming names are short, easy to type, and visually distinct in a kill feed. Two-word names with a single symbol perform best.\n\nTry pairing a real word with a single decorative wrap — 'Shadow⚔', '꧁Phantom꧂', '▲Riot▼'. Use FontiBold's Nickname Decorator to test variations before committing.`,
  },
];