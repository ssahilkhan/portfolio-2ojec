"use client"

import { useEffect, useRef, type PointerEvent } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight } from "lucide-react"
import { featuredProjects, categoryLabels, type Project } from "@/data/projects"

gsap.registerPlugin(ScrollTrigger)

function tilt(e: PointerEvent<HTMLElement>) {
  if (e.pointerType !== "mouse") return
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty("--ry", `${(((e.clientX - r.left) / r.width - 0.5) * 8).toFixed(2)}deg`)
  e.currentTarget.style.setProperty("--rx", `${(-((e.clientY - r.top) / r.height - 0.5) * 8).toFixed(2)}deg`)
}
function untilt(e: PointerEvent<HTMLElement>) {
  e.currentTarget.style.setProperty("--rx", "0deg")
  e.currentTarget.style.setProperty("--ry", "0deg")
}

function Card({ p }: { p: Project }) {
  return (
    <Link
      href={`/projects/${p.slug}/`}
      onPointerMove={tilt}
      onPointerLeave={untilt}
      className="tilt group flex min-h-[26rem] flex-col rounded-2xl border border-border bg-surface p-7 hover:border-border-hover sm:p-9 lg:h-[min(34rem,68vh)] lg:w-[min(36rem,62vw)] lg:shrink-0"
    >
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
        <span>{p.categories.map((c) => categoryLabels[c]).join(", ")}</span>
        <span className="ml-auto">{p.year}</span>
      </div>

      <h3 className="mt-auto pt-14 font-display text-[clamp(2.2rem,4.4vw,3.6rem)] font-semibold leading-[0.95] tracking-[-0.03em]">{p.title}</h3>
      <p className="mt-5 max-w-md leading-relaxed text-foreground/80">{p.summary}</p>

      <div className="mt-8 flex items-end justify-between gap-6">
        <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted">
          {p.stack.slice(0, 4).map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <span className="flex shrink-0 items-center gap-1 text-sm font-medium text-accent">
          {p.status === "Live" ? "Live" : "Details"}
          <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  )
}

export default function FeaturedProjects() {
  const wrap = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    // Pin and scroll sideways on wide screens only; everyone else gets a plain stack.
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const t = track.current!
      const distance = () => Math.max(0, t.scrollWidth - window.innerWidth)
      gsap.to(t, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      })
    })
    return () => mm.revert()
  }, [])

  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-20">
      <div ref={wrap} className="overflow-hidden py-24 sm:py-32 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:py-0">
        <div className="mx-auto mb-12 flex w-full max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl border-t border-border pt-8">
            <h2 id="projects-title" className="font-display text-[clamp(2.4rem,6vw,4.75rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
              Selected work
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Six projects across AI, full-stack, blockchain, quantum and creative tools. Open any card for the full write-up.
            </p>
          </div>
          <Link href="/projects/" className="shrink-0 font-display text-lg font-medium underline decoration-accent decoration-2 underline-offset-8 hover:text-accent">
            EXPLORE ALL PROJECTS →
          </Link>
        </div>

        <div
          ref={track}
          className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 lg:mx-0 lg:w-max lg:max-w-none lg:flex-row lg:gap-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] lg:pr-[10vw]"
        >
          {featuredProjects.map((p) => (
            <Card key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
