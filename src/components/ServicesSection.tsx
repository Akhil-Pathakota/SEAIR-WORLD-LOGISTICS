import React, { useState } from 'react';
import { 
  Plane, 
  Ship, 
  FileCheck, 
  ArrowLeftRight, 
  Truck, 
  FileText, 
  Snowflake, 
  ArrowRight, 
  CheckCircle2, 
  Calculator, 
  Sparkles,
  Info,
  ChevronRight,
  ShieldAlert,
  Layers
} from 'lucide-react';
import { CORE_SERVICES } from '../data/logisticsData';
import { CoreService } from '../types';

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedService, setSelectedService] = useState<CoreService | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Plane':
        return <Plane className="w-6 h-6" />;
      case 'Ship':
        return <Ship className="w-6 h-6" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6" />;
      case 'ArrowLeftRight':
        return <ArrowLeftRight className="w-6 h-6" />;
      case 'Truck':
        return <Truck className="w-6 h-6" />;
      case 'FileText':
        return <FileText className="w-6 h-6" />;
      case 'ThermometerSnowflake':
        return <Snowflake className="w-6 h-6" />;
      default:
        return <Layers className="w-6 h-6" />;
    }
  };

  const filteredServices = CORE_SERVICES.filter(service => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'freight' && (service.id === 'air-freight' || service.id === 'sea-freight')) return true;
    if (activeCategory === 'customs' && (service.id === 'customs-clearance' || service.id === 'cargo-documentation')) return true;
    if (activeCategory === 'special' && (service.id === 'temperature-controlled' || service.id === 'door-to-door' || service.id === 'import-export-handling')) return true;
    return true;
  });

  return (
    <section id="services" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-900/60 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Full-Spectrum Solutions</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
              OUR CORE <span className="text-amber-400">SERVICES</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-amber-400 to-teal-400 rounded-full mt-3 mb-3" />
            <p className="text-slate-300 max-w-2xl text-base sm:text-lg">
              Reliable, compliant, and cost-efficient international and domestic logistics services backed by 25 years of operational mastery.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeCategory === 'all'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              All 7 Services
            </button>
            <button
              onClick={() => setActiveCategory('freight')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeCategory === 'freight'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Air & Sea Freight
            </button>
            <button
              onClick={() => setActiveCategory('customs')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeCategory === 'customs'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Customs & Documentation
            </button>
            <button
              onClick={() => setActiveCategory('special')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeCategory === 'special'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Cold Chain & Door-to-Door
            </button>
          </div>
        </div>

        {/* 7 Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className="bg-slate-800/80 hover:bg-slate-800 rounded-2xl border border-slate-700/80 hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
                  {/* Service Badge */}
                  {service.badge && (
                    <div className="absolute top-3 right-3 bg-amber-400 text-slate-950 font-bold text-[11px] px-2.5 py-1 rounded-full shadow font-mono">
                      {service.badge}
                    </div>
                  )}

                  {/* Service Icon floating badge */}
                  <div className="absolute bottom-3 left-4 w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-lg border border-teal-400/40">
                    {getServiceIcon(service.iconName)}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 pt-4">
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Bullet points from document */}
                  <ul className="mt-4 space-y-2 border-t border-slate-700/60 pt-4">
                    {service.bulletPoints.slice(0, 2).map((bp, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-2 border-t border-slate-700/40 mt-4">
                <button
                  onClick={() => setSelectedService(service)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-700/70 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Info className="w-3.5 h-3.5 text-teal-400" />
                  <span>Full Details</span>
                </button>

                <button
                  onClick={() => onOpenQuoteModal(service.id)}
                  className="py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-extrabold transition-all shadow flex items-center justify-center gap-1.5"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Get Quote</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Temperature-Controlled Cold Chain Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-teal-950 via-slate-900 to-slate-950 border border-teal-700/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-cyan-300 flex items-center justify-center shrink-0 border border-teal-400/30">
              <Snowflake className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-white">
                Need High-Precision Cold Chain Logistics (Down to -20°C)?
              </h4>
              <p className="text-xs text-slate-300">
                We handle temperature-sensitive cargo in 20ft & 40ft refrigerated containers and validated air cargo ULDs.
              </p>
            </div>
          </div>
          <a
            href="#cold-chain"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-slate-950 font-extrabold text-xs flex items-center gap-2 transition-all shadow"
          >
            <span>Explore -20°C Reefer Specs</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative animate-fadeIn text-white">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow">
                {getServiceIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Core Service Profile
                </span>
                <h3 className="font-display text-2xl font-black text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <div className="relative h-48 rounded-xl overflow-hidden mb-5">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div>
                <h4 className="font-bold text-white text-base mb-1">Operational Overview</h4>
                <p className="leading-relaxed">{selectedService.fullDesc}</p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <h4 className="font-bold text-amber-400 text-xs uppercase tracking-wider mb-2">
                  Key Deliverables from Document
                </h4>
                <ul className="space-y-2">
                  {selectedService.bulletPoints.map((bp, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2">
                  Key Operational Highlights
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.keyHighlights.map((kh, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-teal-950 text-teal-300 border border-teal-800 text-xs font-medium">
                      ✓ {kh}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-slate-800"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const sId = selectedService.id;
                  setSelectedService(null);
                  onOpenQuoteModal(sId);
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-500 flex items-center gap-2 shadow"
              >
                <Calculator className="w-4 h-4" />
                <span>Request Tariff for {selectedService.title}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
