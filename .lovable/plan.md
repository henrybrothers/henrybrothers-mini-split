

# Schema Folder Reorganization + New Dictionary Schemas

## Goal
Move all schema logic into `src/components/schema/` so every schema component is self-contained and easy to identify when migrating the site.

## New Folder Structure

```text
src/components/schema/
  JsonLdSchema.tsx            ← Base renderer (moved from components/)
  LocalBusinessSchema.tsx     ← Wraps localBusinessSchema data + JsonLdSchema
  OrganizationSchema.tsx      ← Wraps organizationSchema data
  BreadcrumbSchema.tsx        ← Accepts breadcrumb items as props
  WebSiteSchema.tsx           ← Wraps webSiteSchema data
  ReviewSchema.tsx            ← Renders review schemas
  DefinedTermSchema.tsx       ← For dictionary term pages
  DefinedTermSetSchema.tsx    ← For dictionary index page
  FAQPageSchema.tsx           ← For dictionary term pages (FAQ rich result)
  ItemListSchema.tsx          ← For dictionary index page
  WebPageSchema.tsx           ← For any page (ItemPage variant for terms)
```

Each component owns its own schema data or accepts props for dynamic data — no more separate `src/utils/schemaData.ts` file. Static schemas (LocalBusiness, Organization, WebSite) have their data baked in. Dynamic schemas (Breadcrumb, DefinedTerm, FAQ, etc.) accept props.

## Changes

### New files (create)
- All files under `src/components/schema/` listed above
- `src/components/schema/index.ts` — barrel export for clean imports

### Edited files
- **`src/pages/Index.tsx`** — Import from `@/components/schema` instead of JsonLdSchema + schemaData
- **`src/pages/Dictionary.tsx`** — Add DefinedTermSetSchema, ItemListSchema, WebPageSchema
- **`src/pages/DictionaryTerm.tsx`** — Add FAQPageSchema, WebPageSchema; swap JsonLdSchema imports to schema folder
- **`src/data/dictionaryTerms.ts`** — Add `datePublished` field to each term

### Deleted files
- `src/utils/schemaData.ts` — data moves into individual schema components
- `src/components/JsonLdSchema.tsx` — moves to `src/components/schema/JsonLdSchema.tsx`

