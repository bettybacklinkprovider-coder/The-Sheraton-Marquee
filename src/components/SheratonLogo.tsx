import React from 'react';
import logoImg from '../assets/images/sheraton_luxury_logo_1789043849753.jpg';

interface SheratonLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  variant?: 'horizontal' | 'vertical' | 'mark-only';
}

export const SheratonLogo: React.FC<SheratonLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  variant = 'horizontal',
}) => {
  const crestDimensions = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20 sm:w-24 sm:h-24',
  }[size];

  const titleSize = {
    sm: 'text-sm sm:text-base tracking-[0.14em]',
    md: 'text-base sm:text-lg tracking-[0.18em]',
    lg: 'text-xl sm:text-2xl tracking-[0.2em]',
    xl: 'text-2xl sm:text-3xl tracking-[0.22em]',
  }[size];

  const subSize = {
    sm: 'text-[8px] sm:text-[9px] tracking-[0.22em]',
    md: 'text-[9px] sm:text-[10px] tracking-[0.28em]',
    lg: 'text-[11px] sm:text-xs tracking-[0.32em]',
    xl: 'text-xs sm:text-sm tracking-[0.35em]',
  }[size];

  // Mark/Medallion component with the ornate gold "S" luxury crest
  const EmblemMedallion = (
    <div className={`relative ${crestDimensions} shrink-0 group`}>
      {/* Outer 24K Gold Radiant Ring with luxury drop shadow */}
      <div className="w-full h-full rounded-full p-[2px] bg-gradient-to-tr from-[#996515] via-[#F3E2B3] to-[#AA7C11] shadow-lg shadow-[#D4AF37]/30 group-hover:scale-105 transition-transform duration-300">
        <div className="w-full h-full rounded-full overflow-hidden bg-[#0A0D0C] border border-[#D4AF37]/60 flex items-center justify-center relative">
          <img
            src={logoImg}
            alt="The Sheraton Marquee Logo"
            className="w-full h-full object-cover scale-[1.08] transition-transform duration-500 group-hover:scale-115"
          />
        </div>
      </div>
    </div>
  );

  if (variant === 'mark-only') {
    return <div className={`inline-block ${className}`}>{EmblemMedallion}</div>;
  }

  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center gap-3 select-none ${className}`}>
        {EmblemMedallion}
        <div className="flex flex-col items-center">
          <span
            className={`font-cinzel font-bold uppercase leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0D4] via-[#D4AF37] to-[#AA7C11] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${titleSize}`}
          >
            The Sheraton
          </span>
          {showSubtitle && (
            <span
              className={`font-cinzel uppercase font-semibold text-[#D4AF37]/90 leading-tight mt-1 ${subSize}`}
            >
              Marquee &bull; Faisalabad
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default horizontal format matching user's Image 1
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {EmblemMedallion}
      <div className="flex flex-col justify-center whitespace-nowrap">
        <span
          className={`font-cinzel font-bold uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0D4] via-[#D4AF37] to-[#AA7C11] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${titleSize}`}
        >
          The Sheraton
        </span>
        {showSubtitle && (
          <span
            className={`font-cinzel uppercase font-semibold text-[#D4AF37]/90 leading-tight mt-1 ${subSize}`}
          >
            Marquee &bull; Faisalabad
          </span>
        )}
      </div>
    </div>
  );
};

