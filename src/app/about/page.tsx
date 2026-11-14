import type { Metadata } from "next"
import Link from "next/link"
import { portfolioData } from "@/data/portfolio"
import { projects, type Category } from "@/data/projects"
import Portrait from "@/components/ui/Portrait"
import { RevealHeadline, Journey, type Stop } from "./Story"

export const metadata: Metadata = {
  title: "About",
  description: "How Sahil Khan went from a village school in Chittoor to building clinical speech AI at DeepInfinity.ai.",
  alternates: { canonical: "/about/" },
}

const { about, education, contact_links } = portfolioData

const stops: Stop[] = [
  { when: "2020", title: "Pointed a telescope at the sky", detail: "Started @space_time_dilation on Instagram during the lockdown, posting my own Moon, planet and deep-sky captures with notes on what they show.", tag: "Content creation" },
  { when: "2023", title: "Started Computer Science at JNTUA", detail: "B.Tech in Computer Science & Engineering at JNTUA College of Engineering, Anantapur. Data structures, operating systems, networks, and Python every day.", tag: "Programming" },
  { when: "2024", title: "Moved into machine learning", detail: "Computer vision and classical ML experiments in Python, and IBM's Introduction to Prompt Engineering (June 2024).", tag: "AI / ML" },
  { when: "May 2025", title: "Shipped a full-stack marketplace", detail: "EduCycle, an academic MERN project for buying and selling study material on campus.", tag: "Projects" },
  { when: "Jun 2025", title: "Joined DeepInfinity.ai as a tester", detail: "System Tester Intern, validating AI systems used in healthcare and catching the edge cases before they reached doctors.", tag: "AI / ML" },
  { when: "Oct 2025", title: "National finalist in quantum", detail: "Led my team to the finals of the AQVH Quantum Hackathon, among 100+ teams, with a quantum job tracking dashboard on IBM Quantum.", tag: "Quantum" },
  { when: "2026", title: "Selected for WISER Quantum Phase 2", detail: "Top 3000 nationwide. Completed NPTEL courses in quantum algorithms with Qiskit and in NLP from IIT Kharagpur.", tag: "Quantum" },
  { when: "May 2026", title: "Machine Learning Engineer", detail: "Full-time at DeepInfinity.ai, building a clinical speech-to-record pipeline. Fine-tuning NVIDIA Nemotron took medical transcription accuracy from about 65% to 91%.", tag: "AI / ML" },
  { when: "Now", title: "Building in public on YouTube", detail: "Short videos on the AI tools and systems I build, on @ai.sahilkhan.", tag: "Content creation", href: contact_links.youtube },
]

const agentic = ["q-guardian", "aura-personal-ai", "ai-job-analyzer"]
const modules: { name: string; line: string; pick: (c: Category[], slug: string) => boolean }[] = [
  { name: "AI / ML", line: "Speech recognition, LLM structuring and model evaluation on clinical data.", pick: (c) => c.includes("ai") },
  { name: "Agentic AI", line: "Agents that plan and act, and the security layer that watches them.", pick: (_, s) => agentic.includes(s) },
  { name: "Full stack", line: "Next.js, FastAPI and Node products that real people log into.", pick: (c) => c.includes("fullstack") },
  { name: "Quantum", line: "Qiskit circuits, quantum kernels and IBM Quantum job tooling.", pick: (c) => c.includes("quantum") },
  { name: "Creative tech", line: "Interactive tools and visual experiments in the browser.", pick: (c) => c.includes("creative") },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6">
      <header className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div>
          <RevealHeadline text="From a village school in Chittoor to clinical speech AI." />
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">{about.who_i_am}</p>
        </div>
        <Portrait priority className="mx-auto w-[min(64vw,17rem)] lg:w-[21rem]" />
      </header>

      <section aria-labelledby="now" className="mt-28 grid gap-8 border-t border-border pt-10 lg:grid-cols-[18rem_1fr]">
        <h2 id="now" className="font-display text-2xl font-medium">Today</h2>
        <div className="max-w-3xl space-y-6">
          <p className="font-display text-2xl leading-snug sm:text-3xl">{about.what_im_doing_now}</p>
          <p className="leading-relaxed text-muted">{about.what_i_aim_to_become}</p>
        </div>
      </section>

      <section aria-labelledby="journey" className="mt-28 border-t border-border pt-10">
        <h2 id="journey" className="mb-14 font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-[-0.03em]">The path so far</h2>
        <Journey stops={stops} />
      </section>

      <section aria-labelledby="building" className="mt-28 border-t border-border pt-10">
        <h2 id="building" className="mb-10 font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-[-0.03em]">Currently building</h2>
        <ul className="divide-y divide-border border-y border-border">
          {modules.map((m) => {
            const list = projects.filter((p) => m.pick(p.categories, p.slug))
            return (
              <li key={m.name} className="group grid gap-3 py-7 md:grid-cols-[14rem_1fr_auto] md:items-baseline md:gap-8">
                <h3 className="font-display text-2xl font-medium transition-colors group-hover:text-accent">{m.name}</h3>
                <div>
                  <p className="leading-relaxed">{m.line}</p>
                  <p className="mt-2 text-sm text-muted">
                    {list.slice(0, 3).map((p, i) => (
                      <span key={p.slug}>
                        {i > 0 && ", "}
                        <Link href={`/projects/${p.slug}/`} data-cursor="View project" className="underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-accent">
                          {p.title}
                        </Link>
                      </span>
                    ))}
                  </p>
                </div>
                <p className="font-display text-sm text-muted">{list.length} projects</p>
              </li>
            )
          })}
        </ul>
      </section>

      <section aria-labelledby="education" className="mt-28 grid gap-8 border-t border-border pt-10 lg:grid-cols-[18rem_1fr]">
        <h2 id="education" className="font-display text-2xl font-medium">Education</h2>
        <ol className="space-y-10">
          {education.map((e) => (
            <li key={e.degree} className="grid gap-2 sm:grid-cols-[8rem_1fr] sm:gap-8">
              <p className="font-display text-sm text-muted">{e.period}</p>
              <div>
                <h3 className="font-display text-xl font-medium">{e.degree}</h3>
                <p className="mt-1 text-muted">{e.institution}</p>
                <p className="mt-2 text-accent">{e.cgpa ? `CGPA ${e.cgpa}` : e.score}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
