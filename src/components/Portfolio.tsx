import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Clock, Maximize2, ShieldCheck, Tag } from "lucide-react";
import { VERIFIED_PROJECTS } from "@/data/company";

export default function Portfolio() {
  // Show first 4 key verified projects on the homepage
  const featuredProjects = VERIFIED_PROJECTS.slice(0, 4);

  return (
    <section id="projects" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#006997] block mb-2">
              Verified Project Delivery
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#01477A] tracking-tight">
              Selected <span className="text-[#F96A02]">Execution Portfolio</span>
            </h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              Every project reflects our commitment to brand compliance, rigorous engineering, and
              on-time commercial handover across South India.
            </p>
          </div>

          <Link
            href="/projects"
            className="btn-secondary text-xs uppercase tracking-wider font-bold self-start md:self-auto"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Editorial Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="corporate-card rounded-xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Photo Frame */}
                <div className="h-64 sm:h-72 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Highlight Badge */}
                  {project.highlight && (
                    <div className="absolute top-4 left-4 bg-[#F96A02] text-white px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wider shadow-md">
                      {project.highlight}
                    </div>
                  )}

                  {/* Category Pill */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#01477A] px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wider">
                    {project.categoryLabel}
                  </div>

                  {/* Bottom details on image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-semibold text-[#F96A02] block mb-0.5">
                      {project.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Editorial Metadata Grid */}
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-3 pb-4 mb-4 border-b border-slate-100 text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                        Location
                      </span>
                      <div className="flex items-center gap-1 font-bold text-slate-800">
                        <MapPin className="w-3.5 h-3.5 text-[#006997] shrink-0" />
                        <span>{project.city}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                        Area / Scope
                      </span>
                      <div className="flex items-center gap-1 font-bold text-slate-800">
                        <Maximize2 className="w-3.5 h-3.5 text-[#006997] shrink-0" />
                        <span className="truncate">{project.area}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                        Duration
                      </span>
                      <div className="flex items-center gap-1 font-bold text-[#F96A02]">
                        <Clock className="w-3.5 h-3.5 shrink-0" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.scope}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified Execution</span>
                </span>

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#006997] hover:text-[#01477A] hover:underline"
                >
                  <span>Project Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
