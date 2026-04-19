import type { Locale } from "@/i18n/messages";

export type Design = "linear" | "vercel" | "apple" | "airbnb";

export const DESIGNS: readonly Design[] = [
  "linear",
  "vercel",
  "apple",
  "airbnb",
] as const;

export type DesignMeta = {
  id: Design;
  name: string;
  source: string;
  theme: "light" | "dark";
  tagline: Record<Locale, string>;
  description: Record<Locale, string>;
  swatch: [string, string, string, string];
  fontFamily: string;
  fontVar: string;
  specimen: string;
};

export const designMeta: Record<Design, DesignMeta> = {
  linear: {
    id: "linear",
    name: "Linear",
    source: "linear.app",
    theme: "dark",
    tagline: {
      en: "Dark-native precision",
      zh: "深色原生的精準感",
      ja: "ダークを前提とした精密設計",
    },
    description: {
      en: "Near-black canvas with Inter weight 510 and a single indigo-violet accent. Borders are whisper-thin semi-transparent white.",
      zh: "近黑畫布 + Inter 510 + 單一靛紫強調色，邊框是極細的半透明白。",
      ja: "ほぼ黒のキャンバス、Inter 510、単一のインディゴ・バイオレット。ボーダーは極めて薄い半透明の白。",
    },
    swatch: ["#08090a", "#191a1b", "#5e6ad2", "#f7f8f8"],
    fontFamily: "Inter",
    fontVar: "var(--font-inter)",
    specimen: "Aa",
  },
  vercel: {
    id: "vercel",
    name: "Vercel",
    source: "vercel.com",
    theme: "light",
    tagline: {
      en: "Shadow-as-border minimalism",
      zh: "以陰影作為邊框的極簡",
      ja: "影を境界にするミニマリズム",
    },
    description: {
      en: "White canvas with Geist Sans and strong negative letter-spacing. Borders are replaced by a 1-pixel zero-blur shadow stack.",
      zh: "白色畫布 + Geist Sans + 強力負字距，邊框改用 1px 零模糊陰影堆疊。",
      ja: "白キャンバスとGeist Sans、強い負のトラッキング。ボーダーは1pxゼロブラーの影スタックで表現。",
    },
    swatch: ["#ffffff", "#fafafa", "#171717", "#0072f5"],
    fontFamily: "Geist",
    fontVar: "var(--font-geist)",
    specimen: "Aa",
  },
  apple: {
    id: "apple",
    name: "Apple",
    source: "apple.com",
    theme: "dark",
    tagline: {
      en: "Pure black, cinematic",
      zh: "純黑、劇場感",
      ja: "純黒、シネマティック",
    },
    description: {
      en: "Pure-black canvas with SF Pro, 980px pill CTAs, and a single bright-blue accent (#2997ff). Shadows are rare and soft.",
      zh: "純黑畫布 + SF Pro + 980px 膠囊 CTA + 單一亮藍強調色（#2997ff）。陰影少而柔。",
      ja: "純黒キャンバス、SF Pro、980pxのピルCTA、単一のブライトブルー（#2997ff）。シャドウは控えめで柔らかい。",
    },
    swatch: ["#000000", "#272729", "#2997ff", "#f5f5f7"],
    fontFamily: "SF Pro",
    fontVar: "-apple-system, BlinkMacSystemFont",
    specimen: "Aa",
  },
  airbnb: {
    id: "airbnb",
    name: "Airbnb",
    source: "airbnb.com",
    theme: "light",
    tagline: {
      en: "Warm, photography-forward",
      zh: "溫暖、照片優先",
      ja: "温かみ、写真中心",
    },
    description: {
      en: "White canvas with Rausch Red as the singular accent, warm #222 text, and three-layer shadows. Generous rounding (20px cards).",
      zh: "白色畫布 + Rausch 紅單一強調色、暖色 #222 文字、三層陰影。圓角大方（卡片 20px）。",
      ja: "白キャンバス、Rausch Redを単一のアクセントに、温かみのある#222の文字、3層のシャドウ。角丸は大胆（カード20px）。",
    },
    swatch: ["#ffffff", "#ff385c", "#222222", "#f2f2f2"],
    fontFamily: "Inter",
    fontVar: "var(--font-inter)",
    specimen: "Aa",
  },
};
