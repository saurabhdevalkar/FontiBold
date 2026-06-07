/**
 * FontiBold — Unicode style conversion library.
 * Each style produces a transformed string for the input text.
 * Letters that don't have a Unicode counterpart fall back to the original char.
 */

const ALPHA_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ALPHA_LOWER = "abcdefghijklmnopqrstuvwxyz";
const DIGITS = "0123456789";

// Build a map from a contiguous Unicode range starting at codePoint.
function rangeMap(letters: string, startCp: number, holes: Record<string, string> = {}): Record<string, string> {
  const m: Record<string, string> = {};
  for (let i = 0; i < letters.length; i++) {
    const ch = letters[i];
    m[ch] = holes[ch] ?? String.fromCodePoint(startCp + i);
  }
  return m;
}

function applyMap(text: string, map: Record<string, string>): string {
  let out = "";
  for (const ch of text) out += map[ch] ?? ch;
  return out;
}

// ---------- Mathematical Alphanumeric Symbols ----------
const boldSerifU = rangeMap(ALPHA_UPPER, 0x1d400);
const boldSerifL = rangeMap(ALPHA_LOWER, 0x1d41a);
const boldSerifD = rangeMap(DIGITS, 0x1d7ce);

const italicSerifU = rangeMap(ALPHA_UPPER, 0x1d434);
const italicSerifL = rangeMap(ALPHA_LOWER, 0x1d44e, { h: "\u210e" });

const boldItalicSerifU = rangeMap(ALPHA_UPPER, 0x1d468);
const boldItalicSerifL = rangeMap(ALPHA_LOWER, 0x1d482);

const sansU = rangeMap(ALPHA_UPPER, 0x1d5a0);
const sansL = rangeMap(ALPHA_LOWER, 0x1d5ba);
const sansD = rangeMap(DIGITS, 0x1d7e2);

const boldSansU = rangeMap(ALPHA_UPPER, 0x1d5d4);
const boldSansL = rangeMap(ALPHA_LOWER, 0x1d5ee);
const boldSansD = rangeMap(DIGITS, 0x1d7ec);

const italicSansU = rangeMap(ALPHA_UPPER, 0x1d608);
const italicSansL = rangeMap(ALPHA_LOWER, 0x1d622);

const boldItalicSansU = rangeMap(ALPHA_UPPER, 0x1d63c);
const boldItalicSansL = rangeMap(ALPHA_LOWER, 0x1d656);

const scriptU = rangeMap(ALPHA_UPPER, 0x1d49c, {
  B: "\u212c", E: "\u2130", F: "\u2131", H: "\u210b", I: "\u2110",
  L: "\u2112", M: "\u2133", R: "\u211b",
});
const scriptL = rangeMap(ALPHA_LOWER, 0x1d4b6, { e: "\u212f", g: "\u210a", o: "\u2134" });

const boldScriptU = rangeMap(ALPHA_UPPER, 0x1d4d0);
const boldScriptL = rangeMap(ALPHA_LOWER, 0x1d4ea);

const frakturU = rangeMap(ALPHA_UPPER, 0x1d504, {
  C: "\u212d", H: "\u210c", I: "\u2111", R: "\u211c", Z: "\u2128",
});
const frakturL = rangeMap(ALPHA_LOWER, 0x1d51e);

const boldFrakturU = rangeMap(ALPHA_UPPER, 0x1d56c);
const boldFrakturL = rangeMap(ALPHA_LOWER, 0x1d586);

const doubleStruckU = rangeMap(ALPHA_UPPER, 0x1d538, {
  C: "\u2102", H: "\u210d", N: "\u2115", P: "\u2119", Q: "\u211a", R: "\u211d", Z: "\u2124",
});
const doubleStruckL = rangeMap(ALPHA_LOWER, 0x1d552);
const doubleStruckD = rangeMap(DIGITS, 0x1d7d8);

const monospaceU = rangeMap(ALPHA_UPPER, 0x1d670);
const monospaceL = rangeMap(ALPHA_LOWER, 0x1d68a);
const monospaceD = rangeMap(DIGITS, 0x1d7f6);

