"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Shield, CheckCircle, Calculator, User, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  // Estimator States
  const [projectType, setProjectType] = useState<"civil" | "retail" | "residential" | "facade" | "electrical">("retail");
  const [area, setArea] = useState<number>(2500);

  // Form States
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Pricing & Timeline Matrix
  const rates = {
    civil: { rate: 1650, name: "Civil Construction", baseDays: 35, addedDaysPer1000SqFt: 5 },
    retail: { rate: 1100, name: "Retail & Commercial Interiors", baseDays: 23, addedDaysPer1000SqFt: 4 },
    residential: { rate: 850, name: "Design Nest Home Interiors", baseDays: 30, addedDaysPer1000SqFt: 5 },
    facade: { rate: 380, name: "ACP & Glass Facade Works", baseDays: 20, addedDaysPer1000SqFt: 3 },
    electrical: { rate: 160, name: "Electrical System Works", baseDays: 15, addedDaysPer1000SqFt: 2 },
  };

  const currentRate = rates[projectType];
  const estimatedCost = area * currentRate.rate;
  const estimatedTimeline = currentRate.baseDays + Math.round((area / 1000) * currentRate.addedDaysPer1000SqFt);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate premium submit transition
    setSubmitted(true);
    setTimeout(() => {
      // Keep it true but reset fields
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="estimator" className="relative pt-8 pb-16 bg-dark-obsidian border-t border-slate-900/60 scroll-mt-20 overflow-hidden">
      {/* Dual ambient brand-balanced lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-blue/8 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gold-accent/4 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-accent block mb-2">
            Calculate & Connect
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Estimate Your <span className="text-gradient-gold">Project</span>
          </h2>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            Get an instant commercial budget and execution timeline using our smart estimator, then submit an official inquiry to our South Indian project division.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Smart Estimator Card */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border-white/5 shadow-2xl relative bg-dark-card flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-accent/10 border border-gold-accent/25 flex items-center justify-center text-gold-accent">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-lg uppercase tracking-wide">Turnkey Cost Estimator</h3>
                <span className="text-[10px] text-slate-500 font-semibold uppercase">Real-Time Estimations</span>
              </div>
            </div>

            {/* Selector Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Object.entries(rates).map(([key, details]) => (
                <button
                  key={key}
                  onClick={() => setProjectType(key as any)}
                  className={`px-4 py-3 rounded-xl border text-xs font-bold text-center transition-all duration-300 cursor-pointer ${
                    projectType === key
                      ? "border-gold-accent bg-gold-accent/10 text-gold-accent"
                      : "border-slate-800 bg-transparent text-slate-400 hover:border-slate-700 hover:text-slate-200"
                  }`}
                >
                  {details.name.split(" ")[0]}
                </button>
              ))}
            </div>

            {/* Slider / Range Area */}
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-400">
                <span>Select Project Area (Sq Ft)</span>
                <span className="text-gold-accent text-sm font-bold bg-gold-accent/10 px-2 py-0.5 rounded-md border border-gold-accent/20">
                  {area.toLocaleString()} Sq Ft
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="25000"
                step="100"
                value={area}
                onChange={(e) => setArea(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-gold-accent mt-2"
              />
              <div className="flex justify-between text-[10px] text-slate-600 font-bold">
                <span>500 SQ FT</span>
                <span>25,000 SQ FT</span>
              </div>
            </div>

            {/* Estimator Calculation Outputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 p-5 rounded-2xl bg-slate-950 border border-brand-blue/20 shadow-[0_0_15px_rgba(0,110,166,0.06)] transition-all duration-300">
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Estimated Budget</span>
                <span className="text-xl sm:text-2xl font-black text-white block mt-1 tracking-tight">
                  {formatCurrency(estimatedCost)}*
                </span>
                <span className="text-[9px] text-slate-500 font-semibold block mt-0.5">
                  Est. at {formatCurrency(currentRate.rate)}/sq ft
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Delivery Timeline</span>
                <span className="text-xl sm:text-2xl font-black text-gold-accent block mt-1 tracking-tight">
                  {estimatedTimeline} Days
                </span>
                <span className="text-[9px] text-slate-500 font-semibold block mt-0.5">
                  Incl. structural clearance codes
                </span>
              </div>
            </div>

            <p className="text-[10px] text-slate-500 leading-normal italic">
              *Disclaimer: This is a high-level budget based on default regional material and engineering claddings. Final rates depend on actual MEP drafts, mall site access limitations, and finalized interior material selections.
            </p>
          </div>

          {/* RIGHT: Inquiry Form & Office Contacts */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Form Box */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border-white/5 shadow-2xl relative bg-dark-card flex flex-col gap-6">
              
              <h3 className="text-white font-extrabold text-base uppercase tracking-wider">
                Direct Inquiry Submission
              </h3>

              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center gap-4 animate-fade-in-up">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/5">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Inquiry Received</h4>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed max-w-xs">
                      Our commercial estimating office has received your request. A contracting engineer will review the metrics and reach out shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs text-slate-400 font-bold uppercase tracking-wider">Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-gold-accent focus:shadow-[0_0_12px_rgba(243,112,33,0.15)] focus:ring-1 focus:ring-gold-accent/20 transition-all duration-300 pl-10"
                      />
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                    </div>
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs text-slate-400 font-bold uppercase tracking-wider">Phone</label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone number"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-gold-accent focus:shadow-[0_0_12px_rgba(243,112,33,0.15)] focus:ring-1 focus:ring-gold-accent/20 transition-all duration-300 pl-10"
                        />
                        <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email</label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email address"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-gold-accent focus:shadow-[0_0_12px_rgba(243,112,33,0.15)] focus:ring-1 focus:ring-gold-accent/20 transition-all duration-300 pl-10"
                        />
                        <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs text-slate-400 font-bold uppercase tracking-wider">Project Scope</label>
                    <div className="relative">
                      <textarea
                        name="message"
                        id="message"
                        rows={3}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Briefly describe the location, timeline, and interior standards..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-gold-accent focus:shadow-[0_0_12px_rgba(243,112,33,0.15)] focus:ring-1 focus:ring-gold-accent/20 transition-all duration-300 pl-10"
                      />
                      <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                    </div>
                  </div>

                  {/* Hidden metadata input details in calculation */}
                  <div className="hidden">
                    <input type="hidden" name="estArea" value={area} />
                    <input type="hidden" name="estType" value={projectType} />
                    <input type="hidden" name="estCost" value={estimatedCost} />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gold-accent text-dark-obsidian font-bold text-sm hover:bg-white transition-all duration-300 shadow-xl shadow-gold-accent/10 mt-2 cursor-pointer"
                  >
                    <span>Submit Project Estimate Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Official Registration Cards */}
            <div className="glass-panel p-5 rounded-2xl border-white/5 relative bg-slate-950/20 text-xs text-slate-400 leading-relaxed flex flex-col gap-3">
              <div className="flex items-center gap-2 text-slate-200 font-bold">
                <Shield className="w-4 h-4 text-gold-accent" />
                <span>Corporate Registrations</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <div>
                  <span className="block text-[9px] uppercase font-bold text-slate-500">CIN Registration</span>
                  <span className="text-slate-300 font-medium">U43299TS2025PTC208519</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase font-bold text-slate-500">Service Coverage</span>
                  <span className="text-slate-300 font-medium">South India (Active)</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Physical Office Address block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-10 border-t border-slate-900/60">
          <div className="flex gap-4">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-gold-accent h-fit shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-slate-200 font-bold text-xs uppercase tracking-wider">Registered Office</h4>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                No. 503, Siva Balaji Arcade,<br />
                Plot No. 111-112, Nizampet,<br />
                Hyderabad, Telangana, 500090
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-gold-accent h-fit shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-slate-200 font-bold text-xs uppercase tracking-wider">Direct Enquiries</h4>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                General: <a href="mailto:info@vijayainfrastructures.com" className="text-slate-300 hover:text-gold-accent font-semibold">info@vijayainfra.com</a><br />
                Estimates: <a href="mailto:estimating@vijayainfrastructures.com" className="text-slate-300 hover:text-gold-accent font-semibold">estimating@vijayainfra.com</a>
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-gold-accent h-fit shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-slate-200 font-bold text-xs uppercase tracking-wider">Operational Contacts</h4>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Contracts: <span className="text-slate-300 font-semibold">+91 98490 12345</span><br />
                Residential: <span className="text-slate-300 font-semibold">+91 98490 67890</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
