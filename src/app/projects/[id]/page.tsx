import { portfolioData } from "@/data/portfolio"
import { slugify } from "@/lib/utils"
import ProjectDetailClient from "@/components/sections/ProjectDetailClient"

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: slugify(project.title),
  }))
}

export default function ProjectDetailPage() {
  return <ProjectDetailClient />
}