// ---------- Bubble / Circled ----------
const circledU = rangeMap(ALPHA_UPPER, 0x24b6);
const circledL = rangeMap(ALPHA_LOWER, 0x24d0);
const circledD: Record<string, string> = {
  "0": "\u24ea", "1": "\u2460", "2": "\u2461", "3": "\u2462", "4": "\u2463",
  "5": "\u2464", "6": "\u2465", "7": "\u2466", "8": "\u2467", "9": "\u2468",
};

const negCircledU = rangeMap(ALPHA_UPPER, 0x1f150);
const negCircledD: Record<string, string> = {
  "0": "\u24ff", "1": "\u2776", "2": "\u2777", "3": "\u2778", "4": "\u2779",
  "5": "\u277a", "6": "\u277b", "7": "\u277c", "8": "\u277d", "9": "\u277e",
};

// ---------- Squared ----------
const squaredU = rangeMap(ALPHA_UPPER, 0x1f130);
const negSquaredU = rangeMap(ALPHA_UPPER, 0x1f170);

// ---------- Full-Width ----------
const fullWidthU = rangeMap(ALPHA_UPPER, 0xff21);
const fullWidthL = rangeMap(ALPHA_LOWER, 0xff41);
const fullWidthD = rangeMap(DIGITS, 0xff10);

// ---------- Small Caps ----------
const smallCapsL: Record<string, string> = {
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ",
  j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ",
  s: "ꜱ", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
};

// ---------- Superscript / Subscript / Tiny ----------
const superscript: Record<string, string> = {
  a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ",
  j: "ʲ", k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "۹", r: "ʳ",
  s: "ˢ", t: "ᵗ", u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ",
  A: "ᴬ", B: "ᴮ", C: "ᶜ", D: "ᴰ", E: "ᴱ", F: "ᶠ", G: "ᴳ", H: "ᴴ", I: "ᴵ",
  J: "ᴶ", K: "ᴷ", L: "ᴸ", M: "ᴹ", N: "ᴺ", O: "ᴼ", P: "ᴾ", Q: "Q", R: "ᴿ",
  S: "ˢ", T: "ᵀ", U: "ᵁ", V: "ⱽ", W: "ᵂ", X: "ˣ", Y: "ʸ", Z: "ᶻ",
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
  "+": "⁺", "-": "⁻", "=": "⁼", "(": "⁽", ")": "⁾",
};
const subscript: Record<string, string> = {
  a: "ₐ", e: "ₑ", h: "ₕ", i: "ᵢ", j: "ⱼ", k: "ₖ", l: "ₗ", m: "ₘ", n: "ₙ",
  o: "ₒ", p: "ₚ", r: "ᵣ", s: "ₛ", t: "ₜ", u: "ᵤ", v: "ᵥ", x: "ₓ",
  "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄", "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉",
  "+": "₊", "-": "₋", "=": "₌", "(": "₍", ")": "₎",
};

