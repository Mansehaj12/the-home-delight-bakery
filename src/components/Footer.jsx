import React from 'react';
import { MessageCircle, MapPin, Heart, QrCode, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BAKERY_INFO } from '../data/bakeryInfo';
import { createWhatsAppLink, buildGeneralEnquiryMessage } from '../utils/whatsapp';

export default function Footer({ onOpenQrModal }) {
  return (
    <footer className="bg-bakery-maroon-dark text-bakery-ivory border-t-2 border-bakery-gold/40 pt-16 pb-12 relative overflow-hidden">
      {/* Background Mandala Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-5 flex justify-between">
        <span className="text-9xl">🪔</span>
        <span className="text-9xl">✨</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-bakery-maroon text-bakery-gold flex items-center justify-center border border-bakery-gold/50 shadow-md">
                <span className="text-xl">🪔</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-bakery-gold-light leading-tight">
                  {BAKERY_INFO.name}
                </h3>
                <p className="text-xs text-bakery-ivory/70 italic">
                  {BAKERY_INFO.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-bakery-ivory/80 leading-relaxed">
              Handcrafted 100% eggless Diwali hampers and traditional sweets, prepared fresh from scratch in Patiala, Punjab.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bakery-maroon text-bakery-gold-light text-xs border border-bakery-gold/30">
              <span>🌱 100% Eggless Home Bakery</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-base text-bakery-gold tracking-wide">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-bakery-ivory/80">
              <li><a href="#home" className="hover:text-bakery-gold-light transition-colors">Home</a></li>
              <li><a href="#hampers" className="hover:text-bakery-gold-light transition-colors">Diwali Hampers</a></li>
              <li><a href="#corporate" className="hover:text-bakery-gold-light transition-colors">Corporate Gifting</a></li>
              <li><a href="#why-us" className="hover:text-bakery-gold-light transition-colors">Why Choose Us</a></li>
              <li><a href="#how-to-order" className="hover:text-bakery-gold-light transition-colors">How to Order</a></li>
              <li><a href="#about" className="hover:text-bakery-gold-light transition-colors">About Our Bakery</a></li>
              <li><a href="#contact" className="hover:text-bakery-gold-light transition-colors">Contact Details</a></li>
            </ul>
          </div>

          {/* Column 3: Ordering & Location */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-base text-bakery-gold tracking-wide">
              Pickup & Ordering
            </h4>
            <div className="space-y-2 text-xs text-bakery-ivory/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-bakery-gold flex-shrink-0 mt-0.5" />
                <span>Pickup near <strong>Tripuri Town, Patiala</strong></span>
              </p>
              <p>
                <strong>Delivery:</strong> Patiala city and nearby areas (subject to schedule confirmation).
              </p>
              <p>
                <strong>Payment:</strong> Official UPI / payment instructions shared via WhatsApp. Orders confirmed after payment.
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-base text-bakery-gold tracking-wide">
              Connect With Us
            </h4>

            <div className="space-y-2.5">
              <a
                href={createWhatsAppLink(buildGeneralEnquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-bakery-maroon hover:bg-bakery-maroon-hover border border-bakery-gold/30 text-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>WhatsApp: {BAKERY_INFO.phone}</span>
              </a>

              <a
                href={BAKERY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-bakery-maroon hover:bg-bakery-maroon-hover border border-bakery-gold/30 text-xs transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <span>Instagram: @{BAKERY_INFO.instagramUsername}</span>
              </a>

              <button
                onClick={onOpenQrModal}
                className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl bg-bakery-gold/20 hover:bg-bakery-gold/30 text-bakery-gold-light border border-bakery-gold/40 text-xs transition-colors"
              >
                <QrCode className="w-4 h-4" />
                <span>Generate Print QR Code</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-bakery-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-bakery-ivory/60">
          <p>
            © {new Date().getFullYear()} {BAKERY_INFO.name}. All rights reserved. Handcrafted with love in Patiala, Punjab.
          </p>

          <p className="flex items-center gap-1.5">
            <span>Whisked with</span>
            <Heart className="w-3.5 h-3.5 text-bakery-ruby fill-bakery-ruby" />
            <span>for Diwali 🪔</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
