"use client";

import Image from "next/image";
import { FaClock, FaCheck, FaArrowRight, FaStar } from "react-icons/fa";
import { Package } from "@/lib/data/packages";
import { trackBookClick, trackPackageView } from "@/lib/tracking";

interface PackageCardProps {
  pkg: Package;
  variant?: "default" | "featured";
}

export default function PackageCard({ pkg, variant = "default" }: PackageCardProps) {
  const handleViewClick = () => {
    trackPackageView(pkg.name, pkg.packagePrice);
  };

  const handleBookClick = () => {
    trackBookClick(pkg.name, "Packages", "package_card");
  };

  if (variant === "featured") {
    return (
      <div
        className="card card-elevated overflow-hidden group"
        onClick={handleViewClick}
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-[var(--color-cream-dark)]">
          {pkg.image ? (
            <Image
              src={pkg.image}
              alt={pkg.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--color-blush)] to-[var(--color-rose)]">
              <span className="text-5xl opacity-50">💆‍♀️</span>
            </div>
          )}
          
          {/* Best seller badge */}
          {pkg.isBestSeller && (
            <div className="absolute top-4 left-4 bg-[var(--color-charcoal)] text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1">
              <FaStar className="text-[var(--color-gold)]" />
              Best Seller
            </div>
          )}
          
          {/* Savings badge */}
          <div className="absolute top-4 right-4 bg-[var(--color-gold)] text-white text-sm font-bold px-3 py-1.5 rounded-full">
            Save AED {pkg.savings}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-3">
            <h3 className="font-serif text-2xl text-[var(--color-charcoal)] mb-1">
              {pkg.name}
            </h3>
            <p className="text-[var(--color-gold)] text-sm font-medium">
              {pkg.tagline}
            </p>
          </div>

          <p className="text-[var(--color-warm-gray)] text-sm mb-4">
            {pkg.description}
          </p>

          {/* Services included */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-[var(--color-charcoal)] mb-2">
              Includes:
            </h4>
            <ul className="space-y-1.5">
              {pkg.services.slice(0, 4).map((service, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-[var(--color-warm-gray)]">
                  <FaCheck className="text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                  {service}
                </li>
              ))}
              {pkg.services.length > 4 && (
                <li className="text-sm text-[var(--color-gold)]">
                  +{pkg.services.length - 4} more services
                </li>
              )}
            </ul>
          </div>

          {/* Duration & Price */}
          <div className="flex items-center justify-between pt-4 border-t border-[var(--color-light-gray)]">
            <div>
              <span className="flex items-center gap-1 text-sm text-[var(--color-warm-gray)] mb-1">
                <FaClock className="text-xs" />
                {pkg.duration}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-[var(--color-warm-gray)] line-through text-sm">
                  AED {pkg.totalValue}
                </span>
                <span className="text-[var(--color-charcoal)] font-bold text-xl">
                  AED {pkg.packagePrice}
                </span>
              </div>
            </div>
            <a
              href={pkg.freshaUrl}
              onClick={(e) => {
                e.stopPropagation();
                handleBookClick();
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Book Package
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Default compact variant
  return (
    <div
      className="card card-elevated p-5 group"
      onClick={handleViewClick}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h4 className="font-serif text-lg text-[var(--color-charcoal)] group-hover:text-[var(--color-gold)] transition-colors">
            {pkg.name}
          </h4>
          <p className="text-sm text-[var(--color-gold)]">{pkg.tagline}</p>
        </div>
        {pkg.isBestSeller && (
          <span className="flex-shrink-0 bg-[var(--color-gold)]/10 text-[var(--color-gold)] text-xs font-medium px-2 py-1 rounded-full">
            Best Seller
          </span>
        )}
      </div>

      <div className="flex items-center gap-4 text-sm text-[var(--color-warm-gray)] mb-3">
        <span className="flex items-center gap-1">
          <FaClock className="text-xs" />
          {pkg.duration}
        </span>
        <span>{pkg.services.length} services</span>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-[var(--color-light-gray)]">
        <div className="flex items-baseline gap-2">
          <span className="line-through text-sm text-[var(--color-warm-gray)]">
            AED {pkg.totalValue}
          </span>
          <span className="font-bold text-[var(--color-charcoal)]">
            AED {pkg.packagePrice}
          </span>
        </div>
        <a
          href={pkg.freshaUrl}
          onClick={(e) => {
            e.stopPropagation();
            handleBookClick();
          }}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm font-medium text-[var(--color-gold)] hover:text-[var(--color-gold-dark)] transition-colors"
        >
          Book
          <FaArrowRight className="text-xs" />
        </a>
      </div>
    </div>
  );
}
