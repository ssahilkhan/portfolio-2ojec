import { ExternalLink, Code } from "lucide-react"
import Button3D from "@/components/ui/Button3D"
import { showcase } from "@/data/showcase"

export default function ProjectKeys() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Things I&apos;ve built</h2>
      <p className="mt-2 max-w-xl text-muted">Press a key to open the live app or the code.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {showcase.map((p) => (
          <article key={p.title} className="flex flex-col rounded-2xl border border-border bg-card p-5">
            <h3 className="font-display text-xl font-bold">
              {p.title}
              {p.isNew && <span className="ml-2 rounded-full bg-orange px-2 py-0.5 align-middle text-xs font-bold text-black">New</span>}
            </h3>
            <p className="mt-2 flex-1 text-sm text-muted">{p.blurb}</p>
            <p className="mt-3 text-xs text-muted">{p.tags.join(", ")}</p>
            <div className="mt-4 flex flex-wrap gap-x-3">
              {p.live && <Button3D href={p.live} color={p.color} size="sm" icon={<ExternalLink size={15} />}>Live</Button3D>}
              {p.code && <Button3D href={p.code} color="ink" size="sm" icon={<Code size={15} />}>Code</Button3D>}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <Button3D href="/projects" color="sun">All projects and case studies</Button3D>
      </div>
    </section>
  )
}