// ---------- Upside Down ----------
const upsideDown: Record<string, string> = {
  a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ", i: "ᴉ",
  j: "ɾ", k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o", p: "d", q: "b", r: "ɹ",
  s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z",
  A: "∀", B: "B", C: "Ɔ", D: "D", E: "Ǝ", F: "Ⅎ", G: "פ", H: "H", I: "I",
  J: "ſ", K: "K", L: "˥", M: "W", N: "N", O: "O", P: "Ԁ", Q: "Q", R: "R",
  S: "S", T: "⊥", U: "∩", V: "Λ", W: "M", X: "X", Y: "⅄", Z: "Z",
  "0": "0", "1": "Ɩ", "2": "ᄅ", "3": "Ɛ", "4": "ㄣ", "5": "ϛ", "6": "9", "7": "ㄥ", "8": "8", "9": "6",
  ".": "˙", ",": "'", "?": "¿", "!": "¡", '"': ",,", "'": ",", "(": ")", ")": "(", "[": "]", "]": "[", "{": "}", "}": "{", "<": ">", ">": "<", "&": "⅋",
};
function transformUpsideDown(t: string) {
  return Array.from(t).map(c => upsideDown[c] ?? c).reverse().join("");
}
function transformMirror(t: string) {
  const mirror: Record<string, string> = {
    a: "ɒ", b: "d", c: "ↄ", d: "b", e: "ɘ", f: "ʇ", g: "ǫ", h: "ʜ", i: "i",
    j: "ꞁ", k: "ʞ", l: "l", m: "m", n: "n", o: "o", p: "q", q: "p", r: "ɿ",
    s: "ƨ", t: "ƚ", u: "u", v: "v", w: "w", x: "x", y: "ʏ", z: "z",
    A: "A", B: "ᙠ", C: "Ɔ", D: "ᗡ", E: "Ǝ", F: "ꟻ", G: "Ꭷ", H: "H", I: "I",
    J: "Ⴑ", K: "ꓘ", L: "⅃", M: "M", N: "И", O: "O", P: "ꟼ", Q: "Ọ", R: "Я",
    S: "Ƨ", T: "T", U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Ƹ",
  };
  return Array.from(t).map(c => mirror[c] ?? c).reverse().join("");
}

// ---------- Combining marks ----------
function combine(t: string, mark: string) {
  let out = "";
  for (const c of t) out += c + mark;
  return out;
}

// ---------- Wraps / decorative ----------
function wrap(prefix: string, suffix: string) {
  return (t: string) => prefix + t + suffix;
}
function interlace(t: string, between: string) {
  return Array.from(t).join(between);
}
function spaced(t: string) {
  return Array.from(t).join(" ");
}

// ---------- Style definitions ----------
export interface FontStyle {
  id: string;
  name: string;
  category: "Classic" | "Decorative" | "Symbol" | "Gaming" | "Social" | "Aesthetic";
  transform: (text: string) => string;
}

const T = (...maps: Record<string, string>[]) => (text: string): string => {
  const merged: Record<string, string> = Object.assign({}, ...maps);
  return applyMap(text, merged);
};

