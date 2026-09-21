import Link from "next/link";
import { ArrowRight, Layers, Store, Zap, ShieldCheck, MapPin, Network } from "lucide-react";
import { CAPABILITIES } from "@/data/company";

export default function CapabilitiesSection() {
  const getIcon = (num: string) => {
    switch (num) {
      case "01":
        return <Layers className="w-5 h-5 text-[#006997]" />;
      case "02":
        return <Store className="w-5 h-5 text-[#006997]" />;
      case "03":
        return <Zap className="w-5 h-5 text-[#F96A02]" />;
      case "04":
        return <ShieldCheck className="w-5 h-5 text-[#006997]" />;
      case "05":
        return <MapPin className="w-5 h-5 text-[#006997]" />;
      case "06":
        return <Network className="w-5 h-5 text-[#006997]" />;
      default:
        return <Layers className="w-5 h-5 text-[#006997]" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#F7F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#006997] block mb-2">
            Why Choose Vijaya Infrastructures
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#01477A] tracking-tight">
            6 Pillars of <span className="text-[#F96A02]">Commercial Execution</span>
          </h2>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            Our operational framework is engineered around speed, accountability, and exact brand
            compliance for corporate developers, retail chains, and commercial institutions.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.number}
              className="corporate-card rounded-xl p-8 bg-white flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    {getIcon(cap.number)}
                  </div>
                  <span className="text-2xl font-black text-slate-200 font-manrope">
                    {cap.number}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[#01477A] mb-2 leading-tight">
                  {cap.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {cap.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#006997] uppercase tracking-wider">
                  {cap.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/capabilities"
            className="btn-secondary text-xs uppercase tracking-wider font-bold"
          >
            <span>Explore Operational Standards & Safety</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
