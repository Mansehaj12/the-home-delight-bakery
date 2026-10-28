import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryInfo';
import { createWhatsAppLink, buildGeneralEnquiryMessage } from '../utils/whatsapp';

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = createWhatsAppLink(buildGeneralEnquiryMessage());

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Interactive Tooltip Callout */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white px-3.5 py-2 rounded-2xl shadow-xl border border-bakery-gold/40 text-xs text-bakery-brown max-w-xs animate-bounce">
          <span className="text-base">🪔</span>
          <span className="leading-tight">
            Order Diwali hampers on WhatsApp: <strong className="text-bakery-maroon">{BAKERY_INFO.phone}</strong>
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="p-1 text-bakery-brown-light hover:text-bakery-brown rounded-full"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order or Chat on WhatsApp"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border-2 border-bakery-gold/60 relative group focus:outline-none focus:ring-4 focus:ring-emerald-400"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 group-hover:opacity-60 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10" />

        {/* Small Festive Diya Badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-bakery-maroon rounded-full flex items-center justify-center text-[10px] shadow-sm border border-bakery-gold">
          🪔
        </span>
      </a>
    </div>
  );
}
