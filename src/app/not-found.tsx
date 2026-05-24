"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <span className="text-8xl font-extrabold text-gradient md:text-9xl">404</span>
        </div>
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">
          Quantum State Not Found
        </h1>
        <p className="mb-8 max-w-md text-muted">
          This page has decohered. The quantum state you&apos;re looking for has collapsed into an undefined state.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange to-magenta px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_var(--glow-orange)]"
          >
            <Home size={16} />
            Return Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="glass-hover inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-semibold text-foreground transition-all duration-300"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  )
}
