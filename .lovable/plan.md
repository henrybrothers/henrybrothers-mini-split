

## Replace Logo Across the Site

### What will change

1. **Copy the new logo** from the upload to `public/images/Website_Header_Logo.png` so it lives alongside the OG image in the public directory.

2. **Update Header logo** (`src/components/Header.tsx`) -- Change the `src` from `/lovable-uploads/henrybrothers-logo-bg.png` to `/images/Website_Header_Logo.png`.

3. **Update Footer logo** (`src/components/Footer.tsx`) -- Change the `src` from `/lovable-uploads/118bbfa7-3faf-421e-8fa2-60cefa7888fd.png` to `/images/Website_Header_Logo.png`.

Both alt texts will remain "Henry Brothers Logo".

### Files affected

- `public/images/Website_Header_Logo.png` (new file -- copied from upload)
- `src/components/Header.tsx` (one line change -- image src)
- `src/components/Footer.tsx` (one line change -- image src)

