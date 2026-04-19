"use client";
import { Download, Lock, Palette } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { LOCALES, type Locale } from "@/i18n/messages";
import { useDesign } from "@/lib/design";
import { usePalette } from "@/lib/palette";
import { designMeta } from "@/lib/designs";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import DesignLab from "@/components/DesignLab";
import Footer from "@/components/Footer";

const LIGHT = { bg: "#f5f5f7", text: "#1d1d1f", muted: "rgba(0,0,0,0.72)", subtle: "rgba(0,0,0,0.48)", link: "#0066cc" };
const DARK = { bg: "#000000", text: "#ffffff", muted: "rgba(255,255,255,0.72)", subtle: "rgba(255,255,255,0.48)", link: "#2997ff" };

export default function AppleLayout() {
  const { t, locale, setLocale } = useLocale();
  const { design } = useDesign();
  const { setOpen } = usePalette();

  return (
    <>
      <header
        className="sticky top-0 z-40"
        style={{
          background: "rgba(0,0,0,0.72)",
          backdropFilter: "saturate(180%) blur(20px)",
          WebkitBackdropFilter: "saturate(180%) blur(20px)",
        }}
      >
        <nav className="max-w-[980px] mx-auto px-4 h-12 flex items-center justify-between text-[12px] text-white/85">
          <a href="#top" className="font-semibold text-white">CL</a>
          <ul className="hidden md:flex items-center gap-6">
            <li><a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a></li>
            <li><a href="#experience" className="hover:text-white transition-colors">{t.nav.experience}</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors">{t.nav.projects}</a></li>
            <li><a href="#skills" className="hover:text-white transition-colors">{t.nav.skills}</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a></li>
          </ul>
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-1 text-white/70 hover:text-white"
          >
            <Palette size={12} />
            <span className="text-[11px]">{designMeta[design].name}</span>
          </button>
        </nav>
      </header>

      {/* 1. HERO — black full viewport */}
      <section
        id="top"
        className="min-h-[92vh] flex flex-col items-center justify-center text-center px-6"
        style={{ background: DARK.bg, color: DARK.text }}
      >
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] mb-8" style={{ color: DARK.subtle }}>
          {t.hero.label}
        </div>
        <h1 className="display text-[clamp(48px,11vw,104px)] leading-[1.05]" style={{ letterSpacing: "-0.5px", fontWeight: 600 }}>
          {t.hero.name}
        </h1>
        <p className="mt-6 text-[clamp(20px,3vw,32px)] font-normal max-w-2xl leading-tight">{t.hero.tagline}</p>
        <p className="mt-4 text-[17px] max-w-lg" style={{ color: DARK.muted }}>{t.hero.bio}</p>
        <div className="mt-10 inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-white/15">
          <span className="status-dot" />
          <span className="text-[13px]" style={{ color: DARK.muted }}>{t.hero.status}</span>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#projects" className="btn btn-primary">{t.hero.ctaProjects} ›</a>
          <a
            href="/resume.pdf"
            download
            className="btn"
            style={{ background: "transparent", border: `1px solid ${DARK.text}`, color: DARK.text }}
          >
            <Download size={16} />
            {t.hero.ctaResume}
          </a>
        </div>
      </section>

      {/* 2. ABOUT — light alternate */}
      <section
        id="about"
        className="min-h-[70vh] flex items-center justify-center px-6 py-24"
        style={{ background: LIGHT.bg, color: LIGHT.text }}
      >
        <div className="max-w-[720px] w-full">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] mb-8" style={{ color: LIGHT.subtle }}>
            {t.nav.about}
          </div>
          <div className="space-y-6 text-[clamp(18px,2vw,22px)] leading-[1.47]">
            {t.about.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE — dark; each role as a centered block */}
      <section
        id="experience"
        className="py-24 px-6"
        style={{ background: DARK.bg, color: DARK.text }}
      >
        <div className="max-w-[980px] mx-auto text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] mb-5" style={{ color: DARK.subtle }}>
            {t.nav.experience}
          </div>
          <h2 className="display text-[clamp(32px,5vw,56px)] leading-[1.07]" style={{ fontWeight: 600, letterSpacing: "-0.3px" }}>
            {t.experience.title}
          </h2>
          <div className="mt-20 space-y-20">
            {t.experience.items.map((item, i) => (
              <div key={i}>
                <div className="font-mono text-[12px]" style={{ color: DARK.subtle }}>{item.period}</div>
                <h3 className="mt-3 text-[clamp(24px,3.2vw,36px)] leading-tight" style={{ fontWeight: 600, letterSpacing: "-0.2px" }}>
                  {item.role}
                </h3>
                <p className="text-[18px] mt-1" style={{ color: DARK.link }}>{item.company}</p>
                <ul className="mt-6 space-y-2.5 max-w-2xl mx-auto text-[17px] leading-[1.47]" style={{ color: DARK.muted }}>
                  {item.bullets.map((b, j) => (<li key={j}>{b}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROJECTS — intro scene + one scene per project, alternating */}
      <section id="projects" aria-label={t.nav.projects}>
        <div
          className="py-28 px-6 text-center"
          style={{ background: LIGHT.bg, color: LIGHT.text }}
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] mb-5" style={{ color: LIGHT.subtle }}>
            {t.nav.projects}
          </div>
          <h2 className="display text-[clamp(32px,5vw,56px)] leading-[1.07]" style={{ fontWeight: 600, letterSpacing: "-0.3px" }}>
            {t.projects.title}
          </h2>
        </div>

        {t.projects.items.map((p, i) => {
          const s = i % 2 === 0 ? DARK : LIGHT;
          return (
            <article
              key={p.id}
              className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24"
              style={{ background: s.bg, color: s.text }}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] mb-5" style={{ color: s.subtle }}>
                {p.id}{p.tag ? ` · ${p.tag}` : ""}
              </div>
              <h3
                className="text-[clamp(28px,5vw,56px)] max-w-3xl leading-[1.07]"
                style={{ fontWeight: 600, letterSpacing: "-0.3px" }}
              >
                {p.title}
              </h3>
              <p
                className="mt-6 text-[clamp(18px,2vw,22px)] max-w-xl leading-[1.4]"
                style={{ color: s.muted }}
              >
                {p.pitch}
              </p>
              {!p.confidential && p.image && (
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="mt-8 w-full max-w-2xl rounded-xl"
                  style={{
                    boxShadow: "rgba(0,0,0,0.22) 3px 5px 30px 0px",
                    border: `1px solid ${s.subtle}`,
                  }}
                />
              )}
              <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 max-w-lg">
                {p.stack.map((tech) => (
                  <span key={tech} className="text-[13px] font-mono" style={{ color: s.subtle }}>
                    {tech}
                  </span>
                ))}
              </div>
              {p.confidential && p.company && (
                <div
                  className="mt-10 inline-flex items-center gap-2 text-[13px]"
                  style={{ color: s.muted }}
                >
                  <Lock size={12} />
                  <span>{p.company}</span>
                </div>
              )}
              {p.news && p.news.length > 0 && (
                <div className="mt-4 flex flex-col items-center gap-1.5">
                  {p.news.map((n) => (
                    <a
                      key={n.url}
                      href={n.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] hover:underline"
                      style={{ color: s.link }}
                    >
                      {n.label} ›
                    </a>
                  ))}
                </div>
              )}
              {!p.confidential && (
                <a
                  href="#contact"
                  className="mt-10 inline-flex items-center gap-1 text-[15px]"
                  style={{ color: s.link }}
                >
                  Learn more <span>›</span>
                </a>
              )}
            </article>
          );
        })}
      </section>

      {/* 5. SKILLS — light */}
      <section className="py-24 px-6" style={{ background: LIGHT.bg, color: LIGHT.text }}>
        <div className="max-w-[980px] mx-auto text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] mb-5" style={{ color: LIGHT.subtle }}>
            {t.nav.skills}
          </div>
          <h2 className="display text-[clamp(32px,5vw,56px)] leading-[1.07] mb-12" style={{ fontWeight: 600, letterSpacing: "-0.3px" }}>
            {t.skills.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {t.skills.categories.map((cat) => (
              <div key={cat.name} className="p-6 rounded-lg" style={{ background: "#ffffff" }}>
                <div className="font-mono text-[11px] uppercase tracking-wider mb-3" style={{ color: LIGHT.subtle }}>
                  {cat.name}
                </div>
                <div className="space-y-1">
                  {cat.items.map((x) => (
                    <div key={x} className="text-[15px]" style={{ color: LIGHT.text }}>{x}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. EDUCATION + THESIS — dark centered */}
      <section className="py-28 px-6" style={{ background: DARK.bg, color: DARK.text }}>
        <div className="max-w-[720px] mx-auto text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] mb-5" style={{ color: DARK.subtle }}>
            {t.education.label}
          </div>
          <div className="font-mono text-[12px] mb-3" style={{ color: DARK.subtle }}>{t.education.period}</div>
          <h3 className="text-[clamp(24px,3vw,36px)] leading-tight" style={{ fontWeight: 600 }}>
            {t.education.degree}
          </h3>
          <p className="mt-2 text-[18px]" style={{ color: DARK.link }}>{t.education.school}</p>
          <div className="mt-12 pt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="font-mono text-[11px] uppercase tracking-wider mb-3" style={{ color: DARK.subtle }}>
              {t.education.thesisLabel}
            </div>
            <p className="text-[clamp(18px,2.2vw,24px)] italic leading-snug">{t.education.thesis}</p>
            <p className="mt-4 text-[15px] max-w-lg mx-auto" style={{ color: DARK.muted }}>{t.education.thesisDesc}</p>
          </div>
        </div>
      </section>

      {/* 7. DESIGN LAB — light */}
      <section className="py-24 px-6" style={{ background: LIGHT.bg, color: LIGHT.text }}>
        <div className="max-w-[980px] mx-auto">
          <DesignLab />
        </div>
      </section>

      {/* 8. CONTACT — black, full-viewport */}
      <section
        id="contact"
        className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24"
        style={{ background: DARK.bg, color: DARK.text }}
      >
        <h2 className="display text-[clamp(40px,7vw,72px)] leading-[1.07]" style={{ fontWeight: 600, letterSpacing: "-0.3px" }}>
          {t.contact.title}
        </h2>
        <p className="mt-6 text-[17px] max-w-xl" style={{ color: DARK.muted }}>{t.contact.body}</p>
        <a href={`mailto:${t.contact.email}`} className="btn btn-primary mt-10">{t.contact.email}</a>
        <div className="mt-16 flex items-center rounded-md border border-white/20 p-0.5">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              onClick={() => setLocale(l.code as Locale)}
              className={`px-2.5 py-1 rounded-sm text-[11px] font-mono transition-colors ${
                locale === l.code ? "bg-white text-black" : "text-white/60"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
        <div className="mt-8"><Footer /></div>
      </section>
    </>
  );
}
