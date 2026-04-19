"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { DESIGNS, type Design } from "./designs";

export type { Design } from "./designs";

const DesignContext = createContext<{
  design: Design;
  setDesign: (d: Design) => void;
}>({ design: "linear", setDesign: () => {} });

const isDesign = (v: unknown): v is Design =>
  typeof v === "string" && (DESIGNS as readonly string[]).includes(v);

export function DesignProvider({ children }: { children: React.ReactNode }) {
  const [design, setDesign] = useState<Design>("linear");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("design") : null;
    if (isDesign(saved)) setDesign(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-design", design);
    try {
      localStorage.setItem("design", design);
    } catch {}
  }, [design]);

  return (
    <DesignContext.Provider value={{ design, setDesign }}>
      {children}
    </DesignContext.Provider>
  );
}

export const useDesign = () => useContext(DesignContext);
