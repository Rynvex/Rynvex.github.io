"use client";
import { useEffect, useRef } from "react";

export default function Spotlight() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return <div ref={ref} className="spotlight" aria-hidden="true" />;
}
