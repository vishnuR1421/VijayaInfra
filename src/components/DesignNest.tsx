import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Home, Sparkles, Shield, Heart } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";

export default function DesignNest() {
  const highlights = [
    {
      title: "Modular Kitchens",
      desc: "Factory-finished European soft-close cabinetry, quartz countertops, and smart pantry units.",
    },
    {
      title: "Wardrobes & Storage Systems",
      desc: "Space-optimized sliding and walk-in closets with integrated LED profile lighting.",
    },
    {
      title: "Living & Bedroom Interiors",
      desc: "Custom wall paneling, acoustic false ceilings, TV units, and contemporary decor accents.",
    },
    {
      title: "Complete Home Interior Execution",
      desc: "End-to-end turnkey project delivery from 3D conceptual design to final handover.",
    },
  ];

  return (
    <section id="residential-interiors" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="corporate-card rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-amber-50/50 via-white to-slate-50 border-2 border-amber-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-lg border border-amber-200">
                <Image
                  src="/residential_interior.png"
                  alt="Luxury Residential Interiors Living Space"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold text-[#F96A02] block">
                    Turnkey Home Execution
                  </span>
                  <span className="text-sm font-extrabold block">
                    Bespoke Living Spaces & Modular Joinery
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Descriptions & Details */}
            <div className="lg:col-span-7 flex flex-col items-start gap-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Residential Interior Division</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#01477A] leading-tight">
                Turnkey Residential Interiors & <br />
                <span className="text-amber-700">Modern Living Spaces</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We provide comprehensive turnkey home interior solutions, translating lifestyle aspirations
                into bespoke, functional living spaces with precision factory modular production,
                quality joinery, and disciplined site execution across South India.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-1">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                      <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  href="/services/residential-interiors"
                  className="btn-primary text-xs uppercase tracking-wider font-bold !bg-amber-600 hover:!bg-amber-700"
                >
                  <span>Explore Residential Interiors</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary text-xs uppercase tracking-wider font-bold !border-amber-700 !text-amber-800 hover:!bg-amber-700 hover:!text-white"
                >
                  <span>Discuss Your Home Project</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
