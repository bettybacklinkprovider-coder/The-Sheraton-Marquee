import React, { useState, useMemo } from 'react';
import {
  Crown,
  CheckCircle,
  Sparkles,
  Calculator,
  Share2,
  Calendar,
  MessageCircle,
  HelpCircle,
  Flame,
  Camera,
  Layers,
  Users,
} from 'lucide-react';
import { PageId, Language, PackageTier } from '../../types';
import { PACKAGES_DATA, HALLS_DATA, MARQUEE_INFO } from '../../data/marqueeData';

interface PackagesPageProps {
  onNavigate: (page: PageId) => void;
  language: Language;
  onOpenBooking: () => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({
  onNavigate,
  language,
  onOpenBooking,
}) => {
  const isUrdu = language === 'ur';

  // Interactive Custom Package Builder State
  const [guestCount, setGuestCount] = useState<number>(450);
  const [selectedHall, setSelectedHall] = useState<string>('grand-kohinoor');
  const [selectedTier, setSelectedTier] = useState<string>('gold-royale');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([
    'cold-pyro',
    'kashmiri-tea',
  ]);

  const addOnOptions = [
    { id: 'cold-pyro', name: 'Cold Pyro Sparkler & Fog Entry System', price: 45000, urduName: 'کولڈ پائیرو اور ڈرائی آئس فوگ سسٹم' },
    { id: 'drone-4k', name: 'Cinematic 4K Drone & Hall Flyover Coverage', price: 65000, urduName: 'ڈارون فلائی اوور اور فور کے کوریج' },
    { id: 'kashmiri-tea', name: 'Royal Kashmiri Pink Tea Brass Samovar Counter', price: 35000, urduName: 'شاہی کشمیری چائے براس سماوار' },
    { id: 'hydraulic-stage', name: 'Hydraulic Couple Entry Lift Platform', price: 50000, urduName: 'ہائیڈرولک جوڑا داخلہ لفٹ اسٹیج' },
    { id: 'live-qawwali-audio', name: 'Concert JBL Qawwali / Flute Sound Rigging', price: 40000, urduName: 'کنسرٹ ساؤنڈ رگنگ و لائیو قوالی سیٹ اپ' },
    { id: 'turkey-kunafa', name: 'Live Turkish Kunafa Artisanal Station', price: 55000, urduName: 'لائیو ترکیش کنافہ کاؤنٹر' },
  ];

  const currentTierObj =
    PACKAGES_DATA.find((p) => p.id === selectedTier) || PACKAGES_DATA[1];

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Real-time calculation
  const calculations = useMemo(() => {
    const baseCateringTotal = guestCount * currentTierObj.pricePerHead;
    const addOnsTotal = selectedAddOns.reduce((acc, curr) => {
      const opt = addOnOptions.find((o) => o.id === curr);
      return acc + (opt ? opt.price : 0);
    }, 0);
    const grandTotal = baseCateringTotal + addOnsTotal;
    const effectivePerHead = Math.round(grandTotal / guestCount);
    return {
      baseCateringTotal,
      addOnsTotal,
      grandTotal,
      effectivePerHead,
    };
  }, [guestCount, currentTierObj, selectedAddOns]);

  const hallObj = HALLS_DATA.find((h) => h.id === selectedHall);

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `*The Sheraton Marquee - Custom Package Estimate*\n` +
      `----------------------------------------\n` +
      `Venue: ${hallObj?.name}\n` +
      `Package Tier: ${currentTierObj.name}\n` +
      `Guest Count: ${guestCount} Persons\n` +
      `Base Price Per Head: PKR ${currentTierObj.pricePerHead.toLocaleString()}\n` +
      `Selected Add-ons: ${selectedAddOns.join(', ')}\n` +
      `----------------------------------------\n` +
      `*Estimated Grand Total: PKR ${calculations.grandTotal.toLocaleString()}*\n` +
      `Estimated Per Head: PKR ${calculations.effectivePerHead.toLocaleString()}\n\n` +
      `Please confirm hall availability and arrange a tasting session.`
    );
    window.open(`https://wa.me/${MARQUEE_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-20 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6B1724]/80 border border-[#D4AF37]/50 text-xs font-semibold text-[#F9E7B9] uppercase tracking-wider">
          <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{isUrdu ? 'پیکیجز اور شفاف ریٹس' : 'Royal Tariffs & Packages'}</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#FAF7F2]">
          {isUrdu ? (
            <span className="font-urdu leading-relaxed">
              شادی اور کارپوریٹ کے شفاف پیکیجز
            </span>
          ) : (
            <>
              Transparent Pricing with <span className="gold-gradient-text">Zero Hidden Costs</span>
            </>
          )}
        </h1>
        <p className="text-sm sm:text-base text-[#C5BDB2]">
          Every package includes full venue rental, heavy-duty Trane central AC, dual 1000kVA Caterpillar generator backup, 500+ valet parking, and complete protocol staff.
        </p>
      </div>

      {/* 4 Main Tier Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PACKAGES_DATA.map((pkg) => (
          <div
            key={pkg.id}
            className={`rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
              pkg.popular
                ? 'bg-gradient-to-b from-[#2B0E14] to-[#15090C] border-[#D4AF37] shadow-2xl relative lg:-translate-y-2'
                : 'bg-[#140C08] border-[#D4AF37]/30'
            }`}
          >
            <div className="p-6 space-y-4">
              {pkg.badge && (
                <span
                  className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    pkg.popular
                      ? 'bg-[#D4AF37] text-[#0A0705]'
                      : 'bg-[#6B1724] text-[#FAF7F2] border border-[#D4AF37]/40'
                  }`}
                >
                  {pkg.badge}
                </span>
              )}

              <div>
                <h3 className="font-cinzel text-lg font-bold text-[#FAF7F2]">
                  {isUrdu ? pkg.urduName : pkg.name}
                </h3>
                <p className="text-xs text-[#C5BDB2] mt-1 line-clamp-2">
                  {isUrdu ? pkg.urduDescription : pkg.description}
                </p>
              </div>

              <div className="py-3 border-y border-[#D4AF37]/20">
                <span className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">
                  PKR {pkg.pricePerHead.toLocaleString()}
                </span>
                <span className="text-xs text-[#C5BDB2]"> / guest</span>
                <p className="text-[11px] text-[#A0988E] mt-0.5">Min. Guests: {pkg.minGuests}</p>
              </div>

              {/* Menu highlights */}
              <div className="space-y-1.5">
                <p className="text-[11px] font-cinzel font-bold text-[#F9E7B9] uppercase">
                  Menu Selections:
                </p>
                {pkg.menuHighlights.slice(0, 5).map((m, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-xs text-[#C5BDB2]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{m}</span>
                  </div>
                ))}
              </div>

              {/* Decor Highlights */}
              <div className="space-y-1 pt-2 border-t border-[#D4AF37]/15">
                <p className="text-[11px] font-cinzel font-bold text-[#D4AF37] uppercase">
                  Stage & Hall Decor:
                </p>
                {pkg.decorFeatures.slice(0, 3).map((d, idx) => (
                  <p key={idx} className="text-[11px] text-[#A0988E] line-clamp-1">
                    • {d}
                  </p>
                ))}
              </div>
            </div>

            <div className="p-6 pt-0 space-y-2">
              <button
                onClick={() => {
                  setSelectedTier(pkg.id);
                  const el = document.getElementById('custom-builder');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0907] hover:brightness-110 shadow-lg'
                    : 'bg-[#6B1724]/70 hover:bg-[#6B1724] text-[#FAF7F2] border border-[#D4AF37]/40'
                }`}
              >
                {isUrdu ? 'اس پیکیج کا تخمینہ لگائیں' : 'Calculate & Customize'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Custom Package Builder & Cost Estimator */}
      <div
        id="custom-builder"
        className="p-6 sm:p-10 rounded-3xl bg-[#160E0A] border-2 border-[#D4AF37]/60 shadow-2xl space-y-8"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#D4AF37]/30 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
              <Calculator className="w-4 h-4" />
              <span>{isUrdu ? 'آن لائن ریٹ کیلکولیٹر' : 'Interactive Quote Builder'}</span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#FAF7F2] mt-1">
              Custom Package & Real-Time Price Estimator
            </h2>
          </div>
          <button
            onClick={handleSendToWhatsApp}
            className="flex items-center gap-2 px-4 py-2.5 rounded bg-[#25D366] text-[#0A0705] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Quote to WhatsApp (0321-8662726)</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Guest Count Slider */}
            <div className="space-y-2 p-4 rounded-xl bg-[#0F0906] border border-[#D4AF37]/30">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-[#FAF7F2] uppercase tracking-wider">
                  1. Expected Guest Count:
                </span>
                <span className="font-cinzel text-base font-bold text-[#D4AF37]">
                  {guestCount} Persons
                </span>
              </div>
              <input
                type="range"
                min="150"
                max="2500"
                step="25"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full accent-[#D4AF37] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#A0988E]">
                <span>150 Guests (Intimate)</span>
                <span>1,200 (Grand)</span>
                <span>2,500 (Mega Banquet)</span>
              </div>
            </div>

            {/* Hall Selection */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-[#FAF7F2] uppercase tracking-wider">
                2. Select Venue / Hall:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {HALLS_DATA.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setSelectedHall(h.id)}
                    className={`p-3 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                      selectedHall === h.id
                        ? 'bg-[#6B1724] border-[#D4AF37] text-[#F9E7B9] shadow'
                        : 'bg-[#0F0906] border-[#D4AF37]/25 text-[#C5BDB2] hover:text-[#FAF7F2]'
                    }`}
                  >
                    <p className="font-bold font-cinzel">{h.name}</p>
                    <p className="text-[10px] text-[#A0988E] mt-0.5">
                      Max {h.capacity.floating} Guests
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Package Tier Selection */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-[#FAF7F2] uppercase tracking-wider">
                3. Base Catering & Decor Tier:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {PACKAGES_DATA.slice(0, 3).map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedTier(p.id)}
                    className={`p-3 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                      selectedTier === p.id
                        ? 'bg-[#6B1724] border-[#D4AF37] text-[#F9E7B9] shadow'
                        : 'bg-[#0F0906] border-[#D4AF37]/25 text-[#C5BDB2] hover:text-[#FAF7F2]'
                    }`}
                  >
                    <p className="font-bold font-cinzel">{p.name}</p>
                    <p className="text-[#D4AF37] font-semibold mt-0.5">
                      PKR {p.pricePerHead.toLocaleString()} / head
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Add-on Amenities */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-[#FAF7F2] uppercase tracking-wider">
                4. Select Royal Add-ons & Stage Extras:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {addOnOptions.map((opt) => {
                  const isChecked = selectedAddOns.includes(opt.id);
                  return (
                    <div
                      key={opt.id}
                      onClick={() => toggleAddOn(opt.id)}
                      className={`p-3 rounded-lg border flex items-center justify-between text-xs cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-[#2B0E14] border-[#D4AF37] text-[#FAF7F2]'
                          : 'bg-[#0F0906] border-[#D4AF37]/25 text-[#C5BDB2] hover:border-[#D4AF37]/50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="accent-[#D4AF37]"
                        />
                        <span className="font-medium text-[11px]">{opt.name}</span>
                      </div>
                      <span className="text-[#D4AF37] font-bold text-[11px] whitespace-nowrap ml-2">
                        +PKR {opt.price.toLocaleString()}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-time Summary Receipt Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0F0906] border-2 border-[#D4AF37] shadow-2xl space-y-6">
            <div className="border-b border-[#D4AF37]/30 pb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">
                Live Quotation Summary
              </span>
              <h3 className="font-cinzel text-xl font-bold text-[#FAF7F2] mt-0.5">
                The Sheraton Marquee Tariff
              </h3>
              <p className="text-xs text-[#A0988E]">Valid for 2026 Event Calendar</p>
            </div>

            <div className="space-y-3 text-xs text-[#C5BDB2]">
              <div className="flex justify-between">
                <span>Selected Hall:</span>
                <strong className="text-[#FAF7F2]">{hallObj?.name}</strong>
              </div>
              <div className="flex justify-between">
                <span>Selected Tier:</span>
                <strong className="text-[#FAF7F2]">{currentTierObj.name}</strong>
              </div>
              <div className="flex justify-between">
                <span>Number of Guests:</span>
                <strong className="text-[#FAF7F2]">{guestCount} Persons</strong>
              </div>
              <div className="flex justify-between">
                <span>Catering & Hall Subtotal:</span>
                <span>PKR {calculations.baseCateringTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Extras & Add-ons ({selectedAddOns.length}):</span>
                <span>PKR {calculations.addOnsTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#25D366]">
                <span>Dual Caterpillar 1000kVA Power:</span>
                <span>Included (Free)</span>
              </div>
              <div className="flex justify-between text-[#25D366]">
                <span>Valet Parking (500 Cars):</span>
                <span>Included (Free)</span>
              </div>
            </div>

            {/* Total Highlight */}
            <div className="p-4 rounded-xl bg-[#280E14] border border-[#D4AF37] text-center space-y-1">
              <span className="text-[11px] text-[#E0D7C6] uppercase tracking-wider">
                Estimated Grand Total
              </span>
              <div className="font-cinzel text-3xl font-extrabold gold-gradient-text">
                PKR {calculations.grandTotal.toLocaleString()}
              </div>
              <span className="text-xs text-[#D4AF37]">
                Effective ~PKR {calculations.effectivePerHead.toLocaleString()} / person
              </span>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3 rounded-lg bg-[#25D366] text-[#0A0705] font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send to WhatsApp (0321-8662726)</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0907] font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg transition-all cursor-pointer"
              >
                Book This Custom Package
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Package Comparison Table */}
      <div className="space-y-6 pt-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] block">
            {isUrdu ? 'پیکیجز کا تقابلی جائزہ' : 'Side-by-Side Comparison'}
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#FAF7F2] mt-1">
            Features & Inclusions Breakdown
          </h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#D4AF37]/30 bg-[#140C08]">
          <table className="w-full text-left text-xs text-[#FAF7F2]">
            <thead className="bg-[#1C120D] text-[#D4AF37] font-cinzel text-xs uppercase border-b border-[#D4AF37]/30">
              <tr>
                <th className="py-3 px-4">Feature / Amenity</th>
                <th className="py-3 px-4">Silver Pearl</th>
                <th className="py-3 px-4">Gold Royale</th>
                <th className="py-3 px-4">Platinum Crown</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D4AF37]/15">
              <tr>
                <td className="py-3 px-4 font-bold">Price Per Head</td>
                <td className="py-3 px-4 text-[#D4AF37] font-bold">PKR 2,450</td>
                <td className="py-3 px-4 text-[#D4AF37] font-bold">PKR 3,450</td>
                <td className="py-3 px-4 text-[#D4AF37] font-bold">PKR 4,650</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Meat Specialties</td>
                <td className="py-3 px-4">Chicken Degi Biryani & Qorma</td>
                <td className="py-3 px-4">Baby Mutton Degi Korma + Live BBQ</td>
                <td className="py-3 px-4">Mutton Shank Korma + Whole Lamb Sajji</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Stage Backdrop</td>
                <td className="py-3 px-4">20ft Thematic Fresh Flora</td>
                <td className="py-3 px-4">35ft Imported Dutch Orchids</td>
                <td className="py-3 px-4">50ft Handcrafted Palace Arch</td>
              </tr>
              <tr>
                <td className="py-3 px-4">40ft LED Video Wall</td>
                <td className="py-3 px-4 text-[#A0988E]">Optional Add-on</td>
                <td className="py-3 px-4 text-[#25D366]">✓ Included</td>
                <td className="py-3 px-4 text-[#25D366]">✓ Curved Ultra-HD P2.5</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Couple Entry Effects</td>
                <td className="py-3 px-4">Rose Petal Drop</td>
                <td className="py-3 px-4">Cold Pyro + Low Fog Cloud</td>
                <td className="py-3 px-4">Hydraulic Lift Stage + Pyro</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Dual 1000kVA Generator</td>
                <td className="py-3 px-4 text-[#25D366]">✓ Included</td>
                <td className="py-3 px-4 text-[#25D366]">✓ Included</td>
                <td className="py-3 px-4 text-[#25D366]">✓ Included</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Valet Parking Service</td>
                <td className="py-3 px-4">Up to 50 VIP Cars</td>
                <td className="py-3 px-4 text-[#25D366]">Unlimited Valet</td>
                <td className="py-3 px-4 text-[#25D366]">Unlimited + Protocol Escort</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
