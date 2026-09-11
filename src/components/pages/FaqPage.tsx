import React, { useState } from 'react';
import {
  Crown,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Phone,
  Sparkles,
} from 'lucide-react';
import { PageId, Language, FaqItem } from '../../types';
import { FAQ_DATA, MARQUEE_INFO } from '../../data/marqueeData';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
  language: Language;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate, language }) => {
  const isUrdu = language === 'ur';
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions', urduLabel: 'تمام سوالات' },
    { id: 'booking', label: 'Booking & Payments', urduLabel: 'بکنگ اور ادائیگیاں' },
    { id: 'catering', label: 'Catering & Menus', urduLabel: 'کیٹرنگ اور مینیو' },
    { id: 'logistics', label: 'Power & Parking', urduLabel: 'بجلی اور پارکنگ' },
    { id: 'policies', label: 'Timings & Policies', urduLabel: 'اوقات اور قواعد' },
  ];

  const filteredFaqs =
    selectedCategory === 'all'
      ? FAQ_DATA
      : FAQ_DATA.filter((f) => f.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? '' : id);
  };

  return (
    <div className="space-y-16 py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6B1724]/80 border border-[#D4AF37]/50 text-xs font-semibold text-[#F9E7B9] uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{isUrdu ? 'عام سوالات و جوابات' : 'Clarity & Guidance'}</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#FAF7F2]">
          {isUrdu ? (
            <span className="font-urdu leading-relaxed">
              اکثر پوچھے جانے والے سوالات کے جوابات
            </span>
          ) : (
            <>
              Frequently Asked <span className="gold-gradient-text">Questions</span>
            </>
          )}
        </h1>
        <p className="text-sm sm:text-base text-[#C5BDB2]">
          Everything you need to know regarding bookings, advance deposits, power contingencies, and guest policies at The Sheraton Marquee.
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0A0705] shadow'
                  : 'bg-[#140C08] text-[#C5BDB2] border border-[#D4AF37]/30 hover:text-[#FAF7F2]'
              }`}
            >
              {isUrdu ? cat.urduLabel : cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion FAQ Items */}
      <div className="space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openFaqId === faq.id;
          return (
            <div
              key={faq.id}
              className="rounded-xl bg-[#140C08] border border-[#D4AF37]/30 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#1A100C] transition-colors cursor-pointer"
              >
                <span className="font-cinzel text-sm sm:text-base font-bold text-[#FAF7F2]">
                  {isUrdu ? faq.urduQuestion : faq.question}
                </span>
                <div className="p-1 rounded-full bg-[#6B1724] text-[#D4AF37] shrink-0">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-[#C5BDB2] leading-relaxed border-t border-[#D4AF37]/15 bg-[#0F0906]/60 animate-fadeIn">
                  <p>{isUrdu ? faq.urduAnswer : faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions CTA */}
      <div className="p-8 rounded-2xl bg-[#180E0A] border-2 border-[#D4AF37]/40 text-center space-y-4 shadow-xl">
        <h3 className="font-cinzel text-xl font-bold text-[#FAF7F2]">
          {isUrdu ? 'مزید سوالات یا خصوصی استفسار؟' : 'Have a Specific Request or Custom Date?'}
        </h3>
        <p className="text-xs text-[#C5BDB2] max-w-lg mx-auto">
          Our front desk and event managers are available 7 days a week (10:00 AM – 11:30 PM) to answer all your queries.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={`tel:${MARQUEE_INFO.phone}`}
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#6B1724] hover:bg-[#8B1E30] text-[#FAF7F2] text-xs font-bold uppercase tracking-wider border border-[#D4AF37]/40 shadow transition-all"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>Call: 0321-8662726</span>
          </a>
          <a
            href={`https://wa.me/${MARQUEE_INFO.whatsapp}?text=Assalam-o-Alaikum!%20I%20have%20a%20question%20regarding%20The%20Sheraton%20Marquee%20booking.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-[#0A0705] text-xs font-bold uppercase tracking-wider shadow transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Our General Manager</span>
          </a>
        </div>
      </div>
    </div>
  );
};
