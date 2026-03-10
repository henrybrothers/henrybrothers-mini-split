import JsonLdSchema from './JsonLdSchema';

const data = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://thehenrybros.com#website",
  "url": "https://thehenrybros.com",
  "name": "Henry Brothers HVAC",
  "description": "Expert ductless and mini split HVAC solutions by Justin & Nick Henry. Serving Louisville, KY and Southern Indiana.",
  "publisher": { "@id": "https://thehenrybros.com#organization" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://thehenrybros.com?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const WebSiteSchema = () => <JsonLdSchema schemaData={data} />;
export default WebSiteSchema;
