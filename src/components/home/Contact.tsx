"use client"

import { useState, type FormEvent } from "react"
import { Mail } from "lucide-react"
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/ui/BrandIcons"
import { site } from "@/data/site"

const channels = [
  { name: "LinkedIn", href: site.links.linkedin, icon: LinkedInIcon },
  { name: "GitHub", href: site.links.github, icon: GitHubIcon },
  { name: "Instagram", href: site.links.instagram, icon: InstagramIcon },
]

const field =
  "w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted/70 focus:border-accent focus:outline-none"

// The site is a static export with no server, so the form hands the message
// to the visitor's mail app. The hidden "company" field catches bots.
export default function Contact() {
  const [sent, setSent] = useState(false)

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    if (data.get("company")) return // honeypot filled: a bot, drop it quietly
    const name = String(data.get("name")).trim()
    const subject = `Portfolio enquiry from ${name}`
    const body = `${String(data.get("message")).trim()}\n\n${name}\n${String(data.get("email")).trim()}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24 sm:px-6 sm:py-32">
      <h2 id="contact-title" className="border-t border-border pt-8 font-display text-[clamp(2.8rem,8.5vw,7.5rem)] font-bold leading-[0.9] tracking-[-0.045em]">
        HAVE AN IDEA?
        <br />
        LET&apos;S BUILD SOMETHING.
      </h2>

      <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <p className="max-w-md text-lg leading-relaxed text-muted">
            Freelance builds, collaborations, roles, or a question about something I made. I reply within a couple of days.
          </p>
          <a href={`mailto:${site.email}`} className="mt-8 flex items-center gap-3 break-all font-display text-lg hover:text-accent sm:text-xl">
            <Mail size={20} className="shrink-0 text-accent" aria-hidden />
            {site.email}
          </a>
          <ul className="mt-8 flex flex-wrap gap-3">
            {channels.map(({ name, href, icon: Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm hover:border-accent hover:text-accent"
                >
                  <Icon size={16} />
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={submit} className="grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm">
              Name
              <input name="name" required autoComplete="name" className={field} />
            </label>
            <label className="grid gap-2 text-sm">
              Email
              <input name="email" type="email" required autoComplete="email" className={field} />
            </label>
          </div>
          <label className="grid gap-2 text-sm">
            Message
            <textarea name="message" required rows={6} className={`${field} resize-y`} />
          </label>
          <div className="absolute -left-[9999px]" aria-hidden>
            <label>
              Company
              <input name="company" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button type="submit" className="key3d key-cobalt key3d-lg">
              <span className="key3d-face">Send message</span>
            </button>
            <p className="text-sm text-muted" role="status">
              {sent ? "Your mail app should open with the message ready to send." : "Opens your mail app with the message filled in."}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
