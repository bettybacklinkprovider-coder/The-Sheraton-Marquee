import React, { useState } from 'react';
import {
  Crown,
  Eye,
  Calendar,
  Users,
  Maximize2,
  Wind,
  Zap,
  Car,
  CheckCircle,
  MapPin,
  Sparkles,
  Info,
} from 'lucide-react';
import { PageId, Language, Hall } from '../../types';
import { HALLS_DATA } from '../../data/marqueeData';

interface HallsPageProps {
  onNavigate: (page: PageId) => void;
  language: Language;
  onOpenVirtualTour: (hallId?: string) => void;
  onSelectBookingHall: (hallId: string) => void;
}

export const HallsPage: React.FC<HallsPageProps> = ({
  onNavigate,
  language,
  onOpenVirtualTour,
  onSelectBookingHall,
}) => {
  const isUrdu = language === 'ur';
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedFloorPlanHall, setSelectedFloorPlanHall] = useState<string>('grand-kohinoor');
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const filteredHalls =
    activeTab === 'all'
      ? HALLS_DATA
      : HALLS_DATA.filter((h) => h.type === activeTab);

  const floorPlanHall =
    HALLS_DATA.find((h) => h.id === selectedFloorPlanHall) || HALLS_DATA[0];

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6B1724]/80 border border-[#D4AF37]/50 text-xs font-semibold text-[#F9E7B9] uppercase tracking-wider">
          <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{isUrdu ? 'ہمارے پرشکوہ ہالز' : 'Venues & Ballrooms'}</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#FAF7F2]">
          {isUrdu ? (
            <span className="font-urdu leading-relaxed">
              گرینڈ انڈور بال رومز، اوپن ایئر لان اور وی آئی پی سوٹس
            </span>
          ) : (
            <>
              Spectacular Halls for Every <span className="gold-gradient-text">Scale & Elegance</span>
            </>
          )}
        </h1>
        <p className="text-sm sm:text-base text-[#C5BDB2]">
          {isUrdu
            ? 'بغیر ستون وسیع کوہ نور ہال، ستاروں بھرا رائل امپیریل لان اور شاہی شیش محل وی آئی پی لاؤنج۔'
            : 'Explore our 3 world-class event architectures with immersive 360° virtual tours, detailed floor plans, and flexible seating layouts.'}
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {[
            { id: 'all', label: 'All Venues (3)', urduLabel: 'تمام وینیوز' },
            { id: 'indoor', label: 'Indoor Ballroom', urduLabel: 'انڈور بال روم' },
            { id: 'outdoor', label: 'Open-Air Lawn', urduLabel: 'اوپن ایئر لان' },
            { id: 'vip', label: 'VIP & Bridal Suite', urduLabel: 'وی آئی پی شیش محل' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0A0705] shadow-lg'
                  : 'bg-[#140C08] text-[#C5BDB2] border border-[#D4AF37]/30 hover:text-[#FAF7F2]'
              }`}
            >
              {isUrdu ? tab.urduLabel : tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Venues Detailed Cards */}
      <div className="space-y-16">
        {filteredHalls.map((hall, index) => (
          <div
            key={hall.id}
            id={hall.id}
            className="rounded-2xl bg-[#140C08] border border-[#D4AF37]/40 overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Architectural Spatial Blueprint & Photo Showcase */}
              <div
                className="lg:col-span-6 relative flex flex-col justify-between p-6 sm:p-8 min-h-[360px] overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, #1C1009 0%, #2A170F 50%, #100805 100%)`,
                  borderRight: `1px solid #D4AF3740`,
                }}
              >
                {/* Real Venue Photos */}
                {hall.id === 'grand-kohinoor' && (
                  <>
                    <img
                      src="https://i.pinimg.com/1200x/43/43/0d/43430d550c6a319b521080334f322095.jpg"
                      alt="The Grand Kohinoor Live Venue"
                      className="absolute inset-0 w-full h-full object-cover opacity-45 filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#100805] via-[#100805]/60 to-transparent" />
                  </>
                )}
                {(hall.id === 'sheesh-mahal-vip' || hall.id === 'royal-shalimar') && (
                  <>
                    <img
                      src="/src/assets/images/royal_white_stage_1789111962011.jpg"
                      alt="Sheesh Mahal VIP Live Stage Decor"
                      className="absolute inset-0 w-full h-full object-cover opacity-50 filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#100805] via-[#100805]/60 to-transparent" />
                  </>
                )}
                {hall.id === 'royal-imperial-lawn' && (
                  <>
                    <img
                      src="/assets/marquee_stage.jpg"
                      alt="Royal Imperial Lawn Live Setup"
                      className="absolute inset-0 w-full h-full object-cover opacity-30 filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#100805] via-[#100805]/60 to-transparent" />
                  </>
                )}

                {/* Subtle blueprint grid */}
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: `radial-gradient(${hall.colorTheme || '#D4AF37'} 1.5px, transparent 1.5px)`,
                    backgroundSize: '24px 24px',
                  }}
                />
                <div
                  className="absolute -top-16 -left-16 w-48 h-48 rounded-full blur-3xl opacity-20"
                  style={{ backgroundColor: hall.colorTheme || '#D4AF37' }}
                />

                {/* Top Badges */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded bg-[#6B1724] border border-[#D4AF37] text-xs font-bold text-[#F9E7B9] uppercase shadow-md">
                    {hall.type === 'indoor'
                      ? 'Indoor Central AC • Real Venue'
                      : hall.type === 'outdoor'
                      ? 'Starlit Botanical Lawn'
                      : 'Exclusive VIP Sanctuary'}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-black/60 border border-[#D4AF37]/30 text-xs font-mono font-bold text-[#D4AF37]">
                    {hall.hallCode}
                  </span>
                </div>

                {/* Center Blueprint Emblem & Hotspots */}
                <div className="relative z-10 my-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#6B1724] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-lg">
                      <Crown className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider block">
                        Pillarless Grand Ballroom
                      </span>
                      <h3 className="font-cinzel text-lg font-bold text-[#FAF7F2]">
                        {isUrdu ? hall.urduName : hall.name}
                      </h3>
                    </div>
                  </div>

                  {/* Hotspots preview list */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] text-[#A0988E] uppercase tracking-wider block font-semibold">
                      Architectural Zones & Hotspots:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {hall.floorPlanHotspots?.map((hotspot, hIdx) => (
                        <span
                          key={hIdx}
                          className="px-2.5 py-1 rounded-md bg-black/50 border border-[#D4AF37]/30 text-[11px] text-[#E0D7C6]"
                        >
                          • {hotspot.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="relative z-10 pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
                  <span className="text-xs text-[#A0988E]">
                    {hall.ceilingHeight} Clear Height
                  </span>
                  <button
                    onClick={() => onOpenVirtualTour(hall.id)}
                    className="px-3.5 py-2 rounded-lg bg-black/70 hover:bg-[#6B1724] border border-[#D4AF37]/60 text-xs font-semibold text-[#FAF7F2] backdrop-blur-md transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Eye className="w-4 h-4 text-[#D4AF37]" />
                    <span>{isUrdu ? '۳۶۰° ٹور شروع کریں' : 'Launch 360° Tour'}</span>
                  </button>
                </div>
              </div>

              {/* Right Content & Specifications */}
              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-cinzel text-[#C5A059] uppercase tracking-widest">
                      {hall.areaSqFt.toLocaleString()} SQ. FT. ESTATE
                    </span>
                    <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#FAF7F2] mt-1">
                      {isUrdu ? hall.urduName : hall.name}
                    </h2>
                    <p className="text-xs text-[#D4AF37] font-medium mt-0.5">
                      {isUrdu ? hall.urduTagline : hall.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#C5BDB2] leading-relaxed">
                    {isUrdu ? hall.urduDescription : hall.description}
                  </p>

                  {/* Hall Specs Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-[#D4AF37]/20 text-center">
                    <div className="p-2 rounded bg-[#0A0705] border border-[#D4AF37]/20">
                      <Users className="w-4 h-4 text-[#D4AF37] mx-auto mb-1" />
                      <span className="text-[10px] text-[#A0988E] block">Seated</span>
                      <strong className="text-xs text-[#FAF7F2]">{hall.capacity.seated}</strong>
                    </div>
                    <div className="p-2 rounded bg-[#0A0705] border border-[#D4AF37]/20">
                      <Users className="w-4 h-4 text-[#D4AF37] mx-auto mb-1" />
                      <span className="text-[10px] text-[#A0988E] block">Max Floating</span>
                      <strong className="text-xs text-[#FAF7F2]">{hall.capacity.floating}</strong>
                    </div>
                    <div className="p-2 rounded bg-[#0A0705] border border-[#D4AF37]/20">
                      <Wind className="w-4 h-4 text-[#D4AF37] mx-auto mb-1" />
                      <span className="text-[10px] text-[#A0988E] block">Climate</span>
                      <strong className="text-[11px] text-[#FAF7F2] truncate block">
                        {hall.type === 'outdoor' ? 'Mist/Heaters' : 'Central HVAC'}
                      </strong>
                    </div>
                    <div className="p-2 rounded bg-[#0A0705] border border-[#D4AF37]/20">
                      <Car className="w-4 h-4 text-[#D4AF37] mx-auto mb-1" />
                      <span className="text-[10px] text-[#A0988E] block">Valet Parking</span>
                      <strong className="text-xs text-[#FAF7F2]">{hall.parkingSpots}+ Cars</strong>
                    </div>
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-cinzel font-bold text-[#F9E7B9] uppercase tracking-wider">
                      Signature Architectural Highlights:
                    </h4>
                    <div className="space-y-1.5">
                      {hall.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[#C5BDB2]">
                          <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{isUrdu ? feat.ur : feat.en}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onSelectBookingHall(hall.id)}
                    className="flex-1 py-3 rounded bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0907] font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg transition-all cursor-pointer text-center"
                  >
                    {isUrdu ? 'اس ہال کیلئے تاریخ منتخب کریں' : 'Book This Venue'}
                  </button>
                  <button
                    onClick={() => onOpenVirtualTour(hall.id)}
                    className="px-5 py-3 rounded border border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Eye className="w-4 h-4 text-[#D4AF37]" />
                    <span>360° View</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Seating Capacity Chart Table */}
      <div className="space-y-6 pt-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] block">
            {isUrdu ? 'مہمانوں کی گنجائش کا چارٹ' : 'Seating Capacities'}
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#FAF7F2] mt-1">
            Comparative Venue Specifications
          </h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#D4AF37]/30 bg-[#140C08]">
          <table className="w-full text-left text-xs text-[#FAF7F2]">
            <thead className="bg-[#1C120D] text-[#D4AF37] font-cinzel text-xs uppercase border-b border-[#D4AF37]/30">
              <tr>
                <th className="py-3 px-4">Venue Name</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Area (Sq. Ft.)</th>
                <th className="py-3 px-4">Round Table Seated</th>
                <th className="py-3 px-4">Max Capacity</th>
                <th className="py-3 px-4">Ceiling Height</th>
                <th className="py-3 px-4">Min. Booking Guests</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D4AF37]/15">
              {HALLS_DATA.map((h) => (
                <tr key={h.id} className="hover:bg-[#1F140E]/80 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[#F9E7B9] font-cinzel">
                    {h.name}
                  </td>
                  <td className="py-3.5 px-4 capitalize text-[#C5BDB2]">{h.type}</td>
                  <td className="py-3.5 px-4">{h.areaSqFt.toLocaleString()} sq. ft.</td>
                  <td className="py-3.5 px-4 font-semibold text-[#D4AF37]">{h.capacity.seated} Guests</td>
                  <td className="py-3.5 px-4 font-semibold text-[#FAF7F2]">{h.capacity.floating} Guests</td>
                  <td className="py-3.5 px-4 text-[#C5BDB2]">{h.ceilingHeight}</td>
                  <td className="py-3.5 px-4 text-[#A0988E]">{h.capacity.minGuests} Guests</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Floor Plan Simulator */}
      <div className="space-y-6 pt-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] block">
            {isUrdu ? 'انٹرایکٹو فلور پلان' : 'Architectural Layouts'}
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#FAF7F2] mt-1">
            Interactive Venue Floor Plans
          </h2>
          <p className="text-xs text-[#C5BDB2] mt-1">
            Click on key points to see functional event zones: Stage, VIP Sofa Lounge, Dining Tables, and Twin Buffets.
          </p>
        </div>

        {/* Floor Plan Hall Switcher */}
        <div className="flex justify-center gap-2">
          {HALLS_DATA.map((h) => (
            <button
              key={h.id}
              onClick={() => {
                setSelectedFloorPlanHall(h.id);
                setActiveHotspot(null);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedFloorPlanHall === h.id
                  ? 'bg-[#6B1724] text-[#F9E7B9] border border-[#D4AF37]'
                  : 'bg-[#140C08] text-[#C5BDB2] border border-[#D4AF37]/30 hover:text-[#FAF7F2]'
              }`}
            >
              {h.name}
            </button>
          ))}
        </div>

        {/* Floor Plan Diagram Canvas */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0F0906] border-2 border-[#D4AF37]/40 shadow-2xl relative">
          <div className="relative w-full h-[400px] sm:h-[480px] bg-[#1A100B] border border-[#D4AF37]/30 rounded-xl overflow-hidden flex items-center justify-center p-4">
            {/* Background architectural grid pattern */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Hall Blueprint Outline Shape */}
            <div className="relative w-full h-full max-w-3xl border-2 border-dashed border-[#D4AF37]/40 rounded-lg p-6 flex flex-col justify-between">
              {/* Stage Top Area */}
              <div className="w-2/3 mx-auto h-16 rounded bg-[#6B1724]/60 border border-[#D4AF37] flex items-center justify-center text-xs font-cinzel font-bold text-[#F9E7B9]">
                Elevated Stage & 40ft LED Video Wall
              </div>

              {/* Center Seating & Hotspots */}
              <div className="relative flex-1 my-4 flex items-center justify-center">
                {floorPlanHall.floorPlanHotspots?.map((hotspot, idx) => (
                  <div
                    key={idx}
                    style={{ top: `${hotspot.coords.y}%`, left: `${hotspot.coords.x}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                  >
                    <button
                      onClick={() => setActiveHotspot(activeHotspot === hotspot.name ? null : hotspot.name)}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#D4AF37] text-[#0A0705] text-[11px] font-bold shadow-lg hover:scale-110 transition-transform cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline-block">{hotspot.name}</span>
                    </button>

                    {activeHotspot === hotspot.name && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-60 p-3 rounded-lg bg-[#140C08] border border-[#D4AF37] text-left shadow-2xl z-30 animate-fadeIn">
                        <p className="text-xs font-bold text-[#F9E7B9] font-cinzel">{hotspot.name}</p>
                        <p className="text-[11px] text-[#C5BDB2] mt-1 leading-relaxed">
                          {hotspot.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                <span className="text-xs text-[#D4AF37]/40 uppercase tracking-widest font-cinzel">
                  {floorPlanHall.name} Architectural Blueprint (22,000 sq. ft.)
                </span>
              </div>

              {/* Bottom Dining Buffets & Entrances */}
              <div className="flex justify-between items-center text-[10px] text-[#C5A059] uppercase tracking-wider pt-2 border-t border-[#D4AF37]/20">
                <span>← Guest Valet Entrance</span>
                <span>Twin Royal Buffet Stations →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
