"use client";

import Link from "next/link";
import { FaWhatsapp, FaCalendarAlt } from "react-icons/fa";
import { contactInfo } from "@/lib/data/contact";
import { trackWhatsAppClick, trackBookClick } from "@/lib/tracking";

export default function MobileActionBar() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick("mobile_bar", "sticky_cta");
  };

  const handleBookClick = () => {
    trackBookClick("Consultation", "General", "mobile_bar");
  };

  return (
    <div className="mobile-action-bar">
      {/* WhatsApp - Primary booking method */}
      <a
        href={`${contactInfo.whatsapp.link}?text=${encodeURIComponent(contactInfo.whatsapp.messageTemplate)}`}
        onClick={handleWhatsAppClick}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[var(--color-whatsapp)] text-white font-medium rounded-full transition-all active:scale-95"
      >
        <FaWhatsapp className="text-lg" />
        <span>WhatsApp</span>
      </a>
      {/* Book Consultation - Primary CTA */}
      <Link
        href="/book"
        onClick={handleBookClick}
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[var(--color-primary)] text-white font-medium rounded-full transition-all active:scale-95"
      >
        <FaCalendarAlt />
        <span>Book Consultation</span>
      </Link>
    </div>
  );
}
