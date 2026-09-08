import React from 'react';
import { 
  Plane, 
  Ship, 
  Snowflake, 
  ShieldCheck, 
  MapPin, 
  Search, 
  Calculator, 
  FileText, 
  Warehouse, 
  ArrowRight, 
  Clock, 
  Phone, 
  Award,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES, OPERATIONAL_BRANCHES } from '../data/logisticsData';

interface QuickAccessHubProps {
  onOpenQuoteModal: (serviceId?: string) => void;
  onOpenTrackingModal: (code?: string) => void;
}

export const QuickAccessHub: React.FC<QuickAccessHubProps> = ({
  onOpenQuoteModal,
  onOpenTrackingModal
}) => {
  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Elevated Floating Command Cards Hub */}
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-5 sm:p-7 backdrop-blur-xl">
        {/* Header Ribbon */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-800 to-slate-900 flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Core Gateway Solutions
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Global Logistics & Trade Capabilities
              </h2>
            </div>
          </div>

          {/* Quick Contact & Verified Credentials */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700">
              <Award className="w-4 h-4 text-amber-500" />
              <span><strong>{COMPANY_INFO.experienceYears}</strong> Industry Experience</span>
            </div>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-xs font-bold text-teal-800 hover:bg-teal-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* 6 Key Interactive Pillar Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5 pt-6">
          {/* Tile 1: Air Freight */}
          <a
            href="#service-air-freight"
            className="group relative rounded-2xl p-4 bg-gradient-to-b from-sky-50/70 to-slate-50 border border-sky-100/80 hover:border-sky-300 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-110 transition-transform">
                  <Plane className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                  Priority
                </span>
              </div>
              <h3 className="font-bold text-sm text-slate-900 group-hover:text-sky-700 transition-colors">
                Air Freight Forwarding
              </h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                Scheduled departures, express allocations, and direct airline space agreements.
              </p>
            </div>
            <div className="mt-3 flex items-center text-xs font-bold text-sky-600 group-hover:text-sky-800">
              <span>Explore Air Cargo</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Tile 2: Sea Freight */}
          <a
            href="#service-sea-freight"
            className="group relative rounded-2xl p-4 bg-gradient-to-b from-teal-50/70 to-slate-50 border border-teal-100/80 hover:border-teal-300 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-md shadow-teal-600/20 group-hover:scale-110 transition-transform">
                  <Ship className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800">
                  FCL & LCL
                </span>
              </div>
              <h3 className="font-bold text-sm text-slate-900 group-hover:text-teal-700 transition-colors">
                Sea Freight Forwarding
              </h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                Ocean vessel cargo across major international maritime trade lanes.
              </p>
            </div>
            <div className="mt-3 flex items-center text-xs font-bold text-teal-700 group-hover:text-teal-900">
              <span>Ocean Services</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Tile 3: -20°C Reefer Cold Chain (Special Highlight) */}
          <a
            href="#cold-chain"
            className="group relative rounded-2xl p-4 bg-gradient-to-b from-cyan-50 to-blue-50/50 border border-cyan-200 hover:border-cyan-400 hover:shadow-lg transition-all flex flex-col justify-between ring-1 ring-cyan-200/50"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                  <Snowflake className="w-5 h-5 animate-pulse" />
                </div>
                <span className="text-[10px] font-mono font-extrabold px-2 py-0.5 rounded-full bg-cyan-200 text-cyan-950">
                  -20 °C
                </span>
              </div>
              <h3 className="font-bold text-sm text-slate-900 group-hover:text-cyan-800 transition-colors">
                Cold Chain & Reefer
              </h3>
              <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                Sub-zero 20ft & 40ft containers, thermal packaging for pharma & perishables.
              </p>
            </div>
            <div className="mt-3 flex items-center text-xs font-bold text-cyan-700 group-hover:text-cyan-900">
              <span>View Cold Chain</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Tile 4: Customs Brokerage */}
          <a
            href="#service-customs-clearance"
            className="group relative rounded-2xl p-4 bg-gradient-to-b from-emerald-50/70 to-slate-50 border border-emerald-100/80 hover:border-emerald-300 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  100% Legal
                </span>
              </div>
              <h3 className="font-bold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors">
                Customs Clearance
              </h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                Accurate HS classification, duty optimization, and rapid ICEGATE e-filing.
              </p>
            </div>
            <div className="mt-3 flex items-center text-xs font-bold text-emerald-700 group-hover:text-emerald-900">
              <span>Customs Expertise</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Tile 5: Pan-India Ports Network */}
          <a
            href="#network"
            className="group relative rounded-2xl p-4 bg-gradient-to-b from-amber-50/70 to-slate-50 border border-amber-100/80 hover:border-amber-300 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                  12 Hubs
                </span>
              </div>
              <h3 className="font-bold text-sm text-slate-900 group-hover:text-amber-800 transition-colors">
                Pan-India Gateways
              </h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                Hyderabad, Mumbai, Chennai, Visakhapatnam, Cochin, Mundra & all ICDs.
              </p>
            </div>
            <div className="mt-3 flex items-center text-xs font-bold text-amber-800 group-hover:text-amber-950">
              <span>View Network Map</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Tile 6: Instant Tariff Calculator */}
          <button
            type="button"
            onClick={() => onOpenQuoteModal()}
            className="group relative rounded-2xl p-4 bg-gradient-to-b from-slate-900 to-slate-950 text-white border border-slate-800 hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between text-left"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center shadow-md shadow-amber-400/30 group-hover:scale-110 transition-transform">
                  <Calculator className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-400 text-slate-950">
                  Fast
                </span>
              </div>
              <h3 className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                Instant Freight Quote
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                Calculate estimated air/sea freight tariffs and get custom logistics rates.
              </p>
            </div>
            <div className="mt-3 flex items-center text-xs font-bold text-amber-400 group-hover:text-amber-300">
              <span>Generate Quote</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        {/* Quick Tracking & Direct Action Bar */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-4 bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
              <Search className="w-4 h-4" />
            </div>
            <div className="text-xs text-slate-700">
              <span className="font-bold text-slate-900">Have an active shipment?</span> Track Air Waybill (AWB) or Ocean Bill of Lading (B/L) with live status updates.
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full lg:w-auto">
            <button
              onClick={() => onOpenTrackingModal('SWL-2026-8841')}
              className="flex-1 lg:flex-none px-4 py-2 text-xs font-bold text-slate-700 hover:text-teal-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <Search className="w-3.5 h-3.5 text-teal-600" />
              <span>Live Cargo Tracker</span>
            </button>

            <button
              onClick={() => onOpenQuoteModal()}
              className="flex-1 lg:flex-none px-5 py-2 text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Get Instant Rates</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
