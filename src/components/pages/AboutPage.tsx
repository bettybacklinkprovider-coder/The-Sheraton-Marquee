import React from 'react';
import {
  Crown,
  Award,
  ShieldCheck,
  Zap,
  Users,
  Utensils,
  MapPin,
  Clock,
  Heart,
  ChevronRight,
  Sparkles,
  Phone,
} from 'lucide-react';
import { PageId, Language } from '../../types';
import { MARQUEE_INFO } from '../../data/marqueeData';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  language: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, language }) => {
  const isUrdu = language === 'ur';

  const managementTeam = [
    {
      name: 'Rana Sabir Ali',
      urduName: 'رانا صابر علی',
      role: 'General Manager & Chief Event Director',
      urduRole: 'جنرل مینیجر و چیف ایونٹ ڈائریکٹر',
      experience: '22+ Years in 5-Star Luxury Hospitality',
      bio: 'Leading The Sheraton Marquee’s operations with immaculate protocol precision, having orchestrated over 2,000 presidential and high-society wedding banquets.',
      initials: 'RSA',
      themeColor: '#D4AF37',
    },
    {
      name: 'Chef Ghulam Rasool',
      urduName: 'شیف غلام رسول',
      role: 'Executive Head Chef (Master of Royal Punjabi & Continental Cuisines)',
      urduRole: 'ایگزیکٹو ہیڈ شیف (شاہی دیسی و کانٹینینٹل پکوان)',
      experience: '18+ Years Executive Kitchen Leadership',
      bio: 'A culinary legend specializing in authentic slow-braised Mutton Degi Korma, Dum Pukht Biryanis, and live flame artisanal barbecue.',
      initials: 'CGR',
      themeColor: '#6B1724',
    },
    {
      name: 'Hina Zainab',
      urduName: 'حنا زینب',
      role: 'Principal Floral & Thematic Set Architect',
      urduRole: 'پرنسپل فلورل و تھیمیٹک اسٹیج ڈیزائنر',
      experience: '12+ Years Bespoke Decor & Lighting',
      bio: 'Trained in Dubai and Lahore, Hina brings visionary Mughal, Turkish, and contemporary crystal wedding set design into reality.',
      initials: 'HZ',
      themeColor: '#AA7C11',
    },
  ];

  const uniqueSellingPoints = [
    {
      title: 'Sahianwala Expressway Advantage',
      urduTitle: 'ساہیانوالہ ایکسپریس وے پر آسان رسائی',
      desc: 'Located directly on the 4-lane Faisalabad–Sahianwala Expressway, guests from Faisalabad city, Lahore, Sargodha, and Islamabad arrive smoothly via M-4 and M-3 motorways without city traffic congestion.',
      icon: MapPin,
    },
    {
      title: 'Uninterrupted Dual Caterpillar Power',
      urduTitle: '۱۰۰۰ کے وی اے دوہرے ڈیزل جنریٹرز',
      desc: 'Zero-lapsable dual 1,000 kVA Caterpillar industrial diesel generators ensure your central air conditioning, sound, and 40ft LED walls run non-stop regardless of national grid conditions.',
      icon: Zap,
    },
    {
      title: '500+ Vehicle Secured Valet Parking',
      urduTitle: '۵۰۰ سے زائد گاڑیوں کی محفوظ ویلے پارکنگ',
      desc: 'Fully paved, boundary-walled, and floodlit parking facility with computerized token management and a team of 20+ professional uniformed valet drivers.',
      icon: ShieldCheck,
    },
    {
      title: 'Certified Halal 5-Star Commercial Kitchen',
      urduTitle: '۱۰۰ فیصد حلال فائیو اسٹار سرٹیفائیڈ کچن',
      desc: 'Dedicated on-site butchery and culinary facilities adhering strictly to Punjab Food Authority standards, utilizing pure farm desi ghee and prime baby mutton.',
      icon: Utensils,
    },
    {
      title: 'Presidential Bridal Suite & Safe Lounge',
      urduTitle: 'شاہی برائیڈل سوٹ و محفوظ لاؤنج',
      desc: 'Soundproof VIP bridal suites equipped with lighted salon vanities, private luxury bathrooms, locker safes, and live video relay of the ballroom.',
      icon: Crown,
    },
    {
      title: '100% Pillarless Architectural Sightlines',
      urduTitle: 'بغیر ستون وسیع و عریض ہال',
      desc: 'No obstructed views. Every guest at every table enjoys an unbroken view of the main bridal stage and ceremony proceedings.',
      icon: Award,
    },
  ];

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6B1724]/80 border border-[#D4AF37]/50 text-xs font-semibold text-[#F9E7B9] uppercase tracking-wider">
          <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{isUrdu ? 'ہماری کہانی اور وژن' : 'Heritage & Royal Values'}</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#FAF7F2]">
          {isUrdu ? (
            <span className="font-urdu leading-relaxed">
              دی شیریٹن مارکی فیصل آباد کی شاہی تاریخ
            </span>
          ) : (
            <>
              Faisalabad’s Grandest Venue for <span className="gold-gradient-text">Legendary Celebrations</span>
            </>
          )}
        </h1>
        <p className="text-sm sm:text-base text-[#C5BDB2] leading-relaxed">
          {isUrdu
            ? 'پندرہ سالوں سے فیصل آباد اور گردونواح کے معزز خاندانوں کی خوشیوں کو شاہی انداز میں منانے کی قابل اعتماد روایت۔'
            : 'For over 15 years, The Sheraton Marquee has set the benchmark for luxury weddings, high-level diplomatic receptions, and corporate galas across Punjab.'}
        </p>
      </div>

      {/* Story & Vision Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
            {isUrdu ? 'ہماری ابتدا اور سفر' : 'Born from a Passion for Majestic Hospitality'}
          </h2>
          <p className="text-xs sm:text-sm text-[#C5BDB2] leading-relaxed">
            {isUrdu
              ? 'دی شیریٹن مارکی کا آغاز ایک خواب کے ساتھ ہوا تھا کہ فیصل آباد کو ایک ایسا بین الاقوامی معیار کا بینکوئٹ وینیو فراہم کیا جائے جو نہ صرف فن تعمیر کے لحاظ سے بے مثال ہو، بلکہ جہاں ہر مہمان کو شاہی پروٹوکول حاصل ہو۔ ساہیانوالہ ایکسپریس وے پر واقع یہ مارکی اپنے وسیع رقبے، قدرتی لانز اور جدید ٹیکنالوجی کے باعث منفرد حیثیت رکھتی ہے۔'
              : 'The Sheraton Marquee was founded on a singular conviction: that a wedding day is one of the most sacred and defining milestones in a family’s lifetime, and it deserves nothing less than royal perfection. Recognizing that traditional wedding halls in Faisalabad often lacked sufficient parking, suffered from obstructed pillar layouts, or were paralyzed by city traffic, we chose the prestigious Sahianwala Expressway corridor to build an imperial estate.'}
          </p>
          <p className="text-xs sm:text-sm text-[#C5BDB2] leading-relaxed">
            Today, our estate encompasses 3 magnificent indoor and outdoor venues covering over 50,000 square feet, capable of hosting up to 3,500 guests simultaneously while maintaining the warmth and intimacy of bespoke hospitality.
          </p>

          <div className="p-4 rounded-xl bg-[#180E0A] border-l-4 border-[#D4AF37] space-y-2">
            <h3 className="font-cinzel text-sm font-bold text-[#D4AF37]">
              Our Mission
            </h3>
            <p className="text-xs text-[#E0D7C6] italic">
              "To honor rich Pakistani wedding traditions with modern architectural grandeur, exquisite culinary mastery, and impeccable protocol, ensuring every celebration becomes legendary."
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-2xl bg-gradient-to-br from-[#1C110A] via-[#2A1710] to-[#120805] p-8 flex flex-col items-center justify-center text-center min-h-[360px]">
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `radial-gradient(#D4AF37 1.5px, transparent 1.5px)`,
                backgroundSize: '24px 24px',
              }}
            />
            <div className="relative z-10 w-20 h-20 rounded-2xl bg-[#6B1724] border-2 border-[#D4AF37] flex items-center justify-center shadow-2xl mb-4">
              <Crown className="w-10 h-10 text-[#D4AF37]" />
            </div>
            <div className="relative z-10 space-y-2 max-w-sm">
              <h3 className="font-cinzel text-xl font-bold text-[#F9E7B9]">
                Architectural Supremacy
              </h3>
              <p className="text-xs text-[#C5BDB2] leading-relaxed">
                Purpose-built with 35ft royal high ceilings, acoustically engineered Austrian acoustic panelling, and 100% pillarless uninterrupted sightlines.
              </p>
            </div>
            <div className="relative z-10 mt-6 grid grid-cols-2 gap-3 w-full max-w-xs text-left">
              <div className="p-2.5 rounded bg-black/50 border border-[#D4AF37]/30">
                <span className="text-[10px] text-[#A0988E] block uppercase">Capacity</span>
                <span className="text-xs font-bold text-[#F9E7B9]">3,500 Guests</span>
              </div>
              <div className="p-2.5 rounded bg-black/50 border border-[#D4AF37]/30">
                <span className="text-[10px] text-[#A0988E] block uppercase">Compound</span>
                <span className="text-xs font-bold text-[#F9E7B9]">55,000 Sq. Ft.</span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-[#6B1724] border-2 border-[#D4AF37] p-5 rounded-xl shadow-2xl max-w-xs hidden sm:block z-20">
            <p className="font-cinzel text-xl font-bold text-[#F9E7B9]">2,800+ Events</p>
            <p className="text-xs text-[#FAF7F2] mt-1">Successfully hosted with 100% client satisfaction</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us - 6 Unique Selling Points */}
      <div className="space-y-8 pt-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] block">
            {isUrdu ? 'ہمیں کیوں منتخب کریں؟' : 'Why Discerning Hosts Choose Us'}
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#FAF7F2] mt-1">
            The 6 Pillars of Sheraton Distinction
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uniqueSellingPoints.map((usp, i) => {
            const Icon = usp.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-xl bg-[#140C08] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#6B1724] text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-cinzel text-base font-bold text-[#FAF7F2]">
                    {isUrdu ? usp.urduTitle : usp.title}
                  </h3>
                  <p className="text-xs text-[#C5BDB2] mt-2.5 leading-relaxed">
                    {usp.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Leadership & Executive Culinary Team */}
      <div className="space-y-8 pt-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] block">
            {isUrdu ? 'ہماری انتظامی ٹیم' : 'Executive Leadership'}
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#FAF7F2] mt-1">
            Masterminds Behind Your Perfect Event
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {managementTeam.map((member, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#140C08] border border-[#D4AF37]/30 overflow-hidden shadow-xl flex flex-col"
            >
              <div
                className="h-44 p-6 flex flex-col items-center justify-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, #1C1009 0%, #29160D 50%, #120804 100%)`,
                  borderBottom: `2px solid ${member.themeColor || '#D4AF37'}40`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: `radial-gradient(${member.themeColor || '#D4AF37'} 1.5px, transparent 1.5px)`,
                    backgroundSize: '16px 16px',
                  }}
                />
                <div
                  className="w-16 h-16 rounded-full border-2 border-[#D4AF37] flex items-center justify-center text-lg font-cinzel font-bold text-[#F9E7B9] shadow-xl relative z-10"
                  style={{ backgroundColor: member.themeColor ? `${member.themeColor}33` : '#6B1724' }}
                >
                  {member.initials}
                </div>
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest mt-2 relative z-10">
                  Sheraton Executive Directorate
                </span>
              </div>
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-cinzel text-base font-bold text-[#FAF7F2]">
                    {isUrdu ? member.urduName : member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#D4AF37]">
                    {isUrdu ? member.urduRole : member.role}
                  </p>
                  <p className="text-[11px] text-[#A0988E]">{member.experience}</p>
                </div>
                <p className="text-xs text-[#C5BDB2] pt-2 border-t border-[#D4AF37]/20 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications & Quality Assurances */}
      <div className="p-8 rounded-2xl bg-[#160E0A] border border-[#D4AF37]/40 space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="font-cinzel text-xl font-bold text-[#FAF7F2]">
            Certified Excellence & Safety Standards
          </h3>
          <p className="text-xs text-[#C5BDB2] mt-1">
            We operate in full compliance with municipal, food safety, and Punjab structural standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-lg bg-[#0E0805] border border-[#D4AF37]/25">
            <Award className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
            <p className="text-xs font-bold text-[#FAF7F2]">Punjab Food Authority</p>
            <p className="text-[11px] text-[#C5BDB2] mt-0.5">Grade A Kitchen Certification</p>
          </div>
          <div className="p-4 rounded-lg bg-[#0E0805] border border-[#D4AF37]/25">
            <ShieldCheck className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
            <p className="text-xs font-bold text-[#FAF7F2]">100% Halal Verified</p>
            <p className="text-[11px] text-[#C5BDB2] mt-0.5">Pure Desi Ghee & Fresh Meat</p>
          </div>
          <div className="p-4 rounded-lg bg-[#0E0805] border border-[#D4AF37]/25">
            <Zap className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
            <p className="text-xs font-bold text-[#FAF7F2]">Dual Power Redundancy</p>
            <p className="text-[11px] text-[#C5BDB2] mt-0.5">1000kVA Industrial Backup</p>
          </div>
          <div className="p-4 rounded-lg bg-[#0E0805] border border-[#D4AF37]/25">
            <Users className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
            <p className="text-xs font-bold text-[#FAF7F2]">Armed Protocol Security</p>
            <p className="text-[11px] text-[#C5BDB2] mt-0.5">64 HD CCTV & Electronic Gates</p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="text-center pt-4">
        <button
          onClick={() => onNavigate('contact')}
          className="px-8 py-3.5 rounded bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0907] font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-xl cursor-pointer"
        >
          {isUrdu ? 'ہمارے ساتھ تقریب کی منصوبہ بندی کریں' : 'Schedule a Venue Tour & Food Tasting'}
        </button>
      </div>
    </div>
  );
};
