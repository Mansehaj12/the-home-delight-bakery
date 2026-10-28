import React from 'react';
import { Heart, Sparkles, MapPin, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BAKERY_INFO } from '../data/bakeryInfo';

export default function AboutBakery() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-bakery-cream/30 border-t border-bakery-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-bakery-border shadow-festive relative overflow-hidden">
          {/* Subtle Diya Watermark */}
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-9xl">
            🪔
          </div>

          <div className="space-y-6 relative z-10 text-center max-w-2xl mx-auto">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-bakery-cream text-bakery-maroon text-xs font-semibold border border-bakery-gold/40">
              <Heart className="w-3.5 h-3.5 text-bakery-ruby fill-bakery-ruby" />
              <span>Our Story & Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-bakery-maroon tracking-tight">
              About The Home Delight Bakery
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-bakery-brown-muted leading-relaxed text-left sm:text-center">
              <p>
                <strong className="text-bakery-brown font-semibold">{BAKERY_INFO.name}</strong> is a dedicated home bakery located in Patiala, Punjab. Driven by our guiding philosophy, <em className="text-bakery-maroon font-serif font-medium">"{BAKERY_INFO.tagline},"</em> we handcraft each batch of treats with genuine warmth, care, and attention to detail.
              </p>

              <p>
                Every single item from our kitchen is <strong>100% eggless</strong> and prepared fresh from scratch using high-quality ingredients, from our traditional pure Desi Ghee Khoya Barfi to modern festive gift hampers. We believe festival gifting should feel heartfelt, comforting, and delicious.
              </p>
            </div>

            {/* Quick Fact Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <span className="px-3 py-1.5 rounded-full bg-bakery-cream text-bakery-brown text-xs font-medium border border-bakery-border">
                🌱 100% Eggless Kitchen
              </span>
              <span className="px-3 py-1.5 rounded-full bg-bakery-cream text-bakery-brown text-xs font-medium border border-bakery-border">
                🥣 Prepared from Scratch
              </span>
              <span className="px-3 py-1.5 rounded-full bg-bakery-cream text-bakery-brown text-xs font-medium border border-bakery-border">
                📍 Based in Patiala, Punjab
              </span>
            </div>

            {/* Instagram Profile CTA Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={BAKERY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-700 via-pink-600 to-amber-600 text-white font-semibold text-xs sm:text-sm shadow-md hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Follow @{BAKERY_INFO.instagramUsername} on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
