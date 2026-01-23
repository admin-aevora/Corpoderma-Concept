"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowRight, FaImages, FaPlay } from "react-icons/fa";
import { contactInfo } from "@/lib/data/contact";
import { trackWhatsAppClick, trackBookClick } from "@/lib/tracking";

export default function Results() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick("home", "results");
  };

  const handleViewGalleryClick = () => {
    trackBookClick("Results", "Gallery", "results");
  };

  return (
    <section className="section section-white">
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
            Before & After
          </span>
          <h2 className="text-[var(--color-charcoal)] mb-4">
            Results you can see
          </h2>
          <p className="text-[var(--color-warm-gray)] max-w-xl mx-auto">
            Our work is built on progress. Here&apos;s what clients achieve with the right plan.
          </p>
        </motion.div>

        {/* Results content area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-6 mb-10"
        >
          {/* Image carousel placeholder */}
          <div className="relative aspect-[4/3] bg-gradient-to-br from-[var(--color-cream)] to-[var(--color-warm)] rounded-2xl overflow-hidden border border-[var(--color-light-gray)] flex items-center justify-center group cursor-pointer hover:shadow-lg transition-shadow">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <FaImages className="text-2xl text-[var(--color-primary)] group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-serif text-lg text-[var(--color-charcoal)] mb-2">
                Before & After Gallery
              </h4>
              <p className="text-[var(--color-warm-gray)] text-sm">
                See real transformations from our clients
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
              Coming Soon
            </div>
          </div>

          {/* Video placeholder */}
          <div className="relative aspect-[4/3] bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-primary)]/10 rounded-2xl overflow-hidden border border-[var(--color-light-gray)] flex items-center justify-center group cursor-pointer hover:shadow-lg transition-shadow">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <FaPlay className="text-xl text-[var(--color-primary)] group-hover:text-white transition-colors ml-1" />
              </div>
              <h4 className="font-serif text-lg text-[var(--color-charcoal)] mb-2">
                What to Expect
              </h4>
              <p className="text-[var(--color-warm-gray)] text-sm">
                Watch our treatment process video
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
              Video
            </div>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {[
            { number: "1000+", label: "Sessions completed" },
            { number: "95%", label: "Client satisfaction" },
            { number: "3-6", label: "Sessions for visible results" },
            { number: "4.9", label: "Google rating" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-[var(--color-cream)] rounded-xl"
            >
              <div className="font-serif text-2xl md:text-3xl text-[var(--color-primary)] mb-1">
                {stat.number}
              </div>
              <div className="text-[var(--color-warm-gray)] text-xs md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons - matching spec */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/results"
            onClick={handleViewGalleryClick}
            className="btn btn-primary w-full sm:w-auto"
          >
            View Results Gallery
            <FaArrowRight className="text-sm" />
          </Link>
          <a
            href={`${contactInfo.whatsapp.link}?text=${encodeURIComponent("Hi Corpoderma 👋\nI'd like to know what's best for me.\nMy goal: __\nName: __")}`}
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light w-full sm:w-auto"
          >
            <FaWhatsapp className="text-lg text-[var(--color-whatsapp)]" />
            WhatsApp — what&apos;s best for me?
          </a>
        </motion.div>
      </div>
    </section>
  );
}
