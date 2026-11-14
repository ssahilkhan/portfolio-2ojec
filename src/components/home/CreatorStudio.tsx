import Button3D from "@/components/ui/Button3D"
import { InstagramIcon, YouTubeIcon } from "@/components/ui/BrandIcons"
import { site, videos, instagramAccounts } from "@/data/site"
import Section from "./Section"

const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })

export default function CreatorStudio() {
  return (
    <Section
      id="creator"
      title="Creator Studio"
      intro="I explain AI tools, Claude workflows and the things I build on YouTube and Instagram. These are the latest long-form videos."
    >
      <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v) => (
          <li key={v.id}>
            <a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer" data-cursor="Play" className="group block">
              <div className="overflow-hidden rounded-xl border border-border bg-surface">
                {/* eslint-disable-next-line @next/next/no-img-element -- static export, YouTube serves its own thumbnails */}
                <img
                  src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                  alt=""
                  width={480}
                  height={360}
                  loading="lazy"
                  decoding="async"
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-4 font-medium leading-snug group-hover:text-accent">{v.title}</p>
              <p className="mt-1 text-sm text-muted">{fmt(v.date)}</p>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight">Follow along</h3>
          <p className="mt-3 max-w-md leading-relaxed text-muted">Walkthroughs go on YouTube. Short videos go on Instagram, across three accounts.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button3D href={site.links.youtube} color="cobalt" icon={<YouTubeIcon />}>VISIT YOUTUBE CHANNEL</Button3D>
            <Button3D href={site.links.instagram} color="ink" icon={<InstagramIcon />}>VIEW INSTAGRAM</Button3D>
          </div>
        </div>

        <ul className="divide-y divide-border border-y border-border">
          {instagramAccounts.map((a) => (
            <li key={a.handle}>
              <a href={a.url} target="_blank" rel="noopener noreferrer" className="group grid gap-1 py-5 sm:grid-cols-[14rem_1fr] sm:gap-6">
                <span className="font-display text-lg font-medium group-hover:text-accent">@{a.handle}</span>
                <span className="leading-relaxed text-muted">{a.about}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
