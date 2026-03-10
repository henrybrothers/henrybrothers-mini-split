import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DictionarySearch from "@/components/DictionarySearch";
import DictionaryTermCard from "@/components/DictionaryTermCard";
import {
  BreadcrumbSchema,
  DefinedTermSetSchema,
  ItemListSchema,
  WebPageSchema,
} from "@/components/schema";
import { dictionaryTerms, dictionaryCategories } from "@/data/dictionaryTerms";

const Dictionary = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    document.title = "HVAC Dictionary — Henry Brothers";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "HVAC terms explained the way your neighbor would — no jargon, no fluff. A plain-spoken glossary from Henry Brothers.");
    }
  }, []);

  const filteredTerms = useMemo(() => {
    let terms = [...dictionaryTerms];
    if (activeCategory) {
      terms = terms.filter((t) => t.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      terms = terms.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q)
      );
    }
    return terms.sort((a, b) => a.title.localeCompare(b.title));
  }, [search, activeCategory]);

  const sortedTerms = [...dictionaryTerms].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="min-h-screen flex flex-col bg-vintage-cream">
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://thehenrybros.com" },
        { name: "Dictionary", url: "https://thehenrybros.com/dictionary" },
      ]} />
      <DefinedTermSetSchema terms={dictionaryTerms} />
      <ItemListSchema items={sortedTerms.map((t) => ({
        name: t.title,
        url: `https://thehenrybros.com/dictionary/${t.slug}`,
      }))} />
      <WebPageSchema
        name="HVAC Dictionary — Henry Brothers"
        description="HVAC terms explained the way your neighbor would — no jargon, no fluff. A plain-spoken glossary from Henry Brothers."
        url="https://thehenrybros.com/dictionary"
      />

      <Header />

      <main className="flex-1 pt-28 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-henry-navy/60">
            <Link to="/" className="hover:text-henry-navy underline">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-henry-navy font-medium">Dictionary</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <h1 className="newspaper-headline text-4xl md:text-5xl mb-3">Dictionary</h1>
            <div className="vintage-separator w-24 mb-4" />
            <p className="text-henry-navy/70 text-lg max-w-2xl">
              HVAC terms explained the way your neighbor would — no jargon, no fluff.
            </p>
          </div>

          {/* Search + Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="md:w-80">
              <DictionarySearch value={search} onChange={setSearch} />
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 text-sm font-bold uppercase tracking-wider border-2 border-henry-navy transition-colors ${
                  !activeCategory
                    ? "bg-henry-navy text-henry-yellow"
                    : "bg-vintage-cream text-henry-navy hover:bg-henry-navy/10"
                }`}
              >
                All
              </button>
              {dictionaryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                  className={`px-4 py-2 text-sm font-bold uppercase tracking-wider border-2 border-henry-navy transition-colors ${
                    activeCategory === cat
                      ? "bg-henry-navy text-henry-yellow"
                      : "bg-vintage-cream text-henry-navy hover:bg-henry-navy/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Term List */}
          {filteredTerms.length === 0 ? (
            <div className="vintage-card text-center py-12">
              <p className="text-henry-navy/60 text-lg">
                No terms found matching "{search}". Try a different search.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredTerms.map((term) => (
                <DictionaryTermCard key={term.slug} term={term} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dictionary;
