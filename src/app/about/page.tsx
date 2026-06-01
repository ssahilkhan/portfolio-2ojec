"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, GraduationCap, Target, Zap } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import SectionWrapper from "@/components/ui/SectionWrapper"
import GlowCard from "@/components/ui/GlowCard"
import Badge from "@/components/ui/Badge"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
}

export default function AboutPage() {
  const { about, personal_info, education, summary, branding } = portfolioData

  return (
    <SectionWrapper className="pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <Badge variant="orange">About Me</Badge>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          The Story Behind <span className="text-gradient">the Code</span>
        </h1>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-5">
        <motion.div
          custom={0}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="lg:col-span-3 space-y-8"
        >
          <div>
            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
              <Zap size={20} className="text-orange" />
              Who I Am
            </h2>
            <p className="text-muted leading-relaxed">{about.who_i_am}</p>
          </div>

          <div>
            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
              <Target size={20} className="text-orange" />
              What I&apos;m Doing Now
            </h2>
            <p className="text-muted leading-relaxed">{about.what_im_doing_now}</p>
          </div>

          <div>
            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
              <GraduationCap size={20} className="text-orange" />
              What I Aim to Become
            </h2>
            <p className="text-muted leading-relaxed">{about.what_i_aim_to_become}</p>
          </div>
        </motion.div>

        <motion.div
          custom={2}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="lg:col-span-2 space-y-6"
        >
          <motion.div
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="overflow-hidden rounded-xl border border-border"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src="/images/sahil_professional_Image.jpeg"
                alt={portfolioData.personal_info.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </motion.div>

          <GlowCard glow="orange">
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={18} className="text-orange" />
              <span className="text-sm text-muted">{personal_info.location}</span>
            </div>
            <div className="space-y-2">
              {education.map((edu) => (
                <div key={edu.degree} className="border-b border-border pb-2 last:border-0">
                  <p className="font-medium text-sm">{edu.degree}</p>
                  <p className="text-xs text-muted">{edu.institution}</p>
                  <p className="text-xs text-orange">
                    {edu.cgpa || edu.score} &middot; {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </GlowCard>

          <GlowCard glow="magenta">
            <h3 className="mb-3 font-semibold">Core Strengths</h3>
            <div className="space-y-3">
              {about.strengths.map((s) => (
                <div key={s.strength}>
                  <p className="text-sm font-medium text-orange">{s.strength}</p>
                  <p className="text-xs text-muted">{s.evidence}</p>
                </div>
              ))}
            </div>
          </GlowCard>

          <GlowCard glow="navy">
            <h3 className="mb-3 font-semibold">Current Focus</h3>
            <div className="flex flex-wrap gap-2">
              {portfolioData.areas_of_interest.map((area) => (
                <Badge key={area} variant="orange">{area}</Badge>
              ))}
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
