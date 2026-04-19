"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";

export default function Skills() {
  const { t } = useLocale();

  return (
    <section id="skills" aria-label="Skills">
      <div className="section-sticky-label">{t.nav.skills}</div>

      <div className="space-y-6">
        {t.skills.categories.map((cat) => (
          <div key={cat.name} className="grid grid-cols-[90px_1fr] md:grid-cols-[120px_1fr] gap-4 md:gap-6">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-subtle)] pt-1">
              {cat.name}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="grid grid-cols-[90px_1fr] md:grid-cols-[120px_1fr] gap-4 md:gap-6 pt-4 border-t border-[var(--border)]">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-subtle)] pt-1">
            {t.skills.langTitle}
          </div>
          <div className="space-y-3">
            {t.skills.languages.map((l) => (
              <div key={l.name}>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-[14px] font-medium text-[var(--text)]">
                    {l.name}
                  </span>
                  <span className="text-[11px] font-mono text-[var(--text-subtle)]">
                    {l.level}
                  </span>
                </div>
                <div className="h-[2px] w-full rounded-full bg-[var(--border)] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${l.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
