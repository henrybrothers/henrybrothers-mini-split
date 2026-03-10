import JsonLdSchema from './JsonLdSchema';

const reviews = [
  {
    "@context": "https://schema.org",
    "@type": "Review",
    "author": { "@type": "Person", "name": "Timmy Mowen" },
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
    "reviewBody": "super professional and informative on how it all works. reasonably priced. 5/5 would recommend.",
    "datePublished": "2025-01-13",
    "itemReviewed": { "@type": "LocalBusiness", "@id": "https://thehenrybros.com" }
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    "author": { "@type": "Person", "name": "Kerrie Fullen" },
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
    "reviewBody": "Just wanted to say how much we appreciated Justin and his quickness in addressing our issues. He changed out some parts and got us back up and running quickly.",
    "datePublished": "2025-01-26",
    "itemReviewed": { "@type": "LocalBusiness", "@id": "https://thehenrybros.com" }
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    "author": { "@type": "Person", "name": "Starla" },
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
    "reviewBody": "I work full time in my garage and have gone between a seasonal fan and space heater for years. I wasn't even aware of a mini split option, but after having the benefits explained I knew it was something I needed! Justin and Nick had a unit installed in my garage in one day and have been available to answer any questions I've had since then. The cost and customer service can't be beat!",
    "datePublished": "2024-11-25",
    "itemReviewed": { "@type": "LocalBusiness", "@id": "https://thehenrybros.com" }
  }
];

const ReviewSchema = () => (
  <>
    {reviews.map((review, i) => (
      <JsonLdSchema key={i} schemaData={review} />
    ))}
  </>
);

export default ReviewSchema;
