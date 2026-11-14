import { portfolioData, skillCategories } from "@/data/portfolio"
import Button3D from "@/components/ui/Button3D"

export default function SkillsAndWork() {
  const [current, ...earlier] = portfolioData.experience
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2">
      <div>
        <h2 className="font-display text-3xl font-extrabold">Skills</h2>
        <dl className="mt-6 space-y-4">
          {skillCategories.slice(0, 6).map((c) => (
            <div key={c.category}>
              <dt className="text-sm font-semibold">{c.category}</dt>
              <dd className="text-sm text-muted">{c.items.slice(0, 8).join(", ")}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6"><Button3D href="/skills" color="mint" size="sm">All skills</Button3D></div>
      </div>
      <div>
        <h2 className="font-display text-3xl font-extrabold">Experience</h2>
        <ol className="mt-6 space-y-5 border-l-2 border-border pl-5">
          {[current, ...earlier].slice(0, 3).map((e) => (
            <li key={e.title + e.period}>
              <p className="font-semibold">{e.title}, {e.company}</p>
              <p className="text-xs text-muted">{e.period}. {e.location}</p>
              <p className="mt-1 text-sm text-muted">{e.impact}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6"><Button3D href="/experience" color="coral" size="sm">Full experience</Button3D></div>
      </div>
    </section>
  )
}
