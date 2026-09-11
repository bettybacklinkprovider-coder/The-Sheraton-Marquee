import React from 'react';
import {
  Crown,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  ShieldCheck,
  Award,
  Sparkles,
  Heart,
} from 'lucide-react';
import { PageId, Language } from '../types';
import { MARQUEE_INFO } from '../data/marqueeData';
import { SheratonLogo } from './SheratonLogo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  language: Language;
  onOpenBooking: () => void;
  onOpenBrochure: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  language,
  onOpenBooking,
  onOpenBrochure,
}) => {
  const isUrdu = language === 'ur';

  const quickLinks: { id: PageId; label: string; urduLabel: string }[] = [
    { id: 'home', label: 'Home Page', urduLabel: 'ہوم پیج' },
    { id: 'about', label: 'About Sheraton Marquee', urduLabel: 'ہمارے بارے میں' },
    { id: 'halls', label: 'Grand Halls & Lawns', urduLabel: 'ہالز اور اوپن لانز' },
    { id: 'services', label: 'Wedding & Catering', urduLabel: 'شاہی کیٹرنگ و خدمات' },
    { id: 'packages', label: 'Pricing & Packages', urduLabel: 'پیکیجز اور ریٹس' },
    { id: 'gallery', label: 'Photo & Video Gallery', urduLabel: 'فوٹو و ویڈیو گیلری' },
    { id: 'testimonials', label: 'Client Reviews', urduLabel: 'کسٹمر ریویوز' },
    { id: 'faq', label: 'Frequently Asked Questions', urduLabel: 'اکثر پوچھے گئے سوالات' },
    { id: 'contact', label: 'Contact & Hall Availability', urduLabel: 'رابطہ و بکنگ' },
  ];

  return (
    <footer className="bg-[#0A0705] text-[#FAF7F2] border-t-2 border-[#D4AF37]/30 relative overflow-hidden">
      {/* Subtle background decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-[#6B1724]/20 to-transparent blur-3xl pointer-events-none" />

      {/* Top Banner with Quick Contact Strip */}
      <div className="border-b border-[#D4AF37]/20 bg-[#120B08]/80 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="text-center lg:text-left">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold gold-gradient-text">
              {isUrdu ? 'اپنی تاریخ محفوظ کریں اور بکنگ کروائیں' : 'Plan Your Royal Celebration Today'}
            </h3>
            <p className="text-sm text-[#C5A059] mt-1">
              {isUrdu
                ? 'ساہیانوالہ ایکسپریس وے، فیصل آباد پر شاندار شادی ہالز کی پیشگی بکنگ'
                : 'Experience the benchmark of luxury hospitality on Sahianwala Expressway, Faisalabad.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${MARQUEE_INFO.phone}`}
              className="flex items-center gap-2 px-5 py-3 rounded bg-[#6B1724] hover:bg-[#8B1E30] text-[#FAF7F2] font-semibold text-sm border border-[#D4AF37]/40 shadow-lg transition-all"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call: 0321-8662726</span>
            </a>
            <a
              href={`https://wa.me/${MARQUEE_INFO.whatsapp}?text=Assalam-o-Alaikum!%20I%20want%20to%20inquire%20about%20event%20booking%20at%20The%20Sheraton%20Marquee%20Faisalabad.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded bg-[#25D366] hover:bg-[#1EBE5D] text-[#0D0907] font-semibold text-sm shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#0D0907]" />
              <span>WhatsApp Direct</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-5 py-3 rounded bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0907] font-bold text-sm tracking-wider uppercase hover:brightness-110 shadow-lg transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isUrdu ? 'آن لائن بکنگ' : 'Book Now'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 lg:gap-x-12">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4 md:col-span-12 lg:col-span-4 lg:pr-8">
            <div
              onClick={() => onNavigate('home')}
              className="cursor-pointer inline-block"
            >
              <SheratonLogo size="lg" />
            </div>

            <p className="text-xs text-[#C5BDB2] leading-relaxed">
              {isUrdu
                ? 'دی شیریٹن مارکی فیصل آباد کا سب سے بڑا، پرشکوہ اور جدید سہولیات سے آراستہ شادی ہال وینیو ہے جہاں ہر تقریب کو شاہی معیار پر سجایا جاتا ہے۔'
                : 'Faisalabad’s flagship luxury banquet estate featuring 3 magnificent venues, 3,500+ guest capacity, 5-star royal catering, and dual 1000kVA power security.'}
            </p>

            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>100% Halal 5-Star Kitchen Standards</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-medium mt-1">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>Punjab Food Authority Approved</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-cinzel text-sm font-bold text-[#F9E7B9] uppercase tracking-widest border-b border-[#D4AF37]/30 pb-2 mb-4">
              {isUrdu ? 'اہم صفحات' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.slice(0, 6).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#C5BDB2] hover:text-[#D4AF37] transition-colors cursor-pointer flex items-start gap-1.5 text-left"
                  >
                    <span className="text-[#D4AF37]">›</span>
                    <span>{isUrdu ? link.urduLabel : link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Event Packages & Venues */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-cinzel text-sm font-bold text-[#F9E7B9] uppercase tracking-widest border-b border-[#D4AF37]/30 pb-2 mb-4">
              {isUrdu ? 'ہالز اور پیکیجز' : 'Venues & Packages'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('halls')}
                  className="text-[#C5BDB2] hover:text-[#D4AF37] transition-colors cursor-pointer text-left"
                >
                  <span className="text-[#D4AF37] font-semibold">The Grand Kohinoor</span> (2,000 Capacity)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('halls')}
                  className="text-[#C5BDB2] hover:text-[#D4AF37] transition-colors cursor-pointer text-left"
                >
                  <span className="text-[#D4AF37] font-semibold">The Royal Imperial Lawn</span> (1,600 Capacity)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('halls')}
                  className="text-[#C5BDB2] hover:text-[#D4AF37] transition-colors cursor-pointer text-left"
                >
                  <span className="text-[#D4AF37] font-semibold">The Sheesh Mahal VIP</span> (550 Capacity)
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onNavigate('packages')}
                  className="text-[#C5BDB2] hover:text-[#D4AF37] transition-colors cursor-pointer text-left"
                >
                  • Silver Pearl Wedding Tier (PKR 2,450)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('packages')}
                  className="text-[#C5BDB2] hover:text-[#D4AF37] transition-colors cursor-pointer text-left"
                >
                  • Gold Royale Luxury Tier (PKR 3,450)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('packages')}
                  className="text-[#C5BDB2] hover:text-[#D4AF37] transition-colors cursor-pointer text-left"
                >
                  • Platinum Mughal Crown (PKR 4,650)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Contacts */}
          <div className="space-y-3 md:col-span-4 lg:col-span-3">
            <h4 className="font-cinzel text-sm font-bold text-[#F9E7B9] uppercase tracking-widest border-b border-[#D4AF37]/30 pb-2 mb-4">
              {isUrdu ? 'پتہ اور رابطہ' : 'Location & Contacts'}
            </h4>

            <div className="flex items-start gap-2.5 text-xs text-[#C5BDB2]">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>
                {isUrdu ? MARQUEE_INFO.urduAddress : MARQUEE_INFO.address}
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-[#C5BDB2]">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <a href={`tel:${MARQUEE_INFO.phone}`} className="hover:text-[#D4AF37]">
                {MARQUEE_INFO.phone} (Direct Booking Hotline)
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-[#C5BDB2]">
              <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>{MARQUEE_INFO.officeHours}</span>
            </div>

            <div className="pt-3">
              <a
                href={MARQUEE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-xs text-[#F9E7B9] hover:bg-[#D4AF37]/30 transition-all"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="mt-12 pt-6 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A0988E]">
          <p>© 2026 The Sheraton Marquee Faisalabad. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>Sahianwala Expressway, Faisalabad</span>
            <span>•</span>
            <span className="text-[#D4AF37]">Official Contact: 0321-8662726</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
