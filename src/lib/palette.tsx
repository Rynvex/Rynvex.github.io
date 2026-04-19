"use client";
import { createContext, useContext, useEffect, useState } from "react";

const PaletteContext = createContext<{
  open: boolean;
  setOpen: (v: boolean) => void;
  toggle: () => void;
}>({ open: false, setOpen: () => {}, toggle: () => {} });

export function PaletteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        toggle();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <PaletteContext.Provider value={{ open, setOpen, toggle }}>
      {children}
    </PaletteContext.Provider>
  );
}

export const usePalette = () => useContext(PaletteContext);
