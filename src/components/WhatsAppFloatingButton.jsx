import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryInfo';
import { createWhatsAppLink, buildGeneralEnquiryMessage } from '../utils/whatsapp';

export default function WhatsAppFloatingButton() {
  const whatsappUrl = createWhatsAppLink(buildGeneralEnquiryMessage());

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 pointer-events-auto">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order or Chat on WhatsApp with The Home Delight Bakery"
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg transition-transform duration-200 active:scale-95 hover:scale-105 border-2 border-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
