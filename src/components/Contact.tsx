"use client";
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";

export default function Contact() {
  const { t } = useLocale();
  return (
    <section id="contact" aria-label="Contact">
      <div className="section-sticky-label">{t.nav.contact}</div>
      <h2 className="h2 text-[22px] md:text-[26px] text-[var(--text)]">
        {t.contact.title}
      </h2>
      <p className="mt-3 text-[15px] leading-[1.7] text-[var(--text-muted)] max-w-xl">
        {t.contact.body}
      </p>
      <p className="mt-5">
        <a
          href={`mailto:${t.contact.email}`}
          className="arrow-link text-[15px]"
        >
          {t.contact.email}
          <ArrowUpRight size={16} />
        </a>
      </p>
    </section>
  );
}
