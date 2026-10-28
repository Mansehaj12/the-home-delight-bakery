import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { createWhatsAppLink, buildGeneralEnquiryMessage } from '../utils/whatsapp';

export default function HeroSection({ onExploreClick, onQuickViewHeroProduct }) {
  // Toggle between the two authentic bakery hero spotlights
  const [activeSpotlight, setActiveSpotlight] = useState('khoya-barfi');

  const spotlights = {
    'khoya-barfi': {
      id: 'khoya-barfi',
      title: 'Homemade Desi Ghee Khoya Barfi',
      tagline: '100% Eggless • In Purple (500g) & Red (1kg) Festive Boxes',
      price: 'From ₹400',
      badge: '★ Signature Khoya Barfi',
      image: '/images/khoya_barfi.png',
      alt: 'Homemade Desi Ghee Khoya Barfi promotional poster'
    },
    'hamper-200': {
      id: 'hamper-200',
      title: 'Premium Handcrafted Chocolate Boxes',
      tagline: '100% Eggless • Flavoured Chocolates & Cake Pop (₹200 & ₹350)',
      price: 'From ₹200',
      badge: '★ Festive Chocolates',
      image: '/images/choco_box.png',
      alt: 'Premium Chocolate Boxes promotional poster'
    }
  };

  const current = spotlights[activeSpotlight];

  return (
    <section id="home" className="relative overflow-hidden pt-4 pb-6 sm:pt-10 sm:pb-12 bg-bakery-ivory">
      {/* Subtle Festive Background Glows */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-72 h-72 rounded-full bg-bakery-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-72 h-72 rounded-full bg-bakery-maroon/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mobile-optimized Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-center">
          
          {/* Text & CTAs (Left on desktop, Top on mobile) */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4 text-center lg:text-left">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bakery-cream border border-bakery-gold/40 text-bakery-maroon text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
              <span className="text-amber-500">🪔</span>
              <span>Diwali Gifting Collection 2026</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-bakery-maroon tracking-tight leading-[1.15]">
              Make This Diwali <span className="gold-shimmer font-display">Sweeter</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-xs sm:text-base text-bakery-brown-muted max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed">
              Beautifully curated festive hampers, handcrafted with love.
            </p>

            {/* Conversion Action Buttons */}
            <div className="flex flex-row items-center justify-center lg:justify-start gap-2.5 pt-1 sm:pt-2">
              <a
                href="#hampers"
                onClick={onExploreClick}
                className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-bakery-maroon hover:bg-bakery-maroon-hover text-white font-semibold text-xs sm:text-sm shadow-sm transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
              >
                <Sparkles className="w-3.5 h-3.5 text-bakery-gold" />
                <span>Explore Hampers</span>
              </a>

              <a
                href={createWhatsAppLink(buildGeneralEnquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-initial px-4 py-3 rounded-xl bg-white hover:bg-bakery-cream text-bakery-maroon border border-bakery-maroon/50 font-medium text-xs sm:text-sm shadow-2xs transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Compact Browsing Assurance */}
            <p className="text-[10px] sm:text-xs text-bakery-brown-light pt-0.5">
              Browse freely without login • Orders placed directly on WhatsApp
            </p>
          </div>

          {/* Real Hamper Spotlight (Right on desktop, Prominent Visual Card on mobile) */}
          <div className="lg:col-span-6 space-y-2">
            
            {/* Quick Switcher Tabs between Real Products */}
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <button
                type="button"
                onClick={() => setActiveSpotlight('khoya-barfi')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors border ${
                  activeSpotlight === 'khoya-barfi'
                    ? 'bg-bakery-maroon text-white border-bakery-maroon shadow-2xs'
                    : 'bg-white text-bakery-brown border-bakery-border hover:bg-bakery-cream'
                }`}
              >
                🍬 Khoya Barfi (₹400 / ₹800)
              </button>

              <button
                type="button"
                onClick={() => setActiveSpotlight('hamper-200')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors border ${
                  activeSpotlight === 'hamper-200'
                    ? 'bg-bakery-maroon text-white border-bakery-maroon shadow-2xs'
                    : 'bg-white text-bakery-brown border-bakery-border hover:bg-bakery-cream'
                }`}
              >
                🍫 Chocolate Boxes (₹200 / ₹350)
              </button>
            </div>

            {/* Interactive Spotlight Card */}
            <div
              onClick={() => onQuickViewHeroProduct(current.id)}
              className="bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 shadow-card-subtle hover:shadow-card-hover border border-bakery-border transition-all duration-300 cursor-pointer group relative max-w-sm sm:max-w-md mx-auto"
            >
              {/* Product Photograph Container: 1.2:1 aspect ratio preserving the full poster */}
              <div className="relative aspect-[1.2/1] rounded-xl sm:rounded-2xl overflow-hidden bg-bakery-cream border border-bakery-border/50 flex items-center justify-center">
                <img
                  src={current.image}
                  alt={current.alt}
                  className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-500"
                  loading="eager"
                />

                {/* Actual Bakery Photo Badge */}
                <div className="absolute top-2 left-2 bg-bakery-maroon/90 backdrop-blur-xs text-white text-[10px] sm:text-xs px-2.5 py-1 rounded-full font-semibold border border-bakery-gold/40 shadow-xs flex items-center gap-1">
                  <span>★</span>
                  <span>{current.badge}</span>
                </div>

                <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-xs text-bakery-maroon text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-xs border border-bakery-border">
                  {current.price}
                </div>
              </div>

              {/* Compact Caption */}
              <div className="pt-2.5 pb-0.5 px-1 flex items-center justify-between gap-2">
                <div>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-bakery-brown group-hover:text-bakery-maroon transition-colors line-clamp-1">
                    {current.title}
                  </h3>
                  <p className="text-[11px] text-bakery-brown-muted line-clamp-1">
                    {current.tagline}
                  </p>
                </div>

                <span className="flex-shrink-0 text-xs font-semibold text-bakery-maroon underline underline-offset-2 flex items-center gap-0.5">
                  <span>View</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
