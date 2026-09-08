import { CoreService, Branch, Port, Industry, Strength, TrackingRecord } from '../types';
import airFreightImage from '../assets/images/air_freight_cargo_1786809400542.jpg';
import seaFreightImage from '../assets/images/sea_freight_cargo_1786809415456.jpg';
import cargoDocImage from '../assets/images/cargo_documentation_compliance_1786809189946.jpg';
import tempControlledImage from '../assets/images/temperature_controlled_reefer_packing_1786809540433.jpg';
import customsImage from '../assets/images/customs_clearance_inspection_1786810188681.jpg';
import warehouseImage from '../assets/images/modern_warehouse_logistics_1786810202560.jpg';
import projectCargoImage from '../assets/images/project_cargo_breakbulk_1786810224001.jpg';

export const COMPANY_INFO = {
  name: 'SEAIR WORLD LOGISTICS',
  shortName: 'SEAIR WORLD',
  tagline: 'Reliable and Trusted Logistics Partner',
  establishedYear: '2025',
  experienceYears: '25+',
  director: 'Mr. Somireddy Ganta',
  directorRole: 'Director & Logistics Leader',
  phone: '+91 7993142771',
  phoneDisplay: '+91 7993142771',
  email: 'seairworldlogistics@gmail.com',
  instagram: 'seairworldlogistics',
  instagramUrl: 'https://instagram.com/seairworldlogistics',
  linkedin: 'seairworldlogistics',
  linkedinUrl: 'https://linkedin.com/company/seairworldlogistics',
  whatsappUrl: 'https://wa.me/917993142771?text=Hello%20SEAIR%20WORLD%20LOGISTICS,%20I%20would%20like%20to%20inquire%20about%20freight%20and%20customs%20services.',
  headquarters: 'Hyderabad, Telangana, India',
  profileYear: '2026',
  aboutText: `SEAIR WORLD LOGISTICS is a professionally managed freight forwarding and customs clearance company established in 2025. With a strong foundation built on 25 years of industry experience, the company is led by a logistics professional, Mr. Somireddy Ganta, who brings deep operational knowledge. We specialize in delivering reliable, efficient, and cost-effective logistics solutions tailored to meet the dynamic needs of today's global trade environment. Our commitment is to simplify international and domestic cargo movement while ensuring full compliance with customs and regulatory requirements.`,
  vision: `To become a trusted logistics partner by delivering dependable freight forwarding and customs clearance services with integrity, efficiency, and professionalism.`,
  mission: `To provide seamless logistics solutions that enable our customers to focus on their core business, while we manage their cargo with responsibility and care.`
};

