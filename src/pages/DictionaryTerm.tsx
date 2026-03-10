import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useCallback } from "react";
import DictionaryTermCard from "@/components/DictionaryTermCard";
import {
  BreadcrumbSchema,
  DefinedTermSchema,
  FAQPageSchema,
  WebPageSchema,
} from "@/components/schema";
import { getTermBySlug, getRelatedTerms } from "@/data/dictionaryTerms";

const DictionaryTerm = () => {
  const navigate = useNavigate();
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
  const plainDescription = term.description.replace(/<[^>]*>/g, "");
  const termUrl = `https://thehenrybros.com/dictionary/${term.slug}`;

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://thehenrybros.com" },
        { name: "Dictionary", url: "https://thehenrybros.com/dictionary" },
        { name: term.title, url: termUrl },
      ]} />
      <DefinedTermSchema
        name={term.title}
        description={plainDescription}
        url={termUrl}
        termCode={term.category}
      />
      <FAQPageSchema
        question={`What is ${term.title.includes("(") ? term.title.split("(")[0].trim() : `a ${term.title}`}?`}
        answer={plainDescription}
      />
      <WebPageSchema
        type="ItemPage"
        name={`${term.title} — HVAC Dictionary | Henry Brothers`}
        description={plainDescription.length > 155 ? plainDescription.slice(0, 155).trimEnd() + "…" : plainDescription}
        url={termUrl}
        datePublished={term.datePublished}
      />

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
    </>
  );
};

export default DictionaryTerm;
