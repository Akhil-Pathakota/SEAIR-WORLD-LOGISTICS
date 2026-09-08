import React, { useState, useEffect } from 'react';
import { 
  Search, 
  X, 
  CheckCircle2, 
  Clock, 
  Plane, 
  Ship, 
  MapPin, 
  ShieldCheck, 
  Snowflake, 
  Truck, 
  AlertCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { DEMO_TRACKING_DATA, COMPANY_INFO } from '../data/logisticsData';
import { TrackingRecord } from '../types';

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrackingCode?: string;
}

export const TrackingModal: React.FC<TrackingModalProps> = ({
  isOpen,
  onClose,
  initialTrackingCode = ''
}) => {
  const [trackingCode, setTrackingCode] = useState(initialTrackingCode || 'SWL-2026-8841');
  const [searchedRecord, setSearchedRecord] = useState<TrackingRecord | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialTrackingCode) {
      setTrackingCode(initialTrackingCode);
      handleSearch(initialTrackingCode);
    } else {
      // Default to Reefer Demo
      handleSearch('SWL-2026-8841');
    }
  }, [initialTrackingCode, isOpen]);

  const handleSearch = (code: string) => {
    const trimmed = code.trim().toUpperCase();
    if (!trimmed) {
      setErrorMsg('Please enter a tracking number, AWB, or Bill of Lading (B/L).');
      setSearchedRecord(null);
      return;
    }

    if (DEMO_TRACKING_DATA[trimmed]) {
      setSearchedRecord(DEMO_TRACKING_DATA[trimmed]);
      setErrorMsg('');
    } else {
      // Generate a realistic dynamic record for custom codes
      const isAir = trimmed.includes('AIR') || trimmed.includes('AWB');
      const isReefer = trimmed.includes('REEFER') || trimmed.includes('COLD') || trimmed.includes('8841');
      
      const dynamicRecord: TrackingRecord = {
        trackingNumber: trimmed,
        serviceType: isAir ? 'Air Freight Forwarding (Scheduled)' : isReefer ? 'Temperature-Controlled Sea Freight (-20°C)' : 'Multi-Modal Ocean Freight Forwarding',
        origin: 'Hyderabad Central Logistics Hub, India',
        destination: 'International Cargo Terminal',
        shipper: 'Client Enterprise India Pvt Ltd',
        consignee: 'Global Consignee International',
        status: 'In Transit',
        estimatedDelivery: '2026-08-25',
        carrierId: isAir ? 'Air Cargo Liner Express' : 'Ocean Carrier Terminal',
        weight: '1,450 KG',
        pieces: 6,
        milestones: [
          { step: 'Booking Registered & Pick-up Completed', status: 'completed', date: '2026-08-12', location: 'Origin Hub', description: 'Cargo picked up from factory, verified, and pre-cleared.' },
          { step: 'Indian Customs Document Clearance Passed', status: 'completed', date: '2026-08-14', location: 'Indian Customs Port Office', description: 'Shipping Bill scrutinized and approved under EDI.' },
          { step: 'Cargo Departed in Transit', status: 'current', date: '2026-08-15', location: 'Transit Corridor', description: 'Consignment en route to destination. Telematics normal.' },
          { step: 'Destination Port Clearance & Final Delivery', status: 'pending', date: '2026-08-25', location: 'Consignee Address', description: 'Final mile doorstep delivery.' }
        ]
      };
      setSearchedRecord(dynamicRecord);
      setErrorMsg('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative text-white animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-lg">
            <Search className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Live Cargo Visibility
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
              Track & Trace System
            </h3>
          </div>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(trackingCode);
          }}
          className="space-y-3 mb-6"
        >
          <div className="flex gap-2">
            <input
              type="text"
              value={trackingCode}
              onChange={(e) => setTrackingCode(e.target.value)}
              placeholder="Enter AWB, B/L, or SWL Reference Number..."
              className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 font-mono focus:outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold text-sm rounded-xl transition-all shadow flex items-center gap-1.5"
            >
              <Search className="w-4 h-4" />
              <span>Track</span>
            </button>
          </div>

          {/* Preset Sample Quick Buttons */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span>Demo active shipments:</span>
            <button
              type="button"
              onClick={() => {
                setTrackingCode('SWL-2026-8841');
                handleSearch('SWL-2026-8841');
              }}
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300 font-mono text-[11px] border border-slate-700"
            >
              SWL-2026-8841 (-20°C Reefer)
            </button>
            <button
              type="button"
              onClick={() => {
                setTrackingCode('SWL-AIR-9921');
                handleSearch('SWL-AIR-9921');
              }}
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 font-mono text-[11px] border border-slate-700"
            >
              SWL-AIR-9921 (Air Cargo)
            </button>
            <button
              type="button"
              onClick={() => {
                setTrackingCode('SWL-SEA-5042');
                handleSearch('SWL-SEA-5042');
              }}
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-teal-300 font-mono text-[11px] border border-slate-700"
            >
              SWL-SEA-5042 (JNPT Ocean)
            </button>
          </div>
        </form>

        {errorMsg && (
          <div className="p-4 rounded-xl bg-red-900/40 border border-red-700/60 text-red-200 text-xs flex items-center gap-2 mb-6">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Tracking Details View */}
        {searchedRecord && (
          <div className="space-y-6">
            {/* Top Summary Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[11px] font-bold text-teal-400 uppercase tracking-widest font-mono">
                    Tracking ID: {searchedRecord.trackingNumber}
                  </span>
                  <h4 className="font-display text-xl font-bold text-white mt-0.5">
                    {searchedRecord.serviceType}
                  </h4>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-950 border border-teal-700 text-teal-300 font-bold text-xs">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                  <span>Status: {searchedRecord.status}</span>
                </div>
              </div>

              {/* Origin to Destination Route */}
              <div className="grid sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="text-slate-400 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>Origin:</span>
                  </div>
                  <div className="font-bold text-white text-sm">{searchedRecord.origin}</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Shipper: {searchedRecord.shipper}</div>
                </div>

                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="text-slate-400 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-teal-400" />
                    <span>Destination:</span>
                  </div>
                  <div className="font-bold text-white text-sm">{searchedRecord.destination}</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Consignee: {searchedRecord.consignee}</div>
                </div>
              </div>

              {/* Cargo Specs */}
              <div className="grid grid-cols-3 gap-2 pt-1 text-center text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Est. Delivery</span>
                  <strong className="text-amber-400 font-mono text-xs">{searchedRecord.estimatedDelivery}</strong>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Gross Weight</span>
                  <strong className="text-white font-mono text-xs">{searchedRecord.weight}</strong>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Carrier / Flight / Vessel</span>
                  <strong className="text-teal-300 font-mono text-[11px] truncate block">{searchedRecord.carrierId}</strong>
                </div>
              </div>
            </div>

            {/* Milestones Timeline */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Milestone Activity Log
              </h4>

              <div className="space-y-4 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
                {searchedRecord.milestones.map((m, idx) => (
                  <div key={idx} className="relative flex items-start gap-4 text-xs">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 z-10 ${
                      m.status === 'completed'
                        ? 'bg-teal-600 text-white ring-4 ring-slate-900'
                        : m.status === 'current'
                        ? 'bg-amber-400 text-slate-950 ring-4 ring-slate-900 animate-pulse'
                        : 'bg-slate-800 text-slate-500 ring-4 ring-slate-900'
                    }`}>
                      {m.status === 'completed' ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : m.status === 'current' ? (
                        <Clock className="w-4 h-4" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-slate-600" />
                      )}
                    </div>

                    <div className={`flex-1 p-3.5 rounded-xl border ${
                      m.status === 'current'
                        ? 'bg-slate-950 border-amber-400/80 shadow-md'
                        : 'bg-slate-950/60 border-slate-800'
                    }`}>
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                        <span className={`font-bold ${m.status === 'current' ? 'text-amber-400' : 'text-white'}`}>
                          {m.step}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">{m.date}</span>
                      </div>
                      <p className="text-slate-300 text-[11px]">{m.description}</p>
                      <div className="text-[10px] text-teal-400 mt-1 font-semibold">📍 {m.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assistance Contact info */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Need special cargo handling assistance?</span>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="font-bold text-amber-400 hover:underline"
              >
                Call Operations: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
