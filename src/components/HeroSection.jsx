import React from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';
import { createWhatsAppLink, buildGeneralEnquiryMessage } from '../utils/whatsapp';

export default function HeroSection({ onExploreClick }) {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-8 sm:pt-14 sm:pb-14 bg-bakery-ivory border-b border-bakery-border/50 text-center">
      {/* Subtle Festive Background Glows */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-72 h-72 rounded-full bg-bakery-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-72 h-72 rounded-full bg-bakery-maroon/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
        {/* Small Label */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bakery-cream border border-bakery-gold/40 text-bakery-maroon text-[11px] sm:text-xs font-semibold tracking-wider uppercase shadow-2xs">
          <span className="text-amber-500">🪔</span>
          <span>Diwali Gifting Collection 2026</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-bakery-maroon tracking-tight leading-[1.15]">
          Make This Diwali <span className="gold-shimmer font-display">Sweeter</span>
        </h1>

        {/* Short Festive Description */}
        <p className="text-xs sm:text-base text-bakery-brown-muted max-w-xl mx-auto font-sans leading-relaxed">
          Beautifully curated festive hampers, handcrafted with love.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-row items-center justify-center gap-3 pt-2">
          <a
            href="#khoya-barfi"
            onClick={onExploreClick}
            className="px-6 py-3 rounded-xl bg-bakery-maroon hover:bg-bakery-maroon-hover text-white font-semibold text-xs sm:text-sm shadow-sm transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
          >
            <Sparkles className="w-3.5 h-3.5 text-bakery-gold" />
            <span>Explore Hampers</span>
          </a>

          <a
            href={createWhatsAppLink(buildGeneralEnquiryMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-white hover:bg-bakery-cream text-bakery-maroon border border-bakery-maroon/50 font-medium text-xs sm:text-sm shadow-2xs transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Assurance */}
        <p className="text-[10px] sm:text-xs text-bakery-brown-light pt-1">
          100% Eggless • Patiala Local Delivery & Pickup • Order directly on WhatsApp
        </p>
      </div>
    </section>
  );
}
