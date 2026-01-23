"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from "react-icons/fa";
import { getReviews, freshaStats } from "@/lib/data/reviews";
import { trackBookClick } from "@/lib/tracking";

const reviews = getReviews(6);

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  const handleBookClick = () => {
    trackBookClick("Consultation", "General", "reviews");
  };

  return (
    <section className="section section-white overflow-hidden">
      <div className="container">
        {/* Section header - matching Corpoderma spec */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[var(--color-primary)] text-sm font-medium tracking-wider uppercase mb-3 block">
            Client Stories
          </span>
          <h2 className="text-[var(--color-charcoal)] mb-4">
            Trusted by clients in Abu Dhabi
          </h2>
          <p className="text-[var(--color-warm-gray)] max-w-xl mx-auto mb-6">
            A premium experience with results that keep clients coming back.
          </p>
          
          {/* Rating summary */}
          <div className="inline-flex items-center gap-3 bg-[var(--color-cream)] rounded-full px-5 py-2.5">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-[var(--color-gold)] text-sm" />
              ))}
            </div>
            <span className="text-[var(--color-charcoal)] font-semibold">{freshaStats.rating}</span>
            <span className="text-[var(--color-warm-gray)] text-sm">
              ({freshaStats.reviewCount} reviews on {freshaStats.platform})
            </span>
          </div>
        </motion.div>

        {/* Reviews carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onFocus={() => setIsAutoPlaying(false)}
          onBlur={() => setIsAutoPlaying(true)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              prevSlide();
            } else if (e.key === "ArrowRight") {
              nextSlide();
            }
          }}
          tabIndex={0}
          role="region"
          aria-label="Customer reviews carousel"
          aria-live="polite"
        >
          {/* Desktop: Show 2 cards */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {[0, 1].map((offset) => {
              const index = (currentIndex + offset) % reviews.length;
              const review = reviews[index];
              return (
                <motion.div
                  key={`${review.id}-${offset}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: offset * 0.1 }}
                  className="review-card relative"
                >
                  <FaQuoteLeft className="absolute top-4 right-4 text-[var(--color-primary)]/10 text-3xl" />
                  <p className="text-[var(--color-charcoal)] text-lg mb-4 relative z-10">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                      <span className="text-[var(--color-primary)] font-medium">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-charcoal)] text-sm">
                        {review.name}
                      </p>
                      <p className="text-[var(--color-warm-gray)] text-xs">
                        {review.service}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile: Single card carousel */}
          <div className="md:hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="px-4"
              >
                <div className="review-card relative">
                  <FaQuoteLeft className="absolute top-4 right-4 text-[var(--color-primary)]/10 text-3xl" />
                  <p className="text-[var(--color-charcoal)] text-lg mb-4 relative z-10">
                    &ldquo;{reviews[currentIndex].text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                      <span className="text-[var(--color-primary)] font-medium">
                        {reviews[currentIndex].name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-charcoal)] text-sm">
                        {reviews[currentIndex].name}
                      </p>
                      <p className="text-[var(--color-warm-gray)] text-xs">
                        {reviews[currentIndex].service}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[var(--color-charcoal)] hover:text-[var(--color-primary)] transition-colors z-10"
            aria-label="Previous review"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[var(--color-charcoal)] hover:text-[var(--color-primary)] transition-colors z-10"
            aria-label="Next review"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-[var(--color-primary)] w-6"
                  : "bg-[var(--color-light-gray)]"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA - matching spec */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/book"
            onClick={handleBookClick}
            className="btn btn-primary"
          >
            Book your consultation today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
