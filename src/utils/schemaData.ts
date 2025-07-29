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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "3",
    "bestRating": "5",
    "worstRating": "1"
  },
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "3",
    "bestRating": "5",
    "worstRating": "1"
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

export const reviewsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Timmy Mowen"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "reviewBody": "super professional and informative on how it all works. reasonably priced. 5/5 would recommend.",
    "datePublished": "2025-01-13",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "@id": "https://thehenrybros.com"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Kerrie Fullen"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "reviewBody": "Just wanted to say how much we appreciated Justin and his quickness in addressing our issues. He changed out some parts and got us back up and running quickly.",
    "datePublished": "2025-01-26",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "@id": "https://thehenrybros.com"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Starla"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "reviewBody": "I work full time in my garage and have gone between a seasonal fan and space heater for years. I wasn't even aware of a mini split option, but after having the benefits explained I knew it was something I needed! Justin and Nick had a unit installed in my garage in one day and have been available to answer any questions I've had since then. The cost and customer service can't be beat!",
    "datePublished": "2024-11-25",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "@id": "https://thehenrybros.com"
    }
  }
];

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
