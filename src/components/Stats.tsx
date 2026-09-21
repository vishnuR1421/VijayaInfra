import { Store, Maximize2, Zap, History } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";

export default function Stats() {
  const metrics = [
    {
      icon: <Store className="w-6 h-6 text-[#006997]" />,
      value: COMPANY_DETAILS.verifiedMetrics.retailStoresDelivered,
      label: "Retail Stores Delivered",
      sublabel: "Successfully handed over across South India",
    },
    {
      icon: <Maximize2 className="w-6 h-6 text-[#006997]" />,
      value: COMPANY_DETAILS.verifiedMetrics.largestStoreSqFt,
      label: "Largest Store Executed",
      sublabel: "Flagship retail store turnkey delivery",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#F96A02]" />,
      value: `${COMPANY_DETAILS.verifiedMetrics.fastestRecordDays} Days`,
      label: "Fastest Execution Record",
      sublabel: "Recorded for Style Union Guntur-2 store",
    },
    {
      icon: <History className="w-6 h-6 text-[#006997]" />,
      value: COMPANY_DETAILS.verifiedMetrics.experienceSince,
      label: "Operational Experience",
      sublabel: "Originated from Vijaya Constructions",
    },
  ];

  return (
    <section className="-mt-14 sm:-mt-20 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
      <div className="glass-card-light rounded-2xl p-6 sm:p-8 shadow-2xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-start ${
                idx !== 0 ? "lg:border-l lg:border-slate-200/80 lg:pl-8" : ""
              }`}
            >
              <div className="mb-3 p-2.5 rounded-xl bg-white/80 border border-slate-200/70 shadow-sm">
                {metric.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#01477A] tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                {metric.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
