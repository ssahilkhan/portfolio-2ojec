"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import Portrait from "@/components/ui/Portrait"
import Button3D from "@/components/ui/Button3D"
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons"
import { site } from "@/data/site"

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false })
const ease = [0.22, 1, 0.36, 1] as const

function hasWebGL() {
  try {
    const c = document.createElement("canvas")
    return !!(c.getContext("webgl2") || c.getContext("webgl"))
  } catch {
    return false
  }
}

const ghost = "pointer-events-none absolute inset-0 select-none"

export default function Hero() {
  const reduce = useReducedMotion()
  const [gl, setGl] = useState(false)
  const [light, setLight] = useState(false)
  const name = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    setGl(hasWebGL())
    const root = document.documentElement
    const read = () => setLight(root.classList.contains("light"))
    read()
    const mo = new MutationObserver(read)
    mo.observe(root, { attributes: true, attributeFilter: ["class"] })
    return () => mo.disconnect()
  }, [])

  // Two ghost copies of the name sit on deeper planes and slide against the cursor.
  useEffect(() => {
    if (reduce || !window.matchMedia("(pointer: fine)").matches) return
    const el = name.current!
    const move = (e: PointerEvent) => {
      el.style.setProperty("--px", ((e.clientX / innerWidth - 0.5) * 2).toFixed(3))
      el.style.setProperty("--py", ((e.clientY / innerHeight - 0.5) * 2).toFixed(3))
    }
    window.addEventListener("pointermove", move)
    return () => window.removeEventListener("pointermove", move)
  }, [reduce])

  const fade = (delay: number) => ({ initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease, delay } })

  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="hero-name">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_75%_40%,color-mix(in_srgb,var(--accent)_16%,transparent),transparent_70%),radial-gradient(40%_40%_at_15%_90%,color-mix(in_srgb,var(--wave)_10%,transparent),transparent_70%)]"
      />
      {gl && (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]">
          <ParticleField light={light} still={!!reduce} />
        </div>
      )}

      <div className="mx-auto grid min-h-[100svh] w-full max-w-7xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.p {...fade(0.1)} className="font-display text-sm font-medium tracking-wide text-accent sm:text-base">
            {site.role.split(" | ").join("  /  ")}
          </motion.p>

          <h1
            id="hero-name"
            ref={name}
            className="relative mt-6 font-display text-[clamp(3.4rem,9.5vw,8rem)] font-bold leading-[0.9] tracking-[-0.045em]"
            style={{ "--px": 0, "--py": 0 } as React.CSSProperties}
          >
            <span aria-hidden className={`${ghost} text-transparent [-webkit-text-stroke:1px_color-mix(in_srgb,var(--text-primary)_16%,transparent)]`} style={{ transform: "translate(calc(var(--px) * -26px), calc(var(--py) * -16px))" }}>
              Sahil<br />Khan
            </span>
            <span aria-hidden className={`${ghost} text-accent/25`} style={{ transform: "translate(calc(var(--px) * -12px), calc(var(--py) * -8px))" }}>
              Sahil<br />Khan
            </span>
            <motion.span className="relative block" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.2 }}>
              Sahil<br />Khan
            </motion.span>
          </h1>

          <motion.p {...fade(0.5)} className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/85 sm:text-xl">
            I build speech AI, LLM tools and full-stack products, and take them from idea to something people can use.
          </motion.p>

          <motion.div {...fade(0.65)} className="mt-9 flex flex-wrap items-center gap-3">
            <Button3D href="#projects" color="cobalt" size="lg">Explore My Work</Button3D>
            <Button3D href="#contact" color="sun" size="lg">Start a Project</Button3D>
            <a href={site.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-12 w-12 place-items-center rounded-full border border-border text-foreground/80 transition-colors hover:border-accent hover:text-accent">
              <GitHubIcon size={20} />
            </a>
            <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-12 w-12 place-items-center rounded-full border border-border text-foreground/80 transition-colors hover:border-accent hover:text-accent">
              <LinkedInIcon size={20} />
            </a>
          </motion.div>
        </div>

        <motion.figure initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease, delay: 0.4 }} className="relative mx-auto w-[min(70vw,22rem)] lg:mx-0 lg:justify-self-center">
          <div aria-hidden className="absolute -inset-5 rounded-full border border-border" />
          <div aria-hidden className="absolute -inset-10 rounded-full border border-dashed border-border/60" />
          <Portrait priority className="relative w-full" />
          <figcaption className="mt-8 text-center text-sm text-muted">ML Engineer at DeepInfinity.ai</figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
