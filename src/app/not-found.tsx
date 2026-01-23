import Link from "next/link";
import { FaHome, FaSpa, FaArrowRight } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-cream)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[var(--color-blush)] blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-[var(--color-rose)] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-lg mx-auto">
        {/* Decorative icon */}
        <div className="w-20 h-20 rounded-full bg-[var(--color-blush)] flex items-center justify-center mx-auto mb-8">
          <FaSpa className="text-3xl text-[var(--color-gold)]" />
        </div>

        {/* 404 number */}
        <h1 className="font-serif text-7xl md:text-9xl text-[var(--color-charcoal)] mb-2 tracking-tight">
          404
        </h1>

        {/* Title */}
        <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-charcoal)] mb-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-[var(--color-warm-gray)] mb-8 leading-relaxed">
          It seems the page you&apos;re looking for has wandered off for a spa day. 
          Let us help you find your way back to relaxation.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn btn-primary">
            <FaHome />
            Back to Home
          </Link>
          <Link href="/services" className="btn btn-secondary">
            Browse Services
            <FaArrowRight />
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-[var(--color-light-gray)]">
          <p className="text-sm text-[var(--color-warm-gray)] mb-4">
            Popular destinations
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/offers" className="text-[var(--color-gold)] hover:underline">
              Special Offers
            </Link>
            <span className="text-[var(--color-light-gray)]">•</span>
            <Link href="/book" className="text-[var(--color-gold)] hover:underline">
              Book Now
            </Link>
            <span className="text-[var(--color-light-gray)]">•</span>
            <Link href="/contact" className="text-[var(--color-gold)] hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
