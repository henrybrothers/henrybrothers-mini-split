import { useEffect, useRef } from 'react';

interface JsonLdSchemaProps {
  schemaData: Record<string, unknown>;
}

const JsonLdSchema = ({ schemaData }: JsonLdSchemaProps) => {
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);
    scriptRef.current = script;

    return () => {
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
      }
    };
  }, [schemaData]);

  return null;
};

export default JsonLdSchema;
