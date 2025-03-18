import Hero from "./components/Hero"
import DataStats from "./components/DataStats"
import ProjectsShowcase from "./components/ProjectsShowcase"
import SkillsShowcase from "./components/SkillsShowcase"
import ContactForm from "./components/ContactForm"

export default function Home() {
  return (
    <>
      <Hero />
      <DataStats />
      <ProjectsShowcase />
      <SkillsShowcase />
      <ContactForm />
    </>
  )
}

