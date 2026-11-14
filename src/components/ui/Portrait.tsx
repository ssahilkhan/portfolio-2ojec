"use client"

import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

// The one photo on the site, always a circle. Leans a few degrees toward the
// pointer on desktop; MotionConfig reducedMotion="user" keeps it still otherwise.
export default function Portrait({ className, priority }: { className?: string; priority?: boolean }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 14 })
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 14 })

  return (
    <motion.div
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return
        const r = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - r.left) / r.width - 0.5)
        y.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onPointerLeave={() => { x.set(0); y.set(0) }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 700 }}
      className={cn("relative aspect-square overflow-hidden rounded-full", className)}
    >
      <Image
        src="/images/sahil_portrait.jpeg"
        alt="Portrait of Sahil Khan"
        fill
        priority={priority}
        sizes="(min-width: 1024px) 22rem, 70vw"
        className="object-cover"
      />
    </motion.div>
  )
}
