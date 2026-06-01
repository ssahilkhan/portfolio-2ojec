"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const words = [
  "SUPERPOSITION",
  "ENTANGLEMENT",
  "INTERFERENCE",
  "QUBITS",
  "QUANTUM ML",
]

export default function MorphingBackground() {
  const [index, setIndex] = useState(0)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMouse({ x: x * 3, y: y * 3 })
    }
    window.addEventListener("mousemove", onMouse)
    return () => window.removeEventListener("mousemove", onMouse)
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
      style={{ perspective: "800px" }}
    >
      <div
        style={{
          transform: `rotateX(${-mouse.y}deg) rotateY(${mouse.x}deg)`,
          transition: "transform 0.3s ease-out",
          transformStyle: "preserve-3d",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={words[index]}
            initial={{ opacity: 0, rotateX: 60, scale: 0.8, filter: "blur(12px)" }}
            animate={{ opacity: 1, rotateX: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, rotateX: -60, scale: 1.2, filter: "blur(12px)" }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="select-none text-center text-[clamp(3rem,12vw,10rem)] font-extrabold leading-none tracking-tight"
            style={{
              color: "rgba(212, 175, 55, 0.06)",
              textShadow: "0 0 120px rgba(212, 175, 55, 0.03)",
              WebkitTextStroke: "1px rgba(212, 175, 55, 0.04)",
              transformStyle: "preserve-3d",
            }}
          >
            {words[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
