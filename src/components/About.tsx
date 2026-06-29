"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-saffron">
              Our Story
            </span>
            <h2 className="section-heading mt-2">About {siteConfig.name}</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brown-light">
              <p>
                {siteConfig.name} was born from a simple love — the love of
                authentic Maharashtrian food made the way our grandmothers made
                it. Soft, fragrant ukhdiche modak with fresh coconut filling.
                Crispy kothimbir vadi that pairs perfectly with chai. Festive
                treats that bring families together.
              </p>
              <p>
                We believe great food doesn&apos;t need fancy ingredients — it
                needs fresh produce, traditional techniques, and genuine care.
                Every modak is steamed to perfection. Every batch of vadi is
                fried to golden crispness. No preservatives, no shortcuts.
              </p>
              <p>
                Whether you&apos;re celebrating Ganesh Utsav, hosting a family
                gathering, or simply craving a taste of home — {siteConfig.name}{" "}
                brings Maharashtra&apos;s finest flavours to your doorstep in{" "}
                {siteConfig.address.city}.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              {[
                { value: "100%", label: "Homemade" },
                { value: "Daily", label: "Fresh batches" },
                { value: "🪷", label: "Festival ready" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-2xl font-bold text-saffron-dark">
                    {stat.value}
                  </p>
                  <p className="text-sm text-brown-light">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl shadow-brown/15">
              <Image
                src="https://images.unsplash.com/photo-1589302168068-964664a07103?w=700&q=80"
                alt={`About ${siteConfig.name} — traditional Maharashtrian kitchen`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-3xl border-2 border-saffron/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
