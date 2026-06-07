import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-semibold">
            <span className="inline-block size-6 rounded-md bg-[var(--gradient-primary)]" />
            <span><span className="text-gradient">Fonti</span>Bold</span>
          </div>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Convert plain text into 75+ stylish Unicode fonts. Built for creators,
            gamers, and anyone who wants their words to stand out.
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold">Tools</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/fancy-text-generator" className="hover:text-foreground">Fancy Text</Link></li>
            <li><Link to="/aesthetic-text-generator" className="hover:text-foreground">Aesthetic Text</Link></li>
            <li><Link to="/nickname-decorator" className="hover:text-foreground">Nickname Decorator</Link></li>
            <li><Link to="/invisible-character" className="hover:text-foreground">Invisible Character</Link></li>
            <li><Link to="/symbol-library" className="hover:text-foreground">Symbol Library</Link></li>
            <li><Link to="/text-art-generator" className="hover:text-foreground">Text Art</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold">Company</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><Link to="/privacy" className="hover:text-foreground">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground">Terms</Link></li>
            <li><Link to="/disclaimer" className="hover:text-foreground">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} FontiBold. All rights reserved.
        </div>
      </div>
    </footer>
  );
}