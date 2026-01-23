"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FaStar, 
  FaHeart, 
  FaLeaf, 
  FaGem, 
  FaUsers,
  FaWhatsapp 
} from "react-icons/fa";
import { freshaStats } from "@/lib/data/reviews";
import { contactInfo } from "@/lib/data/contact";
import { RatingSummary } from "@/components/ui/ReviewCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { trackWhatsAppClick } from "@/lib/tracking";

const values = [
  {
    icon: FaGem,
    title: "Premium Quality",
    description: "We use only the finest products and maintain the highest standards in every treatment.",
  },
  {
    icon: FaHeart,
    title: "Personalized Care",
    description: "Every client is unique. We tailor our services to meet your individual needs and preferences.",
  },
  {
    icon: FaLeaf,
    title: "High Hygiene Standards",
    description: "Your safety is our priority. Experience spa-grade sanitation at every visit.",
  },
  {
    icon: FaUsers,
    title: "Experienced Technicians",
    description: "Our skilled professionals bring years of experience and continuous training to serve you.",
  },
];

const stats = [
  { value: "5+", label: "Years of Excellence" },
  { value: "850+", label: "Happy Clients" },
  { value: "4.8", label: "Star Rating" },
  { value: "50+", label: "Treatments" },
];

export default function AboutPageClient() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick("about", "cta");
  };

  return (
    <div className="pt-20">
      {/* Hero Section - Purple gradient */}
      <section className="relative bg-gradient-to-br from-[var(--color-purple-dark)] via-[var(--color-purple)] to-[var(--color-purple-light)] py-20 md:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[var(--color-gold)]/10 blur-3xl" />
        </div>

        <div className="container relative z-10">
          <Breadcrumbs items={[{ label: "About Us" }]} className="mb-6 text-white/70 [&_a]:text-white/70 [&_a:hover]:text-white [&_span]:text-white" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-[var(--color-gold-light)] text-sm font-medium tracking-wider uppercase mb-4 block">
              Our Story
            </span>
            <h1 className="text-white mb-6">
              Where Beauty Meets
              <br />
              <span className="text-[var(--color-gold-light)]">Confidence</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              Purple Crush Beauty Spa was born from a simple vision: to create a sanctuary where 
              every guest feels valued, relaxed, and leaves looking and feeling their absolute best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-[var(--color-light-gray)]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-serif text-4xl md:text-5xl text-[var(--color-purple)] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--color-warm-gray)]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              style={{ opacity: 1 }}
            >
              <span className="text-[var(--color-purple)] text-sm font-medium tracking-wider uppercase mb-4 block">
                About Purple Crush
              </span>
              <h2 className="text-[var(--color-charcoal)] mb-6">
                Your Glow-Up Destination in Abu Dhabi
              </h2>
              <div className="space-y-4 text-[var(--color-warm-gray)]">
                <p>
                  Located in Abu Dhabi, Purple Crush Beauty Spa has become 
                  a beloved destination for those seeking premium beauty and wellness treatments.
                </p>
                <p>
                  From the moment you step through our doors, you&apos;ll experience the difference. 
                  Our thoughtfully designed space combines modern luxury with warm hospitality, 
                  creating the perfect environment for relaxation and rejuvenation.
                </p>
                <p>
                  Whether you&apos;re here for flawless nails, stunning lashes, a transformative facial, 
                  or a complete spa day experience, our dedicated team ensures every visit exceeds 
                  your expectations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="relative"
              style={{ opacity: 1 }}
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80"
                  alt="Purple Crush Beauty Spa interior"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Rating card overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
                <RatingSummary
                  rating={freshaStats.rating}
                  reviewCount={freshaStats.reviewCount}
                  platform={freshaStats.platform}
                  size="md"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section section-cream">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
            style={{ opacity: 1 }}
          >
            <span className="text-[var(--color-purple)] text-sm font-medium tracking-wider uppercase mb-3 block">
              What We Stand For
            </span>
            <h2 className="text-[var(--color-charcoal)] mb-4">Our Values</h2>
            <p className="text-[var(--color-warm-gray)] max-w-xl mx-auto">
              These core principles guide everything we do at Purple Crush Beauty Spa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card card-elevated p-6 text-center border border-[var(--color-light-gray)]"
                style={{ opacity: 1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--color-purple)]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-2xl text-[var(--color-purple)]" />
                </div>
                <h3 className="font-serif text-lg text-[var(--color-charcoal)] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--color-warm-gray)]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
            style={{ opacity: 1 }}
          >
            <div className="inline-flex items-center gap-1 text-[var(--color-gold)] mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <h2 className="text-[var(--color-charcoal)] mb-4">
              Experience the Purple Crush Difference
            </h2>
            <p className="text-[var(--color-warm-gray)] mb-8">
              Join hundreds of satisfied clients who have made Purple Crush Beauty Spa 
              their go-to destination for self-care.
            </p>
            <a
              href={`${contactInfo.whatsapp.link}?text=${encodeURIComponent(contactInfo.whatsapp.messageTemplate)}`}
              onClick={handleWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <FaWhatsapp className="text-xl" />
              Book on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
