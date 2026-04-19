"use client";
import { useEffect } from "react";
import { X } from "lucide-react";
import { useDesign } from "@/lib/design";
import { usePalette } from "@/lib/palette";
import { useLocale } from "@/i18n/LocaleProvider";
import { DESIGNS, designMeta } from "@/lib/designs";

export default function CommandPalette() {
  const { design, setDesign } = useDesign();
  const { open, setOpen } = usePalette();
  const { locale, t } = useLocale();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[12vh] px-4"
      role="dialog"
      aria-modal="true"
      aria-label={t.designLab.label}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={() => setOpen(false)}
      />
      <div className="relative w-full max-w-lg rounded-[12px] border border-[var(--border-strong)] bg-[var(--surface)] shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)]">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
            {t.designLab.label}
          </span>
          <button
            onClick={() => setOpen(false)}
            className="text-[var(--text-muted)] hover:text-[var(--text)]"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>
        <ul className="p-2 max-h-[60vh] overflow-auto">
          {DESIGNS.map((id) => {
            const meta = designMeta[id];
            const active = id === design;
            return (
              <li key={id}>
                <button
                  onClick={() => {
                    setDesign(id);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                    active ? "bg-[var(--card-hover)]" : "hover:bg-[var(--card-hover)]"
                  }`}
                >
                  <div className="flex gap-1 shrink-0">
                    {meta.swatch.map((c) => (
                      <span
                        key={c}
                        className="w-3 h-3 rounded-full border border-[var(--border)]"
                        style={{ background: c }}
                      />
                    ))}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[14px] font-semibold text-[var(--text)]">
                      {meta.name}
                      <span className="ml-2 text-[11px] font-mono font-normal text-[var(--text-subtle)]">
                        {meta.source}
                      </span>
                    </div>
                    <div className="text-[12px] text-[var(--text-muted)] mt-0.5 truncate">
                      {meta.tagline[locale]}
                    </div>
                  </div>
                  {active && (
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border border-[var(--accent)] text-[var(--accent)] shrink-0">
                      {t.designLab.current}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="px-4 py-2 border-t border-[var(--border)] text-[11px] font-mono text-[var(--text-subtle)] flex items-center justify-between">
          <span>{t.designLab.more}</span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded border border-[var(--border)] text-[10px]">Esc</kbd>
          </span>
        </div>
      </div>
    </div>
  );
}
