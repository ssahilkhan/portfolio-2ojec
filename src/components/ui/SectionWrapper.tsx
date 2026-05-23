import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("relative mx-auto max-w-7xl px-6 py-24 md:py-32", className)}
    >
      {children}
    </section>
  )
}
