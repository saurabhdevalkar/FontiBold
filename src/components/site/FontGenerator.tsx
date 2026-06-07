import { useMemo, useState } from "react";
import { FONT_STYLES, STYLE_CATEGORIES, type FontStyle } from "@/lib/fonts";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { StyleCard } from "./StyleCard";

export function FontGenerator({
  defaultText = "Write your text here",
  filterCategory,
  filterStyles,
}: {
  defaultText?: string;
  filterCategory?: FontStyle["category"];
  filterStyles?: string[]; // ids
}) {
  const [text, setText] = useState(defaultText);
  const [category, setCategory] = useState<FontStyle["category"] | "All">(filterCategory ?? "All");
  const [favorites, setFavorites] = useLocalStorage<string[]>("tb:favorites", []);
  const [history, setHistory] = useLocalStorage<string[]>("tb:history", []);

  const styles = useMemo(() => {
    let list = FONT_STYLES;
    if (filterStyles) list = list.filter((s) => filterStyles.includes(s.id));
    if (category !== "All") list = list.filter((s) => s.category === category);
    // favorites first
    return [...list].sort((a, b) => {
      const fa = favorites.includes(a.id) ? -1 : 0;
      const fb = favorites.includes(b.id) ? -1 : 0;
      return fa - fb;
    });
  }, [category, favorites, filterStyles]);

  return (
    <section id="tool" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="grid gap-6 md:grid-cols-5">
        <div className="md:col-span-2">
          <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground" htmlFor="tb-input">
            Your text
          </label>
          <textarea
            id="tb-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your text here..."
            rows={6}
            className="mt-2 w-full resize-none rounded-2xl border border-border bg-card p-4 text-lg outline-none ring-primary/30 transition-all focus:ring-2"
          />
          {history.length > 0 && (
            <div className="mt-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Recent</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {history.slice(0, 6).map((h, i) => (
                  <button
                    key={i}
                    onClick={() => setText(h)}
                    className="truncate max-w-[14rem] rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
                    title={h}
                  >
                    {h}
                  </button>
                ))}
              </div>
            </div>
          )}
          <p className="mt-4 text-xs text-muted-foreground">
            Tip: results update as you type. Click Copy on any style to paste it into Instagram, Discord, TikTok, X and more.
          </p>
        </div>

        <div className="md:col-span-3">
          {!filterCategory && !filterStyles && (
            <div className="mb-4 flex flex-wrap gap-2">
              {(["All", ...STYLE_CATEGORIES] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    category === c
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          )}
          <div className="grid gap-3 sm:grid-cols-2">
            {styles.map((s) => (
              <StyleCard
                key={s.id}
                style={s}
                output={text ? s.transform(text) : ""}
                isFavorite={favorites.includes(s.id)}
                onToggleFavorite={() =>
                  setFavorites((prev) =>
                    prev.includes(s.id) ? prev.filter((x) => x !== s.id) : [s.id, ...prev],
                  )
                }
                onCopy={() => {
                  if (!text) return;
                  setHistory((prev) => [text, ...prev.filter((x) => x !== text)].slice(0, 12));
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}