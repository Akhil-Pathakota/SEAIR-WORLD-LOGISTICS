import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  Menu, 
  X, 
  ChevronDown, 
  Calculator, 
  Search, 
  MapPin, 
  Instagram, 
  Linkedin,
  ShieldCheck,
  Snowflake,
  Plane,
  Ship,
  FileText,
  Warehouse,
  Flame,
  ArrowRight,
  Sparkles,
  SlidersHorizontal,
  Compass,
  Boxes
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO, CORE_SERVICES } from '../data/logisticsData';

interface NavbarProps {
  onOpenQuoteModal: (serviceId?: string) => void;
  onOpenTrackingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuoteModal,
  onOpenTrackingModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [utilitiesDropdownOpen, setUtilitiesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'air-freight': return <Plane className="w-4 h-4 text-sky-500" />;
      case 'sea-freight': return <Ship className="w-4 h-4 text-teal-600" />;
      case 'cold-chain': return <Snowflake className="w-4 h-4 text-cyan-500" />;
      case 'customs': return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
      case 'warehousing': return <Warehouse className="w-4 h-4 text-amber-500" />;
      case 'project-cargo': return <Flame className="w-4 h-4 text-orange-500" />;
      case 'documentation': return <FileText className="w-4 h-4 text-indigo-500" />;
      default: return <Sparkles className="w-4 h-4 text-teal-600" />;
    }
  };

  const utilityItems = [
    {
      id: 'tracking',
      title: 'Live Cargo Tracker',
      desc: 'Track Air Waybill (AWB) or Ocean B/L milestones in real-time',
      icon: <Search className="w-4 h-4 text-teal-700" />,
      badge: 'Live',
      action: () => {
        setUtilitiesDropdownOpen(false);
        onOpenTrackingModal();
      }
    },
    {
      id: 'calculator',
      title: 'Instant Freight Rate Calculator',
      desc: 'Calculate estimated air and sea tariffs across global trade lanes',
      icon: <Calculator className="w-4 h-4 text-amber-600" />,
      badge: 'Fast',
      action: () => {
        setUtilitiesDropdownOpen(false);
        onOpenQuoteModal();
      }
    },
    {
      id: 'cold-chain-specs',
      title: '-20°C Reefer & Cold Chain Specs',
      desc: 'Sub-zero temperature configurations, thermal blankets & data loggers',
      icon: <Snowflake className="w-4 h-4 text-cyan-600" />,
      badge: 'Pharma',
      href: '#cold-chain',
      action: () => setUtilitiesDropdownOpen(false)
    },
    {
      id: 'gateways',
      title: '12 Operational Ports & Branch Directory',
      desc: 'Hyderabad, Mumbai, Chennai, Visakhapatnam, Cochin, Mundra & ICDs',
      icon: <MapPin className="w-4 h-4 text-indigo-600" />,
      badge: 'Pan-India',
      href: '#network',
      action: () => setUtilitiesDropdownOpen(false)
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Contact Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-1.5 px-4 sm:px-6 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Contact Points */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-400 transition-colors font-medium group"
              id="topbar-phone-link"
            >
              <div className="w-5 h-5 rounded-full bg-amber-400/10 flex items-center justify-center group-hover:bg-amber-400/20 transition-colors">
                <Phone className="w-3 h-3 text-amber-400" />
              </div>
              <span className="tracking-tight">{COMPANY_INFO.phone}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors group"
              id="topbar-email-link"
            >
              <div className="w-5 h-5 rounded-full bg-teal-400/10 flex items-center justify-center group-hover:bg-teal-400/20 transition-colors">
                <Mail className="w-3 h-3 text-teal-400" />
              </div>
              <span>{COMPANY_INFO.email}</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-teal-400 font-medium bg-teal-950/60 border border-teal-800/50 px-2.5 py-0.5 rounded-full text-[11px]">
              <ShieldCheck className="w-3 h-3 text-teal-400" />
              <span>25+ Years Experience</span>
            </div>
          </div>

          {/* Operational hours & social */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1.5 text-slate-400 text-[11px]">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>24/7 Operations & Port Clearance</span>
            </div>
            <div className="flex items-center gap-1.5 border-l border-slate-800 pl-3">
              <a 
                href={COMPANY_INFO.instagramUrl}
                target="_blank" 
                rel="noreferrer"
                className="w-6 h-6 rounded-full hover:bg-slate-800 text-slate-400 hover:text-pink-400 transition-all flex items-center justify-center"
                aria-label="Instagram"
                id="topbar-insta-link"
              >
                <Instagram className="w-3 h-3" />
              </a>
              <a 
                href={COMPANY_INFO.linkedinUrl}
                target="_blank" 
                rel="noreferrer"
                className="w-6 h-6 rounded-full hover:bg-slate-800 text-slate-400 hover:text-sky-400 transition-all flex items-center justify-center"
                aria-label="LinkedIn"
                id="topbar-linkedin-link"
              >
                <Linkedin className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Clean Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/90' 
            : 'bg-white py-4 shadow-sm border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center group shrink-0" id="navbar-brand-logo">
            <BrandLogo size="md" />
          </a>

          {/* Clean Desktop Navigation Menu (Matching Requested Structure) */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-[15px] font-semibold text-slate-900">
            {/* 1. Home */}
            <a 
              href="#home" 
              className="px-3.5 py-2 rounded-lg text-slate-900 hover:text-teal-800 hover:bg-slate-50 transition-colors font-bold"
            >
              Home
            </a>
            
            {/* 2. About Us */}
            <a 
              href="#about" 
              className="px-3.5 py-2 rounded-lg text-slate-800 hover:text-teal-800 hover:bg-slate-50 transition-colors"
            >
              About Us
            </a>

            {/* 3. Services ▾ */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <a 
                href="#services" 
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${
                  servicesDropdownOpen ? 'text-teal-800 bg-teal-50/80 font-bold' : 'text-slate-800 hover:text-teal-800 hover:bg-slate-50'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-teal-700' : 'text-slate-500'}`} />
              </a>

              {/* Services Dropdown Panel */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-96 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3 z-50 animate-fadeIn">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between border-b border-slate-100 mb-1.5">
                    <span>Our Freight Capabilities</span>
                    <span className="text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full font-medium">Pan-India</span>
                  </div>
                  
                  <div className="grid gap-1">
                    {CORE_SERVICES.map((s) => (
                      <a
                        key={s.id}
                        href={`#service-${s.id}`}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="px-3 py-2 text-xs rounded-xl hover:bg-teal-50/80 hover:text-teal-900 transition-all flex items-center gap-3 group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 group-hover/item:bg-white group-hover/item:shadow-sm transition-all">
                          {getServiceIcon(s.id)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-slate-800 group-hover/item:text-teal-800 flex items-center justify-between">
                            <span className="truncate">{s.title}</span>
                            {s.badge && (
                              <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover/item:bg-amber-100 group-hover/item:text-amber-900">
                                {s.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1 group-hover/item:text-slate-600">
                            {s.shortDesc}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="mt-2 pt-2 border-t border-slate-100">
                    <a
                      href="#cold-chain"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="px-3 py-2 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl flex items-center justify-between text-xs font-bold text-teal-900 hover:from-cyan-100 hover:to-teal-100 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Snowflake className="w-4 h-4 text-cyan-600 animate-pulse" />
                        <span>Specialized -20°C Reefer Cold Chain</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-teal-700" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Utilities ▾ */}
            <div 
              className="relative"
              onMouseEnter={() => setUtilitiesDropdownOpen(true)}
              onMouseLeave={() => setUtilitiesDropdownOpen(false)}
            >
              <button 
                type="button"
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${
                  utilitiesDropdownOpen ? 'text-teal-800 bg-teal-50/80 font-bold' : 'text-slate-800 hover:text-teal-800 hover:bg-slate-50'
                }`}
              >
                <span>Utilities</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${utilitiesDropdownOpen ? 'rotate-180 text-teal-700' : 'text-slate-500'}`} />
              </button>

              {/* Utilities Dropdown Panel */}
              {utilitiesDropdownOpen && (
                <div className="absolute top-full left-0 w-96 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3 z-50 animate-fadeIn">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between border-b border-slate-100 mb-1.5">
                    <span>Logistics Tools & Specs</span>
                    <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full font-medium">Quick Tools</span>
                  </div>

                  <div className="grid gap-1">
                    {utilityItems.map((util) => {
                      if (util.href) {
                        return (
                          <a
                            key={util.id}
                            href={util.href}
                            onClick={util.action}
                            className="px-3 py-2.5 text-xs rounded-xl hover:bg-teal-50/80 hover:text-teal-900 transition-all flex items-center gap-3 group/item"
                          >
                            <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 group-hover/item:bg-white group-hover/item:shadow-sm transition-all">
                              {util.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-bold text-slate-800 group-hover/item:text-teal-800 flex items-center justify-between">
                                <span>{util.title}</span>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover/item:bg-amber-100 group-hover/item:text-amber-900">
                                  {util.badge}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-500 line-clamp-1">
                                {util.desc}
                              </p>
                            </div>
                          </a>
                        );
                      }

                      return (
                        <button
                          key={util.id}
                          type="button"
                          onClick={util.action}
                          className="px-3 py-2.5 text-xs rounded-xl hover:bg-teal-50/80 hover:text-teal-900 transition-all flex items-center gap-3 group/item text-left w-full"
                        >
                          <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 group-hover/item:bg-white group-hover/item:shadow-sm transition-all">
                            {util.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-bold text-slate-800 group-hover/item:text-teal-800 flex items-center justify-between">
                              <span>{util.title}</span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover/item:bg-amber-100 group-hover/item:text-amber-900">
                                {util.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 line-clamp-1">
                              {util.desc}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 5. Gallery */}
            <a 
              href="#gallery" 
              className="px-3.5 py-2 rounded-lg text-slate-800 hover:text-teal-800 hover:bg-slate-50 transition-colors"
            >
              Gallery
            </a>

            {/* 6. Clients */}
            <a 
              href="#clients" 
              className="px-3.5 py-2 rounded-lg text-slate-800 hover:text-teal-800 hover:bg-slate-50 transition-colors"
            >
              Clients
            </a>

            {/* 7. Contact Us */}
            <a 
              href="#contact" 
              className="px-3.5 py-2 rounded-lg text-slate-800 hover:text-teal-800 hover:bg-slate-50 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Fast Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenTrackingModal}
              className="px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-teal-900 bg-slate-100 hover:bg-slate-200/90 border border-slate-200/70 rounded-xl transition-all flex items-center gap-1.5 shadow-sm hover:shadow active:scale-95"
              id="navbar-track-btn"
            >
              <Search className="w-3.5 h-3.5 text-teal-700" />
              <span>Track Cargo</span>
            </button>

            <button
              onClick={() => onOpenQuoteModal()}
              className="px-4 py-2 text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 transform active:scale-95 hover:scale-[1.02]"
              id="navbar-quote-btn"
            >
              <Calculator className="w-3.5 h-3.5 text-slate-950" />
              <span className="tracking-tight">Get Instant Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="p-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 rounded-xl font-bold text-xs flex items-center gap-1 shadow-sm"
              aria-label="Get Quote"
            >
              <Calculator className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-2xl animate-fadeIn">
            <div className="grid gap-1 text-sm font-semibold text-slate-800">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-teal-50 hover:text-teal-800 flex items-center justify-between font-bold"
              >
                <span>Home</span>
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-teal-50 hover:text-teal-800"
              >
                About Us
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-teal-50 hover:text-teal-800 flex items-center justify-between"
              >
                <span>Services</span>
                <span className="text-xs bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full font-medium">7 Solutions</span>
              </a>
              <a
                href="#cold-chain"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-50 to-teal-50 text-teal-950 font-bold flex items-center justify-between border border-teal-100"
              >
                <div className="flex items-center gap-2">
                  <Snowflake className="w-4 h-4 text-cyan-600" />
                  <span>-20°C Cold Chain & Reefer</span>
                </div>
                <span className="text-[10px] bg-cyan-200/70 text-cyan-900 px-2 py-0.5 rounded-full font-mono">Sub-Zero</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrackingModal();
                }}
                className="px-3.5 py-2.5 rounded-xl hover:bg-teal-50 hover:text-teal-800 flex items-center justify-between text-left"
              >
                <span>Utilities & Tracking</span>
                <span className="text-xs bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full font-medium">Live Tools</span>
              </button>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-teal-50 hover:text-teal-800"
              >
                Gallery
              </a>
              <a
                href="#clients"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-teal-50 hover:text-teal-800"
              >
                Clients
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-teal-50 hover:text-teal-800"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrackingModal();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 text-slate-800 font-bold text-sm flex items-center justify-center gap-2 border border-slate-200"
              >
                <Search className="w-4 h-4 text-teal-700" />
                <span>Track Cargo (AWB / B/L)</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <Calculator className="w-4 h-4" />
                <span>Request Instant Freight Quote</span>
              </button>

              <div className="mt-2 text-center text-xs text-slate-500">
                Direct Hotline: <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-teal-800">{COMPANY_INFO.phone}</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
