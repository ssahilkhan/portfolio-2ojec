"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { testimonials } from "@/data/portfolio"
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function TestimonialsPage() {
  return (
    <SectionWrapper className="pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <Badge variant="orange">Feedback</Badge>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          What People <span className="text-gradient">Say</span>
        </h1>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2"
      >
        {testimonials.map((t) => (
          <motion.div key={t.name} variants={item}>
            <GlowCard glow="orange" className="relative h-full">
              <Quote size={24} className="mb-4 text-orange/30" />
              <p className="mb-6 text-sm text-muted leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted">{t.role}, {t.company}</p>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
