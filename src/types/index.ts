export interface CoreService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  bulletPoints: string[];
  keyHighlights: string[];
  image: string;
  badge?: string;
}

export interface Branch {
  id: string;
  name: string;
  state: string;
  region: 'South' | 'West' | 'North' | 'East';
  type: 'Major Air & Sea Hub' | 'Seaport Gateway' | 'Inland ICD Hub' | 'Commercial & Industrial Hub';
  keyPortsServed: string[];
  address: string;
  phone: string;
  email: string;
  specialty: string;
  coordinates: { x: number; y: number }; // Relative coordinates for interactive map
}

export interface Port {
  name: string;
  state: string;
  coast: 'West Coast' | 'East Coast';
  type: 'Major Container Port' | 'Deepwater Port' | 'Specialized Port' | 'Private/Specialized Port';
}

export interface Industry {
  id: string;
  name: string;
  desc: string;
  examples: string[];
  icon: string;
  image: string;
}

export interface Strength {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface QuoteRequest {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceType: string;
  origin: string;
  destination: string;
  cargoType: string;
  weightKg: number;
  volumeCbm: number;
  temperatureRequirement?: string;
  specialInstructions?: string;
}

export interface TrackingMilestone {
  step: string;
  status: 'completed' | 'current' | 'pending';
  date: string;
  location: string;
  description: string;
}

export interface TrackingRecord {
  trackingNumber: string;
  serviceType: string;
  origin: string;
  destination: string;
  shipper: string;
  consignee: string;
  status: 'Booked' | 'Customs Cleared' | 'In Transit' | 'Port Gate-In' | 'Delivered';
  estimatedDelivery: string;
  carrierId: string;
  weight: string;
  pieces: number;
  milestones: TrackingMilestone[];
}
