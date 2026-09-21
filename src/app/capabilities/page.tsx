import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Store, Zap, ShieldCheck, MapPin, Network, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { CAPABILITIES, COMPANY_DETAILS } from "@/data/company";

export const metadata: Metadata = {
  title: "Capabilities & Standards | Vijaya Infrastructures Private Limited",
  description:
    "Discover the 6 pillars of execution at Vijaya Infrastructures: Turnkey single-point delivery, retail rollout speed, brand compliance, and South India project mobilization.",
};

export default function CapabilitiesPage() {
  const getIcon = (num: string) => {
    switch (num) {
      case "01":
        return <Layers className="w-6 h-6 text-[#006997]" />;
      case "02":
        return <Store className="w-6 h-6 text-[#006997]" />;
      case "03":
        return <Zap className="w-6 h-6 text-[#F96A02]" />;
      case "04":
        return <ShieldCheck className="w-6 h-6 text-[#006997]" />;
      case "05":
        return <MapPin className="w-6 h-6 text-[#006997]" />;
      case "06":
        return <Network className="w-6 h-6 text-[#006997]" />;
      default:
        return <Layers className="w-6 h-6 text-[#006997]" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#01477A] text-white relative overflow-hidden">
          <div className="absolute inset-0 engineering-grid-dark opacity-30 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F96A02] block mb-2">
                Turnkey Delivery Capabilities
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Our Capabilities
              </h1>
              <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
                Engineered for rapid mobilization, single-point accountability, and strict compliance
                across retail rollouts, commercial fit-outs, and residential interiors.
              </p>
            </div>
          </div>
        </section>

        {/* 6 Pillars Deep Dive */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#006997] block mb-2">
                Execution Infrastructure
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#01477A]">
                6 Core Pillars of Commercial Excellence
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CAPABILITIES.map((cap) => (
                <div
                  key={cap.number}
                  className="corporate-card rounded-xl p-8 bg-[#F7F9FA] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 rounded-lg bg-white border border-slate-200">
                        {getIcon(cap.number)}
                      </div>
                      <span className="text-2xl font-black text-slate-300 font-manrope">
                        {cap.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-[#01477A] mb-3 leading-tight">
                      {cap.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {cap.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <span className="text-[11px] font-bold text-[#006997] uppercase tracking-wider">
                      {cap.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operational Compliance Matrix */}
        <section className="py-20 bg-[#F7F9FA] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#006997] block mb-2">
                  Shopping Mall & Corporate Governance
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#01477A] leading-tight mb-5">
                  Mall Coordination & Fast-Track Site Discipline
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Executing fit-outs within high-traffic shopping centers requires strict adherence
                  to operational windows, fire safety guidelines, and noise limits.
                </p>

                <div className="space-y-3.5">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#006997] shrink-0 mt-0.5" />
                    <span>
                      <strong>Midnight Logistics & Access:</strong> Managing night-shift deliveries
                      and off-hours fabrication to comply with mall policies.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#006997] shrink-0 mt-0.5" />
                    <span>
                      <strong>Fire & MEP Code Compliance:</strong> Coordinated sprinkler runs, smoke
                      detectors, fire dampers, and emergency lighting approvals.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#006997] shrink-0 mt-0.5" />
                    <span>
                      <strong>Brand Fidelity:</strong> Strict adherence to client corporate drawings,
                      approved paint RAL/Pantone codes, and custom fixture tolerances.
                    </span>
                  </div>
                </div>
              </div>

              <div className="corporate-card rounded-xl p-8 bg-white border border-slate-200">
                <h3 className="text-base font-bold uppercase tracking-wider text-[#01477A] pb-4 mb-6 border-b border-slate-100">
                  South India Regional Coverage
                </h3>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block mb-1">
                      Telangana (Headquarters)
                    </span>
                    <span className="text-slate-600">
                      Central operations, project coordination, and estimating office based in Nizampet, Hyderabad.
                    </span>
                  </div>

                  <div>
                    <span className="font-bold text-slate-900 block mb-1">
                      Andhra Pradesh
                    </span>
                    <span className="text-slate-600">
                      Proven project presence including the record 23-day handover in Guntur and key commercial hubs.
                    </span>
                  </div>

                  <div>
                    <span className="font-bold text-slate-900 block mb-1">
                      Karnataka & Tamil Nadu
                    </span>
                    <span className="text-slate-600">
                      Multi-city retail store rollouts and commercial interior execution across major metropolitan centers.
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-xs uppercase tracking-wider font-bold"
                  >
                    <span>Discuss Your Regional Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
