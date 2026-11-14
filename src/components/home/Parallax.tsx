"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Drifts its child a little slower than the page while it crosses the viewport.
export default function Parallax({ children, amount = 12, className }: { children: ReactNode; amount?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        ref.current,
        { yPercent: amount / 2 },
        { yPercent: -amount / 2, ease: "none", scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true } }
      )
    })
    return () => mm.revert()
  }, [amount])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
