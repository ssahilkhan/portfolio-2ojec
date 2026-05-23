"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Lightbulb } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import SectionWrapper from "@/components/ui/SectionWrapper"
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

        {portfolioData.experience.map((exp, i) => (
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

              <p className="mb-4 text-sm font-medium text-orange italic">
                {exp.impact}
              </p>

              <ul className="mb-4 space-y-2">
                {exp.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="navy">{tech}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
