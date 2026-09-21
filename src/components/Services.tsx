import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Sparkles, Layout, Zap, PanelsTopLeft, Home, Wrench } from "lucide-react";
import { CORE_SERVICES } from "@/data/company";

export default function Services() {
  const retailService = CORE_SERVICES.find((s) => s.id === "retail-commercial-interiors")!;
  const electricalService = CORE_SERVICES.find((s) => s.id === "electrical-works")!;
  const facadeService = CORE_SERVICES.find((s) => s.id === "facade-systems")!;
  const renovationService = CORE_SERVICES.find((s) => s.id === "site-renovations")!;
  const residentialService = CORE_SERVICES.find((s) => s.id === "residential-interiors")!;

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#006997] block mb-2">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#01477A] tracking-tight">
              Specialized Execution Across <span className="text-[#F96A02]">Core Disciplines</span>
            </h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              We provide complete turnkey commercial fit-outs covering retail and office interiors,
              certified electrical infrastructure, ACP & glass facades, in-house site renovations,
              and bespoke turnkey residential interiors.
            </p>
          </div>

          <Link
            href="/services"
            className="btn-secondary text-xs uppercase tracking-wider font-bold self-start md:self-auto"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 1. Flagship Service: Retail & Commercial Interiors (Span 12 - Strongest Visual Emphasis) */}
          <div className="lg:col-span-12 corporate-card rounded-2xl overflow-hidden border-2 border-[#006997]/30 bg-gradient-to-r from-white via-white to-slate-50 p-6 md:p-10 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col items-start gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#006997]/10 text-[#006997] text-[11px] font-extrabold uppercase tracking-wider">
                  <Layout className="w-3.5 h-3.5" />
                  <span>Priority 1: Commercial Fit-Outs • Flagship Specialization</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#01477A] leading-tight">
                  {retailService.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {retailService.overview}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full pt-2">
                  {retailService.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-[#F96A02] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/services/${retailService.slug}`}
                    className="btn-primary text-xs uppercase tracking-wider font-bold"
                  >
                    <span>Explore Retail & Interiors</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-xs text-slate-500 font-semibold">
                    Typical timeline: 30–45 Days • 23-Day record handover
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 h-64 sm:h-80 relative rounded-xl overflow-hidden shadow-md border border-slate-200">
                <Image
                  src={retailService.image}
                  alt={retailService.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01477A]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#F96A02] block">
                    Verified Execution
                  </span>
                  <span className="text-sm font-bold">
                    20+ Retail Outlets Completed Across South India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Electrical Works (Span 6) */}
          <div className="lg:col-span-6 corporate-card rounded-xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded bg-[#006997]/10 text-[#006997]">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Commercial Fit-Out
                  </span>
                  <h3 className="text-xl font-extrabold text-[#01477A]">
                    {electricalService.title}
                  </h3>
                </div>
              </div>

              <div className="h-48 relative rounded-lg overflow-hidden mb-5 border border-slate-100">
                <Image
                  src={electricalService.image}
                  alt={electricalService.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {electricalService.overview}
              </p>

              <div className="space-y-2 mb-6">
                {electricalService.scope.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-[#006997] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={`/services/${electricalService.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006997] hover:text-[#01477A] hover:underline"
            >
              <span>Learn More About Electrical Works</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3. ACP & Glass Facade Systems (Span 6) */}
          <div className="lg:col-span-6 corporate-card rounded-xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded bg-[#01477A]/10 text-[#01477A]">
                  <PanelsTopLeft className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Commercial Fit-Out
                  </span>
                  <h3 className="text-xl font-extrabold text-[#01477A]">
                    {facadeService.title}
                  </h3>
                </div>
              </div>

              <div className="h-48 relative rounded-lg overflow-hidden mb-5 border border-slate-100">
                <Image
                  src={facadeService.image}
                  alt={facadeService.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {facadeService.overview}
              </p>

              <div className="space-y-2 mb-6">
                {facadeService.scope.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-[#006997] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={`/services/${facadeService.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006997] hover:text-[#01477A] hover:underline"
            >
              <span>Learn More About Facades</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4. Site Renovations & Civil Modifications (Span 6) */}
          <div className="lg:col-span-6 corporate-card rounded-xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded bg-[#006997]/10 text-[#006997]">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Integrated Capability
                  </span>
                  <h3 className="text-xl font-extrabold text-[#01477A]">
                    {renovationService.title}
                  </h3>
                </div>
              </div>

              <div className="h-48 relative rounded-lg overflow-hidden mb-5 border border-slate-100">
                <Image
                  src={renovationService.image}
                  alt={renovationService.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {renovationService.overview}
              </p>

              <div className="space-y-2 mb-6">
                {renovationService.scope.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-[#006997] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={`/services/${renovationService.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006997] hover:text-[#01477A] hover:underline"
            >
              <span>Learn More About Renovations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 5. Residential Interiors (Span 6 - Visually Distinct Home Execution) */}
          <div className="lg:col-span-6 corporate-card rounded-xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between border-2 border-amber-300 bg-amber-50/30">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded bg-amber-500/10 text-amber-700">
                    <Home className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                      Turnkey Home Solutions
                    </span>
                    <h3 className="text-xl font-extrabold text-[#01477A]">
                      Residential Interiors
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-800 font-bold text-[10px] uppercase">
                  Residential
                </span>
              </div>

              <div className="h-48 relative rounded-lg overflow-hidden mb-5 border border-amber-200">
                <Image
                  src={residentialService.image}
                  alt={residentialService.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {residentialService.overview}
              </p>

              <div className="space-y-2 mb-6">
                {residentialService.scope.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/services/residential-interiors"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-900 hover:underline"
            >
              <span>Explore Residential Interiors</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
