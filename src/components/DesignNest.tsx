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
    <section id="design-nest" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="corporate-card rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-amber-50/50 via-white to-slate-50 border-2 border-amber-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-lg border border-amber-200">
                <Image
                  src="/residential_interior.png"
                  alt="Design Nest Interiors Luxury Residential Living Space"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold text-[#F96A02] block">
                    Residential Division
                  </span>
                <a
                  href={COMPANY_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-extrabold flex items-center gap-1.5 hover:text-[#F96A02] transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>{COMPANY_DETAILS.instagram}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions & Details */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Group Residential Division</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#01477A] leading-tight">
              Residential Interiors — <br />
              <span className="text-amber-700">Design Nest Interiors</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Design Nest Interiors is the dedicated residential interior division associated with
              Vijaya Infrastructures. We translate lifestyle aspirations into bespoke, functional
              home spaces with precision factory modular production and turnkey execution.
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
                href="/design-nest"
                className="btn-primary text-xs uppercase tracking-wider font-bold !bg-amber-600 hover:!bg-amber-700"
              >
                <span>Explore Design Nest</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={COMPANY_DETAILS.designNestWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs uppercase tracking-wider font-bold !border-amber-700 !text-amber-800 hover:!bg-amber-700 hover:!text-white"
              >
                <span>Visit designnestinteriors.in</span>
              </a>
              <a
                href={COMPANY_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 px-2 py-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
