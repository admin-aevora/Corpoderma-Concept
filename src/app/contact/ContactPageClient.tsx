"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaWhatsapp, 
  FaEnvelope,
  FaClock,
  FaCheck
} from "react-icons/fa";
import { contactInfo } from "@/lib/data/contact";
import { trackWhatsAppClick, trackPhoneClick } from "@/lib/tracking";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPageClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Redirect to WhatsApp with the message
    const message = `Hi Purple Crush 💜

My name is ${data.name}.
Email: ${data.email}
Phone: ${data.phone}

Message:
${data.message}`;

    window.open(
      `${contactInfo.whatsapp.link}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick("contact", "contact_card");
  };

  const handlePhoneClick = () => {
    trackPhoneClick("contact");
  };

  return (
    <div className="pt-20">
      {/* Hero Section with Map */}
      <section className="relative h-[300px] md:h-[400px]">
        <iframe
          src={contactInfo.maps.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Purple Crush Beauty Spa Location"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cream)] via-transparent to-transparent" />
      </section>

      {/* Contact Content */}
      <section className="section -mt-20 relative z-10">
        <div className="container">
          <Breadcrumbs items={[{ label: "Contact" }]} className="mb-8" />
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="mb-8">
                <span className="text-[var(--color-purple)] text-sm font-medium tracking-wider uppercase mb-3 block">
                  Get in Touch
                </span>
                <h1 className="text-[var(--color-charcoal)] text-3xl md:text-4xl mb-4">
                  Contact Us
                </h1>
                <p className="text-[var(--color-warm-gray)]">
                  We&apos;d love to hear from you. Message us on WhatsApp for fastest response.
                </p>
              </div>

              {/* Address */}
              <div className="card card-elevated p-5 flex items-start gap-4 border border-[var(--color-light-gray)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-purple)]/10 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-xl text-[var(--color-purple)]" />
                </div>
                <div>
                  <h3 className="font-medium text-[var(--color-charcoal)] mb-1">
                    Address
                  </h3>
                  <p className="text-[var(--color-warm-gray)] text-sm">
                    {contactInfo.address.full}
                  </p>
                  <a
                    href={contactInfo.maps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-purple)] hover:underline mt-2 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="card card-elevated p-5 flex items-start gap-4 border border-[var(--color-light-gray)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-purple)]/10 flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-xl text-[var(--color-purple)]" />
                </div>
                <div>
                  <h3 className="font-medium text-[var(--color-charcoal)] mb-1">
                    Phone
                  </h3>
                  <a
                    href={contactInfo.phone.link}
                    onClick={handlePhoneClick}
                    className="text-[var(--color-warm-gray)] text-sm hover:text-[var(--color-purple)] transition-colors"
                  >
                    {contactInfo.phone.display}
                  </a>
                </div>
              </div>

              {/* WhatsApp - Primary */}
              <div className="card card-elevated p-5 flex items-start gap-4 border border-[var(--color-whatsapp)]/30 bg-[var(--color-whatsapp)]/5">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-whatsapp)]/10 flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="text-xl text-[var(--color-whatsapp)]" />
                </div>
                <div>
                  <h3 className="font-medium text-[var(--color-charcoal)] mb-1">
                    WhatsApp (Fastest)
                  </h3>
                  <a
                    href={`${contactInfo.whatsapp.link}?text=${encodeURIComponent(contactInfo.whatsapp.messageTemplate)}`}
                    onClick={handleWhatsAppClick}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-warm-gray)] text-sm hover:text-[var(--color-whatsapp)] transition-colors"
                  >
                    {contactInfo.whatsapp.display}
                  </a>
                  <p className="text-xs text-[var(--color-warm-gray)] mt-1">
                    Fast response • Usually within 30 minutes
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="card card-elevated p-5 flex items-start gap-4 border border-[var(--color-light-gray)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-purple)]/10 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-xl text-[var(--color-purple)]" />
                </div>
                <div>
                  <h3 className="font-medium text-[var(--color-charcoal)] mb-1">
                    Email
                  </h3>
                  <a
                    href={contactInfo.email.link}
                    className="text-[var(--color-warm-gray)] text-sm hover:text-[var(--color-purple)] transition-colors"
                  >
                    {contactInfo.email.address}
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="card card-elevated p-5 flex items-start gap-4 border border-[var(--color-light-gray)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-purple)]/10 flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-xl text-[var(--color-purple)]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-[var(--color-charcoal)] mb-2">
                    Opening Hours
                  </h3>
                  <div className="space-y-1 text-sm text-[var(--color-warm-gray)]" role="list" aria-label="Operating hours">
                    <p className="flex justify-between" role="listitem">
                      <span>Sunday - Friday</span>
                      <span>11:00 AM - 8:00 PM</span>
                    </p>
                    <p className="flex justify-between" role="listitem">
                      <span>Saturday</span>
                      <span>Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="card card-elevated p-6 md:p-8 border border-[var(--color-light-gray)]">
                <h2 className="font-serif text-2xl text-[var(--color-charcoal)] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-[var(--color-warm-gray)] text-sm mb-6">
                  Fill out the form and we&apos;ll get back to you via WhatsApp
                </p>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-whatsapp)]/10 flex items-center justify-center mx-auto mb-4">
                      <FaCheck className="text-2xl text-[var(--color-whatsapp)]" />
                    </div>
                    <h3 className="font-serif text-xl text-[var(--color-charcoal)] mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-[var(--color-warm-gray)] text-sm">
                      We&apos;ll respond via WhatsApp shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        {...register("name")}
                        className="input"
                        placeholder="Enter your name"
                      />
                      {errors.name && (
                        <p className="text-[var(--color-error)] text-xs mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        className="input"
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="text-[var(--color-error)] text-xs mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        {...register("phone")}
                        className="input"
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p className="text-[var(--color-error)] text-xs mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                        Message
                      </label>
                      <textarea
                        {...register("message")}
                        className="input textarea"
                        placeholder="How can we help you?"
                        rows={4}
                      />
                      {errors.message && (
                        <p className="text-[var(--color-error)] text-xs mt-1">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-whatsapp w-full"
                    >
                      {isSubmitting ? "Sending..." : "Send via WhatsApp"}
                      <FaWhatsapp className="text-lg" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
