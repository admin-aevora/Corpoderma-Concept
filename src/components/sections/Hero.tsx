"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp, FaCheck, FaShieldAlt, FaUserCheck, FaCalendarAlt } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import { contactInfo } from "@/lib/data/contact";
import { trackWhatsAppClick, trackBookClick } from "@/lib/tracking";

export default function Hero() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick("home", "hero");
  };

  const handleBookConsultationClick = () => {
    trackBookClick("Consultation", "General", "hero");
  };

  // Trust bar items matching Corpoderma spec
  const trustItems = [
    { icon: FaCheck, text: "Result-driven treatments" },
    { icon: FaShieldAlt, text: "Premium hygienic environment" },
    { icon: FaUserCheck, text: "Specialist-guided plans" },
    { icon: FaCalendarAlt, text: "Same-week appointments" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Premium gradient with subtle texture */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient - deep teal to light */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[var(--color-primary-light)]" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-[var(--color-gold)]/10 blur-3xl" />
          <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
        </div>
        
        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          {/* Small label - matching spec */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-[var(--color-gold-light)] text-sm font-medium tracking-wider uppercase mb-6"
          >
            <HiOutlineSparkles className="text-lg" />
            <span>Slimming • Aesthetics • Wellness</span>
            <HiOutlineSparkles className="text-lg" />
          </motion.div>

          {/* Main headline - matching spec */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white mb-6 text-balance"
          >
            Visible results.
            <br />
            <span className="text-[var(--color-gold-light)]">Real confidence.</span>
          </motion.h1>

          {/* Sub-headline - matching spec (2 lines max) */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl mb-4 max-w-2xl mx-auto leading-relaxed"
          >
            Premium slimming and aesthetic treatments designed around your body and your goals.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/80 text-base md:text-lg mb-10 max-w-2xl mx-auto"
          >
            Start with a consultation — we&apos;ll build a personalized plan that works.
          </motion.p>

          {/* CTA Buttons - Book Consultation primary, WhatsApp secondary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <Link
              href="/book"
              onClick={handleBookConsultationClick}
              className="btn btn-lg bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] w-full sm:w-auto"
            >
              Book Consultation
            </Link>
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
          </motion.div>

          {/* Microcopy under CTAs - matching spec */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-white/60 text-sm mb-12"
          >
            Not sure what to book? Start with a consultation — we&apos;ll guide you.
          </motion.p>

          {/* Trust bar - matching spec (4 items) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
          >
            {trustItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
              >
                <item.icon className="text-[var(--color-gold-light)] text-sm" />
                <span className="text-white text-xs md:text-sm whitespace-nowrap">
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
