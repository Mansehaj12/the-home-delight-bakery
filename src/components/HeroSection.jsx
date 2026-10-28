import React from 'react';
import { Sparkles, MessageCircle, Heart, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryInfo';
import { createWhatsAppLink, buildGeneralEnquiryMessage } from '../utils/whatsapp';

export default function HeroSection({ onExploreClick, onQuickViewHeroProduct }) {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-bakery-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-bakery-maroon/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Festive Story & Headings */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline & City Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bakery-cream border border-bakery-gold/40 text-bakery-maroon text-xs sm:text-sm font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-bakery-gold animate-ping inline-block" />
              <span>{BAKERY_INFO.name}</span>
              <span className="text-bakery-brown-light">•</span>
              <span className="italic text-bakery-brown-muted">{BAKERY_INFO.tagline}</span>
            </div>

            {/* Main Festive Heading */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-bakery-maroon tracking-tight leading-[1.15]">
                Make This Diwali <span className="gold-shimmer font-display">Sweeter</span>
              </h1>
              <p className="text-lg sm:text-xl text-bakery-brown-muted max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed">
                Thoughtfully curated festive hampers, handcrafted with love and filled with delightful treats.
              </p>
            </div>

            {/* Core Bakery Trust Badges (Only confirmed business facts) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/70 border border-bakery-border shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-green-50 text-green-700 flex items-center justify-center flex-shrink-0 font-bold text-xs border border-green-200">
                  🌱
                </div>
                <div>
                  <p className="text-xs font-bold text-bakery-brown">100% Eggless</p>
                  <p className="text-[11px] text-bakery-brown-muted">Fresh home bakes</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/70 border border-bakery-border shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0 font-bold text-xs border border-amber-200">
                  🥣
                </div>
                <div>
                  <p className="text-xs font-bold text-bakery-brown">From Scratch</p>
                  <p className="text-[11px] text-bakery-brown-muted">Handmade daily</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/70 border border-bakery-border shadow-xs col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center flex-shrink-0 font-bold text-xs border border-rose-200">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-bakery-brown">Patiala, Punjab</p>
                  <p className="text-[11px] text-bakery-brown-muted">Pickup & delivery</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#hampers"
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-bakery-maroon hover:bg-bakery-maroon-hover text-bakery-ivory font-semibold text-base shadow-festive hover:shadow-festive-lg transition-all duration-300 flex items-center justify-center gap-2 border border-bakery-gold/40 group"
              >
                <span>Explore Diwali Hampers</span>
                <ArrowRight className="w-4 h-4 text-bakery-gold group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={createWhatsAppLink(buildGeneralEnquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-base shadow-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-emerald-200" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Account-free browsing assurance */}
            <div className="text-xs text-bakery-brown-light pt-1 flex items-center justify-center lg:justify-start gap-1.5">
              <ShieldCheck className="w-4 h-4 text-bakery-gold" />
              <span>Browse freely without login or account creation • Order seamlessly via WhatsApp</span>
            </div>
          </div>

          {/* Right Column: Hero Real Product Spotlight Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Corner Diya Accent */}
              <div className="absolute -top-4 -right-3 z-20 bg-bakery-maroon text-bakery-gold px-3 py-1.5 rounded-full shadow-lg border border-bakery-gold flex items-center gap-1.5 text-xs font-semibold">
                <span className="text-sm">🪔</span>
                <span>Diwali Special</span>
              </div>

              {/* Main Product Card Visual */}
              <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-festive-lg border-2 border-bakery-gold/30 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/4] bg-bakery-cream">
                  <img
                    src="/images/1.png"
                    alt="Homemade Desi Ghee Khoya Barfi from The Home Delight Bakery"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  
                  {/* Real Bakery Badge */}
                  <div className="absolute bottom-3 left-3 bg-bakery-maroon/90 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium border border-bakery-gold/50 shadow-md">
                    Actual Bakery Photo
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-4 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-bakery-gold-dark block">
                        Bakery Signature • Pure Desi Ghee
                      </span>
                      <h3 className="font-serif font-bold text-xl text-bakery-brown">
                        Homemade Desi Ghee Khoya Barfi
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-bakery-brown-muted line-clamp-2">
                    Handmade from scratch in pure desi ghee, garnished with almonds & pistachios. Packaged in festive Happy Diwali gift boxes.
                  </p>

                  <div className="pt-2 border-t border-bakery-border flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-bakery-brown-muted block">Options</span>
                      <div className="flex items-baseline gap-1 text-sm font-bold text-bakery-maroon">
                        <span>₹400</span>
                        <span className="text-xs font-normal text-bakery-brown-light">(500g)</span>
                        <span className="text-xs text-bakery-brown-light mx-1">•</span>
                        <span>₹800</span>
                        <span className="text-xs font-normal text-bakery-brown-light">(1kg)</span>
                      </div>
                    </div>

                    <button
                      onClick={onQuickViewHeroProduct}
                      className="px-4 py-2 text-xs font-bold rounded-full bg-bakery-gold/20 text-bakery-maroon hover:bg-bakery-maroon hover:text-white transition-colors border border-bakery-gold/50 flex items-center gap-1"
                    >
                      <span>View & Order</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Sub-card floating trust pill */}
              <div className="mt-3 text-center sm:text-right">
                <span className="inline-block text-xs text-bakery-brown-muted italic">
                  Available in Purple Box (500g) & Red Box (1kg)
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
