"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaWhatsapp, 
  FaArrowRight,
  FaStar,
  FaCheck,
  FaClock,
  FaGift
} from "react-icons/fa";
import { contactInfo } from "@/lib/data/contact";
import { freshaStats } from "@/lib/data/reviews";
import { trackWhatsAppClick } from "@/lib/tracking";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const benefits = [
  { icon: FaCheck, text: "Instant confirmation" },
  { icon: FaClock, text: "Same-week appointments" },
  { icon: FaStar, text: "4.8★ rated service" },
  { icon: FaGift, text: "New client discount" },
];

export default function BookPageClient() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick("book", "booking_option");
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-[var(--color-cream)] to-white">
      <div className="container section">
        <Breadcrumbs items={[{ label: "Book Appointment" }]} className="mb-8 justify-center" />
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-[var(--color-purple)] text-sm font-medium tracking-wider uppercase mb-3 block">
            Book Your Visit
          </span>
          <h1 className="text-[var(--color-charcoal)] mb-4">
            Ready to book?
          </h1>
          <p className="text-[var(--color-warm-gray)] text-lg">
            Message us on WhatsApp and we&apos;ll help you pick the best service.
          </p>
        </motion.div>

        {/* WhatsApp Booking - Primary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-lg mx-auto mb-12"
        >
          <a
            href={`${contactInfo.whatsapp.link}?text=${encodeURIComponent(contactInfo.whatsapp.messageTemplate)}`}
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-elevated p-8 flex flex-col items-center text-center group border-2 border-[var(--color-whatsapp)]/30 hover:border-[var(--color-whatsapp)] transition-colors"
          >
            <div className="w-24 h-24 rounded-full bg-[var(--color-whatsapp)]/10 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
              <FaWhatsapp className="text-5xl text-[var(--color-whatsapp)]" />
            </div>
            <h2 className="font-serif text-2xl text-[var(--color-charcoal)] mb-2">
              Book on WhatsApp
            </h2>
            <p className="text-[var(--color-warm-gray)] mb-6">
              Chat with us directly and we&apos;ll help you book the perfect treatment
            </p>
            <span className="btn btn-whatsapp btn-lg w-full justify-center">
              <FaWhatsapp className="text-xl" />
              WhatsApp Now
            </span>
            <p className="text-xs text-[var(--color-warm-gray)] mt-4">
              Usually responds within 30 minutes
            </p>
          </a>
        </motion.div>

        {/* Pre-filled message preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto mb-12"
        >
          <div className="bg-white rounded-xl p-6 border border-[var(--color-light-gray)]">
            <h3 className="text-sm font-medium text-[var(--color-charcoal)] mb-3">
              Your message will look like:
            </h3>
            <div className="bg-[var(--color-cream)] rounded-lg p-4 text-sm text-[var(--color-warm-gray)] font-mono whitespace-pre-line">
              {contactInfo.whatsapp.messageTemplate}
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-12"
        >
          {benefits.map((benefit) => (
            <div key={benefit.text} className="flex items-center gap-2 text-[var(--color-warm-gray)]">
              <benefit.icon className="text-[var(--color-purple)]" />
              <span className="text-sm">{benefit.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-sm border border-[var(--color-light-gray)]"
        >
          <div className="flex items-center justify-center gap-1 text-[var(--color-gold)] mb-3">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-lg" />
            ))}
          </div>
          <p className="font-serif text-2xl text-[var(--color-charcoal)] mb-2">
            {freshaStats.rating} rating
          </p>
          <p className="text-[var(--color-warm-gray)] mb-4">
            Based on {freshaStats.reviewCount.toLocaleString()} reviews on Google
          </p>
          <p className="text-sm text-[var(--color-warm-gray)] italic">
            &ldquo;The best spa experience in Abu Dhabi. Professional team and beautiful environment.&rdquo;
          </p>
        </motion.div>

        {/* Browse Services Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-[var(--color-warm-gray)] mb-4">
            Not sure what to book?
          </p>
          <Link href="/services" className="btn btn-secondary">
            Browse All Services
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
