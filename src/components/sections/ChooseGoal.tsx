"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { HiOutlineSparkles, HiOutlineLightningBolt, HiOutlineHeart } from "react-icons/hi";
import { contactInfo, getWhatsAppConsultationLink } from "@/lib/data/contact";
import { trackWhatsAppClick, trackBookClick } from "@/lib/tracking";

// Goal cards matching Corpofino spec
const goalCards = [
  {
    id: "slimming",
    icon: HiOutlineLightningBolt,
    title: "Slim down & sculpt",
    description: "Reduce inches, improve contour, target stubborn areas.",
    cta: "Explore slimming",
    href: "/treatments/slimming",
    color: "from-[var(--color-primary)]/10 to-[var(--color-primary)]/5",
  },
  {
    id: "skin",
    icon: HiOutlineSparkles,
    title: "Glow up your skin",
    description: "Hydration, texture, pigmentation, rejuvenation.",
    cta: "Explore skin",
    href: "/treatments/skin",
    color: "from-[var(--color-gold)]/10 to-[var(--color-gold)]/5",
  },
  {
    id: "wellness",
    icon: HiOutlineHeart,
    title: "Recover & relax",
    description: "Release tension, reset your body, improve circulation.",
    cta: "Explore wellness",
    href: "/treatments/wellness",
    color: "from-[var(--color-primary-light)]/10 to-[var(--color-primary-light)]/5",
  },
];

export default function ChooseGoal() {
  const handleExploreClick = (goalId: string) => {
    trackBookClick(goalId, "Goal", "choose_goal_explore");
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick("home", "choose_goal");
  };

  const handleBookConsultationClick = () => {
    trackBookClick("Consultation", "General", "choose_goal");
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
          <h2 className="text-[var(--color-charcoal)] mb-4">
            What would you like to improve?
          </h2>
          <p className="text-[var(--color-warm-gray)] max-w-xl mx-auto">
            Choose your goal and we&apos;ll recommend the right combination of treatments.
          </p>
        </motion.div>

        {/* Goal cards - 3 cards as per spec */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {goalCards.map((goal, index) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={goal.href}
                onClick={() => handleExploreClick(goal.id)}
                className="goal-card block p-8 h-full group relative overflow-hidden"
              >
                {/* Enhanced gradient background with animation */}
                <div className={`absolute inset-0 bg-gradient-to-br ${goal.color} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl`} />
                
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                </div>
                
                <div className="relative z-10">
                  {/* Enhanced icon with better hover effect */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-primary)]/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[var(--color-primary)] group-hover:to-[var(--color-primary-dark)] transition-all duration-300 shadow-sm group-hover:shadow-lg">
                    <goal.icon className="text-2xl text-[var(--color-primary)] group-hover:text-white transition-all duration-300" />
                  </div>

                  {/* Enhanced content */}
                  <h3 className="font-serif text-xl text-[var(--color-charcoal)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    {goal.title}
                  </h3>
                  <p className="text-[var(--color-warm-gray)] text-sm mb-6 leading-relaxed">
                    {goal.description}
                  </p>

                  {/* Enhanced CTA with better animation */}
                  <span className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold text-sm group-hover:gap-4 transition-all duration-300">
                    {goal.cta}
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[var(--color-gold)]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA row - matching spec */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/book"
            onClick={handleBookConsultationClick}
            className="btn btn-primary w-full sm:w-auto"
          >
            Book Consultation
          </Link>
          <a
            href={getWhatsAppConsultationLink()}
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light w-full sm:w-auto"
          >
            <FaWhatsapp className="text-lg text-[var(--color-whatsapp)]" />
            WhatsApp for recommendations
          </a>
        </motion.div>
      </div>
    </section>
  );
}
