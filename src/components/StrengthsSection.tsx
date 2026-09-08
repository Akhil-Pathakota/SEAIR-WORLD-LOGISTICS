import React from 'react';
import { 
  Award, 
  Scale, 
  Users, 
  Clock, 
  TrendingDown, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  HeartHandshake,
  Check
} from 'lucide-react';
import { OUR_STRENGTHS, WHY_CHOOSE_US, COMPANY_INFO } from '../data/logisticsData';

interface StrengthsSectionProps {
  onOpenQuoteModal: () => void;
}

export const StrengthsSection: React.FC<StrengthsSectionProps> = ({ onOpenQuoteModal }) => {
  const getStrengthIcon = (iconName: string) => {
    switch (iconName) {
      case 'History':
        return <Award className="w-6 h-6 text-amber-500" />;
      case 'Scale':
        return <Scale className="w-6 h-6 text-teal-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-blue-600" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-emerald-600" />;
      case 'TrendingDown':
        return <TrendingDown className="w-6 h-6 text-indigo-600" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="strengths" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: OUR STRENGTHS (Page 6 of PDF) */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Core Operational Advantages</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              OUR <span className="text-teal-800">STRENGTHS</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full mx-auto mt-3 mb-4" />
            <p className="text-slate-600 text-base sm:text-lg">
              Decades of real-world customs and freight forwarding mastery powering dependable logistics solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* 5 Strengths Cards */}
            <div className="lg:col-span-7 space-y-4">
              {OUR_STRENGTHS.map((strength, index) => (
                <div
                  key={strength.id}
                  className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-400 transition-all flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-teal-50 border border-slate-100 flex items-center justify-center shrink-0 transition-colors">
                    {getStrengthIcon(strength.icon)}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-teal-800 font-mono">0{index + 1}.</span>
                      <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                        {strength.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Photography Box matching PDF page 6 (two logistics managers shaking hands in front of cargo containers) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
                  alt="Logistics Operations and Shipping Container Hub"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                    <HeartHandshake className="w-4 h-4" />
                    <span>Reliable & Trusted Partner</span>
                  </div>
                  <h4 className="font-display text-xl font-bold">
                    Committed to Cargo Safety & Operational Transparency
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Director Somireddy Ganta and our pan-India team ensure every container and air pallet arrives on schedule.
                  </p>
                </div>
              </div>

              {/* Decorative floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-teal-900 text-white p-4 rounded-2xl shadow-xl border border-teal-700/60 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black">
                  25
                </div>
                <div className="text-xs">
                  <div className="font-extrabold text-amber-400">Years Industry Experience</div>
                  <div className="text-slate-300">Unmatched operational track record</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: WHY CHOOSE SEAIR WORLD LOGISTICS? (Page 4 of PDF) */}
        <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-teal-800/40 relative overflow-hidden">
          {/* Background circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Core Differentiators</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase">
                WHY TO CHOOSE <span className="text-amber-400">SEAIR WORLD LOGISTICS?</span>
              </h2>
              <div className="w-20 h-1 bg-amber-400 rounded-full mx-auto mt-3 mb-3" />
              <p className="text-slate-300 text-sm sm:text-base">
                Five reasons why leading enterprises, pharmaceutical manufacturers, and global exporters trust us.
              </p>
            </div>

            {/* 5 Reasons Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE_US.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-slate-900/80 border border-slate-800 hover:border-amber-400/60 rounded-2xl p-6 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-black">
                      <Check className="w-5 h-5 text-amber-400" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">Pillar 0{index + 1}</span>
                  </div>

                  <h3 className="font-display text-base font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}

              {/* Fast Quote CTA Card */}
              <div className="bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-slate-900 mb-1">
                    Ready to Partner?
                  </div>
                  <h3 className="font-display text-xl font-black text-slate-950 mb-2">
                    Experience Seamless Cargo Operations
                  </h3>
                  <p className="text-xs text-slate-900 font-medium">
                    Contact our central desk for instant customized rates, customs duty consultations, and flight/vessel booking.
                  </p>
                </div>

                <button
                  onClick={onOpenQuoteModal}
                  className="mt-4 w-full py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow"
                >
                  <span>Request Rate Quote Now</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
