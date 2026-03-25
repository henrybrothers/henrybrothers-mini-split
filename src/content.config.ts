import { defineCollection, z } from 'astro:content';

const homepage = defineCollection({
  type: 'data',
  schema: z.object({
    heroHeading: z.string(),
    heroSubhead: z.string(),
  }),
});

const siteSettings = defineCollection({
  type: 'data',
  schema: z.object({
    footerTagline: z.string(),
    showMembershipLink: z.boolean(),
  }),
});

const membershipPricing = defineCollection({
  type: 'data',
  schema: z.object({
    cleanAndCheckBasePrice: z.number(),
    cleanAndCheckPrice: z.number(),
    membershipPrice: z.number(),
    membershipDescription: z.string(),
  }),
});

const businessInfo = defineCollection({
  type: 'data',
  schema: z.object({
    businessName: z.string(),
    phone: z.string(),
    mondaySaturday: z.string(),
    sunday: z.string(),
    serviceAreaNote: z.string(),
  }),
});

const serviceAreas = defineCollection({
  type: 'data',
  schema: z.object({
    cityName: z.string(),
    county: z.enum(['Clark', 'Floyd']),
    active: z.boolean(),
  }),
});

export const collections = {
  homepage,
  'site-settings': siteSettings,
  'membership-pricing': membershipPricing,
  'business-info': businessInfo,
  'service-areas': serviceAreas,
};
