"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1606491956689-2ea866884784?w=600&q=80",
    alt: "Steamed ukhdiche modak arranged on a traditional plate",
    caption: "Ukhdiche Modak",
  },
  {
    src: "https://images.unsplash.com/photo-1589302168068-964664a07103?w=600&q=80",
    alt: "Traditional Indian sweets and festive treats",
    caption: "Festive Collection",
  },
  {
    src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
    alt: "Fresh Indian snacks and appetizers",
    caption: "Kothimbir Vadi",
  },
  {
    src: "https://images.unsplash.com/photo-1601050690597-df0568fa7098?w=600&q=80",
    alt: "Colorful Indian mithai and sweets",
    caption: "Sweet Delights",
  },
  {
    src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80",
    alt: "Indian festival food spread",
    caption: "Festival Specials",
  },
  {
    src: "https://images.unsplash.com/photo-1606491956689-2ea866884784?w=600&q=80",
    alt: "Modak gift box for Ganesh festival",
    caption: "Gift Boxes",
  },
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
            A glimpse of our handcrafted modak, vadi, and festive favourites —
            made fresh with love every day.
          </p>
        </div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
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
