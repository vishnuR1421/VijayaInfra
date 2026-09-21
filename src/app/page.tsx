import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CompanyIntro from "@/components/CompanyIntro";
import Services from "@/components/Services";
import SectorFocus from "@/components/SectorFocus";
import RetailProof from "@/components/RetailProof";
import Portfolio from "@/components/Portfolio";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import DesignNest from "@/components/DesignNest";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans antialiased text-[#373435]">
      {/* 1. Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Trust / Metrics Strip */}
        <Stats />

        {/* 4. Company Introduction */}
        <CompanyIntro />

        {/* 5. Services Showcase */}
        <Services />

        {/* 6. Sector Focus */}
        <SectorFocus />

        {/* 7. Retail Proof */}
        <RetailProof />

        {/* 8. Projects Showcase */}
        <Portfolio />

        {/* 9. Capability Section */}
        <CapabilitiesSection />

        {/* 10. Residential Interiors Section */}
        <DesignNest />

        {/* 11. Final CTA */}
        <FinalCTA />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
