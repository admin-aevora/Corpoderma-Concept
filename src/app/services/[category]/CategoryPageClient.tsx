"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronRight, FaWhatsapp } from "react-icons/fa";
import { Category, Service } from "@/lib/data/services";
import { contactInfo, getWhatsAppLink } from "@/lib/data/contact";
import ServiceCard from "@/components/ui/ServiceCard";
import { trackCategoryView, trackBookClick, trackWhatsAppClick } from "@/lib/tracking";

interface CategoryPageClientProps {
  category: Category;
  services: Service[];
}

export default function CategoryPageClient({ category, services }: CategoryPageClientProps) {
  useEffect(() => {
    trackCategoryView(category.name);
  }, [category.name]);

  const handleBookAllClick = () => {
    trackBookClick(category.name, category.name, "category_page");
    trackWhatsAppClick("category_page", category.name);
  };

  const whatsappLink = getWhatsAppLink(category.name);

  return (
    <div className="pt-20">
      {/* Hero Section - Purple gradient */}
      <section className="relative bg-gradient-to-br from-[var(--color-purple)] via-[var(--color-purple-light)] to-[var(--color-blush)] py-16 md:py-24 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="container relative z-10">
          {/* Breadcrumbs */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm mb-6"
          >
            <Link
              href="/"
              className="text-white/70 hover:text-white"
            >
              Home
            </Link>
            <FaChevronRight className="text-xs text-white/50" />
            <Link
              href="/services"
              className="text-white/70 hover:text-white"
            >
              Services
            </Link>
            <FaChevronRight className="text-xs text-white/50" />
            <span className="text-white">{category.name}</span>
          </motion.nav>

          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white mb-4"
            >
              {category.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/80 text-lg mb-6"
            >
              {category.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              <span className="text-[var(--color-gold-light)] font-medium">
                Starting from AED {category.startingPrice}
              </span>
              <span className="text-white/50">•</span>
              <span className="text-white/70">
                {services.length} services available
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl text-[var(--color-charcoal)]">
              Available Services
            </h2>
            <a
              href={whatsappLink}
              onClick={handleBookAllClick}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
            >
              <FaWhatsapp />
              Book on WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>

          {/* Back to services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link href="/services" className="btn btn-secondary">
              Browse All Services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
