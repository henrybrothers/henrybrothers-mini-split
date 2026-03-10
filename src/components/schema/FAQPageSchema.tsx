import JsonLdSchema from './JsonLdSchema';

interface FAQPageSchemaProps {
  question: string;
  answer: string;
}

const FAQPageSchema = ({ question, answer }: FAQPageSchemaProps) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answer,
        },
      },
    ],
  };

  return <JsonLdSchema schemaData={data} />;
};

export default FAQPageSchema;
