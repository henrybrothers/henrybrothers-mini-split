import { config, fields, singleton, collection } from '@keystatic/core';

export default config({
  storage:
    import.meta.env.KEYSTATIC_GITHUB_APP_SLUG
      ? {
          kind: 'github',
          repo: {
            owner: 'henrybrothers',
            name: 'henrybrothers-mini-split',
          },
        }
      : { kind: 'local' },

  ui: {
    brand: { name: 'Henry Brothers Heat \u2022 Cool \u2022 Mini Splits' },
  },

  singletons: {
    homepage: singleton({
      label: 'Homepage',
      path: 'src/content/homepage',
      schema: {
        heroHeading: fields.text({
          label: 'Hero Heading',
          description: 'Main headline shown in the hero section.',
          validation: { isRequired: true },
        }),
        heroSubhead: fields.text({
          label: 'Hero Subheadline',
          description: 'Supporting text below the hero heading.',
          multiline: true,
          validation: { isRequired: true },
        }),
      },
    }),

    siteSettings: singleton({
      label: 'Site Settings',
      path: 'src/content/site-settings',
      schema: {
        footerTagline: fields.text({
          label: 'Footer Tagline',
          description: 'Short description shown in the footer under the logo.',
          validation: { isRequired: true },
        }),
        showMembershipLink: fields.checkbox({
          label: 'Show Membership link in nav and footer',
          description: 'Toggle the /membership link across the site without touching code.',
          defaultValue: true,
        }),
        fontChoice: fields.select({
          label: 'Heading Font',
          description: 'Font used for section titles, headings, and the navigation. Body text always uses Inter.',
          options: [
            { label: 'Montserrat (default — bold, modern sans-serif)', value: 'montserrat' },
            { label: 'Source Serif 4 (elegant variable serif)', value: 'source-serif-4' },
            { label: 'Libre Baskerville (classic book serif)', value: 'libre-baskerville' },
          ],
          defaultValue: 'montserrat',
        }),
      },
    }),

    businessInfo: singleton({
      label: 'Business Info (NAP)',
      path: 'src/content/business-info',
      schema: {
        businessName: fields.text({
          label: 'Business Name',
          description: 'Official business name used across the site and in structured data.',
          defaultValue: 'Henry Brothers Heat \u2022 Cool \u2022 Mini Splits',
          validation: { isRequired: true },
        }),
        phone: fields.text({
          label: 'Phone Number',
          description: 'Display format, e.g. 812-994-1008.',
          defaultValue: '812-994-1008',
          validation: { isRequired: true },
        }),
        mondaySaturday: fields.text({
          label: 'Hours — Monday–Saturday',
          description: 'e.g. "Open 24 hours" or "9:00 AM – 6:00 PM".',
          defaultValue: 'Open 24 hours',
          validation: { isRequired: true },
        }),
        sunday: fields.text({
          label: 'Hours — Sunday',
          description: 'e.g. "Closed" or "10:00 AM – 4:00 PM".',
          defaultValue: 'Closed',
          validation: { isRequired: true },
        }),
        serviceAreaNote: fields.text({
          label: 'Service Area Note',
          description: 'Short phrase shown in contact/footer, e.g. "Clark and Floyd Counties, Indiana".',
          defaultValue: 'Clark and Floyd Counties, Indiana',
          validation: { isRequired: true },
        }),
      },
    }),

    membershipPricing: singleton({
      label: 'Membership Pricing',
      path: 'src/content/membership-pricing',
      schema: {
        cleanAndCheckBasePrice: fields.integer({
          label: 'Clean and Check℠ Base Price',
          description: 'Single-visit price for existing customers (no thermostat).',
          defaultValue: 99,
          validation: { isRequired: true, min: 0 },
        }),
        cleanAndCheckPrice: fields.integer({
          label: 'Clean and Check℠ Price (with Ecobee)',
          description: 'Price when bundled with a new Ecobee smart thermostat install.',
          defaultValue: 199,
          validation: { isRequired: true, min: 0 },
        }),
        membershipPrice: fields.integer({
          label: 'Two Seasons Membership Price',
          description: 'Annual membership price covering spring + fall visits and 10% repair discount.',
          defaultValue: 159,
          validation: { isRequired: true, min: 0 },
        }),
        membershipDescription: fields.text({
          label: 'Membership Description',
          description: 'Short description of the membership shown on the pricing card.',
          multiline: true,
          defaultValue: 'Two visits (spring cooling + fall heating) + 10% off all repairs year-round.',
        }),
      },
    }),
  },

  collections: {
    serviceAreas: collection({
      label: 'Service Areas',
      path: 'src/content/service-areas/*',
      slugField: 'cityName',
      schema: {
        cityName: fields.slug({
          name: {
            label: 'City Name',
            description: 'Full name of the city (e.g. Charlestown).',
            validation: { isRequired: true },
          },
        }),
        county: fields.select({
          label: 'County',
          description: 'Indiana county this city belongs to.',
          options: [
            { label: 'Clark County', value: 'Clark' },
            { label: 'Floyd County', value: 'Floyd' },
          ],
          defaultValue: 'Clark',
        }),
        active: fields.checkbox({
          label: 'Active',
          description: 'Include this city in the service area list and schema.',
          defaultValue: true,
        }),
      },
    }),
  },
});
