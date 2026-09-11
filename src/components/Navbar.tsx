import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Sparkles,
  Calendar,
  Languages,
  Crown,
  MapPin,
  Clock,
} from 'lucide-react';
import { PageId, Language } from '../types';
import { MARQUEE_INFO } from '../data/marqueeData';
import { SheratonLogo } from './SheratonLogo';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  language: Language;
  onToggleLanguage: () => void;
  onOpenBooking: () => void;
  onOpenBrochure: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  language,
  onToggleLanguage,
  onOpenBooking,
  onOpenBrochure,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isUrdu = language === 'ur';

  const navLinks: { id: PageId; label: string; urduLabel: string; secondary?: boolean }[] = [
    { id: 'home', label: 'Home', urduLabel: 'ہوم' },
    { id: 'about', label: 'About Us', urduLabel: 'ہمارے بارے میں' },
    { id: 'halls', label: 'Halls & Venues', urduLabel: 'ہالز و لانز' },
    { id: 'services', label: 'Services', urduLabel: 'خدمات' },
    { id: 'packages', label: 'Packages & Pricing', urduLabel: 'پیکیجز اور ریٹس' },
    { id: 'gallery', label: 'Gallery', urduLabel: 'گیلری' },
    { id: 'testimonials', label: 'Reviews', urduLabel: 'تاثرات', secondary: true },
    { id: 'blog', label: 'Blog', urduLabel: 'بلاگ', secondary: true },
    { id: 'faq', label: 'FAQ', urduLabel: 'سوالات', secondary: true },
    { id: 'contact', label: 'Contact & Booking', urduLabel: 'رابطہ و بکنگ' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Royal Announcement Bar */}
      <div className="bg-gradient-to-r from-[#2A080C] via-[#4A0E17] to-[#2A080C] border-b border-[#D4AF37]/30 text-xs py-1.5 px-4 sm:px-6 lg:px-8 text-[#FAF7F2]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left whitespace-nowrap overflow-hidden">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            <span className={`whitespace-nowrap ${isUrdu ? 'font-urdu text-sm' : 'font-medium tracking-wide'}`}>
              {isUrdu
                ? '✨ ۲۰۲۶ شادی سیزن کی بکنگ جاری ہے! گولڈ و پلاٹینم پیکیجز پر خصوصی ڈسکاؤنٹ'
                : '✨ 2026 Wedding Season Bookings Open! Avail up to 15% Early Bird Privilege on Royal Packages'}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs whitespace-nowrap shrink-0">
            <a
              href={`tel:${MARQUEE_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span className="font-semibold whitespace-nowrap">{MARQUEE_INFO.phone}</span>
            </a>
            <span className="hidden md:inline-block text-[#D4AF37]/40">|</span>
            <div className="hidden md:flex items-center gap-1 text-[#E0D7C6] whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span className="whitespace-nowrap">Sahianwala Expressway, Faisalabad</span>
            </div>
            <button
              onClick={onToggleLanguage}
              className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#F9E7B9] hover:bg-[#D4AF37]/30 transition-all cursor-pointer font-medium whitespace-nowrap shrink-0"
              title="Switch Language"
            >
              <Languages className="w-3 h-3 shrink-0" />
              <span className="whitespace-nowrap">{isUrdu ? 'English' : 'اردو'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <nav className="bg-[#0F0A08]/95 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-2">
            {/* Brand Logo & Royal Crest */}
            <div
              onClick={() => handleNavClick('home')}
              className="cursor-pointer group select-none shrink-0 py-1"
            >
              <SheratonLogo size="md" />
            </div>

            {/* Desktop Navigation Links - Strictly in a single line */}
            <div className="hidden xl:flex items-center gap-0.5 2xl:gap-1.5 shrink min-w-0">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-1.5 2xl:px-2.5 py-1.5 rounded-md text-[10px] xl:text-[11px] 2xl:text-xs font-medium tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                      link.secondary ? 'hidden 2xl:inline-block' : 'inline-block'
                    } ${
                      isUrdu ? 'font-urdu text-sm' : 'uppercase'
                    } ${
                      isActive
                        ? 'text-[#F9E7B9] bg-[#6B1724]/70 border border-[#D4AF37]/60 shadow-sm'
                        : 'text-[#E0D7C6] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10'
                    }`}
                  >
                    <span className="whitespace-nowrap inline-block">
                      {isUrdu ? link.urduLabel : link.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* CTA Buttons - Strictly in a single line */}
            <div className="hidden sm:flex items-center gap-2 2xl:gap-3 shrink-0">
              <button
                onClick={onOpenBrochure}
                className="hidden lg:flex items-center gap-1.5 px-2.5 2xl:px-3 py-2 rounded-md border border-[#D4AF37]/40 text-[#E0D7C6] hover:text-[#FAF7F2] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-[11px] 2xl:text-xs font-medium tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span className="whitespace-nowrap">{isUrdu ? 'بروشر' : 'Brochure'}</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="flex items-center gap-1.5 2xl:gap-2 px-3 2xl:px-4 py-2 2xl:py-2.5 rounded-md bg-gradient-to-r from-[#D4AF37] via-[#F3E2B3] to-[#AA7C11] text-[#0D0907] font-semibold text-[11px] 2xl:text-xs tracking-wider uppercase shadow-lg hover:shadow-[#D4AF37]/30 hover:brightness-110 active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <Calendar className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 shrink-0" />
                <span className="whitespace-nowrap">{isUrdu ? 'بکنگ کروائیں' : 'Book Event'}</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="sm:hidden px-3 py-1.5 rounded bg-[#D4AF37] text-[#0D0907] text-xs font-bold uppercase"
              >
                {isUrdu ? 'بکنگ' : 'Book'}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#120D0A] border-b border-[#D4AF37]/30 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-2xl">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#D4AF37]/20">
              <a
                href={`tel:${MARQUEE_INFO.phone}`}
                className="flex items-center justify-center gap-2 p-2.5 rounded bg-[#6B1724]/50 border border-[#D4AF37]/30 text-[#FAF7F2] text-xs font-semibold"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>0321-8662726</span>
              </a>
              <a
                href={`https://wa.me/${MARQUEE_INFO.whatsapp}?text=Assalam-o-Alaikum!%20I%20want%20to%20inquire%20about%20event%20booking%20at%20The%20Sheraton%20Marquee%20Faisalabad.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-3 py-2.5 rounded text-sm font-medium transition-all ${
                      isUrdu ? 'font-urdu text-right' : ''
                    } ${
                      isActive
                        ? 'bg-[#6B1724] text-[#F9E7B9] border-l-4 border-[#D4AF37]'
                        : 'text-[#E0D7C6] hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]'
                    }`}
                  >
                    {isUrdu ? link.urduLabel : link.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenBrochure();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 text-center text-xs font-medium uppercase tracking-wider text-[#D4AF37] border border-[#D4AF37]/40 rounded hover:bg-[#D4AF37]/10"
              >
                {isUrdu ? '📖 بروشر ڈاؤنلوڈ کریں' : '📖 Download Event Brochure'}
              </button>
              <button
                onClick={() => {
                  onOpenBooking();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0907] rounded shadow-lg"
              >
                {isUrdu ? 'تاریخ و ہال کی دستیابی چیک کریں' : 'Check Date & Hall Availability'}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
