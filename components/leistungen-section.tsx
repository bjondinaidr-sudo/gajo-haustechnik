"use client"

import { Hammer, Wrench, Droplets, Pipette } from "lucide-react"

const services = [
  {
    icon: Hammer,
    title: "Neu- und Umbauten",
    description:
      "Planung und Umsetzung moderner Sanitärsysteme für Neubauten und Renovationen. Effiziente Koordination mit Architekten und Gewerken für einen reibungslosen Ablauf.",
  },
  {
    icon: Wrench,
    title: "Service & Wartung",
    description:
      "Regelmäßige Wartungsarbeiten zur Sicherstellung der Funktionalität und Langlebigkeit Ihrer Anlagen. Frühzeitige Erkennung und Behebung von Schwachstellen.",
  },
  {
    icon: Droplets,
    title: "Wasseraufbereitung",
    description:
      "Installation von Entkalkungsanlagen zum Schutz von Leitungen, Boilern und Armaturen. Nachhaltige Verbesserung der Wasserqualität und Systemeffizienz.",
  },
  {
    icon: Pipette,
    title: "Sanitärinstallationen",
    description:
      "Fachgerechte Installation und Modernisierung von Sanitäranlagen mit Fokus auf Qualität, Funktionalität und Design.",
  },
]

export default function LeistungenSection() {
  return (
    <section
      id="leistungen"
      className="py-36 lg:py-48 bg-gradient-to-b from-[oklch(0.97_0_0)] to-[oklch(0.94_0.005_250)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-3 text-[oklch(0.25_0.09_255)] text-xs font-bold tracking-[0.2em] uppercase mb-8">
            <span className="w-10 h-px bg-[oklch(0.25_0.09_255)]" />
            Leistungen
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[oklch(0.12_0.015_250)] leading-[1.1] mb-8 text-balance tracking-tight">
            Umfassende Lösungen für Ihre Haustechnik
          </h2>
          <p className="text-xl md:text-2xl text-[oklch(0.45_0.02_250)] leading-relaxed">
            Von der Planung bis zur finalen Abnahme – wir bieten das komplette Spektrum moderner Gebäudetechnik aus einer Hand.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`group relative bg-white border border-[oklch(0.90_0.008_250)] p-8 lg:p-10 rounded-2xl hover:border-[oklch(0.25_0.09_255)]/25 hover:shadow-2xl hover:shadow-[oklch(0.25_0.09_255)]/8 transition-all duration-500 hover:-translate-y-2 ${idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
              >
                {/* Decorative accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[oklch(0.25_0.09_255)]/5 to-transparent rounded-bl-3xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-16 h-16 flex items-center justify-center bg-[oklch(0.25_0.09_255)] rounded-xl mb-7 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-[oklch(0.25_0.09_255)]/20">
                  <Icon size={30} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-[oklch(0.12_0.015_250)] mb-4 leading-snug tracking-tight">
                  {service.title}
                </h3>
                <p className="text-[oklch(0.45_0.02_250)] text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 text-[oklch(0.25_0.09_255)] text-sm font-bold group-hover:gap-4 transition-all duration-300"
                >
                  Anfrage
                  <span className="text-base group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}