
// Schema data for Henry Brothers HVAC
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://thehenrybros.com",
  "name": "Henry Brothers HVAC",
  "alternateName": "Henry Brothers",
  "description": "Expert ductless and mini split HVAC solutions for residential properties in Louisville, KY and Southern Indiana. Specializing in installation, maintenance, and repair services.",
  "url": "https://thehenrybros.com",
  "telephone": "+18129941008",
  "email": "hello@thehenrybros.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Louisville",
    "addressRegion": "KY",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 38.2527,
    "longitude": -85.7585
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Louisville",
      "addressRegion": "KY"
    },
    {
      "@type": "City",
      "name": "Jeffersonville",
      "addressRegion": "IN"
    },
    {
      "@type": "City",
      "name": "New Albany",
      "addressRegion": "IN"
    },
    {
      "@type": "City",
      "name": "Clarksville",
      "addressRegion": "IN"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 38.2527,
      "longitude": -85.7585
    },
    "geoRadius": "18 miles"
  },
  "openingHours": [
    "Mo-Fr 09:00-18:00",
    "Sa 09:00-16:00"
  ],
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Check, Financing Available",
  "currenciesAccepted": "USD",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "HVAC Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mini Split Installation",
          "description": "Professional installation of ductless mini split systems"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HVAC Maintenance",
          "description": "Regular maintenance and Clean and Check℠ service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HVAC Repair",
          "description": "Expert repair services for ductless and mini split systems"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/thehenrybros/"
  ],
  "founder": [
    {
      "@type": "Person",
      "name": "Justin Henry"
    },
    {
      "@type": "Person",
      "name": "Nick Henry"
    }
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://thehenrybros.com#organization",
  "name": "Henry Brothers HVAC",
  "url": "https://thehenrybros.com",
  "logo": "https://thehenrybros.com/lovable-uploads/118bbfa7-3faf-421e-8fa2-60cefa7888fd.png",
  "image": "https://thehenrybros.com/lovable-uploads/b6171633-349a-4780-a66c-f52bea9b7b8e.png",
  "description": "Henry Brothers HVAC specializes in ductless and mini split heating & cooling solutions, serving Louisville, KY and Southern Indiana with expert installation, maintenance, and repair services.",
  "telephone": "+18129941008",
  "email": "hello@thehenrybros.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Louisville",
    "addressRegion": "KY",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.facebook.com/thehenrybros/"
  ],
  "founder": [
    {
      "@type": "Person",
      "name": "Justin Henry"
    },
    {
      "@type": "Person",
      "name": "Nick Henry"
    }
  ]
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://thehenrybros.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://thehenrybros.com#services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "About",
      "item": "https://thehenrybros.com#about"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Contact",
      "item": "https://thehenrybros.com#contact"
    }
  ]
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://thehenrybros.com#website",
  "url": "https://thehenrybros.com",
  "name": "Henry Brothers HVAC",
  "description": "Expert ductless and mini split HVAC solutions by Justin & Nick Henry. Serving Louisville, KY and Southern Indiana.",
  "publisher": {
    "@id": "https://thehenrybros.com#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://thehenrybros.com?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};
