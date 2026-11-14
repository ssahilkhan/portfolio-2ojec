import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { liveProjects } from "@/data/projects"
import Section from "./Section"

export default function LiveProjects() {
  return (
    <Section id="live" title="Live right now" intro="Deployed and reachable today. Each link was checked before this release.">
      <ul className="border-t border-border">
        {liveProjects.map((p) => (
          <li key={p.slug} className="grid gap-3 border-b border-border py-7 md:grid-cols-[1.1fr_1.4fr_auto] md:items-baseline md:gap-10">
            <Link href={`/projects/${p.slug}/`} className="font-display text-2xl font-semibold tracking-tight hover:text-accent sm:text-3xl">
              {p.title}
            </Link>
            <p className="leading-relaxed text-muted">{p.summary}</p>
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            >
              {new URL(p.live!).hostname}
              <ArrowUpRight size={16} aria-hidden />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
