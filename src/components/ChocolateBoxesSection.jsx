import React from 'react';
import { Eye, MessageCircle, Sparkles } from 'lucide-react';
import { HAMPERS } from '../data/hampers';
import { createWhatsAppLink, buildHamperOrderMessage } from '../utils/whatsapp';

export default function ChocolateBoxesSection({ onSelectProduct }) {
  const choco200 = HAMPERS.find(h => h.id === 'choco-box-200');
  const choco350 = HAMPERS.find(h => h.id === 'choco-box-350');
  const chocolateProducts = [choco200, choco350].filter(Boolean);

  const handleOrderWhatsApp = (hamper) => {
    const message = buildHamperOrderMessage({
      hamperName: hamper.name,
      price: hamper.price,
      quantity: 1,
      selectedVariant: null,
      deliveryPreference: "Delivery in Patiala"
    });
    window.open(createWhatsAppLink(message), '_blank');
  };

  return (
    <section id="chocolates" className="py-6 sm:py-10 bg-bakery-cream/30 relative border-b border-bakery-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-3 sm:mb-5">
          <div className="flex items-center gap-2">
            <span className="text-base sm:text-lg">🍫</span>
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-bakery-gold-dark block">
                Festive Assortment • 100% Eggless
              </span>
              <h2 className="font-serif font-bold text-lg sm:text-2xl text-bakery-maroon leading-tight">
                Handcrafted Chocolate Boxes
              </h2>
            </div>
          </div>

          <span className="text-xs text-bakery-brown-muted hidden sm:block">
            Made fresh from scratch
          </span>
        </div>

        {/* 2-Column Grid for ₹200 and ₹350 Chocolate Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {chocolateProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="bg-white rounded-2xl sm:rounded-3xl border border-bakery-border shadow-card-subtle hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer group"
            >
              {/* Clean Product Image — No badges or text overlays */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-[#FAF5EE] overflow-hidden border-b border-bakery-border/50">
                <img
                  src={product.image}
                  alt={product.alt || product.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Product Information Outside Photograph */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-serif font-extrabold text-xl sm:text-2xl text-bakery-maroon tracking-tight">
                      ₹{product.price}
                    </span>
                    <span className="text-[11px] sm:text-xs text-bakery-brown-muted bg-bakery-cream px-2 py-0.5 rounded-full border border-bakery-border">
                      {product.weight}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-sm sm:text-base text-bakery-brown group-hover:text-bakery-maroon transition-colors line-clamp-2 leading-snug">
                    {product.name}
                  </h3>

                  <p className="text-xs text-bakery-brown-muted line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>

                {/* Buttons: Details & WhatsApp Order */}
                <div className="pt-2 border-t border-bakery-border/60 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(product);
                    }}
                    className="w-full py-2.5 px-3 rounded-xl bg-bakery-cream hover:bg-bakery-gold/20 text-bakery-maroon border border-bakery-border text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-2xs min-h-[40px]"
                  >
                    <Eye className="w-3.5 h-3.5 text-bakery-maroon" />
                    <span>Details</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOrderWhatsApp(product);
                    }}
                    className="w-full py-2.5 px-3 rounded-xl bg-bakery-maroon hover:bg-bakery-maroon-hover text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-2xs min-h-[40px]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
