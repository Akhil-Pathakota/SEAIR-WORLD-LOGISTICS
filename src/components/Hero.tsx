import React, { useState } from 'react';
import { 
  Plane, 
  Ship, 
  ShieldCheck, 
  MapPin, 
  Search, 
  Calculator, 
  ArrowRight, 
  CheckCircle2, 
  Snowflake, 
  Clock, 
  Award,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, OPERATIONAL_BRANCHES, CORE_SERVICES } from '../data/logisticsData';

interface HeroProps {
  onOpenQuoteModal: (serviceId?: string) => void;
  onOpenTrackingModal: (initialCode?: string) => void;
  onSelectBranch: (branchId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuoteModal,
  onOpenTrackingModal,
  onSelectBranch
}) => {
  const [activeTab, setActiveTab] = useState<'quote' | 'track' | 'branches'>('quote');
  
  // Fast Quote form state
  const [quickOrigin, setQuickOrigin] = useState('Hyderabad (HYD)');
  const [quickDestination, setQuickDestination] = useState('Dubai / Europe');
  const [quickService, setQuickService] = useState('air-freight');
  const [quickTrackingInput, setQuickTrackingInput] = useState('');
  const [quickBranchSelect, setQuickBranchSelect] = useState('hyderabad');

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickTrackingInput.trim()) {
      onOpenTrackingModal(quickTrackingInput.trim());
    } else {
      onOpenTrackingModal('SWL-2026-8841');
    }
  };

  const handleBranchGo = () => {
    onSelectBranch(quickBranchSelect);
    const element = document.getElementById('network');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-slate-950 text-white overflow-hidden pt-8 pb-16 lg:py-20">
      {/* Background Graphic & High Resolution Maritime/Air Logistics imagery */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80"
          alt="International Container Vessel & Logistics Port"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-90"
        />
        {/* Subtle geometric gradient overlay matching the teal/amber PDF palette */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-teal-950/80" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-900/60 border border-teal-500/30 text-teal-300 text-xs font-semibold backdrop-blur-sm">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>25 Years Industry Experience</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.1]">
                <span className="text-white">SEAIR WORLD </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-teal-300">
                  LOGISTICS
                </span>
              </h1>
              <p className="mt-3 text-sm sm:text-base md:text-lg font-bold tracking-widest text-teal-400 uppercase">
                {COMPANY_INFO.tagline}
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Specialized in delivering <strong className="text-white font-semibold">reliable, efficient, and cost-effective logistics solutions</strong> tailored to meet the dynamic needs of global trade. We simplify international and domestic cargo movement with full Indian customs compliance.
            </p>

            {/* Key Service Highlights Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
                <Plane className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">Air Freight</div>
                  <div className="text-slate-400 text-[11px]">Speed & Safety</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
                <Ship className="w-4 h-4 text-teal-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">Sea Freight</div>
                  <div className="text-slate-400 text-[11px]">FCL & LCL Ocean</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">Customs Brokerage</div>
                  <div className="text-slate-400 text-[11px]">Duty Optimization</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
                <Snowflake className="w-4 h-4 text-cyan-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">-20°C Reefer</div>
                  <div className="text-slate-400 text-[11px]">20ft & 40ft Cold Chain</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm col-span-2 sm:col-span-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">Pan-India 12 Strategic Branches</div>
                  <div className="text-slate-400 text-[11px]">Hyderabad, Mumbai, Chennai, Vizag, Cochin, Mundra +</div>
                </div>
              </div>
            </div>

            {/* Quick Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all flex items-center gap-2 transform active:scale-95"
                id="hero-primary-quote-btn"
              >
                <Calculator className="w-4 h-4" />
                <span>Request Freight Tariff & Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-2"
                id="hero-explore-services-btn"
              >
                <span>View 7 Core Services</span>
                <ChevronRight className="w-4 h-4 text-teal-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Quick Utility Widget (Seashell reference pattern) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-2xl relative overflow-hidden">
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-amber-400 to-teal-400" />

              {/* Tab Selector */}
              <div className="flex rounded-xl bg-slate-950 p-1 mb-5 border border-slate-800">
                <button
                  type="button"
                  onClick={() => setActiveTab('quote')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'quote'
                      ? 'bg-amber-400 text-slate-950 shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  id="tab-quote-toggle"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Get Quote</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('track')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'track'
                      ? 'bg-amber-400 text-slate-950 shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  id="tab-track-toggle"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Track AWB/BL</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('branches')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'branches'
                      ? 'bg-amber-400 text-slate-950 shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  id="tab-branch-toggle"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Branches</span>
                </button>
              </div>

              {/* Tab 1: Fast Quote Form */}
              {activeTab === 'quote' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Fast Rate Inquiry</span>
                    <span className="text-[11px] text-teal-400 font-medium">Quick 1-Hour Response</span>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Select Service Mode</label>
                    <select
                      value={quickService}
                      onChange={(e) => setQuickService(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
                    >
                      {CORE_SERVICES.map(s => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1">Origin Hub / Port</label>
                      <input
                        type="text"
                        value={quickOrigin}
                        onChange={(e) => setQuickOrigin(e.target.value)}
                        placeholder="e.g. Hyderabad / Mumbai"
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1">Destination</label>
                      <input
                        type="text"
                        value={quickDestination}
                        onChange={(e) => setQuickDestination(e.target.value)}
                        placeholder="e.g. Dubai / Hamburg / USA"
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Includes customs duty guidance & complete transit advisory</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenQuoteModal(quickService)}
                    className="w-full py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow flex items-center justify-center gap-2"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>Proceed to Full Quotation →</span>
                  </button>
                </div>
              )}

              {/* Tab 2: Track & Trace */}
              {activeTab === 'track' && (
                <form onSubmit={handleTrackSubmit} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Shipment Status Lookup</span>
                    <span className="text-[11px] text-teal-400 font-medium">Real-time Milestones</span>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">
                      Enter Air Waybill (AWB) or Bill of Lading (B/L)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={quickTrackingInput}
                        onChange={(e) => setQuickTrackingInput(e.target.value)}
                        placeholder="e.g., SWL-2026-8841 or SWL-AIR-9921"
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-3 pr-10 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono"
                      />
                      <Search className="w-4 h-4 text-slate-500 absolute right-3 top-3" />
                    </div>
                  </div>

                  {/* Sample tracking buttons */}
                  <div>
                    <span className="text-[11px] text-slate-400 block mb-1.5">Try sample active tracking IDs:</span>
                    <div className="flex flex-wrap gap-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          setQuickTrackingInput('SWL-2026-8841');
                          onOpenTrackingModal('SWL-2026-8841');
                        }}
                        className="text-[11px] font-mono bg-slate-800 hover:bg-slate-700 text-teal-300 px-2 py-1 rounded border border-slate-700"
                      >
                        SWL-2026-8841 (Reefer -20°C)
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setQuickTrackingInput('SWL-AIR-9921');
                          onOpenTrackingModal('SWL-AIR-9921');
                        }}
                        className="text-[11px] font-mono bg-slate-800 hover:bg-slate-700 text-amber-300 px-2 py-1 rounded border border-slate-700"
                      >
                        SWL-AIR-9921 (Air Cargo)
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow flex items-center justify-center gap-2"
                  >
                    <Search className="w-4 h-4" />
                    <span>Track Cargo Now</span>
                  </button>
                </form>
              )}

              {/* Tab 3: Branch Quick Locator */}
              {activeTab === 'branches' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Pan-India Branch Network</span>
                    <span className="text-[11px] text-teal-400 font-medium">12 Operational Hubs</span>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Select Branch / Hub</label>
                    <select
                      value={quickBranchSelect}
                      onChange={(e) => setQuickBranchSelect(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
                    >
                      {OPERATIONAL_BRANCHES.map(b => (
                        <option key={b.id} value={b.id}>
                          {b.name} ({b.state}) - {b.type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {(() => {
                    const b = OPERATIONAL_BRANCHES.find(item => item.id === quickBranchSelect) || OPERATIONAL_BRANCHES[0];
                    return (
                      <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800 text-xs space-y-1.5">
                        <div className="font-bold text-amber-400 flex items-center justify-between">
                          <span>{b.name} Branch</span>
                          <span className="text-[10px] text-teal-300 bg-teal-950/80 px-1.5 py-0.5 rounded border border-teal-800">{b.region} Region</span>
                        </div>
                        <p className="text-slate-300 text-[11px]">{b.specialty}</p>
                        <div className="text-slate-400 text-[11px]">
                          <strong>Key Ports:</strong> {b.keyPortsServed.join(', ')}
                        </div>
                      </div>
                    );
                  })()}

                  <button
                    type="button"
                    onClick={handleBranchGo}
                    className="w-full py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow flex items-center justify-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>View Branch & Seaport Details →</span>
                  </button>
                </div>
              )}

              {/* Bottom Quick Contact row */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Immediate Support:</span>
                <a 
                  href={`tel:${COMPANY_INFO.phone}`} 
                  className="font-bold text-amber-400 hover:underline"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Metrics Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/60">
            <div className="font-display text-3xl sm:text-4xl font-black text-amber-400">25+</div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mt-1">Years Industry Experience</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Foundational Operational Knowledge</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/60">
            <div className="font-display text-3xl sm:text-4xl font-black text-teal-400">12+</div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mt-1">Operational Branches</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Across All Key Commercial Hubs</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/60">
            <div className="font-display text-3xl sm:text-4xl font-black text-cyan-400">-20°C</div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mt-1">Cold Chain Logistics</div>
            <div className="text-[11px] text-slate-500 mt-0.5">20ft & 40ft Reefer Capability</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/60">
            <div className="font-display text-3xl sm:text-4xl font-black text-emerald-400">100%</div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mt-1">Customs Compliance</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Indian Customs & Global Standards</div>
          </div>
        </div>
      </div>
    </section>
  );
};
