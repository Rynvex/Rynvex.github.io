"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { type Locale, messages } from "./messages";

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (typeof messages)["en"];
}>({
  locale: "en",
  setLocale: () => {},
  t: messages.en,
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const saved =
      (typeof window !== "undefined" &&
        (localStorage.getItem("locale") as Locale | null)) ||
      null;
    if (saved === "en" || saved === "zh" || saved === "ja") {
      setLocale(saved);
      return;
    }
    const nav = (typeof navigator !== "undefined" && navigator.language) || "";
    if (nav.startsWith("ja")) setLocale("ja");
    else if (nav.startsWith("zh")) setLocale("zh");
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("locale", locale);
    } catch {}
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: messages[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useLocale = () => useContext(LocaleContext);
