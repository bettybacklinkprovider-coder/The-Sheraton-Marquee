import React, { useState } from 'react';
import {
  X,
  RotateCw,
  Compass,
  Maximize2,
  Info,
  MapPin,
  Volume2,
  VolumeX,
  Layers,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { HALLS_DATA } from '../data/marqueeData';
import { Hall } from '../types';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialHallId?: string;
  isUrdu: boolean;
  onSelectBooking: (hallId: string) => void;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({
  isOpen,
  onClose,
  initialHallId = 'grand-kohinoor',
  isUrdu,
  onSelectBooking,
}) => {
  const [selectedHallId, setSelectedHallId] = useState<string>(initialHallId);
  const [currentViewAngle, setCurrentViewAngle] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentHall = HALLS_DATA.find((h) => h.id === selectedHallId) || HALLS_DATA[0];

  const viewModes = [
    { name: 'Stage & VIP Perspective', urdu: 'اسٹیج و وی آئی پی زاویہ', icon: '🏛️' },
    { name: 'Banquet & Seating Floor', urdu: 'ڈائننگ و مہمان ہال زاویہ', icon: '🍽️' },
    { name: 'Royal Aisle & Grand Entry', urdu: 'شاہی انٹری اور راہداری', icon: '✨' },
  ];

  const handleNextView = () => {
    setCurrentViewAngle((prev) => (prev + 1) % viewModes.length);
    setActiveHotspot(null);
  };

  const handlePrevView = () => {
    setCurrentViewAngle((prev) => (prev - 1 + viewModes.length) % viewModes.length);
    setActiveHotspot(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#120B08] border border-[#D4AF37]/50 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D4AF37]/20 bg-[#1A100B]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#6B1724] text-[#D4AF37] border border-[#D4AF37]/40">
              <Compass className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#D4AF37] uppercase tracking-wider">
                  Interactive Architectural Tour
                </span>
                <span className="text-xs text-[#A0988E]">| {currentHall.areaSqFt.toLocaleString()} sq. ft.</span>
                <span className="text-xs px-2 py-0.5 rounded bg-[#D4AF37]/10 text-[#D4AF37] font-mono">{currentHall.hallCode}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-cinzel font-bold text-[#FAF7F2]">
                {isUrdu ? currentHall.urduName : currentHall.name}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectBooking(currentHall.id)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0907] text-xs font-bold uppercase tracking-wider hover:brightness-110 cursor-pointer"
            >
              {isUrdu ? 'اس ہال کو بک کریں' : 'Book This Venue'}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#C5A059] hover:text-[#FAF7F2] rounded hover:bg-[#D4AF37]/10 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Hall Selection Tabs */}
        <div className="flex border-b border-[#D4AF37]/20 bg-[#0E0806] px-4 py-2 gap-2 overflow-x-auto">
          {HALLS_DATA.map((hall) => {
            const isSelected = hall.id === selectedHallId;
            return (
              <button
                key={hall.id}
                onClick={() => {
                  setSelectedHallId(hall.id);
                  setCurrentViewAngle(0);
                  setActiveHotspot(null);
                }}
                className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#6B1724] text-[#F9E7B9] border border-[#D4AF37]/60 shadow'
                    : 'text-[#C5BDB2] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10'
                }`}
              >
                {isUrdu ? hall.urduName : hall.name}
              </button>
            );
          })}
        </div>

        {/* Interactive Architectural Blueprint Stage */}
        <div className="relative flex-1 min-h-[380px] sm:min-h-[460px] bg-[#0A0604] overflow-hidden select-none p-6">
          {/* Authentic Venue Photo Layers */}
          {currentHall.id === 'grand-kohinoor' && (
            <img
              src="https://i.pinimg.com/1200x/43/43/0d/43430d550c6a319b521080334f322095.jpg"
              alt={currentHall.name}
              className="absolute inset-0 w-full h-full object-cover opacity-25 filter brightness-90 transition-opacity duration-700"
            />
          )}
          {(currentHall.id === 'sheesh-mahal-vip' || currentHall.id === 'royal-shalimar') && (
            <img
              src="/src/assets/images/royal_white_stage_1789111962011.jpg"
              alt={currentHall.name}
              className="absolute inset-0 w-full h-full object-cover opacity-25 filter brightness-90 transition-opacity duration-700"
              referrerPolicy="no-referrer"
            />
          )}
          {currentHall.id === 'royal-imperial-lawn' && (
            <img
              src="/assets/marquee_stage.jpg"
              alt={currentHall.name}
              className="absolute inset-0 w-full h-full object-cover opacity-25 filter brightness-90 transition-opacity duration-700"
            />
          )}

          {/* Subtle architectural grid pattern */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Luxury ambient radial glow matching hall theme */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${currentHall.colorTheme || '#D4AF37'} 0%, transparent 70%)`,
            }}
          />

          {/* Spatial Blueprint Canvas */}
          <div className="relative w-full h-full border border-[#D4AF37]/30 rounded-xl bg-[#140C08]/80 p-6 flex flex-col justify-between backdrop-blur-sm shadow-inner">
            {/* Perspective HUD Banner */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-base">{viewModes[currentViewAngle].icon}</span>
                <div>
                  <div className="text-[11px] text-[#A0988E] uppercase tracking-wider font-mono">
                    {isUrdu ? 'موجودہ زاویہ' : 'Active Spatial View'}
                  </div>
                  <div className="text-sm font-bold text-[#F9E7B9]">
                    {isUrdu ? viewModes[currentViewAngle].urdu : viewModes[currentViewAngle].name}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[11px] text-[#A0988E] uppercase tracking-wider font-mono">
                  {isUrdu ? 'طرز تعمیر' : 'Architecture'}
                </div>
                <div className="text-xs font-semibold text-[#D4AF37]">
                  {currentHall.type === 'indoor' ? '100% Pillarless Ballroom' : currentHall.type === 'outdoor' ? 'Botanical Garden Lawn' : 'VIP Private Enclave'}
                </div>
              </div>
            </div>

            {/* Interactive Hotspots Overlaid on Blueprint */}
            <div className="relative flex-1 my-4 min-h-[220px]">
              {currentHall.floorPlanHotspots?.map((hotspot, idx) => (
                <div
                  key={idx}
                  style={{ top: `${hotspot.coords.y}%`, left: `${hotspot.coords.x}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group z-20"
                >
                  <button
                    onClick={() => setActiveHotspot(activeHotspot === hotspot.name ? null : hotspot.name)}
                    className="relative flex items-center justify-center px-3 py-1.5 rounded-full bg-[#1A100B] border border-[#D4AF37] text-[#D4AF37] hover:bg-[#6B1724] hover:text-[#FAF7F2] shadow-lg cursor-pointer transition-all gap-1.5 text-xs font-bold"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                    <span>{hotspot.name}</span>
                  </button>

                  {/* Tooltip Card */}
                  {activeHotspot === hotspot.name && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3 rounded-lg bg-[#140C08]/98 border border-[#D4AF37] text-left shadow-2xl backdrop-blur-md z-30 animate-fadeIn">
                      <p className="text-xs font-bold text-[#F9E7B9] font-cinzel">{hotspot.name}</p>
                      <p className="text-[11px] text-[#E0D7C6] mt-1 leading-relaxed">{hotspot.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Architectural Highlights Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-[#D4AF37]/20 text-[11px]">
              <div className="p-2 rounded bg-black/40 border border-[#D4AF37]/15">
                <span className="text-[#A0988E] block">Power Infrastructure</span>
                <span className="text-[#F9E7B9] font-semibold">{currentHall.powerBackup}</span>
              </div>
              <div className="p-2 rounded bg-black/40 border border-[#D4AF37]/15">
                <span className="text-[#A0988E] block">Climate HVAC</span>
                <span className="text-[#F9E7B9] font-semibold">{currentHall.acHeating}</span>
              </div>
              <div className="p-2 rounded bg-black/40 border border-[#D4AF37]/15">
                <span className="text-[#A0988E] block">Ceiling Height</span>
                <span className="text-[#F9E7B9] font-semibold">{currentHall.ceilingHeight}</span>
              </div>
              <div className="p-2 rounded bg-black/40 border border-[#D4AF37]/15">
                <span className="text-[#A0988E] block">Dedicated Parking</span>
                <span className="text-[#F9E7B9] font-semibold">{currentHall.parkingSpots} Valet Bays</span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows for View Modes */}
          <button
            onClick={handlePrevView}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 border border-[#D4AF37]/50 text-[#FAF7F2] hover:bg-[#6B1724] transition-all cursor-pointer z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNextView}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 border border-[#D4AF37]/50 text-[#FAF7F2] hover:bg-[#6B1724] transition-all cursor-pointer z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Perspective View Controls Bar */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 rounded-full bg-black/90 border border-[#D4AF37]/40 backdrop-blur-md z-20">
            <button
              onClick={handlePrevView}
              className="text-xs text-[#E0D7C6] hover:text-[#D4AF37] px-2 py-1 rounded hover:bg-white/10 cursor-pointer"
            >
              ⟲ Prev View
            </button>
            <span className="text-[#D4AF37]/40">|</span>
            <div className="flex items-center gap-1.5 text-xs text-[#F9E7B9]">
              <RotateCw className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>View {currentViewAngle + 1} of {viewModes.length}</span>
            </div>
            <span className="text-[#D4AF37]/40">|</span>
            <button
              onClick={handleNextView}
              className="text-xs text-[#E0D7C6] hover:text-[#D4AF37] px-2 py-1 rounded hover:bg-white/10 cursor-pointer"
            >
              Next View ⟳
            </button>
          </div>
        </div>

        {/* Bottom Venue Specs Strip */}
        <div className="p-4 bg-[#140C08] border-t border-[#D4AF37]/20 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-4 text-[#C5BDB2]">
            <div>
              <span className="text-[#D4AF37] font-semibold">Max Guests:</span> {currentHall.capacity.floating.toLocaleString()}
            </div>
            <div>
              <span className="text-[#D4AF37] font-semibold">Ceiling:</span> {currentHall.ceilingHeight}
            </div>
            <div>
              <span className="text-[#D4AF37] font-semibold">Climate:</span> {currentHall.acHeating}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onSelectBooking(currentHall.id);
              }}
              className="px-4 py-2 rounded bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0907] font-bold uppercase tracking-wider hover:brightness-110 cursor-pointer"
            >
              {isUrdu ? 'بکنگ فارم پر جائیں' : 'Proceed to Book'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
