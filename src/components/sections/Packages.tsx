"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowRight, FaStar } from "react-icons/fa";
import { contactInfo } from "@/lib/data/contact";
import { trackWhatsAppClick, trackBookClick } from "@/lib/tracking";

// Package cards matching Corpofino spec
const packages = [
  {
    id: "starter",
    name: "Starter Pack",
    sessions: "3 sessions",
    description: "Perfect for first-time clients.",
    cta: "Ask on WhatsApp",
    ctaType: "whatsapp",
    featured: false,
  },
  {
    id: "transformation",
    name: "Transformation Plan",
    sessions: "6 sessions",
    description: "Best for inch loss + sculpting programs.",
    cta: "Book Consultation",
    ctaType: "book",
    featured: true,
  },
  {
    id: "membership",
    name: "Membership / Monthly Plan",
    sessions: "Ongoing",
    description: "Maintain results and continue improving.",
    cta: "View Plans",
    ctaType: "link",
    featured: false,
  },
];

export default function Packages() {
  const handleWhatsAppClick = (packageName: string) => {
    trackWhatsAppClick("home", `packages_${packageName}`);
  };

  const handleBookClick = (packageName: string) => {
    trackBookClick(packageName, "Package", "packages");
  };

  return (
    <section className="section section-warm section-enhanced">
      <div className="container">
        {/* Section header - matching spec */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[var(--color-primary)] text-sm font-medium tracking-wider uppercase mb-3 block">
            Save More
          </span>
          <h2 className="text-[var(--color-charcoal)] mb-4">
            Packages designed for transformation
          </h2>
          <p className="text-[var(--color-warm-gray)] max-w-xl mx-auto">
            Better results come from consistency. Save more with packages and guided plans.
          </p>
        </motion.div>

        {/* Package cards - 3 cards as per spec */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`package-card p-6 md:p-8 relative ${
                pkg.featured ? "package-card-featured" : ""
              }`}
            >
              {/* Featured badge */}
              {pkg.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-[var(--color-primary)] text-white text-xs font-medium px-3 py-1 rounded-full">
                  <FaStar className="text-[10px]" />
                  Most Popular
                </div>
              )}

              {/* Package content */}
              <div className="mb-6">
                <h3 className="font-serif text-xl text-[var(--color-charcoal)] mb-1">
                  {pkg.name}
                </h3>
                <p className="text-[var(--color-primary)] font-medium text-sm mb-3">
                  {pkg.sessions}
                </p>
                <p className="text-[var(--color-warm-gray)] text-sm">
                  {pkg.description}
                </p>
              </div>

              {/* CTA button based on type */}
              {pkg.ctaType === "whatsapp" && (
                <a
                  href={`${contactInfo.whatsapp.link}?text=${encodeURIComponent(`Hi Corpofino 👋\nI'm interested in the ${pkg.name}.\nName: __`)}`}
                  onClick={() => handleWhatsAppClick(pkg.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full justify-center"
                >
                  <FaWhatsapp className="text-lg" />
                  {pkg.cta}
                </a>
              )}
              {pkg.ctaType === "book" && (
                <Link
                  href="/book"
                  onClick={() => handleBookClick(pkg.id)}
                  className="btn btn-primary w-full justify-center"
                >
                  {pkg.cta}
                </Link>
              )}
              {pkg.ctaType === "link" && (
                <Link
                  href="/packages"
                  onClick={() => handleBookClick(pkg.id)}
                  className="btn btn-secondary w-full justify-center"
                >
                  {pkg.cta}
                  <FaArrowRight className="text-sm" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Microcopy - matching spec */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-[var(--color-warm-gray)] text-sm"
        >
          We&apos;ll recommend the best package during your consultation.
        </motion.p>
      </div>
    </section>
  );
}
