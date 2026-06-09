import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-[#131F4A] to-[#0C1430] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Image
              src="/Logo.svg"
              alt="GAJO Haustechnik GmbH"
              width={220}
              height={73}
              className="h-18 w-auto"
            />
            <p className="text-white/60 text-base leading-relaxed max-w-md">
              Ihr zuverlässiger Partner für hochwertige Sanitär- und Haustechniklösungen in der Schweiz.
            </p>
            <div className="space-y-4 text-base text-white/60">
              <div className="flex items-start gap-3">
                <span className="font-semibold text-white/80">Adresse:</span>
                <div className="leading-relaxed">
                  Spinnereistrasse 8<br />
                  8866 Ziegelbrücke<br />
                  Schweiz
                </div>
              </div>
              <div>
                <a
                  href="tel:+41791764392"
                  className="text-[#6BA3D8] hover:text-white transition-colors duration-300 font-bold text-lg"
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
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} GAJO Haustechnik GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-8 text-white/40 text-sm">
            <a href="#" className="hover:text-white/70 transition-colors duration-300">
              Impressum
            </a>
            <a href="#" className="hover:text-white/70 transition-colors duration-300">
              Datenschutz
            </a>
            <a href="#" className="hover:text-white/70 transition-colors duration-300">
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
