import { ArrowRight, Phone, ChevronDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Moderne Haustechnik Installation"
          className="w-full h-full object-cover scale-105"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-[oklch(0.25_0.09_255)]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.015_250)]/70 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.015_250)]/30 via-transparent to-transparent" />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-24 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 border border-white/20 bg-white/[0.07] backdrop-blur-md px-5 py-2.5 rounded-full mb-12 animate-fade-in">
            <span className="w-2.5 h-2.5 rounded-full bg-white/80 animate-pulse" />
            <span className="text-white/80 text-xs font-semibold tracking-[0.15em] uppercase">
              Haustechnik-Experten aus Ziegelbrücke
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white leading-[1.05] mb-10 text-balance animate-fade-in-up tracking-tight">
            Haustechnik auf
            <br />
            <span className="text-white/90">höchstem Niveau</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/60 font-light tracking-wider mb-10 max-w-2xl animate-fade-in-up animation-delay-100">
            Sanitär&nbsp;&nbsp;·&nbsp;&nbsp; Lüftung&nbsp;&nbsp;·&nbsp;&nbsp;Wasseraufbereitung
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/55 leading-relaxed max-w-2xl mb-16 animate-fade-in-up animation-delay-200">
            Gajo Haustechnik GmbH ist Ihr Partner für hochwertige Sanitär- und Haustechniklösungen. Mit präziser Ausführung, zuverlässiger Termintreue und individueller Beratung realisieren wir Ihre Projekte mit höchster Qualität.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 animate-fade-in-up animation-delay-300">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-3 bg-white text-[oklch(0.25_0.09_255)] font-bold px-10 py-5 rounded-xl hover:bg-white/95 transition-all duration-300 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/15 hover:-translate-y-0.5 group"
            >
              Jetzt unverbindlich anfragen
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1.5 transition-transform duration-300"
              />
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center gap-3 border-2 border-white/30 text-white font-semibold px-10 py-5 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              Leistungen erkunden
            </a>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap gap-14 md:gap-20 mt-24 pt-14 border-t border-white/10 animate-fade-in-up animation-delay-400">
            {[
              { value: "12+", label: "Jahre Erfahrung" },
              { value: "Tausende", label: "Projekte realisiert" },
              { value: "100%", label: "Qualität" },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">{stat.value}</div>
                <div className="text-white/45 text-xs tracking-[0.2em] uppercase font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phone floating CTA */}
      <a
        href="tel:+41791764392"
        className="hidden lg:flex absolute bottom-16 right-10 items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-7 py-5 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black/10 group"
        aria-label="Anrufen"
      >
        <div className="w-12 h-12 flex items-center justify-center bg-white/15 rounded-xl group-hover:bg-white/25 transition-colors">
          <Phone size={22} className="text-white" />
        </div>
        <div>
          <div className="text-[10px] text-white/50 uppercase tracking-[0.15em] font-semibold mb-0.5">
            Direkter Kontakt
          </div>
          <div className="text-lg font-bold">+41 79 176 43 92</div>
        </div>
      </a>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ChevronDown size={28} className="text-white/30" />
      </div>
    </section>
  )
}
