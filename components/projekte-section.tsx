import Image from "next/image"

const projects = [
  {
    image: "/images/project-1.jpg",
    category: "Wohnbau",
    title: "Premium Bad-Sanierung",
    location: "Ziegelbrücke",
    scope: "Sanitär · Bäder",
  },
  {
    image: "/images/project-2.jpg",
    category: "Wohnbau",
    title: "Sanitärinstallation Neubau",
    location: "Ziegelbrücke",
    scope: "Sanitär · Neubau",
  },
  {
    image: "/images/project-1.jpg",
    category: "Wohnbau",
    title: "Badsanierung",
    location: "Ziegelbrücke",
    scope: "Sanitär · Renovation",
  },
  {
    image: "/images/project-2.jpg",
    category: "Gewerblich",
    title: "Wasseraufbereitung",
    location: "Ziegelbrücke",
    scope: "Sanitär · Technik",
  },
]

export default function ProjekteSection() {
  return (
    <section id="projekte" className="py-36 lg:py-48 bg-gradient-to-b from-[oklch(0.94_0.005_250)] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-3 text-[oklch(0.25_0.09_255)] text-xs font-bold tracking-[0.2em] uppercase mb-8">
            <span className="w-10 h-px bg-[oklch(0.25_0.09_255)]" />
            Referenzen
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[oklch(0.12_0.015_250)] leading-[1.1] mb-8 text-balance tracking-tight">
            Hochwertige Projekte von Gajo
          </h2>
          <p className="text-xl md:text-2xl text-[oklch(0.45_0.02_250)] leading-relaxed">
            Ein Auszug aus unseren realisierten Projekten mit höchsten Qualitätsstandards.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl bg-[oklch(0.12_0.015_250)] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${i === 0 ? "md:row-span-2" : ""
                }`}
              style={{ minHeight: i === 0 ? "580px" : "280px" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.015_250)] via-[oklch(0.12_0.015_250)]/50 to-transparent" />

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
