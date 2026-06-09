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
    description: "Massgeschneiderte Lösungen, die perfekt auf Ihre Anforderungen abgestimmt sind.",
  },
  {
    icon: Leaf,
    title: "Langlebige Technik",
    description: "Nachhaltige und energieeffiziente Systeme für die Zukunft.",
  },
]

export default function UeberUnsSection() {
  return (
    <section id="ueber-uns" className="py-28 lg:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Left column */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-3 text-[#4D8DCC] text-xs font-bold tracking-[0.2em] uppercase mb-7">
                <span className="w-10 h-px bg-[#4D8DCC]" />
                Über uns
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-[#131F4A] leading-[1.1] mb-9 text-balance tracking-tight">
                Ihr Partner für hochwertige Sanitär- und Haustechnik
              </h2>
              <p className="text-lg md:text-xl text-[#64748B] leading-relaxed mb-6">
                GAJO Haustechnik GmbH ist Ihr zuverlässiger Partner für hochwertige Sanitär- und Haustechniklösungen. Mit einem erfahrenen Team realisieren wir Projekte für Neubauten, Renovationen und Modernisierungen mit höchster Präzision und Sorgfalt.
              </p>
              <p className="text-lg md:text-xl text-[#64748B] leading-relaxed">
                Unser Anspruch ist es, langlebige, effiziente und technisch durchdachte Lösungen zu schaffen, die höchsten Qualitätsstandards entsprechen. Dabei stehen eine partnerschaftliche Zusammenarbeit sowie die Zufriedenheit unserer Kunden stets im Mittelpunkt.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-[#4D8DCC] text-white font-bold px-9 py-5 rounded-xl hover:bg-[#3d7bb8] transition-all duration-300 shadow-lg shadow-[#4D8DCC]/25 hover:shadow-xl hover:shadow-[#4D8DCC]/35 hover:-translate-y-0.5"
              >
                Unverbindlich anfragen
              </a>
              <a
                href="#leistungen"
                className="text-[#131F4A] text-base font-semibold hover:text-[#4D8DCC] transition-colors duration-300 flex items-center gap-2"
              >
                Unsere Leistungen
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>

          {/* Right column – values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="group p-8 lg:p-9 border border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#4D8DCC]/40 hover:bg-white hover:shadow-xl hover:shadow-[#131F4A]/5 transition-all duration-500 rounded-2xl hover:-translate-y-1"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-[#131F4A]/8 rounded-xl mb-6 group-hover:bg-[#4D8DCC] transition-all duration-300">
                    <Icon
                      size={26}
                      className="text-[#131F4A] group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.6}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#131F4A] mb-3 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-[#64748B] text-base leading-relaxed">
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
