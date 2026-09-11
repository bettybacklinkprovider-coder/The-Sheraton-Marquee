import React from 'react';
import {
  X,
  Printer,
  Download,
  Share2,
  Crown,
  Phone,
  MapPin,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { MARQUEE_INFO, PACKAGES_DATA, HALLS_DATA } from '../data/marqueeData';
import { SheratonLogo } from './SheratonLogo';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  isUrdu: boolean;
  onBookNow: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  isUrdu,
  onBookNow,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Check out The Sheraton Marquee Faisalabad Event Brochure & Packages! \nCall: 0321-8662726 \nLocation: Sahianwala Expressway, Faisalabad.`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#140D09] border-2 border-[#D4AF37]/60 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-[#1C120D] border-b border-[#D4AF37]/30">
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-[#D4AF37]" />
            <span className="font-cinzel text-sm sm:text-base font-bold text-[#FAF7F2]">
              Official Event Brochure & Tariff Card (2026 Season)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShareWhatsApp}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold hover:bg-[#25D366]/30 cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F9E7B9] text-xs font-semibold hover:bg-[#D4AF37]/30 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#C5A059] hover:text-[#FAF7F2] rounded hover:bg-[#D4AF37]/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Brochure Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#0E0805] text-[#FAF7F2]">
          {/* Header Cover Banner */}
          <div className="text-center pb-6 border-b border-[#D4AF37]/30 relative flex flex-col items-center">
            <div className="mb-2">
              <SheratonLogo size="lg" />
            </div>
            <p className="text-xs text-[#C5BDB2] max-w-xl mx-auto mt-2">
              Sahianwala Expressway, Muhammad Khan Town, Mansoorabad, Faisalabad | Booking Hotline: 0321-8662726
            </p>
          </div>

          {/* Hall Capacities Summary */}
          <div>
            <h3 className="font-cinzel text-lg font-bold text-[#D4AF37] border-b border-[#D4AF37]/30 pb-2 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>1. Venues & Hall Capacities</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {HALLS_DATA.map((h) => (
                <div key={h.id} className="p-4 rounded-lg bg-[#19100B] border border-[#D4AF37]/30">
                  <h4 className="font-cinzel text-sm font-bold text-[#FAF7F2]">{h.name}</h4>
                  <p className="text-xs text-[#C5A059] mt-0.5">{h.urduName}</p>
                  <div className="mt-3 space-y-1.5 text-xs text-[#C5BDB2]">
                    <div className="flex justify-between">
                      <span>Seated Capacity:</span>
                      <strong className="text-[#FAF7F2]">{h.capacity.seated} Guests</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Floating Capacity:</span>
                      <strong className="text-[#FAF7F2]">{h.capacity.floating} Guests</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Area:</span>
                      <span>{h.areaSqFt.toLocaleString()} sq. ft.</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Climate Control:</span>
                      <span>{h.type === 'outdoor' ? 'Open Garden' : '100% Central HVAC'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Package Comparison Table */}
          <div>
            <h3 className="font-cinzel text-lg font-bold text-[#D4AF37] border-b border-[#D4AF37]/30 pb-2 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>2. Royal Wedding Packages & Pricing</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PACKAGES_DATA.slice(0, 3).map((pkg) => (
                <div
                  key={pkg.id}
                  className={`p-5 rounded-lg border flex flex-col justify-between ${
                    pkg.popular
                      ? 'bg-[#210D12] border-[#D4AF37] shadow-lg relative'
                      : 'bg-[#19100B] border-[#D4AF37]/30'
                  }`}
                >
                  <div>
                    {pkg.popular && (
                      <span className="absolute -top-3 right-4 px-2 py-0.5 bg-[#D4AF37] text-[#0A0705] text-[10px] font-bold rounded uppercase tracking-wider">
                        Most Popular
                      </span>
                    )}
                    <h4 className="font-cinzel text-base font-bold text-[#FAF7F2]">{pkg.name}</h4>
                    <p className="text-xs text-[#C5A059] mt-0.5">{pkg.urduName}</p>

                    <div className="my-3 py-2 border-y border-[#D4AF37]/20">
                      <span className="text-2xl font-cinzel font-black text-[#D4AF37]">
                        PKR {pkg.pricePerHead.toLocaleString()}
                      </span>
                      <span className="text-xs text-[#C5BDB2]"> / per guest</span>
                    </div>

                    <div className="space-y-2 text-xs text-[#C5BDB2]">
                      <p className="font-semibold text-[#F9E7B9]">Included Menu Highlights:</p>
                      <ul className="space-y-1 pl-1">
                        {pkg.menuHighlights.slice(0, 5).map((m, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#D4AF37]/20 text-[11px] text-[#A0988E]">
                    Min. Guests: {pkg.minGuests} • Dual 1000kVA Generator Included
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Venue Highlights & Guarantees */}
          <div className="p-4 rounded-lg bg-[#1C120D] border border-[#D4AF37]/30">
            <h4 className="font-cinzel text-sm font-bold text-[#D4AF37] mb-2 uppercase">
              The Sheraton Guarantee & Inclusions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#C5BDB2]">
              <div>✓ Dual 1000 kVA Caterpillar Silent Diesel Generators</div>
              <div>✓ 500+ Car Paved Parking with Uniformed Valet Staff</div>
              <div>✓ Soundproof Acoustic Environment with JBL Pro Sound</div>
              <div>✓ Executive Bridal Sanctuary with Safe & Salon Vanity</div>
              <div>✓ 100% Halal Punjab Food Authority Certified Kitchen</div>
              <div>✓ Direct Expressway access connecting to M-4 & M-3</div>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 bg-[#1C120D] border-t border-[#D4AF37]/30 flex items-center justify-between gap-4">
          <div className="text-xs text-[#C5BDB2]">
            For custom reservations & food tastings, contact: <strong className="text-[#FAF7F2]">0321-8662726</strong>
          </div>
          <button
            onClick={() => {
              onClose();
              onBookNow();
            }}
            className="px-5 py-2 rounded bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0907] font-bold text-xs uppercase tracking-wider hover:brightness-110 cursor-pointer"
          >
            {isUrdu ? 'ابھی بکنگ فارم پر جائیں' : 'Book Event Now'}
          </button>
        </div>
      </div>
    </div>
  );
};
