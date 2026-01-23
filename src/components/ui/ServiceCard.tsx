"use client";

import Link from "next/link";
import Image from "next/image";
import { FaClock, FaWhatsapp, FaSpa } from "react-icons/fa";
import { Service } from "@/lib/data/services";
import { trackBookClick, trackServiceView } from "@/lib/tracking";
import { getWhatsAppLink } from "@/lib/data/contact";

// Blur placeholder for images
const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgIBAgcBAAAAAAAAAAAAAQIDBAAFESEGEhMxQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADETH/2gAMAwEAAhEDEEEAFQCGm8J6jcLzToI5cYG6BZ7Y+M/uTq1e04xPXiMaAAFssc7nP//Z";

interface ServiceCardProps {
  service: Service;
  variant?: "default" | "compact";
}

export default function ServiceCard({ service, variant = "default" }: ServiceCardProps) {
  const handleBookClick = () => {
    trackBookClick(service.name, service.category, "service_card");
  };

  const handleViewClick = () => {
    trackServiceView(service.name, service.category);
  };

  const whatsappLink = getWhatsAppLink(service.name);

  if (variant === "compact") {
    return (
      <div className="card card-elevated p-4 flex items-center justify-between gap-4 border border-[var(--color-light-gray)]">
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-[var(--color-charcoal)] truncate">
            {service.name}
          </h4>
          <div className="flex items-center gap-3 mt-1 text-sm text-[var(--color-warm-gray)]">
            <span className="flex items-center gap-1">
              <FaClock className="text-xs" />
              {service.duration}
            </span>
            <span className="font-medium text-[var(--color-purple)]">
              {service.priceDisplay}
            </span>
          </div>
        </div>
        <a
          href={whatsappLink}
          onClick={handleBookClick}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp btn-sm whitespace-nowrap"
        >
          <FaWhatsapp />
          Book
        </a>
      </div>
    );
  }

  return (
    <div
      className="card card-elevated group border border-[var(--color-light-gray)]"
      onClick={handleViewClick}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-cream-dark)]">
        {service.image ? (
          <Image
            src={service.image}
            alt={service.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--color-purple-light)] to-[var(--color-purple)]">
            <FaSpa className="text-4xl text-white/40" />
          </div>
        )}
        
        {/* Popular badge */}
        {service.isPopular && (
          <div className="absolute top-3 left-3 bg-[var(--color-purple)] text-white text-xs font-medium px-3 py-1 rounded-full">
            Popular
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-serif text-lg text-[var(--color-charcoal)] group-hover:text-[var(--color-purple)] transition-colors">
            {service.name}
          </h3>
          <span className="text-[var(--color-purple)] font-medium text-sm whitespace-nowrap">
            {service.priceDisplay}
          </span>
        </div>

        <p className="text-sm text-[var(--color-warm-gray)] mb-3 line-clamp-2">
          {service.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-sm text-[var(--color-warm-gray)]">
            <FaClock className="text-xs" />
            {service.duration}
          </span>

          <a
            href={whatsappLink}
            onClick={(e) => {
              e.stopPropagation();
              handleBookClick();
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-white bg-[var(--color-whatsapp)] hover:bg-[var(--color-whatsapp-hover)] px-3 py-1.5 rounded-full transition-colors"
          >
            <FaWhatsapp className="text-sm" />
            Book
          </a>
        </div>
      </div>
    </div>
  );
}

// Category card for services landing page
interface CategoryCardProps {
  category: {
    name: string;
    slug: string;
    description: string;
    image: string;
    startingPrice: number;
    serviceCount: number;
  };
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/services/${category.slug}`}
      className="card card-elevated group block border border-[var(--color-light-gray)]"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-cream-dark)]">
        {category.image ? (
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--color-purple-light)] to-[var(--color-purple)]">
            <FaSpa className="text-5xl text-white/50" />
          </div>
        )}
        
        {/* Overlay - Purple tinted */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-purple-dark)]/80 via-transparent to-transparent" />
        
        {/* Service count badge */}
        <div className="absolute top-3 right-3 bg-white/90 text-[var(--color-charcoal)] text-xs font-medium px-2 py-1 rounded-full">
          {category.serviceCount} services
        </div>
        
        {/* Category name overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-serif text-xl text-white mb-1">
            {category.name}
          </h3>
          <p className="text-white/80 text-sm">
            From AED {category.startingPrice}
          </p>
        </div>
      </div>
    </Link>
  );
}
