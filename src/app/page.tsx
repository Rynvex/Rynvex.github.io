"use client";
import { useDesign } from "@/lib/design";
import Spotlight from "@/components/Spotlight";
import CommandPalette from "@/components/CommandPalette";
import LinearLayout from "@/layouts/LinearLayout";
import VercelLayout from "@/layouts/VercelLayout";
import AppleLayout from "@/layouts/AppleLayout";
import AirbnbLayout from "@/layouts/AirbnbLayout";

const layouts = {
  linear: LinearLayout,
  vercel: VercelLayout,
  apple: AppleLayout,
  airbnb: AirbnbLayout,
} as const;

export default function Page() {
  const { design } = useDesign();
  const Layout = layouts[design];
  return (
    <>
      <Spotlight />
      <CommandPalette />
      <Layout />
    </>
  );
}
