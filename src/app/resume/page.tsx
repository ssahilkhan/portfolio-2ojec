"use client"

import { motion } from "framer-motion"
import { Download, FileText, ExternalLink } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import SectionWrapper from "@/components/ui/SectionWrapper"
import GlowCard from "@/components/ui/GlowCard"
import Badge from "@/components/ui/Badge"

export default function ResumePage() {
  const { personal_info, education, summary, coursework, areas_of_interest } = portfolioData

  return (
    <SectionWrapper className="pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <Badge variant="orange">Resume</Badge>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          <span className="text-gradient">Resume</span> / CV
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mx-auto mb-12 flex max-w-2xl justify-center gap-4"
      >
        <a
          href={`mailto:${personal_info.email}?subject=Resume Request`}
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange to-magenta px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_var(--glow-orange)]"
        >
          <Download size={16} />
          Request Resume
        </a>
        <a
          href={portfolioData.contact_links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-hover inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300"
        >
          <ExternalLink size={16} />
          LinkedIn
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mx-auto max-w-4xl"
      >
        <GlowCard glow="orange">
          <div className="mb-6 flex items-center gap-3">
            <FileText size={20} className="text-orange" />
            <h2 className="text-xl font-bold">{personal_info.name}</h2>
          </div>

          <div className="mb-6">
            <p className="text-xs text-muted">{personal_info.email} &middot; {personal_info.phone} &middot; {personal_info.location}</p>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange">Summary</h3>
            <p className="text-sm text-muted leading-relaxed">{summary}</p>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange">Education</h3>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.degree} className="border-l-2 border-orange/30 pl-4">
                  <p className="text-sm font-medium">{edu.degree}</p>
                  <p className="text-xs text-muted">{edu.institution}</p>
                  <p className="text-xs text-orange">{edu.cgpa || edu.score} &middot; {edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange">Coursework</h3>
            <div className="flex flex-wrap gap-2">
              {coursework.map((c) => (
                <Badge key={c} variant="navy">{c}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange">Areas of Interest</h3>
            <div className="flex flex-wrap gap-2">
              {areas_of_interest.map((a) => (
                <Badge key={a} variant="orange">{a}</Badge>
              ))}
            </div>
          </div>
        </GlowCard>
      </motion.div>
    </SectionWrapper>
  )
}
