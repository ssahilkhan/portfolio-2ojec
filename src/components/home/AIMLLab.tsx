import Link from "next/link"
import { projects } from "@/data/projects"
import Section from "./Section"

// The pipeline Sahil works on at DeepInfinity.ai, in the order audio flows through it.
const pipeline = [
  { stage: "Speech", note: "Doctor–patient conversation recorded in the room" },
  { stage: "Speech-to-text", note: "NVIDIA Nemotron fine-tuned on medical speech, with Whisper and Azure Speech" },
  { stage: "Speaker diarization", note: "pyannote.audio separates who said what" },
  { stage: "Entity extraction", note: "spaCy NER pulls out symptoms, drugs and dosages" },
  { stage: "LLM structuring", note: "An LLM turns the transcript into a clinical note" },
  { stage: "FHIR / EMR", note: "Structured record handed to hospital systems" },
]

const models = ["NVIDIA Nemotron", "NVIDIA Riva", "NVIDIA NIM", "OpenAI Whisper", "Azure Speech", "pyannote.audio", "spaCy", "MedGemma", "LLaVA-Med", "Qwen2-VL", "Phi-3 Vision", "BLIP", "Llama 3", "Ollama"]

export default function AIMLLab() {
  const aiProjects = projects.filter((p) => p.categories.includes("ai") && p.slug !== "clinical-speech-pipeline")

  return (
    <Section
      id="lab"
      title="AI & ML Lab"
      intro="Speech AI and LLM systems, from the clinical pipeline I work on every day to the tools I build on my own time."
    >
      <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight">Clinical speech-to-record pipeline</h3>
          <p className="mt-3 max-w-xl leading-relaxed text-muted">
            At DeepInfinity.ai. Fine-tuning Nemotron on medical-domain speech took transcription accuracy from about{" "}
            <span className="text-foreground">65% to 91%</span>.
          </p>

          <ol className="mt-10">
            {pipeline.map((s, i) => (
              <li key={s.stage} className="relative grid grid-cols-[2.5rem_1fr] gap-4 pb-8 last:pb-0">
                {i < pipeline.length - 1 && <span className="absolute left-[1.2rem] top-10 bottom-1 w-px bg-border" aria-hidden />}
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface font-display text-sm text-accent">
                  {i + 1}
                </span>
                <div className="pt-1.5">
                  <p className="font-display text-lg font-medium">{s.stage}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight">AI projects</h3>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {aiProjects.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}/`} className="group grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:gap-6">
                  <span>
                    <span className="font-medium group-hover:text-accent">{p.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">{p.summary}</span>
                  </span>
                  <span className="text-sm text-muted sm:pt-0.5">{p.status}</span>
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mt-14 font-display text-2xl font-semibold tracking-tight">Models I have deployed or evaluated</h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {models.map((m) => (
              <li key={m} className="rounded-full border border-border px-3 py-1 text-sm">
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
