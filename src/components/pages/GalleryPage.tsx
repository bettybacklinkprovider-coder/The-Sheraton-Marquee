import React, { useState } from 'react';
import {
  Crown,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Palette,
  Layers,
  CheckCircle,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { PageId, Language, GalleryItem } from '../../types';
import { GALLERY_ITEMS, MARQUEE_INFO } from '../../data/marqueeData';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  language: Language;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, language }) => {
  const isUrdu = language === 'ur';
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Design Themes', urduLabel: 'تمام ڈیزائن تھیمز' },
    { id: 'wedding', label: 'Baraat & Walima Royal Sets', urduLabel: 'بارات و ولیمہ شاہی سیٹ' },
    { id: 'mehndi', label: 'Mehndi & Garden Themes', urduLabel: 'مہندی و باغیچہ تھیم' },
    { id: 'decor', label: 'Chandeliers & Floral Arches', urduLabel: 'فانوس و پھولوں کے محراب' },
    { id: 'food', label: 'Imperial Gourmet Banquets', urduLabel: 'شاہی ضیافت و پکوان' },
    { id: 'drone', label: 'Estate & Starlit Ambiance', urduLabel: 'فضائی و بیرونی روشنیاں' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenModal = (index: number) => {
    setSelectedItemIndex(index);
  };

  const handleNext = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const selectedItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6B1724]/80 border border-[#D4AF37]/50 text-xs font-semibold text-[#F9E7B9] uppercase tracking-wider">
          <Palette className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{isUrdu ? 'شاہی ڈیزائن البم' : 'Bespoke Design Portfolio'}</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#FAF7F2]">
          {isUrdu ? (
            <span className="font-urdu leading-relaxed">
              دی شیریٹن مارکی کے شاہی تھیمز و سجاوٹ
            </span>
          ) : (
            <>
              Curated Event Themes & <span className="gold-gradient-text">Architectural Decor</span>
            </>
          )}
        </h1>
        <p className="text-sm sm:text-base text-[#C5BDB2]">
          {isUrdu
            ? 'شاہی رنگوں، فلورل پیلیٹس، جدید لائٹنگ اور اسٹیج ڈیزائنز کا مکمل پورٹ فولیو۔'
            : 'Explore our signature design palettes, custom stage architectures, hydraulic entry layouts, and imperial banqueting themes crafted for Faisalabad’s grandest celebrations.'}
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedItemIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0A0705] shadow-lg'
                  : 'bg-[#140C08] text-[#C5BDB2] border border-[#D4AF37]/30 hover:text-[#FAF7F2]'
              }`}
            >
              {isUrdu ? cat.urduLabel : cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Thematic Decor Grid (Curated Showcase with Real Venue Photos) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => handleOpenModal(index)}
            className="group relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-[#140C08] shadow-xl hover:border-[#D4AF37] transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Upper Atmospheric Banner or Real Venue Photo */}
            <div
              className="relative h-48 p-6 flex flex-col justify-between overflow-hidden"
              style={{
                background: `linear-gradient(135deg, #1C1009 0%, #2A170E 50%, #100805 100%)`,
                borderBottom: `2px solid ${item.themeColor || '#D4AF37'}40`,
              }}
             >
              {/* Featured real venue photographs for primary themes */}
              {item.image ? (
                <>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />
                </>
              ) : (
                <>
                  {/* Subtle background radial pattern */}
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: `radial-gradient(${item.themeColor || '#D4AF37'} 1.5px, transparent 1.5px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                </>
              )}
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-25"
                style={{ backgroundColor: item.themeColor || '#D4AF37' }}
              />

              <div className="relative z-10 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded border text-[10px] font-bold uppercase shadow bg-[#6B1724] border-[#D4AF37]/60 text-[#F9E7B9]">
                  {item.hallBadge}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/70 text-[#D4AF37] border border-[#D4AF37]/30">
                  {item.decorStyle}
                </span>
              </div>

              {/* Curated Color Swatches */}
              <div className="relative z-10 flex items-center gap-2">
                <span className="text-[10px] text-[#A0988E] uppercase tracking-wider font-semibold">
                  Palette:
                </span>
                <div className="flex items-center gap-1.5">
                  {item.decorPalette.map((color, cIdx) => (
                    <span
                      key={cIdx}
                      className="w-4 h-4 rounded-full border border-black/60 shadow-sm"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Lower Information Block */}
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-[10px] text-[#D4AF37] font-semibold uppercase tracking-wider">
                  {item.hallName}
                </span>
                <h3 className="font-cinzel text-base font-bold text-[#FAF7F2] group-hover:text-[#D4AF37] transition-colors">
                  {isUrdu ? item.urduTitle : item.title}
                </h3>
                <p className="text-xs text-[#C5BDB2] leading-relaxed line-clamp-2">
                  {item.caption}
                </p>
              </div>

              <div className="pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#A0988E] truncate max-w-[180px]">
                  {typeof item.specs === 'object' ? item.specs.stage : item.specs}
                </span>
                <span className="text-[#D4AF37] font-semibold flex items-center gap-1 shrink-0">
                  <span>View Details</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video & Drone Production Features Showcase */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#140C08] border border-[#D4AF37]/40 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Cinematic Stage Architecture & Aerial Production
            </span>
            <h3 className="font-cinzel text-2xl font-bold text-[#FAF7F2]">
              Engineered for Regal Immersion
            </h3>
          </div>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#D4AF37] font-semibold hover:underline flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#6B1724]/60 border border-[#D4AF37]/40"
          >
            <span>Watch Event Films on YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-[#D4AF37]/30 bg-[#1A100B] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#6B1724] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
              <Crown className="w-6 h-6" />
            </div>
            <h4 className="font-cinzel text-base font-bold text-[#FAF7F2]">
              Hydraulic Stage Elevation & 40ft LED Matrix
            </h4>
            <p className="text-xs text-[#C5BDB2] leading-relaxed">
              Grand Kohinoor features a built-in motorized hydraulic stage for showstopper bridal arrivals, backed by seamless 2.5mm pixel pitch high-definition LED displays synchronized with intelligent moving beam lights.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#D4AF37]/30 bg-[#1A100B] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#6B1724] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="font-cinzel text-base font-bold text-[#FAF7F2]">
              15,000+ Starlit Fairy Lighting Canopy & Water Fountains
            </h4>
            <p className="text-xs text-[#C5BDB2] leading-relaxed">
              The Royal Imperial Lawn incorporates overhead starlit canopy lighting, illuminated marble fountains, and flame torch pathways, ideal for nighttime open-air receptions and live gourmet barbecue banquets.
            </p>
          </div>
        </div>
      </div>

      {/* Theme Details Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-2xl w-full bg-[#140C08] border-2 border-[#D4AF37]/60 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            {/* Top Close */}
            <div className="flex items-center justify-between p-5 border-b border-[#D4AF37]/30 bg-[#1C100B]">
              <div>
                <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider block">
                  {selectedItem.hallName} • {selectedItem.hallBadge}
                </span>
                <h4 className="font-cinzel text-lg font-bold text-[#FAF7F2] mt-0.5">
                  {isUrdu ? selectedItem.urduTitle : selectedItem.title}
                </h4>
              </div>
              <button
                onClick={() => setSelectedItemIndex(null)}
                className="p-1.5 rounded text-[#C5A059] hover:text-[#FAF7F2] hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

             {/* Design Specifications & Palette */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Featured Venue Photo in Modal */}
              {selectedItem.image ? (
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] border border-[#D4AF37]/50 shadow-2xl bg-black">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-[#6B1724]/90 border border-[#D4AF37] text-[10px] font-bold text-[#F9E7B9] uppercase shadow">
                    Live Venue Architecture • {selectedItem.hallName || 'Featured'}
                  </span>
                </div>
              ) : selectedItem.id === 'gal-01' ? (
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] border border-[#D4AF37]/50 shadow-2xl bg-black">
                  <img
                    src="https://i.pinimg.com/1200x/43/43/0d/43430d550c6a319b521080334f322095.jpg"
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-[#6B1724]/90 border border-[#D4AF37] text-[10px] font-bold text-[#F9E7B9] uppercase shadow">
                    Live Venue Architecture • Grand Kohinoor
                  </span>
                </div>
              ) : selectedItem.id === 'gal-02' ? (
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] border border-[#D4AF37]/50 shadow-2xl bg-black">
                  <img
                    src="/assets/venue_stage_decor.jpg"
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-[#6B1724]/90 border border-[#D4AF37] text-[10px] font-bold text-[#F9E7B9] uppercase shadow">
                    Live Stage Decoration • Royal Shalimar
                  </span>
                </div>
              ) : selectedItem.id === 'gal-03' ? (
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] border border-[#D4AF37]/50 shadow-2xl bg-black">
                  <img
                    src="/assets/marquee_stage.jpg"
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-[#6B1724]/90 border border-[#D4AF37] text-[10px] font-bold text-[#F9E7B9] uppercase shadow">
                    Imperial Lawn Setup
                  </span>
                </div>
              ) : null}
              {/* Swatch Palette Banner */}
              <div
                className="p-6 rounded-xl border border-[#D4AF37]/40 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, #1E110A 0%, #2A170F 100%)`,
                }}
              >
                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest block mb-3">
                  Signature Palette Breakdown
                </span>
                <div className="grid grid-cols-3 gap-3">
                  {selectedItem.decorPalette.map((col, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-black/60 border border-[#D4AF37]/20 flex flex-col items-center gap-2">
                      <span
                        className="w-8 h-8 rounded-full border border-white/30 shadow-md"
                        style={{ backgroundColor: col }}
                      />
                      <span className="text-[11px] font-mono text-[#FAF7F2] uppercase">{col}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design Description */}
              <div className="space-y-2">
                <h5 className="font-cinzel text-sm font-bold text-[#F9E7B9]">
                  Architectural Concept & Ambiance
                </h5>
                <p className="text-xs text-[#E0D7C6] leading-relaxed">
                  {selectedItem.caption}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-lg bg-[#180E0A] border border-[#D4AF37]/20">
                  <span className="text-[#A0988E] block uppercase text-[10px]">Styling Profile</span>
                  <span className="font-semibold text-[#F9E7B9]">{selectedItem.decorStyle}</span>
                </div>
                <div className="p-3 rounded-lg bg-[#180E0A] border border-[#D4AF37]/20">
                  <span className="text-[#A0988E] block uppercase text-[10px]">Production Hardware</span>
                  <span className="font-semibold text-[#F9E7B9]">
                    {typeof selectedItem.specs === 'object' ? selectedItem.specs.stage : selectedItem.specs}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-4 bg-[#1A100C] border-t border-[#D4AF37]/20 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded bg-black/60 border border-[#D4AF37]/40 text-[#FAF7F2] hover:bg-[#6B1724] cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded bg-black/60 border border-[#D4AF37]/40 text-[#FAF7F2] hover:bg-[#6B1724] cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-[#A0988E] ml-2">
                  {selectedItemIndex! + 1} of {filteredItems.length}
                </span>
              </div>

              <button
                onClick={() => {
                  setSelectedItemIndex(null);
                  onNavigate('contact');
                }}
                className="px-4 py-2 rounded bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0907] font-bold text-xs uppercase tracking-wider hover:brightness-110 cursor-pointer"
              >
                Book This Theme
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
