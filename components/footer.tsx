export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-[oklch(0.12_0.015_250)] to-[oklch(0.07_0.01_250)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-20 mb-20">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 border border-white/20 rounded-xl">
                <svg
                  width="24"
                  height="24"
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
                <div className="text-white font-bold text-xl leading-tight tracking-tight">
                  Gajo Haustechnik
                </div>
                <div className="text-white/50 text-xs tracking-[0.2em] uppercase font-semibold">
                  GmbH
                </div>
              </div>
            </div>
            <p className="text-white/55 text-lg leading-relaxed max-w-md">
              Ihr zuverlässiger Partner für hochwertige Sanitär- und Haustechniklösungen in der Schweiz.
            </p>
            <div className="space-y-4 text-base text-white/55">
              <div className="flex items-start gap-3">
                <span className="font-semibold text-white/75">Adresse:</span>
                <div className="leading-relaxed">
                  Spinnereistrasse 8<br />
                  8866 Ziegelbrücke<br />
                  Schweiz
                </div>
              </div>
              <div>
                <a
                  href="tel:+41791764392"
                  className="text-white hover:text-white/75 transition-colors duration-300 font-bold text-lg"
                >
                  +41 79 176 43 92
                </a>
              </div>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8">
              Leistungen
            </h4>
            <ul className="flex flex-col gap-4 text-base text-white/55">
              {[
                "Neu- und Umbauten",
                "Service & Wartung",
                "Wasseraufbereitung",
                "Sanitärinstallationen",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#leistungen"
                    className="hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8">
              Unternehmen
            </h4>
            <ul className="flex flex-col gap-4 text-base text-white/55">
              {[
                { label: "Über uns", href: "#ueber-uns" },
                { label: "Referenzen", href: "#projekte" },
                { label: "Kontakt", href: "#kontakt" },
                { label: "Impressum", href: "#" },
                { label: "Datenschutz", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} Gajo Haustechnik GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-8 text-white/40 text-sm">
            <a href="#" className="hover:text-white/70 transition-colors duration-300">
              Impressum
            </a>
            <a href="#" className="hover:text-white/70 transition-colors duration-300">
              Datenschutz
            </a>
            <a href="#" className="hover:text-white/70 transition-colors duration-300">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
