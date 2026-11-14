"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

// Headline that rises in word by word on load.
export function RevealHeadline({ text }: { text: string }) {
  return (
    <h1 className="font-display text-[clamp(2.6rem,7.5vw,6.25rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.15 + i * 0.05 }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </h1>
  )
}

export type Stop = { when: string; title: string; detail: string; tag: string; href?: string }

// Vertical journey. The rail fills as the reader scrolls through it.
export function Journey({ stops }: { stops: Stop[] }) {
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] })
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })

  return (
    <ol ref={ref} className="relative ml-2 sm:ml-[9.5rem]">
      <span aria-hidden className="absolute bottom-2 left-0 top-2 w-px bg-border" />
      <motion.span aria-hidden style={{ scaleY: fill }} className="absolute bottom-2 left-0 top-2 w-px origin-top bg-gradient-to-b from-accent to-wave" />
      {stops.map((s) => (
        <li key={s.when + s.title} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
          <span aria-hidden className="absolute -left-[5px] top-[0.55rem] h-[11px] w-[11px] rounded-full border-2 border-accent bg-background" />
          <p className="font-display text-sm text-muted sm:absolute sm:-left-[9.5rem] sm:top-[0.3rem] sm:w-32 sm:text-right">{s.when}</p>
          <h3 className="mt-1 font-display text-xl font-medium sm:mt-0 sm:text-2xl">
            {s.href ? (
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="underline decoration-accent/60 underline-offset-4 hover:text-accent">
                {s.title}
              </a>
            ) : (
              s.title
            )}
          </h3>
          <p className="mt-2 max-w-xl leading-relaxed text-muted">{s.detail}</p>
          <p className="mt-3 text-xs text-wave">{s.tag}</p>
        </li>
      ))}
    </ol>
  )
}
