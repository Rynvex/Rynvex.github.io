import type { Locale } from "@/i18n/messages";

export type Design =
  | "linear"
  | "vercel"
  | "apple"
  | "airbnb"
  | "miro"
  | "pinterest"
  | "mistral"
  | "together"
  | "revolut"
  | "hashicorp"
  | "shopify";

export const DESIGNS: readonly Design[] = [
  "linear",
  "vercel",
  "apple",
  "airbnb",
  "miro",
  "pinterest",
  "mistral",
  "together",
  "revolut",
  "hashicorp",
  "shopify",
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
  hashicorp: {
    id: "hashicorp",
    name: "Cobalt",
    theme: "light",
    tagline: {
      en: "Infrastructure typography, micro-shadows",
      zh: "基礎建設字體、微弱陰影",
      ja: "インフラ型タイポグラフィ、マイクロシャドウ",
    },
    description: {
      en: "White canvas with light-gray surfaces, link-blue accent (#2264d6), tight 2–8px corners. Micro-shadows at 0.05 opacity — depth through whisper. Uppercase tracked chips.",
      zh: "白底配淡灰色面、連結藍 #2264d6 強調色、緊湊 2–8px 圓角。0.05 透明度微陰影 — 用低語做深度。大寫加字距 chip。",
      ja: "白キャンバスにライトグレーのサーフェス、リンクブルー(#2264d6)のアクセント、2〜8pxのタイトな角丸。0.05不透明度のマイクロシャドウ — 囁きで深度を表現。大文字トラッキングのチップ。",
    },
    swatch: ["#ffffff", "#000000", "#2264d6", "#d5d7db"],
    fontFamily: "Sans",
    fontVar: "var(--font-inter)",
    specimen: "Aa",
  },
  shopify: {
    id: "shopify",
    name: "Verdant",
    theme: "dark",
    tagline: {
      en: "Dark forest, neon-green pulse",
      zh: "深森綠、霓虹綠脈動",
      ja: "ダークフォレスト、ネオングリーンの鼓動",
    },
    description: {
      en: "Pure-black canvas with deep forest-teal undertones (#02090A → #102620), neon green (#36F4A4) as the singular high-energy accent. Pill CTAs with white fills.",
      zh: "純黑畫布配深森林青底色（#02090A → #102620），霓虹綠 #36F4A4 是單一高能量強調色。膠囊形 CTA、白色填色。",
      ja: "純黒キャンバスに深い森のティールの下地(#02090A → #102620)、単一の高エネルギーアクセントのネオングリーン(#36F4A4)。ピル型CTAの白塗りつぶし。",
    },
    swatch: ["#000000", "#02090a", "#36f4a4", "#102620"],
    fontFamily: "Sans",
    fontVar: "var(--font-inter)",
    specimen: "Aa",
  },
  together: {
    id: "together",
    name: "Aurora",
    theme: "light",
    tagline: {
      en: "Pastel dawn, sharp geometry",
      zh: "粉彩晨光、銳利幾何",
      ja: "パステルの夜明け、シャープな幾何学",
    },
    description: {
      en: "Pure-white canvas with subtle lavender surfaces, magenta-orange brand accents reserved for illustrations, and midnight-blue CTAs. Tight display tracking, mono uppercase labels.",
      zh: "純白畫布配淡薰衣草色面、洋紅與橘色僅留給插畫的品牌色、午夜藍 CTA。緊湊大字距、mono 大寫標籤。",
      ja: "純白キャンバスに淡いラベンダーのサーフェス、マゼンタとオレンジは挿絵専用のブランドアクセント、ミッドナイトブルーのCTA。タイトな表示トラッキング、モノ大文字ラベル。",
    },
    swatch: ["#ffffff", "#bdbbff", "#ef2cc1", "#010120"],
    fontFamily: "Display Sans",
    fontVar: "var(--font-inter)",
    specimen: "Aa",
  },
  revolut: {
    id: "revolut",
    name: "Marble",
    theme: "light",
    tagline: {
      en: "Pill buttons, billboard headlines",
      zh: "膠囊按鈕、廣告牌等級標題",
      ja: "ピル型ボタン、ビルボードスケールの見出し",
    },
    description: {
      en: "Near-black (#191c1f) and pure white binary with universal pill buttons (9999px). Ultra-compressed display tracking (-2.72px). Zero shadows — depth via color contrast only.",
      zh: "近黑（#191c1f）與純白雙色配置，所有按鈕都是膠囊形（9999px）。超壓縮顯示字距（-2.72px）。零陰影 — 靠色對比建立深度。",
      ja: "ニアブラック（#191c1f）と純白の2色構成、すべてのボタンがピル型（9999px）。超圧縮の見出しトラッキング（-2.72px）。シャドウなし — 色のコントラストで深度を表現。",
    },
    swatch: ["#ffffff", "#191c1f", "#494fdf", "#f4f4f4"],
    fontFamily: "Display Sans",
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
