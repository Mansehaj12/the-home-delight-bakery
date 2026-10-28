import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BAKERY_INFO } from '../data/bakeryInfo';
import { createWhatsAppLink, buildGeneralEnquiryMessage } from '../utils/whatsapp';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-bakery-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bakery-maroon/10 text-bakery-maroon text-xs font-semibold border border-bakery-maroon/20">
            <span>Connect Directly</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-bakery-maroon tracking-tight">
            Contact & Ordering Details
          </h2>

          <p className="text-sm text-bakery-brown-muted">
            Have questions about custom boxes, delivery timing, or bulk gifting? Reach out to us directly on WhatsApp or Instagram.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: WhatsApp Ordering */}
          <div className="bg-white rounded-3xl p-6 border border-bakery-border shadow-xs space-y-4 flex flex-col justify-between group hover:border-bakery-gold transition-colors">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-bakery-brown">
                WhatsApp Ordering
              </h3>
              <p className="text-xs text-bakery-brown-muted leading-relaxed">
                Connect with our head baker to place hamper orders, customize greetings, and check current availability.
              </p>
              <p className="font-mono text-sm font-bold text-bakery-maroon">
                {BAKERY_INFO.phone}
              </p>
            </div>

            <a
              href={createWhatsAppLink(buildGeneralEnquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Message on WhatsApp</span>
            </a>
          </div>

          {/* Card 2: Pickup in Patiala */}
          <div className="bg-white rounded-3xl p-6 border border-bakery-border shadow-xs space-y-4 flex flex-col justify-between group hover:border-bakery-gold transition-colors">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center border border-rose-200">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-bakery-brown">
                Pickup & Delivery
              </h3>
              <p className="text-xs text-bakery-brown-muted leading-relaxed">
                <strong>Pickup:</strong> Near Tripuri Town, Patiala. (Full address pin sent upon order payment confirmation).
              </p>
              <p className="text-xs text-bakery-brown-muted leading-relaxed">
                <strong>Delivery:</strong> Available within Patiala city & nearby locations, subject to prior confirmation and schedule.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-bakery-cream text-[11px] text-bakery-brown-muted flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-bakery-gold-dark flex-shrink-0" />
              <span>Full advance payment required to confirm</span>
            </div>
          </div>

          {/* Card 3: Instagram */}
          <div className="bg-white rounded-3xl p-6 border border-bakery-border shadow-xs space-y-4 flex flex-col justify-between group hover:border-bakery-gold transition-colors">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-700 flex items-center justify-center border border-pink-200">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-bakery-brown">
                Instagram Community
              </h3>
              <p className="text-xs text-bakery-brown-muted leading-relaxed">
                Watch our behind-the-scenes baking reels, new festive hamper drops, and customer stories.
              </p>
              <p className="font-sans text-sm font-bold text-bakery-maroon">
                @{BAKERY_INFO.instagramUsername}
              </p>
            </div>

            <a
              href={BAKERY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-700 to-pink-600 hover:opacity-95 text-white font-bold text-xs shadow-xs transition-opacity flex items-center justify-center gap-2"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Visit Instagram Profile</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
