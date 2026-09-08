import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickAccessHub } from './components/QuickAccessHub';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { TemperatureControlHighlight } from './components/TemperatureControlHighlight';
import { StrengthsSection } from './components/StrengthsSection';
import { IndustriesSection } from './components/IndustriesSection';
import { GallerySection } from './components/GallerySection';
import { BranchNetworkMap } from './components/BranchNetworkMap';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TrackingModal } from './components/TrackingModal';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { QuickFloatActions } from './components/QuickFloatActions';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedQuoteService, setSelectedQuoteService] = useState<string | undefined>(undefined);
  
  const [trackingModalOpen, setTrackingModalOpen] = useState(false);
  const [selectedTrackingCode, setSelectedTrackingCode] = useState<string>('');

  const [selectedBranchId, setSelectedBranchId] = useState<string>('hyderabad');

  const handleOpenQuote = (serviceId?: string) => {
    setSelectedQuoteService(serviceId);
    setQuoteModalOpen(true);
  };

  const handleOpenTracking = (code?: string) => {
    setSelectedTrackingCode(code || 'SWL-2026-8841');
    setTrackingModalOpen(true);
  };

  const handleSelectBranch = (branchId: string) => {
    setSelectedBranchId(branchId);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Top Navbar */}
      <Navbar
        onOpenQuoteModal={handleOpenQuote}
        onOpenTrackingModal={() => handleOpenTracking()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenQuoteModal={handleOpenQuote}
          onOpenTrackingModal={handleOpenTracking}
          onSelectBranch={handleSelectBranch}
        />

        <QuickAccessHub
          onOpenQuoteModal={handleOpenQuote}
          onOpenTrackingModal={handleOpenTracking}
        />

        <AboutSection
          onOpenQuoteModal={() => handleOpenQuote()}
        />

        <ServicesSection
          onOpenQuoteModal={handleOpenQuote}
        />

        <TemperatureControlHighlight
          onOpenQuoteModal={handleOpenQuote}
        />

        <StrengthsSection
          onOpenQuoteModal={() => handleOpenQuote()}
        />

        <IndustriesSection
          onOpenQuoteModal={handleOpenQuote}
        />

        <GallerySection />

        <BranchNetworkMap
          selectedBranchId={selectedBranchId}
          onOpenQuoteModal={handleOpenQuote}
        />

        <ContactSection
          onOpenQuoteModal={() => handleOpenQuote()}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenQuoteModal={handleOpenQuote}
        onOpenTrackingModal={() => handleOpenTracking()}
      />

      {/* Floating Fast CTAs & Quick Access Menu */}
      <QuickFloatActions
        onOpenQuoteModal={handleOpenQuote}
        onOpenTrackingModal={handleOpenTracking}
      />

      {/* Modals */}
      <QuoteCalculatorModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialServiceId={selectedQuoteService}
      />

      <TrackingModal
        isOpen={trackingModalOpen}
        onClose={() => setTrackingModalOpen(false)}
        initialTrackingCode={selectedTrackingCode}
      />
    </div>
  );
}
