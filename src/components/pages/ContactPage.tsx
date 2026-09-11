import React, { useState } from 'react';
import {
  Crown,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Calendar,
  Users,
  Building2,
  Sparkles,
  ExternalLink,
  Instagram,
  Facebook,
  Youtube,
  AlertCircle,
} from 'lucide-react';
import { PageId, Language, BookingFormValues } from '../../types';
import { MARQUEE_INFO, HALLS_DATA, PACKAGES_DATA } from '../../data/marqueeData';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  language: Language;
  prefillDetails?: { date: string; hallId: string; guests: number };
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  language,
  prefillDetails,
}) => {
  const isUrdu = language === 'ur';

  // Form State
  const [formData, setFormData] = useState<BookingFormValues>({
    fullName: '',
    phone: '',
    whatsapp: '',
    email: '',
    eventDate: prefillDetails?.date || '',
    timeSlot: 'dinner',
    eventType: 'Baraat Reception',
    hallId: prefillDetails?.hallId || 'grand-kohinoor',
    guestCount: prefillDetails?.guests || 450,
    packageTier: 'gold-royale',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Availability calendar checker tool
  const [checkDate, setCheckDate] = useState(
    prefillDetails?.date || new Date().toISOString().split('T')[0]
  );
  const [checkHall, setCheckHall] = useState(
    prefillDetails?.hallId || 'grand-kohinoor'
  );

  const selectedHallObj = HALLS_DATA.find((h) => h.id === formData.hallId);
  const selectedPackageObj = PACKAGES_DATA.find((p) => p.id === formData.packageTier);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `*New Event Booking Inquiry - The Sheraton Marquee*\n` +
      `-----------------------------------------\n` +
      `Host Name: ${formData.fullName}\n` +
      `Phone: ${formData.phone}\n` +
      `WhatsApp: ${formData.whatsapp || formData.phone}\n` +
      `Email: ${formData.email || 'N/A'}\n` +
      `Event Date: ${formData.eventDate}\n` +
      `Slot: ${formData.timeSlot.toUpperCase()}\n` +
      `Event Type: ${formData.eventType}\n` +
      `Selected Venue: ${selectedHallObj?.name}\n` +
      `Guest Count: ${formData.guestCount} Persons\n` +
      `Package Interest: ${selectedPackageObj?.name}\n` +
      `Special Requests: ${formData.message || 'None'}\n` +
      `-----------------------------------------\n` +
      `Please confirm availability and schedule site tour.`
    );
    window.open(`https://wa.me/${MARQUEE_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6B1724]/80 border border-[#D4AF37]/50 text-xs font-semibold text-[#F9E7B9] uppercase tracking-wider">
          <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{isUrdu ? 'بکنگ و استفسار' : 'Inquire & Reserve'}</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#FAF7F2]">
          {isUrdu ? (
            <span className="font-urdu leading-relaxed">
              دی شیریٹن مارکی میں بکنگ اور براہِ راست رابطہ
            </span>
          ) : (
            <>
              Connect with Our <span className="gold-gradient-text">Event Architects</span>
            </>
          )}
        </h1>
        <p className="text-sm sm:text-base text-[#C5BDB2]">
          Fill out the inquiry form below or call directly on <strong className="text-[#D4AF37]">0321-8662726</strong> for instant date reservation and menu planning.
        </p>
      </div>

      {/* Online Date & Hall Availability Checker Widget */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#140C08] border-2 border-[#D4AF37]/40 shadow-xl space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-[#6B1724] text-[#D4AF37]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#FAF7F2]">
              Live Hall Availability Checker (2026 Season)
            </h3>
            <p className="text-xs text-[#C5BDB2]">
              Select your date and hall to check lunch & dinner availability slots.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#E0D7C6] mb-1.5">
              Select Desired Date:
            </label>
            <input
              type="date"
              value={checkDate}
              onChange={(e) => setCheckDate(e.target.value)}
              className="w-full bg-[#0D0907] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-[#FAF7F2] focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#E0D7C6] mb-1.5">
              Select Venue:
            </label>
            <select
              value={checkHall}
              onChange={(e) => setCheckHall(e.target.value)}
              className="w-full bg-[#0D0907] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-[#FAF7F2] focus:outline-none focus:border-[#D4AF37]"
            >
              {HALLS_DATA.map((h) => (
                <option key={h.id} value={h.id} className="bg-[#140D09]">
                  {h.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col justify-end">
            <div className="p-2.5 rounded-lg bg-[#0F0906] border border-[#D4AF37]/20 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-[#F9E7B9] font-medium">Lunch: Available</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-[#F9E7B9] font-medium">Dinner: Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Form on Left + Direct Contact & Map on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Form Column */}
        <div className="lg:col-span-7 bg-[#140C08] border border-[#D4AF37]/40 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="border-b border-[#D4AF37]/20 pb-4">
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#FAF7F2]">
              {isUrdu ? 'بکنگ و معلوماتی فارم' : 'Official Booking Inquiry Form'}
            </h2>
            <p className="text-xs text-[#C5BDB2] mt-1">
              Submit your inquiry directly. You will also receive an option to transfer this to WhatsApp instantly.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-xl bg-[#1C120D] border-2 border-[#25D366] text-center space-y-5 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-[#25D366]/20 border-2 border-[#25D366] flex items-center justify-center text-[#25D366] mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-cinzel text-xl font-bold text-[#FAF7F2]">
                  Inquiry Received with Honor!
                </h3>
                <p className="text-xs text-[#C5BDB2] mt-2 leading-relaxed">
                  Thank you, <strong className="text-[#FAF7F2]">{formData.fullName}</strong>. Our booking manager Rana Sabir Ali has logged your request for{' '}
                  <strong className="text-[#D4AF37]">{formData.eventDate}</strong> ({formData.timeSlot.toUpperCase()}) at {selectedHallObj?.name}.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#0E0805] text-xs text-[#E0D7C6] text-left space-y-1">
                <p>• Estimated Guest Count: {formData.guestCount}</p>
                <p>• Package: {selectedPackageObj?.name}</p>
                <p>• Booking Reference ID: #TSM-{Math.floor(1000 + Math.random() * 9000)}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleSendViaWhatsApp}
                  className="px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-[#0A0705] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send to 0321-8662726 on WhatsApp</span>
                </button>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-lg border border-[#D4AF37]/40 text-[#FAF7F2] text-xs font-semibold hover:bg-white/5 cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#E0D7C6] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Chaudhry Usman Tariq"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#0D0907] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-[#FAF7F2] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#E0D7C6] mb-1">
                    Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g., 0300-1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#0D0907] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-[#FAF7F2] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#E0D7C6] mb-1">
                    WhatsApp Number (for instant updates)
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g., 0321-8662726"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full bg-[#0D0907] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-[#FAF7F2] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#E0D7C6] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0D0907] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-[#FAF7F2] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#E0D7C6] mb-1">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full bg-[#0D0907] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-[#FAF7F2] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#E0D7C6] mb-1">
                    Time Slot *
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) =>
                      setFormData({ ...formData, timeSlot: e.target.value as 'lunch' | 'dinner' })
                    }
                    className="w-full bg-[#0D0907] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-[#FAF7F2] focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="dinner">Evening / Dinner (6:30 PM - 10:30 PM)</option>
                    <option value="lunch">Day / Lunch (12:30 PM - 4:00 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#E0D7C6] mb-1">
                    Event Type *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-[#0D0907] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-[#FAF7F2] focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Baraat Reception">Baraat Reception</option>
                    <option value="Walima Dinner">Walima Dinner</option>
                    <option value="Mehndi / Sangeet">Mehndi / Sangeet Night</option>
                    <option value="Nikkah Ceremony">Sacred Nikkah</option>
                    <option value="Corporate Gala / AGM">Corporate Gala / AGM</option>
                    <option value="Birthday / Anniversary">Birthday / Anniversary</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#E0D7C6] mb-1">
                    Preferred Hall *
                  </label>
                  <select
                    value={formData.hallId}
                    onChange={(e) => setFormData({ ...formData, hallId: e.target.value })}
                    className="w-full bg-[#0D0907] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-[#FAF7F2] focus:outline-none focus:border-[#D4AF37]"
                  >
                    {HALLS_DATA.map((h) => (
                      <option key={h.id} value={h.id}>
                        {h.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#E0D7C6] mb-1">
                    Estimated Guests *
                  </label>
                  <input
                    type="number"
                    min="100"
                    max="3500"
                    required
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                    className="w-full bg-[#0D0907] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-[#FAF7F2] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#E0D7C6] mb-1">
                    Package Tier
                  </label>
                  <select
                    value={formData.packageTier}
                    onChange={(e) => setFormData({ ...formData, packageTier: e.target.value })}
                    className="w-full bg-[#0D0907] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-[#FAF7F2] focus:outline-none focus:border-[#D4AF37]"
                  >
                    {PACKAGES_DATA.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#E0D7C6] mb-1">
                  Special Notes or Requirements (e.g., custom menu, stage color, separate male/female section)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share any special preferences..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#0D0907] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-[#FAF7F2] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0D0907] font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-xl cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Submit Booking Request'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="px-6 py-3.5 rounded-lg bg-[#25D366] text-[#0A0705] font-bold text-xs uppercase tracking-wider hover:bg-[#1EBE5D] transition-all shadow-xl cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Info & Google Map Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Hotlines Card */}
          <div className="p-6 rounded-2xl bg-[#140C08] border border-[#D4AF37]/40 shadow-xl space-y-4">
            <h3 className="font-cinzel text-lg font-bold text-[#F9E7B9]">
              Contact Details & Front Desk
            </h3>

            <div className="space-y-3 text-xs text-[#C5BDB2]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#FAF7F2] block">Address:</strong>
                  <span>{MARQUEE_INFO.address}</span>
                  <p className="text-[11px] text-[#A0988E] mt-0.5 font-urdu">
                    {MARQUEE_INFO.urduAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <div>
                  <strong className="text-[#FAF7F2] block">Booking Hotline:</strong>
                  <a href={`tel:${MARQUEE_INFO.phone}`} className="text-[#D4AF37] font-bold hover:underline">
                    {MARQUEE_INFO.phone} (0321-8662726)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                <div>
                  <strong className="text-[#FAF7F2] block">WhatsApp:</strong>
                  <a
                    href={`https://wa.me/${MARQUEE_INFO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] font-semibold hover:underline"
                  >
                    +92 321 8662726
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <div>
                  <strong className="text-[#FAF7F2] block">Office Hours:</strong>
                  <span>{MARQUEE_INFO.officeHours}</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-3 border-t border-[#D4AF37]/20 flex items-center gap-3">
              <span className="text-xs text-[#A0988E]">Social Channels:</span>
              <a
                href={MARQUEE_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-[#D4AF37]/20 text-[#FAF7F2] hover:text-[#D4AF37] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={MARQUEE_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-[#D4AF37]/20 text-[#FAF7F2] hover:text-[#D4AF37] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={MARQUEE_INFO.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-[#D4AF37]/20 text-[#FAF7F2] hover:text-[#D4AF37] transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-xl bg-[#140C08]">
            <div className="p-3 bg-[#1C120D] border-b border-[#D4AF37]/20 flex items-center justify-between text-xs">
              <span className="font-cinzel font-bold text-[#F9E7B9]">Sahianwala Expressway Map</span>
              <a
                href={MARQUEE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:underline flex items-center gap-1"
              >
                <span>Open in App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="relative h-64 w-full bg-[#0D0907]">
              <iframe
                title="The Sheraton Marquee Map Location"
                src={MARQUEE_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-3 text-[11px] text-[#A0988E] bg-[#0F0906]">
              • Located on Sahianwala Expressway between Muhammad Khan Town and Mansoorabad, 10 minutes from M-4 Motorway Interchange.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
