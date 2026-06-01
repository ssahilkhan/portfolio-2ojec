"use client"

import { useEffect, useCallback, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import GlowCard from "@/components/ui/GlowCard"
import Badge from "@/components/ui/Badge"

interface CertificatePopupProps {
  isOpen: boolean
  onClose: () => void
  initialIndex?: number
}

export default function CertificatePopup({ isOpen, onClose, initialIndex = 0 }: CertificatePopupProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [zoomed, setZoomed] = useState(false)
  const certs = portfolioData.certifications
  const current = certs[currentIndex]

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % certs.length)
    setZoomed(false)
  }, [certs.length])

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + certs.length) % certs.length)
    setZoomed(false)
  }, [certs.length])

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setZoomed(false); onClose() }
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    window.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose, goNext, goPrev])

  useEffect(() => {
    if (isOpen) setCurrentIndex(initialIndex)
  }, [initialIndex, isOpen])

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-2xl"
          >
            <GlowCard glow="orange" className="p-0 overflow-hidden">
              <div className="relative flex items-center justify-between border-b border-border p-4">
                <button
                  onClick={onClose}
                  className="rounded-full p-2 text-muted transition-colors hover:bg-white/10 hover:text-foreground"
                >
                  <X size={18} />
                </button>
                <span className="text-xs text-muted">
                  {currentIndex + 1} / {certs.length}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setZoomed(!zoomed)}
                    className="rounded-full p-2 text-muted transition-colors hover:bg-white/10 hover:text-foreground"
                  >
                    {zoomed ? <ZoomOut size={16} /> : <ZoomIn size={16} />}
                  </button>
                </div>
              </div>

              <div className="relative p-6">
                <motion.div
                  key={current.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <div
                    className={`mx-auto mb-6 flex items-center justify-center transition-transform duration-300 ${zoomed ? "scale-150" : ""}`}
                  >
                    {current.image ? (
                      <div className="relative h-48 w-full max-w-sm overflow-hidden rounded-xl border border-border">
                        <Image
                          src={current.image}
                          alt={current.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 100vw, 384px"
                        />
                      </div>
                    ) : current.link ? (
                      <div className="flex h-48 w-full max-w-sm items-center justify-center rounded-xl bg-gradient-to-br from-orange/5 to-magenta/5 border border-border">
                        <div className="text-center p-4">
                          <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-orange/10 flex items-center justify-center">
                            <ExternalLink size={28} className="text-orange" />
                          </div>
                          <p className="text-xs text-muted">Certificate available online</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex h-48 w-full max-w-sm items-center justify-center rounded-xl bg-gradient-to-br from-orange/5 to-magenta/5 border border-border">
                        <div className="text-center p-4">
                          <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-orange/10 flex items-center justify-center">
                            <ExternalLink size={28} className="text-orange" />
                          </div>
                          <p className="text-xs text-muted">Certificate preview</p>
                          <p className="text-xs text-muted mt-1">(image coming soon)</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <h3 className="mb-2 text-xl font-bold">{current.title}</h3>
                  <p className="mb-1 text-sm text-orange">{current.provider}</p>
                  <Badge variant="navy">{current.date}</Badge>

                  {current.link && (
                    <div className="mt-6">
                      <a
                        href={current.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full bg-orange/10 px-5 py-2 text-sm text-orange transition-all hover:bg-orange/20"
                      >
                        View Certificate
                        <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  )}
                </motion.div>
              </div>

              <div className="flex items-center justify-between border-t border-border p-4">
                <button
                  onClick={goPrev}
                  className="flex items-center gap-1 rounded-full px-3 py-1.5 text-xs text-muted transition-colors hover:bg-white/10 hover:text-foreground"
                >
                  <ChevronLeft size={14} />
                  Previous
                </button>
                <button
                  onClick={goNext}
                  className="flex items-center gap-1 rounded-full px-3 py-1.5 text-xs text-muted transition-colors hover:bg-white/10 hover:text-foreground"
                >
                  Next
                  <ChevronRight size={14} />
                </button>
              </div>
            </GlowCard>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