export const CORE_SERVICES: CoreService[] = [
  {
    id: 'air-freight',
    title: 'Air Freight Forwarding',
    shortDesc: 'End-to-end air cargo solutions for import and export shipments, ensuring speed, safety, and timely delivery through trusted airline partnerships.',
    fullDesc: 'We provide comprehensive air freight forwarding services with scheduled departures, priority handling, and temperature-controlled options. Our extensive partnerships with global commercial and cargo airlines guarantee expedited space allocation and seamless transit times for your high-priority shipments.',
    iconName: 'Plane',
    badge: 'Express & Priority',
    image: airFreightImage,
    bulletPoints: [
      'End-to-end air cargo solutions for import and export shipments',
      'Guaranteed speed, safety, and timely airport-to-airport and door deliveries',
      'Direct agreements and allocations with premier global airline carriers',
      'Charter flights, consolidation, and specialized cargo handling'
    ],
    keyHighlights: ['Time-critical delivery', 'Global airline network', 'AOG & express options', 'Full air customs clearance']
  },
  {
    id: 'sea-freight',
    title: 'Sea Freight Forwarding',
    shortDesc: 'Transport of goods by ship, handled by a professional freight forwarder with complete FCL, LCL, and multimodal sea transit.',
    fullDesc: 'Cost-effective, reliable ocean freight forwarding across major global maritime corridors. Whether full container load (FCL), less than container load (LCL), or breakbulk, we manage bookings, container positioning, port documentation, and vessel tracking with precision.',
    iconName: 'Ship',
    badge: 'FCL & LCL Ocean',
    image: seaFreightImage,
    bulletPoints: [
      'Transport of goods by ship, handled by expert freight forwarders',
      'Full Container Load (FCL) & Less than Container Load (LCL) consolidation',
      'Regular vessel schedules across key international trade lanes',
      'Direct port connectivity at all major Indian coastal gateway terminals'
    ],
    keyHighlights: ['FCL & LCL services', 'Port-to-port and multimodal', 'Competitive ocean freight', 'Vessel space protection']
  },
  {
    id: 'customs-clearance',
    title: 'Customs Clearance',
    shortDesc: 'Professional customs brokerage services with complete documentation support, tariff classification, duty optimization, and compliance with Indian customs regulations.',
    fullDesc: 'Navigating complex customs regimes requires deep legal and operational expertise. Our licensed customs brokerage team ensures accurate HS code classification, duty calculations, fast-track electronic filing through ICEGATE, valuation compliance, and rapid physical cargo assessment.',
    iconName: 'FileCheck',
    badge: '100% Compliant',
    image: customsImage,
    bulletPoints: [
      'Professional customs brokerage with complete documentation support',
      'Accurate tariff classification (HS codes) and duty optimization',
      'Full compliance with Indian customs regulations and statutory bodies',
      'Rapid clearance at sea ports, air cargo complexes, and ICDs'
    ],
    keyHighlights: ['25+ yrs customs expertise', 'Duty optimization', 'Zero-penalty compliance', 'Direct ICEGATE e-filing']
  },
  {
    id: 'import-export-handling',
    title: 'Import and Export Handling',
    shortDesc: 'Seamless coordination of import and export shipments, including pre-shipment planning, documentation, customs formalities, and delivery.',
    fullDesc: 'End-to-end management of cross-border trade flows. From initial purchase order follow-up and supplier coordination to export inspections, port gate-in, bill of lading issuance, and final destination hand-over, we ensure smooth and worry-free international commerce.',
    iconName: 'ArrowLeftRight',
    badge: 'Cross-Border',
    image: projectCargoImage,
    bulletPoints: [
      'Seamless coordination of both import and export trade shipments',
      'Pre-shipment planning, supplier liaison, and origin inspection checks',
      'Complete handling of customs formalities, port hand-offs, and final delivery',
      'Real-time cargo tracking and milestone communication'
    ],
    keyHighlights: ['Pre-shipment planning', 'Complete trade coordination', 'Statutory clearances', 'Global partner network']
  },
  {
    id: 'door-to-door',
    title: 'Door-to-Door Logistics Solutions',
    shortDesc: 'Integrated logistics services that cover pickup, freight movement, customs clearance, and final delivery for hassle-free operations.',
    fullDesc: 'Single-source responsibility for your cargo from the shipper’s factory floor directly to the receiver’s warehouse dock. We integrate domestic trucking, intermediate warehousing, port drayage, customs clearance, and last-mile delivery into a unified seamless pipeline.',
    iconName: 'Truck',
    badge: 'Turnkey Solution',
    image: warehouseImage,
    bulletPoints: [
      'Integrated logistics services covering pickup from origin factory or warehouse',
      'Multi-modal freight movement (air, sea, road, and rail connectivity)',
      'Smooth customs clearance at both origin and destination borders',
      'Hassle-free final delivery right at the consignee’s doorstep'
    ],
    keyHighlights: ['Single point of contact', 'Factory-to-warehouse delivery', 'First & last mile transport', 'Risk-free handover']
  },
  {
    id: 'cargo-documentation',
    title: 'Cargo Documentation and Compliance',
    shortDesc: 'Accurate preparation and verification of shipping documents to ensure smooth clearance and reduced transit delays.',
    fullDesc: 'Flawless document preparation prevents costly port detentions and customs holds. We handle Bills of Lading, Air Waybills, Commercial Invoices, Packing Lists, Certificates of Origin, Bank L/C document scrutiny, and hazardous/special cargo declarations with meticulous accuracy.',
    iconName: 'FileText',
    badge: 'Zero Delay',
    image: cargoDocImage,
    bulletPoints: [
      'Accurate preparation and rigorous verification of shipping documents',
      'Prevention of customs discrepancies, demurrage, and port transit delays',
      'Certificates of Origin, legalization, Chamber of Commerce certifications',
      'Regulatory compliance checks for specialized, DG, and controlled goods'
    ],
    keyHighlights: ['Error-free documentation', 'Bank L/C compliance', 'CoO & legalization', 'Demurrage prevention']
  },
  {
    id: 'temperature-controlled',
    title: 'Temperature Controlled and Packing Solutions',
    shortDesc: 'Temperature-related shipments, along with packaging solutions, handled up to -20 °C in air cargo and 20ft / 40ft refrigerated containers.',
    fullDesc: 'Critical cold-chain expertise designed for pharmaceuticals, clinical trial materials, biotechnology, active pharmaceutical ingredients (APIs), specialty chemicals, and perishable goods. We deploy advanced active and passive thermal packaging, dry ice, gel packs, and state-of-the-art 20ft & 40ft reefer containers maintaining temperatures down to -20 °C.',
    iconName: 'ThermometerSnowflake',
    badge: 'Down to -20 °C',
    image: tempControlledImage,
    bulletPoints: [
      'Temperature-sensitive shipments handled seamlessly down to -20 °C',
      'Refrigerated reefer containers in standard 20ft and 40ft high-cube formats',
      'Air cargo cold chain with thermal blankets, dry ice, and validated packaging',
      'Continuous data logging, temp monitoring, and cold-chain compliance'
    ],
    keyHighlights: ['Maintains down to -20 °C', '20ft & 40ft reefer containers', 'Validated pharma packaging', 'Continuous temperature logging']
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'leadership',
    title: 'Experienced Leadership with Proven Industry Knowledge',
    desc: 'Founded on 25 years of hands-on logistics mastery, guided by Mr. Somireddy Ganta to navigate complex trade scenarios.',
    icon: 'Award'
  },
  {
    id: 'air-customs',
    title: 'Professional Handling of Air Freight and Customs Clearance',
    desc: 'Specialized focus on high-velocity air freight lanes and seamless, compliant customs brokerage across all ports.',
    icon: 'ShieldCheck'
  },
  {
    id: 'compliance',
    title: 'Strong Focus on Compliance and Risk Management',
    desc: 'Strict adherence to Indian customs laws, international maritime standards, and robust risk-mitigation protocols.',
    icon: 'CheckCircle2'
  },
  {
    id: 'personalized',
    title: 'Personalized Service Approach for Every Client',
    desc: 'Tailored logistics architectures designed around your unique cargo specifications, timelines, and commercial goals.',
    icon: 'UserCheck'
  },
  {
    id: 'transparency',
    title: 'Reliable Communication and Operational Transparency',
    desc: 'Clear, proactive milestone updates at every stage of the shipment lifecycle with no hidden surprises.',
    icon: 'MessagesSquare'
  }
];

