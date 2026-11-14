"use client"

import dynamic from "next/dynamic"
import Portrait from "@/components/ui/Portrait"
import { motion } from "framer-motion"
import Button3D from "@/components/ui/Button3D"
import { site } from "@/data/site"
import { GitHubIcon } from "@/components/ui/BrandIcons"

const Waveform = dynamic(() => import("./Waveform"), { ssr: false })

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  // Always pass the same props so server and client markup match;
  // MotionConfig reducedMotion="user" in Providers drops the movement.
  const rise = (delay: number) => ({ initial: { y: "105%" }, animate: { y: "0%" }, transition: { duration: 0.9, ease, delay } })
  const fade = (delay: number) => ({ initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, ease, delay } })

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-24" aria-labelledby="hero-name">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[62%] [mask-image:linear-gradient(to_bottom,transparent,black_35%)]">
        <Waveform />
      </div>

      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1fr_auto]">
        <div>
          <motion.p {...fade(0.1)} className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {site.role}
          </motion.p>

          <h1 id="hero-name" className="mt-5 font-display text-[clamp(4.25rem,15vw,11.5rem)] font-bold leading-[0.84] tracking-[-0.045em]">
            <span className="block overflow-hidden pb-[0.04em]">
              <motion.span className="block" {...rise(0.2)}>SAHIL</motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.04em]">
              <motion.span className="block" {...rise(0.32)}>KHAN</motion.span>
            </span>
          </h1>

          <motion.p {...fade(0.6)} className="mt-7 max-w-lg font-display text-xl leading-snug sm:text-2xl">
            {site.tagline}
          </motion.p>

          <motion.div {...fade(0.75)} className="mt-9 flex flex-wrap gap-3">
            <Button3D href="/projects" color="cobalt" size="lg">Explore Projects</Button3D>
            <Button3D href="#contact" color="sun" size="lg">Contact Me</Button3D>
            <Button3D href={site.links.github} color="ink" size="lg" icon={<GitHubIcon size={18} />}>GitHub</Button3D>
          </motion.div>
        </div>

        <motion.figure
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.45 }}
          className="relative mx-auto w-[min(72vw,20rem)] lg:mx-0 lg:w-[22rem]"
        >
          <Portrait priority className="w-full" />
          <figcaption className="mt-5 flex items-center justify-center gap-2 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
            ML Engineer at DeepInfinity.ai
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
