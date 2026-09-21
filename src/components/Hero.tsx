import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Store, CheckCircle2, Shield, Sparkles } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 luminous-hero-bg text-white overflow-hidden">
      {/* Luminous Ambient Light Orbs for Glass Reflection & Depth */}
      <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#00B4D8]/28 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] rounded-full bg-[#F96A02]/22 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-5 -left-20 w-[500px] h-[500px] rounded-full bg-[#0098DA]/25 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] rounded-full bg-indigo-500/15 blur-[120px] pointer-events-none" />

      {/* Diagonal Glass Sheen / Specular Light Sweep */}
      <div className="absolute -top-48 -left-48 w-[150%] h-[350px] bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-transparent -rotate-12 pointer-events-none" />

      {/* Architectural Backdrop with Glassy Blend */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_building.png"
          alt="Vijaya Infrastructures Corporate Commercial Fit-Outs"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-15 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021526] via-[#021526]/40 to-transparent" />
        <div className="absolute inset-0 engineering-grid-dark opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Message */}
          <div className="lg:col-span-8 flex flex-col items-start gap-6 relative z-10">
            {/* Eyebrow in Frosted Glass Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold uppercase tracking-wider text-[#F96A02] shadow-sm">
              <Store className="w-3.5 h-3.5" />
              <span>TURNKEY COMMERCIAL FIT-OUTS • INTERIORS • ELECTRICAL • FACADES</span>
            </div>

            {/* Headline with High-Contrast White & Vibrant Brand Orange */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] drop-shadow-md">
              <span className="text-white block">Building Commercial Spaces.</span>
              <span className="text-[#F96A02] block mt-1">Delivering Complete Execution.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
              Vijaya Infrastructures Private Limited specializes in turnkey commercial
              fit-outs—combining retail and office interiors, certified electrical installations,
              ACP & glass facades, and in-house site modifications—alongside bespoke turnkey residential
              interiors across South India.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <Link
                href="/contact"
                className="btn-primary text-sm uppercase tracking-wider font-bold px-8 py-3.5"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="btn-secondary-white text-sm uppercase tracking-wider font-bold px-8 py-3.5"
              >
                <span>View Our Projects</span>
              </Link>
            </div>

            {/* Footprint Badges in Glass Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/15 w-full text-xs text-slate-200 font-medium">
              <div className="flex items-center gap-2 glass-pill px-3.5 py-2 rounded-lg">
                <MapPin className="w-4 h-4 text-[#F96A02]" />
                <span>Headquartered in Hyderabad</span>
              </div>
              <div className="flex items-center gap-2 glass-pill px-3.5 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-[#F96A02]" />
                <span>South India Coverage</span>
              </div>
              <div className="flex items-center gap-2 glass-pill px-3.5 py-2 rounded-lg text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-[#0098DA]" />
                <span>Operational Since 2015</span>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Frosted Glass Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="glass-panel-dark rounded-2xl p-8 text-white relative overflow-hidden group">
              {/* Top ambient glass reflection sweep */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-tr-2xl pointer-events-none" />

              <div className="border-b border-white/15 pb-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#F96A02] block">
                    Core Specialization
                  </span>
                  <Shield className="w-4 h-4 text-[#00B4D8]" />
                </div>
                <h3 className="text-xl font-extrabold text-white mt-1 drop-shadow-sm">
                  <span className="text-white">Turnkey Commercial Fit-Outs</span>
                </h3>
              </div>

              <div className="space-y-4 text-xs text-slate-200">
                <div className="flex items-start gap-3 p-2.5 rounded-xl transition-colors hover:bg-white/5">
                  <div className="w-6 h-6 rounded-full bg-white/15 border border-white/20 text-[#F96A02] flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <span className="font-bold text-white block">Retail & Office Fit-Outs</span>
                    <span className="text-slate-200">20+ stores delivered with fast-track 30–45 day execution.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl transition-colors hover:bg-white/5">
                  <div className="w-6 h-6 rounded-full bg-white/15 border border-white/20 text-[#F96A02] flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <span className="font-bold text-white block">Electrical & Facade Works</span>
                    <span className="text-slate-200">Complete distribution panels, lighting, ACP cladding & glazing.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl transition-colors hover:bg-white/5">
                  <div className="w-6 h-6 rounded-full bg-white/15 border border-white/20 text-[#F96A02] flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <span className="font-bold text-white block">Residential Interiors</span>
                    <span className="text-slate-200">Modular kitchens, wardrobes, and complete turnkey home interiors.</span>
                  </div>
                </div>
              </div>

              {/* Glass Metrics Bar */}
              <div className="mt-6 pt-6 border-t border-white/15 grid grid-cols-2 gap-3">
                <div className="glass-pill p-3 rounded-xl text-center">
                  <span className="text-[10px] font-bold uppercase text-slate-300 block">
                    Fastest Handover
                  </span>
                  <span className="text-xl font-extrabold text-[#F96A02] mt-0.5 block">
                    23 Days
                  </span>
                </div>
                <div className="glass-pill p-3 rounded-xl text-center">
                  <span className="text-[10px] font-bold uppercase text-slate-300 block">
                    Largest Store
                  </span>
                  <span className="text-xl font-extrabold text-white mt-0.5 block">
                    ~14,000
                  </span>
                  <span className="text-[9px] text-slate-400 block -mt-0.5">Sq Ft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
