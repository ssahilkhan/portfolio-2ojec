"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { projects, categoryLabels, type Category } from "@/data/projects"
import { cn } from "@/lib/utils"

const norm = (s: string) => s.replace(/ \d+(\.\d+)?$/, "") // "React 19" → "React"
const allTech = [...new Set(projects.flatMap((p) => p.stack.map(norm)))].sort((a, b) => a.localeCompare(b))
const filters: ("all" | Category)[] = ["all", "ai", "fullstack", "blockchain", "quantum", "creative"]

export default function ProjectsExplorer() {
  const [query, setQuery] = useState("")
  const [cat, setCat] = useState<"all" | Category>("all")
  const [tech, setTech] = useState("")

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter(
      (p) =>
        (cat === "all" || p.categories.includes(cat)) &&
        (!tech || p.stack.some((s) => norm(s) === tech)) &&
        (!q || [p.title, p.summary, p.detail, ...p.stack].join(" ").toLowerCase().includes(q))
    )
  }, [query, cat, tech])

  const reset = () => {
    setQuery("")
    setCat("all")
    setTech("")
  }

  return (
    <div className="mt-12">
      <div className="grid gap-4 md:grid-cols-[1fr_16rem]">
        <label className="relative block">
          <span className="sr-only">Search projects</span>
          <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, idea or technology"
            className="w-full rounded-lg border border-border bg-surface py-3 pl-11 pr-4 placeholder:text-muted/70 focus:border-accent focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="sr-only">Filter by technology</span>
          <select
            value={tech}
            onChange={(e) => setTech(e.target.value)}
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 focus:border-accent focus:outline-none"
          >
            <option value="">Any technology</option>
            {allTech.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setCat(f)}
            aria-pressed={cat === f}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              cat === f ? "border-accent bg-accent text-accent-ink" : "border-border hover:border-border-hover"
            )}
          >
            {f === "all" ? "All" : categoryLabels[f]}
          </button>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted" role="status">
        {shown.length} {shown.length === 1 ? "project" : "projects"}
      </p>

      {shown.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-border p-10 text-center">
          <p className="text-lg">Nothing matches those filters.</p>
          <button type="button" onClick={reset} className="mt-4 text-accent underline underline-offset-4">
            Clear filters
          </button>
        </div>
      ) : (
        <ul className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/projects/${p.slug}/`}
                data-cursor="View project"
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-hover"
              >
                <div className="flex items-center justify-between gap-4 text-sm text-muted">
                  <span>{p.categories.map((c) => categoryLabels[c]).join(", ")}</span>
                  <span className={cn("shrink-0", p.status === "Live" && "text-accent")}>{p.status}</span>
                </div>
                <h2 className="mt-8 font-display text-2xl font-semibold tracking-tight group-hover:text-accent">{p.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{p.summary}</p>
                <p className="mt-auto pt-6 text-sm text-foreground/70">{p.stack.join(", ")}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
