"use client";
import { ArrowUpRight, Lock, Maximize2 } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { useLightbox } from "@/lib/lightbox";

type Item = ReturnType<typeof useLocale>["t"]["projects"]["items"][number];

export default function Projects() {
  const { t } = useLocale();
  return (
    <section id="projects" aria-label="Projects">
      <div className="section-sticky-label">{t.nav.projects}</div>
      <ol className="space-y-2">
        {t.projects.items.map((p) => (
          <ProjectRow key={p.id} p={p} />
        ))}
      </ol>
    </section>
  );
}

function ProjectRow({ p }: { p: Item }) {
  const { openGallery } = useLightbox();
  const hasGallery = !!p.gallery && p.gallery.length > 0;
  const cover = hasGallery ? p.gallery![0].src : p.image;

  const body = (
    <div>
      {p.confidential && (
        <div className="flex items-center gap-2 mb-1.5">
          <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-subtle)]">
            {p.id}
          </span>
        </div>
      )}
      <h3 className="text-[15px] font-semibold leading-snug">
        <span className="arrow-link">
          {p.title}
          <ArrowUpRight size={14} />
        </span>
      </h3>
      {p.tag && <p className="mt-0.5 text-[12px] font-mono text-[var(--accent)]">{p.tag}</p>}
      <p className="mt-2 text-[14px] leading-[1.7] text-[var(--text-muted)]">{p.pitch}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>

      {p.confidential && (p.company || (p.news && p.news.length)) && (
        <div className="mt-3 pt-3 border-t border-[var(--border)] space-y-1.5">
          {p.company && (
            <div className="flex items-center gap-2 text-[12px] text-[var(--text-muted)]">
              <Lock size={11} />
              <span>{p.company}</span>
            </div>
          )}
          {p.news?.map((n) => (
            <a
              key={n.url}
              href={n.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[12px] text-[var(--accent)] hover:underline"
            >
              {n.label}
              <ArrowUpRight size={11} />
            </a>
          ))}
        </div>
      )}
      {!p.confidential && cover && (
        <div className="mt-3 pt-3 border-t border-[var(--border)]">
          {hasGallery ? (
            <button
              type="button"
              onClick={() => openGallery(p.gallery!)}
              className="group relative block w-full overflow-hidden rounded-md border border-[var(--border)] hover:border-[var(--border-strong)] transition-colors"
              aria-label={`Open ${p.title} gallery`}
            >
              <img
                src={cover}
                alt={p.gallery![0].caption}
                loading="lazy"
                className="w-full transition-transform group-hover:scale-[1.02]"
              />
              <span className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center bg-black/55 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={12} />
              </span>
              {p.gallery!.length > 1 && (
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-black/60 text-white text-[10px] font-mono">
                  +{p.gallery!.length - 1} more
                </span>
              )}
            </button>
          ) : (
            <img
              src={cover}
              alt={p.title}
              loading="lazy"
              className="rounded-md border border-[var(--border)] w-full"
            />
          )}
        </div>
      )}
    </div>
  );

  if (p.confidential) {
    return (
      <li>
        <div className="row">{body}</div>
      </li>
    );
  }

  return (
    <li>
      <div className="row grid grid-cols-[90px_1fr] md:grid-cols-[120px_1fr] gap-4 md:gap-6">
        <div
          className="h-[72px] rounded-[6px] flex items-center justify-center font-mono text-[11px] font-medium text-[var(--text-subtle)] border border-[var(--border)]"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in srgb, var(--accent) 10%, transparent), color-mix(in srgb, var(--accent) 2%, transparent))",
          }}
        >
          {p.id}
        </div>
        {body}
      </div>
    </li>
  );
}
