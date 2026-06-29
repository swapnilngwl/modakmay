/**
 * ============================================================
 *  MODAKMAY — EDIT THIS FILE WITH YOUR REAL BUSINESS DETAILS
 * ============================================================
 * This is the ONLY file you need to change for contact info,
 * hours, WhatsApp, and social links. Everything else updates
 * automatically across the website.
 */

export const siteConfig = {
  /** Business name — use the same spelling everywhere (website + Google) */
  name: "Modakmay",

  /** Short tagline shown under the logo (header uses logo image instead) */
  tagline: "Taste of Tradition",

  /** Logo images in public/ — circular modak brand mark */
  logo: "/logo-circle.png",
  logoIcon: "/logo-icon.png",
  logoFull: "/logo-full.png",

  /** One-line description for SEO and Google */
  description:
    "Fresh authentic ukhdiche modak, kothimbir vadi, and traditional Maharashtrian snacks in Pune. Homemade daily since January 2025.",

  /** Founded */
  founded: "January 2025",

  /** Your website URL — update to https://modakmay.in when you buy the domain */
  url: "https://modakmay.vercel.app",

  /** Contact phone — digits only with country code, e.g. "919876543210" */
  phone: "918898421206",

  /** Display format for phone on the website */
  phoneDisplay: "+91 8898421206",

  /** WhatsApp number — usually same as phone, digits only with country code */
  whatsapp: "918898421206",

  /** Pre-filled WhatsApp message when someone clicks "Order" */
  whatsappMessage:
    "Hi Modakmay! I would like to place an order. Please share today's menu and prices.",

  /** Email (optional — leave empty string if you don't use email) */
  email: "hello@modakmay.in",

  /** Full address — must match Google Business Profile exactly */
  address: {
    street: "Flat No - 1408, Tower-2, VTP Aethereus, Mahalunge",
    city: "Pune",
    state: "Maharashtra",
    postalCode: "411001",
    country: "IN",
  },

  /** Google Maps embed URL */
  googleMapsEmbed:
    "https://maps.google.com/maps?q=18.565896,73.735623&z=16&output=embed",

  /** Link to open Google Maps app / directions */
  googleMapsLink: "https://maps.app.goo.gl/VkMHo589ogao1kTHA",

  /** Business hours — shown on Contact section */
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 8:00 PM" },
    { days: "Saturday – Sunday", time: "8:00 AM – 9:00 PM" },
    { days: "Ganesh Festival", time: "Extended hours — order early!" },
  ],

  /** Social media links — leave empty string to hide that icon */
  social: {
    instagram: "https://instagram.com/modakmay",
    facebook: "",
    youtube: "",
  },

  /** Delivery / service area note */
  serviceArea: "Home delivery available across Pune. Pickup welcome.",

  /** Google Analytics ID — add later, e.g. "G-XXXXXXXXXX" */
  googleAnalyticsId: "",
} as const;

export type SiteConfig = typeof siteConfig;

/** Helper: builds WhatsApp click link */
export function getWhatsAppLink(message?: string): string {
  const text = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}

/** Helper: builds tel: link */
export function getPhoneLink(): string {
  return `tel:+${siteConfig.phone}`;
}

/** Full address as single line */
export function getFullAddress(): string {
  const { street, city, state, postalCode } = siteConfig.address;
  return `${street}, ${city}, ${state} ${postalCode}`;
}
