import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { DesignProvider } from "@/lib/design";
import { PaletteProvider } from "@/lib/palette";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chang Li-Wei — DevPM · AI / Computer Vision",
  description:
    "DevPM at Asilla Inc. (Tokyo). Bridging AI research and real-world deployment. Computer vision, LLM, RAG.",
  metadataBase: new URL("https://changliwei.dev"),
  openGraph: {
    title: "Chang Li-Wei — DevPM · AI / Computer Vision",
    description:
      "DevPM at Asilla Inc. (Tokyo). Bridging AI research and real-world deployment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body>
        <DesignProvider>
          <PaletteProvider>
            <LocaleProvider>{children}</LocaleProvider>
          </PaletteProvider>
        </DesignProvider>
      </body>
    </html>
  );
}
