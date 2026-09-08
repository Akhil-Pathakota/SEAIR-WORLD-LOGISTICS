import React from 'react';
import { 
  Award, 
  Target, 
  Compass, 
  ShieldCheck, 
  UserCheck, 
  CheckCircle, 
  Phone, 
  Mail, 
  FileText,
  Anchor,
  PlaneTakeoff,
  Globe2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/logisticsData';
import panIndiaGatewaysImage from '../assets/images/pan_india_sea_air_gateways_1786809656424.jpg';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50/70 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50/70 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-100/80 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Company Profile • Est. 2025</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            About <span className="text-teal-800">SEAIR WORLD LOGISTICS</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-teal-700 rounded-full mt-3 mb-4" />
          <p className="text-lg text-slate-600 font-medium">
            A professionally managed freight forwarding and customs clearance partner built on 25 years of hands-on industry mastery.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Story & Introduction (Exact text from PDF) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-6 bg-teal-700 rounded-sm" />
                <span>Introduction & Leadership</span>
              </h3>

              <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base leading-relaxed">
                <p>
                  <strong className="text-slate-900 font-bold">SEAIR WORLD LOGISTICS</strong> is a professionally managed freight forwarding and customs clearance company established in 2025. With a strong foundation built on <span className="font-bold text-teal-900 bg-teal-50 px-1 py-0.5 rounded">25 years of industry experience</span>, the company is led by a logistics professional. <strong className="text-slate-900 font-bold">Mr. Somireddy Ganta</strong> brings deep operational knowledge.
                </p>
                <p>
                  We specialize in delivering <em>reliable, efficient, and cost-effective logistics solutions</em> tailored to meet the dynamic needs of today’s global trade environment. Our commitment is to simplify international and domestic cargo movement while ensuring full compliance with customs and regulatory requirements.
                </p>
              </div>

              {/* Key Values List */}
              <div className="grid sm:grid-cols-2 gap-3.5 mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">25 Years Operational Knowledge</span>
                    <span className="text-slate-500">Deep expertise in freight & ports</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">100% Statutory Compliance</span>
                    <span className="text-slate-500">Indian Customs & tariff optimization</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">Seamless Cargo Movement</span>
                    <span className="text-slate-500">Cross-border and domestic logistics</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">Personalized Client Care</span>
                    <span className="text-slate-500">Dedicated operational single-desk</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Spotlight Card (Mr. Somireddy Ganta) */}
            <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-teal-800/40 relative overflow-hidden">
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
                    <UserCheck className="w-4 h-4" />
                    <span>Company Leadership</span>
                  </div>
                  <h4 className="font-display text-2xl font-black text-white">
                    Mr. Somireddy Ganta
                  </h4>
                  <p className="text-teal-300 text-sm font-semibold">
                    Director, SEAIR WORLD LOGISTICS
                  </p>
                  <p className="text-slate-300 text-xs mt-1 max-w-lg">
                    "Our objective is simple: provide seamless logistics solutions that enable our customers to focus entirely on their core business, while we manage their cargo with highest responsibility, precision, and care."
                  </p>
                </div>

                <div className="shrink-0 flex flex-col gap-2 w-full sm:w-auto">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Direct: {COMPANY_INFO.phone}</span>
                  </a>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium flex items-center justify-center gap-2 transition-all"
                  >
                    <Mail className="w-3.5 h-3.5 text-teal-300" />
                    <span>Email Director</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual & Vision / Mission Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual Container Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
              <img
                src={panIndiaGatewaysImage}
                alt="Pan-India Sea & Air Gateways Logistics Operations"
                referrerPolicy="no-referrer"
                className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                <div className="text-white">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Pan-India Sea & Air Gateways</div>
                  <div className="text-sm font-semibold">Serving all major international air & marine corridors</div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white border-2 border-teal-100 rounded-2xl p-6 shadow-md hover:border-teal-300 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Our Strategic Goal</span>
                  <h4 className="font-display text-xl font-black text-slate-900">VISION</h4>
                </div>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                "{COMPANY_INFO.vision}"
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-md hover:border-amber-300 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Our Purpose</span>
                  <h4 className="font-display text-xl font-black text-slate-900">MISSION</h4>
                </div>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                "{COMPANY_INFO.mission}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
