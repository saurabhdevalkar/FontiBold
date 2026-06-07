import { Check, Copy, Heart } from "lucide-react";
import { useState } from "react";
import type { FontStyle } from "@/lib/fonts";

export function StyleCard({
  style,
  output,
  isFavorite,
  onToggleFavorite,
  onCopy,
}: {
  style: FontStyle;
  output: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onCopy: () => void;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(output);
      onCopy();
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="group card-surface flex flex-col gap-3 rounded-2xl p-4 transition-all hover:border-primary/40">
      <div className="flex items-center justify-between text-xs uppercase tracking-wide text-muted-foreground">
        <span>{style.name}</span>
        <button
          onClick={onToggleFavorite}
          aria-label="Favorite"
          className="rounded-md p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
        >
          <Heart className={`size-4 ${isFavorite ? "fill-primary text-primary" : ""}`} />
        </button>
      </div>
      <div className="min-h-12 break-words text-lg leading-snug text-foreground">{output || <span className="text-muted-foreground">Type to preview…</span>}</div>
      <button
        onClick={handleCopy}
        disabled={!output}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-3 py-2 text-sm font-medium text-foreground transition-all hover:bg-primary hover:text-primary-foreground disabled:opacity-40"
      >
        {copied ? <><Check className="size-4" /> Copied</> : <><Copy className="size-4" /> Copy</>}
      </button>
    </div>
  );
}