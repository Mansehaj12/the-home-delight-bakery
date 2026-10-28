import React, { useState, useMemo } from 'react';
import { Filter, ArrowUpDown, Sparkles, MessageCircle } from 'lucide-react';
import ProductCard from './ProductCard';
import { HAMPERS, FILTER_CATEGORIES } from '../data/hampers';
import { BAKERY_INFO } from '../data/bakeryInfo';
import { createWhatsAppLink, buildGeneralEnquiryMessage } from '../utils/whatsapp';

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
    <section id="hampers" className="py-16 sm:py-20 bg-bakery-cream/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bakery-gold/15 text-bakery-maroon text-xs font-semibold border border-bakery-gold/40">
            <Sparkles className="w-3.5 h-3.5 text-bakery-gold-dark" />
            <span>Diwali 2026 Collection</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-bakery-maroon tracking-tight">
            Diwali Hamper Collection
          </h2>

          <p className="text-sm sm:text-base text-bakery-brown-muted leading-relaxed">
            Thoughtfully curated festive hampers, 100% eggless and handcrafted with love in Patiala. Browse the collection below and connect directly on WhatsApp to order.
          </p>
        </div>

        {/* Filter and Sort Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 mb-4 border-b border-bakery-border">
          
          {/* Price Range Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeFilter === cat.id
                    ? 'bg-bakery-maroon text-white shadow-sm ring-2 ring-bakery-gold/40'
                    : 'bg-white text-bakery-brown border border-bakery-border hover:bg-bakery-cream'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort & Count */}
          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            <span className="text-xs text-bakery-brown-muted">
              Showing <span className="font-bold text-bakery-maroon">{filteredHampers.length}</span> hampers
            </span>

            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-bakery-brown-muted" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs bg-white text-bakery-brown border border-bakery-border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-bakery-gold"
              >
                <option value="default">Featured / Catalogue Order</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredHampers.map((hamper) => (
            <ProductCard
              key={hamper.id}
              hamper={hamper}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>

        {/* Custom Hamper Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-bakery-maroon via-bakery-maroon-dark to-bakery-maroon text-white shadow-festive border border-bakery-gold/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-wider text-bakery-gold font-bold">
              Custom Festive Gifting
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-bakery-ivory">
              Looking for a custom box combination or specific budget?
            </h3>
            <p className="text-xs sm:text-sm text-bakery-ivory/80 max-w-xl">
              We personalize hampers with your choice of sweets, baked treats, and greeting cards. Message us directly on WhatsApp with your requirements.
            </p>
          </div>

          <a
            href={createWhatsAppLink("Hello The Home Delight Bakery! 🪔 I would like to discuss a customized Diwali hamper box.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-bakery-gold hover:bg-bakery-gold-light text-bakery-maroon-dark font-bold text-sm shadow-md transition-colors flex items-center gap-2 flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat for Custom Hamper</span>
          </a>
        </div>

      </div>
    </section>
  );
}
