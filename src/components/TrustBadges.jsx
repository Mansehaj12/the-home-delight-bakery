import React from 'react';
import { Leaf, Cookie, MapPin, Truck } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Leaf,
      label: "100% Eggless",
      color: "text-emerald-700 bg-emerald-50"
    },
    {
      icon: Cookie,
      label: "Made from Scratch",
      color: "text-amber-700 bg-amber-50"
    },
    {
      icon: MapPin,
      label: "Patiala, Punjab",
      color: "text-rose-700 bg-rose-50"
    },
    {
      icon: Truck,
      label: "Pickup & Delivery",
      color: "text-bakery-maroon bg-bakery-sand"
    }
  ];

  return (
    <div className="w-full bg-bakery-cream/70 border-y border-bakery-border py-2.5 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-around gap-2 overflow-x-auto scrollbar-none text-xs">
        {badges.map((b, i) => {
          const Icon = b.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-1.5 flex-shrink-0 px-2 py-1 rounded-full bg-white/80 border border-bakery-border/70 shadow-2xs"
            >
              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${b.color}`}>
                <Icon className="w-3 h-3" />
              </div>
              <span className="font-semibold text-bakery-brown text-[11px] sm:text-xs whitespace-nowrap">
                {b.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
