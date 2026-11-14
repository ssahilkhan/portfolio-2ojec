"use client"

import { useEffect, useState } from "react"
import Button3D from "@/components/ui/Button3D"
import { GitHubIcon } from "@/components/ui/BrandIcons"
import { githubOtherRepos } from "@/data/github-data"
import { site } from "@/data/site"
import Section from "./Section"

const USER = "ssahilkhan"
// Public repos on the profile that are other people's work.
const NOT_MINE = new Set(["openclaw", "SuperAGI", "Vision-Agents", "deep-research-from-scratch", "superexpert-ai"])

interface Repo {
  name: string
  description: string
  language: string
  url: string
  pushed: string
}

interface ApiRepo {
  name: string
  description: string | null
  language: string | null
  html_url: string
  pushed_at: string
  fork: boolean
}

const ago = (iso: string) => {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000)
  if (days < 1) return "today"
  if (days === 1) return "yesterday"
  if (days < 30) return `${days} days ago`
  return new Date(iso).toLocaleDateString("en-GB", { month: "short", year: "numeric", timeZone: "UTC" })
}

// Snapshot taken by scripts/fetch-github.mjs at build time.
const snapshot: Repo[] = githubOtherRepos
  .filter((r) => !r.isFork && !NOT_MINE.has(r.name))
  .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
  .slice(0, 6)
  .map((r) => ({ name: r.name, description: r.description, language: r.language, url: r.url, pushed: r.updatedAt }))

export default function GitHubActivity() {
  const [repos, setRepos] = useState<Repo[]>(snapshot)
  const [count, setCount] = useState<number | null>(null)
  const [state, setState] = useState<"loading" | "live" | "snapshot">("loading")

  useEffect(() => {
    const ctrl = new AbortController()
    const get = (path: string) =>
      fetch(`https://api.github.com${path}`, { signal: ctrl.signal, headers: { Accept: "application/vnd.github+json" } }).then((r) => {
        if (!r.ok) throw new Error(String(r.status)) // 403 = rate limited
        return r.json()
      })

    Promise.all([get(`/users/${USER}`), get(`/users/${USER}/repos?sort=pushed&per_page=30`)])
      .then(([user, list]: [{ public_repos: number }, ApiRepo[]]) => {
        setCount(user.public_repos)
        setRepos(
          list
            .filter((r) => !r.fork && !NOT_MINE.has(r.name))
            .slice(0, 6)
            .map((r) => ({ name: r.name, description: r.description ?? "", language: r.language ?? "", url: r.html_url, pushed: r.pushed_at }))
        )
        setState("live")
      })
      .catch((e) => {
        if (e.name !== "AbortError") setState("snapshot")
      })
    return () => ctrl.abort()
  }, [])

  return (
    <Section
      id="github"
      title="GitHub activity"
      intro={
        <>
          The repositories I pushed to most recently
          {count !== null && <>, out of {count} public repos</>}.{" "}
          {state === "snapshot" && "GitHub's API limit was hit, so this list is from the last build."}
        </>
      }
      action={
        <Button3D href={site.links.github} color="cobalt" icon={<GitHubIcon />}>
          EXPLORE MY GITHUB
        </Button3D>
      }
    >
      <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3" aria-busy={state === "loading"}>
        {repos.map((r) => (
          <li key={r.name} className="bg-background">
            <a href={r.url} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col p-6 hover:bg-surface">
              <span className="font-display text-lg font-medium break-all group-hover:text-accent">{r.name}</span>
              <span className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{r.description || "No description yet."}</span>
              <span className="mt-auto flex items-center gap-4 pt-6 text-sm text-muted">
                {r.language && (
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-wave" aria-hidden />
                    {r.language}
                  </span>
                )}
                <span suppressHydrationWarning>Pushed {ago(r.pushed)}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
