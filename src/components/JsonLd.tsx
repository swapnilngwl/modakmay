import { siteConfig } from "@/config/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: `+${siteConfig.phone}`,
    email: siteConfig.email || undefined,
    image: `${siteConfig.url}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.536,
      longitude: 73.895,
    },
    servesCuisine: "Maharashtrian",
    priceRange: "₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "08:00",
        closes: "21:00",
      },
    ],
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.youtube,
    ].filter(Boolean),
    areaServed: {
      "@type": "City",
      name: siteConfig.address.city,
    },
    hasMenu: {
      "@type": "Menu",
      name: "Modakmay Specialties",
      hasMenuSection: {
        "@type": "MenuSection",
        name: "Traditional Favourites",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Ukhdiche Modak",
            description: "Steamed rice flour modak with fresh coconut-jaggery filling",
          },
          {
            "@type": "MenuItem",
            name: "Kothimbir Vadi",
            description: "Crispy coriander fritters — a classic Maharashtrian snack",
          },
        ],
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
