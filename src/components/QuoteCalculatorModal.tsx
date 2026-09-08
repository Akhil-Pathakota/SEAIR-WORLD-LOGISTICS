import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  X, 
  CheckCircle2, 
  Plane, 
  Ship, 
  ShieldCheck, 
  Snowflake, 
  Send, 
  Phone, 
  Mail, 
  MessageSquare,
  AlertCircle,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { CORE_SERVICES, OPERATIONAL_BRANCHES, COMPANY_INFO } from '../data/logisticsData';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  initialServiceId
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceType: initialServiceId || 'air-freight',
    origin: 'Hyderabad, India',
    destination: '',
    commodityType: 'Pharmaceuticals & Healthcare',
    weightKg: '500',
    lengthCm: '120',
    widthCm: '80',
    heightCm: '100',
    pieces: '2',
    temperatureReq: 'Ambient (No Temp Control)',
    specialNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'quote' | 'calculator'>('quote');

  useEffect(() => {
    if (initialServiceId) {
      setFormData(prev => ({ ...prev, serviceType: initialServiceId }));
      if (initialServiceId === 'temperature-controlled') {
        setFormData(prev => ({ ...prev, temperatureReq: '-20°C Deep Freeze (Reefer/Validated ULD)' }));
      }
    }
  }, [initialServiceId, isOpen]);

  // CBM & Volumetric Calculations
  const l = parseFloat(formData.lengthCm) || 0;
  const w = parseFloat(formData.widthCm) || 0;
  const h = parseFloat(formData.heightCm) || 0;
  const pcs = parseInt(formData.pieces) || 1;
  const grossWeight = parseFloat(formData.weightKg) || 0;

  // 1 Box volume in m3:
  const cbmTotal = ((l * w * h) / 1000000) * pcs;
  // Air Volumetric weight (cm3 / 6000):
  const airVolumetricWeight = ((l * w * h) / 6000) * pcs;
  // Chargeable air weight is max(gross, airVolumetric):
  const chargeableAirWeight = Math.max(grossWeight, airVolumetricWeight);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `*SEAIR WORLD LOGISTICS - Quotation Request*%0A%0A*Name:* ${formData.fullName || 'Prospective Client'}%0A*Company:* ${formData.companyName || 'N/A'}%0A*Phone:* ${formData.phone || 'N/A'}%0A*Email:* ${formData.email || 'N/A'}%0A*Service:* ${formData.serviceType}%0A*Origin:* ${formData.origin}%0A*Destination:* ${formData.destination}%0A*Commodity:* ${formData.commodityType}%0A*Gross Weight:* ${formData.weightKg} KG%0A*Total CBM:* ${cbmTotal.toFixed(2)} CBM%0A*Temp Requirement:* ${formData.temperatureReq}%0A*Notes:* ${formData.specialNotes || 'Please share best freight tariffs and transit timelines.'}`;
    window.open(`https://wa.me/917993142771?text=${text}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative text-white animate-fadeIn">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg font-black">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
              Instant Freight Inquiry & Volume Calculator
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
              Request a Custom Quote
            </h3>
          </div>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-5 bg-slate-950 rounded-2xl border border-teal-500/40">
            <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center mx-auto border border-teal-400/40">
              <CheckCircle2 className="w-8 h-8 text-teal-400" />
            </div>

            <div>
              <h4 className="font-display text-2xl font-bold text-white">
                Quotation Request Received!
              </h4>
              <p className="text-slate-300 text-sm mt-2 max-w-md mx-auto">
                Thank you, <strong className="text-amber-400">{formData.fullName || 'Valued Customer'}</strong>. Our operational leadership desk and Director <strong className="text-teal-300">Mr. Somireddy Ganta</strong> will review your cargo requirements and respond with a formal tariff estimate within 1 business hour.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 max-w-md mx-auto text-left text-xs space-y-1.5 font-mono text-slate-300">
              <div><strong>Service:</strong> {formData.serviceType}</div>
              <div><strong>Route:</strong> {formData.origin} ➔ {formData.destination || 'International Port'}</div>
              <div><strong>Volume / Weight:</strong> {cbmTotal.toFixed(2)} CBM / {formData.weightKg} KG</div>
              <div><strong>Temp Setting:</strong> {formData.temperatureReq}</div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send via WhatsApp (+91 7993142771)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nav Tabs */}
            <div className="flex rounded-xl bg-slate-950 p-1 border border-slate-800 mb-4">
              <button
                type="button"
                onClick={() => setActiveTab('quote')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'quote' ? 'bg-amber-400 text-slate-950 shadow' : 'text-slate-400'
                }`}
              >
                1. Freight Quotation Details
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('calculator')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'calculator' ? 'bg-amber-400 text-slate-950 shadow' : 'text-slate-400'
                }`}
              >
                2. Live CBM & Volumetric Estimator
              </button>
            </div>

            {/* Service & Routing Details */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Service Requirement *
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  required
                >
                  {CORE_SERVICES.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Commodity Industry Vertical
                </label>
                <select
                  value={formData.commodityType}
                  onChange={(e) => setFormData({ ...formData, commodityType: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="Pharmaceuticals & Healthcare">Pharmaceuticals & Healthcare (Cold Chain)</option>
                  <option value="Manufacturing, Infra & Engineering">Manufacturing, Infra & Engineering</option>
                  <option value="Automotive & Industrial Cargo">Automotive & Industrial Cargo</option>
                  <option value="Electronics & Technology">Electronics & High-Tech</option>
                  <option value="FMCG & Consumer Goods">FMCG & Consumer Goods</option>
                  <option value="General Commercial Cargo">General Commercial Cargo</option>
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Origin Hub / City / Seaport *
                </label>
                <input
                  type="text"
                  value={formData.origin}
                  onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                  placeholder="e.g. Hyderabad, JNPT Mumbai, Chennai Port"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Destination Airport / Port / Country *
                </label>
                <input
                  type="text"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  placeholder="e.g. Dubai, Rotterdam, Frankfurt, Chicago"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  required
                />
              </div>
            </div>

            {/* Cargo Dimensions & CBM Row */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Cargo Dimensions & Weight
                </span>
                <span className="text-[11px] text-teal-400 font-mono">
                  Total Volume: {cbmTotal.toFixed(2)} CBM
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Gross Wt (KG)</label>
                  <input
                    type="number"
                    value={formData.weightKg}
                    onChange={(e) => setFormData({ ...formData, weightKg: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Length (cm)</label>
                  <input
                    type="number"
                    value={formData.lengthCm}
                    onChange={(e) => setFormData({ ...formData, lengthCm: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Width (cm)</label>
                  <input
                    type="number"
                    value={formData.widthCm}
                    onChange={(e) => setFormData({ ...formData, widthCm: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Height (cm)</label>
                  <input
                    type="number"
                    value={formData.heightCm}
                    onChange={(e) => setFormData({ ...formData, heightCm: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white font-mono"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-[11px] text-slate-400 mb-1">Packages</label>
                  <input
                    type="number"
                    value={formData.pieces}
                    onChange={(e) => setFormData({ ...formData, pieces: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white font-mono"
                  />
                </div>
              </div>

              {/* Volumetric calculation advisory */}
              <div className="grid sm:grid-cols-2 gap-2 pt-1 text-[11px] text-slate-400 border-t border-slate-800">
                <div>
                  Air Volumetric Wt (1:6000): <strong className="text-teal-300 font-mono">{airVolumetricWeight.toFixed(1)} KG</strong>
                </div>
                <div>
                  Air Chargeable Wt: <strong className="text-amber-300 font-mono">{chargeableAirWeight.toFixed(1)} KG</strong>
                </div>
              </div>
            </div>

            {/* Temperature Requirements (from document: up to -20°C) */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Temperature Requirement (Page 3 PDF Spec)
              </label>
              <select
                value={formData.temperatureReq}
                onChange={(e) => setFormData({ ...formData, temperatureReq: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="Ambient (No Temp Control)">Ambient (No Temperature Control Required)</option>
                <option value="-20°C Deep Freeze (20ft/40ft Reefer & Air Packaging)">-20 °C Deep Freeze (Reefer / Dry Ice / Cold Chain Packaging)</option>
                <option value="+2°C to +8°C Cold Chain">+2 °C to +8 °C (Refrigerated Pharma / Vaccines)</option>
                <option value="+15°C to +25°C Controlled Room Temp">+15 °C to +25 °C (Controlled Room Temperature)</option>
              </select>
            </div>

            {/* Contact Person Details */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Full Name / Contact Person *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Company / Organization Name
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g. Acme Pharma India Ltd"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="operations@company.com"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  required
                />
              </div>
            </div>

            {/* Special notes */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Special Handling, Hazmat, or Customs Requirements
              </label>
              <textarea
                value={formData.specialNotes}
                onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                rows={2}
                placeholder="Mention HS code, special pickup time, packing requirements, duty optimization advice, or target delivery date..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Submit buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Reviewed by Mr. Somireddy Ganta & Ops Desk</span>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 font-bold text-xs flex items-center gap-1.5 border border-slate-700"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Rate Request</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
