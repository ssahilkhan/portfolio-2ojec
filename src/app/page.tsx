import Hero from "@/components/home/Hero"
import About from "@/components/home/About"
import FeaturedProjects from "@/components/home/FeaturedProjects"
import AIMLLab from "@/components/home/AIMLLab"
import CreatorStudio from "@/components/home/CreatorStudio"
import LiveProjects from "@/components/home/LiveProjects"
import TechArsenal from "@/components/home/TechArsenal"
import GitHubActivity from "@/components/home/GitHubActivity"
import Contact from "@/components/home/Contact"

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <AIMLLab />
      <CreatorStudio />
      <LiveProjects />
      <TechArsenal />
      <GitHubActivity />
      <Contact />
    </>
  )
}
