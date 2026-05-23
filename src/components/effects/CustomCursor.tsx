"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener("mousemove", onMove)
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseenter", onEnter)

    return () => {
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseenter", onEnter)
    }
  }, [visible])

  if (typeof window === "undefined") return null

  return (
    <div
      className="pointer-events-none fixed z-[9999] hidden md:block"
      style={{
        left: position.x,
        top: position.y,
        opacity: visible ? 1 : 0,
        transform: "translate(-50%, -50%)",
        transition: "opacity 0.3s ease",
      }}
    >
      <div className="h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange/40 bg-orange/5 blur-[2px] transition-all duration-300" />
    </div>
  )
}
