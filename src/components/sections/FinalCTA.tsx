"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "@/lib/data/contact";
import { trackWhatsAppClick, trackBookClick } from "@/lib/tracking";

export default function FinalCTA() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick("home", "final_cta");
  };

  const handleBookClick = () => {
    trackBookClick("Consultation", "General", "final_cta");
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background - Premium teal gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[var(--color-primary-light)]">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[var(--color-gold)]/10 blur-3xl" />
        </div>
      </div>

      {/* Content - matching Corpoderma spec Final CTA */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-white mb-6">
            Ready to start your transformation?
          </h2>
          
          <p className="text-white/80 text-lg mb-10 max-w-lg mx-auto">
            Book your consultation today and get a personalized plan built around your goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Book Consultation primary - as per spec */}
            <Link
              href="/book"
              onClick={handleBookClick}
              className="btn btn-lg bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] w-full sm:w-auto"
            >
              Book Consultation
            </Link>
            {/* WhatsApp Now secondary */}
            <a
              href={`${contactInfo.whatsapp.link}?text=${encodeURIComponent(contactInfo.whatsapp.messageTemplate)}`}
              onClick={handleWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg btn-whatsapp w-full sm:w-auto"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp Now
            </a>
          </div>
        </motion.div>
      </div>

      {/* Disclaimer footer - as per spec */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="text-white/40 text-xs">
          Concept redesign by Ihab — for demonstration only. Not affiliated with Corpoderma.
        </p>
      </div>
    </section>
  );
}
