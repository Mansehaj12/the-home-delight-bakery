import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import ProductDetailModal from './components/ProductDetailModal';
import CorporateGifting from './components/CorporateGifting';
import WhyChooseUs from './components/WhyChooseUs';
import HowToOrder from './components/HowToOrder';
import AboutBakery from './components/AboutBakery';
import ContactSection from './components/ContactSection';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import QRCodeModal from './components/QRCodeModal';
import Footer from './components/Footer';
import { HAMPERS } from './data/hampers';

export default function App() {
  const [selectedHamper, setSelectedHamper] = useState(null);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  const handleHeroQuickView = () => {
    // Open product modal for Khoya Barfi (first product in data)
    const barfiProduct = HAMPERS.find(h => h.id === 'khoya-barfi') || HAMPERS[0];
    setSelectedHamper(barfiProduct);
  };

  const scrollToHampers = (e) => {
    e?.preventDefault();
    const el = document.getElementById('hampers');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bakery-ivory text-bakery-brown selection:bg-bakery-gold/25 selection:text-bakery-maroon relative">
      {/* Navigation */}
      <Navbar onOpenQrModal={() => setIsQrModalOpen(true)} />

      {/* Hero Section */}
      <main className="flex-grow">
        <HeroSection
          onExploreClick={scrollToHampers}
          onQuickViewHeroProduct={handleHeroQuickView}
        />

        {/* Diwali Hamper Collection Grid */}
        <ProductGrid onSelectProduct={(hamper) => setSelectedHamper(hamper)} />

        {/* Corporate Gifting Section */}
        <CorporateGifting />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* How to Order Guide */}
        <HowToOrder />

        {/* About Bakery */}
        <AboutBakery />

        {/* Contact and Pickup Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenQrModal={() => setIsQrModalOpen(true)} />

      {/* Modals & Overlays */}
      <ProductDetailModal
        hamper={selectedHamper}
        onClose={() => setSelectedHamper(null)}
      />

      <QRCodeModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
      />

      {/* Floating Action Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
