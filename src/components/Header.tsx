"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/config/site";
import { Logo } from "@/components/Logo";

const navLinks = [
  { href: "#specialties", label: "Specialties" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="group flex items-center gap-3">
          <Logo variant="header" />
          <div>
            <span className="font-serif text-xl font-bold text-brown-dark group-hover:text-saffron-dark">
              {siteConfig.name}
            </span>
            <span className="hidden text-xs text-brown-light sm:block">
              {siteConfig.tagline}
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brown transition-colors hover:text-saffron-dark"
            >
              {link.label}
            </a>
          ))}
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2.5 !text-xs">
            Order on WhatsApp
          </a>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-brown-dark md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 top-[72px] z-30 bg-cream/98 backdrop-blur-lg md:hidden">
          <nav className="flex flex-col gap-2 px-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-lg font-medium text-brown-dark transition-colors hover:bg-saffron/10 hover:text-saffron-dark"
              >
                {link.label}
              </a>
            ))}
            <hr className="my-4 border-brown/10" />
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              Order on WhatsApp
            </a>
            <a href={getPhoneLink()} className="btn-secondary w-full">
              <Phone className="h-4 w-4" />
              Call {siteConfig.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
