"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Globe, Code2, Send, MapPin, Camera, ExternalLink } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import SectionWrapper from "@/components/ui/SectionWrapper"
import GlowCard from "@/components/ui/GlowCard"
import Badge from "@/components/ui/Badge"

const contactMethods = [
  { name: "Email", value: portfolioData.personal_info.email, url: portfolioData.contact_links.email, icon: Mail },
  { name: "GitHub", value: "ssaahhil832", url: portfolioData.contact_links.github, icon: ExternalLink },
  { name: "LinkedIn", value: "sorakayalapetasahilkhan", url: portfolioData.contact_links.linkedin, icon: Globe },
  { name: "LeetCode", value: "ssaahhil832", url: portfolioData.contact_links.leetcode, icon: Code2 },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:${portfolioData.personal_info.email}?subject=Portfolio Contact from ${formState.name}&body=${formState.message}`
    window.open(mailto)
    setSent(true)
  }

  return (
    <SectionWrapper className="pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <Badge variant="orange">Contact</Badge>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Get In <span className="text-gradient">Touch</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Have a question, idea, or opportunity? Let&apos;s connect.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4 lg:col-span-2"
        >
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <a
                key={method.name}
                href={method.url}
                target={method.url.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-white/5"
              >
                <div className="rounded-lg bg-orange/10 p-3 transition-colors group-hover:bg-orange/20">
                  <Icon size={20} className="text-orange" />
                </div>
                <div>
                  <p className="text-sm font-medium">{method.name}</p>
                  <p className="text-xs text-muted">{method.value}</p>
                </div>
              </a>
            )
          })}

          <div className="mt-6 flex items-center gap-2 text-xs text-muted">
            <MapPin size={12} className="text-orange" />
            {portfolioData.personal_info.location}
          </div>

          <a
            href="https://instagram.com/space_time_dilation"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-muted hover:text-orange transition-colors"
          >
            <Camera size={12} className="text-magenta" />
            @space_time_dilation
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-3"
        >
          <GlowCard glow="magenta">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Send size={40} className="mb-4 text-orange" />
                <h3 className="text-xl font-bold">Message Sent!</h3>
                <p className="text-sm text-muted">Thanks for reaching out. I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-medium text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full rounded-lg border border-border bg-white/5 px-4 py-3 text-sm text-foreground placeholder-muted/50 outline-none transition-colors focus:border-orange/50 focus:ring-1 focus:ring-orange/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-medium text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full rounded-lg border border-border bg-white/5 px-4 py-3 text-sm text-foreground placeholder-muted/50 outline-none transition-colors focus:border-orange/50 focus:ring-1 focus:ring-orange/20"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-xs font-medium text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full resize-none rounded-lg border border-border bg-white/5 px-4 py-3 text-sm text-foreground placeholder-muted/50 outline-none transition-colors focus:border-orange/50 focus:ring-1 focus:ring-orange/20"
                    placeholder="What would you like to say?"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange to-magenta px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,166,35,0.3)]"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </GlowCard>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
