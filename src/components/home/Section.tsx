import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

// Shared frame for home sections: a big editorial heading, an optional
// one-paragraph intro, and an optional action on the right.
export default function Section({
  id,
  title,
  intro,
  action,
  children,
  className,
}: {
  id: string
  title: ReactNode
  intro?: ReactNode
  action?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("mx-auto max-w-7xl scroll-mt-20 px-4 py-24 sm:px-6 sm:py-32", className)}>
      <div className="mb-12 flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <h2 id={`${id}-title`} className="font-display text-[clamp(2.4rem,6vw,4.75rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
            {title}
          </h2>
          {intro && <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
      {children}
    </section>
  )
}
