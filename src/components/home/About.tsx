import Image from "next/image"
import Link from "next/link"
import { portfolioData } from "@/data/portfolio"
import Section from "./Section"
import Parallax from "./Parallax"

const facts = [
  { term: "Working", detail: "Machine Learning Engineer at DeepInfinity.ai, Hyderabad. Since May 2026, after a ten-month internship there." },
  { term: "Studying", detail: "B.Tech Computer Science at JNTUA College of Engineering, Anantapur. CGPA 8.9, graduating 2027." },
  { term: "Recognised", detail: "AQVH Quantum Hackathon national finalist (100+ teams). Selected for WISER Quantum Phase 2." },
]

export default function About() {
  const { about } = portfolioData
  return (
    <Section id="about" title="I build AI that has to work on real data.">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <div>
          <p className="font-display text-2xl leading-snug sm:text-3xl">{about.what_im_doing_now}</p>
          <p className="mt-8 max-w-2xl leading-relaxed text-muted">{about.who_i_am}</p>

          <dl className="mt-12 divide-y divide-border border-y border-border">
            {facts.map((f) => (
              <div key={f.term} className="grid gap-1 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="font-display font-medium text-accent">{f.term}</dt>
                <dd className="leading-relaxed">{f.detail}</dd>
              </div>
            ))}
          </dl>

          <Link href="/about" className="mt-8 inline-block underline decoration-accent underline-offset-4 hover:text-accent">
            Read the full story
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-surface lg:mt-2 lg:self-start">
          <Parallax amount={10}>
            <Image
              src="/images/sahil_professional_Image.jpeg"
              alt="Sahil Khan in a professional portrait"
              width={800}
              height={1000}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/5] h-auto w-full scale-110 object-cover"
            />
          </Parallax>
        </div>
      </div>
    </Section>
  )
}
