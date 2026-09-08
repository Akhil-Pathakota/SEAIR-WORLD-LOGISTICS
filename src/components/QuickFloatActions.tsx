import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Calculator, 
  Search, 
  Snowflake, 
  MapPin, 
  ChevronUp, 
  X, 
  Sparkles,
  Zap,
  Globe2,
  FileCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/logisticsData';

interface QuickFloatActionsProps {
  onOpenQuoteModal: (serviceId?: string) => void;
  onOpenTrackingModal: (code?: string) => void;
}

export const QuickFloatActions: React.FC<QuickFloatActionsProps> = ({ 
  onOpenQuoteModal,
  onOpenTrackingModal 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickActions = [
    {
      id: 'quote',
      label: 'Instant Freight Quote',
      subtext: 'Air & Sea rate calculator',
      icon: <Calculator className="w-4 h-4 text-amber-950" />,
      iconBg: 'bg-amber-400',
      badge: 'Popular',
      badgeColor: 'bg-amber-100 text-amber-900',
      action: () => {
        setIsOpen(false);
        onOpenQuoteModal();
      }
    },
    {
      id: 'track',
      label: 'Track Cargo Shipment',
      subtext: 'AWB / B/L live milestone status',
      icon: <Search className="w-4 h-4 text-white" />,
      iconBg: 'bg-teal-600',
      badge: 'Live',
      badgeColor: 'bg-emerald-100 text-emerald-900',
      action: () => {
        setIsOpen(false);
        onOpenTrackingModal();
      }
    },
    {
      id: 'cold-chain',
      label: '-20°C Cold Chain & Reefer',
      subtext: 'Pharma & perishable solutions',
      icon: <Snowflake className="w-4 h-4 text-cyan-700" />,
      iconBg: 'bg-cyan-100',
      badge: 'Sub-Zero',
      badgeColor: 'bg-cyan-100 text-cyan-900',
      href: '#cold-chain',
      action: () => setIsOpen(false)
    },
    {
      id: 'network',
      label: '12 Operational Ports & Branches',
      subtext: 'Hyderabad, Mumbai, Chennai, Vizag...',
      icon: <MapPin className="w-4 h-4 text-indigo-700" />,
      iconBg: 'bg-indigo-100',
      badge: 'Pan-India',
      badgeColor: 'bg-indigo-100 text-indigo-900',
      href: '#network',
      action: () => setIsOpen(false)
    },
    {
      id: 'customs',
      label: 'Customs & ICEGATE Filing',
      subtext: 'Port clearance & HS compliance',
      icon: <FileCheck className="w-4 h-4 text-emerald-700" />,
      iconBg: 'bg-emerald-100',
      badge: '100% Legal',
      badgeColor: 'bg-emerald-100 text-emerald-900',
      href: '#service-customs-clearance',
      action: () => setIsOpen(false)
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto select-none">
      {/* Expanded Quick Access Flyout Menu */}
      {isOpen && (
        <div className="w-80 sm:w-96 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/90 p-4 mb-2 animate-fadeIn transition-all duration-300 ring-1 ring-slate-900/10">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3 px-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-800 to-slate-900 flex items-center justify-center text-white shadow">
                <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
              </div>
              <div>
                <div className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                  <span>Quick Access Menu</span>
                  <span className="text-[10px] bg-teal-50 text-teal-700 font-bold px-1.5 py-0.2 rounded-full border border-teal-200/60">
                    24/7 Logistics
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">Fast shortcuts to services & tools</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Action List */}
          <div className="grid gap-1.5">
            {quickActions.map((action) => {
              const content = (
                <div className="flex items-center justify-between gap-3 w-full">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-9 h-9 rounded-xl ${action.iconBg} flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
                      {action.icon}
                    </div>
                    <div className="min-w-0 text-left">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-teal-800 transition-colors flex items-center gap-1.5 truncate">
                        <span>{action.label}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 truncate">
                        {action.subtext}
                      </div>
                    </div>
                  </div>
                  {action.badge && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 font-mono ${action.badgeColor}`}>
                      {action.badge}
                    </span>
                  )}
                </div>
              );

              if (action.href) {
                return (
                  <a
                    key={action.id}
                    href={action.href}
                    onClick={action.action}
                    className="p-2.5 rounded-2xl hover:bg-teal-50/80 transition-all flex items-center group border border-transparent hover:border-teal-100"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <button
                  key={action.id}
                  type="button"
                  onClick={action.action}
                  className="p-2.5 rounded-2xl hover:bg-teal-50/80 transition-all flex items-center group w-full border border-transparent hover:border-teal-100"
                >
                  {content}
                </button>
              );
            })}
          </div>

          {/* Direct WhatsApp & Phone Action Footer */}
          <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 text-emerald-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-emerald-200/60"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
              <span>WhatsApp Chat</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="py-2 px-3 rounded-xl bg-teal-50 hover:bg-teal-100/80 text-teal-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-teal-200/60"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>Direct Call</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Buttons Row */}
      <div className="flex items-center gap-2.5">
        {/* Back to top button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-slate-700 hover:text-teal-800 flex items-center justify-center shadow-lg border border-slate-200/80 hover:scale-110 transition-all"
            aria-label="Scroll to top"
            title="Scroll to Top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}

        {/* Quick Rate Pill (Desktop) */}
        <button
          onClick={() => onOpenQuoteModal()}
          className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 border-2 border-white/80 active:scale-95"
          id="float-quick-quote"
        >
          <Calculator className="w-4 h-4 text-slate-950" />
          <span>Get Quote</span>
        </button>

        {/* WhatsApp Direct Action */}
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-all border-2 border-white group relative"
          aria-label="WhatsApp Quick Connect"
          id="float-whatsapp-btn"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>

        {/* Main Quick Access Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`h-12 px-4 rounded-full flex items-center gap-2 font-bold text-xs shadow-2xl transition-all border-2 border-white ${
            isOpen 
              ? 'bg-slate-900 text-white hover:bg-slate-800' 
              : 'bg-gradient-to-r from-teal-800 via-teal-900 to-slate-900 text-white hover:scale-105'
          }`}
          aria-label="Toggle Quick Access Menu"
          id="quick-access-menu-btn"
        >
          {isOpen ? (
            <>
              <X className="w-4 h-4 text-amber-400" />
              <span>Close</span>
            </>
          ) : (
            <>
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
              </div>
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="tracking-wide">Quick Menu</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

