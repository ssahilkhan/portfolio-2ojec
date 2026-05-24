import { cn } from "@/lib/utils"

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  glow?: "orange" | "magenta" | "navy"
  onClick?: () => void
}

export default function GlowCard({ children, className, glow = "orange", onClick }: GlowCardProps) {
  const glowColors = {
    orange: "hover:shadow-[0_0_30px_var(--glow-orange)]",
    magenta: "hover:shadow-[0_0_30px_var(--glow-magenta)]",
    navy: "hover:shadow-[0_0_30px_var(--glow-blue)]",
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        "glass rounded-xl p-6 transition-all duration-300",
        glowColors[glow],
        "hover:border-orange/20 hover:-translate-y-1",
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  )
}
