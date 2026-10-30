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
        deliveryPreference: "Delivery in Patiala"
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
      className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-bakery-border shadow-card-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      {/* 1. Clean Product Photograph — No text, no badges, no overlays */}
      <div className="relative aspect-[4/3] bg-[#FAF5EE] overflow-hidden border-b border-bakery-border/50">
        <img
          src={hamper.image}
          alt={hamper.alt || hamper.name}
          className={`w-full h-full object-cover transition-transform duration-300 ${hamper.isSoldOut ? 'opacity-90 grayscale-[15%]' : 'group-hover:scale-103'}`}
          loading="lazy"
        />
        {hamper.isSoldOut && (
          <div className="absolute top-2.5 right-2.5 bg-stone-900/90 backdrop-blur-xs text-white text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider shadow-sm border border-white/20">
            Sold Out
          </div>
        )}
      </div>

      {/* Product Information Section — All details outside the photograph */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between space-y-2.5 sm:space-y-3">
        <div className="space-y-2">
          {/* 2. Product Name — Full title visible over up to 2 lines */}
          <h3 className="font-serif font-bold text-sm sm:text-base text-bakery-brown group-hover:text-bakery-maroon transition-colors line-clamp-2 leading-snug min-h-[2.5rem] flex items-center">
            {hamper.name}
          </h3>

          {/* 3. Price and Available Size / Quantity */}
          {hamper.variants && hamper.variants.length > 0 ? (
            <div className="bg-bakery-cream/70 rounded-xl p-2 border border-bakery-border/70 space-y-1">
              {hamper.variants.map((variant) => (
                <div key={variant.id} className="flex items-center justify-between text-[11px] sm:text-xs">
                  <span className="font-medium text-bakery-brown">{variant.label}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-baseline justify-between gap-1">
              <span className={`font-serif font-extrabold text-base sm:text-lg tracking-tight ${hamper.isSoldOut ? 'text-bakery-brown-muted line-through' : 'text-bakery-maroon'}`}>
                {hamper.priceFormatted || `₹${hamper.price}`}
              </span>
              {hamper.isSoldOut ? (
                <span className="text-[10px] sm:text-xs font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-md border border-red-200 uppercase tracking-wide">
                  Sold Out
                </span>
              ) : hamper.weight ? (
                <span className="text-[10px] sm:text-xs text-bakery-brown-muted bg-bakery-cream px-2 py-0.5 rounded-md border border-bakery-border truncate max-w-[120px] sm:max-w-none">
                  {hamper.weight}
                </span>
              ) : null}
            </div>
          )}

          {/* 4. Short Description */}
          <p className="text-[11px] sm:text-xs text-bakery-brown-muted line-clamp-2 leading-relaxed">
            {hamper.shortDescription}
          </p>

          {/* What's inside the box */}
          {hamper.includedItems && hamper.includedItems.length > 0 && (
            <div className="bg-bakery-cream/50 rounded-xl p-2 border border-bakery-border/60 text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-bakery-maroon block mb-1">
                What's inside:
              </span>
              <ul className="space-y-0.5">
                {hamper.includedItems.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="text-[11px] text-bakery-brown truncate flex items-center gap-1">
                    <span className="text-bakery-gold-dark font-bold text-[10px] flex-shrink-0">•</span>
                    <span className="truncate">{item}</span>
                  </li>
                ))}
                {hamper.includedItems.length > 3 && (
                  <li className="text-[10px] font-semibold text-bakery-maroon pt-0.5">
                    +{hamper.includedItems.length - 3} more items • click details
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* 5 & 6. Action Buttons: Details + WhatsApp Order / Sold Out */}
        <div className="pt-2 border-t border-bakery-border/60 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(hamper);
            }}
            className="w-full py-2 px-2 rounded-xl bg-bakery-cream hover:bg-bakery-gold/20 text-bakery-maroon border border-bakery-border text-xs font-semibold transition-colors flex items-center justify-center gap-1 shadow-2xs min-h-[38px] sm:min-h-[42px]"
          >
            <Eye className="w-3.5 h-3.5 text-bakery-maroon" />
            <span>Details</span>
          </button>

          {hamper.isSoldOut ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                const message = `Hello The Home Delight Bakery! 🪔 I saw that the "${hamper.name}" (₹${hamper.price}) is currently sold out. Please let me know if a similar custom hamper can be arranged!`;
                window.open(createWhatsAppLink(message), '_blank');
              }}
              className="w-full py-2 px-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-300 text-xs font-semibold transition-colors flex items-center justify-center gap-1 min-h-[38px] sm:min-h-[42px]"
              title="Sold out - tap to enquire on WhatsApp"
            >
              <span className="text-red-700 font-bold">Sold Out</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleQuickWhatsApp}
              className="w-full py-2 px-2 rounded-xl bg-bakery-maroon hover:bg-bakery-maroon-hover text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1 shadow-2xs min-h-[38px] sm:min-h-[42px]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Order</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
