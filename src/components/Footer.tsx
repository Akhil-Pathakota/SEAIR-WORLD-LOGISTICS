import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Linkedin, 
  ShieldCheck, 
  ArrowUp, 
  Snowflake,
  Anchor,
  Plane,
  Calculator,
  Search
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO, CORE_SERVICES, OPERATIONAL_BRANCHES } from '../data/logisticsData';

interface FooterProps {
  onOpenQuoteModal: (serviceId?: string) => void;
  onOpenTrackingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenQuoteModal,
  onOpenTrackingModal
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Top Pre-footer CTA Bar */}
      <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white py-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="font-display text-xl sm:text-2xl font-black text-white">
              Ready to Simplify Your International & Domestic Cargo Movement?
            </h3>
            <p className="text-teal-200 text-xs sm:text-sm">
              Benefit from 25 years of hands-on freight forwarding & customs clearance experience.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenTrackingModal}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-1.5 border border-slate-700 transition-all"
            >
              <Search className="w-3.5 h-3.5 text-teal-400" />
              <span>Track Cargo (AWB/BL)</span>
            </button>

            <button
              onClick={() => onOpenQuoteModal()}
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 shadow-lg transition-all"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Request Instant Tariff Quote</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Col 1: Brand & Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="light" size="md" />
            
            <p className="text-slate-400 text-xs leading-relaxed mt-3">
              SEAIR WORLD LOGISTICS is a professionally managed freight forwarding and customs clearance company established in 2025. Built on 25 years of deep industry expertise under the leadership of Mr. Somireddy Ganta.
            </p>

            <div className="pt-2 space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="font-semibold text-white">Director: {COMPANY_INFO.director}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-amber-400 font-mono font-bold">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-teal-300">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            {/* Social handles from PDF */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-pink-600/20 text-slate-400 hover:text-pink-400 flex items-center justify-center border border-slate-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 flex items-center justify-center border border-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Core Logistics Services
            </h4>
            <ul className="space-y-2">
              {CORE_SERVICES.map(s => (
                <li key={s.id}>
                  <a
                    href={`#service-${s.id}`}
                    className="text-slate-400 hover:text-amber-400 transition-colors flex items-center justify-between"
                  >
                    <span>{s.title}</span>
                    {s.id === 'temperature-controlled' && (
                      <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded font-mono">
                        -20°C
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: 12 Operational Branches (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              12 Operational Branches
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-[11px]">
              {OPERATIONAL_BRANCHES.map(b => (
                <a
                  key={b.id}
                  href="#network"
                  className="p-1.5 rounded hover:bg-slate-900 hover:text-teal-300 transition-colors flex items-center gap-1 text-slate-400"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500/80" />
                  <span>{b.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 4: Vision & Quick Access (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#cold-chain" className="hover:text-amber-400 transition-colors">-20°C Reefer</a>
              </li>
              <li>
                <a href="#strengths" className="hover:text-amber-400 transition-colors">Strengths & Why Us</a>
              </li>
              <li>
                <a href="#industries" className="hover:text-amber-400 transition-colors">Industries Served</a>
              </li>
              <li>
                <a href="#network" className="hover:text-amber-400 transition-colors">Branches & Seaports</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Contact Director</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © 2026 <strong className="text-slate-300">SEAIR WORLD LOGISTICS</strong>. All Rights Reserved. | Reliable and Trusted Logistics Partner.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px]">Established 2025 • Led by Mr. Somireddy Ganta</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-800 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
