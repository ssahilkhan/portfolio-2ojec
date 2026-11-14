import Link from "next/link"
import { site } from "@/data/site"

const pages = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Achievements", path: "/achievements" },
  { name: "Recognition", path: "/testimonials" },
  { name: "Blog", path: "/blog" },
  { name: "Resume", path: "/resume" },
]

const elsewhere = [
  { name: "GitHub", url: site.links.github },
  { name: "LinkedIn", url: site.links.linkedin },
  { name: "YouTube", url: site.links.youtube },
  { name: "Instagram", url: site.links.instagram },
  { name: "Threads", url: site.links.threads },
  { name: "X", url: site.links.x },
  { name: "LeetCode", url: site.links.leetcode },
]

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{site.role}</p>
          <a href={`mailto:${site.email}`} className="mt-6 inline-block break-all text-sm text-foreground underline decoration-accent underline-offset-4 hover:text-accent">
            {site.email}
          </a>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-4 text-sm font-medium text-muted">Pages</h2>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 md:grid-cols-1">
            {pages.map((p) => (
              <li key={p.path}>
                <Link href={p.path} className="text-sm text-foreground/85 hover:text-accent">{p.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-sm font-medium text-muted">Elsewhere</h2>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 md:grid-cols-1">
            {elsewhere.map((l) => (
              <li key={l.name}>
                <a href={l.url} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/85 hover:text-accent">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-10 text-xs text-muted sm:px-6">
        © {new Date().getFullYear()} {site.name}. Built with Next.js, React Three Fiber and GSAP.
      </div>
    </footer>
  )
}
