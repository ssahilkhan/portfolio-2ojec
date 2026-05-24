"use client"

import { motion } from "framer-motion"
import { skillCategories, portfolioData } from "@/data/portfolio"
import SectionWrapper from "@/components/ui/SectionWrapper"
import GlowCard from "@/components/ui/GlowCard"
import Badge from "@/components/ui/Badge"
import SkillJourney from "@/components/sections/SkillJourney"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function SkillsPage() {
  return (
    <SectionWrapper className="pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <Badge variant="magenta">Expertise</Badge>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Skills & <span className="text-gradient-magenta">Technologies</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Technologies I work with across quantum computing, AI/ML, and full-stack development
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {skillCategories.map((category) => (
          <motion.div key={category.category} variants={item}>
            <GlowCard glow="orange">
              <h3 className="mb-4 text-lg font-semibold text-gradient-orange">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <Badge key={skill} variant="orange">
                    {skill}
                  </Badge>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <div className="mb-10 text-center">
          <Badge variant="orange">Journey</Badge>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Skill <span className="text-gradient">Journey</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
            Expand each category to see the timeline of projects, courses, and milestones
          </p>
        </div>
        <SkillJourney />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <h2 className="mb-6 text-2xl font-bold">
          Academic <span className="text-gradient">Coursework</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {portfolioData.coursework.map((course) => (
            <Badge key={course} variant="navy">
              {course}
            </Badge>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
