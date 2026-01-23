"use client";

import { motion } from "framer-motion";
import { FaTag, FaWhatsapp } from "react-icons/fa";
import { getAllOffers } from "@/lib/data/offers";
import { contactInfo } from "@/lib/data/contact";
import OfferCard from "@/components/ui/OfferCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { trackWhatsAppClick } from "@/lib/tracking";

const offers = getAllOffers();

export default function OffersPageClient() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick("offers", "hero");
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-gold)]/10 to-[var(--color-cream)] py-16 md:py-24">
        <div className="container">
          <Breadcrumbs items={[{ label: "Special Offers" }]} className="mb-6 justify-center" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-[var(--color-gold)] text-white rounded-full px-4 py-2 mb-6">
              <FaTag />
              <span className="text-sm font-medium">Limited Time Deals</span>
            </div>
            <h1 className="text-[var(--color-charcoal)] mb-4">Special Offers</h1>
            <p className="text-[var(--color-warm-gray)] text-lg mb-8">
              Take advantage of our exclusive deals and enjoy premium treatments at special prices
            </p>
            <a
              href={`${contactInfo.whatsapp.link}?text=${encodeURIComponent("Hi Plush Beauty Spa, I'd like to know more about your current offers.")}`}
              onClick={handleWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <FaWhatsapp className="text-lg" />
              Ask About Offers
            </a>
          </motion.div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="h-full"
              >
                <OfferCard offer={offer} variant="featured" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl text-[var(--color-charcoal)] mb-4">
              Terms & Conditions
            </h2>
            <ul className="text-[var(--color-warm-gray)] text-sm space-y-2">
              <li>• Offers cannot be combined with other promotions unless stated</li>
              <li>• Valid at Plush Beauty Spa, Khalifa City only</li>
              <li>• Subject to availability — book in advance</li>
              <li>• Management reserves the right to modify or withdraw offers</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
