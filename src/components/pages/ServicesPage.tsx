import React, { useState } from 'react';
import {
  Crown,
  HeartHandshake,
  Utensils,
  Sparkles,
  Briefcase,
  Music,
  ShieldCheck,
  Camera,
  PartyPopper,
  CheckCircle,
  Coffee,
  Flame,
  ArrowRight,
} from 'lucide-react';
import { PageId, Language } from '../../types';
import { SERVICES_DATA, MARQUEE_INFO } from '../../data/marqueeData';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  language: Language;
  onOpenBooking: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  language,
  onOpenBooking,
}) => {
  const isUrdu = language === 'ur';
  const [selectedTab, setSelectedTab] = useState<string>('all');

  const cateringMenuHighlights = [
    {
      category: 'Signature Royal Gravies & Mains',
      urduCategory: 'شاہی سالن اور مٹن دیگی پکوان',
      items: [
        { name: 'Prime Mutton Degi Korma', desc: 'Baby goat simmered in pure farm desi ghee with whole mace and nutmeg.' },
        { name: 'Special Chicken Sindhi Dum Biryani', desc: 'Fragrant golden basmati sella rice layered with tender saffron chicken.' },
        { name: 'Chicken Boneless Makhni Handi', desc: 'Silky butter and cream curry cooked in authentic earthen clay pots.' },
        { name: 'Mutton Kunna Gosht', desc: 'Slow-cooked Chinioti specialty with thick reduced bone broth.' },
      ],
    },
    {
      category: 'Live BBQ & Tandoor Pavilion',
      urduCategory: 'لائیو کوئلہ باربی کیو و نان تندور',
      items: [
        { name: 'Chicken Reshmi Seekh Kababs', desc: 'Melt-in-mouth chicken mince skewers blended with coriander and cream.' },
        { name: 'Bihari Beef Boti / Mutton Chops', desc: 'Thinly sliced steak marinated overnight in raw papaya and mustard oil.' },
        { name: 'Live Clay Tandoor Roghani Naan', desc: 'Hot sesame seed flatbread brushed with golden clarified butter.' },
        { name: 'Crispy Crumbed Fish Fingers', desc: 'Fresh river sole fish fillet served with spicy tartar dip.' },
      ],
    },
    {
      category: 'Artisanal Desserts & Royal Beverages',
      urduCategory: 'شاہی میٹھے اور زعفرانی کشمیری چائے',
      items: [
        { name: 'Live Turkish Kunafa Station', desc: 'Warm crispy shredded phyllo pastry filled with sweet cheese and pistachio.' },
        { name: 'Hot Shahi Gulab Jamun with Rabri', desc: 'Golden khoya dumplings steeped in rose cardamom syrup.' },
        { name: 'Royal Kashmiri Pink Tea (Chai)', desc: 'Slow-brewed pink tea garnished with crushed almonds and pistachios.' },
        { name: 'Signature Fresh Fruit Mocktails', desc: 'Blue Lagoon, Mint Margarita, and Peach Iced Tea freshly shaken.' },
      ],
    },
  ];

  return (
    <div className="space-y-20 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6B1724]/80 border border-[#D4AF37]/50 text-xs font-semibold text-[#F9E7B9] uppercase tracking-wider">
          <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{isUrdu ? 'ہماری شاہی خدمات' : 'Comprehensive Event Solutions'}</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#FAF7F2]">
          {isUrdu ? (
            <span className="font-urdu leading-relaxed">
              شادی، کارپوریٹ، کیٹرنگ اور تھیمیٹک ڈیکور
            </span>
          ) : (
            <>
              Impeccable Services for <span className="gold-gradient-text">Flawless Celebrations</span>
            </>
          )}
        </h1>
        <p className="text-sm sm:text-base text-[#C5BDB2]">
          {isUrdu
            ? 'بارات، ولیمہ، مہندی، کارپوریٹ کانفرنسز، ۵ اسٹار کیٹرنگ اور جدید ساؤنڈ سسٹم۔'
            : 'From master culinary banquets to bespoke floral architectures and executive valet security, we orchestrate every detail under one roof.'}
        </p>
      </div>

      {/* Main Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((srv) => {
          // Determine high quality image backdrop for the services cards to replace empty boxes
          let cardImage = '';
          if (srv.id === 'wedding-events') {
            cardImage = 'https://i.pinimg.com/1200x/26/1b/85/261b85391809ccfaa886e58cccfa6caf.jpg';
          } else if (srv.id === 'master-catering') {
            cardImage = 'https://i.pinimg.com/736x/38/e4/2a/38e42ad04a226036f0677f895c93110e.jpg';
          } else if (srv.id === 'theme-decor') {
            cardImage = '/src/assets/images/royal_white_stage_1789111962011.jpg';
          } else if (srv.id === 'corporate-events') {
            cardImage = 'https://i.pinimg.com/1200x/43/43/0d/43430d550c6a319b521080334f322095.jpg';
          } else if (srv.id === 'audio-lighting') {
            cardImage = 'https://i.pinimg.com/736x/01/d0/a8/01d0a8914ce15d8f5a8a83bcedeb15c7.jpg';
          } else if (srv.id === 'valet-security') {
            cardImage = 'https://i.pinimg.com/736x/44/9e/7e/449e7e934d8522cf658cfc800c44a8ae.jpg';
          }

          return (
            <div
              key={srv.id}
              className="rounded-2xl bg-[#140C08] border border-[#D4AF37]/30 overflow-hidden shadow-xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div
                  className="relative h-44 p-6 flex flex-col justify-between overflow-hidden bg-[#100805]"
                  style={{
                    borderBottom: `2px solid ${srv.colorTheme || '#D4AF37'}40`,
                  }}
                >
                  {/* Backdrop Image */}
                  {cardImage && (
                    <img
                      src={cardImage}
                      alt={srv.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-35 filter brightness-[0.8] group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Elegant Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140C08] via-[#140C08]/50 to-transparent pointer-events-none" />

                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: `radial-gradient(${srv.colorTheme || '#D4AF37'} 1.5px, transparent 1.5px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <div
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none"
                    style={{ backgroundColor: srv.colorTheme || '#D4AF37' }}
                  />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#6B1724] border border-[#D4AF37]/60 text-[10px] font-bold text-[#F9E7B9] uppercase">
                    {srv.category}
                  </span>
                  <span className="text-xs font-mono text-[#D4AF37] px-2 py-0.5 rounded bg-black/60 border border-[#D4AF37]/30">
                    {srv.badge}
                  </span>
                </div>

                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#6B1724]/80 border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Crown className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-[#E0D7C6]">
                    {srv.specs}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-cinzel text-lg font-bold text-[#FAF7F2]">
                  {isUrdu ? srv.urduTitle : srv.title}
                </h3>
                <p className="text-xs text-[#C5BDB2] leading-relaxed">
                  {srv.fullDesc}
                </p>

                <div className="pt-3 border-t border-[#D4AF37]/20 space-y-1.5">
                  <p className="text-[11px] font-cinzel font-bold text-[#D4AF37] uppercase">
                    Inclusions:
                  </p>
                  {srv.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-[#E0D7C6]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded bg-[#6B1724]/60 hover:bg-[#6B1724] border border-[#D4AF37]/40 text-xs font-semibold text-[#FAF7F2] uppercase tracking-wider transition-all cursor-pointer"
              >
                {isUrdu ? 'اس سروس کے بارے میں پوچھیں' : 'Inquire for This Service'}
              </button>
            </div>
          </div>
        );
      })}
      </div>

      {/* 5-Star Royal Catering Deep Dive */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#180E0A] border-2 border-[#D4AF37]/50 space-y-10 shadow-2xl relative overflow-hidden">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            {isUrdu ? 'شاہی دسترخوان' : 'Culinary Masterpieces'}
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-[#FAF7F2]">
            Authentic 5-Star Royal Catering
          </h2>
          <p className="text-xs sm:text-sm text-[#C5BDB2]">
            Prepared fresh on-site in our Punjab Food Authority certified commercial kitchen using 100% Halal prime meats and pure farm Desi Ghee.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cateringMenuHighlights.map((menuCat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#110A07] border border-[#D4AF37]/30 space-y-4"
            >
              <h3 className="font-cinzel text-base font-bold text-[#F9E7B9] border-b border-[#D4AF37]/20 pb-2">
                {isUrdu ? menuCat.urduCategory : menuCat.category}
              </h3>
              <div className="space-y-4">
                {menuCat.items.map((item, i) => (
                  <div key={i} className="space-y-1">
                    <h4 className="text-xs font-bold text-[#FAF7F2] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      <span>{item.name}</span>
                    </h4>
                    <p className="text-[11px] text-[#C5BDB2] pl-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tasting Session Notice */}
        <div className="p-4 rounded-xl bg-[#6B1724]/40 border border-[#D4AF37]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-xs font-bold text-[#F9E7B9] font-cinzel">
              Schedule an Exclusive Food Tasting Session
            </p>
            <p className="text-xs text-[#E0D7C6]">
              Taste our signature Degi Mutton Korma and Zafrani Biryani with your family before confirming your package.
            </p>
          </div>
          <a
            href={`tel:${MARQUEE_INFO.phone}`}
            className="px-5 py-2.5 rounded bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0907] font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow cursor-pointer whitespace-nowrap"
          >
            Call: 0321-8662726
          </a>
        </div>
      </div>

      {/* Partnerships Section (Photography, Sound, Fireworks) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6 rounded-xl bg-[#140C08] border border-[#D4AF37]/25">
          <Camera className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
          <h4 className="font-cinzel text-sm font-bold text-[#FAF7F2]">
            Cinematic 4K Video & Drone
          </h4>
          <p className="text-xs text-[#C5BDB2] mt-2">
            Top-tier wedding photographers with pre-installed truss cameras and licensed drone flyovers.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#140C08] border border-[#D4AF37]/25">
          <Flame className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
          <h4 className="font-cinzel text-sm font-bold text-[#FAF7F2]">
            Cold Pyro & Low-Fog Effects
          </h4>
          <p className="text-xs text-[#C5BDB2] mt-2">
            Smokeless cold spark fountains and dry-ice ground clouds for cinematic couple entry.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#140C08] border border-[#D4AF37]/25">
          <Coffee className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
          <h4 className="font-cinzel text-sm font-bold text-[#FAF7F2]">
            Traditional Kashmiri Chai Samovars
          </h4>
          <p className="text-xs text-[#C5BDB2] mt-2">
            Brass samovars serving authentic warm pink tea and Peshawari qahwa for arriving guests.
          </p>
        </div>
      </div>
    </div>
  );
};
