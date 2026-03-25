import { config, fields, singleton } from '@keystatic/core';

export default config({
  storage:
    process.env.KEYSTATIC_GITHUB_APP_SLUG
      ? {
          kind: 'github',
          repo: {
            owner: 'henrybrothers',
            name: 'henrybrothers-mini-split',
          },
        }
      : { kind: 'local' },

  ui: {
    brand: { name: 'Henry Brothers HVAC' },
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
      },
    }),
  },
});
