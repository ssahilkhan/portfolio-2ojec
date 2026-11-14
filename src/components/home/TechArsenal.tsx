import { projects } from "@/data/projects"
import Section from "./Section"

// Used every day in the job at DeepInfinity.ai (from the experience entries).
const atWork = ["Python", "NVIDIA Nemotron", "NVIDIA Riva", "OpenAI Whisper", "Azure Speech", "pyannote.audio", "spaCy NER", "LLM APIs", "FHIR", "RBAC", "TLS 1.3", "Hugging Face"]

// Studying now, backed by a course or certificate rather than a shipped project.
const learning = [
  { name: "Quantum algorithms", source: "NPTEL" },
  { name: "Azure Quantum", source: "Microsoft Learn" },
  { name: "Natural language processing", source: "NPTEL, IIT Kharagpur" },
  { name: "Generative AI models and platforms", source: "IBM / edX" },
]

// Counted from the stack of every project in the catalogue, so each entry is backed by real code.
function fromProjects() {
  const count = new Map<string, number>()
  for (const p of projects) {
    if (p.status === "Company work") continue
    for (const s of p.stack) {
      const key = s.replace(/ \d+(\.\d+)?$/, "") // "React 19" and "React" are the same skill
      count.set(key, (count.get(key) ?? 0) + 1)
    }
  }
  return [...count.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
}

export default function TechArsenal() {
  const own = fromProjects()
  return (
    <Section
      id="arsenal"
      title="Technical arsenal"
      intro="Split by where the skill comes from: the job, my own projects, or study that hasn't turned into a project yet."
    >
      <div className="grid gap-14 lg:grid-cols-3 lg:gap-10">
        <div>
          <h3 className="font-display text-xl font-semibold">Used at work</h3>
          <p className="mt-2 text-sm text-muted">Machine Learning Engineer, DeepInfinity.ai</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {atWork.map((s) => (
              <li key={s} className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-ink">{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold">Used in my projects</h3>
          <p className="mt-2 text-sm text-muted">The number is how many projects use it.</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {own.map(([s, n]) => (
              <li key={s} className="flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm">
                {s}
                <span className="text-xs text-muted">{n}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold">Learning</h3>
          <p className="mt-2 text-sm text-muted">Courses finished or in progress.</p>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {learning.map((l) => (
              <li key={l.name} className="py-3.5">
                <p>{l.name}</p>
                <p className="text-sm text-muted">{l.source}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
