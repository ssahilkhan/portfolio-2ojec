"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const words = [
  "QUANTUM",
  "COMPUTING",
  "SUPERPOSITION",
  "ENTANGLEMENT",
  "INTELLIGENCE",
]

export default function QuantumWordCycle() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex h-14 items-center justify-center md:h-16">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 24, rotateX: 90, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -24, rotateX: -90, filter: "blur(6px)" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="text-xl font-bold tracking-[0.2em] md:text-2xl"
          style={{
            background: "linear-gradient(135deg, #D4AF37, #C9A66B)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
