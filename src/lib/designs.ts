import type { Locale } from "@/i18n/messages";

export type Design =
  | "linear"
  | "vercel"
  | "apple"
  | "airbnb"
  | "miro"
  | "pinterest"
  | "mistral";

export const DESIGNS: readonly Design[] = [
  "linear",
  "vercel",
  "apple",
  "airbnb",
  "miro",
  "pinterest",
  "mistral",
] as const;

export type DesignMeta = {
  id: Design;
  name: string;
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
    name: "Graphite",
    theme: "dark",
    tagline: {
      en: "Dark-native precision",
      zh: "深色原生的精準感",
      ja: "ダークを前提とした精密設計",
    },
    description: {
      en: "Near-black canvas, single indigo-violet accent, hairline translucent-white borders. Cursor-follow spotlight.",
      zh: "近黑畫布、單一靛紫強調色，邊框是極細的半透明白。游標跟隨光暈。",
      ja: "ほぼ黒のキャンバス、単一のインディゴ・バイオレット、極細の半透明ボーダー。カーソル追従のスポットライト。",
    },
    swatch: ["#08090a", "#191a1b", "#5e6ad2", "#f7f8f8"],
    fontFamily: "Sans 510",
    fontVar: "var(--font-inter)",
    specimen: "Aa",
  },
  vercel: {
    id: "vercel",
    name: "Vellum",
    theme: "light",
    tagline: {
      en: "Shadow-as-border minimalism",
      zh: "以陰影作為邊框的極簡",
      ja: "影を境界にするミニマリズム",
    },
    description: {
      en: "White canvas, oversized headlines with tight negative tracking, borders replaced by 1px zero-blur shadow stacks.",
      zh: "白色畫布、強力負字距大字，邊框改用 1px 零模糊陰影堆疊取代。",
      ja: "白キャンバス、強い負のトラッキングの大見出し、ボーダーは1pxゼロブラーの影で表現。",
    },
    swatch: ["#ffffff", "#fafafa", "#171717", "#0072f5"],
    fontFamily: "Display Sans",
    fontVar: "var(--font-geist)",
    specimen: "Aa",
  },
  apple: {
    id: "apple",
    name: "Onyx",
    theme: "dark",
    tagline: {
      en: "Pitch black, cinematic",
      zh: "純黑、劇場感",
      ja: "漆黒、シネマティック",
    },
    description: {
      en: "Pitch-black canvas, full-bleed scenes, bright-blue accent, 980px pill CTAs. Shadows are rare and soft.",
      zh: "純黑畫布、全螢幕場景、亮藍強調色，CTA 用 980px 膠囊形。陰影少而柔。",
      ja: "漆黒キャンバス、全画面シーン、ブライトブルーのアクセント、980pxのピル型CTA。シャドウは控えめで柔らかい。",
    },
    swatch: ["#000000", "#272729", "#2997ff", "#f5f5f7"],
    fontFamily: "System UI",
    fontVar: "-apple-system, BlinkMacSystemFont",
    specimen: "Aa",
  },
  airbnb: {
    id: "airbnb",
    name: "Coral",
    theme: "light",
    tagline: {
      en: "Warm, photography-forward",
      zh: "溫暖、照片優先",
      ja: "温かみ、写真中心",
    },
    description: {
      en: "White canvas, coral red as the singular accent, warm #222 text, three-layer shadows. Generous rounding (20px cards).",
      zh: "白色畫布、珊瑚紅單一強調色、暖色 #222 文字、三層陰影。圓角大方（卡片 20px）。",
      ja: "白キャンバス、コーラルレッドを単一のアクセントに、温かみの#222文字、3層のシャドウ。角丸大胆（カード20px）。",
    },
    swatch: ["#ffffff", "#ff385c", "#222222", "#f2f2f2"],
    fontFamily: "Sans",
    fontVar: "var(--font-inter)",
    specimen: "Aa",
  },
  miro: {
    id: "miro",
    name: "Pastel",
    theme: "light",
    tagline: {
      en: "Pastel, soft and collaborative",
      zh: "粉彩、輕盈協作感",
      ja: "パステル、軽やかで協調的",
    },
    description: {
      en: "White canvas, pastel surfaces, blue (#5b76fe) interactive accent. Generous radii and thin ring-shadow borders.",
      zh: "白色畫布、粉彩色塊、藍色互動色（#5b76fe）。圓角大、邊框用細 ring shadow。",
      ja: "白キャンバス、パステル系のサーフェス、青（#5b76fe）のインタラクション。大きめの角丸、細いリングシャドウ。",
    },
    swatch: ["#ffffff", "#1c1c1e", "#5b76fe", "#ffc6c6"],
    fontFamily: "Display Medium",
    fontVar: "var(--font-inter)",
    specimen: "Aa",
  },
  mistral: {
    id: "mistral",
    name: "Saffron",
    theme: "light",
    tagline: {
      en: "Warm amber, sharp corners",
      zh: "暖琥珀、銳利方角",
      ja: "ウォームアンバー、シャープな角",
    },
    description: {
      en: "Warm-ivory canvas with golden-amber surfaces and a saturated burnt-orange accent. Near-zero corner radius, multi-layer warm-gold shadows, uppercase CTAs.",
      zh: "暖象牙白畫布配金琥珀色面與飽和的焦橘強調色。近乎零的圓角、多層暖金色陰影、CTA 全大寫。",
      ja: "温かみのある象牙色キャンバスにゴールデンアンバーのサーフェスと飽和したバーンオレンジのアクセント。コーナーはほぼ直角、複層の暖かい黄金シャドウ、CTAは大文字。",
    },
    swatch: ["#fffaeb", "#fa520f", "#1f1f1f", "#ffa110"],
    fontFamily: "Sans",
    fontVar: "var(--font-inter)",
    specimen: "Aa",
  },
  pinterest: {
    id: "pinterest",
    name: "Bisque",
    theme: "light",
    tagline: {
      en: "Warm, photo-rich, handcrafted",
      zh: "暖色、手作感的照片密集排版",
      ja: "温かみ、写真重視、手作り感",
    },
    description: {
      en: "Warm-white canvas with olive/sand neutrals, deep red as singular accent, and generously rounded corners (16–40px).",
      zh: "暖白畫布配橄欖／沙色中性色、深紅單一強調色，圓角大方（16–40px）。",
      ja: "温白キャンバスにオリーブ／サンドのニュートラル、深紅のシングルアクセント、大胆な角丸（16〜40px）。",
    },
    swatch: ["#ffffff", "#e60023", "#211922", "#e5e5e0"],
    fontFamily: "Sans",
    fontVar: "var(--font-inter)",
    specimen: "Aa",
  },
};
