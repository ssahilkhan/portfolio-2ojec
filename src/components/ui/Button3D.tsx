"use client"

import Link from "next/link"
import type { PointerEvent, ReactNode } from "react"
import { cn } from "@/lib/utils"

export type KeyColor = "cobalt" | "coral" | "mint" | "sun" | "ink"

interface Button3DProps {
  href: string
  children: ReactNode
  color?: KeyColor
  size?: "sm" | "md" | "lg"
  block?: boolean
  icon?: ReactNode
  sub?: string
  active?: boolean
  className?: string
  onClick?: () => void
}

// Tilt toward the mouse and lean a few pixels after it (magnetic); touch and pen skip it.
function tilt(e: PointerEvent<HTMLElement>) {
  if (e.pointerType !== "mouse") return
  const r = e.currentTarget.getBoundingClientRect()
  const x = (e.clientX - r.left) / r.width - 0.5
  const y = (e.clientY - r.top) / r.height - 0.5
  e.currentTarget.style.setProperty("--ry", `${(x * 14).toFixed(1)}deg`)
  e.currentTarget.style.setProperty("--rx", `${(-y * 12).toFixed(1)}deg`)
  e.currentTarget.style.setProperty("--mx", `${(x * 10).toFixed(1)}px`)
  e.currentTarget.style.setProperty("--my", `${(y * 8).toFixed(1)}px`)
}

function reset(e: PointerEvent<HTMLElement>) {
  e.currentTarget.style.setProperty("--ry", "0deg")
  e.currentTarget.style.setProperty("--rx", "0deg")
  e.currentTarget.style.setProperty("--mx", "0px")
  e.currentTarget.style.setProperty("--my", "0px")
}

export default function Button3D({
  href,
  children,
  color = "cobalt",
  size = "md",
  block,
  icon,
  sub,
  active,
  className,
  onClick,
}: Button3DProps) {
  const cls = cn(
    "key3d",
    `key-${color}`,
    size === "sm" && "key3d-sm",
    size === "lg" && "key3d-lg",
    block && "key3d-block",
    className
  )
  const face = (
    <span className="key3d-face">
      {icon}
      <span className="flex flex-col">
        <span>{children}</span>
        {sub && <span className="text-xs font-medium opacity-75">{sub}</span>}
      </span>
    </span>
  )
  const handlers = { onPointerMove: tilt, onPointerLeave: reset, onClick }

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={cls} aria-current={active ? "page" : undefined} {...handlers}>
        {face}
      </Link>
    )
  }
  return (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...handlers}>
      {face}
    </a>
  )
}
