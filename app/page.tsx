import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import UeberUnsSection from "@/components/ueber-uns-section"
import LeistungenSection from "@/components/leistungen-section"
import ProjekteSection from "@/components/projekte-section"
import WarumWirSection from "@/components/warum-wir-section"
import KontaktSection from "@/components/kontakt-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <UeberUnsSection />
      <LeistungenSection />
      <ProjekteSection />
      <WarumWirSection />
      <KontaktSection />
      <Footer />
    </main>
  )
}
