"use client";
import { useLocale } from "@/i18n/LocaleProvider";

export default function Experience() {
  const { t } = useLocale();
  return (
    <section id="experience" aria-label="Experience">
      <div className="section-sticky-label">{t.nav.experience}</div>
      <ol className="space-y-2">
        {t.experience.items.map((item, i) => (
          <li key={i}>
            <div className="row grid grid-cols-[90px_1fr] md:grid-cols-[120px_1fr] gap-4 md:gap-6">
              <time className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-subtle)] pt-1">
                {item.period}
              </time>
              <div>
                <h3 className="text-[15px] font-semibold text-[var(--text)] leading-snug">
                  <span>{item.role}</span>
                  <span className="text-[var(--text-muted)]"> · </span>
                  <span className="text-[var(--accent)]">{item.company}</span>
                </h3>
                <ul className="mt-2 space-y-1.5 text-[14px] leading-[1.7] text-[var(--text-muted)]">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="mt-[9px] w-1 h-1 rounded-full bg-[var(--text-subtle)] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
