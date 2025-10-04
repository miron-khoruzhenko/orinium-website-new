import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import AboutSection from "@/components/sections/AboutSection"
import RDGrid from "@/components/features/RDGrid"
import ProjectsGrid from "@/components/features/ProjectsGrid"
import PartnersGrid from "@/components/features/PartnersGrid"
import TeamSection from "@/components/sections/TeamSection"
import ContactForm from "@/components/features/ContactForm"
import Footer from "@/components/layout/Footer"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
// import { loadNamespaces } from "@/i18n/loaders"
import { loadRouteNamespace } from "@/i18n/loaders"

export default async function Home({ params: { locale } }: { params: { locale: Locale } }) {
  const base = await getMessages();                     // { common }
  // const extra = await loadNamespaces(locale, ["home"]); // { home }
  const extra = await loadRouteNamespace(locale, "home"); // { home }

  return (
    <NextIntlClientProvider messages={{ ...base, ...extra }}>
      <main className="min-h-screen bg-white">
        <Hero />
        <AboutSection />
        <RDGrid />
        <ProjectsGrid />
        <PartnersGrid />
        <TeamSection />
        <ContactForm />
      </main>
    </NextIntlClientProvider>

  )
}
