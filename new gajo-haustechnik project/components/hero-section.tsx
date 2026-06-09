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
          src="/images/hero-bg.png"
          alt="Premium Sanitärinstallation mit moderner Armatur und fliessendem Wasser"
          className="w-full h-full object-cover scale-105"
        />
        {/* Gradient overlays – navy brand tint */}
       <div className="absolute inset-0 bg-[#131F4A]/58" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1430]/85 via-[#131F4A]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1430]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-24 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 border border-[#4D8DCC]/40 bg-[#4D8DCC]/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-10 animate-fade-in">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4D8DCC] animate-pulse" />
            <span className="text-white/90 text-xs font-semibold tracking-[0.15em] uppercase">
              Sanitär & Haustechnik aus Ziegelbrücke
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-8 text-balance animate-fade-in-up tracking-tight">
            Ihr Partner für Sanitär- und
            <br />
            <span className="text-[#6BA3D8]">Haustechniklösungen</span>
          </h1>



          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 animate-fade-in-up animation-delay-300">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-3 bg-[#4D8DCC] text-white font-bold px-9 py-5 rounded-xl hover:bg-[#3d7bb8] transition-all duration-300 shadow-xl shadow-[#4D8DCC]/25 hover:shadow-2xl hover:shadow-[#4D8DCC]/35 hover:-translate-y-0.5 group"
            >
              Jetzt unverbindlich anfragen
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1.5 transition-transform duration-300"
              />
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center gap-3 border-2 border-white/30 text-white font-semibold px-9 py-5 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              Leistungen erkunden
            </a>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap gap-12 md:gap-20 mt-20 pt-12 border-t border-white/10 animate-fade-in-up animation-delay-400">
            {[
              { value: "12+", label: "Jahre Erfahrung" },
              { value: "100%", label: "Qualität" },
                { value: "48h", label: "Rückmeldung" },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-[#6BA3D8]/80 text-xs tracking-[0.2em] uppercase font-semibold">
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
        <div className="w-12 h-12 flex items-center justify-center bg-[#4D8DCC] rounded-xl group-hover:scale-105 transition-transform">
          <Phone size={22} className="text-white" />
        </div>
        <div>
          <div className="text-[10px] text-white/55 uppercase tracking-[0.15em] font-semibold mb-0.5">
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
