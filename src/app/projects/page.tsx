import type { Metadata } from "next"
import ProjectsExplorer from "./ProjectsExplorer"

export const metadata: Metadata = {
  title: "Projects",
  description: "AI, full-stack, blockchain, quantum and creative technology projects by Sahil Khan, with code and live links.",
  alternates: { canonical: "/projects/" },
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6">
      <h1 className="font-display text-[clamp(3rem,9vw,7rem)] font-bold leading-[0.9] tracking-[-0.045em]">Projects</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        Everything I have built that is worth showing, from company work to weekend experiments. Search by name, or filter by area and technology.
      </p>
      <ProjectsExplorer />
    </div>
  )
}
