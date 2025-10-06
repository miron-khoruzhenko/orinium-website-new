import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import RDGrid from "@/components/features/RDGrid";
import ProjectsGrid from "@/components/features/ProjectsGrid";
import PartnersGrid from "@/components/features/PartnersGrid";
import TeamSection from "@/components/sections/TeamSection";
import ContactForm from "@/components/features/ContactForm";

export default async function Home({ params }: { params: { locale: Locale } }) {
  const { locale } = await params;
  console.log("Rendering home page for locale:", locale);

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AboutSection />
      <RDGrid />
      <ProjectsGrid locale={locale} />
      <PartnersGrid />
      <TeamSection />
      <ContactForm />
    </main>
  );
}