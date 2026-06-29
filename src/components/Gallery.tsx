"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryItems = [
  { src: "/gallery-1.jpg", alt: "Fresh ukhdiche modak", caption: "Ukhdiche Modak" },
  { src: "/gallery-2.jpg", alt: "Handcrafted modak close-up", caption: "Made Fresh Daily" },
  { src: "/gallery-3.jpg", alt: "Traditional steamed modak", caption: "Traditional Recipe" },
  { src: "/gallery-4.jpg", alt: "Festive modak arrangement", caption: "Festive Specials" },
  { src: "/gallery-5.jpg", alt: "Modakmay signature modak", caption: "Modakmay Special" },
  { src: "/gallery-6.jpg", alt: "Modak gift box ready to order", caption: "Order on WhatsApp" },
];

export function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-brown-dark text-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-saffron-light">
            Gallery
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            A Feast for the Eyes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Handcrafted ukhdiche modak — soft, fragrant, and steamed fresh
            every day at Modakmay.
          </p>
        </div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.src}
              className="mb-4 break-inside-avoid overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="group relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="absolute bottom-4 left-4 translate-y-2 font-serif text-lg font-semibold opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