export const OUR_STRENGTHS: Strength[] = [
  {
    id: 's1',
    title: '25 Years of Hands-on Industry Experience',
    description: 'Deep operational expertise built across two and a half decades of freight forwarding and port handling.',
    icon: 'History'
  },
  {
    id: 's2',
    title: 'Strong Knowledge of Customs Laws and Procedures',
    description: 'Unmatched proficiency in Indian Customs tariffs, notifications, duty structures, and regulatory clearances.',
    icon: 'Scale'
  },
  {
    id: 's3',
    title: 'Customer-Centric and Transparent Operations',
    description: 'Direct communication, real-time shipment visibility, and honest operational partnerships.',
    icon: 'Users'
  },
  {
    id: 's4',
    title: 'Timely Execution with Attention to Detail',
    description: 'Precision in cargo planning, vessel booking, document vetting, and rapid port dispatch.',
    icon: 'Clock'
  },
  {
    id: 's5',
    title: 'Competitive Pricing with Reliable Service Delivery',
    description: 'Optimized freight tariffs and cost structures without compromising on safety or speed.',
    icon: 'TrendingDown'
  }
];

export const INDUSTRIES_SERVED: Industry[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing, Infra & Engineering',
    desc: 'Heavy machinery, capital equipment, infrastructure project cargo, construction materials, and raw industrial commodities.',
    examples: ['Heavy Machinery', 'Fabricated Steel', 'Project Cargo', 'Industrial Tools'],
    icon: 'Factory',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pharma',
    name: 'Pharmaceuticals & Healthcare',
    desc: 'Temperature-controlled active pharmaceutical ingredients (APIs), finished formulations, clinical diagnostics, and medical devices down to -20 °C.',
    examples: ['Temperature-Sensitive APIs', 'Vaccines & Biologics', 'Formulations', 'Medical Equipment'],
    icon: 'HeartPulse',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fmcg',
    name: 'FMCG & Consumer Goods',
    desc: 'High-turnover packaged foods, personal care products, beverages, and retail merchandise requiring swift distribution cycles.',
    examples: ['Packaged Food & Beverages', 'Personal Care', 'Home Essentials', 'Retail Goods'],
    icon: 'ShoppingBag',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'electronics',
    name: 'Electronics & Technology',
    desc: 'High-value semiconductor parts, consumer electronics, telecommunications hardware, and sensitive IT equipment with specialized ESD protection.',
    examples: ['Semiconductors & Chips', 'Telecom Hardware', 'Circuit Boards', 'Consumer Tech'],
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'automotive',
    name: 'Automotive & Industrial Cargo',
    desc: 'OEM vehicle components, automotive spare parts, tier-1 assemblies, engine parts, and just-in-time (JIT) production line logistics.',
    examples: ['Automobile Spare Parts', 'Engine Assemblies', 'Chassis Components', 'Tires & Batteries'],
    icon: 'Car',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
  }
];