export const FONT_STYLES: FontStyle[] = [
  // Classic
  { id: "bold-serif", name: "Bold", category: "Classic", transform: T(boldSerifU, boldSerifL, boldSerifD) },
  { id: "italic-serif", name: "Italic", category: "Classic", transform: T(italicSerifU, italicSerifL) },
  { id: "bold-italic-serif", name: "Bold Italic", category: "Classic", transform: T(boldItalicSerifU, boldItalicSerifL) },
  { id: "sans", name: "Sans Serif", category: "Classic", transform: T(sansU, sansL, sansD) },
  { id: "bold-sans", name: "Bold Sans", category: "Classic", transform: T(boldSansU, boldSansL, boldSansD) },
  { id: "italic-sans", name: "Italic Sans", category: "Classic", transform: T(italicSansU, italicSansL) },
  { id: "bold-italic-sans", name: "Bold Italic Sans", category: "Classic", transform: T(boldItalicSansU, boldItalicSansL) },
  { id: "script", name: "Script", category: "Classic", transform: T(scriptU, scriptL) },
  { id: "bold-script", name: "Bold Script", category: "Classic", transform: T(boldScriptU, boldScriptL) },
  { id: "fraktur", name: "Gothic Fraktur", category: "Classic", transform: T(frakturU, frakturL) },
  { id: "bold-fraktur", name: "Bold Gothic", category: "Classic", transform: T(boldFrakturU, boldFrakturL) },
  { id: "double-struck", name: "Double Struck", category: "Classic", transform: T(doubleStruckU, doubleStruckL, doubleStruckD) },
  { id: "monospace", name: "Monospace", category: "Classic", transform: T(monospaceU, monospaceL, monospaceD) },
  { id: "small-caps", name: "Small Caps", category: "Classic", transform: (t) => applyMap(t.toLowerCase(), smallCapsL) },

  // Bubble / Squared
  { id: "bubble", name: "Bubble", category: "Decorative", transform: T(circledU, circledL, circledD) },
  { id: "bubble-filled", name: "Bubble Filled", category: "Decorative", transform: T(negCircledU, negCircledD) },
  { id: "squared", name: "Squared", category: "Decorative", transform: T(squaredU) },
  { id: "squared-filled", name: "Squared Filled", category: "Decorative", transform: T(negSquaredU) },
  { id: "full-width", name: "Full Width (Vaporwave)", category: "Aesthetic", transform: T(fullWidthU, fullWidthL, fullWidthD) },

  // Tiny / Sub / Super
  { id: "superscript", name: "Superscript (Tiny)", category: "Decorative", transform: T(superscript) },
  { id: "subscript", name: "Subscript", category: "Decorative", transform: T(subscript) },

  // Flipped
  { id: "upside-down", name: "Upside Down", category: "Decorative", transform: transformUpsideDown },
  { id: "mirror", name: "Mirror", category: "Decorative", transform: transformMirror },

  // Strike / Underline
  { id: "strike", name: "Strikethrough", category: "Decorative", transform: (t) => combine(t, "\u0336") },
  { id: "underline", name: "Underline", category: "Decorative", transform: (t) => combine(t, "\u0332") },
  { id: "double-underline", name: "Double Underline", category: "Decorative", transform: (t) => combine(t, "\u0333") },
  { id: "overline", name: "Overline", category: "Decorative", transform: (t) => combine(t, "\u0305") },
  { id: "slash", name: "Slashed", category: "Decorative", transform: (t) => combine(t, "\u0337") },
  { id: "tilde", name: "Tilde Above", category: "Decorative", transform: (t) => combine(t, "\u0303") },
  { id: "dots", name: "Dotted Above", category: "Decorative", transform: (t) => combine(t, "\u0307") },
  { id: "spaced", name: "Spaced Out", category: "Aesthetic", transform: spaced },
  { id: "dotted-between", name: "Dotted Between", category: "Aesthetic", transform: (t) => interlace(t, "·") },
  { id: "heart-between", name: "Heart Between", category: "Aesthetic", transform: (t) => interlace(t, "♥") },
  { id: "star-between", name: "Star Between", category: "Aesthetic", transform: (t) => interlace(t, "★") },

  // Wraps — aesthetic
  { id: "wrap-stars", name: "Sparkle Stars", category: "Aesthetic", transform: wrap("✦･ﾟ: ", " :･ﾟ✦") },
  { id: "wrap-sparkle", name: "Sparkle", category: "Aesthetic", transform: wrap("⋆｡˚ ", " ˚｡⋆") },
  { id: "wrap-cloud", name: "Cloud", category: "Aesthetic", transform: wrap("☁︎ ", " ☁︎") },
  { id: "wrap-moon", name: "Crescent Moon", category: "Aesthetic", transform: wrap("☾ ", " ☽") },
  { id: "wrap-flower", name: "Flowers", category: "Aesthetic", transform: wrap("✿ ", " ✿") },
  { id: "wrap-cherry", name: "Cherry Blossom", category: "Aesthetic", transform: wrap("✿◕ ‿ ◕✿ ", " ✿◕ ‿ ◕✿") },
  { id: "wrap-butterfly", name: "Butterfly", category: "Aesthetic", transform: wrap("🦋 ", " 🦋") },
  { id: "wrap-fire", name: "Fire", category: "Aesthetic", transform: wrap("🔥 ", " 🔥") },
  { id: "wrap-aesthetic", name: "Aesthetic Box", category: "Aesthetic", transform: wrap("｡:*ﾟ✲ﾟ ", " ✲ﾟ*:｡") },

  // Bracketed
  { id: "wrap-cjk-corner", name: "CJK Corner", category: "Decorative", transform: wrap("「", "」") },
  { id: "wrap-cjk-white", name: "CJK White", category: "Decorative", transform: wrap("『", "』") },
  { id: "wrap-cjk-lenticular", name: "CJK Lenticular", category: "Decorative", transform: wrap("【", "】") },
  { id: "wrap-cjk-tortoise", name: "Tortoise Shell", category: "Decorative", transform: wrap("〘", "〙") },
  { id: "wrap-double-angle", name: "Double Angle", category: "Decorative", transform: wrap("《", "》") },
  { id: "wrap-single-angle", name: "Single Angle", category: "Decorative", transform: wrap("〈", "〉") },

  // Gaming / Royal
  { id: "wrap-royal", name: "Royal Crown", category: "Gaming", transform: wrap("꧁༺ ", " ༻꧂") },
  { id: "wrap-dagger", name: "Dagger", category: "Gaming", transform: wrap("†☠ ", " ☠†") },
  { id: "wrap-sword", name: "Sword", category: "Gaming", transform: wrap("⚔ ", " ⚔") },
  { id: "wrap-arrow", name: "Arrow Banner", category: "Gaming", transform: wrap("✯¸.•´*¨`*•✿ ", " ✿•*`¨*`•.¸✯") },
  { id: "wrap-skull", name: "Skull", category: "Gaming", transform: wrap("☠ ", " ☠") },
  { id: "wrap-lightning", name: "Lightning", category: "Gaming", transform: wrap("⚡ ", " ⚡") },
  { id: "wrap-target", name: "Target", category: "Gaming", transform: wrap("◤ ", " ◢") },
  { id: "wrap-pyramid", name: "Pyramid", category: "Gaming", transform: wrap("▲ ", " ▼") },
  { id: "wrap-mecha", name: "Mecha", category: "Gaming", transform: wrap("░▒▓█ ", " █▓▒░") },
  { id: "wrap-circuit", name: "Circuit", category: "Gaming", transform: wrap("▌│█║▌║▌║ ", " ║▌║▌║█│▌") },

  // Symbol heavy / social
  { id: "wrap-tilde", name: "Wavy Tilde", category: "Social", transform: wrap("~ ", " ~") },
  { id: "wrap-dash", name: "Em-Dash", category: "Social", transform: wrap("— ", " —") },
  { id: "wrap-equals", name: "Equals", category: "Social", transform: wrap("═ ", " ═") },
  { id: "wrap-quote", name: "Smart Quotes", category: "Social", transform: wrap("\u201c", "\u201d") },
  { id: "wrap-heart", name: "Hearts", category: "Social", transform: wrap("♥ ", " ♥") },
  { id: "wrap-double-heart", name: "Double Hearts", category: "Social", transform: wrap("♥♡ ", " ♡♥") },
  { id: "wrap-music", name: "Music Note", category: "Social", transform: wrap("♪ ", " ♪") },
  { id: "wrap-yinyang", name: "Yin Yang", category: "Social", transform: wrap("☯ ", " ☯") },
  { id: "wrap-snowflake", name: "Snowflake", category: "Social", transform: wrap("❆ ", " ❆") },
  { id: "wrap-leaf", name: "Leaf", category: "Social", transform: wrap("☘ ", " ☘") },
  { id: "wrap-peace", name: "Peace", category: "Social", transform: wrap("☮ ", " ☮") },
  { id: "wrap-sun", name: "Sun", category: "Social", transform: wrap("☀ ", " ☀") },
  { id: "wrap-rainbow", name: "Rainbow", category: "Social", transform: wrap("🌈 ", " 🌈") },
  { id: "wrap-paw", name: "Paw", category: "Social", transform: wrap("🐾 ", " 🐾") },
  { id: "wrap-rocket", name: "Rocket", category: "Social", transform: wrap("🚀 ", " 🚀") },
  { id: "wrap-crown", name: "Crown", category: "Social", transform: wrap("♔ ", " ♔") },
  { id: "wrap-king", name: "King Chess", category: "Social", transform: wrap("♛ ", " ♛") },
  { id: "wrap-dot-ring", name: "Dot Ring", category: "Social", transform: wrap("•°¯`•• ", " ••´¯°•") },
  { id: "wrap-wave", name: "Wave Banner", category: "Social", transform: wrap("≋ ", " ≋") },
  { id: "wrap-pixel", name: "Pixel Block", category: "Aesthetic", transform: wrap("▓▒░ ", " ░▒▓") },
  { id: "wrap-glitch", name: "Glitch Brackets", category: "Aesthetic", transform: wrap("⌬ ", " ⌬") },
  { id: "wrap-ribbon", name: "Ribbon", category: "Aesthetic", transform: wrap("⊰ ", " ⊱") },
  { id: "wrap-petals", name: "Petals", category: "Aesthetic", transform: wrap("彡 ", " 彡") },
];

