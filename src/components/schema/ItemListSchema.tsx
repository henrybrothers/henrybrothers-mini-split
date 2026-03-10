import JsonLdSchema from './JsonLdSchema';

interface ItemListItem {
  name: string;
  url: string;
}

interface ItemListSchemaProps {
  items: ItemListItem[];
}

const ItemListSchema = ({ items }: ItemListSchemaProps) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "numberOfItems": items.length,
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "url": item.url,
    })),
  };

  return <JsonLdSchema schemaData={data} />;
};

export default ItemListSchema;
