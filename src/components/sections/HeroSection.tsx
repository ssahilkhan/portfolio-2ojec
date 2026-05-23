"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowDown, ArrowRight } from "lucide-react"
import { portfolioData } from "@/data/portfolio"

export default function HeroSection() {
  const textRef = useRef<HTMLHeadingElement>(null)

  const headline = portfolioData.branding.headlines[0]
  const tagline = portfolioData.branding_hint.tagline

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-block">
          <span className="animate-pulse-slow inline-block rounded-full border border-orange/20 bg-orange/5 px-4 py-1.5 text-xs font-medium text-orange tracking-wide uppercase">
            {portfolioData.personal_info.current_year} &middot; {portfolioData.personal_info.student_id}
          </span>
        </div>

        <h1
          ref={textRef}
          className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl"
        >
          <span className="text-foreground">{portfolioData.personal_info.name.split(" ")[0]} </span>
          <span className="text-gradient">{portfolioData.personal_info.name.split(" ")[1]}</span>
        </h1>

        <p className="mx-auto mb-4 max-w-2xl text-lg text-muted md:text-xl leading-relaxed">
          {headline}
        </p>

        <p className="mx-auto mb-8 max-w-xl text-sm text-muted/60">
          {tagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange to-magenta px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,166,35,0.3)]"
          >
            View My Work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/about"
            className="glass-hover inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-semibold text-foreground transition-all duration-300"
          >
            About Me
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted">
          {portfolioData.branding_hint.focus_areas.map((area) => (
            <span key={area} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              {area}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={20} className="text-muted" />
      </div>
    </section>
  )
}
