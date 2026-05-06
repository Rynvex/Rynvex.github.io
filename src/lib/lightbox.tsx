"use client";
import { createContext, useCallback, useContext, useState } from "react";

export type LightboxItem = {
  src: string;
  caption: string;
};

type LightboxContextValue = {
  open: boolean;
  items: LightboxItem[];
  index: number;
  openGallery: (items: LightboxItem[], startIndex?: number) => void;
  close: () => void;
  next: () => void;
  prev: () => void;
  setIndex: (i: number) => void;
};

const noop = () => {};

const LightboxContext = createContext<LightboxContextValue>({
  open: false,
  items: [],
  index: 0,
  openGallery: noop,
  close: noop,
  next: noop,
  prev: noop,
  setIndex: noop,
});

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<LightboxItem[]>([]);
  const [index, setIndexState] = useState(0);

  const openGallery = useCallback((next: LightboxItem[], startIndex = 0) => {
    if (!next.length) return;
    setItems(next);
    setIndexState(Math.max(0, Math.min(startIndex, next.length - 1)));
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setItems([]);
    setIndexState(0);
  }, []);

  const advance = useCallback(
    (delta: number) =>
      setIndexState((prevIndex) => {
        if (!items.length) return 0;
        return (prevIndex + delta + items.length) % items.length;
      }),
    [items.length],
  );

  const next = useCallback(() => advance(1), [advance]);
  const prev = useCallback(() => advance(-1), [advance]);

  const setIndex = useCallback(
    (i: number) =>
      setIndexState(() => {
        if (!items.length) return 0;
        return Math.max(0, Math.min(i, items.length - 1));
      }),
    [items.length],
  );

  return (
    <LightboxContext.Provider
      value={{ open, items, index, openGallery, close, next, prev, setIndex }}
    >
      {children}
    </LightboxContext.Provider>
  );
}

export const useLightbox = () => useContext(LightboxContext);
