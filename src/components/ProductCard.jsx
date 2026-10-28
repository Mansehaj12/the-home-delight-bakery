import React from 'react';
import { Eye, MessageCircle } from 'lucide-react';
import { createWhatsAppLink, buildHamperOrderMessage } from '../utils/whatsapp';

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
      className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-bakery-border shadow-card-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between cursor-pointer relative"
    >
      {/* Product Image Container: 1.2:1 aspect ratio preserving the complete poster without cropping */}
      <div className="relative aspect-[1.2/1] bg-white overflow-hidden flex items-center justify-center border-b border-bakery-border/40">
        <img
          src={hamper.image}
          alt={hamper.alt || hamper.name}
          className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300"
          loading="lazy"
        />

        {/* Real Photo Badge / Tag */}
        {isConfirmed ? (
          <span className="absolute top-2 left-2 z-10 inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-bakery-maroon/90 text-white backdrop-blur-xs shadow-xs border border-bakery-gold/40">
            ★ Real Photo
          </span>
        ) : (
          <span className="absolute top-2 left-2 z-10 inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-bakery-cream/90 text-bakery-maroon border border-bakery-border shadow-2xs">
            Diwali Box
          </span>
        )}

        {/* Desktop Quick View Overlay */}
        <div className="hidden sm:flex absolute inset-0 bg-bakery-maroon/15 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center">
          <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-bakery-maroon text-xs font-bold shadow-xs flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            <span>View Details</span>
          </span>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
        <div className="space-y-1">
          {/* Price Header */}
          <div className="flex items-baseline justify-between gap-1">
            <span className="font-serif font-extrabold text-base sm:text-xl text-bakery-maroon tracking-tight">
              {hamper.priceFormatted}
            </span>
            {hamper.weight && (
              <span className="text-[10px] sm:text-xs text-bakery-brown-muted bg-bakery-cream px-1.5 py-0.5 rounded border border-bakery-border truncate max-w-[80px] sm:max-w-none">
                {hamper.weight}
              </span>
            )}
          </div>

          {/* Product Name */}
          <h3 className="font-serif font-bold text-xs sm:text-base text-bakery-brown group-hover:text-bakery-maroon transition-colors line-clamp-1 leading-snug">
            {hamper.name}
          </h3>

          {/* Short Description */}
          <p className="text-[11px] sm:text-xs text-bakery-brown-muted line-clamp-1 sm:line-clamp-2 leading-relaxed">
            {hamper.shortDescription}
          </p>
        </div>

        {/* Action Buttons: Touch Friendly (44px) */}
        <div className="pt-2 border-t border-bakery-border/60 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(hamper);
            }}
            className="w-full py-2 px-2.5 rounded-xl bg-bakery-maroon text-white hover:bg-bakery-maroon-hover text-xs font-semibold transition-colors flex items-center justify-center gap-1 shadow-2xs min-h-[38px] sm:min-h-[42px]"
          >
            <Eye className="w-3.5 h-3.5 text-bakery-gold" />
            <span>Details</span>
          </button>

          <button
            type="button"
            onClick={handleQuickWhatsApp}
            className="w-full py-2 px-2.5 rounded-xl bg-white border border-bakery-maroon/60 text-bakery-maroon hover:bg-bakery-cream text-xs font-semibold transition-colors flex items-center justify-center gap-1 min-h-[38px] sm:min-h-[42px]"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>Order</span>
          </button>
        </div>
      </div>
    </div>
  );
}
