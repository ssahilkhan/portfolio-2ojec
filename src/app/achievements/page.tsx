"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Award, ExternalLink, Eye } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import SectionWrapper from "@/components/ui/SectionWrapper"
import GlowCard from "@/components/ui/GlowCard"
import Badge from "@/components/ui/Badge"
import CertificatePopup from "@/components/sections/CertificatePopup"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function AchievementsPage() {
  const [popupOpen, setPopupOpen] = useState(false)
  const [certIndex, setCertIndex] = useState(0)

  const openCert = (i: number) => {
    setCertIndex(i)
    setPopupOpen(true)
  }

  return (
    <SectionWrapper className="pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <Badge variant="magenta">Achievements</Badge>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Milestones & <span className="text-gradient-magenta">Recognition</span>
        </h1>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-xl font-semibold flex items-center gap-2">
            <Award size={20} className="text-orange" />
            Achievements
          </h2>
          <div className="space-y-4">
            {portfolioData.achievements.map((ach) => (
              <motion.div key={ach.title} variants={item}>
                <GlowCard glow="orange">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold">{ach.title}</h3>
                      <p className="text-sm text-muted">{ach.description}</p>
                    </div>
                    <Badge variant="orange">{ach.date}</Badge>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-xl font-semibold flex items-center gap-2">
            <Award size={20} className="text-magenta" />
            Certifications
          </h2>
          <div className="space-y-4">
            {portfolioData.certifications.map((cert, i) => (
              <motion.div key={cert.title} variants={item}>
                <GlowCard glow="magenta" onClick={() => openCert(i)}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold">{cert.title}</h3>
                      <p className="text-sm text-muted">{cert.provider} &middot; {cert.date}</p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <span className="rounded-full p-2 text-muted transition-colors hover:text-magenta hover:bg-magenta/10">
                        <Eye size={14} />
                      </span>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="rounded-full p-2 text-muted transition-colors hover:text-orange hover:bg-orange/10"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <CertificatePopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        initialIndex={certIndex}
      />
    </SectionWrapper>
  )
}
