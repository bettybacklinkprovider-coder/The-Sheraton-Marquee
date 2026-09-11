import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, Calendar } from 'lucide-react';
import { MARQUEE_INFO } from '../data/marqueeData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
  isUrdu: boolean;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking, isUrdu }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    'Assalam-o-Alaikum! I am interested in booking an event at The Sheraton Marquee Faisalabad. Please share hall availability and package details.'
  );

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="pointer-events-auto p-2.5 rounded-full bg-[#1A120E]/90 text-[#D4AF37] border border-[#D4AF37]/50 shadow-xl hover:bg-[#6B1724] hover:text-[#FAF7F2] transition-all duration-300 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Chat Button */}
      <a
        href={`https://wa.me/${MARQUEE_INFO.whatsapp}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-[#0A0705] font-bold text-xs sm:text-sm tracking-wide shadow-2xl hover:bg-[#1EBE5D] hover:scale-105 active:scale-95 transition-all group border-2 border-[#FAF7F2]/40"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#128C7E] border-2 border-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className={isUrdu ? 'font-urdu' : 'font-sans'}>
          {isUrdu ? 'واٹس ایپ پر رابطہ' : 'WhatsApp Us'}
        </span>
      </a>
    </div>
  );
};
