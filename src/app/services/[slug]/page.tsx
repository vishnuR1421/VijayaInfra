import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight, Layers, ShieldCheck, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { CORE_SERVICES, VERIFIED_PROJECTS } from "@/data/company";

export function generateStaticParams() {
  return CORE_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = CORE_SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Vijaya Infrastructures Private Limited`,
    description: service.overview,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = CORE_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Filter relevant verified projects
  const relevantProjects = VERIFIED_PROJECTS.filter((p) => {
    if (service.id === "retail-commercial-interiors") return p.category === "retail" || p.category === "office";
    if (service.id === "site-renovations") return p.category === "renovation" || p.category === "commercial";
    if (service.id === "electrical-works") return p.category === "retail" || p.category === "commercial";
    if (service.id === "facade-systems") return p.category === "facade";
    if (service.id === "residential-interiors") return p.category === "residential";
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* 1. Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#01477A] text-white relative overflow-hidden">
          <div className="absolute inset-0 engineering-grid-dark opacity-30 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-300 mb-4">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#F96A02] font-semibold">{service.shortTitle}</span>
            </div>

            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F96A02] block mb-2">
                Turnkey Engineering Discipline
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
                {service.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* 2. Service Overview & Image */}
        <section className="py-16 md:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col items-start gap-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#006997]">
                  Service Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#01477A] leading-tight">
                  Comprehensive Execution Grounded in Verified Experience
                </h2>
                <p className="text-sm sm:text-base text-[#373435] leading-relaxed">
                  {service.overview}
                </p>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="btn-primary text-xs uppercase tracking-wider font-bold"
                  >
                    <span>Discuss {service.shortTitle} Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 h-80 sm:h-96 relative rounded-xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Scope / Capabilities & 4. Typical Project Applications */}
        <section className="py-16 md:py-20 bg-[#F7F9FA] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Scope Checklist */}
              <div className="corporate-card rounded-xl p-8 bg-white">
                <h3 className="text-lg font-extrabold text-[#01477A] mb-6 pb-3 border-b border-slate-100 flex items-center justify-between">
                  <span>Scope of Execution</span>
                  <Layers className="w-4 h-4 text-[#006997]" />
                </h3>
                <div className="space-y-3.5">
                  {service.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#006997] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typical Project Applications */}
              <div className="corporate-card rounded-xl p-8 bg-white">
                <h3 className="text-lg font-extrabold text-[#01477A] mb-6 pb-3 border-b border-slate-100 flex items-center justify-between">
                  <span>Typical Project Applications</span>
                  <ShieldCheck className="w-4 h-4 text-[#F96A02]" />
                </h3>
                <div className="space-y-3.5">
                  {service.applications.map((app, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <div className="w-5 h-5 rounded bg-[#01477A]/10 text-[#01477A] flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Process */}
        <section className="py-16 md:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#006997] block mb-2">
                Methodology & Governance
              </span>
              <h2 className="text-3xl font-extrabold text-[#01477A]">
                Structured Execution Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step) => (
                <div
                  key={step.step}
                  className="corporate-card rounded-xl p-6 bg-[#F7F9FA] flex flex-col justify-between"
                >
                  <div>
                    <span className="text-2xl font-black text-[#006997] font-manrope block mb-3">
                      {step.step}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Relevant Project Gallery */}
        {relevantProjects.length > 0 && (
          <section className="py-16 md:py-20 bg-[#F7F9FA] border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#006997] block mb-1">
                    Track Record
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#01477A]">
                    Relevant Executed Projects
                  </h3>
                </div>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006997] hover:underline"
                >
                  <span>View All Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relevantProjects.slice(0, 3).map((p) => (
                  <div
                    key={p.id}
                    className="corporate-card rounded-xl overflow-hidden bg-white flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-48 relative overflow-hidden">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                        {p.highlight && (
                          <span className="absolute top-3 left-3 bg-[#F96A02] text-white px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                            {p.highlight}
                          </span>
                        )}
                      </div>
                      <div className="p-5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#006997] block mb-1">
                          {p.categoryLabel}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 mb-2">{p.title}</h4>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {p.scope}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100 mt-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#006997]" />
                        <span>{p.city}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#F96A02] font-semibold">
                        <Clock className="w-3 h-3" />
                        <span>{p.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 7. CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
