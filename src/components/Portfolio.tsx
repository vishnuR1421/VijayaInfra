"use client";

import { useState } from "react";
import { ArrowUpRight, Scale, ShieldAlert, Sparkles, Zap } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<"all" | "flagship" | "mall" | "high-street">("all");

  const portfolioProjects = [
    {
      title: "Style Union - Flagship Megastore",
      client: "Nexon Omniverse",
      category: "flagship",
      size: "~14,000 Sq Ft",
      type: "High-Street Turnkey",
      speed: "35 Days",
      image: "/retail_interior.png",
      description: "Our largest retail turnkey project. Complete civil slab leveling, partition setups, brand fixture layouts, double-height front glazing, and complete load-balanced electrical distribution pipelines.",
    },
    {
      title: "Style Union - Mall Format Store",
      client: "Nexon Omniverse",
      category: "mall",
      size: "6,200 Sq Ft",
      type: "Mall Fit-out",
      speed: "23 Days (Record)",
      image: "/retail_interior.png",
      description: "A fast-track mall installation completed in a record 23 days. Required absolute compliance with strict mall working codes and midnight offsite modular fabrications.",
    },
    {
      title: "Vijaya Commercial Center Facade",
      client: "Commercial Partner",
      category: "high-street",
      size: "18,500 Sq Ft facade",
      type: "ACP & Glazing Facade",
      speed: "45 Days",
      image: "/hero_building.png",
      description: "Structural glazing and premium Aluminium Composite Panel cladding for a modern office plaza in Hyderabad, achieving beautiful weather and thermal insulation ratings.",
    },
    {
      title: "Style Union - High Street Showroom",
      client: "Nexon Omniverse",
      category: "high-street",
      size: "8,500 Sq Ft",
      type: "High-Street Turnkey",
      speed: "30 Days",
      image: "/retail_interior.png",
      description: "A premium high-street brand showroom layout executed smoothly from concrete block to final painting, incorporating advanced decorative cove lights and false ceilings.",
    },
    {
      title: "Design Nest - Penthouse Suite",
      client: "Private Client",
      category: "flagship",
      size: "4,800 Sq Ft",
      type: "Luxury Residential",
      speed: "40 Days",
      image: "/residential_interior.png",
      description: "Ultra-premium custom modular kitchen, walk-in closets, bespoke wood panels, marble kitchen islands, and atmospheric ambient ceiling designs.",
    },
  ];

  const filteredProjects = activeFilter === "all"
    ? portfolioProjects
    : portfolioProjects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 bg-dark-obsidian border-t border-slate-900/60 scroll-mt-20 overflow-hidden">
      {/* Dual ambient brand-balanced lighting */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-brand-blue/8 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-gold-accent/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-accent block mb-2">
              Our Completed Works
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Turnkey Execution <span className="text-gradient-gold">Showcase</span>
            </h2>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              We operate as a primary vendor for Style Union (Nexon Omniverse), having successfully delivered 20+ premium retail outlets across South India.
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900 border border-slate-800 self-start md:self-auto">
            {(["all", "flagship", "mall", "high-street"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? "bg-gold-accent text-dark-obsidian shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {filter === "all" ? "View All" : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-3xl border-white/5 overflow-hidden shadow-2xl relative flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-500 bg-dark-card glass-card-shine"
            >
              {/* Photo Area */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />
                
                {/* Speed Tag */}
                <span className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full bg-gold-accent text-dark-obsidian font-bold text-[10px] uppercase shadow-lg shadow-gold-accent/25">
                  <Zap className="w-3.5 h-3.5 fill-dark-obsidian" />
                  {project.speed}
                </span>

                {/* Client Tag */}
                <span className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 text-slate-200 font-bold text-[10px] uppercase backdrop-blur-md">
                  {project.client}
                </span>
              </div>

              {/* Text / Data Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Technical Specs Block */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/80 mt-4">
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-slate-500 shrink-0" />
                    <div>
                      <span className="block text-[9px] uppercase font-bold text-slate-500 tracking-wider">Store Size</span>
                      <span className="text-xs font-bold text-slate-200">{project.size}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-slate-500 shrink-0" />
                    <div>
                      <span className="block text-[9px] uppercase font-bold text-slate-500 tracking-wider">Format</span>
                      <span className="text-xs font-bold text-slate-200">{project.type}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
