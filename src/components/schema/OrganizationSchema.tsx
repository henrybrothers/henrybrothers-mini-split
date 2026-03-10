import JsonLdSchema from './JsonLdSchema';

const data = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://thehenrybros.com#organization",
  "name": "Henry Brothers HVAC",
  "url": "https://thehenrybros.com",
  "logo": "https://thehenrybros.com/lovable-uploads/118bbfa7-3faf-421e-8fa2-60cefa7888fd.png",
  "image": "https://thehenrybros.com/lovable-uploads/b6171633-349a-4780-a66c-f52bea9b7b8e.png",
  "description": "Henry Brothers HVAC specializes in ductless and mini split heating & cooling solutions, serving Louisville, KY and Southern Indiana with expert installation, maintenance, and repair services.",
  "telephone": "+18129941008",
  "email": "team@thehenrybros.com",
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
  "sameAs": ["https://www.facebook.com/thehenrybros/"],
  "founder": [
    { "@type": "Person", "name": "Justin Henry" },
    { "@type": "Person", "name": "Nick Henry" }
  ]
};

const OrganizationSchema = () => <JsonLdSchema schemaData={data} />;
export default OrganizationSchema;
