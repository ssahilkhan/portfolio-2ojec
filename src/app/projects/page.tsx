"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import SectionWrapper from "@/components/ui/SectionWrapper"
import GlowCard from "@/components/ui/GlowCard"
import Badge from "@/components/ui/Badge"
import { slugify } from "@/lib/utils"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function ProjectsPage() {
  return (
    <SectionWrapper className="pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <Badge variant="orange">Projects</Badge>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Things I&apos;ve <span className="text-gradient">Built</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Real projects solving real problems — from quantum dashboards to AI chatbots
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {portfolioData.projects.map((project) => (
          <motion.div key={project.title} variants={item} className="flex">
            <Link href={`/projects/${slugify(project.title)}`} className="group flex w-full">
              <GlowCard glow="orange" className="flex w-full flex-col">
                <div className="mb-3 flex items-center justify-between">
                  <Badge variant="orange">{project.period}</Badge>
                  <ChevronRight
                    size={18}
                    className="text-muted transition-all group-hover:translate-x-1 group-hover:text-orange"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 flex-1 text-sm text-muted leading-relaxed">
                  {project.impact}
                </p>
                <div className="flex flex-wrap gap-2">
                  {Object.values(project.tech_stack).slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="navy">{tech}</Badge>
                  ))}
                </div>
              </GlowCard>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center"
      >
        <Link
          href="/experience"
          className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-orange"
        >
          View my professional experience
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </SectionWrapper>
  )
}
