import JsonLdSchema from './JsonLdSchema';

const data = {
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
    { "@type": "City", "name": "Louisville", "addressRegion": "KY" },
    { "@type": "City", "name": "Jeffersonville", "addressRegion": "IN" },
    { "@type": "City", "name": "New Albany", "addressRegion": "IN" },
    { "@type": "City", "name": "Clarksville", "addressRegion": "IN" }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 38.2527, "longitude": -85.7585 },
    "geoRadius": "18 miles"
  },
  "openingHours": ["Mo-Fr 09:00-18:00", "Sa 09:00-16:00"],
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
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mini Split Installation", "description": "Professional installation of ductless mini split systems" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HVAC Maintenance", "description": "Regular maintenance and Clean and Check℠ service" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HVAC Repair", "description": "Expert repair services for ductless and mini split systems" } }
    ]
  },
  "sameAs": ["https://www.facebook.com/thehenrybros/"],
  "founder": [
    { "@type": "Person", "name": "Justin Henry" },
    { "@type": "Person", "name": "Nick Henry" }
  ]
};

const LocalBusinessSchema = () => <JsonLdSchema schemaData={data} />;
export default LocalBusinessSchema;
