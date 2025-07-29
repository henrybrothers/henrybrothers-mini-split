
import { useEffect } from 'react';

interface JsonLdSchemaProps {
  schemaData: any;
}

const JsonLdSchema = ({ schemaData }: JsonLdSchemaProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      // Clean up when component unmounts
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [schemaData]);

  return null;
};

export default JsonLdSchema;
