import type { Metadata } from "next"
import Link from "next/link"
import { portfolioData } from "@/data/portfolio"
import { projects } from "@/data/projects"

// This route used to hold quotes nobody could verify. It now lists only
// things with a date, an issuer, or a link you can open.
export const metadata: Metadata = {
  title: "Impact & Recognition",
  description: "Hackathon results, selections, certifications and live products by Sahil Khan.",
  alternates: { canonical: "/testimonials/" },
}

const { achievements, certifications } = portfolioData
const live = projects.filter((p) => p.live && p.slug !== "portfolio")

export default function RecognitionPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6">
      <h1 className="max-w-4xl font-display text-[clamp(2.6rem,7.5vw,6rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
        Project impact &amp; recognition
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        Results with a date, an issuer or a link you can open. No quotes, no ratings.
      </p>

      <section aria-labelledby="featured" className="mt-20 grid gap-10 border-t border-border pt-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p id="featured" className="font-display text-sm text-wave">October 2025</p>
          <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-none tracking-[-0.03em]">
            National finalist, AQVH Quantum Hackathon
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            I led the team that reached the finals among 100+ teams. We built a dashboard that tracks IBM Quantum jobs and turns the raw API data into something a researcher can read at a glance.
          </p>
          <Link href="/projects/quantum-job-tracker/" data-cursor="View project" className="mt-6 inline-block underline decoration-accent underline-offset-4 hover:text-accent">
            See the project
          </Link>
        </div>
        <dl className="divide-y divide-border self-start border-y border-border">
          <div className="py-6">
            <dt className="font-display text-5xl font-semibold tracking-tight">65% → 91%</dt>
            <dd className="mt-2 text-muted">Medical transcription accuracy after fine-tuning NVIDIA Nemotron at DeepInfinity.ai.</dd>
          </div>
          <div className="py-6">
            <dt className="font-display text-5xl font-semibold tracking-tight">Top 3000</dt>
            <dd className="mt-2 text-muted">Nationwide selection for WISER Quantum Program Phase 2, 2026.</dd>
          </div>
        </dl>
      </section>

      <section aria-labelledby="results" className="mt-24 grid gap-8 border-t border-border pt-10 lg:grid-cols-[18rem_1fr]">
        <h2 id="results" className="font-display text-2xl font-medium">Results</h2>
        <ol className="divide-y divide-border">
          {achievements.map((a) => (
            <li key={a.title} className="grid gap-1 py-5 first:pt-0 sm:grid-cols-[7rem_1fr] sm:gap-6">
              <p className="font-display text-sm text-muted">{a.date}</p>
              <div>
                <h3 className="font-medium">{a.title}</h3>
                <p className="mt-1 text-sm text-muted">{a.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="live" className="mt-24 grid gap-8 border-t border-border pt-10 lg:grid-cols-[18rem_1fr]">
        <h2 id="live" className="font-display text-2xl font-medium">Live and in use</h2>
        <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {live.map((p) => (
            <li key={p.slug}>
              <a href={p.live} target="_blank" rel="noopener noreferrer" data-cursor="Open" className="group block">
                <h3 className="font-display text-xl font-medium group-hover:text-accent">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{p.summary}</p>
                <p className="mt-2 text-xs text-wave">{p.live!.replace("https://", "")}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="certs" className="mt-24 grid gap-8 border-t border-border pt-10 lg:grid-cols-[18rem_1fr]">
        <h2 id="certs" className="font-display text-2xl font-medium">Certifications</h2>
        <ul className="divide-y divide-border">
          {certifications.map((c) => (
            <li key={c.title} className="flex flex-col gap-1 py-4 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div>
                <h3 className="font-medium">
                  {c.link ? (
                    <a href={c.link} target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-4 hover:decoration-accent">
                      {c.title}
                    </a>
                  ) : (
                    c.title
                  )}
                </h3>
                <p className="text-sm text-muted">{c.provider}</p>
              </div>
              <p className="shrink-0 font-display text-sm text-muted">{c.date}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
