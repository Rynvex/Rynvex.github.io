"use client";
import { useLocale } from "@/i18n/LocaleProvider";
import { useDesign } from "@/lib/design";
import { DESIGNS, designMeta } from "@/lib/designs";

export default function DesignLab() {
  const { t, locale } = useLocale();
  const { design, setDesign } = useDesign();

  return (
    <section id="design-lab" aria-label="Design Lab">
      <div className="section-sticky-label">{t.designLab.label}</div>
      <p className="text-[15px] leading-[1.7] text-[var(--text-muted)] mb-6 max-w-xl">
        {t.designLab.intro}
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        {DESIGNS.map((id) => {
          const meta = designMeta[id];
          const active = id === design;
          return (
            <button
              key={id}
              onClick={() => setDesign(id)}
              className="card p-5 text-left relative"
              style={active ? { borderColor: "var(--accent)" } : undefined}
              aria-pressed={active}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-1.5">
                  {meta.swatch.map((c) => (
                    <span
                      key={c}
                      className="w-4 h-4 rounded-full border border-[var(--border)]"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                {active && (
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border border-[var(--accent)] text-[var(--accent)]">
                    {t.designLab.current}
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-baseline gap-2 flex-wrap">
                <h3 className="text-[17px] font-semibold text-[var(--text)]">
                  {meta.name}
                </h3>
                <span className="text-[11px] font-mono text-[var(--text-subtle)]">
                  {meta.source}
                </span>
              </div>
              <p className="mt-1 text-[13px] text-[var(--text-muted)]">
                {meta.tagline[locale]}
              </p>
              <p className="mt-3 text-[12px] text-[var(--text-subtle)] leading-[1.65]">
                {meta.description[locale]}
              </p>
              <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-end justify-between">
                <span className="font-mono text-[11px] text-[var(--text-subtle)]">
                  {meta.fontFamily}
                </span>
                <span
                  className="text-[32px] leading-none font-semibold tracking-tight text-[var(--text)]"
                  style={{ fontFamily: `${meta.fontVar}, sans-serif` }}
                >
                  {meta.specimen}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
