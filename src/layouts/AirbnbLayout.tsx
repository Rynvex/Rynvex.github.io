"use client";
import {
  Search,
  Heart,
  Menu,
  Palette,
  ArrowUpRight,
  Download,
  Bot,
  Ship,
  Factory,
  Cloud,
  TrendingUp,
  BookOpen,
  Lock,
} from "lucide-react";
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

const PROJECT_ICON: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  "01": Bot,
  "02": Ship,
  "03": Factory,
  "04": Cloud,
  "05": TrendingUp,
  "06": BookOpen,
};

export default function AirbnbLayout() {
  const { t, locale, setLocale } = useLocale();
  const { design } = useDesign();
  const { setOpen } = usePalette();

  return (
    <>
      <header
        className="sticky top-0 z-40 border-b border-[var(--border)]"
        style={{ background: "var(--bg)" }}
      >
        <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-1.5">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" style={{ color: "var(--accent)" }}>
              <path d="M14 2c-3 0-5.5 2-7 5l-4 10c-1 2 0 4 2 5 2 1 4 0 5-1l4-6 4 6c1 1 3 2 5 1 2-1 3-3 2-5l-4-10c-1.5-3-4-5-7-5z" opacity="0.9" />
            </svg>
            <span className="font-bold text-[15px] text-[var(--accent)]">chang.dev</span>
          </a>

          <div
            className="hidden md:flex items-center rounded-full py-1.5 pl-5 pr-1.5 cursor-pointer"
            style={{ boxShadow: "var(--shadow-card)", background: "var(--bg)" }}
            onClick={() => (window.location.hash = "#projects")}
          >
            <span className="text-[13px] font-semibold pr-4 mr-4 border-r border-[var(--border)]">
              {t.nav.projects}
            </span>
            <span className="text-[13px] font-semibold pr-4 mr-4 border-r border-[var(--border)]">
              {t.nav.experience}
            </span>
            <span className="text-[13px] text-[var(--text-muted)] pr-4">
              {t.nav.about}
            </span>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center ml-2"
              style={{ background: "var(--accent)" }}
            >
              <Search size={14} color="white" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-1.5 h-10 px-3 rounded-full border border-[var(--border)] text-[12px] font-semibold hover:shadow-sm transition-shadow"
            >
              <Palette size={14} />
              {designMeta[design].name}
            </button>
            <div className="flex items-center gap-2 h-10 px-2 rounded-full border border-[var(--border)]">
              <Menu size={14} />
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-bold"
                style={{ background: "var(--text)" }}
              >
                CL
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-6 pb-4 overflow-x-auto">
          <div className="flex items-center gap-7 text-[12px] font-semibold text-[var(--text-muted)]">
            {(["all", "cv", "llm", "side", "research"] as const).map((f, i) => (
              <button
                key={f}
                className={`py-3 whitespace-nowrap transition-colors ${
                  i === 0 ? "text-[var(--text)] border-b-2 border-[var(--text)]" : "hover:text-[var(--text)]"
                }`}
                type="button"
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main id="top" className="max-w-6xl mx-auto px-6">
        <section className="py-10 md:py-14">
          <div
            className="inline-flex items-center gap-2.5 mb-6 px-3 py-1 rounded-full"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <span className="status-dot" />
            <span className="text-[12px] font-semibold">{t.hero.status}</span>
          </div>
          <h1 className="display text-[clamp(36px,5vw,56px)] leading-[1.15] max-w-3xl">
            {t.hero.name}
          </h1>
          <p className="mt-4 text-[clamp(17px,1.8vw,20px)] text-[var(--text-muted)] max-w-2xl leading-snug">
            {t.hero.tagline}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 h-11 px-5 rounded-lg text-[14px] font-semibold text-white"
              style={{ background: "var(--accent)" }}
            >
              <Download size={16} />
              {t.hero.ctaResume}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center h-11 px-5 rounded-lg text-[14px] font-semibold border border-[var(--border)]"
            >
              {t.hero.ctaContact}
            </a>
          </div>
        </section>

        <section id="projects" className="py-8">
          <h2 className="h1 text-[clamp(22px,2.5vw,28px)] leading-tight mb-6">
            {t.projects.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.projects.items.map((p) => (
              <AirbnbCard key={p.id} p={p} />
            ))}
          </div>
        </section>

        <section className="py-16 space-y-20">
          <About />
          <Experience />
          <Skills />
          <Education />
          <DesignLab />
          <Contact />
        </section>

        <div className="pb-8 flex items-center justify-between border-t border-[var(--border)] pt-6">
          <div className="flex items-center rounded-full border border-[var(--border)] p-0.5">
            {LOCALES.map((l) => (
              <button
                key={l.code}
                onClick={() => setLocale(l.code as Locale)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-mono transition-colors ${
                  locale === l.code ? "bg-[var(--text)] text-white" : "text-[var(--text-muted)]"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

function AirbnbCard({ p }: { p: Project }) {
  const Icon = PROJECT_ICON[p.id];
  const useImageAsHero = !p.confidential && p.image;

  return (
    <article
      className="rounded-[20px] overflow-hidden group transition-transform hover:-translate-y-0.5"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div
        className="aspect-[5/4] relative flex items-center justify-center overflow-hidden"
        style={{
          background: useImageAsHero
            ? "transparent"
            : "linear-gradient(135deg, color-mix(in srgb, var(--accent) 22%, #fff7f9), color-mix(in srgb, var(--accent) 6%, #fff0f3))",
        }}
      >
        {useImageAsHero ? (
          <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
        ) : Icon ? (
          <Icon size={72} strokeWidth={1.5} />
        ) : (
          <span className="font-mono text-[56px] font-bold" style={{ color: "var(--accent)" }}>
            {p.id}
          </span>
        )}
        <span
          className="absolute top-3 left-3 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider"
          style={{ background: "rgba(255,255,255,0.92)", color: "var(--text)" }}
        >
          {p.id}
        </span>
        {p.confidential ? (
          <div
            className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.92)" }}
            aria-label="Confidential"
          >
            <Lock size={12} style={{ color: "var(--text)" }} />
          </div>
        ) : (
          <button
            className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center bg-white/80 hover:bg-white"
            aria-label="Save"
            onClick={(e) => e.stopPropagation()}
          >
            <Heart size={14} style={{ color: "var(--accent)" }} />
          </button>
        )}
      </div>
      <div className="p-5 bg-[var(--bg)]">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[15px] font-semibold leading-snug">{p.title}</h3>
          <ArrowUpRight
            size={14}
            className="text-[var(--text-muted)] shrink-0 mt-0.5 transition-transform group-hover:rotate-45"
          />
        </div>
        {p.tag && (
          <p className="mt-1 text-[12px] font-semibold" style={{ color: "var(--accent)" }}>
            · {p.tag}
          </p>
        )}
        <p className="mt-1.5 text-[13px] text-[var(--text-muted)] leading-snug line-clamp-2">
          {p.pitch}
        </p>
        <div className="mt-3 flex flex-wrap gap-1">
          {p.stack.slice(0, 3).map((s) => (
            <span
              key={s}
              className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium"
              style={{ background: "var(--surface)", color: "var(--text-muted)" }}
            >
              {s}
            </span>
          ))}
          {p.stack.length > 3 && (
            <span
              className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium"
              style={{ background: "var(--surface)", color: "var(--text-muted)" }}
            >
              +{p.stack.length - 3}
            </span>
          )}
        </div>

        {p.confidential && (p.company || (p.news && p.news.length)) && (
          <div className="mt-3 pt-3 border-t border-[var(--border)] space-y-1.5">
            {p.company && (
              <div className="flex items-center gap-1.5 text-[11px] text-[var(--text-muted)]">
                <Lock size={10} />
                <span className="font-semibold">{p.company}</span>
              </div>
            )}
            {p.news?.map((n) => (
              <a
                key={n.url}
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[11px] font-semibold hover:underline"
                style={{ color: "var(--accent)" }}
              >
                {n.label}
                <ArrowUpRight size={10} />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
