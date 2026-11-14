"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import ThemeToggle from "@/components/ui/ThemeToggle"
import Button3D, { type KeyColor } from "@/components/ui/Button3D"

const navLinks: { name: string; path: string; color: KeyColor }[] = [
  { name: "Home", path: "/", color: "ink" },
  { name: "About", path: "/about", color: "cobalt" },
  { name: "Skills", path: "/skills", color: "mint" },
  { name: "Projects", path: "/projects", color: "sun" },
  { name: "Experience", path: "/experience", color: "coral" },
  { name: "Achievements", path: "/achievements", color: "cobalt" },
  { name: "Resume", path: "/resume", color: "mint" },
  { name: "Blog", path: "/blog", color: "ink" },
  { name: "Contact", path: "/contact", color: "coral" },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        scrolled || isOpen ? "glass border-b border-border" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6" aria-label="Main">
        <Link href="/" className="whitespace-nowrap font-display text-xl font-extrabold tracking-tight">
          Sahil<span className="text-orange"> Khan</span>
        </Link>

        <div className="hidden items-center justify-end gap-x-2 xl:flex">
          {navLinks.map((l) => (
            <Button3D key={l.path} href={l.path} color={l.color} size="sm" active={pathname === l.path}>
              {l.name}
            </Button3D>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full p-2 text-foreground transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current xl:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="grid max-h-[calc(100vh-4.5rem)] grid-cols-2 gap-x-4 gap-y-1 overflow-y-auto px-4 pt-2 pb-6 sm:grid-cols-3 xl:hidden">
          {navLinks.map((l) => (
            <Button3D key={l.path} href={l.path} color={l.color} block active={pathname === l.path}>
              {l.name}
            </Button3D>
          ))}
        </div>
      )}
    </header>
  )
}
