import Link from "next/link"
import { portfolioData } from "@/data/portfolio"
import Section from "./Section"

const facts = [
  { term: "Working", detail: "Machine Learning Engineer at DeepInfinity.ai, Hyderabad. Since May 2026, after a ten-month internship there." },
  { term: "Studying", detail: "B.Tech Computer Science at JNTUA College of Engineering, Anantapur. CGPA 8.9, graduating 2027." },
  { term: "Recognised", detail: "AQVH Quantum Hackathon national finalist (100+ teams). Selected for WISER Quantum Phase 2." },
]

export default function About() {
  const { about } = portfolioData
  return (
    <Section id="about" title="I build AI that has to work on real data.">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="font-display text-2xl leading-snug sm:text-3xl">{about.what_im_doing_now}</p>
          <p className="mt-8 max-w-2xl leading-relaxed text-muted">{about.who_i_am}</p>
          <Link href="/about" data-cursor="Read" className="mt-8 inline-block underline decoration-accent underline-offset-4 hover:text-accent">
            Read the full story
          </Link>
        </div>

        <dl className="divide-y divide-border border-y border-border lg:self-start">
          {facts.map((f) => (
            <div key={f.term} className="grid gap-1 py-6 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <dt className="font-display font-medium text-accent">{f.term}</dt>
              <dd className="leading-relaxed">{f.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
