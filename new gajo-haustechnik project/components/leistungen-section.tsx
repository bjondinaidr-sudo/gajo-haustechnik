"use client"

import { Building2, Wrench, Droplets, ShowerHead, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Neu- und Umbauten",
    description:
      "Planung und Umsetzung moderner Sanitärsysteme für Neubauten und Renovationen. Effiziente Koordination mit Architekten und Gewerken für einen reibungslosen Ablauf von der Idee bis zur Übergabe.",
  },
  {
    icon: Wrench,
    title: "Service & Wartung",
    description:
      "Regelmässige Wartungsarbeiten zur Sicherstellung der Funktionalität und Langlebigkeit Ihrer Anlagen. Frühzeitige Erkennung und Behebung von Schwachstellen – damit alles zuverlässig läuft.",
  },
  {
    icon: Droplets,
    title: "Wasseraufbereitung",
    description:
      "Installation von Entkalkungs- und Filteranlagen zum Schutz von Leitungen, Boilern und Armaturen. Nachhaltige Verbesserung der Wasserqualität und Steigerung der Systemeffizienz.",
  },
  {
    icon: ShowerHead,
    title: "Sanitärinstallationen",
    description:
      "Fachgerechte Installation und Modernisierung von Sanitäranlagen und Badezimmern mit Fokus auf Qualität, Funktionalität und zeitloses Design auf höchstem Niveau.",
  },
]

export default function LeistungenSection() {
  return (
    <section
      id="leistungen"
      className="py-28 lg:py-40 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 text-[#4D8DCC] text-xs font-bold tracking-[0.2em] uppercase mb-7">
            <span className="w-10 h-px bg-[#4D8DCC]" />
            Leistungen
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-[#131F4A] leading-[1.1] mb-7 text-balance tracking-tight">
            Umfassende Lösungen für Ihre Haustechnik
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] leading-relaxed">
            Von der Planung bis zur finalen Abnahme – wir bieten das komplette Spektrum moderner Sanitär- und Gebäudetechnik aus einer Hand.
          </p>
        </div>

        {/* Services grid – 2x2 on desktop */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group relative flex flex-col h-full bg-white border border-[#E2E8F0] p-9 lg:p-12 rounded-2xl hover:border-[#4D8DCC]/40 hover:shadow-2xl hover:shadow-[#131F4A]/8 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Decorative accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#4D8DCC]/8 to-transparent rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-16 h-16 flex items-center justify-center bg-[#131F4A] rounded-2xl mb-7 group-hover:bg-[#4D8DCC] group-hover:scale-105 transition-all duration-500 shadow-lg shadow-[#131F4A]/20">
                  <Icon size={30} className="text-white" strokeWidth={1.6} />
                </div>
                <h3 className="text-2xl font-bold text-[#131F4A] mb-4 leading-snug tracking-tight">
                  {service.title}
                </h3>
                <p className="text-[#64748B] text-base lg:text-lg leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 text-[#4D8DCC] text-sm font-bold mt-auto group-hover:gap-3.5 transition-all duration-300"
                >
                  Jetzt anfragen
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
