"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Code2, Brain, Briefcase, Trophy, BookOpen, Contact } from "lucide-react"

const quickLinks = [
  { name: "Skills", path: "/skills", icon: Code2, color: "text-orange", desc: "Technologies & expertise" },
  { name: "Projects", path: "/projects", icon: Brain, color: "text-magenta", desc: "Work I've built" },
  { name: "Experience", path: "/experience", icon: Briefcase, color: "text-orange", desc: "Professional journey" },
  { name: "Achievements", path: "/achievements", icon: Trophy, color: "text-magenta", desc: "Milestones & awards" },
  { name: "Blog", path: "/blog", icon: BookOpen, color: "text-orange", desc: "Thoughts & insights" },
  { name: "Contact", path: "/contact", icon: Contact, color: "text-magenta", desc: "Get in touch" },
]

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

export default function QuickLinks() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-32">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {quickLinks.map((link) => {
          const Icon = link.icon
          return (
            <motion.div key={link.path} variants={item}>
              <Link
                href={link.path}
                className="group glass flex items-center gap-4 rounded-xl p-5 transition-all duration-300 hover:border-orange/20 hover:-translate-y-1"
              >
                <div className="rounded-lg bg-white/5 p-3 transition-colors group-hover:bg-orange/10">
                  <Icon size={22} className={link.color} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{link.name}</h3>
                  <p className="text-xs text-muted">{link.desc}</p>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
