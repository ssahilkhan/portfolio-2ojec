"use client"

import { useEffect, useState } from "react"

export default function FloatingText3D() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const name = "SAHIL KHAN"

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMouse({ x, y })
    }
    window.addEventListener("mousemove", onMouse)
    return () => window.removeEventListener("mousemove", onMouse)
  }, [])

  return (
    <div
      className="flex justify-center"
      style={{ perspective: "1200px" }}
    >
      <div
        style={{
          transform: `rotateX(${-mouse.y * 1.5}deg) rotateY(${mouse.x * 1.5}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.1s ease-out",
        }}
      >
        <h1
          className="text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl"
          style={{
            color: "#F8FAFC",
            textShadow: `
              0 0 40px rgba(212, 175, 55, 0.2),
              0 ${10 + mouse.y * 5}px ${30 + mouse.x * 10}px rgba(0,0,0,0.4)
            `,
            transform: "translateZ(40px)",
            letterSpacing: "0.02em",
            lineHeight: 1.1,
          }}
        >
          {name.split("").map((char, i) => (
            <span
              key={i}
              className="inline-block"
              style={{
                animation: `letter-float 3s ease-in-out ${i * 0.08}s infinite`,
                transform: `translateZ(${Math.sin((i / name.length) * Math.PI * 2) * 15}px)`,
                display: char === " " ? "inline-block" : "inline-block",
                width: char === " " ? "0.3em" : undefined,
                transition: "text-shadow 0.3s ease",
              }}
            >
              {char !== " " && char}
            </span>
          ))}
        </h1>
      </div>
    </div>
  )
}
