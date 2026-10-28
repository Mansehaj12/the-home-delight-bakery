import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryInfo';
import { createWhatsAppLink, buildGeneralEnquiryMessage } from '../utils/whatsapp';

export default function Navbar({ onOpenQrModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Diwali Hampers", href: "#hampers" },
    { label: "Corporate Gifting", href: "#corporate" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "How to Order", href: "#how-to-order" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
      {/* Top Festive Announcement Bar */}
      <div className="bg-bakery-maroon-dark text-bakery-gold-light text-xs sm:text-sm py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 border-b border-bakery-gold/20">
        <span className="text-amber-400">🪔</span>
        <span>Diwali Hampers 2026 • 100% Eggless • Freshly Handcrafted in Patiala • Pickup & Delivery Available</span>
        <span className="text-amber-400 hidden sm:inline">✨</span>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-bakery-ivory/95 backdrop-blur-md shadow-md border-b border-bakery-border py-2.5'
            : 'bg-bakery-ivory/80 backdrop-blur-sm border-b border-bakery-border/50 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a href="#home" className="flex items-center gap-2.5 group focus:outline-none">
            <div className="w-10 h-10 rounded-full bg-bakery-maroon text-bakery-gold flex items-center justify-center shadow-md border border-bakery-gold/40 group-hover:scale-105 transition-transform">
              <span className="text-xl">🪔</span>
            </div>
            <div>
              <span className="font-serif font-bold text-lg sm:text-xl text-bakery-maroon tracking-tight block leading-tight">
                {BAKERY_INFO.name}
              </span>
              <span className="text-[11px] text-bakery-brown-muted tracking-wider uppercase block font-sans">
                {BAKERY_INFO.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-bakery-brown">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-bakery-maroon transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-bakery-gold hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#hampers"
              className="px-4 py-2 text-sm font-semibold rounded-full bg-bakery-maroon text-bakery-ivory hover:bg-bakery-maroon-hover transition-all shadow-sm hover:shadow-festive flex items-center gap-1.5 border border-bakery-gold/30"
            >
              <Sparkles className="w-4 h-4 text-bakery-gold" />
              <span>Explore Hampers</span>
            </a>

            <a
              href={createWhatsAppLink(buildGeneralEnquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-sm font-semibold rounded-full bg-emerald-700 text-white hover:bg-emerald-800 transition-colors shadow-sm flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-bakery-maroon rounded-lg hover:bg-bakery-cream transition-colors focus:outline-none focus:ring-2 focus:ring-bakery-gold"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-bakery-border bg-bakery-ivory/98 px-5 py-4 space-y-3 shadow-lg">
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 rounded-md text-base font-medium text-bakery-brown hover:bg-bakery-cream hover:text-bakery-maroon transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-bakery-border flex flex-col gap-2.5">
              <a
                href="#hampers"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 rounded-lg bg-bakery-maroon text-white font-medium shadow-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-bakery-gold" />
                <span>Explore Diwali Hampers</span>
              </a>

              <a
                href={createWhatsAppLink(buildGeneralEnquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 rounded-lg bg-emerald-700 text-white font-medium shadow-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp (+91 9417528889)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
