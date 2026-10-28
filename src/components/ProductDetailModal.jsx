import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, MessageCircle, MapPin, Truck, CheckCircle2, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { createWhatsAppLink, buildHamperOrderMessage } from '../utils/whatsapp';

export default function ProductDetailModal({ hamper, onClose }) {
  if (!hamper) return null;

  // Selected variant for multi-price products (e.g. Barfi 500g vs 1kg)
  const [selectedVariant, setSelectedVariant] = useState(
    hamper.variants && hamper.variants.length > 0 ? hamper.variants[0] : null
  );

  const [quantity, setQuantity] = useState(1);
  const [deliveryPreference, setDeliveryPreference] = useState("Delivery in Patiala");
  const [needByDate, setNeedByDate] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [copied, setCopied] = useState(false);

  // Active price based on variant or base price
  const activePrice = selectedVariant ? selectedVariant.price : hamper.price;
  const totalAmount = activePrice * quantity;

  // Sync variant state if hamper prop changes
  useEffect(() => {
    if (hamper.variants && hamper.variants.length > 0) {
      setSelectedVariant(hamper.variants[0]);
    } else {
      setSelectedVariant(null);
    }
    setQuantity(1);
    setSpecialInstructions("");
    setNeedByDate("");
  }, [hamper]);

  // Ensure scroll is fully restored on unmount
  useEffect(() => {
    return () => {
      document.body.style.removeProperty('overflow');
      document.documentElement.style.removeProperty('overflow');
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Construct message
  const generatedMessage = buildHamperOrderMessage({
    hamperName: hamper.name,
    price: activePrice,
    quantity,
    selectedVariant,
    deliveryPreference,
    specialInstructions,
    needByDate
  });

  const handleOrderWhatsApp = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#C49A45', '#641522', '#FBF5EB']
    });

    const url = createWhatsAppLink(generatedMessage);
    window.open(url, '_blank');
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-hamper-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto bg-black/60 backdrop-blur-xs animate-fadeIn"
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-2xl bg-bakery-ivory rounded-2xl sm:rounded-3xl shadow-2xl border border-bakery-border overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-4 py-3 sm:px-6 sm:py-3.5 bg-bakery-cream border-b border-bakery-border flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-lg">🪔</span>
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-bakery-gold-dark block">
                {hamper.tag}
              </span>
              <h2 id="modal-hamper-title" className="font-serif font-bold text-base sm:text-lg text-bakery-maroon leading-tight">
                {hamper.name}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full text-bakery-brown-muted hover:text-bakery-maroon hover:bg-white transition-colors flex items-center justify-center border border-bakery-border/80"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-start">
            
            {/* Image Column */}
            <div className="sm:col-span-5 space-y-2">
              <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-bakery-border aspect-[1.2/1] relative shadow-xs flex items-center justify-center">
                <img
                  src={hamper.image}
                  alt={hamper.alt || hamper.name}
                  className="w-full h-full object-contain"
                />
                {hamper.isConfirmed && (
                  <div className="absolute top-2 left-2 bg-bakery-maroon text-white text-[10px] px-2 py-0.5 rounded-full font-semibold shadow-xs border border-bakery-gold/40">
                    ★ Real Bakery Photo
                  </div>
                )}
              </div>

              <p className="text-[11px] text-emerald-800 font-semibold flex items-center gap-1 justify-center sm:justify-start">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>100% Eggless • Fresh from Scratch</span>
              </p>
            </div>

            {/* Product Configuration Column */}
            <div className="sm:col-span-7 space-y-3.5 sm:space-y-4">
              {/* Price Banner */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-bakery-border flex items-baseline justify-between shadow-2xs">
                <div>
                  <span className="text-[11px] text-bakery-brown-muted block">Selected Price</span>
                  <span className="font-serif font-extrabold text-2xl sm:text-3xl text-bakery-maroon">
                    ₹{activePrice}
                  </span>
                  {selectedVariant && (
                    <span className="text-xs font-semibold text-bakery-gold-dark ml-1.5">
                      ({selectedVariant.weight})
                    </span>
                  )}
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-bakery-brown-muted block">Estimated Total</span>
                  <span className="font-serif font-bold text-lg sm:text-xl text-bakery-brown">
                    ₹{totalAmount}
                  </span>
                </div>
              </div>

              {/* Variant Selector (if available) */}
              {hamper.variants && hamper.variants.length > 0 && (
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-bakery-brown block">
                    Choose Packaging / Weight:
                  </label>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                    {hamper.variants.map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setSelectedVariant(v)}
                        className={`p-2.5 rounded-xl text-left border text-xs font-medium transition-colors min-h-[44px] ${
                          selectedVariant?.id === v.id
                            ? 'bg-bakery-maroon text-white border-bakery-maroon shadow-xs'
                            : 'bg-white text-bakery-brown border-bakery-border hover:bg-bakery-cream'
                        }`}
                      >
                        <span className="font-bold block text-xs">{v.label}</span>
                        <span className={`text-[10px] block mt-0.5 ${selectedVariant?.id === v.id ? 'text-bakery-gold-light' : 'text-bakery-brown-muted'}`}>
                          Price: ₹{v.price}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="space-y-1">
                <p className="text-xs sm:text-sm text-bakery-brown leading-relaxed">
                  {hamper.shortDescription}
                </p>
              </div>

              {/* Confirmed items (or friendly note) */}
              {hamper.isConfirmed && hamper.includedItems ? (
                <div className="space-y-1.5 p-3 rounded-xl bg-bakery-cream/70 border border-bakery-border text-xs">
                  <h4 className="font-bold uppercase tracking-wider text-bakery-brown text-[10px]">
                    What's Included:
                  </h4>
                  <ul className="space-y-1">
                    {hamper.includedItems.map((item, i) => (
                      <li key={i} className="text-bakery-brown flex items-start gap-1.5 text-[11px] sm:text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-[11px] space-y-0.5">
                  <p className="font-bold">🪔 Fresh Festive Customization Available</p>
                  <p className="text-amber-800">
                    Box contents and decorative packing are customized for Diwali. Message us directly on WhatsApp for today's photos and options.
                  </p>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-bold uppercase tracking-wider text-bakery-brown">
                  Quantity:
                </span>
                <div className="inline-flex items-center rounded-xl bg-white border border-bakery-border p-1 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-bakery-brown hover:bg-bakery-cream disabled:opacity-30 disabled:hover:bg-white transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-bakery-maroon">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-bakery-brown hover:bg-bakery-cream transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Pickup / Delivery Preference */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-bakery-brown block">
                  Preference:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDeliveryPreference("Delivery in Patiala")}
                    className={`p-2.5 rounded-xl border text-xs font-medium flex items-center gap-2 transition-colors min-h-[44px] ${
                      deliveryPreference.includes("Delivery")
                        ? 'bg-bakery-maroon text-white border-bakery-maroon'
                        : 'bg-white text-bakery-brown border-bakery-border hover:bg-bakery-cream'
                    }`}
                  >
                    <Truck className="w-4 h-4 flex-shrink-0" />
                    <span className="text-left leading-tight truncate">Delivery</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliveryPreference("Self-Pickup near Tripuri Town, Patiala")}
                    className={`p-2.5 rounded-xl border text-xs font-medium flex items-center gap-2 transition-colors min-h-[44px] ${
                      deliveryPreference.includes("Pickup")
                        ? 'bg-bakery-maroon text-white border-bakery-maroon'
                        : 'bg-white text-bakery-brown border-bakery-border hover:bg-bakery-cream'
                    }`}
                  >
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="text-left leading-tight truncate">Pickup (Tripuri)</span>
                  </button>
                </div>
              </div>

              {/* Special Instructions */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-bakery-brown block">
                  Customization / Notes:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Add greeting card message, color preference..."
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl bg-white border border-bakery-border focus:outline-none focus:ring-1 focus:ring-bakery-maroon"
                />
              </div>

              {/* WhatsApp Message Preview */}
              <div className="space-y-1 pt-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-bakery-brown-muted">
                    WhatsApp Message Preview
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="text-[10px] text-bakery-maroon hover:underline flex items-center gap-1"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? "Copied" : "Copy text"}</span>
                  </button>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-bakery-border text-[11px] text-bakery-brown-muted whitespace-pre-wrap font-mono leading-relaxed max-h-24 overflow-y-auto">
                  {generatedMessage}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-4 py-3 sm:px-6 sm:py-3.5 bg-bakery-cream border-t border-bakery-border flex-shrink-0 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <p className="text-[11px] text-bakery-brown-muted text-center sm:text-left">
            Payment instructions shared directly on WhatsApp. Orders confirmed after payment.
          </p>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/3 sm:w-auto px-4 py-2.5 rounded-xl bg-white hover:bg-bakery-sand text-bakery-brown font-semibold text-xs border border-bakery-border transition-colors min-h-[44px]"
            >
              Back
            </button>

            <button
              type="button"
              onClick={handleOrderWhatsApp}
              className="w-2/3 sm:w-auto px-5 py-2.5 rounded-xl bg-bakery-maroon hover:bg-bakery-maroon-hover text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Order on WhatsApp (₹{totalAmount})</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
