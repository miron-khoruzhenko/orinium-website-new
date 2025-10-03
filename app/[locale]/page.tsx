import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import AboutSection from "@/components/AboutSection"
import RDGrid from "@/components/RDGrid"
import ProjectsGrid from "@/components/ProjectsGrid"
import PartnersGrid from "@/components/PartnersGrid"
import TeamSection from "@/components/TeamSection"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <RDGrid />
      <ProjectsGrid />
      <PartnersGrid />
      <TeamSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
