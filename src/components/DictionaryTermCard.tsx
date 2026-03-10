import { Link } from "react-router-dom";
import type { DictionaryTerm } from "@/data/dictionaryTerms";

interface DictionaryTermCardProps {
  term: DictionaryTerm;
}

const DictionaryTermCard = ({ term }: DictionaryTermCardProps) => {
  // Strip HTML tags for the preview
  const plainDescription = term.description.replace(/<[^>]*>/g, "");
  const truncated =
    plainDescription.length > 140
      ? plainDescription.slice(0, 140).trimEnd() + "…"
      : plainDescription;

  return (
    <Link to={`/dictionary/${term.slug}`} className="block vintage-card hover:-translate-y-1 hover:shadow-lg transition-all">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-heading font-bold text-lg text-henry-navy mb-1">
            {term.title}
          </h3>
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-henry-navy bg-henry-yellow px-2 py-0.5 mb-2">
            {term.category}
          </span>
          <p className="text-sm text-henry-navy/80 leading-relaxed">{truncated}</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-henry-navy/40 shrink-0 mt-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
};

export default DictionaryTermCard;
