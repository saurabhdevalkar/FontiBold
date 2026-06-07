/**
 * Reserved AdSense placement. Renders a labeled box with the slot's
 * intrinsic dimensions so we avoid CLS once an ad unit is wired in.
 * Replace the inner div with the AdSense <ins> tag during deployment.
 */
export function AdSlot({
  label = "Advertisement",
  className = "",
  minHeight = 90,
}: {
  label?: string;
  className?: string;
  minHeight?: number;
}) {
  return (
    <div
      className={`mx-auto flex w-full max-w-3xl items-center justify-center rounded-xl border border-dashed border-border/70 bg-muted/30 text-xs uppercase tracking-widest text-muted-foreground ${className}`}
      style={{ minHeight }}
      aria-label={label}
    >
      <span>{label}</span>
    </div>
  );
}