import React, { useState, useMemo } from 'react';
import { ArrowUpDown, Sparkles } from 'lucide-react';
import ProductCard from './ProductCard';
import { HAMPERS, FILTER_CATEGORIES } from '../data/hampers';

export default function ProductGrid({ onSelectProduct }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  // Remaining hampers (excluding Khoya Barfi and Chocolate boxes that have their own dedicated sections above)
  const remainingHampers = useMemo(() => {
    return HAMPERS.filter(
      (h) => h.id !== 'khoya-barfi' && h.id !== 'choco-box-200' && h.id !== 'choco-box-350'
    );
  }, []);

  // Filter and sort remaining hampers
  const filteredHampers = useMemo(() => {
    let result = [...remainingHampers];

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
  }, [remainingHampers, activeFilter, sortBy]);

  return (
    <section id="hampers" className="py-6 sm:py-12 bg-bakery-cream/20 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Clean, Non-intrusive Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4 sm:mb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-bakery-gold-dark">
              <span>🎁</span>
              <span>Diwali Gifting Collection</span>
            </div>
            <h2 className="font-serif text-xl sm:text-3xl font-bold text-bakery-maroon tracking-tight">
              Diwali Hampers & Gift Boxes
            </h2>
            <p className="text-xs sm:text-sm text-bakery-brown-muted">
              Handcrafted gift trunks, cake pops, and luxury dry fruit boxes.
            </p>
          </div>

          {/* Compact Sort & Filter Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
            {/* Quick Price Filter Pills */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {FILTER_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium whitespace-nowrap transition-colors min-h-[30px] ${
                    activeFilter === cat.id
                      ? 'bg-bakery-maroon text-white shadow-2xs font-semibold'
                      : 'bg-white text-bakery-brown border border-bakery-border hover:bg-bakery-cream'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1 flex-shrink-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs bg-white text-bakery-brown border border-bakery-border rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-bakery-gold min-h-[30px]"
                aria-label="Sort hampers"
              >
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards Grid: Clean responsive grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {filteredHampers.map((hamper) => (
            <ProductCard
              key={hamper.id}
              hamper={hamper}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>

        {/* Custom Corporate/Bulk Assistance Note */}
        <div className="mt-8 p-4 rounded-2xl bg-white border border-bakery-border text-center space-y-2 max-w-xl mx-auto shadow-2xs">
          <p className="text-xs sm:text-sm font-semibold text-bakery-brown">
            Need customized hamper combinations or bulk quantities?
          </p>
          <a
            href="https://wa.me/919417528889?text=Hello%20The%20Home%20Delight%20Bakery!%20%F0%9F%AA%94%20I%20would%20like%20to%20discuss%20customized%20Diwali%20hampers."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-bakery-cream hover:bg-bakery-gold/20 text-bakery-maroon border border-bakery-border text-xs font-bold transition-colors"
          >
            <span>Chat with us on WhatsApp for Custom Hampers</span>
          </a>
        </div>

      </div>
    </section>
  );
}