export const OPERATIONAL_BRANCHES: Branch[] = [
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    region: 'South',
    type: 'Major Air & Sea Hub',
    keyPortsServed: ['RGIA Air Cargo Complex', 'Sanathnagar ICD', 'Krishnapatnam Port Connect'],
    address: 'SEAIR WORLD LOGISTICS Central Hub, Hyderabad, Telangana - 500001',
    phone: '+91 7993142771',
    email: 'seairworldlogistics@gmail.com',
    specialty: 'Headquarters & Central Coordination Hub, Pharma Cold Chain & Air Freight Excellence',
    coordinates: { x: 50, y: 58 }
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    region: 'West',
    type: 'Seaport Gateway',
    keyPortsServed: ['Jawaharlal Nehru Port (JNPT / Nhava Sheva)', 'Mumbai Port', 'CSMIA Air Cargo'],
    address: 'Air Cargo & Maritime Logistics Center, Andheri / Navi Mumbai, Maharashtra',
    phone: '+91 7993142771',
    email: 'seairworldlogistics@gmail.com',
    specialty: 'Major Gateway for Western India, Ocean FCL/LCL & Customs House Agency (CHA)',
    coordinates: { x: 32, y: 54 }
  },
  {
    id: 'chennai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    region: 'South',
    type: 'Seaport Gateway',
    keyPortsServed: ['Chennai Port', 'Ennore (Kamarajar) Port', 'Kattupalli Port', 'Chennai Air Cargo'],
    address: 'Port & Air Cargo Zone, Rajaji Salai / Guindy, Chennai, Tamil Nadu',
    phone: '+91 7993142771',
    email: 'seairworldlogistics@gmail.com',
    specialty: 'Automotive Corridor & Heavy Engineering Export Gateway',
    coordinates: { x: 54, y: 72 }
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    state: 'Karnataka',
    region: 'South',
    type: 'Inland ICD Hub',
    keyPortsServed: ['Kempegowda Int. Airport (BLR Cargo)', 'Whitefield ICD', 'New Mangalore Port Connect'],
    address: 'Logistics Park, Devanahalli / Whitefield, Bangalore, Karnataka',
    phone: '+91 7993142771',
    email: 'seairworldlogistics@gmail.com',
    specialty: 'Electronics, Aerospace, High-Tech Components & Express Air Cargo',
    coordinates: { x: 44, y: 70 }
  },
  {
    id: 'delhi',
    name: 'Delhi NCR',
    state: 'Delhi',
    region: 'North',
    type: 'Major Air & Sea Hub',
    keyPortsServed: ['IGI Airport Cargo Complex', 'Tughlakabad (TKD) ICD', 'Dadri ICD', 'Garhi Harsaru ICD'],
    address: 'Air Cargo Terminal Area & ICD Complex, Delhi NCR',
    phone: '+91 7993142771',
    email: 'seairworldlogistics@gmail.com',
    specialty: 'Northern India Gateway, Garment & Engineering Export Clearance',
    coordinates: { x: 42, y: 25 }
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    state: 'West Bengal',
    region: 'East',
    type: 'Seaport Gateway',
    keyPortsServed: ['Syama Prasad Mookerjee (Kolkata) Port', 'Haldia Port', 'NSCBI Air Cargo'],
    address: 'Strand Road / Port Area, Kolkata, West Bengal',
    phone: '+91 7993142771',
    email: 'seairworldlogistics@gmail.com',
    specialty: 'Eastern & North-Eastern Gateway, Minerals, Tea & Jute Logistics',
    coordinates: { x: 74, y: 44 }
  },
  {
    id: 'vizag',
    name: 'Vizag (Visakhapatnam)',
    state: 'Andhra Pradesh',
    region: 'South',
    type: 'Seaport Gateway',
    keyPortsServed: ['Visakhapatnam Port (VPT)', 'Gangavaram Port', 'Vizag Air Cargo'],
    address: 'Port Area & Harbor Park, Visakhapatnam, Andhra Pradesh',
    phone: '+91 7993142771',
    email: 'seairworldlogistics@gmail.com',
    specialty: 'Deepwater Marine Operations, Seafood/Reefer Export & Bulk Cargo',
    coordinates: { x: 62, y: 56 }
  },
  {
    id: 'guntur',
    name: 'Guntur',
    state: 'Andhra Pradesh',
    region: 'South',
    type: 'Commercial & Industrial Hub',
    keyPortsServed: ['Krishnapatnam Port Connect', 'Machilipatnam / Kakinada Corridor'],
    address: 'Commercial Trade & Agro Hub, Guntur, Andhra Pradesh',
    phone: '+91 7993142771',
    email: 'seairworldlogistics@gmail.com',
    specialty: 'Agri-Commodities (Chilli, Spices, Tobacco, Cotton) & Export Handling',
    coordinates: { x: 55, y: 62 }
  },
  {
    id: 'cochin',
    name: 'Cochin (Kochi)',
    state: 'Kerala',
    region: 'South',
    type: 'Seaport Gateway',
    keyPortsServed: ['Cochin International Container Transshipment Terminal (ICTT Vallarpadam)', 'Cochin Air Cargo'],
    address: 'Willingdon Island / Vallarpadam, Kochi, Kerala',
    phone: '+91 7993142771',
    email: 'seairworldlogistics@gmail.com',
    specialty: 'International Transshipment, Marine Products, Spices & Coir Logistics',
    coordinates: { x: 41, y: 82 }
  },
  {
    id: 'mundra',
    name: 'Mundra',
    state: 'Gujarat',
    region: 'West',
    type: 'Seaport Gateway',
    keyPortsServed: ['Mundra Port (APSEZ)', 'Kandla (Deendayal) Port', 'Pipavav Port Connect'],
    address: 'Port Commercial Zone, Mundra, Kutch, Gujarat',
    phone: '+91 7993142771',
    email: 'seairworldlogistics@gmail.com',
    specialty: 'Largest Private Commercial Port Operations, Massive FCL / Bulk & Reefer Hub',
    coordinates: { x: 18, y: 42 }
  },
  {
    id: 'krishnapatnam',
    name: 'Krishnapatnam',
    state: 'Andhra Pradesh',
    region: 'South',
    type: 'Seaport Gateway',
    keyPortsServed: ['Krishnapatnam Port (KPCT)', 'Nellore Industrial Corridor'],
    address: 'Port Area, Muthukur Mandal, Krishnapatnam, Andhra Pradesh',
    phone: '+91 7993142771',
    email: 'seairworldlogistics@gmail.com',
    specialty: 'Deep Draft All-Weather Seaport Handling Containers, Breakbulk & Coal/Minerals',
    coordinates: { x: 56, y: 66 }
  },
  {
    id: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    region: 'West',
    type: 'Inland ICD Hub',
    keyPortsServed: ['Talegaon ICD', 'Chakan Industrial Hub', 'JNPT Corridor Direct Connect'],
    address: 'Chakan / Talegaon Industrial Corridor, Pune, Maharashtra',
    phone: '+91 7993142771',
    email: 'seairworldlogistics@gmail.com',
    specialty: 'Automobile Manufacturing & Precision Engineering Just-In-Time Freight',
    coordinates: { x: 36, y: 58 }
  }
];

