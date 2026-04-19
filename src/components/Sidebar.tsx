"use client";
import { useEffect, useState } from "react";
import { Download, Github, Linkedin, Mail, Palette } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { LOCALES, type Locale } from "@/i18n/messages";
import { useDesign } from "@/lib/design";
import { usePalette } from "@/lib/palette";
import { designMeta } from "@/lib/designs";

const SECTIONS = [
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "design-lab",
  "contact",
] as const;

export default function Sidebar() {
  const { t, locale, setLocale } = useLocale();
  const { design } = useDesign();
  const { setOpen } = usePalette();
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const navItems: { id: string; label: string }[] = [
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "projects", label: t.nav.projects },
    { id: "skills", label: t.nav.skills },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <aside className="md:sticky md:top-0 md:h-screen md:max-h-screen md:py-24 py-16 flex flex-col justify-between gap-12">
      <div>
        <h1 className="display text-[clamp(36px,5vw,56px)] text-[var(--text)] leading-[1.05]">
          {t.hero.name}
        </h1>
        <p className="mt-3 text-[18px] md:text-[20px] text-[var(--text)] font-medium max-w-md leading-snug">
          {t.hero.tagline}
        </p>
        <p className="mt-4 text-[14px] text-[var(--text-muted)] max-w-sm leading-[1.7]">
          {t.hero.bio}
        </p>

        <div className="mt-6 inline-flex items-center gap-2.5 px-2.5 py-1 rounded-full border border-[var(--border)] bg-[var(--card-bg)]">
          <span className="status-dot" />
          <span className="text-[12px] text-[var(--text-muted)] font-medium">
            {t.hero.status}
          </span>
        </div>

        <nav className="mt-12 hidden md:block" aria-label="In-page">
          <ul className="space-y-2">
            {navItems.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={`nav-link ${active === n.id ? "is-active" : ""}`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${t.contact.email}`}
            aria-label="Email"
            className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/Rynvex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/changliwei"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="/resume.pdf"
            download
            className="ml-1 inline-flex items-center gap-1.5 text-[12px] font-mono text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
          >
            <Download size={14} />
            {t.hero.ctaResume}
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-[var(--border)] bg-[var(--card-bg)] text-[11px] font-mono text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-strong)] transition-colors"
            aria-label="Open design palette"
          >
            <Palette size={12} />
            <span>
              {t.designLab.trigger} · {designMeta[design].name}
            </span>
            <kbd className="text-[10px] opacity-60 ml-0.5">⌘K</kbd>
          </button>
          <Switch
            aria-label="language"
            options={LOCALES.map((l) => ({ v: l.code, label: l.label }))}
            value={locale}
            onChange={(v) => setLocale(v as Locale)}
          />
        </div>
      </div>
    </aside>
  );
}

function Switch<T extends string>({
  options,
  value,
  onChange,
  "aria-label": ariaLabel,
}: {
  options: { v: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  "aria-label"?: string;
}) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="flex items-center rounded-full border border-[var(--border)] bg-[var(--card-bg)] p-0.5"
    >
      {options.map((o) => {
        const active = o.v === value;
        return (
          <button
            key={o.v}
            onClick={() => onChange(o.v)}
            className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-medium transition-colors ${
              active
                ? "bg-[var(--accent-bg)] text-white"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
