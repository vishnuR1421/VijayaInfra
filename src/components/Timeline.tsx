"use client";

import { useState } from "react";
import { Zap, Clock, ClipboardCheck, Settings, Hammer, Award } from "lucide-react";

export default function Timeline() {
  const [timelineMode, setTimelineMode] = useState<"standard" | "fasttrack">("standard");

  const standardMilestones = [
    {
      dayRange: "Days 1–7",
      title: "Design & Approvals",
      icon: <ClipboardCheck className="w-5 h-5" />,
      description: "Finalizing MEP (Mechanical, Electrical, Plumbing) designs, civil layouts, and securing mall compliance or local municipal clearances.",
    },
    {
      dayRange: "Days 8–15",
      title: "Material & Offsite Fabrication",
      icon: <Settings className="w-5 h-5" />,
      description: "Procurement of specialized materials, structural glass, and offsite brand fixture fabrication within our strong vendor network.",
    },
    {
      dayRange: "Days 16–25",
      title: "Onsite Civil & MEP Setup",
      icon: <Hammer className="w-5 h-5" />,
      description: "Structural alterations, partition wall erection, heavy electrical wiring, and plumbing channel placements.",
    },
    {
      dayRange: "Days 26–32",
      title: "Premium Finishes",
      icon: <Zap className="w-5 h-5" />,
      description: "Glazing installations, high-quality painting, modular panel fitments, ACP facades, and complete light testing.",
    },
    {
      dayRange: "Days 33–35",
      title: "Audit & Handover",
      icon: <Award className="w-5 h-5" />,
      description: "Safety clearance checks, air-conditioning runs, brand standards validation, deep polishing, and keys handover.",
    },
  ];

  const fastTrackMilestones = [
    {
      dayRange: "Days 1–3",
      title: "Rapid Layout Approval",
      icon: <ClipboardCheck className="w-5 h-5 text-gold-accent" />,
      description: "24/7 dedicated engineering sprint. Structural drawings are signed off and mall permits cleared in record time.",
    },
    {
      dayRange: "Days 4–8",
      title: "Parallel Offsite Fabrication",
      icon: <Settings className="w-5 h-5 text-gold-accent" />,
      description: "Fabrication starts immediately in parallel. Pre-assembled modular counters, closets, and glass frame sections prepped offsite.",
    },
    {
      dayRange: "Days 9–15",
      title: "Midnight Site Execution",
      icon: <Hammer className="w-5 h-5 text-gold-accent" />,
      description: "Dual-shift onsite teams working 24 hours. Civil rough-ins, heavy cabling, and false ceilings completed rapidly.",
    },
    {
      dayRange: "Days 16–21",
      title: "Rapid Assembly & Facade",
      icon: <Zap className="w-5 h-5 text-gold-accent" />,
      description: "Pre-fabricated fixtures assembled onsite within hours. Glazing locked, ACP panels clad, and electrical boards powered up.",
    },
    {
      dayRange: "Days 22–23",
      title: "Final Audit & Handover",
      icon: <Award className="w-5 h-5 text-gold-accent" />,
      description: "Final compliance audits, brand layout checks, thorough polish, and project handover. 100% ready for retail rollout.",
    },
  ];

  const activeMilestones = timelineMode === "standard" ? standardMilestones : fastTrackMilestones;

  return (
    <section id="retail-strength" className="relative py-24 bg-dark-obsidian border-t border-slate-900/60 scroll-mt-20 overflow-hidden">
      {/* Dynamic Background Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-gold-accent/5 blur-[120px] pointer-events-none transition-all duration-700" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-accent block mb-2">
              Fast-Track Turnaround Strength
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Sprinting Through <span className="text-gradient-gold">Milestones</span>
            </h2>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              We handle multi-location retail rollouts with intense timeline discipline, operating smoothly inside strict mall compliance systems.
            </p>
          </div>

          {/* Toggle Switches */}
          <div className="flex items-center p-1 rounded-full bg-slate-900 border border-slate-800 self-start md:self-auto shadow-inner shadow-black">
            <button
              onClick={() => setTimelineMode("standard")}
              className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                timelineMode === "standard"
                  ? "bg-slate-800 text-white shadow-md border border-slate-700/60"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Clock className="w-4 h-4" />
              Standard Delivery (35 Days)
            </button>
            <button
              onClick={() => setTimelineMode("fasttrack")}
              className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                timelineMode === "fasttrack"
                  ? "bg-gold-accent text-dark-obsidian shadow-lg shadow-gold-accent/15"
                  : "text-slate-400 hover:text-gold-accent"
              }`}
            >
              <Zap className="w-4 h-4" />
              Fast-Track Sprint (23 Days)
            </button>
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-4 right-4 h-[2px] bg-slate-800/80 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
            {activeMilestones.map((milestone, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border-white/5 relative flex flex-col items-start gap-4 shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
              >
                {/* Milestone Node (Glows on Hover / Active Mode) */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                    timelineMode === "fasttrack"
                      ? "bg-gold-accent/10 border-gold-accent/40 text-gold-accent group-hover:bg-gold-accent group-hover:text-dark-obsidian"
                      : "bg-slate-900 border-slate-800 text-slate-300 group-hover:bg-white group-hover:text-dark-obsidian group-hover:border-white"
                  }`}
                >
                  {milestone.icon}
                </div>

                {/* Day Tag */}
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                    timelineMode === "fasttrack"
                      ? "bg-gold-accent/10 border-gold-accent/20 text-gold-accent"
                      : "bg-slate-900 border-slate-800 text-slate-400"
                  }`}
                >
                  {milestone.dayRange}
                </span>

                {/* Content */}
                <div>
                  <h3 className="text-white font-bold text-sm mb-1.5 group-hover:text-gold-accent transition-colors duration-300">
                    {milestone.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                {/* Number Badge */}
                <span className="absolute top-4 right-6 text-3xl font-black text-slate-800/20 group-hover:text-slate-800/40 transition-colors pointer-events-none select-none">
                  0{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Strengths Callouts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-10 border-t border-slate-900/60">
          <div className="flex gap-4">
            <div className="w-1.5 h-12 rounded-full bg-gold-accent shrink-0" />
            <div>
              <h4 className="text-slate-200 font-bold text-xs uppercase tracking-wider">Multi-City Deployments</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Seamless mobilization across South India with unified brand execution standardizations.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1.5 h-12 rounded-full bg-gold-accent shrink-0" />
            <div>
              <h4 className="text-slate-200 font-bold text-xs uppercase tracking-wider">Mall Compliance Systems</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Full adherence to strict mall safety clearances, night-shift permissions, and smoke-sensor codes.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1.5 h-12 rounded-full bg-gold-accent shrink-0" />
            <div>
              <h4 className="text-slate-200 font-bold text-xs uppercase tracking-wider">Integrated Fabrication</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Strong wood, metal, and acrylic fabrication workshop pipeline to minimize onsite installation durations.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
