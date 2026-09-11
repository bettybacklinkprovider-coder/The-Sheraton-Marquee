import React, { useState, useEffect } from 'react';
import {
  Crown,
  Phone,
  MessageCircle,
  Calendar,
  Users,
  Building2,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Star,
  CheckCircle,
  Play,
  ArrowRight,
  Shield,
  Zap,
  MapPin,
  Instagram,
  Eye,
} from 'lucide-react';
import { PageId, Language } from '../../types';
import { SheratonLogo } from '../SheratonLogo';
import {
  MARQUEE_INFO,
  HALLS_DATA,
  PACKAGES_DATA,
  REVIEWS_DATA,
  SERVICES_DATA,
  GALLERY_ITEMS,
} from '../../data/marqueeData';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  language: Language;
  onOpenBookingWithDetails?: (details: { date: string; hallId: string; guests: number }) => void;
  onOpenVirtualTour: (hallId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  language,
  onOpenBookingWithDetails,
  onOpenVirtualTour,
}) => {
  const isUrdu = language === 'ur';

  // Hero Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    {
      themeColor: '#D4AF37',
      accentBg: 'from-[#1A100B] via-[#2B1B10] to-[#0D0907]',
      titleEn: 'Where Every Celebration Becomes Legendary',
      titleUr: 'جہاں ہر تقریب یادگار اور باوقار بنتی ہے',
      subtitleEn: 'Faisalabad’s Grandest Luxury Wedding Halls & Outdoor Banquets on Sahianwala Expressway',
      subtitleUr: 'ساہیانوالہ ایکسپریس وے پر فیصل آباد کا سب سے پرشکوہ و باوقار شادی وینیو',
      hallId: 'grand-kohinoor',
      badgeEn: 'Pillarless Royal Ballroom',
      badgeUr: 'بغیر ستون شاہی ہال',
      hallCode: 'SH-KHN-01',
      image: 'https://i.pinimg.com/1200x/43/43/0d/43430d550c6a319b521080334f322095.jpg',
      hallName: 'Grand Kohinoor Ballroom',
      capacityDesc: 'Sahianwala Expressway • 2,000 Guests',
    },
    {
      themeColor: '#6B1724',
      accentBg: 'from-[#24080D] via-[#380D15] to-[#120406]',
      titleEn: 'Royal Shalimar Grand Banquet Suite',
      titleUr: 'رائل شالیمار گرینڈ بینکویٹ ہال',
      subtitleEn: 'Intimate Luxury Hall with Centralized Climate Control and Signature Floral Stages',
      subtitleUr: 'بارات و ولیمہ تقریبات کیلئے پروقار و پرآسائش بینکویٹ ہال',
      hallId: 'royal-shalimar',
      badgeEn: 'Royal Banquet Hall',
      badgeUr: 'رائل شالیمار ہال',
      hallCode: 'SH-SHL-03',
      image: '/assets/venue_stage_decor.jpg',
      hallName: 'Royal Shalimar Hall',
      capacityDesc: 'Central AC • 1,200 Guests',
    },
    {
      themeColor: '#1E4D2B',
      accentBg: 'from-[#0A1A0F] via-[#102917] to-[#061009]',
      titleEn: 'Enchanting Starlit Outdoor Garden Receptions',
      titleUr: 'ستاروں کی چھاؤں میں رائل اوپن ایئر تقریبات',
      subtitleEn: '15,000+ Fairy Lights, Live Barbecue Pavilions, and Cascading Water Fountains',
      subtitleUr: 'پندرہ ہزار روشنیاں، لائیو باربی کیو اور مسحور کن ماحول',
      hallId: 'royal-imperial-lawn',
      badgeEn: 'The Royal Imperial Lawn',
      badgeUr: 'دی رائل امپیریل لان',
      hallCode: 'SH-LAWN-02',
      image: '/assets/marquee_stage.jpg',
      hallName: 'Royal Imperial Lawn',
      capacityDesc: 'Botanical Gardens • 1,500 Guests',
    },
    {
      themeColor: '#D4AF37',
      accentBg: 'from-[#1E110A] via-[#2D1B10] to-[#0A0705]',
      titleEn: 'Majestic Royal Bridal Stage Setup',
      titleUr: 'شاہانہ اور پرشکوہ سٹیج ڈیکوریشن',
      subtitleEn: 'Stunning white and gold floral backdrops, luxury crystal chandeliers, and opulent seating design',
      subtitleUr: 'سفید اور سنہری پھولوں کا مسحور کن امتزاج اور شاہی فانوس',
      hallId: 'grand-kohinoor',
      badgeEn: 'Luxury Floral Stages',
      badgeUr: 'لگزری سٹیج ڈیکوریشن',
      hallCode: 'SH-STAGE-04',
      image: 'https://i.pinimg.com/736x/98/d1/c6/98d1c655dfcb36107e318fabca59bba5.jpg',
      hallName: 'The Majestic Stage',
      capacityDesc: 'Bespoke Premium Decor • Grand Setup',
    },
    {
      themeColor: '#6B1724',
      accentBg: 'from-[#240509] via-[#350A10] to-[#0D0204]',
      titleEn: 'The Sheraton Grand Royal Entrance',
      titleUr: 'شیریٹن مارکی کا پروقار شاہی داخلہ',
      subtitleEn: 'Stately red carpets, fairy-lit floral arches, and glowing crystal chandeliers welcoming your guests',
      subtitleUr: 'سرخ قالین، دلکش پھولوں کی محرابیں اور چمکتے ہوئے فانوس',
      hallId: 'royal-shalimar',
      badgeEn: 'Grand Royal Entrance',
      badgeUr: 'پروقار شاہی داخلہ',
      hallCode: 'SH-ENTR-05',
      image: 'https://i.pinimg.com/736x/6d/a2/c7/6da2c7f27708492f227562fe0d22928a.jpg',
      hallName: 'The Royal Entrance',
      capacityDesc: 'Premium Welcome Ambience',
    },
  ];

  // Quick Date / Hall widget state
  const [quickDate, setQuickDate] = useState('');
  const [quickHall, setQuickHall] = useState('grand-kohinoor');
  const [quickGuests, setQuickGuests] = useState(500);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleQuickCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (onOpenBookingWithDetails) {
      onOpenBookingWithDetails({
        date: quickDate,
        hallId: quickHall,
        guests: quickGuests,
      });
    } else {
      onNavigate('contact');
    }
  };

  return (
    <div className="space-y-20 pb-20">
      {/* 1. Full-Screen Hero Slider */}
      <section className="relative h-[85vh] sm:h-[90vh] w-full overflow-hidden bg-black flex items-center justify-center">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Real Venue Ambient Image Layer */}
            {slide.image && (
              <img
                src={slide.image}
                alt={slide.titleEn}
                className="absolute inset-0 w-full h-full object-cover opacity-35 filter brightness-75 scale-105 transition-transform duration-1000"
              />
            )}
            {/* Architectural patterned canvas with glowing ambient light */}
            <div className={`w-full h-full bg-gradient-to-br ${slide.accentBg} relative overflow-hidden mix-blend-multiply opacity-80`}>
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(${slide.themeColor} 1.5px, transparent 1.5px), radial-gradient(${slide.themeColor} 1px, transparent 1px)`,
                  backgroundSize: '36px 36px',
                  backgroundPosition: '0 0, 18px 18px',
                }}
              />
              <div
                className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25"
                style={{ backgroundColor: slide.themeColor }}
              />
              <div
                className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full blur-[160px] opacity-25"
                style={{ backgroundColor: slide.themeColor }}
              />
            </div>
            {/* Luxury dual gradient overlays for pristine readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0907] via-[#0D0907]/60 to-[#0D0907]/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-transparent" />
          </div>
        ))}

        {/* Hero Slider Content & Showcase Card */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left flex items-start justify-between h-full pt-6 sm:pt-10 lg:pt-12 gap-8">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            {/* Top Royal Crest Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6B1724]/85 border border-[#D4AF37]/60 shadow-xl backdrop-blur-sm">
              <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[10px] sm:text-xs font-semibold text-[#F9E7B9] uppercase tracking-wide">
                {isUrdu ? heroSlides[currentSlide].badgeUr : heroSlides[currentSlide].badgeEn}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#FAF7F2] leading-[1.1] tracking-tight drop-shadow-2xl">
              {isUrdu ? (
                <span className="font-urdu leading-relaxed">
                  {heroSlides[currentSlide].titleUr}
                </span>
              ) : (
                <>
                  Where Every Celebration{' '}
                  <span className="gold-gradient-text">Becomes Legendary</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg text-[#E0D7C6] max-w-2xl font-light leading-relaxed drop-shadow-md">
              {isUrdu
                ? heroSlides[currentSlide].subtitleUr
                : heroSlides[currentSlide].subtitleEn}
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 rounded bg-gradient-to-r from-[#D4AF37] via-[#F3E2B3] to-[#AA7C11] text-[#0D0907] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-2xl hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{isUrdu ? 'بکنگ کروائیں' : 'Book Your Event'}</span>
              </button>

              <button
                onClick={() => onOpenVirtualTour(heroSlides[currentSlide].hallId)}
                className="px-6 py-3.5 rounded bg-black/60 hover:bg-[#6B1724]/70 border border-[#D4AF37]/50 text-[#FAF7F2] font-semibold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-sm shadow-xl transition-all cursor-pointer flex items-center gap-2"
              >
                <Eye className="w-4 h-4 text-[#D4AF37]" />
                <span>{isUrdu ? '۳۶۰° ورچوئل ٹور' : 'Explore 360° Tour'}</span>
              </button>

              <a
                href={`tel:${MARQUEE_INFO.phone}`}
                className="px-5 py-3.5 rounded border border-[#FAF7F2]/30 hover:border-[#D4AF37] text-[#FAF7F2] hover:text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-wider transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>0321-8662726</span>
              </a>
            </div>
          </div>

          {/* Live Venue Preview Photo Card */}
          {heroSlides[currentSlide].image && (
            <div className="hidden lg:flex flex-col items-center shrink-0">
              <div
                onClick={() => onNavigate('halls')}
                className="relative w-64 xl:w-72 rounded-2xl p-1.5 bg-gradient-to-b from-[#D4AF37] via-[#6B1724] to-[#AA7C11] shadow-[0_15px_40px_rgba(0,0,0,0.8)] border border-[#D4AF37]/50 group cursor-pointer hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative rounded-xl overflow-hidden aspect-[9/13] bg-[#0A0705]">
                  <img
                    src={heroSlides[currentSlide].image}
                    alt={heroSlides[currentSlide].hallName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded-full bg-[#6B1724]/90 border border-[#D4AF37] text-[10px] font-bold text-[#F9E7B9] uppercase shadow">
                      {isUrdu ? 'اصل وینیو' : 'Live Venue'}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/70 border border-[#D4AF37]/50 text-[9px] font-mono text-[#D4AF37]">
                      {heroSlides[currentSlide].hallCode}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-left space-y-0.5">
                    <span className="text-[9px] uppercase font-cinzel text-[#D4AF37] tracking-widest block font-semibold">
                      {isUrdu ? 'دی شیریٹن مارکی' : 'The Sheraton Marquee'}
                    </span>
                    <h4 className="font-cinzel text-sm xl:text-base font-bold text-[#FAF7F2] leading-snug">
                      {isUrdu ? heroSlides[currentSlide].badgeUr : heroSlides[currentSlide].hallName}
                    </h4>
                    <p className="text-[10px] text-[#C5BDB2]">
                      {heroSlides[currentSlide].capacityDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 right-6 z-20 hidden sm:flex items-center gap-2">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
            className="p-2.5 rounded-full bg-black/50 border border-[#D4AF37]/40 text-[#FAF7F2] hover:bg-[#6B1724] transition-all cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-1.5 px-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  i === currentSlide ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/40'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
            className="p-2.5 rounded-full bg-black/50 border border-[#D4AF37]/40 text-[#FAF7F2] hover:bg-[#6B1724] transition-all cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* 2. Quick Hall & Date Availability Widget Bar */}
      <section className="-mt-16 sm:-mt-20 relative z-30 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#19100C]/95 border-2 border-[#D4AF37]/50 rounded-xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          <form onSubmit={handleQuickCheck} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-end">
            <div>
              <label className="block text-xs font-semibold text-[#F9E7B9] uppercase tracking-wider mb-2">
                {isUrdu ? 'تقریب کی تاریخ' : 'Event Date'}
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={quickDate}
                  onChange={(e) => setQuickDate(e.target.value)}
                  className="w-full bg-[#0D0907] border border-[#D4AF37]/40 rounded-lg px-3.5 py-2.5 text-xs text-[#FAF7F2] focus:outline-none focus:border-[#D4AF37]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#F9E7B9] uppercase tracking-wider mb-2">
                {isUrdu ? 'ہال کا انتخاب' : 'Select Venue'}
              </label>
              <select
                value={quickHall}
                onChange={(e) => setQuickHall(e.target.value)}
                className="w-full bg-[#0D0907] border border-[#D4AF37]/40 rounded-lg px-3.5 py-2.5 text-xs text-[#FAF7F2] focus:outline-none focus:border-[#D4AF37]"
              >
                {HALLS_DATA.map((h) => (
                  <option key={h.id} value={h.id} className="bg-[#140D09]">
                    {h.name} ({h.capacity.seated} seated)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#F9E7B9] uppercase tracking-wider mb-2">
                {isUrdu ? 'متوقع مہمان' : 'Expected Guests'}
              </label>
              <div className="flex items-center gap-2 bg-[#0D0907] border border-[#D4AF37]/40 rounded-lg px-3.5 py-2 text-xs text-[#FAF7F2]">
                <Users className="w-4 h-4 text-[#D4AF37]" />
                <input
                  type="number"
                  min="100"
                  max="3500"
                  step="50"
                  value={quickGuests}
                  onChange={(e) => setQuickGuests(Number(e.target.value))}
                  className="w-full bg-transparent text-xs text-[#FAF7F2] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0907] font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isUrdu ? 'دستیابی چیک کریں' : 'Check Availability'}</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 3. Royal Milestones & Numbers Counter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {MARQUEE_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#140C08]/90 border border-[#D4AF37]/25 text-center shadow-lg hover:border-[#D4AF37]/60 transition-all group"
            >
              <span className="font-cinzel text-3xl sm:text-4xl font-extrabold gold-gradient-text block group-hover:scale-105 transition-transform">
                {stat.value}
                <span className="text-xl sm:text-2xl text-[#D4AF37]">{stat.suffix}</span>
              </span>
              <span className="text-xs text-[#C5BDB2] mt-2 block font-medium">
                {isUrdu ? stat.urduLabel : stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. The Sheraton Story / Welcome Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Architectural Emblem (Photo-free luxury crest) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-2xl bg-gradient-to-br from-[#1E120B] via-[#2D1A0E] to-[#120B07] p-8">
              {/* Radial background pattern */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `radial-gradient(#D4AF37 1.5px, transparent 1.5px)`,
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="relative z-10 flex flex-col items-center justify-center text-center py-8 space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#6B1724] to-[#3B0C14] border-2 border-[#D4AF37] flex items-center justify-center shadow-xl overflow-hidden">
                  <SheratonLogo variant="mark-only" size="lg" />
                </div>
                <div className="space-y-2 max-w-sm">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                    Regal Architectural Heritage
                  </span>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#FAF7F2]">
                    The Sheraton Marquee
                  </h3>
                  <p className="text-xs text-[#C5BDB2] leading-relaxed">
                    Faisalabad's most iconic wedding destination, situated directly on the Sahianwala Expressway with 55,000+ sq. ft. of dedicated event estate.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 w-full max-w-md pt-2 text-left">
                  <div className="p-3 rounded-lg bg-black/40 border border-[#D4AF37]/20">
                    <span className="text-[10px] text-[#A0988E] uppercase block">Location Corridor</span>
                    <span className="text-xs font-bold text-[#F9E7B9]">Sahianwala Expressway</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-[#D4AF37]/20">
                    <span className="text-[10px] text-[#A0988E] uppercase block">Compound Parking</span>
                    <span className="text-xs font-bold text-[#F9E7B9]">500+ Secured Valet Bays</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-black/70 backdrop-blur-sm border border-[#D4AF37]/30 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-cinzel text-[#D4AF37] uppercase tracking-wider">
                    Sahianwala Expressway, Faisalabad
                  </p>
                  <p className="text-xs font-semibold text-[#FAF7F2]">
                    Dedicated 500-Car Parking & Dual Caterpillar Power
                  </p>
                </div>
                <div className="p-1.5 rounded bg-[#6B1724] text-[#D4AF37]">
                  <Crown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="hidden sm:block absolute -top-6 -right-6 p-4 rounded-xl bg-gradient-to-br from-[#6B1724] to-[#4A0E17] border-2 border-[#D4AF37] shadow-2xl text-center z-20">
              <span className="font-cinzel text-3xl font-extrabold text-[#F9E7B9] block">15+</span>
              <span className="text-[10px] text-[#FAF7F2] uppercase tracking-widest font-semibold">
                Years of Royal Service
              </span>
            </div>
          </div>

          {/* Text & Pitch */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
              <Crown className="w-3.5 h-3.5" />
              <span>{isUrdu ? 'دی شیریٹن مارکی کا تعارف' : 'The Pinnacle of Regal Hospitality'}</span>
            </div>

            <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-[#FAF7F2] leading-tight">
              {isUrdu ? (
                <span className="font-urdu leading-relaxed">
                  جہاں شاہی روایت اور جدید نفاست ایک ساتھ ملتے ہیں
                </span>
              ) : (
                <>
                  Crafting Timeless Weddings & <br />
                  <span className="gold-gradient-text">Prestigious Gatherings</span>
                </>
              )}
            </h2>

            <p className="text-sm text-[#C5BDB2] leading-relaxed">
              {isUrdu
                ? 'دی شیریٹن مارکی فیصل آباد ساہیانوالہ ایکسپریس وے پر واقع ایک پرشکوہ، کشادہ اور جدید ترین مارکی ہے جہاں ۱۰۰ فیصد بغیر ستون بال روم، کھلے سرسبز لانز، فائیو اسٹار کیٹرنگ اور ۵۰۰ گاڑیوں کی ویلے پارکنگ موجود ہے۔'
                : 'Located conveniently on the Faisalabad–Sahianwala Expressway, The Sheraton Marquee represents the pinnacle of banquet architecture in Punjab. Designed with 100% pillarless vistas, heavy-duty Trane central climate control, and authentic 5-star royal catering wings, we ensure every wedding Baraat, Walima, and high-profile corporate summit unfolds with absolute magnificence.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-[#E0D7C6]">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>22,000 sq. ft. Pillarless Grand Hall</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#E0D7C6]">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Dual 1000kVA Industrial Power Backup</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#E0D7C6]">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>5-Star Executive Chefs & Halal Meat</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#E0D7C6]">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Presidential Private Bridal Suite</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-5 py-2.5 rounded bg-[#6B1724] hover:bg-[#8B1E30] text-[#FAF7F2] text-xs font-bold uppercase tracking-wider border border-[#D4AF37]/50 shadow transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>{isUrdu ? 'ہمارے بارے میں مزید جانیے' : 'Discover Our Heritage'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenVirtualTour('grand-kohinoor')}
                className="px-5 py-2.5 rounded border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Eye className="w-4 h-4" />
                <span>{isUrdu ? '۳۶۰ ڈگری ٹور دیکھیں' : 'Launch Virtual Tour'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5. Featured Grand Decor Showcase (Big Photos) */}
      <section className="bg-gradient-to-b from-black via-[#100806] to-[#080403] py-20 border-y border-[#D4AF37]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] block">
              {isUrdu ? 'خصوصی سٹیج اور ڈیکوریشن گیلری' : 'Exclusive Royal Decor Portfolio'}
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#FAF7F2]">
              {isUrdu ? (
                <span className="font-urdu">پریمیئم اور وسیع پنٹیرسٹ آرکیٹیکچر ڈیکوریشن</span>
              ) : (
                <>
                  Immersive Live <span className="gold-gradient-text">Decor Exhibitions</span>
                </>
              )}
            </h2>
            <div className="w-24 h-[1.5px] bg-[#D4AF37] mx-auto mt-2 opacity-50" />
            <p className="text-sm text-[#C5BDB2] max-w-2xl mx-auto">
              {isUrdu
                ? 'دلکش سفید اور سنہری پھولوں سے مزین شاہانہ سٹیج ڈیکوریشن اور سرخ قالین پر مبنی پروقار داخلی محرابیں جو آپ کی شادی کو یادگار بنا دیتی ہیں۔'
                : 'Step into a world of ultimate grandeur. Discover our freshly designed, high-resolution live wedding stage arrangements and royal corridor entrances constructed by top international floral architects.'}
            </p>
          </div>

          {/* Separate and Ultra-Big Full-Width Showcase Rows in Split Layout */}
          <div className="flex flex-col gap-24 sm:gap-32">
            {/* Big Photo 1: Majestic Royal Bridal Stage */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* Image Column */}
              <div className="lg:col-span-6 group relative">
                <div className="relative w-full rounded-3xl p-2 bg-gradient-to-b from-[#D4AF37] via-[#6B1724] to-[#AA7C11] shadow-[0_25px_60px_rgba(0,0,0,0.95)] border border-[#D4AF37]/30 overflow-hidden transition-all duration-700 hover:scale-[1.01] hover:shadow-[0_30px_80px_rgba(212,175,55,0.2)]">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[3/2] bg-[#0A0705]">
                    <img
                      src="https://i.pinimg.com/736x/98/d1/c6/98d1c655dfcb36107e318fabca59bba5.jpg"
                      alt="Majestic Bridal Stage Setup"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    {/* Subtle gradient overlay to enhance photo depth only */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Badge inside Image */}
                    <span className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-[#6B1724]/95 border border-[#D4AF37] text-xs font-bold text-[#FAF7F2] uppercase shadow-lg tracking-wider">
                      {isUrdu ? 'شاہی برائیڈل سٹیج' : 'Signature Stage Design'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Column (Alongside Photo) */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <span className="text-xs uppercase font-cinzel text-[#D4AF37] tracking-widest block font-bold">
                  {isUrdu ? 'سگنیچر تھیم • گرینڈ کوہِ نور' : 'Signature Themes • Grand Kohinoor'}
                </span>
                <h3 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#FAF7F2] leading-tight">
                  {isUrdu ? 'شاہانہ اور پرشکوہ دلہن سٹیج' : 'The Majestic Royal Stage'}
                </h3>
                <div className="w-16 h-[2px] bg-[#D4AF37] opacity-60" />
                <p className="text-sm sm:text-base text-[#C5BDB2] leading-relaxed">
                  {isUrdu
                    ? 'جدید فانوسوں، پرتعیش صوفہ سیٹنگ اور سفید و سنہری پھولوں کی دیواروں کے ساتھ تیار کردہ دلکش سیٹ اب، جو پنٹیرسٹ ڈیکوریشن کے عین مطابق ہے۔'
                    : 'Designed with premium imported orchids, white roses, cascading luxury crystal chandeliers, and custom gold-leaf seating on a grand velvet stage platform.'}
                </p>
                <div className="pt-4 flex flex-wrap gap-3">
                  <span className="px-3 py-1 text-xs rounded bg-white/5 border border-white/10 text-[#C5BDB2]">
                    {isUrdu ? 'پریمیم صوفہ' : 'Luxury Lounge Seating'}
                  </span>
                  <span className="px-3 py-1 text-xs rounded bg-white/5 border border-white/10 text-[#C5BDB2]">
                    {isUrdu ? 'کرسٹل فانوس' : 'Imported Chandeliers'}
                  </span>
                  <span className="px-3 py-1 text-xs rounded bg-white/5 border border-white/10 text-[#C5BDB2]">
                    {isUrdu ? 'پورٹریٹ فوٹوگرافی' : 'Pinterest Inspired'}
                  </span>
                </div>
              </div>
            </div>

            {/* Big Photo 2: Royal Entrance Corridor */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* Text Column (Alongside Photo) - Placed first in mobile stacked flow via order utilities or conditional cols */}
              <div className="lg:col-span-6 lg:order-1 space-y-6 text-left">
                <span className="text-xs uppercase font-cinzel text-[#D4AF37] tracking-widest block font-bold">
                  {isUrdu ? 'رائل کوریڈور • ساہیانوالہ ایکسپریس وے' : 'Royal Corridor • Sahianwala Expressway'}
                </span>
                <h3 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#FAF7F2] leading-tight">
                  {isUrdu ? 'پروقار رائل گرینڈ انٹرنس' : 'The Royal Grand Entrance'}
                </h3>
                <div className="w-16 h-[2px] bg-[#D4AF37] opacity-60" />
                <p className="text-sm sm:text-base text-[#C5BDB2] leading-relaxed">
                  {isUrdu
                    ? 'روشن فانوس، چمکتی لٹس، اور دلکش پھولوں کی محرابوں سے سجا ہوا ایک مسحور کن سرخ قالین استقبالی راستہ جو مہمانوں کا خیر مقدم کرتا ہے۔'
                    : 'A premium welcome runway layout featuring rich red carpet paths, beautifully fairy-lit floral arches, and glowing crystal chandeliers guiding guests in absolute luxury.'}
                </p>
                <div className="pt-4 flex flex-wrap gap-3">
                  <span className="px-3 py-1 text-xs rounded bg-white/5 border border-white/10 text-[#C5BDB2]">
                    {isUrdu ? 'سرخ قالین کوریڈور' : 'Red Carpet Runway'}
                  </span>
                  <span className="px-3 py-1 text-xs rounded bg-white/5 border border-white/10 text-[#C5BDB2]">
                    {isUrdu ? 'پھولوں کی محرابیں' : 'Floral Lit Arches'}
                  </span>
                  <span className="px-3 py-1 text-xs rounded bg-white/5 border border-white/10 text-[#C5BDB2]">
                    {isUrdu ? 'شاہانہ داخلہ' : 'Grand Entrance'}
                  </span>
                </div>
              </div>

              {/* Image Column */}
              <div className="lg:col-span-6 lg:order-2 group relative">
                <div className="relative w-full rounded-3xl p-2 bg-gradient-to-b from-[#D4AF37] via-[#6B1724] to-[#AA7C11] shadow-[0_25px_60px_rgba(0,0,0,0.95)] border border-[#D4AF37]/30 overflow-hidden transition-all duration-700 hover:scale-[1.01] hover:shadow-[0_30px_80px_rgba(212,175,55,0.2)]">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[3/2] bg-[#0A0705]">
                    <img
                      src="https://i.pinimg.com/736x/6d/a2/c7/6da2c7f27708492f227562fe0d22928a.jpg"
                      alt="Grand Royal Entrance Setup"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    {/* Subtle gradient overlay to enhance photo depth only */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Badge inside Image */}
                    <span className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-[#6B1724]/95 border border-[#D4AF37] text-xs font-bold text-[#FAF7F2] uppercase shadow-lg tracking-wider">
                      {isUrdu ? 'شاہانہ سرخ قالین داخلہ' : 'Grand Entrance Corridor'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Halls Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] block">
            {isUrdu ? 'ہمارے پرشکوہ وینیوز' : 'Our Majestic Spaces'}
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-[#FAF7F2] mt-2">
            {isUrdu ? (
              <span className="font-urdu">شاہی ہالز، اوپن لان اور وی آئی پی سوٹس</span>
            ) : (
              <>
                Designed for Grandeur & <span className="gold-gradient-text">Unmatched Comfort</span>
              </>
            )}
          </h2>
          <p className="text-xs sm:text-sm text-[#C5BDB2] mt-2">
            Each venue at The Sheraton Marquee is engineered with custom acoustic sound, specialized ambient lighting, and dedicated executive bridal facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HALLS_DATA.map((hall) => (
            <div
              key={hall.id}
              className="rounded-xl bg-[#140C08] border border-[#D4AF37]/30 overflow-hidden shadow-xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div
                  className="relative h-56 overflow-hidden p-6 flex flex-col justify-between bg-[#100805]"
                  style={{
                    borderBottom: `2px solid ${hall.colorTheme || '#D4AF37'}40`,
                  }}
                >
                  {/* Real Venue Photos for the cards */}
                  {hall.id === 'grand-kohinoor' && (
                    <img
                      src="https://i.pinimg.com/1200x/43/43/0d/43430d550c6a319b521080334f322095.jpg"
                      alt="The Grand Kohinoor Live Venue"
                      className="absolute inset-0 w-full h-full object-cover opacity-45 filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  {hall.id === 'royal-imperial-lawn' && (
                    <img
                      src="/assets/marquee_stage.jpg"
                      alt="Royal Imperial Lawn Live Setup"
                      className="absolute inset-0 w-full h-full object-cover opacity-40 filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  {hall.id === 'sheesh-mahal-vip' && (
                    <img
                      src="/src/assets/images/royal_white_stage_1789111962011.jpg"
                      alt="The Sheesh Mahal VIP Stage"
                      className="absolute inset-0 w-full h-full object-cover opacity-50 filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#100805] via-[#100805]/40 to-transparent pointer-events-none" />

                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: `radial-gradient(${hall.colorTheme || '#D4AF37'} 1.5px, transparent 1.5px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <div
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none"
                    style={{ backgroundColor: hall.colorTheme || '#D4AF37' }}
                  />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-black/60 border border-[#D4AF37]/40 text-[11px] font-mono font-bold text-[#F9E7B9]">
                      {hall.hallCode}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-black/70 border border-[#D4AF37]/50 text-[11px] font-bold text-[#F9E7B9] uppercase">
                      {hall.type === 'indoor' ? 'Indoor Ballroom' : hall.type === 'outdoor' ? 'Open-Air Lawn' : 'VIP Hall'}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <span className="text-xs text-[#D4AF37] font-cinzel font-semibold block">
                      {hall.areaSqFt.toLocaleString()} sq. ft. • 100% Pillarless
                    </span>
                    <h3 className="font-cinzel text-lg font-bold text-[#FAF7F2]">
                      {isUrdu ? hall.urduName : hall.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <p className="text-xs text-[#C5BDB2] line-clamp-3 leading-relaxed">
                    {isUrdu ? hall.urduDescription : hall.description}
                  </p>

                  <div className="pt-2 border-t border-[#D4AF37]/20 grid grid-cols-2 gap-2 text-xs text-[#E0D7C6]">
                    <div>
                      <span className="text-[#D4AF37] block font-semibold">Capacity:</span>
                      <span>Up to {hall.capacity.floating.toLocaleString()} Guests</span>
                    </div>
                    <div>
                      <span className="text-[#D4AF37] block font-semibold">Climate:</span>
                      <span>{hall.type === 'outdoor' ? 'Mist / Heaters' : 'Central AC'}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center gap-2">
                <button
                  onClick={() => onOpenVirtualTour(hall.id)}
                  className="flex-1 py-2 rounded bg-[#6B1724]/60 hover:bg-[#6B1724] border border-[#D4AF37]/40 text-[#FAF7F2] text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>360° Tour</span>
                </button>
                <button
                  onClick={() => onNavigate('halls')}
                  className="flex-1 py-2 rounded bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0907] text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer text-center"
                >
                  {isUrdu ? 'تفصیلات دیکھیں' : 'View Specs'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Signature Services Preview */}
      <section className="bg-[#120B08] py-16 border-y border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] block">
              {isUrdu ? 'شاہی سہولیات اور خدمات' : 'Hospitality Services'}
            </span>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-[#FAF7F2] mt-2">
              {isUrdu ? (
                <span className="font-urdu">ہر لمحے کو پروقار بنانے کیلئے مکمل انتظام</span>
              ) : (
                <>
                  Flawless Execution from <span className="gold-gradient-text">Concept to Feast</span>
                </>
              )}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES_DATA.slice(0, 6).map((service) => {
              let cardImage = '';
              if (service.id === 'wedding-events') {
                // User explicitly requested to set this premium wedding image to the first card (Royal Wedding Celebrations)
                cardImage = 'https://i.pinimg.com/1200x/26/1b/85/261b85391809ccfaa886e58cccfa6caf.jpg';
              } else if (service.id === 'master-catering') {
                cardImage = 'https://i.pinimg.com/736x/38/e4/2a/38e42ad04a226036f0677f895c93110e.jpg';
              } else if (service.id === 'theme-decor') {
                cardImage = '/src/assets/images/royal_white_stage_1789111962011.jpg';
              } else if (service.id === 'corporate-events') {
                cardImage = 'https://i.pinimg.com/1200x/43/43/0d/43430d550c6a319b521080334f322095.jpg';
              } else if (service.id === 'audio-lighting') {
                cardImage = 'https://i.pinimg.com/736x/01/d0/a8/01d0a8914ce15d8f5a8a83bcedeb15c7.jpg';
              } else if (service.id === 'valet-security') {
                cardImage = 'https://i.pinimg.com/736x/44/9e/7e/449e7e934d8522cf658cfc800c44a8ae.jpg';
              }

              return (
                <div
                  key={service.id}
                  className="rounded-xl bg-[#140C08] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg"
                >
                  <div>
                    {/* Top Image Header replacing empty space */}
                    <div className="relative h-40 w-full overflow-hidden flex items-end p-4 bg-[#100805]">
                      {cardImage && (
                        <img
                          src={cardImage}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover opacity-40 filter brightness-[0.8] group-hover:scale-105 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#140C08] via-[#140C08]/40 to-transparent pointer-events-none" />
                      
                      {/* Floating Badge/Icon */}
                      <div className="relative z-10 w-10 h-10 rounded-lg bg-[#6B1724]/90 border border-[#D4AF37]/45 flex items-center justify-center text-[#D4AF37] shadow-md">
                        <Sparkles className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#FAF7F2]">
                        {isUrdu ? service.urduTitle : service.title}
                      </h3>
                      <p className="text-xs text-[#C5BDB2] leading-relaxed line-clamp-2">
                        {isUrdu ? service.urduShortDesc : service.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-[#D4AF37]/15 flex items-center justify-between text-xs">
                      <span className="text-[#D4AF37] font-semibold">{service.features[0]}</span>
                      <button
                        onClick={() => onNavigate('services')}
                        className="text-[#E0D7C6] hover:text-[#D4AF37] transition-colors cursor-pointer flex items-center gap-1"
                      >
                        <span>More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3 rounded border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              {isUrdu ? 'تمام خدمات کی تفصیلات دیکھیں' : 'View Full Services & Catering Menus'}
            </button>
          </div>
        </div>
      </section>

      {/* 7. Packages Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] block">
            {isUrdu ? 'پیکیجز اور قیمتیں' : 'Transparent Royal Tariffs'}
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-[#FAF7F2] mt-2">
            {isUrdu ? (
              <span className="font-urdu">شادی اور کارپوریٹ پیکیجز</span>
            ) : (
              <>
                All-Inclusive Royal <span className="gold-gradient-text">Wedding Packages</span>
              </>
            )}
          </h2>
          <p className="text-xs sm:text-sm text-[#C5BDB2] mt-2">
            Includes full hall rental, central air conditioning, dual generator backup, valet parking, and gourmet multi-course feast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKAGES_DATA.slice(0, 3).map((pkg) => (
            <div
              key={pkg.id}
              className={`p-6 rounded-xl border flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-b from-[#280E14] to-[#160B0E] border-[#D4AF37] shadow-2xl relative scale-105'
                  : 'bg-[#140C08] border-[#D4AF37]/30'
              }`}
            >
              <div>
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#D4AF37] text-[#0A0705] text-[10px] font-extrabold uppercase tracking-wider shadow">
                    Most Popular Choice
                  </span>
                )}
                <h3 className="font-cinzel text-lg font-bold text-[#FAF7F2]">{pkg.name}</h3>
                <p className="text-xs text-[#C5A059] mt-0.5">{pkg.urduName}</p>

                <div className="my-4 py-3 border-y border-[#D4AF37]/20">
                  <span className="font-cinzel text-3xl font-extrabold text-[#D4AF37]">
                    PKR {pkg.pricePerHead.toLocaleString()}
                  </span>
                  <span className="text-xs text-[#C5BDB2]"> / per person</span>
                </div>

                <ul className="space-y-2 text-xs text-[#C5BDB2]">
                  {pkg.menuHighlights.slice(0, 4).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D4AF37]/20">
                <button
                  onClick={() => onNavigate('packages')}
                  className="w-full py-2.5 rounded bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0907] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer"
                >
                  {isUrdu ? 'تفصیل و حسب ضرورت پیکیج' : 'Customize Package & Book'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Verified Reviews Snippet */}
      <section className="bg-[#100906] py-16 border-y border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] block">
                {isUrdu ? 'کسٹمرز کے تاثرات' : 'Guest Reviews & Praise'}
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#FAF7F2] mt-1">
                Trusted by Faisalabad’s Leading Families
              </h2>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-[#19100C] border border-[#D4AF37]/40">
              <div className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs text-[#FAF7F2] font-bold">4.9 / 5.0 Rating</span>
              <span className="text-xs text-[#A0988E]">(680+ Google Reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS_DATA.slice(0, 3).map((rev) => (
              <div
                key={rev.id}
                className="p-6 rounded-xl bg-[#160E0A] border border-[#D4AF37]/25 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#D4AF37] mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-[#C5BDB2] italic leading-relaxed">
                    "{isUrdu ? rev.urduComment : rev.comment}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#D4AF37]/20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6B1724] to-[#2B080D] border border-[#D4AF37] flex items-center justify-center text-[#F9E7B9] font-bold text-xs shrink-0 shadow">
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#FAF7F2]">
                      {isUrdu ? rev.urduClientName : rev.clientName}
                    </h4>
                    <p className="text-[11px] text-[#C5A059]">{rev.eventType}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('testimonials')}
              className="text-xs text-[#D4AF37] hover:underline font-semibold uppercase tracking-wider cursor-pointer"
            >
              {isUrdu ? 'مزید کسٹمر ریویوز پڑھیں →' : 'Read All Client Stories & Case Studies →'}
            </button>
          </div>
        </div>
      </section>

      {/* 9. Live Instagram / Decor Themes Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] block">
              @sheratonmarquee
            </span>
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#FAF7F2]">
              {isUrdu ? 'شاہی سجاوٹ اور ڈیزائن تھیمز' : 'Explore Our Signature Event Design Themes'}
            </h2>
          </div>
          <a
            href={MARQUEE_INFO.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-xs font-bold shadow-md hover:opacity-90 transition-opacity"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow on Instagram</span>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {GALLERY_ITEMS.slice(0, 6).map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate('gallery')}
              className="relative h-44 rounded-lg overflow-hidden border border-[#D4AF37]/30 group cursor-pointer p-4 flex flex-col justify-between"
              style={{
                background: `linear-gradient(145deg, #1A100C 0%, #2A1710 60%, #100806 100%)`,
              }}
            >
              {/* Background Image with Overlay */}
              {item.image ? (
                <>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
                </>
              ) : (
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: `radial-gradient(${item.themeColor || '#D4AF37'} 1.5px, transparent 1.5px)`,
                    backgroundSize: '16px 16px',
                  }}
                />
              )}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/60 text-[#D4AF37] border border-[#D4AF37]/30">
                  {item.hallBadge}
                </span>
                <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
              </div>
              <div className="relative z-10 space-y-1">
                <span className="text-[10px] text-[#A0988E] block uppercase font-medium">
                  {item.decorStyle}
                </span>
                <p className="text-xs font-bold text-[#FAF7F2] line-clamp-2 leading-tight">
                  {item.title}
                </p>
                <div className="flex gap-1 pt-1">
                  {item.decorPalette.map((color, cIdx) => (
                    <span
                      key={cIdx}
                      className="w-2.5 h-2.5 rounded-full border border-black/50"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Floating Call & Booking Urgency Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#4A0E17] via-[#6B1724] to-[#2B080D] border-2 border-[#D4AF37] shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F9E7B9]">
              {isUrdu ? 'شیریٹن مارکی فیصل آباد' : 'Limited Weekend Dates Available for 2026'}
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#FAF7F2]">
              {isUrdu ? (
                <span className="font-urdu leading-relaxed">
                  اپنی شادی کی تاریخ آج ہی کنفرم کروائیں
                </span>
              ) : (
                'Secure Your Wedding Date with Just 25% Token'
              )}
            </h3>
            <p className="text-xs sm:text-sm text-[#E0D7C6]">
              {isUrdu
                ? 'ساہیانوالہ ایکسپریس وے پر بالمشافہ ملاقات اور کیٹرنگ فوڈ ٹیسٹنگ کیلئے رابطہ کریں۔'
                : 'Visit our site office on Sahianwala Expressway or speak directly with our wedding architect.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={`tel:${MARQUEE_INFO.phone}`}
              className="px-6 py-3.5 rounded bg-[#FAF7F2] hover:bg-[#F9E7B9] text-[#0D0907] font-bold text-xs uppercase tracking-wider shadow-lg transition-all text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#6B1724]" />
              <span>0321-8662726</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0907] font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all text-center cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{isUrdu ? 'بکنگ فارم' : 'Inquire Now'}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
