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
                {siteConfig.name} began in <strong className="text-brown-dark">January 2025</strong> with
                one simple goal — to bring authentic, homemade Maharashtrian flavours to
                families across Pune. What started as a passion for traditional ukhdiche
                modak has grown into a trusted name for fresh, quality snacks made the
                way they should be.
              </p>
              <p>
                Every modak is hand-crafted in small batches using fresh coconut,
                jaggery, and rice flour — steamed soft, never frozen, never mass-produced.
                Alongside our signature modak, we prepare kothimbir vadi, puran poli, and
                festive combo boxes for Ganesh Utsav, Diwali, and family celebrations.
              </p>
              <p>
                We believe the best food is honest food — no preservatives, no shortcuts,
                just traditional recipes, quality ingredients, and genuine care in every
                order. Whether you pick up from our kitchen in Mahalunge or order home
                delivery across Pune, you always get the same fresh taste.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              {[
                { value: "Jan 2025", label: "Started" },
                { value: "100%", label: "Fresh & homemade" },
                { value: "Daily", label: "New batches" },
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
                src="/about-kitchen.jpg"
                alt={`${siteConfig.name} — fresh ukhdiche modak handmade in Pune`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-3xl border-2 border-saffron/20" />

            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-5 py-3 shadow-xl sm:-left-6">
              <p className="text-xs font-medium uppercase tracking-wider text-saffron">
                Our Promise
              </p>
              <p className="font-serif text-base font-bold text-brown-dark">
                Fresh · Authentic · Traditional
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
