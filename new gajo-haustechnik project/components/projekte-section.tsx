import Image from "next/image"

const projects = [
  {
    image: "/images/neu-umbauten.jpg",
    category: "Neu- und Umbauten",
    title: "Moderne Sanitärlösungen für Neu- und Umbauten",
    location: "Schweiz",
    scope: "Planung · Installation",
  },
  {
    image: "/images/sanitaerinstallationen.jpg",
    category: "Sanitärinstallationen",
    title: "Professionelle Sanitärinstallationen",
    location: "Schweiz",
    scope: "Sanitär · Haustechnik",
  },
  {
    image: "/images/wasseraufbereitung.jpg",
    category: "Wasseraufbereitung",
    title: "Effiziente Wasseraufbereitungssysteme",
    location: "Schweiz",
    scope: "Wasserqualität · Technik",
  },
  {
    image: "/images/hero-bg.png",
    category: "Service & Wartung",
    title: "Zuverlässiger Service und Unterhalt",
    location: "Schweiz",
    scope: "Wartung · Reparaturen",
  },
]

export default function ProjekteSection() {
  return (
    <section id="projekte" className="py-28 lg:py-40 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 text-[#4D8DCC] text-xs font-bold tracking-[0.2em] uppercase mb-7">
            <span className="w-10 h-px bg-[#4D8DCC]" />
            Referenzen
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-[#131F4A] leading-[1.1] mb-7 text-balance tracking-tight">
            Unsere Leistungen in der Praxis
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] leading-relaxed">
            Ein Auszug aus unseren realisierten Projekten mit höchsten Qualitätsstandards.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl bg-[#131F4A] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${i === 0 ? "md:row-span-2" : ""
                }`}
              style={{ minHeight: i === 0 ? "650px" : "350px" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-60 group-hover:scale-75 transition-all duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1430] via-[#131F4A]/50 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                <div className="mb-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/70 border border-white/30 px-4 py-2 rounded-full inline-block backdrop-blur-sm bg-white/5">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight tracking-tight transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-white/55 text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <span className="font-semibold">{project.location}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span>{project.scope}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
