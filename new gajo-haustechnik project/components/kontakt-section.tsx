"use client"

import { useState } from "react"
import { Phone, MapPin, Send } from "lucide-react"

const services = [
  "Neu- und Umbauten",
  "Service & Wartung",
  "Wasseraufbereitung",
  "Sanitärinstallationen",
  "Sonstiges",
]

export default function KontaktSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    "border border-[#E2E8F0] rounded-xl px-5 py-4 text-base text-[#1F2937] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#4D8DCC] focus:ring-2 focus:ring-[#4D8DCC]/20 transition-all duration-300 bg-white"

  return (
    <section id="kontakt" className="py-28 lg:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 text-[#4D8DCC] text-xs font-bold tracking-[0.2em] uppercase mb-7">
            <span className="w-10 h-px bg-[#4D8DCC]" />
            Kontakt
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-[#131F4A] leading-[1.1] mb-7 text-balance tracking-tight">
            Jetzt unverbindlich anfragen
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] leading-relaxed">
            Kontaktieren Sie uns heute für eine kostenlose Beratung. Wir melden uns innerhalb von 48 Stunden.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Direct contact card */}
            <div className="bg-gradient-to-br from-[#131F4A] to-[#0C1430] rounded-2xl p-10 lg:p-12 text-white space-y-10 shadow-xl shadow-[#131F4A]/20">
              <div>
                <h3 className="text-xl font-bold mb-2">Kontaktinformationen</h3>
                <p className="text-white/50 text-sm">Direkt erreichbar für Ihr Anliegen</p>
              </div>

              <a
                href="tel:+41791764392"
                className="flex items-start gap-5 group"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-[#4D8DCC] rounded-xl flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-white/55 text-xs uppercase tracking-[0.15em] font-semibold mb-1">
                    Telefon
                  </div>
                  <div className="text-xl font-bold">+41 79 176 43 92</div>
                </div>
              </a>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 flex items-center justify-center bg-[#4D8DCC] rounded-xl flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-white/55 text-xs uppercase tracking-[0.15em] font-semibold mb-1">
                    Adresse
                  </div>
                  <div className="text-lg font-semibold leading-relaxed">
                    Spinnereistrasse 8<br />
                    8866 Ziegelbrücke<br />
                    Schweiz
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency card */}
            <div className="bg-[#F8FAFC] border border-[#4D8DCC]/20 rounded-2xl p-8 lg:p-10">
              <div className="flex items-start gap-3 mb-5">
                <span className="w-3 h-3 rounded-full bg-[#4D8DCC] animate-pulse mt-1 flex-shrink-0" />
                <span className="text-[#131F4A] text-sm font-bold uppercase tracking-[0.1em]">
                  Technische Probleme?
                </span>
              </div>
              <p className="text-[#64748B] text-lg leading-relaxed mb-8">
                Bei technischen Problemen stehen wir Ihnen telefonisch für dringende Anliegen zur Verfügung.
              </p>
              <a
                href="tel:+41791764392"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#4D8DCC] text-white font-bold px-8 py-5 rounded-xl hover:bg-[#3d7bb8] transition-all duration-300 shadow-lg shadow-[#4D8DCC]/25 hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone size={20} />
                Sofort anrufen
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-[#F8FAFC] border border-[#4D8DCC]/20 rounded-2xl p-14 flex flex-col items-center justify-center text-center min-h-[560px]">
                <div className="w-20 h-20 flex items-center justify-center bg-[#4D8DCC]/15 rounded-2xl mb-8">
                  <Send size={36} className="text-[#4D8DCC]" />
                </div>
                <h3 className="text-3xl font-bold text-[#131F4A] mb-5 tracking-tight">
                  Vielen Dank für Ihre Anfrage!
                </h3>
                <p className="text-[#64748B] text-xl leading-relaxed max-w-md">
                  Wir haben Ihre Nachricht erhalten und werden uns innerhalb von 48 Stunden bei Ihnen melden.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-10 lg:p-12 space-y-7"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold text-[#131F4A] uppercase tracking-[0.1em]"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Max Mustermann"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold text-[#131F4A] uppercase tracking-[0.1em]"
                    >
                      E-Mail *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="max@beispiel.ch"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2.5">
                    <label
                      htmlFor="phone"
                      className="text-xs font-bold text-[#131F4A] uppercase tracking-[0.1em]"
                    >
                      Telefon
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+41 ..."
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <label
                      htmlFor="service"
                      className="text-xs font-bold text-[#131F4A] uppercase tracking-[0.1em]"
                    >
                      Leistung *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="">Bitte wählen ...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-bold text-[#131F4A] uppercase tracking-[0.1em]"
                  >
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Beschreiben Sie Ihr Anliegen ..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-6">
                  <p className="text-[#94A3B8] text-sm">
                    * Pflichtfelder
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#4D8DCC] text-white font-bold px-12 py-5 rounded-xl hover:bg-[#3d7bb8] transition-all duration-300 shadow-lg shadow-[#4D8DCC]/25 hover:shadow-xl hover:shadow-[#4D8DCC]/35 hover:-translate-y-0.5 group"
                  >
                    Jetzt anfragen
                    <Send
                      size={20}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
