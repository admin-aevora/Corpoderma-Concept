"use client";

import Image from "next/image";
import { FaTag, FaWhatsapp } from "react-icons/fa";
import { Offer } from "@/lib/data/offers";
import { trackOfferClick, trackBookClick } from "@/lib/tracking";
import { getWhatsAppLink } from "@/lib/data/contact";

// Blur placeholder for images
const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgIBAgcBAAAAAAAAAAAAAQIDBAAFESEGEhMxQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADETH/2gAMAwEAAhEDEEEAFQCGm8J6jcLzToI5cYG6BZ7Y+M/uTq1e04xPXiMaAAFssc7nP//Z";

interface OfferCardProps {
  offer: Offer;
  variant?: "default" | "featured";
}

export default function OfferCard({ offer, variant = "default" }: OfferCardProps) {
  const handleOfferClick = () => {
    trackOfferClick(offer.title);
  };

  const handleBookClick = () => {
    trackBookClick(offer.title, offer.category, "offer_card");
  };

  const whatsappLink = getWhatsAppLink(offer.title);

  if (variant === "featured") {
    return (
      <div
        className="card card-elevated group overflow-hidden h-full flex flex-col border border-[var(--color-light-gray)]"
        onClick={handleOfferClick}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-cream-dark)] flex-shrink-0">
          {offer.image ? (
            <Image
              src={offer.image}
              alt={offer.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--color-purple-light)] to-[var(--color-purple)]">
              <FaTag className="text-5xl text-white/50" />
            </div>
          )}
          
          {/* Discount badge - Purple accent */}
          <div className="absolute top-4 left-4 bg-[var(--color-purple)] text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
            {offer.discount}
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-serif text-xl text-[var(--color-charcoal)]">
              {offer.title}
            </h3>
          </div>

          <p className="text-[var(--color-warm-gray)] text-sm mb-4 flex-1">
            {offer.description}
          </p>

          {/* Price comparison - fixed height area */}
          <div className="h-8 mb-4">
            {offer.originalPrice && offer.offerPrice ? (
              <div className="flex items-center gap-3">
                <span className="text-[var(--color-warm-gray)] line-through text-sm">
                  AED {offer.originalPrice}
                </span>
                <span className="text-[var(--color-purple)] font-bold text-lg">
                  AED {offer.offerPrice}
                </span>
              </div>
            ) : null}
          </div>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--color-light-gray)]">
            <span className="text-xs text-[var(--color-warm-gray)]">
              {offer.validUntil}
            </span>
            <a
              href={whatsappLink}
              onClick={(e) => {
                e.stopPropagation();
                handleBookClick();
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-white bg-[var(--color-whatsapp)] hover:bg-[var(--color-whatsapp-hover)] px-4 py-2 rounded-full transition-colors"
            >
              <FaWhatsapp />
              Book
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div
      className="card card-elevated p-5 group border border-[var(--color-light-gray)]"
      onClick={handleOfferClick}
    >
      <div className="flex items-start gap-4">
        {/* Discount badge - Purple */}
        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[var(--color-purple)] flex items-center justify-center">
          <span className="text-white text-xs font-bold text-center leading-tight px-1">
            {offer.discount}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-serif text-lg text-[var(--color-charcoal)] mb-1">
            {offer.title}
          </h4>
          <p className="text-sm text-[var(--color-warm-gray)] mb-3 line-clamp-2">
            {offer.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-xs text-[var(--color-warm-gray)]">
              {offer.validUntil}
            </span>
            <a
              href={whatsappLink}
              onClick={(e) => {
                e.stopPropagation();
                handleBookClick();
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-[var(--color-purple)] hover:text-[var(--color-purple-dark)] transition-colors"
            >
              <FaWhatsapp />
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
