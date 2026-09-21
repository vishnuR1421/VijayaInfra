import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Building, Laptop, ShoppingBag } from "lucide-react";
import { SECTORS } from "@/data/company";

export default function SectorFocus() {
  const getSectorIcon = (id: string) => {
    switch (id) {
      case "retail-chains":
        return <ShoppingBag className="w-5 h-5 text-[#F96A02]" />;
      case "commercial-buildings":
        return <Building className="w-5 h-5 text-[#006997]" />;
      case "it-office-spaces":
        return <Laptop className="w-5 h-5 text-[#01477A]" />;
      default:
        return <Building className="w-5 h-5 text-[#006997]" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#F7F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#006997] block mb-2">
            Target Industry Sectors
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#01477A] tracking-tight">
            Tailored Execution for <span className="text-[#F96A02]">3 Primary Sectors</span>
          </h2>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            Every commercial sector demands distinct regulatory, structural, and schedule
            priorities. We engineer turnkey solutions purpose-built for each operational environment.
          </p>
        </div>

        {/* 3 Premium Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SECTORS.map((sector) => (
            <div
              key={sector.id}
              className="corporate-card rounded-xl overflow-hidden flex flex-col justify-between bg-white"
            >
              <div>
                <div className="h-52 relative overflow-hidden">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#01477A]/80 via-[#01477A]/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-center gap-2.5">
                    <div className="p-2 rounded bg-white/20 backdrop-blur-sm">
                      {getSectorIcon(sector.id)}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F96A02]">
                      Sector Overview
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-[#01477A] mb-1">
                    {sector.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#F96A02] block mb-3">
                    {sector.tagline}
                  </span>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {sector.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Execution Capabilities:
                    </span>
                    {sector.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#006997] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/contact"
                  className="btn-secondary w-full text-xs uppercase tracking-wider font-bold"
                >
                  <span>Inquire for {sector.title.split(" ")[0]}</span>
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