export const STYLE_CATEGORIES: FontStyle["category"][] = [
  "Classic", "Aesthetic", "Decorative", "Gaming", "Social", "Symbol",
];

// ---------- Invisible characters ----------
export const INVISIBLE_CHARS = [
  { name: "Hangul Filler", char: "\u3164", desc: "Invisible Korean filler, widely supported on social apps." },
  { name: "Zero Width Space", char: "\u200B", desc: "Truly zero width; some platforms strip it." },
  { name: "Zero Width Joiner", char: "\u200D", desc: "Used between emoji, otherwise invisible." },
  { name: "Zero Width Non-Joiner", char: "\u200C", desc: "Invisible separator." },
  { name: "Braille Blank", char: "\u2800", desc: "Visible width but appears empty." },
  { name: "Mongolian Vowel Separator", char: "\u180E", desc: "Historical zero-width character." },
];

// ---------- Symbol library ----------
export const SYMBOL_SETS = [
  { name: "Hearts", symbols: ["♥","♡","❤","❥","💖","💘","💝","💕","💞","💓","♥️","❣","♡","ღ"] },
  { name: "Stars", symbols: ["★","☆","✦","✧","✩","✪","✫","✬","✭","✮","✯","✰","⋆","✴","✵"] },
  { name: "Arrows", symbols: ["←","↑","→","↓","↔","↕","⇐","⇑","⇒","⇓","⇔","↩","↪","➜","➔","➤"] },
  { name: "Music", symbols: ["♩","♪","♫","♬","♭","♮","♯","𝄞","𝄢"] },
  { name: "Flowers", symbols: ["✿","❀","❁","✾","✽","❃","❋","✤","✣","✦","ꕥ","☘","🌸","🌹","🌺","🌻","🌼"] },
  { name: "Weather", symbols: ["☀","☁","☂","☃","☄","☼","☽","☾","❄","❆","❅","⚡"] },
  { name: "Crowns & Royal", symbols: ["♔","♕","♖","♗","♘","♙","♚","♛","♜","♝","♞","♟","꧁","꧂","༺","༻"] },
  { name: "Punctuation", symbols: ["•","·","◦","‣","⁃","⁌","⁍","✓","✔","✗","✘","✕","✖","※","‽","‼"] },
  { name: "Brackets", symbols: ["「","」","『","』","【","】","〘","〙","《","》","〈","〉","꧁","꧂","༺","༻"] },
  { name: "Math", symbols: ["±","×","÷","√","∞","≈","≠","≤","≥","∑","∏","∫","∂","∇","∈","∉"] },
];

// ---------- Text-art presets ----------
export const TEXT_ART_PRESETS = [
  { name: "Shrug", art: "¯\\_(ツ)_/¯" },
  { name: "Table Flip", art: "(╯°□°）╯︵ ┻━┻" },
  { name: "Put it back", art: "┬─┬ノ( º _ ºノ)" },
  { name: "Lenny", art: "( ͡° ͜ʖ ͡°)" },
  { name: "Sparkle", art: "(づ｡◕‿‿◕｡)づ" },
  { name: "Bear", art: "ʕ•ᴥ•ʔ" },
  { name: "Cat", art: "(=^･ω･^=)" },
  { name: "Cry", art: "(╥﹏╥)" },
  { name: "Happy", art: "(¬‿¬)" },
  { name: "Wow", art: "(ʘ‿ʘ)" },
  { name: "Wink", art: "(^_-)" },
  { name: "Fight!", art: "ლ(ಠ益ಠლ)" },
  { name: "Disapproval", art: "ಠ_ಠ" },
  { name: "Yay", art: "\\(^▽^)/" },
];