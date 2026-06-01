"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight, RotateCcw } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import FloatingText3D from "@/components/effects/FloatingText3D"
import QuantumWordCycle from "@/components/effects/QuantumWordCycle"
import MorphingBackground from "@/components/effects/MorphingBackground"

const STORAGE_KEY = "hero-style"

function getStoredStyle(): "quantum" | "classic" {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === "classic" || stored === "quantum") return stored
  }
  return "classic"
}

function ClassicHero() {
  const headline = portfolioData.branding.headlines[0]
  const tagline = portfolioData.branding_hint.tagline

  return (
    <>
      <div className="mb-6 inline-block">
        <span className="animate-pulse-slow inline-block rounded-full border border-orange/20 bg-orange/5 px-4 py-1.5 text-xs font-medium text-orange tracking-wide uppercase">
          {portfolioData.personal_info.current_year} &middot; {portfolioData.personal_info.student_id}
        </span>
      </div>

      <div className="mb-8 flex justify-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-orange/30 ring-2 ring-orange/10 shadow-[0_0_30px_var(--glow-orange)]">
          <Image
            src="/images/sahil_professional_Image.jpeg"
            alt={portfolioData.personal_info.name}
            fill
            className="object-cover"
            sizes="128px"
            priority
          />
        </div>
      </div>

      <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
        <span className="text-foreground">{portfolioData.personal_info.name.split(" ")[0]} </span>
        <span className="text-gradient">{portfolioData.personal_info.name.split(" ")[1]}</span>
      </h1>

      <p className="mx-auto mb-4 max-w-2xl text-lg text-muted md:text-xl leading-relaxed">
        {headline}
      </p>

      <p className="mx-auto mb-8 max-w-xl text-sm text-muted">
        {tagline}
      </p>
    </>
  )
}

function QuantumHero() {
  return (
    <>
      <MorphingBackground />

      <div className="relative z-10 mb-6 inline-block">
        <span
          className="inline-block rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide uppercase"
          style={{
            borderColor: "rgba(212, 175, 55, 0.2)",
            color: "#D4AF37",
            backgroundColor: "rgba(212, 175, 55, 0.08)",
          }}
        >
          {portfolioData.personal_info.current_year} &middot; {portfolioData.personal_info.student_id}
        </span>
      </div>

      <div className="relative z-10 mb-4">
        <FloatingText3D />
      </div>

      <div className="relative z-10 mb-8">
        <QuantumWordCycle />
      </div>

      <p className="relative z-10 mx-auto mb-8 max-w-xl text-sm text-[#B6B6B6]/80">
        {portfolioData.branding_hint.tagline}
      </p>
    </>
  )
}

export default function HeroSection() {
  const [style, setStyle] = useState<"quantum" | "classic">("classic")
  const [mounted, setMounted] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    setStyle(getStoredStyle())
  }, [])

  const toggleStyle = () => {
    const next = style === "quantum" ? "classic" : "quantum"
    setStyle(next)
    localStorage.setItem(STORAGE_KEY, next)
  }

  if (!mounted) {
    return (
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="h-8 w-48 mx-auto rounded bg-white/5 animate-pulse mb-6" />
          <div className="h-16 w-64 mx-auto rounded bg-white/5 animate-pulse mb-6" />
        </div>
      </section>
    )
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {style === "quantum" ? <QuantumHero /> : <ClassicHero />}

        <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            style={{
              background: "linear-gradient(135deg, #D4AF37, #E91E8C)",
            }}
          >
            View My Work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/about"
            className="glass-hover inline-flex items-center gap-2 rounded-full border px-8 py-3 text-sm font-semibold text-foreground transition-all duration-300"
            style={{ borderColor: "rgba(212, 175, 55, 0.15)" }}
          >
            About Me
          </Link>
        </div>

        <div className="relative z-10 mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#B6B6B6]">
          {portfolioData.branding_hint.focus_areas.map((area) => (
            <span key={area} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#D4AF37" }} />
              {area}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={toggleStyle}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border px-4 py-2 text-xs text-muted transition-all duration-300 hover:scale-105"
        style={{
          borderColor: "var(--border-color)",
          backgroundColor: "var(--bg-card)",
          backdropFilter: "blur(12px)",
        }}
        title={`Switch to ${style === "quantum" ? "classic" : "quantum"} style`}
      >
        <RotateCcw size={12} />
        {style === "quantum" ? "Classic" : "Quantum"}
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={20} className="text-muted" />
      </div>
    </section>
  )
}
