"use client"

import { useEffect, useRef, useCallback } from "react"

const TRAIL_COUNT = 5

export default function CustomCursor() {
  const trailsRef = useRef<HTMLDivElement[]>([])
  const positionsRef = useRef<{ x: number; y: number }[]>(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: 0, y: 0 }))
  )
  const rafRef = useRef<number>(0)
  const visibleRef = useRef(false)

  const setRef = useCallback((el: HTMLDivElement | null, i: number) => {
    if (el) trailsRef.current[i] = el
  }, [])

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    const onMove = (e: MouseEvent) => {
      positionsRef.current[0] = { x: e.clientX, y: e.clientY }
      if (!visibleRef.current) {
        visibleRef.current = true
      }
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        visibleRef.current = false
      }, 2000)
    }

    const animate = () => {
      for (let i = TRAIL_COUNT - 1; i > 0; i--) {
        const lead = positionsRef.current[i - 1]
        const current = positionsRef.current[i]
        current.x += (lead.x - current.x) * 0.25
        current.y += (lead.y - current.y) * 0.25
      }

      for (let i = 0; i < TRAIL_COUNT; i++) {
        const el = trailsRef.current[i]
        if (!el) continue
        const pos = positionsRef.current[i]
        const opacity = visibleRef.current ? 1 - i * 0.18 : 0
        const scale = 1 - i * 0.12
        el.style.transform = `translate(${pos.x - 4}px, ${pos.y - 4}px) scale(${scale})`
        el.style.opacity = String(Math.max(0, opacity))
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", onMove)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(rafRef.current)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => setRef(el, i)}
          className="pointer-events-none fixed z-[9999] hidden md:block"
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: i === 0
              ? "rgba(212, 175, 55, 0.6)"
              : "rgba(212, 175, 55, 0.2)",
            boxShadow: i === 0
              ? "0 0 12px rgba(212, 175, 55, 0.3), 0 0 24px rgba(212, 175, 55, 0.1)"
              : "none",
            transition: "opacity 0.15s ease",
            willChange: "transform, opacity",
          }}
        />
      ))}
    </>
  )
}
