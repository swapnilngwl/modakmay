"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";
import {
  siteConfig,
  getWhatsAppLink,
  getPhoneLink,
  getFullAddress,
} from "@/config/site";

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-white/50">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-saffron">
            Get in Touch
          </span>
          <h2 className="section-heading mt-2">Contact Us</h2>
          <p className="section-subheading mx-auto">
            Ready to order? Have a question about festival combos? Reach out —
            we&apos;d love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Contact cards */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-4 hover:border-[#25D366]/30 hover:bg-[#25D366]/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-brown-light">
                  WhatsApp (Best for orders)
                </p>
                <p className="font-semibold text-brown-dark">
                  {siteConfig.phoneDisplay}
                </p>
              </div>
            </a>

            <a
              href={getPhoneLink()}
              className="card flex items-center gap-4 hover:border-saffron/30 hover:bg-saffron/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-saffron/10 text-saffron-dark">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-brown-light">Phone</p>
                <p className="font-semibold text-brown-dark">
                  {siteConfig.phoneDisplay}
                </p>
              </div>
            </a>

            {siteConfig.email && (
              <a
                href={`mailto:${siteConfig.email}`}
                className="card flex items-center gap-4 hover:border-saffron/30 hover:bg-saffron/5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-saffron/10 text-saffron-dark">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-brown-light">Email</p>
                  <p className="font-semibold text-brown-dark">
                    {siteConfig.email}
                  </p>
                </div>
              </a>
            )}

            <div className="card flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-saffron/10 text-saffron-dark">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-brown-light">Address</p>
                <p className="font-semibold text-brown-dark">
                  {getFullAddress()}
                </p>
                <a
                  href={siteConfig.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-saffron-dark hover:underline"
                >
                  Get directions
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center gap-2 text-brown-dark">
                <Clock className="h-5 w-5 text-saffron" />
                <p className="font-semibold">Opening Hours</p>
              </div>
              <ul className="mt-3 space-y-2">
                {siteConfig.hours.map((h) => (
                  <li
                    key={h.days}
                    className="flex justify-between text-sm text-brown-light"
                  >
                    <span>{h.days}</span>
                    <span className="font-medium text-brown-dark">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-center text-sm text-brown-light lg:text-left">
              📍 {siteConfig.serviceArea}
            </p>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            className="overflow-hidden rounded-2xl border border-brown/10 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <iframe
              src={siteConfig.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${siteConfig.name} location on Google Maps`}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
