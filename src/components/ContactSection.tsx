import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Instagram, 
  Linkedin, 
  UserCheck, 
  ShieldCheck, 
  Clock, 
  MessageSquare,
  Sparkles,
  Building2,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, OPERATIONAL_BRANCHES } from '../data/logisticsData';

interface ContactSectionProps {
  onOpenQuoteModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuoteModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: 'Hyderabad',
    subject: 'General Inquiry / Freight Quote',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-900/80 border border-teal-500/40 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Direct Leadership Connect</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            CONTACT <span className="text-amber-400">SEAIR WORLD LOGISTICS</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-400 to-teal-400 rounded-full mx-auto mt-3 mb-4" />
          <p className="text-slate-300 text-base sm:text-lg">
            Connect directly with our leadership team for immediate rate quotations, customs clearance assistance, and air/sea cargo bookings.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Director & Company Contact Card (Exact info from PDF Page 7) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Leadership Contact Card */}
            <div className="bg-gradient-to-br from-slate-950 via-teal-950 to-slate-950 border-2 border-teal-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                {/* Director Header */}
                <div className="border-b border-slate-800 pb-5">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono mb-1">
                    Company Leadership Contact
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
                    Ganta Somireddy
                  </h3>
                  <div className="inline-flex items-center gap-2 mt-1 px-2.5 py-0.5 rounded-full bg-teal-900/60 border border-teal-700 text-teal-300 text-xs font-bold font-mono">
                    [DIRECTOR]
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    25 Years of Proven Industry Knowledge & Strategic Freight Forwarding Leadership.
                  </p>
                </div>

                {/* Contact Points from PDF Page 7 */}
                <div className="space-y-4">
                  {/* Phone */}
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-amber-400 transition-all group"
                    id="contact-director-phone"
                  >
                    <div className="w-11 h-11 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-md group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block font-medium">Direct Telephone / Mobile</span>
                      <span className="text-base font-extrabold text-white group-hover:text-amber-400 transition-colors font-mono">
                        {COMPANY_INFO.phone}
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-teal-400 transition-all group"
                    id="contact-director-email"
                  >
                    <div className="w-11 h-11 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold shrink-0 shadow-md group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[11px] text-slate-400 block font-medium">Official Inquiry Email</span>
                      <span className="text-xs sm:text-sm font-bold text-white group-hover:text-teal-300 transition-colors truncate block">
                        {COMPANY_INFO.email}
                      </span>
                    </div>
                  </a>

                  {/* Social Handles from PDF Page 7 */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <a
                      href={COMPANY_INFO.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-pink-500 transition-all group text-xs text-slate-300 hover:text-white"
                      id="contact-director-instagram"
                    >
                      <div className="w-8 h-8 rounded-lg bg-pink-600/20 text-pink-400 flex items-center justify-center shrink-0">
                        <Instagram className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <span className="text-[10px] text-slate-400 block">Instagram</span>
                        <span className="font-semibold group-hover:text-pink-300">@{COMPANY_INFO.instagram}</span>
                      </div>
                    </a>

                    <a
                      href={COMPANY_INFO.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-blue-500 transition-all group text-xs text-slate-300 hover:text-white"
                      id="contact-director-linkedin"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <span className="text-[10px] text-slate-400 block">LinkedIn</span>
                        <span className="font-semibold group-hover:text-blue-300">@{COMPANY_INFO.linkedin}</span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* WhatsApp Quick Chat button */}
                <div className="pt-2">
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                    id="contact-whatsapp-btn"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp (+91 7993142771)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Operating Info */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 text-xs text-slate-300 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <Clock className="w-4 h-4" />
                <span>Operational Hours & Port Availability</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Our central operations desk and seaport/airport coordinators operate <strong>24 hours / 7 days a week</strong> for customs clearances, time-critical air freight, and reefer temperature monitoring.
              </p>
            </div>
          </div>

          {/* Right Column: Direct Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold text-white">
                  Send an Inquiry / Shipment Request
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill in your details below and our team will get back to you with custom tariff schedules and handling plans.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-4 bg-slate-900 rounded-2xl border border-teal-500/40 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-teal-400" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-slate-300 text-xs max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-amber-400">{formData.name}</strong>. Your inquiry regarding <strong className="text-teal-300">{formData.subject}</strong> has been routed to our <strong className="text-white">{formData.branch} Branch</strong> and Director <strong className="text-white">Mr. Somireddy Ganta</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        branch: 'Hyderabad',
                        subject: 'General Inquiry / Freight Quote',
                        message: ''
                      });
                    }}
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Somasekhar Reddy"
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Mobile / Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Preferred Branch Hub
                      </label>
                      <select
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      >
                        {OPERATIONAL_BRANCHES.map(b => (
                          <option key={b.id} value={b.name}>
                            {b.name} ({b.state})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Subject / Service Inquired
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Air Freight Forwarding">Air Freight Forwarding</option>
                      <option value="Sea Freight Forwarding (FCL/LCL)">Sea Freight Forwarding (FCL/LCL)</option>
                      <option value="Customs Brokerage & Duty Optimization">Customs Brokerage & Duty Optimization</option>
                      <option value="Temperature Controlled (-20°C Reefer)">Temperature Controlled (-20°C Reefer / Cold Chain)</option>
                      <option value="Door-to-Door Multimodal Logistics">Door-to-Door Multimodal Logistics</option>
                      <option value="Import & Export Regulatory Clearance">Import & Export Regulatory Clearance</option>
                      <option value="General Corporate Inquiry">General Corporate Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Message / Cargo Specifications *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      placeholder="Please describe your cargo type, origin/destination ports, estimated tonnage/volume, or required customs assistance..."
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      required
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Data confidentiality & fast 1-hour response guaranteed</span>
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all"
                      id="contact-submit-btn"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message to Operations</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
