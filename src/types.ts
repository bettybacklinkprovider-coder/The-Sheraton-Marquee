export type Language = 'en' | 'ur';

export type PageId =
  | 'home'
  | 'about'
  | 'halls'
  | 'services'
  | 'packages'
  | 'gallery'
  | 'testimonials'
  | 'blog'
  | 'faq'
  | 'contact';

export interface Hall {
  id: string;
  name: string;
  urduName: string;
  tagline: string;
  urduTagline: string;
  type: 'indoor' | 'outdoor' | 'vip';
  capacity: {
    seated: number;
    floating: number;
    minGuests: number;
  };
  areaSqFt: number;
  acHeating: string;
  ceilingHeight: string;
  powerBackup: string;
  parkingSpots: number;
  colorTheme: string;
  hallCode: string;
  features: { en: string; ur: string }[];
  description: string;
  urduDescription: string;
  idealFor: string[];
  floorPlanHotspots?: {
    name: string;
    description: string;
    coords: { x: number; y: number };
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  urduTitle: string;
  category: 'wedding' | 'corporate' | 'catering' | 'decor' | 'amenity';
  shortDesc: string;
  urduShortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  colorTheme?: string;
  specs?: string;
  features: string[];
}

export interface PackageTier {
  id: string;
  name: string;
  urduName: string;
  pricePerHead: number; // PKR
  minGuests: number;
  badge?: string;
  popular?: boolean;
  description: string;
  urduDescription: string;
  menuHighlights: string[];
  decorFeatures: string[];
  complimentary: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  urduTitle: string;
  category: 'wedding' | 'mehndi' | 'decor' | 'food' | 'drone';
  caption: string;
  hallName?: string;
  hallBadge?: string;
  themeColor: string;
  decorPalette: string[];
  decorStyle: string;
  image?: string;
  specs: {
    stage: string;
    florals: string;
    lighting: string;
  };
}

export interface ReviewItem {
  id: string;
  clientName: string;
  urduClientName: string;
  eventType: string;
  rating: number;
  date: string;
  comment: string;
  urduComment: string;
  guestCount: number;
  hall: string;
  initials: string;
}

export interface BlogPost {
  id: string;
  title: string;
  urduTitle: string;
  excerpt: string;
  urduExcerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  readBadge: string;
  themeColor?: string;
  content: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  urduQuestion: string;
  answer: string;
  urduAnswer: string;
  category: 'booking' | 'catering' | 'logistics' | 'policies';
}

export interface CustomBuilderState {
  guestCount: number;
  hallId: string;
  timeSlot: 'lunch' | 'dinner';
  baseTier: 'silver' | 'gold' | 'platinum';
  selectedStarters: string[];
  selectedMains: string[];
  selectedBreads: string[];
  selectedDesserts: string[];
  selectedAddOns: string[];
  specialRequests: string;
}

export interface BookingFormValues {
  fullName: string;
  phone: string;
  whatsapp: string;
  email: string;
  eventDate: string;
  timeSlot: 'lunch' | 'dinner';
  eventType: string;
  hallId: string;
  guestCount: number;
  packageTier: string;
  message: string;
}
