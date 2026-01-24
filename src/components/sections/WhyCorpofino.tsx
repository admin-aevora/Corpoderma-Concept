"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp, FaShieldAlt, FaUserMd, FaChartLine, FaCogs, FaLeaf } from "react-icons/fa";
import { contactInfo } from "@/lib/data/contact";
import { trackWhatsAppClick, trackBookClick } from "@/lib/tracking";

// Trust points matching Corpofino spec
const trustPoints = [
  {
    icon: FaShieldAlt,
    text: "Premium hygiene & professional standards",
  },
  {
    icon: FaUserMd,
    text: "Specialist-guided plans (not random sessions)",
  },
  {
    icon: FaChartLine,
    text: "Visible results & measurable progress",
  },
  {
    icon: FaCogs,
    text: "High-quality equipment and protocols",
  },
  {
    icon: FaLeaf,
    text: "Private, relaxing environment",
  },
];

export default function WhyCorpofino() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick("home", "why_corpofino");
  };

  const handleBookClick = () => {
    trackBookClick("Consultation", "General", "why_corpofino");
  };

  return (
    <section className="section section-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[var(--color-primary)] text-sm font-medium tracking-wider uppercase mb-3 block">
              The Corpofino Difference
            </span>
            <h2 className="text-[var(--color-charcoal)] mb-6">
              Why clients choose Corpofino
            </h2>

            {/* Trust points list - matching spec */}
            <ul className="space-y-4 mb-8">
              {trustPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <point.icon className="text-lg text-[var(--color-primary)]" />
                  </div>
                  <span className="text-[var(--color-charcoal)] pt-2">
                    {point.text}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA buttons - matching spec */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                onClick={handleBookClick}
                className="btn btn-primary"
              >
                Book Consultation
              </Link>
              <a
                href={`${contactInfo.whatsapp.link}?text=${encodeURIComponent(contactInfo.whatsapp.messageTemplate)}`}
                onClick={handleWhatsAppClick}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                <FaWhatsapp className="text-lg text-[var(--color-whatsapp)]" />
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right side - Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Premium visual card */}
            <div className="relative aspect-[4/5] bg-gradient-to-br from-[var(--color-primary)]/5 via-[var(--color-cream)] to-[var(--color-gold)]/10 rounded-3xl overflow-hidden border border-[var(--color-light-gray)]">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[var(--color-gold)]/10 rounded-full blur-3xl" />
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mx-auto mb-6">
                    <span className="font-serif text-3xl text-[var(--color-primary)]">C</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[var(--color-charcoal)] mb-2">
                    Premium Experience
                  </h3>
                  <p className="text-[var(--color-warm-gray)] text-sm max-w-xs">
                    Results-focused treatments in a relaxing, professional environment
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white shadow-lg rounded-2xl p-4 border border-[var(--color-light-gray)]">
              <div className="text-[var(--color-primary)] font-serif text-2xl font-semibold">4.9</div>
              <div className="text-[var(--color-warm-gray)] text-xs">Google Rating</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-2xl p-4 border border-[var(--color-light-gray)]">
              <div className="text-[var(--color-primary)] font-serif text-2xl font-semibold">320+</div>
              <div className="text-[var(--color-warm-gray)] text-xs">Happy Clients</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
