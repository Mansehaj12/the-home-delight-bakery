import React from 'react';
import { Eye, MessageCircle, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { createWhatsAppLink, buildHamperOrderMessage, buildGeneralEnquiryMessage } from '../utils/whatsapp';

export default function ProductCard({ hamper, onSelectProduct }) {
  const isConfirmed = hamper.isConfirmed;

  // Direct WhatsApp click handler for quick order/enquiry
  const handleQuickWhatsApp = (e) => {
    e.stopPropagation();
    if (isConfirmed) {
      const defaultVariant = hamper.variants ? hamper.variants[0] : null;
      const message = buildHamperOrderMessage({
        hamperName: hamper.name,
        price: defaultVariant ? defaultVariant.price : hamper.price,
        quantity: 1,
        selectedVariant: defaultVariant,
        deliveryPreference: "Delivery"
      });
      window.open(createWhatsAppLink(message), '_blank');
    } else {
      const message = `Hello The Home Delight Bakery! 🪔 I would like to enquire about the "${hamper.name}" priced at ₹${hamper.price}. Please share box contents, photos, and availability for Patiala.`;
      window.open(createWhatsAppLink(message), '_blank');
    }
  };

  return (
    <div
      onClick={() => onSelectProduct(hamper)}
      className="group bg-white rounded-3xl overflow-hidden border border-bakery-border shadow-sm hover:shadow-festive transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1.5 relative"
    >
      {/* Top Badge */}
      <div className="absolute top-3 left-3 z-10">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-bakery-maroon/90 text-white backdrop-blur-md shadow-xs border border-bakery-gold/40">
          <Sparkles className="w-3 h-3 text-bakery-gold" />
          <span>{hamper.tag}</span>
        </span>
      </div>

      {isConfirmed && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-300 shadow-xs">
            ★ Authentic Photo
          </span>
        </div>
      )}

      {/* Product Image Container */}
      <div className="relative aspect-[4/3] bg-bakery-cream overflow-hidden">
        <img
          src={hamper.image}
          alt={hamper.alt || hamper.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-bakery-maroon/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-4 py-2 rounded-full bg-white/95 text-bakery-maroon text-xs font-bold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5" />
            <span>Click to View Options</span>
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Price & Weight Header */}
          <div className="flex items-baseline justify-between gap-2">
            <span className="font-serif font-extrabold text-2xl text-bakery-maroon">
              {hamper.priceFormatted}
            </span>
            {hamper.weight && (
              <span className="text-xs font-medium text-bakery-brown-muted bg-bakery-cream px-2 py-0.5 rounded-md border border-bakery-border">
                {hamper.weight}
              </span>
            )}
          </div>

          {/* Product Name */}
          <h3 className="font-serif font-bold text-lg text-bakery-brown group-hover:text-bakery-maroon transition-colors line-clamp-1">
            {hamper.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-bakery-brown-muted line-clamp-2 leading-relaxed">
            {hamper.shortDescription}
          </p>

          {/* Included Items Checklist (Only when confirmed) */}
          {isConfirmed && hamper.includedItems && (
            <div className="pt-2 border-t border-bakery-border space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-bakery-gold-dark block">
                Confirmed Box Inclusions:
              </span>
              <ul className="space-y-1">
                {hamper.includedItems.slice(0, 2).map((item, idx) => (
                  <li key={idx} className="text-xs text-bakery-brown flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Awaiting Confirmation Friendly Notice */}
          {!isConfirmed && (
            <div className="pt-1.5 border-t border-bakery-border">
              <p className="text-[11px] text-bakery-brown-light italic flex items-center gap-1">
                <span>🪔 Freshly prepared for Diwali gifting. Message us for today's box contents & photo.</span>
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-bakery-border grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(hamper);
            }}
            className="w-full py-2.5 px-3 rounded-xl bg-bakery-cream text-bakery-brown hover:bg-bakery-sand hover:text-bakery-maroon text-xs font-bold transition-colors flex items-center justify-center gap-1 border border-bakery-border"
          >
            <Eye className="w-3.5 h-3.5 text-bakery-gold-dark" />
            <span>Details</span>
          </button>

          <button
            type="button"
            onClick={handleQuickWhatsApp}
            className="w-full py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1 shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{isConfirmed ? "Order" : "Enquire"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
