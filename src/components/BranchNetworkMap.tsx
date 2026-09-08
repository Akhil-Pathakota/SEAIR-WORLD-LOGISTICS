import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Anchor, 
  Plane, 
  Building2, 
  Search, 
  CheckCircle2, 
  Compass,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { OPERATIONAL_BRANCHES, MAJOR_PORTS, COMPANY_INFO } from '../data/logisticsData';
import { Branch } from '../types';

interface BranchNetworkMapProps {
  selectedBranchId?: string;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const BranchNetworkMap: React.FC<BranchNetworkMapProps> = ({
  selectedBranchId = 'hyderabad',
  onOpenQuoteModal
}) => {
  const [activeBranchId, setActiveBranchId] = useState<string>(selectedBranchId);
  const [regionFilter, setRegionFilter] = useState<'All' | 'South' | 'West' | 'North' | 'East'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'branches' | 'ports'>('branches');

  const filteredBranches = OPERATIONAL_BRANCHES.filter(branch => {
    const matchesRegion = regionFilter === 'All' || branch.region === regionFilter;
    const matchesSearch = branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          branch.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          branch.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const activeBranch = OPERATIONAL_BRANCHES.find(b => b.id === activeBranchId) || OPERATIONAL_BRANCHES[0];

  return (
    <section id="network" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-900/80 border border-teal-500/40 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Pan-India Presence</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
              OPERATIONAL <span className="text-amber-400">BRANCHES & PORTS</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-amber-400 to-teal-400 rounded-full mt-3 mb-3" />
            <p className="text-slate-300 max-w-2xl text-base sm:text-lg">
              Operating across 12 strategic Indian commercial hubs with direct connectivity to over 20 major container seaports and air cargo complexes.
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex rounded-xl bg-slate-950 p-1 border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setViewMode('branches')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === 'branches'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>12 Operational Branches</span>
            </button>
            <button
              onClick={() => setViewMode('ports')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === 'ports'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Anchor className="w-3.5 h-3.5" />
              <span>Seaports & Maritime Grid</span>
            </button>
          </div>
        </div>

        {viewMode === 'branches' ? (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Search & Branch List */}
            <div className="lg:col-span-5 space-y-4">
              {/* Filter controls */}
              <div className="space-y-3 bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search branch by city, state, or port..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                  <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                </div>

                {/* Region pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {(['All', 'South', 'West', 'North', 'East'] as const).map(reg => (
                    <button
                      key={reg}
                      onClick={() => setRegionFilter(reg)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        regionFilter === reg
                          ? 'bg-teal-600 text-white shadow'
                          : 'bg-slate-900 text-slate-400 hover:bg-slate-850 hover:text-slate-200'
                      }`}
                    >
                      {reg} {reg !== 'All' ? `(${OPERATIONAL_BRANCHES.filter(b => b.region === reg).length})` : `(12)`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scrollable Branch Cards list */}
              <div className="space-y-2.5 max-h-[520px] overflow-y-auto pr-1">
                {filteredBranches.map(branch => {
                  const isSelected = branch.id === activeBranch.id;
                  return (
                    <div
                      key={branch.id}
                      onClick={() => setActiveBranchId(branch.id)}
                      className={`p-4 rounded-xl cursor-pointer transition-all border text-left ${
                        isSelected
                          ? 'bg-gradient-to-r from-teal-950 to-slate-900 border-amber-400 shadow-lg'
                          : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-950'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                            isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-teal-400'
                          }`}>
                            <MapPin className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-white text-sm">
                              {branch.name}
                            </h4>
                            <span className="text-[11px] text-slate-400">{branch.state} • {branch.region} Region</span>
                          </div>
                        </div>

                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          isSelected ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {branch.type}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Selected Branch Details Card & India Connectivity Graphic */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-slate-950 border-2 border-teal-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                {/* Header of Active Branch */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
                        {activeBranch.region} Region Hub
                      </span>
                      <span className="text-[10px] bg-teal-950 text-teal-300 px-2 py-0.5 rounded border border-teal-800">
                        {activeBranch.type}
                      </span>
                    </div>
                    <h3 className="font-display text-3xl font-black text-white">
                      {activeBranch.name} Branch
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">{activeBranch.address}</p>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <a
                      href={`tel:${activeBranch.phone}`}
                      className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs rounded-xl shadow flex items-center gap-1.5 transition-all"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Hub</span>
                    </a>
                  </div>
                </div>

                {/* Branch Specialty & Key Ports */}
                <div className="py-6 space-y-5">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Branch Operational Specialization
                    </h4>
                    <p className="text-sm text-slate-200 bg-slate-900 p-3.5 rounded-xl border border-slate-800 font-medium leading-relaxed">
                      {activeBranch.specialty}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Key Ports & Cargo Terminals Connected
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {activeBranch.keyPortsServed.map((port, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-teal-300 font-mono"
                        >
                          <Anchor className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{port}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct Contact points for this branch */}
                  <div className="grid sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
                      <span className="text-slate-400 block font-semibold">Central Desk Telephone</span>
                      <a href={`tel:${COMPANY_INFO.phone}`} className="text-amber-400 font-bold text-sm hover:underline block">
                        {COMPANY_INFO.phone}
                      </a>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
                      <span className="text-slate-400 block font-semibold">Branch Inquiries Email</span>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-teal-300 font-medium hover:underline block truncate">
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-slate-400">
                    Need immediate freight tariff for <strong className="text-white">{activeBranch.name}</strong>?
                  </div>
                  <button
                    onClick={() => onOpenQuoteModal()}
                    className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs transition-all flex items-center gap-1.5 shadow"
                  >
                    <span>Request Tariff for {activeBranch.name}</span>
                    <ChevronRight className="w-4 h-4 text-amber-400" />
                  </button>
                </div>
              </div>

              {/* Pan-India Grid Summary pill */}
              <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-400 font-medium">All 12 Branches Documented:</span>
                <div className="flex flex-wrap gap-1.5">
                  {OPERATIONAL_BRANCHES.map(b => (
                    <button
                      key={b.id}
                      onClick={() => setActiveBranchId(b.id)}
                      className={`text-[11px] px-2 py-0.5 rounded border transition-colors ${
                        b.id === activeBranch.id
                          ? 'bg-amber-400 text-slate-950 font-bold border-amber-400'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-600'
                      }`}
                    >
                      {b.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Port Network Tab (Page 5 of PDF coastal port map) */
          <div className="space-y-8">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="max-w-3xl mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                  <Anchor className="w-4 h-4" />
                  <span>Indian Coastal Port Infrastructure (PDF Reference)</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Direct Port Operations Across Both West & East Coasts
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  SEAIR WORLD LOGISTICS coordinates direct vessel bookings, port gate-in, drayage, customs clearance, and container stuffing at all major Indian marine gateways.
                </p>
              </div>

              {/* Two Column Grid: West Coast Ports vs East Coast Ports */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* West Coast Ports */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                    <span className="font-display text-base font-bold text-teal-400 flex items-center gap-2">
                      <Anchor className="w-4 h-4" />
                      <span>West Coast Seaports (Arabian Sea)</span>
                    </span>
                    <span className="text-[11px] bg-teal-950 text-teal-300 px-2 py-0.5 rounded font-mono">
                      10 Ports
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {MAJOR_PORTS.filter(p => p.coast === 'West Coast').map((port, i) => (
                      <div key={i} className="p-2 rounded bg-slate-950 border border-slate-800/80">
                        <div className="font-bold text-white">{port.name}</div>
                        <div className="text-[10px] text-slate-400">{port.state} • {port.type}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* East Coast Ports */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                    <span className="font-display text-base font-bold text-amber-400 flex items-center gap-2">
                      <Anchor className="w-4 h-4" />
                      <span>East Coast Seaports (Bay of Bengal)</span>
                    </span>
                    <span className="text-[11px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded font-mono">
                      10 Ports
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {MAJOR_PORTS.filter(p => p.coast === 'East Coast').map((port, i) => (
                      <div key={i} className="p-2 rounded bg-slate-950 border border-slate-800/80">
                        <div className="font-bold text-white">{port.name}</div>
                        <div className="text-[10px] text-slate-400">{port.state} • {port.type}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Ports listed in PDF */}
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center gap-2">
                <span className="font-bold text-white">Full Port Roster from Document:</span>
                <span className="text-slate-300">
                  Pipavav, Magdalla, Mumbai, Dighi, Jawaharlal Nehru, Jaigarh, Mormugao, New Mangalore, Cochin, Vizhinjam, Tuticorin, Karaikal, Chennai, Ennore, Krishnapatnam, Kakinada Port, Gangavaram Port, Vishakhapatnam, Paradip, Dhamra.
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
