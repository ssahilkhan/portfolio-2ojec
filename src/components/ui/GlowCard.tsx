import { cn } from "@/lib/utils"

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  glow?: "orange" | "magenta" | "navy"
  onClick?: () => void
}

export default function GlowCard({ children, className, glow = "orange", onClick }: GlowCardProps) {
  const glowColors = {
    orange: "hover:shadow-[0_0_30px_rgba(245,166,35,0.1)]",
    magenta: "hover:shadow-[0_0_30px_rgba(233,30,140,0.1)]",
    navy: "hover:shadow-[0_0_30px_rgba(44,62,122,0.2)]",
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
