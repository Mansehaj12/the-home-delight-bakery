import React from 'react';
import { Leaf, Cookie, Gift, MapPin, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      icon: Leaf,
      iconColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      title: "100% Eggless",
      description: "Enjoy our eggless baked delights."
    },
    {
      icon: Cookie,
      iconColor: "text-amber-700 bg-amber-50 border-amber-200",
      title: "Made from Scratch",
      description: "Prepared with care in our home bakery."
    },
    {
      icon: Gift,
      iconColor: "text-bakery-maroon bg-rose-50 border-rose-200",
      title: "Festive Gifting",
      description: "Thoughtfully presented hampers for your celebrations."
    },
    {
      icon: MapPin,
      iconColor: "text-bakery-gold-dark bg-amber-50/80 border-amber-200",
      title: "Local Pickup & Delivery",
      description: "Pickup near Tripuri Town, Patiala, with delivery available in Patiala and nearby locations."
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-bakery-cream/30 border-y border-bakery-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bakery-maroon/10 text-bakery-maroon text-xs font-semibold border border-bakery-maroon/20">
            <Sparkles className="w-3.5 h-3.5 text-bakery-gold-dark" />
            <span>Pure Handcrafted Quality</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-bakery-maroon tracking-tight">
            Why Choose Us?
          </h2>

          <p className="text-sm text-bakery-brown-muted">
            The values and authentic baking standards behind every festive gift box from The Home Delight Bakery.
          </p>
        </div>

        {/* 4 Confirmed Facts Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 border border-bakery-border shadow-xs hover:shadow-festive transition-all duration-300 flex flex-col items-start space-y-3 group hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-2xs group-hover:scale-105 transition-transform ${card.iconColor}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif font-bold text-lg text-bakery-brown group-hover:text-bakery-maroon transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-bakery-brown-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
