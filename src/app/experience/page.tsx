"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Lightbulb, Rocket, Star, Globe, ArrowRight } from "lucide-react"
import { portfolioData, roleTransitions, spaceJourney } from "@/data/portfolio"
import SectionWrapper from "@/components/ui/SectionWrapper"
import GlowCard from "@/components/ui/GlowCard"
import Badge from "@/components/ui/Badge"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0 },
}

export default function ExperiencePage() {
  const deepInfTransition = roleTransitions.find(
    (r) => r.company === "Deep Infinity (AI Startup)"
  )

  return (
    <SectionWrapper className="pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <Badge variant="orange">Experience</Badge>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Professional <span className="text-gradient">Journey</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          From quantum hackathons to healthcare AI — work that matters
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative space-y-12"
      >
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-orange/40 via-magenta/40 to-transparent md:left-8" />

        {portfolioData.experience.map((exp, i) => {
          const hasRoleTransition = roleTransitions.find((r) => r.company === exp.company)

          return (
            <motion.div
              key={exp.title}
              variants={item}
              className="relative pl-0 md:pl-20"
            >
              <div className="absolute left-0 top-1 hidden h-4 w-4 rounded-full border-2 border-orange bg-background md:block" />

              <div className="glass rounded-xl p-6 md:p-8">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-sm text-orange">{exp.company}</p>
                  </div>
                  <Badge variant="orange">{exp.period}</Badge>
                </div>

                <div className="mb-4 flex flex-wrap gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                </div>

                {hasRoleTransition && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 rounded-lg bg-orange/5 border border-orange/10 p-3"
                  >
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-orange">
                      Role Progression
                    </p>
                    <div className="flex flex-col gap-2">
                      {hasRoleTransition.transitions.map((t, ti) => (
                        <div key={t.title} className="flex items-center gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange/10">
                            <div className={`h-2 w-2 rounded-full ${ti === hasRoleTransition.transitions.length - 1 ? "bg-orange" : "bg-orange/40"}`} />
                          </div>
                          <div className="flex flex-1 flex-wrap items-baseline gap-x-3">
                            <span className={`text-sm font-medium ${ti === hasRoleTransition.transitions.length - 1 ? "text-orange" : "text-muted"}`}>
                              {t.title}
                            </span>
                            <span className="text-xs text-muted">{t.period}</span>
                            {t.note && (
                              <Badge variant="navy" className="text-[10px]">{t.note}</Badge>
                            )}
                          </div>
                          {ti < hasRoleTransition.transitions.length - 1 && (
                            <ArrowRight size={12} className="text-orange/40 shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                <p className="mb-4 text-sm font-medium text-orange italic">
                  {exp.impact}
                </p>

                {exp.responsibilities && (
                  <ul className="mb-4 space-y-2">
                    {exp.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {exp.what_i_learned && exp.what_i_learned.length > 0 && (
                  <details className="group mb-4">
                    <summary className="flex cursor-pointer items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted transition-colors hover:text-foreground">
                      <Lightbulb size={12} />
                      What I Learned
                      <motion.span
                        className="ml-auto"
                        animate={{ rotate: 0 }}
                      >
                        <ArrowRight size={12} className="transition-transform group-open:rotate-90" />
                      </motion.span>
                    </summary>
                    <ul className="mt-3 space-y-1.5">
                      {exp.what_i_learned.map((lesson) => (
                        <li key={lesson} className="flex items-start gap-2 text-xs text-muted">
                          <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-magenta" />
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="navy">{tech}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative mt-24"
      >
        <div className="mb-10 text-center">
          <Badge variant="magenta">Passion Project</Badge>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Space <span className="text-gradient-magenta">Journey</span>
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted">
            Sharing the cosmos through a telescope lens
          </p>
        </div>

        <GlowCard glow="magenta" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-magenta/5 via-transparent to-purple-900/10" />

          <div className="relative z-10 grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-magenta/10">
                  <Rocket size={22} className="text-magenta" />
                </div>
                <div>
                  <p className="text-lg font-bold">{spaceJourney.handle}</p>
                  <p className="text-xs text-muted">{spaceJourney.platform}</p>
                </div>
              </div>

              <div className="mb-4 flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 rounded-full bg-magenta/10 px-3 py-1 text-xs text-magenta">
                  <Star size={12} />
                  {spaceJourney.followers}
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-magenta/5 px-3 py-1 text-xs text-muted">
                  <Globe size={12} />
                  {spaceJourney.period}
                </div>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {spaceJourney.focus.map((f) => (
                  <Badge key={f} variant="magenta">{f}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-magenta">
                Milestones
              </h4>
              <div className="relative space-y-4">
                <div className="absolute left-[5px] top-1 h-[calc(100%-8px)] w-px bg-gradient-to-b from-magenta/40 to-transparent" />
                {spaceJourney.milestones.map((ms, i) => (
                  <motion.div
                    key={ms}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-7"
                  >
                    <div className="absolute left-0 top-1 flex h-[11px] w-[11px] items-center justify-center rounded-full bg-background">
                      <div className="h-1.5 w-1.5 rounded-full bg-magenta" />
                    </div>
                    <p className="text-sm text-muted">{ms}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </GlowCard>
      </motion.div>
    </SectionWrapper>
  )
}
