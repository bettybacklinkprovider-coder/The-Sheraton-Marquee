import React from 'react';
import {
  Crown,
  Star,
  Quote,
  CheckCircle,
  Building2,
  Calendar,
  Users,
  Award,
  Play,
} from 'lucide-react';
import { PageId, Language } from '../../types';
import { REVIEWS_DATA } from '../../data/marqueeData';

interface TestimonialsPageProps {
  onNavigate: (page: PageId) => void;
  language: Language;
  onOpenBooking: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  onNavigate,
  language,
  onOpenBooking,
}) => {
  const isUrdu = language === 'ur';

  const caseStudies = [
    {
      title: 'Grand International Textile Summit & Banquet',
      urduTitle: 'بین الاقوامی ٹیکسٹائل سمٹ اور شاہی ڈنر',
      client: 'All Pakistan Textile Mills Association (APTMA)',
      attendees: '1,400 Delegates & Industrialists',
      venue: 'The Grand Kohinoor Hall',
      highlight: 'Continuous 40ft curved P2.5 LED wall presentation followed by 5-course silver service dinner with zero delay.',
      themeColor: '#D4AF37',
      code: 'APTMA-2025',
    },
    {
      title: 'Regal Imperial Baraat Reception',
      urduTitle: 'شاہی بارات تقریب (۱۲۰۰ مہمان)',
      client: 'Chaudhry Family (Faisalabad & Lahore)',
      attendees: '1,200 Elite Guests',
      venue: 'The Grand Kohinoor Hall & VIP Sheesh Mahal',
      highlight: 'Hydraulic entry for the couple amidst low-fog cloud effects, 400 cars parked smoothly under 25 minutes by our valet team.',
      themeColor: '#6B1724',
      code: 'WED-ROYAL',
    },
    {
      title: 'Sufi Musical & Qawwali Night Under the Stars',
      urduTitle: 'شاہی لان میں صوفی قوالی اور میوزیکل نائٹ',
      client: 'Private Host Soiree',
      attendees: '750 Guests',
      venue: 'The Royal Imperial Lawn',
      highlight: 'Fairy light canopy with 15,000 bulbs, live tandoor and copper samovar Kashmiri chai kept guests mesmerized until midnight.',
      themeColor: '#1E4D2B',
      code: 'SUFI-NIGHT',
    },
  ];

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6B1724]/80 border border-[#D4AF37]/50 text-xs font-semibold text-[#F9E7B9] uppercase tracking-wider">
          <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-current" />
          <span>{isUrdu ? 'کسٹمر ریویوز' : 'Client Praise & Accolades'}</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#FAF7F2]">
          {isUrdu ? (
            <span className="font-urdu leading-relaxed">
              ہمارے معزز مہمانوں کے سچے اور شاندار تاثرات
            </span>
          ) : (
            <>
              Faisalabad’s Most <span className="gold-gradient-text">Celebrated Venue</span>
            </>
          )}
        </h1>
        <p className="text-sm sm:text-base text-[#C5BDB2]">
          Read authentic reviews from brides, grooms, prominent business leaders, and families who hosted their most cherished memories at The Sheraton Marquee.
        </p>

        {/* Google Reviews Badge */}
        <div className="inline-flex items-center gap-4 p-4 rounded-xl bg-[#140C08] border border-[#D4AF37]/40 shadow-xl">
          <div className="w-10 h-10 rounded-full bg-[#FAF7F2] text-[#0A0705] font-black text-lg flex items-center justify-center">
            G
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1 text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-sm font-bold text-[#FAF7F2] ml-1">4.9 / 5.0</span>
            </div>
            <p className="text-xs text-[#A0988E]">Based on 680+ Verified Google Reviews</p>
          </div>
        </div>
      </div>

      {/* Reviews Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {REVIEWS_DATA.map((rev) => (
          <div
            key={rev.id}
            className="p-8 rounded-2xl bg-[#140C08] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between space-y-6 relative shadow-xl"
          >
            <Quote className="absolute top-6 right-6 w-10 h-10 text-[#D4AF37]/15 pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex text-[#D4AF37]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-[#A0988E]">{rev.date}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#E0D7C6] leading-relaxed italic">
                "{isUrdu ? rev.urduComment : rev.comment}"
              </p>
            </div>

            <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#6B1724] to-[#2A080D] border-2 border-[#D4AF37] flex items-center justify-center text-[#F9E7B9] font-bold text-xs shrink-0 shadow">
                  {rev.initials}
                </div>
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-[#FAF7F2]">
                    {isUrdu ? rev.urduClientName : rev.clientName}
                  </h4>
                  <p className="text-xs text-[#D4AF37]">{rev.eventType}</p>
                </div>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded bg-[#6B1724]/60 text-[#F9E7B9] border border-[#D4AF37]/30">
                {rev.hall}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Case Studies / Big Events Hosted */}
      <div className="space-y-8 pt-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] block">
            {isUrdu ? 'بڑے ایونٹس کی کہانیاں' : 'Signature Milestones'}
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#FAF7F2] mt-1">
            Proven Capability for Mega Receptions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#140C08] border border-[#D4AF37]/30 overflow-hidden shadow-xl flex flex-col justify-between"
            >
              <div
                className="h-40 p-6 flex flex-col justify-between overflow-hidden relative"
                style={{
                  background: `linear-gradient(135deg, #1C1009 0%, #2A170F 50%, #100805 100%)`,
                  borderBottom: `2px solid ${cs.themeColor}40`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: `radial-gradient(${cs.themeColor} 1.5px, transparent 1.5px)`,
                    backgroundSize: '18px 18px',
                  }}
                />
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/60 text-[#D4AF37] border border-[#D4AF37]/30">
                    {cs.code}
                  </span>
                  <Crown className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div className="relative z-10">
                  <span className="text-[10px] uppercase tracking-widest text-[#F9E7B9] block font-semibold">
                    {cs.client}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                    {cs.venue}
                  </span>
                  <h3 className="font-cinzel text-base font-bold text-[#FAF7F2] mt-1">
                    {isUrdu ? cs.urduTitle : cs.title}
                  </h3>
                  <div className="text-xs text-[#A0988E] mt-1">
                    <strong>Scale:</strong> {cs.attendees}
                  </div>
                </div>
                <p className="text-xs text-[#C5BDB2] pt-2 border-t border-[#D4AF37]/20 leading-relaxed">
                  {cs.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center pt-4">
        <button
          onClick={onOpenBooking}
          className="px-8 py-3.5 rounded bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0907] font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-xl cursor-pointer"
        >
          {isUrdu ? 'اپنی تقریب کیلئے بکنگ کروائیں' : 'Become Our Next Success Story'}
        </button>
      </div>
    </div>
  );
};
