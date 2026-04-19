"use client";
import { ArrowUpRight, Download, Github, Linkedin, Lock, Mail, Palette } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { LOCALES, type Locale, messages } from "@/i18n/messages";
import { useDesign } from "@/lib/design";
import { usePalette } from "@/lib/palette";
import { designMeta } from "@/lib/designs";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import DesignLab from "@/components/DesignLab";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

type Project = (typeof messages)["en"]["projects"]["items"][number];

export default function VercelLayout() {
  const { t, locale, setLocale } = useLocale();
  const { design } = useDesign();
  const { setOpen } = usePalette();

  return (
    <>
      <header
        className="sticky top-0 z-40 border-b border-[var(--border)]"
        style={{
          background: "color-mix(in srgb, var(--bg) 80%, transparent)",
          backdropFilter: "blur(12px)",
        }}
      >
        <nav className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2 font-mono text-[13px] font-semibold text-[var(--text)]">
            <svg width="16" height="14" viewBox="0 0 16 14" fill="currentColor"><path d="M8 1L15 13H1L8 1Z" /></svg>
            changliwei
          </a>
          <ul className="hidden md:flex items-center gap-6 text-[13px] text-[var(--text-muted)]">
            <li><a href="#about" className="hover:text-[var(--text)] transition-colors">{t.nav.about}</a></li>
            <li><a href="#experience" className="hover:text-[var(--text)] transition-colors">{t.nav.experience}</a></li>
            <li><a href="#projects" className="hover:text-[var(--text)] transition-colors">{t.nav.projects}</a></li>
          </ul>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md border border-[var(--border)] text-[11px] font-mono text-[var(--text-muted)] hover:text-[var(--text)]"
            >
              <Palette size={12} />
              {designMeta[design].name}
            </button>
            <a
              href="#contact"
              className="inline-flex items-center h-8 px-3 rounded-md bg-[var(--accent-bg)] text-white text-[12px] font-medium"
            >
              {t.nav.contact} →
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="max-w-3xl mx-auto px-6">
        <section className="pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="inline-flex items-center gap-2.5 mb-8 px-2.5 py-1 rounded-full border border-[var(--border)]">
            <span className="status-dot" />
            <span className="text-[12px] text-[var(--text-muted)] font-medium">{t.hero.status}</span>
          </div>
          <h1 className="display text-[clamp(56px,9vw,104px)] leading-[0.95]">{t.hero.name}</h1>
          <p className="mt-8 text-[clamp(20px,2.5vw,28px)] text-[var(--text)] font-medium leading-tight max-w-2xl">
            {t.hero.tagline}
          </p>
          <p className="mt-6 text-[17px] leading-[1.65] text-[var(--text-muted)] max-w-xl">{t.hero.bio}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="/resume.pdf" download className="btn btn-primary">
              <Download size={16} />
              {t.hero.ctaResume}
            </a>
            <a href="#projects" className="btn btn-ghost">{t.hero.ctaProjects} →</a>
          </div>
          <div className="mt-10 flex items-center gap-5 text-[var(--text-muted)]">
            <a href={`mailto:${t.contact.email}`} aria-label="Email" className="hover:text-[var(--text)]"><Mail size={18} /></a>
            <a href="https://github.com/HEroKuma" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[var(--text)]"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/changliwei" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[var(--text)]"><Linkedin size={18} /></a>
            <div className="ml-auto flex items-center rounded-md border border-[var(--border)] p-0.5 bg-[var(--card-bg)]">
              {LOCALES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLocale(l.code as Locale)}
                  className={`px-2 py-1 rounded-sm text-[11px] font-mono transition-colors ${
                    locale === l.code ? "bg-[var(--accent-bg)] text-white" : "text-[var(--text-muted)]"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="space-y-24 pb-20 border-t border-[var(--border)] pt-20">
          <About />
          <hr className="border-[var(--border)]" />
          <Experience />
          <hr className="border-[var(--border)]" />

          <section id="projects" aria-label={t.nav.projects}>
            <div className="section-sticky-label">{t.nav.projects}</div>
            <h2 className="h1 text-[clamp(28px,3vw,40px)] mb-8" style={{ letterSpacing: "-1px" }}>
              {t.projects.title}
            </h2>
            <div className="space-y-4">
              {t.projects.items.map((p) => (
                <VercelProjectCard key={p.id} p={p} />
              ))}
            </div>
          </section>

          <hr className="border-[var(--border)]" />
          <Skills />
          <hr className="border-[var(--border)]" />
          <Education />
          <hr className="border-[var(--border)]" />
          <DesignLab />
          <hr className="border-[var(--border)]" />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}

function VercelProjectCard({ p }: { p: Project }) {
  return (
    <div
      className="group block p-6 rounded-lg transition-[box-shadow,transform] hover:-translate-y-px"
      style={{ boxShadow: "var(--shadow-card)", background: "var(--bg)" }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="font-mono text-[11px] text-[var(--text-subtle)]">project / {p.id}</span>
            {p.tag && (
              <span
                className="font-mono text-[10px] px-2 py-0.5 rounded"
                style={{
                  background: "color-mix(in srgb, var(--accent) 10%, transparent)",
                  color: "var(--accent)",
                }}
              >
                {p.tag}
              </span>
            )}
          </div>
          <h3 className="text-[22px] font-semibold leading-tight" style={{ letterSpacing: "-0.5px" }}>
            {p.title}
          </h3>
          <p className="mt-3 text-[15px] text-[var(--text-muted)] leading-relaxed">{p.pitch}</p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
            {p.stack.map((s) => (
              <span key={s} className="font-mono text-[12px] text-[var(--text-subtle)]">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {p.confidential && (p.company || (p.news && p.news.length)) && (
        <div className="mt-5 pt-4 border-t border-[var(--border)] space-y-2">
          {p.company && (
            <div className="flex items-center gap-2 text-[13px] text-[var(--text-muted)]">
              <Lock size={12} />
              <span>{p.company}</span>
            </div>
          )}
          {p.news?.map((n) => (
            <a
              key={n.url}
              href={n.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[13px] text-[var(--accent)] hover:underline"
            >
              {n.label}
              <ArrowUpRight size={12} />
            </a>
          ))}
        </div>
      )}
      {!p.confidential && p.image && (
        <div className="mt-5 pt-4 border-t border-[var(--border)]">
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className="rounded-md w-full"
            style={{ boxShadow: "var(--shadow-card)" }}
          />
        </div>
      )}
    </div>
  );
}
