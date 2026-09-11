/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, Language } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { VirtualTourModal } from './components/VirtualTourModal';
import { BrochureModal } from './components/BrochureModal';

// Pages
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { HallsPage } from './components/pages/HallsPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { PackagesPage } from './components/pages/PackagesPage';
import { GalleryPage } from './components/pages/GalleryPage';
import { TestimonialsPage } from './components/pages/TestimonialsPage';
import { BlogPage } from './components/pages/BlogPage';
import { FaqPage } from './components/pages/FaqPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [language, setLanguage] = useState<Language>('en');

  // Modals state
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);
  const [virtualTourHallId, setVirtualTourHallId] = useState<string | undefined>(undefined);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  // Booking prefill details passed to Contact page
  const [prefillBooking, setPrefillBooking] = useState<{
    date: string;
    hallId: string;
    guests: number;
  }>({
    date: '',
    hallId: 'grand-kohinoor',
    guests: 450,
  });

  // Handle page changes & scroll to top
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenVirtualTour = (hallId?: string) => {
    setVirtualTourHallId(hallId);
    setIsVirtualTourOpen(true);
  };

  const handleSelectBookingHall = (hallId: string) => {
    setPrefillBooking((prev) => ({ ...prev, hallId }));
    handleNavigate('contact');
  };

  const handleCheckAvailability = (date: string, hallId: string, guests: number) => {
    setPrefillBooking({ date, hallId, guests });
    handleNavigate('contact');
  };

  return (
    <div
      className={`min-h-screen flex flex-col bg-[#0A0705] text-[#FAF7F2] font-sans selection:bg-[#D4AF37] selection:text-[#0A0705] ${
        language === 'ur' ? 'font-urdu-clean' : ''
      }`}
    >
      {/* Top Main Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        language={language}
        onToggleLanguage={() => setLanguage((prev) => (prev === 'en' ? 'ur' : 'en'))}
        onOpenBrochure={() => setIsBrochureOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            language={language}
            onOpenVirtualTour={handleOpenVirtualTour}
            onOpenBrochure={() => setIsBrochureOpen(true)}
            onCheckAvailability={handleCheckAvailability}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} language={language} />
        )}

        {currentPage === 'halls' && (
          <HallsPage
            onNavigate={handleNavigate}
            language={language}
            onOpenVirtualTour={handleOpenVirtualTour}
            onSelectBookingHall={handleSelectBookingHall}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            language={language}
            onOpenBooking={() => handleNavigate('contact')}
          />
        )}

        {currentPage === 'packages' && (
          <PackagesPage
            onNavigate={handleNavigate}
            language={language}
            onOpenBooking={() => handleNavigate('contact')}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage onNavigate={handleNavigate} language={language} />
        )}

        {currentPage === 'testimonials' && (
          <TestimonialsPage
            onNavigate={handleNavigate}
            language={language}
            onOpenBooking={() => handleNavigate('contact')}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage onNavigate={handleNavigate} language={language} />
        )}

        {currentPage === 'faq' && (
          <FaqPage onNavigate={handleNavigate} language={language} />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            language={language}
            prefillDetails={prefillBooking}
          />
        )}
      </main>

      {/* Persistent Footer */}
      <Footer
        onNavigate={handleNavigate}
        language={language}
        onOpenBrochure={() => setIsBrochureOpen(true)}
      />

      {/* Floating Quick Action Buttons: WhatsApp & Call */}
      <FloatingActions onOpenVirtualTour={() => handleOpenVirtualTour()} />

      {/* 360-Degree Virtual Tour Modal */}
      <VirtualTourModal
        isOpen={isVirtualTourOpen}
        onClose={() => setIsVirtualTourOpen(false)}
        initialHallId={virtualTourHallId}
        language={language}
      />

      {/* PDF / Digital Brochure Download Modal */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        language={language}
      />
    </div>
  );
}
