"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, BookOpen, GitBranch, Trophy, ExternalLink } from "lucide-react"
import { skillJourneys } from "@/data/portfolio"
import GlowCard from "@/components/ui/GlowCard"
import Badge from "@/components/ui/Badge"

const milestoneIcons = {
  course: BookOpen,
  project: GitBranch,
  achievement: Trophy,
}

const typeBadgeVariant = {
  course: "navy" as const,
  project: "orange" as const,
  achievement: "magenta" as const,
}

export default function SkillJourney() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div className="space-y-4">
      {skillJourneys.map((journey) => {
        const isOpen = expanded === journey.category
        const Icon = isOpen ? ChevronUp : ChevronDown

        return (
          <motion.div
            key={journey.category}
            layout
            className="overflow-hidden rounded-xl"
          >
            <GlowCard
              glow="orange"
              onClick={() => setExpanded(isOpen ? null : journey.category)}
              className="w-full text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gradient-orange">
                    {journey.category}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {journey.items.slice(0, 4).map((skill) => (
                      <Badge key={skill} variant="orange">{skill}</Badge>
                    ))}
                    {journey.items.length > 4 && (
                      <Badge variant="navy">+{journey.items.length - 4}</Badge>
                    )}
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4 shrink-0 text-muted"
                >
                  <Icon size={20} />
                </motion.div>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 border-t border-border pt-6">
                      {journey.milestones.length > 0 && (
                        <>
                          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
                            Journey Timeline
                          </h4>
                          <div className="relative space-y-6">
                            <div className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-orange via-magenta to-transparent" />
                            {journey.milestones.map((ms, i) => {
                              const MilestoneIcon = milestoneIcons[ms.type]
                              return (
                                <motion.div
                                  key={ms.title}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="relative pl-8"
                                >
                                  <div className="absolute left-0 top-1 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-background">
                                    <MilestoneIcon size={10} className="text-orange" />
                                  </div>
                                  <div className="flex flex-wrap items-baseline gap-2">
                                    <span className="text-sm font-medium">{ms.title}</span>
                                    <Badge variant={typeBadgeVariant[ms.type]} className="text-[10px]">
                                      {ms.type}
                                    </Badge>
                                  </div>
                                  <p className="mt-0.5 text-xs text-muted">{ms.date}</p>
                                  <p className="mt-1 text-sm text-muted">{ms.description}</p>
                                </motion.div>
                              )
                            })}
                          </div>
                        </>
                      )}

                      {journey.linkedProjects.length > 0 && (
                        <div className="mt-6">
                          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                            Linked Projects
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {journey.linkedProjects.map((proj) => (
                              <span
                                key={proj}
                                className="inline-flex items-center gap-1 rounded-full bg-orange/10 px-3 py-1 text-xs text-orange"
                              >
                                <ExternalLink size={10} />
                                {proj}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlowCard>
          </motion.div>
        )
      })}
    </div>
  )
}
