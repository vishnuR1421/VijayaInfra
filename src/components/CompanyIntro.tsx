import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Layers, Clock, Award } from "lucide-react";
import { ABOUT_STORY } from "@/data/company";

export default function CompanyIntro() {
  return (
    <section className="py-20 md:py-24 bg-[#F7F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#006997]">
              Corporate Profile & Capability
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#01477A] leading-tight">
              One Execution Partner for <br />
              <span className="text-[#F96A02]">Commercial Fit-Outs & Interiors.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#373435] leading-relaxed">
              {ABOUT_STORY.paragraph1}
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {ABOUT_STORY.paragraph2}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full pt-2">
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#006997] shrink-0 mt-0.5" />
                <span>Turnkey retail & commercial interior execution</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#006997] shrink-0 mt-0.5" />
                <span>Integrated electrical and cabling MEP</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#006997] shrink-0 mt-0.5" />
                <span>Engineered ACP cladding & glass facades</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#006997] shrink-0 mt-0.5" />
                <span>In-house civil alterations & site renovations</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700 sm:col-span-2">
                <CheckCircle2 className="w-4 h-4 text-[#006997] shrink-0 mt-0.5" />
                <span>Dedicated residential division through Design Nest Interiors</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="btn-secondary text-xs uppercase tracking-wider font-bold"
              >
                <span>Read Full Company Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Execution Framework Matrix */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#01477A] pb-4 mb-6 border-b border-slate-100 flex items-center justify-between">
                <span>Integrated Turnkey Framework</span>
                <Shield className="w-4 h-4 text-[#006997]" />
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-[#01477A]/10 text-[#01477A] flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Eliminate Sub-Contractor Friction
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Managing separate interior, electrical, facade, and renovation trades leads to
                      site delays and disputes. Vijaya delivers complete turnkey coordination.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-[#F96A02]/10 text-[#F96A02] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Predictable Handover Timelines
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Structured milestone scheduling delivers retail store rollouts in 30–45 days and
                      commercial fit-outs with strict timeline discipline.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-[#006997]/10 text-[#006997] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Strict Brand & Mall Compliance
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Proven familiarity with shopping mall management operating frameworks, midnight
                      work schedules, and architectural specifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
