import React from 'react';
import { Search, Hash, Calendar, Sliders, Truck, AlertCircle, CheckCircle2 } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryInfo';

export default function HowToOrder() {
  const steps = [
    {
      number: "1",
      icon: Search,
      title: "Browse the Catalogue",
      description: "Explore our curated 100% eggless Diwali hampers and select your favorite box."
    },
    {
      number: "2",
      icon: Hash,
      title: "Select Quantity",
      description: "Choose how many hampers or sweet boxes you need for gifting."
    },
    {
      number: "3",
      icon: Calendar,
      title: "Tell Us the Date",
      description: "Let us know when you need your order prepared or delivered."
    },
    {
      number: "4",
      icon: Sliders,
      title: "Mention Customization",
      description: "Share any custom preferences, box colors, or personalized greeting card messages."
    },
    {
      number: "5",
      icon: Truck,
      title: "Choose Pickup / Delivery",
      description: "Choose self-pickup near Tripuri Town or request delivery in Patiala."
    }
  ];

  return (
    <section id="how-to-order" className="py-16 sm:py-20 bg-bakery-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bakery-gold/20 text-bakery-maroon text-xs font-semibold border border-bakery-gold/50">
            <span>Simple 5-Step Ordering</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-bakery-maroon tracking-tight">
            How to Order
          </h2>

          <p className="text-sm text-bakery-brown-muted">
            Ordering is simple, direct, and transparent through WhatsApp. Here is how your order progresses:
          </p>
        </div>

        {/* 5-Step Process Road */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-3xl p-5 border border-bakery-border shadow-xs flex flex-col justify-between space-y-3 relative group hover:border-bakery-gold transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-bakery-maroon text-bakery-gold flex items-center justify-center font-bold text-sm shadow-xs border border-bakery-gold/30">
                    {step.number}
                  </div>
                  <Icon className="w-5 h-5 text-bakery-brown-muted group-hover:text-bakery-maroon transition-colors" />
                </div>

                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-sm text-bakery-brown group-hover:text-bakery-maroon transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-bakery-brown-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Critical Ordering Policy Notes */}
        <div className="bg-bakery-cream rounded-3xl p-6 sm:p-8 border border-bakery-gold/40 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-bakery-maroon flex-shrink-0" />
            <h3 className="font-serif font-bold text-base sm:text-lg text-bakery-maroon">
              Important Ordering & Payment Guidelines
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-bakery-brown leading-relaxed">
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Pickup Location:</strong> Available near Tripuri Town, Patiala. Exact pickup address & location pin are shared on WhatsApp.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Delivery Details:</strong> Delivery availability and delivery charges are confirmed on WhatsApp based on your delivery address in Patiala.
                </span>
              </p>
            </div>

            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Direct Payment Instructions:</strong> The bakery shares official UPI / payment instructions directly via WhatsApp.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Order Confirmation:</strong> Orders are confirmed only after full payment. Please confirm availability in advance for urgent festive deliveries.
                </span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
