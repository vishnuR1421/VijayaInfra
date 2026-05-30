"use client";

import { Home, Sparkles, Check, Heart, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function DesignNest() {
  const highlights = [
    {
      title: "Modular Smart Kitchens",
      desc: "Soft-close European cabinetry, heavy quartz countertops, pull-out tall units, and seamless integrated electrical profiles.",
    },
    {
      title: "Ergonomic Wardrobes",
      desc: "Slide-to-fit space-optimized closets, luxury LED interior drawer sensors, glass shutter options, and customized shelves.",
    },
    {
      title: "Complete Home Interiors",
      desc: "Turnkey residential transformations covering false ceiling layouts, luxury wall claddings, and custom-crafted sofas.",
    },
  ];

  return (
    <section id="design-nest" className="relative pt-16 pb-6 bg-gradient-to-b from-dark-obsidian to-slate-950 scroll-mt-20 overflow-hidden">
      {/* Warm Gold glowing lights for design studio feel */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative group">
            {/* Ambient Background frame */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-gold-accent/20 to-amber-500/10 rounded-[32px] blur-xl opacity-50 group-hover:opacity-80 transition-opacity pointer-events-none" />
            
            <div className="relative rounded-[28px] overflow-hidden border border-white/10 shadow-2xl h-[450px] md:h-[500px]">
              <Image
                src="/residential_interior.png"
                alt="Design Nest Premium Residential Living Space"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              {/* Soft warm vignette mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              
              {/* Badge overlay on visual */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-panel border-white/10 flex items-center justify-between shadow-xl">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gold-accent tracking-wider block mb-1">
                    Custom Solutions
                  </span>
                  <h4 className="text-white font-extrabold text-sm uppercase tracking-wide leading-none">
                    Design Nest Interiors
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gold-accent/20 border border-gold-accent/30 flex items-center justify-center text-gold-accent">
                  <Home className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions & Details */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-gold-accent text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Residential Division</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Design Nest Interiors: <br />
              <span className="text-gradient-gold">Luxury Home Spaces</span>
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              We translate personal lifestyle aspirations into beautiful, highly functional living architectures. Our Design Nest division focuses exclusively on premium residential interiors, bringing modular precision and bespoke details to your home.
            </p>

            {/* Bullet Highlights */}
            <div className="flex flex-col gap-6 w-full mt-2">
              {highlights.map((highlight, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-900 bg-slate-950/40 hover:bg-slate-950/80 hover:border-slate-800 transition-colors duration-300">
                  <div className="w-6 h-6 rounded-full bg-gold-accent/10 border border-gold-accent/20 flex items-center justify-center shrink-0 text-gold-accent mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-bold text-sm">{highlight.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{highlight.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick trust notes */}
            <div className="flex items-center gap-6 mt-4 w-full pt-6 border-t border-slate-900">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500 shrink-0" />
                <span>100% Customized</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Structural Warranty</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
