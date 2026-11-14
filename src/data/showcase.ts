import type { KeyColor } from "@/components/ui/Button3D"

// Home-page project keys. Add an entry here and it shows up on the home page.
// Only link what is verified live; leave live/code out for private work.
export interface ShowcaseItem {
  title: string
  blurb: string
  tags: string[]
  color: KeyColor
  live?: string
  code?: string
  isNew?: boolean
}

export const showcase: ShowcaseItem[] = [
  {
    title: "GetITReady",
    blurb: "Free browser tools that run on your device, including the Camera to Sticker and Camera to GIF studio.",
    tags: ["Next.js", "TypeScript", "Browser-only"],
    color: "sun",
    live: "https://toolora-gray.vercel.app",
    code: "https://github.com/ssahilkhan/toolora",
    isNew: true,
  },
  {
    title: "Q-Guardian",
    blurb: "Quantum-safe security project built around post-quantum ideas.",
    tags: ["Python", "Security"],
    color: "cobalt",
    code: "https://github.com/ssahilkhan/q-guardian",
    isNew: true,
  },
  {
    title: "AI Notes Maker",
    blurb: "Turns raw input into structured notes using NVIDIA-hosted models.",
    tags: ["LLM", "NVIDIA"],
    color: "mint",
    code: "https://github.com/ssahilkhan/AI_Notes_Maker_nvidia",
    isNew: true,
  },
  {
    title: "Nemotron STT Demo",
    blurb: "Speech-to-text demo on NVIDIA Nemotron, the model I tuned at DeepInfinity.ai.",
    tags: ["Speech AI", "Nemotron"],
    color: "coral",
    code: "https://github.com/ssahilkhan/nemotron-stt-demo",
    isNew: true,
  },
  {
    title: "HealthCare",
    blurb: "Emergency contacts and medication reminders for elderly users.",
    tags: ["Next.js", "Healthcare"],
    color: "mint",
    live: "https://health-care-five-rho.vercel.app",
    code: "https://github.com/ssahilkhan/HealthCare",
  },
  {
    title: "NextEdu",
    blurb: "A learning platform for students.",
    tags: ["Next.js", "EdTech"],
    color: "cobalt",
    live: "https://next-edu-beige.vercel.app",
    code: "https://github.com/ssahilkhan/NextEdu",
  },
  {
    title: "AI Voiceover Chatbot",
    blurb: "A chatbot that answers out loud.",
    tags: ["LLM", "TTS"],
    color: "sun",
    code: "https://github.com/ssahilkhan/ai-voiceover-chatbot",
  },
]
