"use client";
import { useLocale } from "@/i18n/LocaleProvider";

export default function Education() {
  const { t } = useLocale();
  return (
    <section id="education" aria-label="Education">
      <div className="section-sticky-label">{t.education.label}</div>

      <div className="space-y-2">
        <div className="row grid grid-cols-[90px_1fr] md:grid-cols-[120px_1fr] gap-4 md:gap-6">
          <time className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-subtle)] pt-1">
            {t.education.period}
          </time>
          <div>
            <h3 className="text-[15px] font-semibold text-[var(--text)] leading-snug">
              {t.education.degree}
              <span className="text-[var(--text-muted)]"> · </span>
              <span className="text-[var(--accent)]">{t.education.school}</span>
            </h3>
            <p className="mt-3 text-[11px] font-mono uppercase tracking-wider text-[var(--text-subtle)]">
              {t.education.thesisLabel}
            </p>
            <p className="mt-1 text-[14px] text-[var(--text)] font-medium">
              {t.education.thesis}
            </p>
            <p className="mt-1 text-[14px] text-[var(--text-muted)] leading-[1.7]">
              {t.education.thesisDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
