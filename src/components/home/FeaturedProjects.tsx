"use client"

import Image from "next/image"
import Link from "next/link"
import type { CSSProperties, PointerEvent } from "react"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { projects, categoryLabels, type Project } from "@/data/projects"
import Section from "./Section"

// Every visual here is real. "shot" entries are screenshots of the live app
// taken on 2026-11-15. "arch" entries are diagrams drawn from the repository's
// own file tree, compose file and dependencies (names are the real modules).
type Column = { title: string; nodes: string[] }
type Visual =
  | { kind: "shot"; src: string; url: string; alt: string }
  | { kind: "arch"; caption: string; cols: Column[] }

const visuals: Record<string, Visual> = {
  getitready: { kind: "shot", src: "/images/projects/getitready.webp", url: "toolora-gray.vercel.app", alt: "GetITReady home page: free online tools that work in your browser" },
  nextedu: { kind: "shot", src: "/images/projects/nextedu.webp", url: "next-edu-beige.vercel.app", alt: "NextEdu home page: a marketplace for used textbooks" },
  carecompanion: { kind: "shot", src: "/images/projects/carecompanion.webp", url: "health-care-five-rho.vercel.app", alt: "CareCompanion dashboard with medication reminders and emergency contacts" },
  blockmind: {
    kind: "arch",
    caption: "From docker-compose.yml and backend/src/app",
    cols: [
      { title: "Next.js app", nodes: ["blocks", "contracts", "events", "networks", "auditor", "copilot"] },
      { title: "Express + ethers API", nodes: ["chain", "contract", "events", "indexer", "wallet", "token", "transaction", "portfolio"] },
      { title: "Infrastructure", nodes: ["Hardhat node  :8545", "PostgreSQL 16"] },
    ],
  },
  "ai-notes-maker": {
    kind: "arch",
    caption: "From core/, ui/ and requirements.txt",
    cols: [
      { title: "Streamlit UI", nodes: ["chat", "notes", "canvas", "search", "sidebar"] },
      { title: "core", nodes: ["nim (streaming)", "memory", "notes", "prompts", "pdf (ReportLab)", "auth (argon2)", "db (SQLite)"] },
      { title: "Model", nodes: ["NVIDIA NIM", "Nemotron 3"] },
    ],
  },
  moneylens: {
    kind: "arch",
    caption: "From backend/server.js and config/database.js",
    cols: [
      { title: "Flutter app", nodes: ["screens", "providers", "services"] },
      { title: "Express API  /api", nodes: ["auth", "expenses", "income", "goals", "trips", "family", "investments", "ai", "analytics", "pdf"] },
      { title: "Data + AI", nodes: ["PostgreSQL", "Gemini coach"] },
    ],
  },
}

const order = ["getitready", "blockmind", "carecompanion", "ai-notes-maker", "nextedu", "moneylens"]
const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]))
const picks = order.map((s) => bySlug[s]).filter(Boolean) as Project[]

function lean(e: PointerEvent<HTMLElement>) {
  if (e.pointerType !== "mouse") return
  const r = e.currentTarget.getBoundingClientRect()
  const x = (e.clientX - r.left) / r.width
  const y = (e.clientY - r.top) / r.height
  const s = e.currentTarget.style
  s.setProperty("--ry", `${((x - 0.5) * 14).toFixed(2)}deg`)
  s.setProperty("--rx", `${(-(y - 0.5) * 10).toFixed(2)}deg`)
  s.setProperty("--gx", `${(x * 100).toFixed(1)}%`)
  s.setProperty("--gy", `${(y * 100).toFixed(1)}%`)
}
function settle(e: PointerEvent<HTMLElement>) {
  const s = e.currentTarget.style
  s.setProperty("--rx", "0deg")
  s.setProperty("--ry", "0deg")
  s.setProperty("--gx", "50%")
  s.setProperty("--gy", "30%")
}

