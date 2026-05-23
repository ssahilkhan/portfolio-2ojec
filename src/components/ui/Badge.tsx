import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "orange" | "magenta" | "navy" | "default"
  className?: string
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    orange: "bg-orange/10 text-orange border-orange/20",
    magenta: "bg-magenta/10 text-magenta border-magenta/20",
    navy: "bg-navy-light/20 text-orange border-navy-light/30",
    default: "bg-white/5 text-muted border-white/10",
  }

  return (
    <span
      className={cn(
        "inline-block rounded-full border px-3 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
