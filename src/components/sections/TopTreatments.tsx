"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { getWhatsAppConsultationLink } from "@/lib/data/contact";
import { trackWhatsAppClick, trackBookClick } from "@/lib/tracking";

// Treatment categories with their treatments - matching Corpofino spec
const treatmentCategories = [
  {
    id: "slimming",
    title: "Slimming & Body Contouring",
    description: "Target stubborn areas, improve definition, and feel lighter — with a plan that fits your body.",
    treatments: [
      { name: "Cavitation", description: "Break down stubborn fat areas and contour." },
      { name: "Radio Frequency (RF)", description: "Tighten skin and improve texture." },
      { name: "Lymphatic Drainage", description: "Reduce bloating and support recovery." },
      { name: "Body Sculpting Plans", description: "Combined protocols for best results." },
    ],
    cta: "Book Slimming Consultation",
    ctaCategory: "Slimming",
    bgColor: "bg-[var(--color-primary)]/5",
    accentColor: "var(--color-primary)",
  },
  {
    id: "skin",
    title: "Skin & Aesthetics",
    description: "Treat dullness, uneven texture, and pigmentation with professional-grade protocols.",
    treatments: [
      { name: "Hydrating Facial", description: "Deep moisture for radiant skin." },
      { name: "Deep Cleansing & Extraction", description: "Clear pores and improve clarity." },
      { name: "Peels & Brightening", description: "Even tone and reveal fresh skin." },
      { name: "Rejuvenation / Anti-aging", description: "Restore youthful appearance." },
    ],
    cta: "Book Skin Consultation",
    ctaCategory: "Skin",
    bgColor: "bg-[var(--color-gold)]/5",
    accentColor: "var(--color-gold-dark)",
  },
  {
    id: "wellness",
    title: "Wellness & Recovery",
    description: "Relax, release tension, improve circulation, and reset your nervous system.",
    treatments: [
      { name: "Deep Tissue Massage", description: "Release muscle tension and knots." },
      { name: "Relaxing Massage", description: "Stress relief and relaxation." },
      { name: "Moroccan Bath / Hammam", description: "Traditional cleansing ritual." },
      { name: "Recovery Sessions", description: "Support your body's healing process." },
    ],
    cta: "Book a Wellness Session",
    ctaCategory: "Wellness",
    bgColor: "bg-[var(--color-primary-light)]/5",
    accentColor: "var(--color-primary-light)",
  },
];

export default function TopTreatments() {
  const handleBookClick = (category: string) => {
    trackBookClick(category, "Treatment", "top_treatments");
  };

  return (
    <section className="section section-cream">
      <div className="container">
        {/* Section header - matching spec */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[var(--color-primary)] text-sm font-medium tracking-wider uppercase mb-3 block">
            Popular Treatments
          </span>
          <h2 className="text-[var(--color-charcoal)] mb-4">
            Most requested treatments
          </h2>
          <p className="text-[var(--color-warm-gray)] max-w-xl mx-auto">
            These treatments are popular because they deliver visible, measurable results.
          </p>
        </motion.div>

        {/* Treatment category blocks */}
        <div className="space-y-8">
          {treatmentCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className={`rounded-2xl ${category.bgColor} p-6 md:p-8`}
            >
              {/* Category header */}
              <div className="mb-6">
                <h3 className="font-serif text-2xl text-[var(--color-charcoal)] mb-2">
                  {category.title}
                </h3>
                <p className="text-[var(--color-warm-gray)] text-sm max-w-2xl">
                  {category.description}
                </p>
              </div>

              {/* Treatments grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {category.treatments.map((treatment, treatmentIndex) => (
                  <motion.div
                    key={treatment.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + treatmentIndex * 0.05 }}
                    className="treatment-card bg-white p-5"
                  >
                    <h4 className="font-medium text-[var(--color-charcoal)] mb-2">
                      {treatment.name}
                    </h4>
                    <p className="text-[var(--color-warm-gray)] text-sm">
                      {treatment.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Category CTA */}
              <a
                href={getWhatsAppConsultationLink(category.ctaCategory)}
                onClick={() => handleBookClick(category.ctaCategory)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex"
              >
                <FaWhatsapp className="text-lg" />
                {category.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