export const MAJOR_PORTS: Port[] = [
  { name: 'Pipavav Port', state: 'Gujarat', coast: 'West Coast', type: 'Major Container Port' },
  { name: 'Magdalla Port', state: 'Gujarat', coast: 'West Coast', type: 'Specialized Port' },
  { name: 'Mumbai Port', state: 'Maharashtra', coast: 'West Coast', type: 'Major Container Port' },
  { name: 'Dighi Port', state: 'Maharashtra', coast: 'West Coast', type: 'Specialized Port' },
  { name: 'Jawaharlal Nehru Port (JNPT)', state: 'Maharashtra', coast: 'West Coast', type: 'Major Container Port' },
  { name: 'Jaigarh Port', state: 'Maharashtra', coast: 'West Coast', type: 'Deepwater Port' },
  { name: 'Mormugao Port', state: 'Goa', coast: 'West Coast', type: 'Major Container Port' },
  { name: 'New Mangalore Port', state: 'Karnataka', coast: 'West Coast', type: 'Major Container Port' },
  { name: 'Cochin Port (Vallarpadam)', state: 'Kerala', coast: 'West Coast', type: 'Major Container Port' },
  { name: 'Vizhinjam Port', state: 'Kerala', coast: 'West Coast', type: 'Deepwater Port' },
  { name: 'Tuticorin (V.O.C) Port', state: 'Tamil Nadu', coast: 'East Coast', type: 'Major Container Port' },
  { name: 'Karaikal Port', state: 'Puducherry', coast: 'East Coast', type: 'Specialized Port' },
  { name: 'Chennai Port', state: 'Tamil Nadu', coast: 'East Coast', type: 'Major Container Port' },
  { name: 'Ennore (Kamarajar) Port', state: 'Tamil Nadu', coast: 'East Coast', type: 'Major Container Port' },
  { name: 'Krishnapatnam Port', state: 'Andhra Pradesh', coast: 'East Coast', type: 'Deepwater Port' },
  { name: 'Kakinada Port', state: 'Andhra Pradesh', coast: 'East Coast', type: 'Deepwater Port' },
  { name: 'Gangavaram Port', state: 'Andhra Pradesh', coast: 'East Coast', type: 'Deepwater Port' },
  { name: 'Vishakhapatnam Port', state: 'Andhra Pradesh', coast: 'East Coast', type: 'Major Container Port' },
  { name: 'Paradip Port', state: 'Odisha', coast: 'East Coast', type: 'Major Container Port' },
  { name: 'Dhamra Port', state: 'Odisha', coast: 'East Coast', type: 'Deepwater Port' }
];

