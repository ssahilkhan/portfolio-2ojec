"use client"

import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"
import { blogPosts } from "@/data/portfolio"
import SectionWrapper from "@/components/ui/SectionWrapper"
import GlowCard from "@/components/ui/GlowCard"
import Badge from "@/components/ui/Badge"
import { formatDate } from "@/lib/utils"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function BlogPage() {
  return (
    <SectionWrapper className="pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <Badge variant="magenta">Blog</Badge>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Thoughts & <span className="text-gradient-magenta">Insights</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Quantum computing, AI, and lessons from building real systems
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto grid max-w-4xl gap-6"
      >
        {blogPosts.map((post) => (
          <motion.div key={post.slug} variants={item}>
            <GlowCard glow="magenta">
              <div className="mb-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="navy">{tag}</Badge>
                ))}
              </div>
              <h3 className="mb-2 text-xl font-bold">{post.title}</h3>
              <p className="mb-4 text-sm text-muted leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-muted">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
