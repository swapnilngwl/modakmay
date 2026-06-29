"use client";

import { motion } from "framer-motion";
import { Heart, Clock, Award, Truck } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Made with Love",
    description:
      "Every modak is hand-crafted in small batches — never mass-produced. You taste the care in every bite.",
  },
  {
    icon: Award,
    title: "Authentic Recipes",
    description:
      "Traditional ukhdiche modak recipes passed down through generations. No shortcuts, no compromises.",
  },
  {
    icon: Clock,
    title: "Always Fresh",
    description:
      "Prepared fresh daily using quality ingredients — soft modak, crispy vadi, and festive treats at their best.",
  },
  {
    icon: Truck,
    title: "Easy Ordering",
    description:
      "Order in seconds on WhatsApp. Home delivery across the city or convenient pickup — your choice.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream to-cream-dark" />
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-saffron">
            Why Modakmay
          </span>
          <h2 className="section-heading mt-2">Why Choose Us</h2>
          <p className="section-subheading mx-auto">
            We&apos;re not just selling snacks — we&apos;re sharing a piece of
            Maharashtrian heritage with every order.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-saffron/10 text-saffron-dark">
                <reason.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-brown-dark">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brown-light">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
