"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGift, FaArrowRight } from "react-icons/fa";
import { getAllPackages } from "@/lib/data/packages";
import PackageCard from "@/components/ui/PackageCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const packages = getAllPackages();

export default function PackagesPageClient() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-rose)]/20 to-[var(--color-cream)] py-16 md:py-24">
        <div className="container">
          <Breadcrumbs items={[{ label: "Spa Packages" }]} className="mb-6 justify-center" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-[var(--color-charcoal)] text-white rounded-full px-4 py-2 mb-6">
              <FaGift />
              <span className="text-sm font-medium">Curated Experiences</span>
            </div>
            <h1 className="text-[var(--color-charcoal)] mb-4">Spa Packages</h1>
            <p className="text-[var(--color-warm-gray)] text-lg mb-8">
              Treat yourself or someone special to a complete spa experience. Our packages combine 
              the best treatments at exclusive prices.
            </p>
            <Link href="/book" className="btn btn-primary">
              Book a Package
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <PackageCard pkg={pkg} variant="featured" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="section section-cream">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-serif text-2xl text-[var(--color-charcoal)] mb-4">
              Looking for Something Different?
            </h2>
            <p className="text-[var(--color-warm-gray)] mb-6">
              We can create a custom package tailored to your needs. Contact us to discuss 
              your perfect spa experience.
            </p>
            <Link href="/contact" className="btn btn-secondary">
              Create Custom Package
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
