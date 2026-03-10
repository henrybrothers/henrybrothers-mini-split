import { Search } from "lucide-react";

interface DictionarySearchProps {
  value: string;
  onChange: (value: string) => void;
}

const DictionarySearch = ({ value, onChange }: DictionarySearchProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-henry-navy/40" />
      <input
        type="text"
        placeholder="Search terms…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-3 bg-vintage-cream border-2 border-henry-navy text-henry-navy placeholder:text-henry-navy/40 font-sans focus:outline-none focus:ring-2 focus:ring-henry-yellow"
      />
    </div>
  );
};

export default DictionarySearch;
