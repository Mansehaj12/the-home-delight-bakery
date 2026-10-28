import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, MessageCircle, MapPin, Truck, CheckCircle2, ShieldCheck, Sparkles, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BAKERY_INFO } from '../data/bakeryInfo';
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
    // Trigger festive gold and ruby confetti
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#C89D47', '#5C131D', '#F7E2A9', '#9E2A2B']
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container */}
      <div
        className="relative w-full max-w-3xl bg-bakery-ivory rounded-3xl shadow-2xl border border-bakery-gold/40 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-4 bg-bakery-cream border-b border-bakery-border flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xl">🪔</span>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-bakery-gold-dark block">
                {hamper.tag}
              </span>
              <h2 className="font-serif font-bold text-lg sm:text-xl text-bakery-maroon leading-tight">
                {hamper.name}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-bakery-brown-muted hover:text-bakery-maroon hover:bg-white transition-colors border border-bakery-border"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Image Column */}
            <div className="md:col-span-5 space-y-3">
              <div className="rounded-2xl overflow-hidden bg-white border border-bakery-border aspect-square relative shadow-xs">
                <img
                  src={hamper.image}
                  alt={hamper.alt || hamper.name}
                  className="w-full h-full object-cover"
                />
                {hamper.isConfirmed && (
                  <div className="absolute bottom-2 left-2 bg-bakery-maroon text-white text-[11px] px-2.5 py-1 rounded-full font-medium shadow-md border border-bakery-gold">
                    Actual Bakery Photo
                  </div>
                )}
              </div>

              {/* Trust Badge */}
              <div className="p-3 rounded-xl bg-white border border-bakery-border text-xs space-y-1">
                <p className="font-bold text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% Eggless • Fresh from Scratch</span>
                </p>
                <p className="text-bakery-brown-muted text-[11px]">
                  Prepared with pure ingredients in Patiala, Punjab.
                </p>
              </div>
            </div>

            {/* Product Configuration Column */}
            <div className="md:col-span-7 space-y-5">
              {/* Price Banner */}
              <div className="p-4 rounded-2xl bg-white border border-bakery-border flex items-baseline justify-between shadow-xs">
                <div>
                  <span className="text-xs text-bakery-brown-muted block">Selected Price</span>
                  <span className="font-serif font-extrabold text-3xl text-bakery-maroon">
                    ₹{activePrice}
                  </span>
                  {selectedVariant && (
                    <span className="text-xs font-semibold text-bakery-gold-dark ml-2">
                      ({selectedVariant.weight})
                    </span>
                  )}
                </div>

                <div className="text-right">
                  <span className="text-xs text-bakery-brown-muted block">Estimated Total</span>
                  <span className="font-serif font-bold text-xl text-bakery-brown">
                    ₹{totalAmount}
                  </span>
                </div>
              </div>

              {/* Variant Selector (if available) */}
              {hamper.variants && hamper.variants.length > 0 && (
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-bakery-brown block">
                    Choose Packaging / Weight:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {hamper.variants.map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setSelectedVariant(v)}
                        className={`p-3 rounded-xl text-left border text-xs font-medium transition-all ${
                          selectedVariant?.id === v.id
                            ? 'bg-bakery-maroon text-white border-bakery-gold shadow-sm ring-2 ring-bakery-gold/50'
                            : 'bg-white text-bakery-brown border-bakery-border hover:bg-bakery-cream'
                        }`}
                      >
                        <span className="font-bold block text-sm">{v.label}</span>
                        <span className={`text-[11px] block mt-0.5 ${selectedVariant?.id === v.id ? 'text-bakery-gold-light' : 'text-bakery-brown-muted'}`}>
                          Price: ₹{v.price}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-bakery-gold-dark">
                  About this Hamper
                </h4>
                <p className="text-sm text-bakery-brown leading-relaxed">
                  {hamper.shortDescription}
                </p>
              </div>

              {/* Confirmed items (or friendly details prompt) */}
              {hamper.isConfirmed && hamper.includedItems ? (
                <div className="space-y-2 p-3.5 rounded-xl bg-bakery-cream/70 border border-bakery-border">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-bakery-brown">
                    What's Included:
                  </h4>
                  <ul className="space-y-1.5">
                    {hamper.includedItems.map((item, i) => (
                      <li key={i} className="text-xs text-bakery-brown flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <p className="font-bold flex items-center gap-1.5">
                    <span>🪔 Fresh Festive Customization Available</span>
                  </p>
                  <p className="text-[11px] text-amber-800">
                    Box contents and decorative packing are customized for Diwali. Tap below to chat directly with our baker for today's options and photos!
                  </p>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-bakery-brown block">
                  Quantity:
                </label>
                <div className="inline-flex items-center rounded-xl bg-white border border-bakery-border p-1 shadow-xs">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-bakery-brown hover:bg-bakery-cream disabled:opacity-30 disabled:hover:bg-white transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-bold text-base text-bakery-maroon">
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
                <span className="text-xs text-bakery-brown-muted ml-3">
                  (Estimated: ₹{totalAmount})
                </span>
              </div>

              {/* Pickup / Delivery Preference */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-bakery-brown block">
                  Pickup or Delivery Preference:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDeliveryPreference("Delivery in Patiala")}
                    className={`p-3 rounded-xl border text-xs font-medium flex items-center gap-2 transition-all ${
                      deliveryPreference.includes("Delivery")
                        ? 'bg-bakery-maroon text-white border-bakery-gold ring-1 ring-bakery-gold'
                        : 'bg-white text-bakery-brown border-bakery-border hover:bg-bakery-cream'
                    }`}
                  >
                    <Truck className="w-4 h-4 flex-shrink-0" />
                    <div className="text-left">
                      <span className="font-bold block">Delivery in Patiala</span>
                      <span className="text-[10px] opacity-80 block">Subject to confirmation</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliveryPreference("Self-Pickup near Tripuri Town, Patiala")}
                    className={`p-3 rounded-xl border text-xs font-medium flex items-center gap-2 transition-all ${
                      deliveryPreference.includes("Pickup")
                        ? 'bg-bakery-maroon text-white border-bakery-gold ring-1 ring-bakery-gold'
                        : 'bg-white text-bakery-brown border-bakery-border hover:bg-bakery-cream'
                    }`}
                  >
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <div className="text-left">
                      <span className="font-bold block">Self-Pickup</span>
                      <span className="text-[10px] opacity-80 block">Near Tripuri Town, Patiala</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Special Instructions / Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-bakery-brown block">
                  Special Instructions / Customization:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Add custom greeting card tag, specific box color preference..."
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl bg-white border border-bakery-border focus:outline-none focus:ring-2 focus:ring-bakery-gold"
                />
              </div>

              {/* Live WhatsApp Message Preview */}
              <div className="space-y-1.5 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-bakery-brown-muted">
                    WhatsApp Message Preview
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="text-[11px] text-bakery-maroon hover:underline flex items-center gap-1"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? "Copied" : "Copy text"}</span>
                  </button>
                </div>
                <div className="p-3 bg-white rounded-xl border border-bakery-border text-xs text-bakery-brown-muted whitespace-pre-wrap font-mono leading-relaxed max-h-32 overflow-y-auto">
                  {generatedMessage}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-bakery-cream border-t border-bakery-border flex-shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-bakery-brown-muted text-center sm:text-left">
            <span className="font-bold text-bakery-brown">Important:</span> Orders are confirmed on WhatsApp only after full payment.
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/3 sm:w-auto px-4 py-3 rounded-xl bg-white hover:bg-bakery-sand text-bakery-brown font-semibold text-xs border border-bakery-border transition-colors"
            >
              Back
            </button>

            <button
              type="button"
              onClick={handleOrderWhatsApp}
              className="w-2/3 sm:w-auto px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-200" />
              <span>Order on WhatsApp (₹{totalAmount})</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
