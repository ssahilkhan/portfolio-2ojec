"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ChevronRight, Star, GitFork, ExternalLink, Code } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import { githubProjectMapping, githubOtherRepos } from "@/data/github-data"
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

function GitHubIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function GitHubBadge({ repos }: { repos: { name: string; stars: number; language: string; url: string; forks: number; updatedAt: string }[] }) {
  const totalStars = repos.reduce((s, r) => s + r.stars, 0)
  const totalForks = repos.reduce((s, r) => s + r.forks, 0)
  const langs = [...new Set(repos.map((r) => r.language).filter(Boolean))]

  return (
    <div className="mt-3 space-y-2">
      <div className="flex flex-wrap items-center gap-3">
        {totalStars > 0 && (
          <span className="flex items-center gap-1 text-xs text-muted">
            <Star size={11} className="text-orange" />
            {totalStars}
          </span>
        )}
        {totalForks > 0 && (
          <span className="flex items-center gap-1 text-xs text-muted">
            <GitFork size={11} />
            {totalForks}
          </span>
        )}
        {langs.map((lang) => (
          <span key={lang} className="flex items-center gap-1 text-xs text-muted">
            <Code size={11} className="text-magenta" />
            {lang}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {repos.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="group inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] text-muted transition-colors hover:bg-orange/10 hover:text-orange"
          >
            <GitHubIcon size={10} />
            {repo.name}
            <ExternalLink size={8} className="opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const featuredOtherRepos = githubOtherRepos
    .filter((r) => r.language && !r.name.includes("github.io"))
    .slice(0, 8)

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
        {portfolioData.projects.map((project) => {
          const githubRepos = githubProjectMapping[project.title]

          return (
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
                  {githubRepos && githubRepos.length > 0 && (
                    <GitHubBadge repos={githubRepos} />
                  )}
                </GlowCard>
              </Link>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <div className="mb-8 text-center">
          <Badge variant="magenta">GitHub</Badge>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            More <span className="text-gradient-magenta">Repositories</span>
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted">
            Other projects and experiments on GitHub
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {featuredOtherRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <GlowCard glow="magenta" className="h-full">
                <div className="flex items-center justify-between mb-2">
                  <GitHubIcon size={14} className="text-muted" />
                  {repo.stars > 0 && (
                    <span className="flex items-center gap-1 text-[10px] text-muted">
                      <Star size={10} />
                      {repo.stars}
                    </span>
                  )}
                </div>
                <h3 className="mb-1 text-sm font-semibold truncate">{repo.name}</h3>
                {repo.description && (
                  <p className="mb-2 text-[11px] text-muted line-clamp-2">{repo.description}</p>
                )}
                <div className="flex items-center gap-2">
                  {repo.language && (
                    <Badge variant="navy" className="text-[9px] px-1.5 py-0.5">{repo.language}</Badge>
                  )}
                  <span className="text-[9px] text-muted ml-auto">
                    {repo.updatedAt?.slice(0, 10)}
                  </span>
                </div>
              </GlowCard>
            </a>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a
            href={portfolioData.contact_links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-orange"
          >
            <GitHubIcon size={14} />
            View all on GitHub
            <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
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