function Browser({ v, className, style }: { v: Extract<Visual, { kind: "shot" }>; className?: string; style?: CSSProperties }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-border bg-background shadow-[0_30px_60px_-20px_rgb(0_0_0/0.55)] ${className ?? ""}`} style={style}>
      <div className="flex items-center gap-2 border-b border-border bg-surface px-3 py-2">
        <span aria-hidden className="flex gap-1.5">
          <i className="h-2 w-2 rounded-full bg-border-hover" />
          <i className="h-2 w-2 rounded-full bg-border-hover" />
          <i className="h-2 w-2 rounded-full bg-border-hover" />
        </span>
        <span className="mx-auto truncate rounded bg-background px-3 py-0.5 text-[0.7rem] text-muted">{v.url}</span>
      </div>
      <Image src={v.src} alt={v.alt} width={1440} height={900} sizes="(min-width:1024px) 640px, 92vw" className="block h-auto w-full" />
    </div>
  )
}

function Architecture({ v }: { v: Extract<Visual, { kind: "arch" }> }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.55)] sm:p-6">
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {v.cols.map((c, i) => (
          <div key={c.title} className="relative flex flex-col gap-1.5">
            <p className="mb-1 text-[0.7rem] font-medium text-muted sm:text-xs">{c.title}</p>
            {c.nodes.map((n) => (
              <span key={n} className="break-words rounded-md border border-border bg-background px-2 py-1.5 font-mono text-[0.65rem] sm:text-xs">
                {n}
              </span>
            ))}
            {i < v.cols.length - 1 && <span aria-hidden className="absolute -right-2 top-1/2 -translate-y-1/2 text-accent sm:-right-3.5">›</span>}
          </div>
        ))}
      </div>
      <p className="mt-4 border-t border-border pt-3 text-[0.7rem] text-muted sm:text-xs">Architecture diagram. {v.caption}.</p>
    </div>
  )
}

function Stage({ p, v }: { p: Project; v: Visual }) {
  return (
    <div className="stage" onPointerMove={lean} onPointerLeave={settle}>
      <div className="stage-inner">
        <div className="stage-layer" style={{ "--z": "0px" } as CSSProperties}>
          {v.kind === "shot" ? <Browser v={v} /> : <Architecture v={v} />}
        </div>
        <span className="stage-layer absolute -left-3 -top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-ink shadow-lg" style={{ "--z": "70px" } as CSSProperties}>
          {v.kind === "shot" ? (p.status === "Live" ? "Live app" : p.status) : "Built from the repo"}
        </span>
        <span aria-hidden className="stage-glare" />
      </div>
    </div>
  )
}

function Row({ p, i }: { p: Project; i: number }) {
  const v = visuals[p.slug]
  const flip = i % 2 === 1
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
    >
      <Link href={`/projects/${p.slug}/`} data-cursor="Explore project" aria-label={`Explore ${p.title}`} className={`block rounded-2xl lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
        <Stage p={p} v={v} />
      </Link>

      <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <p className="text-sm text-muted">
          {p.categories.map((c) => categoryLabels[c]).join(", ")}
          <span className="mx-2 text-border-hover">/</span>
          {p.year}
        </p>
        <h3 className="mt-3 font-display text-[clamp(2.2rem,4.6vw,3.8rem)] font-semibold leading-[0.95] tracking-[-0.035em]">{p.title}</h3>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-foreground/85">{p.summary}</p>
        <ul className="mt-5 max-w-md space-y-1.5 text-sm text-muted">
          {p.features.slice(0, 3).map((f) => (
            <li key={f} className="flex gap-2">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {f}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-muted">{p.stack.slice(0, 5).join(", ")}</p>
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-display text-base font-medium">
          <Link href={`/projects/${p.slug}/`} className="inline-flex items-center gap-1 underline decoration-accent decoration-2 underline-offset-8 hover:text-accent">
            Read the case <ArrowUpRight size={16} aria-hidden />
          </Link>
          {p.live && (
            <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted hover:text-accent">
              Live app <ArrowUpRight size={16} aria-hidden />
            </a>
          )}
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted hover:text-accent">
              Code <ArrowUpRight size={16} aria-hidden />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function FeaturedProjects() {
  return (
    <Section
      id="projects"
      title="Selected work"
      intro="Real products and real code. The screenshots are the live apps; the diagrams are drawn from each repository."
      action={
        <Link href="/projects/" className="font-display text-lg font-medium underline decoration-accent decoration-2 underline-offset-8 hover:text-accent">
          All projects →
        </Link>
      }
    >
      <div className="flex flex-col gap-24 sm:gap-32">
        {picks.map((p, i) => (
          <Row key={p.slug} p={p} i={i} />
        ))}
      </div>
      <p className="mt-24 max-w-2xl text-sm leading-relaxed text-muted">
        AutoArchAI, Q-Guardian and the clinical speech pipeline at DeepInfinity.ai are private or company work, so no screenshots or code are shown here. Their write-ups are on the{" "}
        <Link href="/projects/" className="underline decoration-accent underline-offset-4 hover:text-accent">projects page</Link>.
      </p>
    </Section>
  )
}
