

## Update Open Graph and Twitter Card Meta Tags

### What will change

1. **Copy the uploaded OG image** to `public/images/og-image.png` so it's accessible at `https://thehenrybros.com/images/og-image.png` after deployment.

2. **Update `index.html`** -- Replace the existing Open Graph and Twitter Card meta tags in the `<head>` with the full set you provided:
   - Updated `og:title`, `og:description`, `og:url`, `og:image` pointing to `/images/og-image.png`
   - New tags: `og:locale`, `og:site_name`, `og:image:width`, `og:image:height`, `og:image:alt`
   - Updated `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`

### Technical details

- The image will live at `public/images/og-image.png` so the og:image URL path `/images/og-image.png` resolves correctly
- The og:image and twitter:image URLs will use the absolute path `https://thehenrybros.com/images/og-image.png` (Facebook requires absolute URLs)
- The page `<title>` and `<meta name="description">` will also be updated to match the new OG content for consistency

### After implementation

You can test the result at [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) by entering `https://thehenrybros.com/` once the site is published.

