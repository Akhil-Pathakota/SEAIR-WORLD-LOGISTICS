import React, { useState } from 'react';
import { 
  Plane, 
  Ship, 
  Snowflake, 
  ShieldCheck, 
  Warehouse, 
  Flame, 
  Sparkles, 
  ExternalLink,
  Maximize2,
  X
} from 'lucide-react';
import airFreightImage from '../assets/images/air_freight_cargo_1786809400542.jpg';
import seaFreightImage from '../assets/images/sea_freight_cargo_1786809415456.jpg';
import tempControlledImage from '../assets/images/temperature_controlled_reefer_packing_1786809540433.jpg';
import panIndiaGatewaysImage from '../assets/images/pan_india_sea_air_gateways_1786809656424.jpg';
import customsImage from '../assets/images/customs_clearance_inspection_1786810188681.jpg';
import warehouseImage from '../assets/images/modern_warehouse_logistics_1786810202560.jpg';
import projectCargoImage from '../assets/images/project_cargo_breakbulk_1786810224001.jpg';

interface GalleryItem {
  id: string;
  title: string;
  category: 'air' | 'sea' | 'cold-chain' | 'customs' | 'heavy' | 'warehouse';
  categoryLabel: string;
  image: string;
  caption: string;
  badge: string;
}

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'gal-1',
      title: 'International Air Cargo Operations',
      category: 'air',
      categoryLabel: 'Air Freight',
      image: airFreightImage,
      caption: 'Express air charter & scheduled commercial cargo pallet loading at international airport tarmac.',
      badge: 'Priority Air'
    },
    {
      id: 'gal-2',
      title: 'Deep Sea Container Port Operations',
      category: 'sea',
      categoryLabel: 'Ocean Marine',
      image: seaFreightImage,
      caption: 'High-capacity container vessel berthing and gantry crane loading for FCL & LCL global lanes.',
      badge: 'FCL / LCL'
    },
    {
      id: 'gal-3',
      title: 'Sub-Zero Cold Chain & Reefer Logistics',
      category: 'cold-chain',
      categoryLabel: 'Cold Chain',
      image: tempControlledImage,
      caption: 'Advanced thermal insulated packaging boxes and 20ft/40ft refrigerated reefer units down to -20 °C.',
      badge: '-20 °C Reefer'
    },
    {
      id: 'gal-4',
      title: 'Multimodal Gateway Transport Network',
      category: 'sea',
      categoryLabel: 'Gateways',
      image: panIndiaGatewaysImage,
      caption: 'Integrated seaport and airport multimodal connectivity hub across major Indian trade corridors.',
      badge: 'Pan-India'
    },
    {
      id: 'gal-5',
      title: 'Port Customs Inspection & Clearance',
      category: 'customs',
      categoryLabel: 'Customs',
      image: customsImage,
      caption: 'ICEGATE digital filing, bill of entry verification, physical container appraisal, and fast-track port gate-out.',
      badge: '100% Compliant'
    },
    {
      id: 'gal-6',
      title: 'Modern High-Bay Logistics Warehousing',
      category: 'warehouse',
      categoryLabel: 'Warehousing',
      image: warehouseImage,
      caption: 'Palletized cargo storage, inventory management, consolidation, and cross-docking operations.',
      badge: 'Secure Storage'
    },
    {
      id: 'gal-7',
      title: 'Heavy Lift & Over-Dimensional Project Cargo',
      category: 'heavy',
      categoryLabel: 'Project Cargo',
      image: projectCargoImage,
      caption: 'Multi-axle hydraulic trailer haulage for oversized industrial turbines, generators, and factory plants.',
      badge: 'Breakbulk'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Operational Visuals</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase">
              OPERATIONS & FLEET <span className="text-amber-400">GALLERY</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-amber-400 to-teal-500 rounded-full mt-3 mb-3" />
            <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
              Explore our real-world multimodal logistics infrastructure spanning air cargo terminals, deep-water sea container ports, and sub-zero cold chain facilities.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-slate-800/90 rounded-2xl border border-slate-700 backdrop-blur-md">
            {[
              { id: 'all', label: 'All Operations' },
              { id: 'air', label: 'Air Cargo' },
              { id: 'sea', label: 'Ocean Marine' },
              { id: 'cold-chain', label: '-20°C Reefer' },
              { id: 'customs', label: 'Customs' },
              { id: 'warehouse', label: 'Warehousing' }
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === filter.id
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/80 shadow-lg hover:shadow-2xl hover:border-amber-400/60 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Box */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-950/80 text-amber-300 border border-amber-400/30 backdrop-blur-md">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/40 backdrop-blur-md">
                    {item.badge}
                  </span>
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-xs">
                  <div className="w-11 h-11 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Title Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-bold text-base text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-950/80 text-white hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[70vh] object-cover"
            />

            <div className="p-6 bg-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {selectedImage.categoryLabel}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-xs text-teal-400 font-mono">
                    {selectedImage.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  {selectedImage.caption}
                </p>
              </div>

              <button
                onClick={() => setSelectedImage(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
