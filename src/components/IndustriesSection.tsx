import React, { useState } from 'react';
import { 
  Factory, 
  HeartPulse, 
  ShoppingBag, 
  Cpu, 
  Car, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  Snowflake,
  Calculator
} from 'lucide-react';
import { INDUSTRIES_SERVED } from '../data/logisticsData';

interface IndustriesSectionProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Factory':
        return <Factory className="w-6 h-6" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'Car':
        return <Car className="w-6 h-6" />;
      default:
        return <Factory className="w-6 h-6" />;
    }
  };

  return (
    <section id="clients" className="py-20 bg-white relative overflow-hidden scroll-mt-12">
      <div id="industries" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Corporate Clients & Sectors</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase">
              CLIENTS & INDUSTRIES WE <span className="text-teal-800">SERVE</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-teal-700 rounded-full mt-3 mb-3" />
            <p className="text-slate-600 max-w-2xl text-base sm:text-lg">
              Tailored logistics workflows engineered to meet the stringent technical, regulatory, and speed demands of diverse vertical sectors.
            </p>
          </div>

          {/* Quick industry count badge */}
          <div className="hidden lg:flex items-center gap-3 bg-slate-50 border border-slate-200 px-4 py-3 rounded-2xl">
            <div className="text-right">
              <div className="text-xs font-bold text-slate-900 uppercase">5 Strategic Verticals</div>
              <div className="text-[11px] text-slate-500">Pan-India Cargo Handling</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center font-bold">
              5
            </div>
          </div>
        </div>

        {/* 5 Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {INDUSTRIES_SERVED.map((industry, index) => (
            <div
              key={industry.id}
              className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 bg-slate-50 border-slate-200/90 group`}
            >
              <div>
                {/* Photo & Header */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-3 left-4 w-11 h-11 rounded-xl bg-teal-800 text-white flex items-center justify-center shadow-lg border border-white/20">
                    {getIndustryIcon(industry.icon)}
                  </div>

                  {industry.id === 'pharma' && (
                    <div className="absolute top-3 right-3 bg-cyan-400 text-slate-950 font-bold text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 shadow">
                      <Snowflake className="w-3 h-3" />
                      <span>-20°C Reefer</span>
                    </div>
                  )}
                </div>

                <div className="p-6 pt-4">
                  <div className="text-xs font-mono font-bold text-teal-800 uppercase tracking-wider mb-1">
                    Sector 0{index + 1}
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                    {industry.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {industry.desc}
                  </p>

                  {/* Typical Cargo Examples */}
                  <div className="mt-4 pt-3 border-t border-slate-200/80">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-2">
                      Typical Cargo Handled:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {industry.examples.map((ex, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenQuoteModal(industry.id === 'pharma' ? 'temperature-controlled' : undefined)}
                  className="w-full py-2.5 rounded-xl bg-white hover:bg-teal-800 text-slate-800 hover:text-white border border-slate-300 hover:border-teal-800 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Calculator className="w-3.5 h-3.5 text-amber-500" />
                  <span>Request Sector Freight Rates</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Callout box for Custom Industrial & Project Solutions */}
          <div className="rounded-2xl border-2 border-dashed border-teal-300 bg-teal-50/50 p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-800 text-amber-400 flex items-center justify-center mb-4 shadow">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
                Custom Supply Chain or Multimodal Logistics?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you are managing complex breakbulk engineering plants, defense cargo, or urgent aviation AOG components, our 25 years of operational leadership provides customized risk mitigation and guaranteed clearances.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-teal-200/60">
              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full py-3 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow"
              >
                <span>Consult Our Logistics Experts</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
