"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Projekte", href: "#projekte" },
  { label: "Warum wir", href: "#warum-wir" },
  { label: "Kontakt", href: "#kontakt" },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.25_0.09_255)]/98 backdrop-blur-xl shadow-2xl shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="flex items-center justify-center w-10 h-10 bg-white/10 border border-white/20 rounded-lg group-hover:bg-white/15 transition-colors duration-300">
              <svg
                width="22"
                height="22"
                viewBox="0 0 20 20"
                fill="none"
                className="text-white"
              >
                <path
                  d="M3 10C3 6.13 6.13 3 10 3s7 3.13 7 7-3.13 7-7 7-7-3.13-7-7z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 6v4l3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-white font-bold text-base leading-tight tracking-tight">
                Gajo Haustechnik
              </div>
              <div className="text-white/50 text-[10px] tracking-[0.2em] uppercase font-medium">
                GmbH
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-white/75 hover:text-white text-sm font-medium tracking-wide transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white/60 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+41791764392"
              className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-300"
            >
              +41 79 176 43 92
            </a>
            <a
              href="#kontakt"
              className="bg-white text-[oklch(0.25_0.09_255)] text-sm font-bold px-6 py-3 rounded-lg hover:bg-white/95 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 tracking-wide"
            >
              Anfragen
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2.5 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü öffnen"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[oklch(0.25_0.09_255)] border-t border-white/10 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/85 hover:text-white text-base font-medium py-1.5 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 mt-2">
              <a
                href="tel:+41791764392"
                className="block text-white/70 text-sm font-medium mb-4"
              >
                +41 79 176 43 92
              </a>
              <a
                href="#kontakt"
                className="bg-white text-[oklch(0.25_0.09_255)] text-sm font-bold px-6 py-3.5 rounded-lg text-center block hover:bg-white/95 transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Anfragen
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
