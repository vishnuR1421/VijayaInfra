import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-dark-obsidian font-sans antialiased text-slate-200 relative">

      {/* Dynamic Glass Navigation */}
      <Header />

      {/* Main Corporate Core */}
      <main className="flex-1 flex flex-col relative z-10">

        {/* Parallax Hero Landing (Statically rendered to prevent initial load shifting) */}
        <Hero />

        {/* Dynamic Achievements & Metrics */}
        <Stats />

        {/* Dynamic Tabbed Services Showcase */}
        <Services />

        {/* Completed Projects Showcase */}
        <Portfolio />

        {/* Dynamic Turnkey Quote Estimator */}
        <Contact />

      </main>

      {/* Corporate Footprint Footer */}
      <Footer />
    </div>
  );
}
