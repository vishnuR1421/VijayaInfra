import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Home, Sparkles, Heart, ShieldCheck, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY_DETAILS } from "@/data/company";

export const metadata: Metadata = {
  title: "Design Nest Interiors | Residential Interior Solutions",
  description:
    "Design Nest Interiors is the specialized residential interior division of Vijaya Infrastructures. Modular kitchens, custom wardrobes, living and bedroom transformations.",
};

export default function DesignNestPage() {
  const offerings = [
    {
      title: "Modular Kitchens",
      desc: "Precision factory-crafted cabinetry, German soft-close fittings, granite and quartz countertops, customized tall units, and smart organizers.",
      image: "/residential_interior.png",
    },
    {
      title: "Wardrobes & Storage Systems",
      desc: "Floor-to-ceiling sliding wardrobes, walk-in closets, bespoke internal layouts with integrated profile illumination, and luxury glass shutter options.",
      image: "/residential_interior.png",
    },
    {
      title: "Living & Bedroom Interiors",
      desc: "Curated TV wall units with fluted wood paneling, designer false ceilings, warm ambient cove lighting, and acoustic accent finishes.",
      image: "/residential_interior.png",
    },
    {
      title: "Complete Home Interior Execution",
      desc: "Turnkey residential transformations covering conceptual 3D designs, electrical modifications, false ceilings, modular woodwork, painting, and deep cleaning.",
      image: "/residential_interior.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-r from-amber-950 via-[#01477A] to-[#006997] text-white relative overflow-hidden">
          <div className="absolute inset-0 engineering-grid-dark opacity-20 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-400/20 text-[#F96A02] text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Dedicated Residential Interior Division</span>
              </div>
              <h1
                className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md"
                style={{ color: "#FFFFFF" }}
              >
                <span className="text-white" style={{ color: "#FFFFFF" }}>
                  Design Nest Interiors
                </span>
              </h1>
              <p
                className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed"
                style={{ color: "#E2E8F0" }}
              >
                Bespoke residential interior design and turnkey home execution. We blend engineering
                precision with contemporary lifestyle luxury.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="btn-primary text-xs uppercase tracking-wider font-bold !bg-amber-600 hover:!bg-amber-700"
                >
                  <span>Book Home Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={COMPANY_DETAILS.designNestWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-white text-xs uppercase tracking-wider font-bold"
                >
                  <span>Visit designnestinteriors.in</span>
                </a>
                <a
                  href={COMPANY_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F96A02] font-semibold flex items-center gap-1.5 hover:underline py-2"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>{COMPANY_DETAILS.instagram}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Division Narrative */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col items-start gap-6">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                  Residential Craftsmanship
                </span>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#01477A] leading-tight">
                  Turnkey Residential Interior Solutions for Discerning Homeowners
                </h2>

                <p className="text-sm sm:text-base text-[#373435] leading-relaxed">
                  Design Nest Interiors operates as a dedicated group division under Vijaya
                  Infrastructures Private Limited. Leveraging our parent company's turnkey fit-out and
                  electrical engineering backbone, we deliver turnkey residential transformations with
                  zero contractor friction and guaranteed timeline certainty.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
                  <div className="p-4 rounded-lg bg-amber-50/50 border border-amber-200">
                    <span className="text-xs font-bold text-slate-900 block mb-1">
                      Factory Modular Precision
                    </span>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Precision machine-cut cabinetry with high-density moisture-resistant boards.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-amber-50/50 border border-amber-200">
                    <span className="text-xs font-bold text-slate-900 block mb-1">
                      Turnkey Electrical & Renovation MEP
                    </span>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      All electrical, plumbing, and partition modifications managed in-house.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 h-80 sm:h-96 relative rounded-2xl overflow-hidden shadow-xl border border-amber-200">
                <Image
                  src="/residential_interior.png"
                  alt="Design Nest Interiors Living Space"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Offerings Grid */}
        <section className="py-20 bg-[#F7F9FA] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-2">
                What We Execute
              </span>
              <h2 className="text-3xl font-extrabold text-[#01477A]">
                Residential Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offerings.map((item, idx) => (
                <div
                  key={idx}
                  className="corporate-card rounded-xl overflow-hidden bg-white flex flex-col justify-between"
                >
                  <div className="h-52 relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 text-white">
                      <h3
                        className="text-lg font-extrabold text-white drop-shadow-md"
                        style={{ color: "#FFFFFF" }}
                      >
                        <span className="text-white" style={{ color: "#FFFFFF" }}>
                          {item.title}
                        </span>
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800"
                    >
                      <span>Inquire About {item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Residential CTA Banner - Matching Top Hero Gradient */}
        <section className="py-20 bg-gradient-to-r from-amber-950 via-[#01477A] to-[#006997] text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 engineering-grid-dark opacity-20 pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 drop-shadow-md"
              style={{ color: "#FFFFFF" }}
            >
              <span className="text-white" style={{ color: "#FFFFFF" }}>
                Ready to Design Your Dream Home?
              </span>
            </h3>
            <p className="text-sm sm:text-base text-slate-200 mb-8 max-w-xl mx-auto leading-relaxed" style={{ color: "#E2E8F0" }}>
              Schedule a design discussion with our Design Nest team in Hyderabad. We deliver turnkey interior certainty.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary text-xs uppercase tracking-wider font-bold px-8 py-3.5 shadow-lg"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={COMPANY_DETAILS.designNestWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-white text-xs uppercase tracking-wider font-bold px-8 py-3.5"
              >
                <span>Visit designnestinteriors.in</span>
              </a>
              <a
                href={COMPANY_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-white text-xs uppercase tracking-wider font-bold flex items-center gap-1.5 px-6 py-3.5"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>{COMPANY_DETAILS.instagram}</span>
              </a>
              <a
                href={`tel:${COMPANY_DETAILS.phones[0]}`}
                className="btn-secondary-white text-xs uppercase tracking-wider font-bold flex items-center gap-1.5 px-6 py-3.5"
              >
                <Phone className="w-4 h-4" />
                <span>+91 {COMPANY_DETAILS.phones[0]}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
