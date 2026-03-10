

# Dictionary Feature — Updated Plan

## Writing Voice

Every dictionary entry written in Henry Brothers' voice: conversational, neighborly, plain-spoken. No jargon, no fluff. Like explaining something to a customer on their front porch.

**No CTAs. No upselling.** The dictionary is purely educational. Internal links exist naturally — the way any website works — linking to relevant pages and other terms for context, not to push a sale. Henry Brothers earns trust by teaching, not selling.

## Architecture

```text
src/
  data/dictionaryTerms.ts          ← Static term data
  pages/Dictionary.tsx              ← Index with search + category chips
  pages/DictionaryTerm.tsx          ← Individual term page
  components/DictionarySearch.tsx    ← Client-side instant filter
  components/DictionaryTermCard.tsx  ← Reusable card for lists/related
```

## Data Structure

```typescript
interface DictionaryTerm {
  slug: string;
  title: string;
  description: string;       // 2-4 sentences, Henry Brothers voice
  category: "Installation" | "Maintenance" | "Parts & Components" | "Efficiency";
  relatedSlugs: string[];    // Cross-links to other terms
}
```

No `ctaText` or `ctaLink` fields. Terms link to other terms and to site pages naturally within the description text itself (e.g., "...which is part of routine [mini split maintenance](/dictionary/mini-split-maintenance)"). These are contextual, informational links — the same way Wikipedia or any educational site links between pages.

## Initial 12 Terms

1. **Mini Split** — Installation
2. **Ductless HVAC** — Installation
3. **Mini Split Installation** — Installation
4. **Heat Pump** — Parts & Components
5. **Indoor Air Handler** — Parts & Components
6. **Outdoor Condenser Unit** — Parts & Components
7. **SEER Rating** — Efficiency
8. **BTU** — Efficiency
9. **Refrigerant Line Set** — Parts & Components
10. **Mini Split Maintenance** — Maintenance
11. **Zone Cooling** — Efficiency
12. **Inverter Compressor** — Efficiency

## Pages

### `/dictionary` — Index
- Vintage newspaper header: "Dictionary"
- Subtitle: "HVAC terms explained the way your neighbor would — no jargon, no fluff."
- Instant search bar (client-side filter, zero performance impact)
- Category filter chips
- Alphabetical term list with `vintage-card` styling
- Breadcrumb: Home > Dictionary

### `/dictionary/:slug` — Term Page
- Breadcrumb: Home > Dictionary > Term Title
- Term title + full description
- Natural inline links to other terms and site pages within description text
- "Related Terms" grid (3-4 cards)
- JSON-LD `DefinedTerm` schema + breadcrumb schema
- Dynamic `document.title` and meta description

## Internal Linking Strategy

Links appear naturally within description text — the way any informational website works. A term about "SEER Rating" might mention "inverter compressor" and that phrase links to `/dictionary/inverter-compressor`. A term about "mini split maintenance" might reference "our Clean and Check℠ service" linking to `/#clean-check`. No buttons, no CTAs, no "Schedule Now" — just natural hyperlinks in educational content.

## Routing & Navigation
- Add routes in `App.tsx`: `/dictionary` and `/dictionary/:slug`
- Add "Dictionary" to Footer Quick Links only

## Styling
- Existing vintage newspaper aesthetic
- `vintage-card`, `vintage-border`, `henry-navy`, `henry-yellow`, `vintage-cream`

## SEO
- JSON-LD `DefinedTerm` per entry + breadcrumb schema
- Internal link mesh between all terms + main site pages
- Unique title/description per page

## Files to Create/Edit
- `src/data/dictionaryTerms.ts` — new
- `src/pages/Dictionary.tsx` — new
- `src/pages/DictionaryTerm.tsx` — new
- `src/components/DictionarySearch.tsx` — new
- `src/components/DictionaryTermCard.tsx` — new
- `src/components/Footer.tsx` — add Dictionary link
- `src/App.tsx` — add two routes

