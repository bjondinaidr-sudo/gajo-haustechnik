import { Check, Zap, BarChart3, Shield, Users, Clock } from "lucide-react"

const reasons = [
  {
    icon: Check,
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
    icon: Shield,
    title: "Langlebige Technik",
    description: "Nachhaltige und energieeffiziente Systeme für die Zukunft.",
  },
]

export default function WarumWirSection() {
  return (
    <section
      id="warum-wir"
      className="py-36 lg:py-48 bg-gradient-to-b from-[oklch(0.25_0.09_255)] to-[oklch(0.18_0.08_255)] relative overflow-hidden"
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-start">
          {/* Left */}
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-3 text-white/60 text-xs font-bold tracking-[0.2em] uppercase mb-8">
                <span className="w-10 h-px bg-white/50" />
                Warum wir
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-10 text-balance tracking-tight">
                Ihr Ansprechpartner für vollständige Lösungen
              </h2>
              <p className="text-xl md:text-2xl text-white/55 leading-relaxed">
                Wir legen Wert auf langfristige Partnerschaften, technische Exzellenz und ein ehrliches Miteinander – von der ersten Anfrage bis zum letzten Handgriff.
              </p>
            </div>

            {/* KPI block */}
            <div className="grid grid-cols-2 gap-1.5 bg-white/[0.06] rounded-2xl p-1.5">
              {[
                { value: "12+", label: "Jahre Erfahrung" },
                { value: "Schnell", label: "Reaktionszeit" },
                { value: "100%", label: "Qualität" },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="bg-white/5 p-8 text-center hover:bg-white/10 transition-all duration-300 rounded-xl group cursor-default"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {kpi.value}
                  </div>
                  <div className="text-white/50 text-xs tracking-[0.15em] uppercase font-semibold">
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason) => {
              const Icon = reason.icon
              return (
                <div
                  key={reason.title}
                  className="group p-8 lg:p-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] hover:from-white/15 hover:to-white/[0.06] transition-all duration-500 space-y-5 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-white/15 rounded-xl group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
                    <Icon size={26} className="text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                      {reason.title}
                    </h3>
                    <p className="text-white/55 text-base leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