export const DEMO_TRACKING_DATA: Record<string, TrackingRecord> = {
  'SWL-2026-8841': {
    trackingNumber: 'SWL-2026-8841',
    serviceType: 'Sea Freight FCL (40ft Reefer -20°C)',
    origin: 'Hyderabad, India via Krishnapatnam Port',
    destination: 'Rotterdam, Netherlands',
    shipper: 'BioPharma India Ltd',
    consignee: 'EuroPharma Distribution B.V.',
    status: 'In Transit',
    estimatedDelivery: '2026-08-28',
    carrierId: 'MSC Oscar / Voy 204E',
    weight: '18,500 KG',
    pieces: 1,
    milestones: [
      { step: 'Order Booked & Cold Storage Pre-cooling', status: 'completed', date: '2026-08-10', location: 'Hyderabad Hub', description: 'Container pre-cooled to -20°C and cargo packed with data loggers.' },
      { step: 'Customs Clearance & Documentation Passed', status: 'completed', date: '2026-08-12', location: 'Krishnapatnam Port ICD', description: 'Bill of Entry / Shipping Bill cleared with Indian Customs.' },
      { step: 'Port Gate-in & Vessel Loading Completed', status: 'completed', date: '2026-08-14', location: 'Krishnapatnam Port Terminal', description: 'Container loaded onto vessel MSC Oscar. Reefer power active.' },
      { step: 'In Ocean Transit (Red Sea / Suez Route)', status: 'current', date: '2026-08-15', location: 'Arabian Sea / Transit Corridor', description: 'Vessel en route at speed 18.2 knots. Temperature holding steady at -20.2°C.' },
      { step: 'Port Arrival & Final Delivery', status: 'pending', date: '2026-08-28', location: 'Rotterdam Gateway', description: 'Customs clearance at destination port and direct cold-truck delivery.' }
    ]
  },
  'SWL-AIR-9921': {
    trackingNumber: 'SWL-AIR-9921',
    serviceType: 'Air Freight Priority Express',
    origin: 'Bangalore (BLR Cargo), India',
    destination: 'Frankfurt (FRA Cargo), Germany',
    shipper: 'ElectroTech Systems Pvt Ltd',
    consignee: 'Global Avionics GmbH',
    status: 'Customs Cleared',
    estimatedDelivery: '2026-08-17',
    carrierId: 'Lufthansa Cargo LH8221 / AWB 020-9482103',
    weight: '640 KG',
    pieces: 4,
    milestones: [
      { step: 'Cargo Handover & Security Screening', status: 'completed', date: '2026-08-14', location: 'BLR Air Cargo Complex', description: 'Cargo received, weighed, X-ray inspected, and palletized.' },
      { step: 'Customs Clearance & Duty Endorsement', status: 'completed', date: '2026-08-15', location: 'BLR Air Customs', description: 'LEO (Let Export Order) issued by Customs appraiser.' },
      { step: 'Flight Boarding / Aircraft Departed', status: 'current', date: '2026-08-15', location: 'Kempegowda Int Airport', description: 'Flight LH8221 departed for Frankfurt Hub.' },
      { step: 'Destination Clearance & Delivery', status: 'pending', date: '2026-08-17', location: 'Frankfurt Cargo City', description: 'Import customs clearance and door delivery to consignee.' }
    ]
  },
  'SWL-SEA-5042': {
    trackingNumber: 'SWL-SEA-5042',
    serviceType: 'Sea Freight Forwarding (2x40ft HC)',
    origin: 'Mumbai (JNPT Port), India',
    destination: 'Jebel Ali Port, Dubai, UAE',
    shipper: 'Apex Engineering Works',
    consignee: 'Middle East Construction LLC',
    status: 'Port Gate-In',
    estimatedDelivery: '2026-08-21',
    carrierId: 'Maersk Camden / Voy 401W',
    weight: '34,200 KG',
    pieces: 2,
    milestones: [
      { step: 'Factory Stuffing & Drayage', status: 'completed', date: '2026-08-13', location: 'Pune Industrial Area', description: 'Containers stuffed and sealed with RFID electronic e-seals.' },
      { step: 'JNPT Port Gate-in & Form-13 Passed', status: 'completed', date: '2026-08-14', location: 'Nhava Sheva (JNPT) Terminal', description: 'Gate-in passed and staged for container gantry crane loading.' },
      { step: 'Customs Verification & LEO Approval', status: 'current', date: '2026-08-15', location: 'JNPT Customs House', description: 'Customs clearance processed under RMS fast track.' },
      { step: 'Ocean Departure & Gulf Transit', status: 'pending', date: '2026-08-16', location: 'Arabian Gulf', description: 'Scheduled departure to Jebel Ali Terminal 2.' },
      { step: 'Destination Delivery', status: 'pending', date: '2026-08-21', location: 'Dubai, UAE', description: 'Customs release and transport to project site.' }
    ]
  }
};

