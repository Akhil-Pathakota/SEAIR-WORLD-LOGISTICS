import React, { useState } from 'react';
import { 
  Snowflake, 
  Thermometer, 
  ShieldCheck, 
  Box, 
  Plane, 
  Ship, 
  CheckCircle2, 
  Calculator, 
  Info,
  Layers,
  Sparkles
} from 'lucide-react';
import { REEFER_CONTAINER_SPECS } from '../data/logisticsData';

interface TemperatureControlHighlightProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const TemperatureControlHighlight: React.FC<TemperatureControlHighlightProps> = ({
  onOpenQuoteModal
}) => {
  const [selectedContainer, setSelectedContainer] = useState(0);

  return (
    <section id="cold-chain" className="py-20 bg-gradient-to-b from-slate-900 via-teal-950 to-slate-950 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-900/60 border border-cyan-400/40 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Snowflake className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Specialized Cold Chain Capability</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            TEMPERATURE CONTROLLED & <span className="text-cyan-400">PACKING SOLUTIONS</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-slate-300 text-base sm:text-lg">
            Temperature-related shipments, along with packaging solutions, handled up to <strong className="text-cyan-300 font-bold">-20 °C</strong> in air cargo and refrigerator containers in <strong>20ft and 40ft</strong>.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: -20°C Thermal Range */}
          <div className="bg-slate-900/80 border border-cyan-500/30 rounded-2xl p-6 relative overflow-hidden backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-4">
              <Thermometer className="w-6 h-6" />
            </div>
            <div className="text-2xl font-black text-cyan-300 font-display mb-1">Down to -20 °C</div>
            <h3 className="font-bold text-white text-base mb-2">Deep-Freeze & Controlled Climate</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Maintains strict continuous temperature stability for critical Active Pharmaceutical Ingredients (APIs), biologicals, and sensitive diagnostics throughout the ocean or air journey.
            </p>
          </div>

          {/* Card 2: 20ft & 40ft Reefer Ocean Containers */}
          <div className="bg-slate-900/80 border border-teal-500/30 rounded-2xl p-6 relative overflow-hidden backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center mb-4">
              <Ship className="w-6 h-6" />
            </div>
            <div className="text-2xl font-black text-teal-300 font-display mb-1">20ft & 40ft Reefer</div>
            <h3 className="font-bold text-white text-base mb-2">High-Cube Ocean Containers</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Standard 20ft and 40ft High Cube reefer units fitted with modern microprocessors, automated humidity control, ventilation, and real-time electronic data loggers.
            </p>
          </div>

          {/* Card 3: Air Cargo Cold Chain & Packaging */}
          <div className="bg-slate-900/80 border border-amber-500/30 rounded-2xl p-6 relative overflow-hidden backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center mb-4">
              <Plane className="w-6 h-6" />
            </div>
            <div className="text-2xl font-black text-amber-300 font-display mb-1">Validated Air ULDs</div>
            <h3 className="font-bold text-white text-base mb-2">Active & Passive Packaging</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Dry-ice replenishments, thermal insulated foil blankets, phase change materials (PCM), and airline-certified Envirotainer active units for expedited international flights.
            </p>
          </div>
        </div>

        {/* Interactive Equipment & Container Spec Selector */}
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">Equipment Catalog</div>
              <h3 className="font-display text-2xl font-black text-white">Refrigerated Logistics Specifications</h3>
            </div>

            {/* Container tabs */}
            <div className="flex flex-wrap gap-2">
              {REEFER_CONTAINER_SPECS.map((c, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedContainer(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedContainer === idx
                      ? 'bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Container Spec details */}
          {(() => {
            const activeSpec = REEFER_CONTAINER_SPECS[selectedContainer];
            return (
              <div className="mt-6 grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-bold">
                    <Thermometer className="w-3.5 h-3.5" />
                    <span>Operating Range: {activeSpec.tempRange}</span>
                  </div>

                  <h4 className="font-display text-2xl font-bold text-white">
                    {activeSpec.name}
                  </h4>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    <strong className="text-white">Recommended Cargo:</strong> {activeSpec.bestFor}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <div className="text-[11px] text-slate-400">Max Payload</div>
                      <div className="text-base font-bold text-white font-mono mt-0.5">{activeSpec.payload}</div>
                    </div>

                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <div className="text-[11px] text-slate-400">Cargo Volume</div>
                      <div className="text-base font-bold text-amber-400 font-mono mt-0.5">{activeSpec.capacityCbm}</div>
                    </div>

                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
                      <div className="text-[11px] text-slate-400">Internal Length</div>
                      <div className="text-base font-bold text-teal-400 font-mono mt-0.5">{activeSpec.internalLength}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => onOpenQuoteModal('temperature-controlled')}
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-500 hover:to-teal-500 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow"
                    >
                      <Calculator className="w-4 h-4" />
                      <span>Book Reefer Space / Inquire Rates</span>
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Quality & Safety Assurance</div>
                  
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Continuous GPS & temperature telematics logging throughout transit</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Pre-trip inspection (PTI) & temperature pre-cooling before cargo loading</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Dedicated reefer plug-in coordination at sea terminals & ICDs</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Validated secondary packaging, ice gel packs, & dry-ice top-up</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};
