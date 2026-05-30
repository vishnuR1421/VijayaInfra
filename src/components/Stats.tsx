"use" + " client";

import { CheckCircle2, TrendingUp, Calendar, Zap } from "lucide-react";

export default function Stats() {
  const statItems = [
    {
      icon: <CheckCircle2 className="w-5 h-5 text-gold-accent" />,
      number: "20+",
      label: "Retail Stores Completed",
      description: "Successfully delivered high-end showrooms and brand outlets across major South Indian cities.",
      gradient: "from-gold-accent/15 to-gold-hover/5",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-brand-blue" />,
      number: "~14k",
      label: "Sq Ft Largest Store",
      description: "Completed massive-scale commercial store fit-outs, proving our capability for large spaces.",
      gradient: "from-brand-blue/15 to-brand-blue-hover/5",
    },
    {
      icon: <Zap className="w-5 h-5 text-brand-yellow" />,
      number: "23 Days",
      label: "Fastest Execution Record",
      description: "Our record turnaround for full turnkey fit-outs, demonstrating speed and compliance efficiency.",
      gradient: "from-brand-yellow/15 to-brand-yellow/5",
    },
    {
      icon: <Calendar className="w-5 h-5 text-slate-400" />,
      number: "2015",
      label: "Legacy of Trust",
      description: "Transitioned from Vijaya Constructions into a structured firm handling complex contracts.",
      gradient: "from-slate-800/20 to-slate-900/5",
    },
  ];

  return (
    <section className="relative py-20 bg-dark-obsidian border-t border-slate-900/60 overflow-hidden">
      {/* Background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gold-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-accent block mb-2">
            Proven Performance
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Track Record in <span className="text-gradient-gold">Numbers</span>
          </h2>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            From quick brand rollouts to grand structural modifications, our statistics reflect our commitment to engineering perfection and on-time delivery.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-2xl border-white/5 relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 shadow-xl glass-card-shine"
            >
              {/* Highlight Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              {/* Icon Container */}
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 w-fit mb-6 group-hover:scale-110 group-hover:border-gold-accent/40 transition-all duration-300">
                {stat.icon}
              </div>

              {/* Stats Value */}
              <span className="block text-4xl md:text-5xl font-black text-white group-hover:text-gold-accent transition-colors duration-300 tracking-tight mb-2">
                {stat.number}
              </span>

              {/* Stats Title */}
              <h3 className="text-slate-200 font-bold text-base mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-400 leading-relaxed">
                {stat.description}
              </p>

              {/* Bottom decorative bar */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-gold-accent to-gold-hover transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
