"use client"

import { useEffect, useRef } from "react"

// A ring that trails the mouse and names what a click will do ("View project",
// "Read", "Play"). It also feeds --cx/--cy to the page spotlight. Desktop mouse
// only; the native cursor stays, so text fields keep their I-beam.
export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null)
  const label = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return
    const el = ring.current!
    const root = document.documentElement
    let x = -100, y = -100, rx = x, ry = y, id = 0

    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return
      x = e.clientX
      y = e.clientY
      root.style.setProperty("--cx", `${x}px`)
      root.style.setProperty("--cy", `${y}px`)
      const target = (e.target as Element).closest<HTMLElement>("[data-cursor], a, button")
      const text = target?.dataset.cursor ?? ""
      label.current!.textContent = text
      el.dataset.state = text ? "label" : target ? "link" : ""
    }
    const tick = () => {
      rx += (x - rx) * 0.2
      ry += (y - ry) * 0.2
      el.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      id = requestAnimationFrame(tick)
    }
    const hide = () => { el.dataset.state = "hidden" }

    root.classList.add("has-cursor")
    window.addEventListener("pointermove", move)
    document.addEventListener("pointerleave", hide)
    id = requestAnimationFrame(tick)
    return () => {
      root.classList.remove("has-cursor")
      window.removeEventListener("pointermove", move)
      document.removeEventListener("pointerleave", hide)
      cancelAnimationFrame(id)
    }
  }, [])

  return (
    <div ref={ring} aria-hidden className="cursor-ring">
      <span ref={label} />
    </div>
  )
}
