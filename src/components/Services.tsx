"use client";

import { useState } from "react";
import { Building, Layout, Home, ChevronRight, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "retail-interiors",
      title: "Retail & Commercial Interiors",
      tagline: "High-street retail showrooms & modular corporate spaces",
      icon: <Layout className="w-5 h-5" />,
      image: "/retail_interior.png",
      description: "Our hallmark capability. We construct spaces that drive brand alignment and foot traffic. We handle complex mall approvals, midnight fabrication schedules, strict safety clearances, and precision finishes under fast timelines.",
      points: [
        "Mall and high-street brand showroom fit-outs",
        "Fast-track rollouts (average 30-45 day delivery)",
        "Bespoke brand fixture fabrication & retail displays",
        "Functional, aesthetic commercial office architectures",
        "Fully integrated electrical cabling & lighting setups"
      ]
    },
    {
      id: "civil",
      title: "Civil Construction",
      tagline: "Heavy-duty structural integrity and engineering excellence",
      icon: <Building className="w-5 h-5" />,
      image: "/hero_building.png",
      description: "We handle end-to-end structural engineering and civil works. From initial excavation and piling to the final superstructure, our engineering team ensures extreme load tolerance, weather endurance, and compliance with high structural standards.",
      points: [
        "Residential & commercial multi-story building blocks",
        "Complex structural modifications & architectural renovations",
        "Foundations, RCC framing, and robust slab laying",
        "Weatherproof Aluminium Composite Panel (ACP) external claddings",
        "On-site project monitoring & heavy-equipment management"
      ]
    },
    {
      id: "residential-interiors",
      title: "Design Nest Home Interiors",
      tagline: "Tailored custom living spaces and exquisite home layouts",
      icon: <Home className="w-5 h-5" />,
      image: "/residential_interior.png",
      description: "Our dedicated residential division, Design Nest Interiors. We design and install high-end, customized modular wardrobes, gourmet kitchens, and complete home decors that perfectly fuse contemporary luxury with daily utility.",
      points: [
        "Premium modular kitchens with soft-close mechanisms",
        "Spacious custom wardrobes and walk-in closets",
        "Bespoke wall styling, wooden paneling & ceiling lighting",
        "End-to-end designer curated material selections",
        "Full structural and finish warranties on all materials"
      ]
    }
  ];

  return (
    <section 
      id="services" 
      className="relative py-24 bg-dark-obsidian border-t border-slate-900/60 scroll-mt-20 overflow-hidden"
    >
      {/* Background glowing light orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-blue/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 relative">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-accent block mb-2">
            Engineering & Design
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Our Core <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            Choose a service category to explore our turnkey contracting and interior capabilities.
          </p>
        </div>

        {/* Layout: Selector + Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Selector (Tabs) */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            {services.map((service, idx) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-3.5 p-4 rounded-xl border text-left transition-all duration-300 group cursor-pointer ${
                  activeTab === idx
                    ? "glass-panel border-gold-accent bg-gold-accent/5 text-white shadow-xl shadow-gold-accent/5"
                    : "border-slate-850 bg-transparent text-slate-450 hover:text-slate-200 hover:border-slate-700/60"
                }`}
              >
                <div className={`p-2.5 rounded-lg transition-colors duration-300 ${
                  activeTab === idx
                    ? "bg-gold-accent text-dark-obsidian"
                    : "bg-slate-900 text-slate-400 group-hover:text-gold-accent"
                }`}>
                  {service.icon}
                </div>
                <div className="flex flex-col">
                  <span className={`text-[10px] font-mono tracking-widest uppercase ${
                    activeTab === idx ? "text-gold-accent" : "text-slate-500"
                  }`}>
                    CAPABILITY 0{idx + 1}
                  </span>
                  <span className="text-sm font-extrabold leading-tight mt-0.5">
                    {service.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Display Area */}
          <div className="lg:col-span-8 glass-panel border border-slate-850 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center relative overflow-hidden shadow-2xl animate-fade-in-up">
            
            {/* Image Frame */}
            <div className="w-full md:w-5/12 h-48 md:h-64 rounded-xl overflow-hidden border border-slate-850 relative z-10 shrink-0">
              <Image
                src={services[activeTab].image}
                alt={services[activeTab].title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-obsidian/60 via-transparent to-transparent" />
            </div>

            {/* Text Frame */}
            <div className="w-full md:w-7/12 flex flex-col items-start justify-center gap-3.5 relative z-10 text-left">
              <span className="text-[9px] font-mono font-bold tracking-widest text-gold-accent uppercase bg-gold-accent/10 px-2 py-0.5 rounded border border-gold-accent/20">
                Active Category
              </span>
              
              <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
                {services[activeTab].title}
              </h3>
              
              <p className="text-xs font-bold text-slate-400 italic leading-snug">
                "{services[activeTab].tagline}"
              </p>

              <p className="text-xs text-slate-400 leading-relaxed mt-1">
                {services[activeTab].description}
              </p>

              {/* Point Checklist */}
              <div className="flex flex-col gap-2 mt-2 w-full">
                {services[activeTab].points.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-gold-accent mt-0.5 shrink-0" />
                    <span className="text-[11px] leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              {/* Contact Anchor */}
              <a 
                href="#estimator"
                className="inline-flex items-center gap-1.5 text-[9px] font-bold text-gold-accent uppercase tracking-widest hover:text-white transition-colors duration-300 mt-4 group"
              >
                <span>Request Bid Quote</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
