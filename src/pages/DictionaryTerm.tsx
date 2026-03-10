import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DictionaryTermCard from "@/components/DictionaryTermCard";
import JsonLdSchema from "@/components/JsonLdSchema";
import { getTermBySlug, getRelatedTerms } from "@/data/dictionaryTerms";

const DictionaryTerm = () => {
  const { slug } = useParams<{ slug: string }>();
  const term = slug ? getTermBySlug(slug) : undefined;

  useEffect(() => {
    if (term) {
      const plain = term.description.replace(/<[^>]*>/g, "");
      const metaDesc = plain.length > 155 ? plain.slice(0, 155).trimEnd() + "…" : plain;
      document.title = `${term.title} — HVAC Dictionary | Henry Brothers`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", metaDesc);
    }
    window.scrollTo(0, 0);
  }, [term]);

  if (!term) return <Navigate to="/dictionary" replace />;

  const related = getRelatedTerms(term);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://thehenrybros.com" },
      { "@type": "ListItem", position: 2, name: "Dictionary", item: "https://thehenrybros.com/dictionary" },
      { "@type": "ListItem", position: 3, name: term.title, item: `https://thehenrybros.com/dictionary/${term.slug}` },
    ],
  };

  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.title,
    description: term.description.replace(/<[^>]*>/g, ""),
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Henry Brothers HVAC Dictionary",
      url: "https://thehenrybros.com/dictionary",
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-vintage-cream">
      <JsonLdSchema schemaData={breadcrumbSchema} />
      <JsonLdSchema schemaData={definedTermSchema} />
      <Header />

      <main className="flex-1 pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-henry-navy/60">
            <Link to="/" className="hover:text-henry-navy underline">Home</Link>
            <span className="mx-2">›</span>
            <Link to="/dictionary" className="hover:text-henry-navy underline">Dictionary</Link>
            <span className="mx-2">›</span>
            <span className="text-henry-navy font-medium">{term.title}</span>
          </nav>

          {/* Term Header */}
          <div className="mb-8">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-henry-navy bg-henry-yellow px-2 py-0.5 mb-3">
              {term.category}
            </span>
            <h1 className="newspaper-headline text-3xl md:text-4xl mb-4">{term.title}</h1>
            <div className="vintage-separator w-24 mb-6" />
          </div>

          {/* Description */}
          <div
            className="vintage-card prose prose-henry max-w-none text-henry-navy/90 leading-relaxed text-base md:text-lg [&_a]:text-henry-navy [&_a]:font-semibold [&_a]:underline [&_a]:decoration-henry-yellow [&_a]:decoration-2 [&_a]:underline-offset-2 hover:[&_a]:text-henry-yellow hover:[&_a]:decoration-henry-navy [&_a]:transition-colors"
            dangerouslySetInnerHTML={{ __html: term.description }}
          />

          {/* Related Terms */}
          {related.length > 0 && (
            <section className="mt-12">
              <h2 className="newspaper-subhead">Related Terms</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {related.slice(0, 4).map((rt) => (
                  <DictionaryTermCard key={rt.slug} term={rt} />
                ))}
              </div>
            </section>
          )}

          {/* Back link */}
          <div className="mt-10">
            <Link
              to="/dictionary"
              className="inline-flex items-center text-henry-navy font-semibold hover:text-henry-yellow transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Dictionary
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DictionaryTerm;
