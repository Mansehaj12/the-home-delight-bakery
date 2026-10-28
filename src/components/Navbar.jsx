import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryInfo';
import { createWhatsAppLink, buildGeneralEnquiryMessage } from '../utils/whatsapp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Diwali Hampers", href: "#hampers" },
    { label: "Corporate Gifting", href: "#corporate" },
    { label: "How to Order", href: "#how-to-order" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
      {/* Compact Announcement Bar */}
      <aside aria-label="Announcement" className="bg-bakery-maroon-dark text-bakery-gold-light text-[11px] sm:text-xs py-1 px-3 text-center font-medium tracking-wide flex items-center justify-center gap-1.5 border-b border-bakery-gold/20 select-none">
        <span>🪔</span>
        <span className="truncate">100% Eggless Diwali Hampers • Handcrafted in Patiala</span>
        <span className="hidden sm:inline">• Free Pickup near Tripuri Town</span>
      </aside>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-bakery-ivory/95 backdrop-blur-md shadow-sm border-b border-bakery-border py-2'
            : 'bg-bakery-ivory/90 backdrop-blur-xs border-b border-bakery-border/60 py-2.5 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Bakery Logo & Brand Name */}
          <a
            href="#home"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-bakery-maroon rounded-lg"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-bakery-maroon text-bakery-gold flex items-center justify-center shadow-xs border border-bakery-gold/50 flex-shrink-0 group-hover:scale-105 transition-transform">
              <span className="text-base sm:text-lg">🪔</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg lg:text-xl text-bakery-maroon leading-tight tracking-tight">
                {BAKERY_INFO.name}
              </span>
              <span className="text-[10px] text-bakery-brown-muted tracking-wider uppercase hidden sm:block font-sans">
                {BAKERY_INFO.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-bakery-brown">
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
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href="#hampers"
              className="px-4 py-2 text-xs font-semibold rounded-full bg-bakery-maroon text-bakery-white hover:bg-bakery-maroon-hover transition-colors shadow-xs flex items-center gap-1.5 border border-bakery-gold/30 min-h-[40px]"
            >
              <Sparkles className="w-3.5 h-3.5 text-bakery-gold" />
              <span>Explore Hampers</span>
            </a>

            <a
              href={createWhatsAppLink(buildGeneralEnquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold rounded-full bg-bakery-white text-bakery-maroon hover:bg-bakery-cream transition-colors border border-bakery-maroon/40 shadow-xs flex items-center gap-1.5 min-h-[40px]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Right Controls: WhatsApp Quick Icon + Menu Toggle */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <a
              href={createWhatsAppLink(buildGeneralEnquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order on WhatsApp"
              className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center hover:bg-emerald-100 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-xl text-bakery-maroon flex items-center justify-center hover:bg-bakery-cream transition-colors focus:outline-none focus:ring-2 focus:ring-bakery-gold"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Overlay */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-x-0 top-[73px] bottom-0 z-50 bg-black/40 backdrop-blur-xs animate-fadeIn"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-bakery-ivory border-b border-bakery-border px-5 py-5 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto"
            >
              <nav className="flex flex-col divide-y divide-bakery-border/50">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="py-3 text-base font-serif font-semibold text-bakery-brown hover:text-bakery-maroon transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-bakery-gold text-xs">→</span>
                  </a>
                ))}
              </nav>

              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href="#hampers"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 rounded-xl bg-bakery-maroon text-white font-semibold text-sm shadow-xs flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <Sparkles className="w-4 h-4 text-bakery-gold" />
                  <span>Explore Diwali Hampers</span>
                </a>

                <a
                  href={createWhatsAppLink(buildGeneralEnquiryMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 rounded-xl bg-white border border-bakery-maroon text-bakery-maroon font-semibold text-sm shadow-xs flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>Order on WhatsApp (+91 9417528889)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
