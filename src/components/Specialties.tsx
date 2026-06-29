"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const specialties = [
  {
    icon: "🪷",
    name: "Ukhdiche Modak",
    description:
      "Soft, steamed rice flour modak filled with fresh coconut and jaggery — the crown jewel of Ganesh festival and everyday indulgence.",
    tag: "Signature",
    highlight: true,
  },
  {
    icon: "🌿",
    name: "Kothimbir Vadi",
    description:
      "Crispy on the outside, soft inside — classic coriander fritters seasoned with traditional spices. Perfect tea-time snack.",
    tag: "Popular",
    highlight: false,
  },
  {
    icon: "🥥",
    name: "Narali Bhat",
    description:
      "Fragrant sweet coconut rice — a festive favourite made with fresh coconut, jaggery, and aromatic spices.",
    tag: "Festive",
    highlight: false,
  },
  {
    icon: "🍬",
    name: "Shrikhand",
    description:
      "Creamy, rich strained yogurt dessert infused with saffron and cardamom — a cooling finish to any meal.",
    tag: "Classic",
    highlight: false,
  },
  {
    icon: "🥟",
    name: "Puran Poli",
    description:
      "Thin, soft flatbread stuffed with sweet lentil filling — a Maharashtrian celebration staple made with ghee and love.",
    tag: "Festive",
    highlight: false,
  },
  {
    icon: "🎁",
    name: "Festival Combo Boxes",
    description:
      "Curated gift boxes for Ganesh Utsav, Diwali, and special occasions — modak, vadi, and seasonal treats beautifully packed.",
    tag: "Gifting",
    highlight: false,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Specialties() {
  return (
    <section id="specialties" className="section-padding bg-white/50">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-saffron">
            Our Menu
          </span>
          <h2 className="section-heading mt-2">Traditional Specialties</h2>
          <p className="section-subheading mx-auto">
            Every item is prepared using time-honoured recipes, fresh local
            ingredients, and the warmth of home cooking.
          </p>
        </div>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {specialties.map((specialty) => (
            <motion.div
              key={specialty.name}
              variants={item}
              className={`card group relative overflow-hidden ${
                specialty.highlight
                  ? "border-saffron/30 bg-gradient-to-br from-saffron/5 to-cream ring-1 ring-saffron/20"
                  : ""
              }`}
            >
              {specialty.highlight && (
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-saffron px-3 py-1 text-xs font-semibold text-white">
                  <Star className="h-3 w-3" fill="white" />
                  {specialty.tag}
                </div>
              )}

              <span className="text-4xl">{specialty.icon}</span>
              <h3 className="mt-4 font-serif text-xl font-bold text-brown-dark group-hover:text-saffron-dark">
                {specialty.name}
              </h3>
              {!specialty.highlight && (
                <span className="mt-1 inline-block text-xs font-medium uppercase tracking-wider text-saffron">
                  {specialty.tag}
                </span>
              )}
              <p className="mt-3 text-sm leading-relaxed text-brown-light">
                {specialty.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-10 text-center text-sm text-brown-light">
          Prices and daily availability shared on WhatsApp. Seasonal items
          added during festivals.
        </p>
      </div>
    </section>
  );
}
