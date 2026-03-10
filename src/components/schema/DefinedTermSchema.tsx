import JsonLdSchema from './JsonLdSchema';

interface DefinedTermSchemaProps {
  name: string;
  description: string;
  url: string;
  termCode?: string;
}

const DefinedTermSchema = ({ name, description, url, termCode }: DefinedTermSchemaProps) => {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": name,
    "description": description,
    "url": url,
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "Henry Brothers HVAC Dictionary",
      "url": "https://thehenrybros.com/dictionary",
    },
  };

  if (termCode) {
    data["termCode"] = termCode;
  }

  return <JsonLdSchema schemaData={data} />;
};

export default DefinedTermSchema;
