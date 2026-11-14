"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import ThemeToggle from "@/components/ui/ThemeToggle"

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Achievements", path: "/achievements" },
  { name: "Resume", path: "/resume" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false)
  }, [pathname])

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`)

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || isOpen ? "glass border-x-0 border-t-0" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6" aria-label="Main">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          Sahil Khan
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.path}>
              <Link
                href={l.path}
                aria-current={isActive(l.path) ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  isActive(l.path) ? "text-foreground" : "text-muted hover:text-foreground"
                )}
              >
                {l.name}
                {isActive(l.path) && <span className="mt-0.5 block h-px bg-accent" aria-hidden />}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-foreground lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <ul id="mobile-nav" className="max-h-[calc(100dvh-4rem)] overflow-y-auto px-4 pb-6 lg:hidden">
          {[{ name: "Home", path: "/" }, ...navLinks].map((l) => (
            <li key={l.path} className="border-b border-border last:border-0">
              <Link
                href={l.path}
                aria-current={pathname === l.path ? "page" : undefined}
                className={cn(
                  "block py-3.5 font-display text-2xl",
                  pathname === l.path ? "text-accent" : "text-foreground"
                )}
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
