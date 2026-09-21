"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, ShieldCheck, Clock, Building } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY_DETAILS } from "@/data/company";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    projectType: "",
    projectLocation: "",
    approxArea: "",
    expectedTimeline: "",
    projectDetails: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, send to backend API or form endpoint
  };

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
                Commercial & Residential Inquiries
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Discuss Your Project
              </h1>
              <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
                Connect directly with our engineering and project estimating team in Hyderabad. We
                review scopes and mobilize quickly across South India.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content & Form Grid */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Office Details & Direct Actions (Col 1-5) */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#006997] block mb-1">
                    Corporate Headquarters
                  </span>
                  <h2 className="text-2xl font-extrabold text-[#01477A]">
                    Vijaya Infrastructures Private Limited
                  </h2>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Originating from Vijaya Constructions (operational since 2015). Registered
                    corporate entity handling major commercial contracts across South India.
                  </p>
                </div>

                {/* Direct Action Buttons for Mobile / Fast Response */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${COMPANY_DETAILS.phones[0]}`}
                    className="flex items-center justify-center gap-2 p-3.5 rounded-lg border-2 border-[#006997] text-[#006997] font-bold text-xs hover:bg-[#006997] hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Direct</span>
                  </a>
                  <a
                    href={`https://wa.me/91${COMPANY_DETAILS.phones[0]}?text=Hello%20Vijaya%20Infrastructures%2C%20I%20would%20like%20to%20discuss%20a%20commercial%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3.5 rounded-lg border-2 border-[#25D366] text-[#25D366] font-bold text-xs hover:bg-[#25D366] hover:text-white transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Office Credentials Card */}
                <div className="corporate-card rounded-xl p-6 bg-[#F7F9FA] space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#F96A02] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Registered Office
                      </span>
                      <address className="not-italic text-slate-600 leading-relaxed">
                        {COMPANY_DETAILS.address.fullAddress}
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-slate-200">
                    <Phone className="w-4 h-4 text-[#F96A02] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Operational Mobile Numbers
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <a href={`tel:${COMPANY_DETAILS.phones[0]}`} className="text-[#006997] font-semibold hover:underline">
                          +91 {COMPANY_DETAILS.phones[0]}
                        </a>
                        <a href={`tel:${COMPANY_DETAILS.phones[1]}`} className="text-[#006997] font-semibold hover:underline">
                          +91 {COMPANY_DETAILS.phones[1]}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-slate-200">
                    <Mail className="w-4 h-4 text-[#F96A02] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Email Enquiries
                      </span>
                      <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-[#006997] font-semibold hover:underline break-all">
                        {COMPANY_DETAILS.email}
                      </a>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">
                        CIN
                      </span>
                      <span className="font-mono text-slate-800 font-semibold">
                        {COMPANY_DETAILS.cin}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">
                        GSTIN
                      </span>
                      <span className="font-mono text-slate-800 font-semibold">
                        {COMPANY_DETAILS.gstin}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Clean Project Enquiry Form (Col 6-12) */}
              <div className="lg:col-span-7">
                <div className="corporate-card rounded-2xl p-8 sm:p-10 bg-white border border-slate-200 shadow-lg">
                  <div className="mb-6 pb-4 border-b border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#006997] block mb-1">
                      Turnkey Project Scope Form
                    </span>
                    <h3 className="text-xl font-extrabold text-[#01477A]">
                      Submit Project Enquiry
                    </h3>
                  </div>

                  {submitted ? (
                    <div className="py-12 text-center flex flex-col items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-extrabold text-[#01477A]">
                        Enquiry Submitted Successfully
                      </h4>
                      <p className="text-xs text-slate-600 max-w-md leading-relaxed">
                        Thank you for reaching out. Our project contracting team will review your
                        project scope and contact you promptly at {formData.email || formData.phone}.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="btn-secondary text-xs uppercase tracking-wider font-bold mt-4"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                      {/* Name & Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="e.g. Rajesh Kumar"
                            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:border-[#006997] focus:ring-1 focus:ring-[#006997]"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Company / Brand Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="e.g. Retail Brand / Developer"
                            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:border-[#006997] focus:ring-1 focus:ring-[#006997]"
                          />
                        </div>
                      </div>

                      {/* Phone & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="e.g. 98490 XXXXX"
                            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:border-[#006997] focus:ring-1 focus:ring-[#006997]"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="e.g. rajesh@company.com"
                            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:border-[#006997] focus:ring-1 focus:ring-[#006997]"
                          />
                        </div>
                      </div>

                      {/* Project Type & Location */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Project Type *
                          </label>
                          <select
                            name="projectType"
                            required
                            value={formData.projectType}
                            onChange={handleInputChange}
                            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:border-[#006997] focus:ring-1 focus:ring-[#006997] bg-white"
                          >
                            <option value="">Select project type</option>
                            <option value="Residential Interior">Residential Interiors (Design Nest)</option>
                            <option value="Retail Fit-out">Retail Store Fit-out</option>
                            <option value="Commercial Office">Commercial Office Interior</option>
                            <option value="Facade Systems">ACP & Glass Facade Systems</option>
                            <option value="Electrical Works">Electrical Infrastructure</option>
                            <option value="Renovations & Modifications">Site Renovations & Modifications</option>
                          </select>
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Project Location *
                          </label>
                          <input
                            type="text"
                            name="projectLocation"
                            required
                            value={formData.projectLocation}
                            onChange={handleInputChange}
                            placeholder="e.g. Hyderabad / Bengaluru / Vijayawada"
                            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:border-[#006997] focus:ring-1 focus:ring-[#006997]"
                          />
                        </div>
                      </div>

                      {/* Approx Area & Expected Timeline */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Approx. Area (Sq Ft)
                          </label>
                          <input
                            type="text"
                            name="approxArea"
                            value={formData.approxArea}
                            onChange={handleInputChange}
                            placeholder="e.g. 5,000 Sq Ft"
                            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:border-[#006997] focus:ring-1 focus:ring-[#006997]"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            Expected Timeline
                          </label>
                          <input
                            type="text"
                            name="expectedTimeline"
                            value={formData.expectedTimeline}
                            onChange={handleInputChange}
                            placeholder="e.g. 30–45 Days / Immediate"
                            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:border-[#006997] focus:ring-1 focus:ring-[#006997]"
                          />
                        </div>
                      </div>

                      {/* Project Details */}
                      <div>
                        <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Project Details & Scope Notes
                        </label>
                        <textarea
                          name="projectDetails"
                          rows={4}
                          value={formData.projectDetails}
                          onChange={handleInputChange}
                          placeholder="Briefly describe your site status (mall vs high-street), scope of work (civil, interior, MEP, facade), or drawings availability..."
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:border-[#006997] focus:ring-1 focus:ring-[#006997]"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="btn-primary w-full text-xs uppercase tracking-wider font-bold py-3.5 cursor-pointer"
                        >
                          <span>Submit Enquiry</span>
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
