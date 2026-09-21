import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, History, Users, Building, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { COMPANY_DETAILS, ABOUT_STORY } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | Vijaya Infrastructures Private Limited",
  description:
    "Learn about Vijaya Infrastructures Private Limited, built on the operational experience of Vijaya Constructions since 2015. Turnkey commercial fit-outs, retail interiors, electrical and facade contractors across South India.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#01477A] text-white relative overflow-hidden">
          <div className="absolute inset-0 engineering-grid-dark opacity-30 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F96A02] block mb-2">
                Corporate Background & Evolution
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
                <span className="text-white">About Vijaya Infrastructures</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
                South India’s trusted single-source partner for retail store fit-outs, commercial
                office interiors, electrical infrastructure, ACP & glass facades, and turnkey residential interiors.
              </p>
            </div>
          </div>
        </section>

        {/* Source-Grounded Company Story */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col items-start gap-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#006997]">
                  The Company Story
                </span>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#01477A] leading-tight">
                  From Vijaya Constructions (2015) to Vijaya Infrastructures Private Limited
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-[#373435] leading-relaxed">
                  <p>{ABOUT_STORY.paragraph1}</p>
                  <p>{ABOUT_STORY.paragraph2}</p>
                  <p>{ABOUT_STORY.paragraph3}</p>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 w-full mt-2">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    <div>
                      <span className="text-2xl font-extrabold text-[#01477A]">2015</span>
                      <span className="text-[11px] text-slate-500 font-semibold block">
                        Experience Since
                      </span>
                    </div>
                    <div>
                      <span className="text-2xl font-extrabold text-[#01477A]">20+</span>
                      <span className="text-[11px] text-slate-500 font-semibold block">
                        Retail Stores Handed Over
                      </span>
                    </div>
                    <div>
                      <span className="text-2xl font-extrabold text-[#F96A02]">23 Days</span>
                      <span className="text-[11px] text-slate-500 font-semibold block">
                        Fastest Handover Record
                      </span>
                    </div>
                    <div>
                      <span className="text-2xl font-extrabold text-[#01477A]">~14,000</span>
                      <span className="text-[11px] text-slate-500 font-semibold block">
                        Sq Ft Flagship Store
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="corporate-card rounded-xl p-8 bg-[#F7F9FA]">
                  <h3 className="text-base font-bold uppercase tracking-wider text-[#01477A] mb-6 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#006997]" />
                    <span>Corporate Registry & Compliance</span>
                  </h3>

                  <div className="space-y-4 text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">
                        Company Name
                      </span>
                      <span className="font-bold text-slate-900 text-sm">
                        {COMPANY_DETAILS.name}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">
                        Origin Entity
                      </span>
                      <span className="font-semibold text-slate-800">
                        {COMPANY_DETAILS.origin} (Operating since {COMPANY_DETAILS.establishedYear})
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">
                        Corporate Identification Number (CIN)
                      </span>
                      <span className="font-mono font-bold text-[#01477A]">
                        {COMPANY_DETAILS.cin}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">
                        GST Identification Number (GSTIN)
                      </span>
                      <span className="font-mono font-bold text-[#01477A]">
                        {COMPANY_DETAILS.gstin}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">
                        Registered Office
                      </span>
                      <address className="not-italic text-slate-700 leading-relaxed mt-1">
                        {COMPANY_DETAILS.address.fullAddress}
                      </address>
                    </div>

                    <div className="pt-2 border-t border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                        Coverage Across South India
                      </span>
                      <span className="text-slate-700 font-medium">
                        Telangana • Andhra Pradesh • Karnataka • Tamil Nadu
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Leadership & Governance */}
        <section className="py-20 bg-[#F7F9FA] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#006997] block mb-2">
                Corporate Governance
              </span>
              <h2 className="text-3xl font-extrabold text-[#01477A]">
                Company Leadership
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Guiding operational execution, safety compliance, and commercial excellence across
                South India.
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              {COMPANY_DETAILS.directors.map((director, idx) => (
                <div
                  key={idx}
                  className="corporate-card rounded-xl p-8 bg-white flex flex-col justify-between"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#01477A]/10 text-[#01477A] flex items-center justify-center font-bold text-base">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-[#01477A]">
                        {director.name}
                      </h3>
                      <span className="text-xs font-bold text-[#F96A02] uppercase tracking-wider">
                        {director.role}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {director.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
