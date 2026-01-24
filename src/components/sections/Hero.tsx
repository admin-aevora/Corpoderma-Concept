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

  // Trust bar items matching Corpofino spec
  const trustItems = [
    { icon: FaCheck, text: "Result-driven treatments" },
    { icon: FaShieldAlt, text: "Premium hygienic environment" },
    { icon: FaUserCheck, text: "Specialist-guided plans" },
    { icon: FaCalendarAlt, text: "Same-week appointments" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with animated gradient mesh */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[var(--color-primary-light)]" />
        
        {/* Animated gradient orbs - floating effect */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-white/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[var(--color-gold)]/20 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-white/8 blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              x: [0, 30, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Enhanced bottom fade with glassmorphism */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent backdrop-blur-sm" />
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

          {/* Enhanced trust bar with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
          >
            {trustItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/25 hover:bg-white/20 hover:border-white/30 transition-all cursor-default shadow-lg"
              >
                <item.icon className="text-[var(--color-gold-light)] text-base" />
                <span className="text-white text-xs md:text-sm whitespace-nowrap font-medium">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
