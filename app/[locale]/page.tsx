import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import RDGrid from "@/components/features/RDGrid";
import ProjectsGrid from "@/components/features/ProjectsGrid";
import PartnersGrid from "@/components/features/PartnersGrid";
import TeamSection from "@/components/sections/TeamSection";
import ContactForm from "@/components/features/ContactForm";
import { sanityFetch } from "@/sanity/lib/client";
import { HomePageData } from "@/types/sanity";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";

export default async function Home({ params }: { params: { locale: Locale } }) {
  const { locale } = await params;

  const data = await sanityFetch<HomePageData>({ 
    query: HOME_PAGE_QUERY, 
    params: { lang: locale } 
  });
  
  console.log("Fetched home page data:", data);

  return (
    <main className="min-h-screen bg-white">
      <Hero data={data.hero} />
      <AboutSection data={data.about} />
      <RDGrid data={data.rnd} />
      <ProjectsGrid data={data.projectSection} />
      <PartnersGrid data={data.partners} />
      <TeamSection data={data.team} />
      <ContactForm />
    </main>
  );
}