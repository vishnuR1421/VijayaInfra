import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Store, Clock, Award, ShieldCheck } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";

export default function RetailProof() {
  return (
    <section className="py-20 md:py-28 luminous-hero-bg text-white relative overflow-hidden border-y border-white/10">
      {/* Luminous Ambient Light Orbs */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-[#00B4D8]/22 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-[#F96A02]/18 blur-[140px] pointer-events-none" />

      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 engineering-grid-dark opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Proof Montage */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-96 sm:h-[450px] rounded-2xl overflow-hidden border border-white/25 shadow-2xl">
              <Image
                src="/retail_interior.png"
                alt="Style Union Retail Store Turnkey Execution by Vijaya Infrastructures"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021526]/90 via-[#021526]/30 to-transparent" />

              {/* Verified Association Badge */}
              <div className="absolute top-4 left-4 glass-pill text-white px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00B4D8]" />
                <span className="text-[11px] font-bold uppercase tracking-wider">
                  Verified Vendor Association
                </span>
              </div>

              {/* Bottom Card Inside Image */}
              <div className="absolute bottom-6 left-6 right-6 glass-card-light text-slate-900 p-5 rounded-xl border border-white/80 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 mb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#006997] block">
                      Client Profile
                    </span>
                    <span className="text-base font-extrabold text-[#01477A]">
                      Style Union — Part of Nexon Omniverse
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#F96A02]/10 text-[#F96A02] font-bold text-[10px] uppercase border border-[#F96A02]/20">
                    Key Client
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <span className="block font-extrabold text-[#01477A] text-base">20+</span>
                    <span className="text-[10px] text-slate-500 font-semibold">Stores Handed Over</span>
                  </div>
                  <div className="border-x border-slate-200">
                    <span className="block font-extrabold text-[#01477A] text-base">~14,000</span>
                    <span className="text-[10px] text-slate-500 font-semibold">Sq Ft Largest Store</span>
                  </div>
                  <div>
                    <span className="block font-extrabold text-[#F96A02] text-base">23 Days</span>
                    <span className="text-[10px] text-slate-500 font-semibold">Record Handover</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Experience Details */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold uppercase tracking-wider text-[#F96A02]">
              <Store className="w-3.5 h-3.5" />
              <span>Demonstrated Retail Capability</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight drop-shadow-md">
              <span className="text-white block">Retail Rollout Leadership:</span>
              <span className="text-[#F96A02] block mt-1">Style Union Experience</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Our team has extensive experience executing large-format retail stores with strict
              compliance to brand standards and delivery timelines across South India as an execution
              vendor for Style Union (Part of Nexon Omniverse).
            </p>

            <div className="space-y-3.5 w-full pt-1">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#F96A02] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">20+ retail stores</strong> successfully handed
                  over across diverse South Indian commercial hubs.
                </span>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#F96A02] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">~14,000 sq ft flagship store</strong> executed,
                  demonstrating large-format retail interior, electrical, and facade capability.
                </span>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#F96A02] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Recorded fastest handover: 23 days</strong> for the
                  Style Union Guntur-2 store.
                </span>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#F96A02] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Typical retail delivery timeline:</strong> 30–45
                  days depending on store size, mall guidelines, and scope.
                </span>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#F96A02] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Multi-format experience:</strong> Full competency
                  in both enclosed shopping mall fit-outs and prominent high-street retail locations.
                </span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/projects"
                className="btn-primary text-xs uppercase tracking-wider font-bold"
              >
                <span>View Retail Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
