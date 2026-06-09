"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"

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
          ? "bg-[#131F4A]/98 backdrop-blur-xl shadow-lg shadow-[#131F4A]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="GAJO Haustechnik – Startseite">
            <Image
              src="/Logo.svg"
              alt="GAJO Haustechnik GmbH"
              width={200}
              height={66}
              priority
              className="h-18 w-auto"   // 80px
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-white/80 hover:text-white text-sm font-medium tracking-wide transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#4D8DCC] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+41791764392"
              className="flex items-center gap-2 text-white/75 hover:text-white text-sm font-medium transition-colors duration-300"
            >
              <Phone size={16} className="text-[#4D8DCC]" />
              +41 79 176 43 92
            </a>
            <a
              href="#kontakt"
              className="bg-[#4D8DCC] text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-[#3d7bb8] hover:shadow-lg hover:shadow-[#4D8DCC]/30 transition-all duration-300 tracking-wide"
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
        <div className="lg:hidden bg-[#131F4A] border-t border-white/10 backdrop-blur-xl">
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
                className="flex items-center gap-2 text-white/75 text-sm font-medium mb-4"
              >
                <Phone size={16} className="text-[#4D8DCC]" />
                +41 79 176 43 92
              </a>
              <a
                href="#kontakt"
                className="bg-[#4D8DCC] text-white text-sm font-bold px-6 py-3.5 rounded-lg text-center block hover:bg-[#3d7bb8] transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Jetzt anfragen
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
