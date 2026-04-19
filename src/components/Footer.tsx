"use client";
import { useLocale } from "@/i18n/LocaleProvider";
import { useDesign } from "@/lib/design";

export default function Footer() {
  const { t } = useLocale();
  const { design } = useDesign();
  return (
    <footer className="pt-8 mt-4 text-[11px] font-mono text-[var(--text-subtle)] leading-relaxed">
      <p>
        © 2026 Chang Li-Wei · {t.footer.built} ·{" "}
        <span className="text-[var(--text-muted)]">design: {design}</span>
      </p>
      <p className="mt-1">
        Inspired by{" "}
        <a
          href="https://brittanychiang.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--accent)] transition-colors"
        >
          brittanychiang.com
        </a>
        .
      </p>
    </footer>
  );
}
