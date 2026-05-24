import { portfolioData, socialLinks } from "@/data/portfolio"
import Link from "next/link"

const footerLinks = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
  { name: "Resume", path: "/resume" },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="text-2xl font-bold text-gradient-orange">
              {portfolioData.personal_info.name}
            </span>
            <p className="mt-4 max-w-md text-sm text-muted leading-relaxed">
              {portfolioData.branding.tagline}
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-muted transition-colors hover:text-orange hover:bg-orange/10"
                  aria-label={link.name}
                >
                  <span className="text-xs font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
              Pages
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-muted transition-colors hover:text-orange"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${portfolioData.personal_info.email}`}
                  className="transition-colors hover:text-orange"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={portfolioData.contact_links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-orange"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={portfolioData.contact_links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-orange"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} {portfolioData.personal_info.name}. All rights reserved.</p>
          <p className="mt-1">Built with Next.js, Three.js, and Framer Motion</p>
        </div>
      </div>
    </footer>
  )
}
