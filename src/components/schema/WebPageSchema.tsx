import JsonLdSchema from './JsonLdSchema';

interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  type?: 'WebPage' | 'ItemPage';
}

const WebPageSchema = ({ name, description, url, datePublished, dateModified, type = 'WebPage' }: WebPageSchemaProps) => {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": type,
    "name": name,
    "description": description,
    "url": url,
    "isPartOf": { "@id": "https://thehenrybros.com#website" },
  };

  if (datePublished) data["datePublished"] = datePublished;
  if (dateModified) data["dateModified"] = dateModified;

  return <JsonLdSchema schemaData={data} />;
};

export default WebPageSchema;
