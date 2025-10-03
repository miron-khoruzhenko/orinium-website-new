"use client"

import { useTranslations } from "next-intl"

export default function Hero() {
  const t = useTranslations("home")

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-sm font-medium tracking-wider uppercase mb-6">{t("hero.subtitle")}</p>

        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl leading-tight mb-8 max-w-5xl mx-auto">
          {t("hero.title")}
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#projects" className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-900 transition-colors">
            {t("hero.cta1")}
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-black font-medium hover:bg-black hover:text-white transition-colors"
          >
            {t("hero.cta2")}
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-wider">{t("hero.scroll")}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
