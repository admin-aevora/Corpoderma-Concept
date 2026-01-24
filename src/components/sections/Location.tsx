"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaDirections, FaClock } from "react-icons/fa";
import { contactInfo, operatingHours } from "@/lib/data/contact";
import { trackWhatsAppClick, trackPhoneClick } from "@/lib/tracking";

export default function Location() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick("home", "location");
  };

  const handlePhoneClick = () => {
    trackPhoneClick("location");
  };

  return (
    <section className="section section-white">
      <div className="container">
        {/* Section header - matching Corpofino spec */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[var(--color-primary)] text-sm font-medium tracking-wider uppercase mb-3 block">
            Location
          </span>
          <h2 className="text-[var(--color-charcoal)] mb-4">
            Visit Corpofino
          </h2>
          <p className="text-[var(--color-warm-gray)] max-w-xl mx-auto">
            Book in advance to reserve your preferred slots.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-full min-h-[300px] border border-[var(--color-light-gray)]"
          >
            <iframe
              src={contactInfo.maps.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Corpofino Spa Location"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Contact cards */}
            <div className="grid gap-4 mb-6">
              {/* Address */}
              <div className="card card-elevated p-5 flex items-start gap-4 border border-[var(--color-light-gray)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-xl text-[var(--color-primary)]" />
                </div>
                <div>
                  <h4 className="font-medium text-[var(--color-charcoal)] mb-1">
                    Address
                  </h4>
                  <p className="text-[var(--color-warm-gray)] text-sm">
                    {contactInfo.address.street}<br />
                    {contactInfo.address.area}<br />
                    {contactInfo.address.city}, {contactInfo.address.country}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="card card-elevated p-5 flex items-start gap-4 border border-[var(--color-light-gray)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-xl text-[var(--color-primary)]" />
                </div>
                <div>
                  <h4 className="font-medium text-[var(--color-charcoal)] mb-1">
                    Phone
                  </h4>
                  <a
                    href={contactInfo.phone.link}
                    onClick={handlePhoneClick}
                    className="text-[var(--color-warm-gray)] text-sm hover:text-[var(--color-primary)] transition-colors"
                  >
                    {contactInfo.phone.display}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="card card-elevated p-5 flex items-start gap-4 border border-[var(--color-light-gray)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-whatsapp)]/10 flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="text-xl text-[var(--color-whatsapp)]" />
                </div>
                <div>
                  <h4 className="font-medium text-[var(--color-charcoal)] mb-1">
                    WhatsApp
                  </h4>
                  <a
                    href={`${contactInfo.whatsapp.link}?text=${encodeURIComponent(contactInfo.whatsapp.messageTemplate)}`}
                    onClick={handleWhatsAppClick}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-warm-gray)] text-sm hover:text-[var(--color-whatsapp)] transition-colors"
                  >
                    {contactInfo.whatsapp.display}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="card card-elevated p-5 flex items-start gap-4 border border-[var(--color-light-gray)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-xl text-[var(--color-primary)]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-[var(--color-charcoal)] mb-2">
                    Hours
                  </h4>
                  <div className="space-y-1 text-sm text-[var(--color-warm-gray)]" role="list" aria-label="Operating hours">
                    <p className="flex justify-between" role="listitem">
                      <span>{operatingHours.weekdays.days}</span>
                      <span>{operatingHours.weekdays.hours}</span>
                    </p>
                    <p className="flex justify-between" role="listitem">
                      <span>{operatingHours.friday.days}</span>
                      <span>{operatingHours.friday.hours}</span>
                    </p>
                    <p className="flex justify-between" role="listitem">
                      <span>{operatingHours.saturday.days}</span>
                      <span>{operatingHours.saturday.hours}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons - matching Corpofino spec */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-auto">
              <a
                href={contactInfo.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary justify-center"
              >
                <FaDirections />
                Get Directions
              </a>
              <a
                href={contactInfo.phone.link}
                onClick={handlePhoneClick}
                className="btn btn-outline-light justify-center"
              >
                <FaPhone />
                Call Now
              </a>
              <a
                href={`${contactInfo.whatsapp.link}?text=${encodeURIComponent(contactInfo.whatsapp.messageTemplate)}`}
                onClick={handleWhatsAppClick}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp justify-center"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
