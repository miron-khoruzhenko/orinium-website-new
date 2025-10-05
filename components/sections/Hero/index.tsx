import ButtonLink from "@/components/ui/Button"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"

export default async function Hero() {
  const t = await getTranslations("home")

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-sm font-medium tracking-wider uppercase mb-6">{t("hero.slogan")}</p>

        <h1 className="font-display font-bold text-7xl sm:text-7xl lg:text-8xl uppercase leading-tight mb-4 max-w-5xl mx-auto">
          <span className="">{t("hero.title")}</span> <br />
        </h1>
        <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl mb-12 leading-tight">{t("hero.subtitle")}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 max-w-md mx-auto">
          <ButtonLink href="#projects" color="primary">
            {t("hero.cta1")}
          </ButtonLink>
          <ButtonLink href="#contact" color="secondary">
            {t("hero.cta2")}
          </ButtonLink>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs uppercase tracking-wider">{t("hero.scroll")}</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  )
}
