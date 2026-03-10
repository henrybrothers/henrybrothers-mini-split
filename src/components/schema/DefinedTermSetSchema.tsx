import JsonLdSchema from './JsonLdSchema';
import type { DictionaryTerm } from '@/data/dictionaryTerms';

interface DefinedTermSetSchemaProps {
  terms: DictionaryTerm[];
}

const DefinedTermSetSchema = ({ terms }: DefinedTermSetSchemaProps) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "Henry Brothers HVAC Dictionary",
    "description": "HVAC terms explained the way your neighbor would — no jargon, no fluff. A plain-spoken glossary from Henry Brothers.",
    "url": "https://thehenrybros.com/dictionary",
    "hasDefinedTerm": terms.map((t) => ({
      "@type": "DefinedTerm",
      "name": t.title,
      "url": `https://thehenrybros.com/dictionary/${t.slug}`,
    })),
  };

  return <JsonLdSchema schemaData={data} />;
};

export default DefinedTermSetSchema;
