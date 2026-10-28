import React from 'react';
import { Eye, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { HAMPERS } from '../data/hampers';
import { createWhatsAppLink, buildHamperOrderMessage } from '../utils/whatsapp';

export default function KhoyaBarfiSection({ onSelectProduct }) {
  const barfi = HAMPERS.find(h => h.id === 'khoya-barfi') || HAMPERS[0];

  const handleOrderWhatsApp = (variant = null) => {
    const selected = variant || (barfi.variants ? barfi.variants[0] : null);
    const message = buildHamperOrderMessage({
      hamperName: barfi.name,
      price: selected ? selected.price : barfi.price,
      quantity: 1,
      selectedVariant: selected,
      deliveryPreference: "Delivery in Patiala"
    });
    window.open(createWhatsAppLink(message), '_blank');
  };

  return (
    <section id="khoya-barfi" className="py-6 sm:py-10 bg-bakery-ivory relative border-b border-bakery-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-3 sm:mb-5">
          <div className="flex items-center gap-2">
            <span className="text-base sm:text-lg">🍬</span>
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-bakery-gold-dark block">
                Bakery Signature • Pure Desi Ghee
              </span>
              <h2 className="font-serif font-bold text-lg sm:text-2xl text-bakery-maroon leading-tight">
                Homemade Desi Ghee Khoya Barfi
              </h2>
            </div>
          </div>

          <span className="hidden sm:inline-flex items-center gap-1 text-xs text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Eggless</span>
          </span>
        </div>

        {/* Featured Khoya Barfi Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-bakery-border shadow-card-subtle overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            
            {/* Clean Product Image — No badges or text over image */}
            <div
              onClick={() => onSelectProduct(barfi)}
              className="md:col-span-6 lg:col-span-7 aspect-[16/10] sm:aspect-[16/9] md:aspect-[4/3] bg-[#FAF5EE] overflow-hidden cursor-pointer group relative"
            >
              <img
                src={barfi.image}
                alt="Homemade Desi Ghee Khoya Barfi in festive purple and red gift boxes"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                loading="eager"
              />
            </div>

            {/* Product Details Outside Photograph */}
            <div className="md:col-span-6 lg:col-span-5 p-4 sm:p-6 lg:p-8 space-y-4">
              <div>
                <h3 className="font-serif font-bold text-base sm:text-xl text-bakery-brown leading-snug">
                  {barfi.name}
                </h3>
                <p className="text-xs sm:text-sm text-bakery-brown-muted mt-1 leading-relaxed">
                  Homemade desi ghee khoya barfi, garnished with nuts. 100% eggless and cooked fresh from scratch.
                </p>
              </div>

              {/* Price & Size Breakdown Cards */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-bakery-brown block">
                  Available Packaging & Prices:
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {barfi.variants.map((variant) => (
                    <div
                      key={variant.id}
                      className="p-2.5 rounded-xl bg-bakery-cream/70 border border-bakery-border flex items-center justify-between"
                    >
                      <div>
                        <span className="font-bold text-xs sm:text-sm text-bakery-maroon block">
                          ₹{variant.price}
                        </span>
                        <span className="text-[11px] text-bakery-brown-muted block">
                          {variant.label}
                        </span>
                      </div>
                      
                      <button
                        type="button"
                        onClick={() => handleOrderWhatsApp(variant)}
                        className="px-2.5 py-1 rounded-lg bg-bakery-maroon hover:bg-bakery-maroon-hover text-white text-[11px] font-semibold transition-colors flex items-center gap-1 shadow-2xs"
                      >
                        <MessageCircle className="w-3 h-3 text-emerald-400" />
                        <span>Order</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-bakery-border/60 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onSelectProduct(barfi)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-bakery-cream hover:bg-bakery-gold/20 text-bakery-maroon border border-bakery-border font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 min-h-[42px]"
                >
                  <Eye className="w-4 h-4 text-bakery-maroon" />
                  <span>View Details</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleOrderWhatsApp(barfi.variants[0])}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-bakery-maroon hover:bg-bakery-maroon-hover text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center justify-center gap-1.5 min-h-[42px]"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Order on WhatsApp</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
