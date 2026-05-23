"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import SectionWrapper from "@/components/ui/SectionWrapper"
import Badge from "@/components/ui/Badge"
import GlowCard from "@/components/ui/GlowCard"
import { slugify } from "@/lib/utils"

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const project = portfolioData.projects.find((p) => slugify(p.title) === id)

  if (!project) {
    return (
      <SectionWrapper className="pt-32 text-center">
        <h1 className="mb-4 text-3xl font-bold">Project Not Found</h1>
        <Link href="/projects" className="text-orange hover:underline">
          Back to projects
        </Link>
      </SectionWrapper>
    )
  }

  return (
    <SectionWrapper className="pt-32">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-orange"
        >
          <ArrowLeft size={14} />
          Back to projects
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="mb-2 flex items-center gap-3">
          <Badge variant="orange">{project.period}</Badge>
        </div>
        <h1 className="text-4xl font-bold md:text-5xl">{project.title}</h1>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 space-y-8"
        >
          <div>
            <h2 className="mb-3 text-xl font-semibold text-orange">The Problem</h2>
            <p className="text-muted leading-relaxed">{project.problem}</p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-magenta">The Solution</h2>
            <p className="text-muted leading-relaxed">{project.solution}</p>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-orange">Key Features</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.key_features.map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-sm text-muted">
                  <CheckCircle size={16} className="mt-0.5 shrink-0 text-orange" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-magenta">Outcome</h2>
            <p className="text-muted leading-relaxed">{project.outcome}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GlowCard glow="magenta">
            <h3 className="mb-4 text-lg font-semibold">Tech Stack</h3>
            <div className="space-y-3">
              {Object.entries(project.tech_stack).map(([key, value]) => (
                <div key={key}>
                  <p className="text-xs uppercase tracking-wider text-muted">{key}</p>
                  <p className="text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
