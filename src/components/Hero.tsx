"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Sparkles } from "lucide-react";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/config/site";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-dark to-saffron/10" />
      <div className="grain absolute inset-0" />

      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-saffron/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 pb-20 pt-28 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:pt-32">
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-saffron/10 px-4 py-1.5 text-sm font-medium text-saffron-dark">
            <Sparkles className="h-4 w-4" />
            Serving Pune since January 2025
          </div>

          <h1 className="font-serif text-4xl font-bold leading-tight text-brown-dark sm:text-5xl lg:text-6xl">
            Authentic{" "}
            <span className="text-saffron-dark">Ukhdiche Modak</span>
            <br />
            & Maharashtrian Delights
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-brown-light sm:text-lg lg:mx-0 mx-auto">
            Soft steamed modak, crispy kothimbir vadi, and festive favourites —
            handmade fresh every day with traditional recipes and the finest
            ingredients.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base"
            >
              <MessageCircle className="h-5 w-5" />
              Order on WhatsApp
            </a>
            <a href={getPhoneLink()} className="btn-secondary text-base">
              <Phone className="h-5 w-5" />
              {siteConfig.phoneDisplay}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-brown-light lg:justify-start">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-saffron" />
              Mahalunge, {siteConfig.address.city}
            </span>
            <span className="hidden h-4 w-px bg-brown/20 sm:block" />
            <span>🪷 Fresh daily</span>
            <span className="hidden h-4 w-px bg-brown/20 sm:block" />
            <span>🏠 Home delivery available</span>
          </div>
        </motion.div>

        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-3xl shadow-2xl shadow-brown/20 lg:max-w-lg">
            <Image
              src="/hero-modak.jpg"
              alt="Fresh ukhdiche modak — traditional Maharashtrian sweet"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/40 via-transparent to-transparent" />
          </div>

          <motion.div
            className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-5 py-3 shadow-xl sm:-left-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-xs font-medium uppercase tracking-wider text-saffron">
              Best Seller
            </p>
            <p className="font-serif text-lg font-bold text-brown-dark">
              Ukhdiche Modak
            </p>
            <p className="text-sm text-brown-light">Made fresh every morning</p>
          </motion.div>

          <div className="absolute -right-6 -top-6 -z-10 h-full w-full rounded-3xl border-2 border-saffron/20" />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-brown/30 p-1">
          <div className="h-2 w-1 rounded-full bg-saffron" />
        </div>
      </motion.div>
    </section>
  );
}
