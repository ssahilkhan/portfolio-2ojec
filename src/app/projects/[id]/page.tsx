import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import Button3D from "@/components/ui/Button3D"
import { GitHubIcon } from "@/components/ui/BrandIcons"
import { projects, categoryLabels } from "@/data/projects"

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.slug }))
}

type Props = { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const p = projects.find((x) => x.slug === id)
  if (!p) return {}
  return {
    title: p.title,
    description: p.summary,
    alternates: { canonical: `/projects/${p.slug}/` },
    openGraph: { title: p.title, description: p.summary },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params
  const i = projects.findIndex((x) => x.slug === id)
  if (i < 0) notFound()
  const p = projects[i]
  const next = projects[(i + 1) % projects.length]

  return (
    <article className="mx-auto max-w-5xl px-4 pb-24 pt-32 sm:px-6">
      <Link href="/projects/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent">
        <ArrowLeft size={16} aria-hidden />
        All projects
      </Link>

      <p className="mt-10 text-sm text-muted">
        {p.categories.map((c) => categoryLabels[c]).join(", ")}
      </p>
      <h1 className="mt-3 font-display text-[clamp(2.8rem,8vw,6rem)] font-bold leading-[0.92] tracking-[-0.04em]">{p.title}</h1>
      <p className="mt-6 max-w-3xl font-display text-xl leading-snug sm:text-2xl">{p.summary}</p>

      <div className="mt-10 flex flex-wrap gap-3">
        {p.live && (
          <Button3D href={p.live} color="cobalt" icon={<ArrowUpRight size={18} />}>
            Open live site
          </Button3D>
        )}
        {p.repo && (
          <Button3D href={p.repo} color="ink" icon={<GitHubIcon />}>
            View code
          </Button3D>
        )}
      </div>
      {p.codeNote && <p className="mt-4 text-sm text-muted">{p.codeNote}</p>}

      <div className="mt-16 grid gap-14 border-t border-border pt-10 md:grid-cols-[1.6fr_1fr]">
        <div>
          <h2 className="font-display text-2xl font-semibold">How it works</h2>
          <p className="mt-4 leading-relaxed text-foreground/85">{p.detail}</p>

          <h2 className="mt-12 font-display text-2xl font-semibold">What it does</h2>
          <ul className="mt-4 space-y-3">
            {p.features.map((f) => (
              <li key={f} className="flex gap-3 leading-relaxed">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <dl className="space-y-8 text-sm">
          <div>
            <dt className="text-muted">Status</dt>
            <dd className="mt-1 text-base">{p.status}</dd>
          </div>
          <div>
            <dt className="text-muted">Year</dt>
            <dd className="mt-1 text-base">{p.year}</dd>
          </div>
          <div>
            <dt className="text-muted">Built with</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="rounded-md border border-border px-2.5 py-1">{s}</span>
              ))}
            </dd>
          </div>
        </dl>
      </div>

      <Link href={`/projects/${next.slug}/`} className="group mt-24 block border-t border-border pt-8">
        <span className="text-sm text-muted">Next project</span>
        <span className="mt-2 block font-display text-3xl font-semibold tracking-tight group-hover:text-accent sm:text-4xl">{next.title} →</span>
      </Link>
    </article>
  )
}
