"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaTimes, FaFilter } from "react-icons/fa";
import { categories, services, searchServices } from "@/lib/data/services";
import { CategoryCard } from "@/components/ui/ServiceCard";
import ServiceCard from "@/components/ui/ServiceCard";
import { trackSearch, trackFilter } from "@/lib/tracking";

export default function ServicesPageClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);
  const [showPopularOnly, setShowPopularOnly] = useState(false);

  // Filter and search services
  const filteredServices = useMemo(() => {
    let result = searchQuery ? searchServices(searchQuery) : services;

    if (selectedCategory) {
      result = result.filter((s) => s.categorySlug === selectedCategory);
    }

    if (showPopularOnly) {
      result = result.filter((s) => s.isPopular);
    }

    result = result.filter(
      (s) => s.price >= priceRange[0] && s.price <= priceRange[1]
    );

    return result;
  }, [searchQuery, selectedCategory, priceRange, showPopularOnly]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      trackSearch(query);
    }
  };

  const handleCategorySelect = (slug: string | null) => {
    setSelectedCategory(slug);
    if (slug) {
      trackFilter("category", slug);
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setPriceRange([0, 1000]);
    setShowPopularOnly(false);
  };

  const hasActiveFilters =
    searchQuery || selectedCategory || showPopularOnly || priceRange[0] > 0 || priceRange[1] < 1000;

  return (
    <div className="pt-20">
      {/* Hero Section - Purple gradient */}
      <section className="bg-gradient-to-br from-[var(--color-purple)] via-[var(--color-purple-light)] to-[var(--color-blush)] py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-white mb-4">Our Services</h1>
            <p className="text-white/80 text-lg mb-8">
              Nails. Lashes. Skin. Confidence. Browse our full menu of beauty treatments.
            </p>

            {/* Search bar */}
            <div className="relative max-w-md mx-auto">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-warm-gray)]" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="input pl-12 pr-10"
                aria-label="Search services"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)]"
                  aria-label="Clear search"
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg text-[var(--color-charcoal)]">
                    Filters
                  </h3>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-[var(--color-purple)] hover:underline"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                {/* Categories */}
                <div>
                  <h4 className="font-medium text-[var(--color-charcoal)] mb-3">
                    Category
                  </h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleCategorySelect(null)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        !selectedCategory
                          ? "bg-[var(--color-purple)] text-white"
                          : "hover:bg-[var(--color-cream)]"
                      }`}
                    >
                      All Categories
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.slug}
                        onClick={() => handleCategorySelect(cat.slug)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === cat.slug
                            ? "bg-[var(--color-purple)] text-white"
                            : "hover:bg-[var(--color-cream)]"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popular toggle */}
                <div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showPopularOnly}
                      onChange={(e) => setShowPopularOnly(e.target.checked)}
                      className="w-4 h-4 rounded border-[var(--color-light-gray)] text-[var(--color-purple)] focus:ring-[var(--color-purple)]"
                    />
                    <span className="text-sm text-[var(--color-charcoal)]">
                      Popular only
                    </span>
                  </label>
                </div>

                {/* Price range */}
                <div>
                  <h4 className="font-medium text-[var(--color-charcoal)] mb-3">
                    Price Range
                  </h4>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="50"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full accent-[var(--color-purple)]"
                      aria-label="Maximum price"
                      aria-valuetext={`Up to AED ${priceRange[1]}`}
                    />
                    <div className="flex justify-between text-sm text-[var(--color-warm-gray)]">
                      <span>AED {priceRange[0]}</span>
                      <span>AED {priceRange[1]}+</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Mobile Filter Toggle */}
            <div className="lg:hidden flex items-center justify-between mb-4">
              <span className="text-sm text-[var(--color-warm-gray)]">
                {filteredServices.length} services found
              </span>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="btn btn-secondary btn-sm"
                aria-expanded={showFilters}
                aria-controls="mobile-filters"
              >
                <FaFilter />
                Filters
              </button>
            </div>

            {/* Mobile Filters Drawer */}
            {showFilters && (
              <motion.div
                id="mobile-filters"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-white rounded-xl p-4 mb-4 space-y-4"
              >
                {/* Close button */}
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-[var(--color-charcoal)]">
                    Filters
                  </h4>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-2 text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)]"
                    aria-label="Close filters"
                  >
                    <FaTimes />
                  </button>
                </div>

                {/* Category pills */}
                <div>
                  <h4 className="font-medium text-sm text-[var(--color-charcoal)] mb-2">
                    Category
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleCategorySelect(null)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                        !selectedCategory
                          ? "bg-[var(--color-purple)] text-white"
                          : "bg-[var(--color-cream)] text-[var(--color-charcoal)]"
                      }`}
                    >
                      All
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.slug}
                        onClick={() => handleCategorySelect(cat.slug)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          selectedCategory === cat.slug
                            ? "bg-[var(--color-purple)] text-white"
                            : "bg-[var(--color-cream)] text-[var(--color-charcoal)]"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popular toggle */}
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showPopularOnly}
                    onChange={(e) => setShowPopularOnly(e.target.checked)}
                    className="w-4 h-4 rounded"
                  />
                  <span className="text-sm">Popular only</span>
                </label>

                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-[var(--color-purple)]"
                  >
                    Clear all filters
                  </button>
                )}
              </motion.div>
            )}

            {/* Main Content Area */}
            <div className="flex-1">
              {/* Show categories grid when no search/filter */}
              {!searchQuery && !selectedCategory && !showPopularOnly ? (
                <>
                  <h2 className="font-serif text-2xl text-[var(--color-charcoal)] mb-6">
                    Browse by Category
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
                    {categories.map((category, index) => (
                      <motion.div
                        key={category.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <CategoryCard category={category} />
                      </motion.div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  {/* Results header */}
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-serif text-2xl text-[var(--color-charcoal)]">
                      {selectedCategory
                        ? categories.find((c) => c.slug === selectedCategory)?.name
                        : searchQuery
                        ? `Results for "${searchQuery}"`
                        : "All Services"}
                    </h2>
                    <span className="text-sm text-[var(--color-warm-gray)]">
                      {filteredServices.length} services
                    </span>
                  </div>

                  {/* Services grid */}
                  {filteredServices.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredServices.map((service, index) => (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                          <ServiceCard service={service} />
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-[var(--color-warm-gray)] mb-4">
                        No services found matching your criteria.
                      </p>
                      <button
                        onClick={clearFilters}
                        className="btn btn-secondary"
                      >
                        Clear filters
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
