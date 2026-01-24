"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaChevronDown } from "react-icons/fa";
import { contactInfo } from "@/lib/data/contact";
import { trackWhatsAppClick } from "@/lib/tracking";

// FAQ items matching Corpofino spec
const faqItems = [
  {
    question: "Do I need to know what treatment to pick?",
    answer: "No — start with a consultation and we'll recommend the best plan based on your goals, body type, and lifestyle.",
  },
  {
    question: "How many sessions do I need?",
    answer: "It depends on your goals — most transformations require a plan across multiple sessions. During your consultation, we'll create a personalized timeline for visible results.",
  },
  {
    question: "Do you offer packages?",
    answer: "Yes — we offer packages and membership options that provide better value and help you stay consistent with your treatment plan.",
  },
  {
    question: "Can I book on WhatsApp?",
    answer: "Yes — WhatsApp booking is available and quick. Simply message us with your preferred day/time and we'll confirm your appointment.",
  },
];

function FAQItem({ 
  item, 
  isOpen, 
  onToggle 
}: { 
  item: typeof faqItems[0]; 
  isOpen: boolean; 
  onToggle: () => void;
}) {
  return (
    <div className="faq-item">
      <button
        className="faq-question w-full text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="pr-4">{item.question}</span>
        <FaChevronDown 
          className={`text-[var(--color-primary)] transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="faq-answer">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleWhatsAppClick = () => {
    trackWhatsAppClick("home", "faq");
  };

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section section-cream">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Section header - matching spec */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-[var(--color-charcoal)] mb-4">
              Frequently asked questions
            </h2>
          </motion.div>

          {/* FAQ items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3 mb-10"
          >
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </motion.div>

          {/* CTA - matching spec */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <a
              href={`${contactInfo.whatsapp.link}?text=${encodeURIComponent("Hi Corpofino 👋\nI have a question about your treatments.")}`}
              onClick={handleWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp for quick answers
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
