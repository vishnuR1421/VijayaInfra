import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { CORE_SERVICES } from "@/data/company";

export const metadata: Metadata = {
  title: "Core Services | Vijaya Infrastructures Private Limited",
  description:
    "Comprehensive turnkey services: Retail & Commercial Interiors, Electrical Works & Infrastructure, ACP & Glass Facade Systems, Site Renovations & Modifications, and Turnkey Residential Interiors.",
};

export default function ServicesPage() {
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
                Turnkey Engineering & Interior Execution
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
                <span className="text-white">Our Core Services</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
                Vijaya Infrastructures provides integrated turnkey execution across 5 specialized
                disciplines, eliminating multiple contractor friction for commercial and retail clients.
              </p>
            </div>
          </div>
        </section>

        {/* Services List Section */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {CORE_SERVICES.map((service, idx) => (
              <div
                key={service.id}
                id={service.slug}
                className={`corporate-card rounded-2xl p-8 sm:p-12 scroll-mt-28 ${
                  service.isFlagship
                    ? "border-2 border-[#006997]/40 bg-gradient-to-r from-white to-slate-50"
                    : service.division
                    ? "border-2 border-amber-200 bg-amber-50/20"
                    : "bg-white"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 flex flex-col items-start gap-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 font-bold text-[10px] uppercase tracking-wider">
                        Discipline 0{idx + 1}
                      </span>
                      {service.isFlagship && (
                        <span className="px-2.5 py-0.5 rounded bg-[#006997]/10 text-[#006997] font-bold text-[10px] uppercase tracking-wider">
                          Flagship Specialization
                        </span>
                      )}
                      {service.division && (
                        <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[10px] uppercase tracking-wider">
                          {service.division}
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#01477A] leading-tight">
                      {service.title}
                    </h2>

                    <p className="text-xs sm:text-sm font-semibold text-[#F96A02] italic">
                      "{service.tagline}"
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.overview}
                    </p>

                    <div className="w-full pt-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#01477A] block mb-2">
                        Core Scope of Execution:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.scope.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-[#006997] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/services/${service.slug}`}
                        className="btn-primary text-xs uppercase tracking-wider font-bold"
                      >
                        <span>View Detailed Service Page</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href="/contact"
                        className="btn-secondary text-xs uppercase tracking-wider font-bold"
                      >
                        <span>Request Scope Consultation</span>
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 h-72 sm:h-96 relative rounded-xl overflow-hidden shadow-md border border-slate-200">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs font-extrabold block text-[#FFCC29]">
                        {service.shortTitle}
                      </span>
                      <span className="text-[11px] text-slate-200 block">
                        Full turnkey execution across South India
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
