import React, { useState, useMemo } from 'react';
import { ArrowUpDown, Sparkles, MessageCircle } from 'lucide-react';
import ProductCard from './ProductCard';
import { HAMPERS, FILTER_CATEGORIES } from '../data/hampers';
import { createWhatsAppLink } from '../utils/whatsapp';

export default function ProductGrid({ onSelectProduct }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  // Filter and sort hampers
  const filteredHampers = useMemo(() => {
    let result = [...HAMPERS];

    // Filter
    if (activeFilter !== "all") {
      result = result.filter((h) => {
        if (activeFilter === "under-500") return h.price < 500;
        if (activeFilter === "500-1000") return h.price >= 500 && h.price <= 1000;
        if (activeFilter === "1000-1500") return h.price > 1000 && h.price <= 1500;
        if (activeFilter === "above-1500") return h.price > 1500;
        return true;
      });
    }

    // Sort
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeFilter, sortBy]);

  return (
    <section id="hampers" className="py-8 sm:py-16 bg-bakery-cream/30 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5 sm:space-y-2.5 mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-bakery-gold/20 text-bakery-maroon text-[11px] font-semibold border border-bakery-gold/40">
            <Sparkles className="w-3 h-3 text-bakery-gold-dark" />
            <span>Festive Gifting Catalogue</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-bakery-maroon tracking-tight">
            Find Your Perfect Diwali Hamper
          </h2>

          <p className="text-xs sm:text-sm text-bakery-brown-muted leading-relaxed">
            Thoughtful gifts for family, friends, and celebrations.
          </p>
        </div>

        {/* Filter and Sort Controls Bar (Compact on mobile) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-5 mb-5 border-b border-bakery-border">
          
          {/* Price Range Filter Pills: Scrollable */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1.5 sm:pb-0 scrollbar-none">
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors min-h-[34px] ${
                  activeFilter === cat.id
                    ? 'bg-bakery-maroon text-white shadow-2xs'
                    : 'bg-white text-bakery-brown border border-bakery-border hover:bg-bakery-cream'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort & Count */}
          <div className="flex items-center justify-between w-full sm:w-auto gap-3 text-xs">
            <span className="text-bakery-brown-muted">
              <span className="font-bold text-bakery-maroon">{filteredHampers.length}</span> hampers
            </span>

            <div className="flex items-center gap-1.5">
              <ArrowUpDown className="w-3.5 h-3.5 text-bakery-brown-muted" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs bg-white text-bakery-brown border border-bakery-border rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-bakery-gold min-h-[34px]"
              >
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards Grid: 2-column on mobile >=360px (xs), 1-col on very small screens, 3-4 col on desktop */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {filteredHampers.map((hamper) => (
            <ProductCard
              key={hamper.id}
              hamper={hamper}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>

        {/* Custom Hamper Notice */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-white border border-bakery-gold/40 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-sm sm:text-base text-bakery-maroon">
              Need custom box combinations or a specific budget?
            </h3>
            <p className="text-xs text-bakery-brown-muted">
              We personalize hampers with your choice of sweets, baked treats, and greeting cards.
            </p>
          </div>

          <a
            href={createWhatsAppLink("Hello The Home Delight Bakery! 🪔 I would like to discuss a customized Diwali hamper box.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-bakery-maroon hover:bg-bakery-maroon-hover text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 flex-shrink-0 min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat for Custom Hamper</span>
          </a>
        </div>

      </div>
    </section>
  );
}
