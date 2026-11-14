import { Play } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import Button3D from "@/components/ui/Button3D"

// Driven by contact_links.youtube. A watch/youtu.be/embed link shows the player;
// any other channel URL shows a button; empty shows a placeholder (no fake link).
function videoId(url: string) {
  const m = url.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/)
  return m ? m[1] : null
}

export default function YouTubeSection() {
  const url = portfolioData.contact_links.youtube?.trim()
  const id = url ? videoId(url) : null
  return (
    <section id="youtube" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6">
      <h2 className="font-display text-3xl font-extrabold sm:text-4xl">On YouTube</h2>
      {url ? (
        <div className="mt-6 grid items-center gap-8 md:grid-cols-2">
          {id ? (
            <div className="aspect-video overflow-hidden rounded-2xl border border-border">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${id}`}
                title="Sahil Khan on YouTube"
                loading="lazy"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          ) : null}
          <div>
            <p className="mb-5 max-w-md text-muted">Videos on AI, building and shipping projects.</p>
            <Button3D href={url} color="coral" size="lg" icon={<Play size={20} />}>Visit my channel</Button3D>
          </div>
        </div>
      ) : (
        <p className="mt-4 max-w-md text-muted">Channel link coming soon.</p>
      )}
    </section>
  )
}
