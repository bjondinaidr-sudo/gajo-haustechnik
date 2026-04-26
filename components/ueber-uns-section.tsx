import { CheckCircle2, Clock, Users, Leaf } from "lucide-react"

const values = [
  {
    icon: CheckCircle2,
    title: "Höchste Präzision",
    description: "Fachgerechte Ausführung nach höchsten Qualitätsstandards in jedem Detail.",
  },
  {
    icon: Clock,
    title: "Zuverlässig & pünktlich",
    description: "Termingerechte Umsetzung und transparente Kommunikation während des gesamten Projekts.",
  },
  {
    icon: Users,
    title: "Individuelle Beratung",
    description: "Maßgeschneiderte Lösungen, die perfekt auf Ihre Anforderungen abgestimmt sind.",
  },
  {
    icon: Leaf,
    title: "Langlebige Technik",
    description: "Nachhaltige und energieeffiziente Systeme für die Zukunft.",
  },
]

export default function UeberUnsSection() {
  return (
    <section id="ueber-uns" className="py-36 lg:py-48 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-36 items-center">
          {/* Left column */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-3 text-[oklch(0.25_0.09_255)] text-xs font-bold tracking-[0.2em] uppercase mb-8">
                <span className="w-10 h-px bg-[oklch(0.25_0.09_255)]" />
                Über uns
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[oklch(0.12_0.015_250)] leading-[1.1] mb-10 text-balance tracking-tight">
                Ihr Partner für hochwertige Sanitär- und Haustechnik
              </h2>
              <p className="text-lg md:text-xl text-[oklch(0.45_0.02_250)] leading-relaxed mb-6">
                Gajo Haustechnik GmbH ist Ihr zuverlässiger Partner für hochwertige Sanitär- und Haustechniklösungen. Mit einem erfahrenen Team realisieren wir Projekte für Neubauten, Renovationen und Modernisierungen mit höchster Präzision und Sorgfalt.
              </p>
              <p className="text-lg md:text-xl text-[oklch(0.45_0.02_250)] leading-relaxed">
                Unser Anspruch ist es, langlebige, effiziente und technisch durchdachte Lösungen zu schaffen, die höchsten Qualitätsstandards entsprechen. Dabei stehen eine partnerschaftliche Zusammenarbeit sowie die Zufriedenheit unserer Kunden stets im Mittelpunkt.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-[oklch(0.25_0.09_255)] text-white font-bold px-10 py-5 rounded-xl hover:bg-[oklch(0.20_0.08_255)] transition-all duration-300 shadow-lg shadow-[oklch(0.25_0.09_255)]/20 hover:shadow-xl hover:shadow-[oklch(0.25_0.09_255)]/25 hover:-translate-y-0.5"
              >
                Unverbindlich anfragen
              </a>
              <a
                href="#leistungen"
                className="text-[oklch(0.25_0.09_255)] text-base font-semibold hover:opacity-70 transition-opacity duration-300 flex items-center gap-2"
              >
                Unsere Leistungen
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>

          {/* Right column – values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="group p-8 lg:p-10 border border-[oklch(0.90_0.008_250)] bg-gradient-to-br from-white to-[oklch(0.97_0_0)] hover:border-[oklch(0.25_0.09_255)]/25 hover:shadow-xl hover:shadow-[oklch(0.25_0.09_255)]/5 transition-all duration-500 rounded-2xl hover:-translate-y-1"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-[oklch(0.25_0.09_255)]/10 rounded-xl mb-6 group-hover:bg-[oklch(0.25_0.09_255)]/15 group-hover:scale-110 transition-all duration-300">
                    <Icon
                      size={26}
                      className="text-[oklch(0.25_0.09_255)]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[oklch(0.12_0.015_250)] mb-3 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-[oklch(0.45_0.02_250)] text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