export const REEFER_CONTAINER_SPECS = [
  {
    name: '20ft Refrigerated Container',
    tempRange: '+25°C to -25°C (Maintains up to -20°C easily)',
    internalLength: '5.44 m (17.8 ft)',
    internalWidth: '2.29 m (7.5 ft)',
    internalHeight: '2.27 m (7.4 ft)',
    payload: '27,400 kg',
    capacityCbm: '28.3 CBM',
    bestFor: 'High-value pharmaceuticals, clinical active ingredients, specialty seafood, precision reagents'
  },
  {
    name: '40ft High Cube Reefer Container',
    tempRange: '+25°C to -30°C (Continuous -20°C capability)',
    internalLength: '11.58 m (38.0 ft)',
    internalWidth: '2.29 m (7.5 ft)',
    internalHeight: '2.55 m (8.3 ft)',
    payload: '29,500 kg',
    capacityCbm: '67.5 CBM',
    bestFor: 'Bulk pharmaceutical shipments, large volume cold-chain exports, frozen fruits, dairy & perishables'
  },
  {
    name: 'Air Cargo Temperature Controlled ULD',
    tempRange: 'Envirotainer & Dry-Ice validated (-20°C, 2-8°C, 15-25°C)',
    internalLength: 'RKN / RAP Container Formats',
    internalWidth: 'Airlines Standard Aircraft Lower Deck',
    internalHeight: 'Fits Boeing 777F, 747-8F, Airbus A350/A330',
    payload: 'Up to 6,000 kg per unit',
    capacityCbm: '4.8 to 8.2 CBM',
    bestFor: 'Time-critical clinical vaccines, live cell therapies, emergency pharmaceutical batches'
  }
];
