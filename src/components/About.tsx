"use client";
import { useLocale } from "@/i18n/LocaleProvider";

export default function About() {
  const { t } = useLocale();
  return (
    <section id="about" aria-label="About">
      <div className="section-sticky-label">{t.nav.about}</div>
      <div className="space-y-4 text-[15px] leading-[1.7] text-[var(--text-muted)]">
        {t.about.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
