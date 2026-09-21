"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Maximize2, ShieldCheck, ArrowRight, Store, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { VERIFIED_PROJECTS, ProjectItem } from "@/data/company";

type CategoryFilter = "all" | "retail" | "office" | "commercial" | "facade" | "renovation" | "residential";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const filterOptions: { id: CategoryFilter; label: string }[] = [
    { id: "all", label: "All Projects" },
    { id: "retail", label: "Retail Rollouts" },
    { id: "office", label: "Office Spaces" },
    { id: "commercial", label: "Commercial Fit-Outs" },
    { id: "facade", label: "Facades & Storefronts" },
    { id: "renovation", label: "Renovations & Modifications" },
    { id: "residential", label: "Residential (Design Nest)" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? VERIFIED_PROJECTS
      : VERIFIED_PROJECTS.filter((project) => project.category === activeFilter);

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
                Demonstrated Turnkey Track Record
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
                <span className="text-white">Our Projects Portfolio</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
                Explore our completed turnkey commercial fit-outs, multi-location retail rollouts,
                facades, and residential transformations across South India.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Controls & Projects Grid */}
        <section className="py-16 md:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pb-10 border-b border-slate-200 mb-12">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mr-2">
                <Filter className="w-3.5 h-3.5 text-[#006997]" />
                <span>Filter By:</span>
              </div>
              {filterOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setActiveFilter(opt.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-150 cursor-pointer ${
                    activeFilter === opt.id
                      ? "bg-[#01477A] text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="corporate-card rounded-xl overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Image Area */}
                    <div className="h-60 relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                      {project.highlight && (
                        <span className="absolute top-3 left-3 bg-[#F96A02] text-white px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-md">
                          {project.highlight}
                        </span>
                      )}

                      <span className="absolute top-3 right-3 bg-white/95 text-[#01477A] px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                        {project.categoryLabel}
                      </span>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[11px] font-semibold text-[#FFCC29] block">
                          {project.client}
                        </span>
                        <h3 className="text-base font-extrabold leading-snug">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Metadata Specs */}
                    <div className="p-5">
                      <div className="grid grid-cols-3 gap-2 pb-3 mb-3 border-b border-slate-100 text-xs">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                            City
                          </span>
                          <div className="flex items-center gap-1 font-bold text-slate-800">
                            <MapPin className="w-3 h-3 text-[#006997] shrink-0" />
                            <span className="truncate">{project.city}</span>
                          </div>
                        </div>

                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                            Scope / Area
                          </span>
                          <div className="flex items-center gap-1 font-bold text-slate-800">
                            <Maximize2 className="w-3 h-3 text-[#006997] shrink-0" />
                            <span className="truncate">{project.area}</span>
                          </div>
                        </div>

                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                            Timeline
                          </span>
                          <div className="flex items-center gap-1 font-bold text-[#F96A02]">
                            <Clock className="w-3 h-3 shrink-0" />
                            <span>{project.duration}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {project.scope}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-0 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Verified Record</span>
                    </span>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#006997] hover:underline"
                    >
                      <span>Inquire Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
