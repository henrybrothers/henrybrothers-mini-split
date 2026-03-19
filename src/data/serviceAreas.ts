export interface ServiceArea {
  city: string;
  state: string;
  stateAbbr: string;
  slug: string;
  county: string;
  description: string;
  geo: { latitude: number; longitude: number };
}

export const serviceAreas: ServiceArea[] = [
  // Indiana
  {
    city: 'Charlestown',
    state: 'Indiana',
    stateAbbr: 'IN',
    slug: 'charlestown-indiana',
    county: 'Clark County',
    description: 'Charlestown is our home base. As your neighbors in Clark County, we understand the heating and cooling needs of Charlestown families — from older homes in the historic district to newer builds along Highway 62. Our ductless mini split installations help Charlestown homeowners stay comfortable year-round while keeping energy bills in check.',
    geo: { latitude: 38.4531, longitude: -85.6717 },
  },
  {
    city: 'Jeffersonville',
    state: 'Indiana',
    stateAbbr: 'IN',
    slug: 'jeffersonville-indiana',
    county: 'Clark County',
    description: 'Jeffersonville homeowners trust Henry Brothers for reliable ductless mini split installation and repair. Whether you live near the riverfront, in the historic downtown, or out toward the newer developments, we deliver expert HVAC solutions tailored to your space.',
    geo: { latitude: 38.2776, longitude: -85.7372 },
  },
  {
    city: 'New Albany',
    state: 'Indiana',
    stateAbbr: 'IN',
    slug: 'new-albany-indiana',
    county: 'Floyd County',
    description: 'New Albany residents count on Henry Brothers for efficient mini split installations and maintenance. From the charming older homes in the Mansion Row Historic District to modern builds on the east side, we size and install ductless systems that fit your space perfectly.',
    geo: { latitude: 38.2856, longitude: -85.8241 },
  },
  {
    city: 'Clarksville',
    state: 'Indiana',
    stateAbbr: 'IN',
    slug: 'clarksville-indiana',
    county: 'Clark County',
    description: 'Clarksville homeowners enjoy fast, professional ductless HVAC service from Henry Brothers. Located right in our service area, we handle mini split installations, Clean and Check℠ maintenance, and repairs to keep your Clarksville home comfortable all year.',
    geo: { latitude: 38.2970, longitude: -85.7599 },
  },
  {
    city: 'Sellersburg',
    state: 'Indiana',
    stateAbbr: 'IN',
    slug: 'sellersburg-indiana',
    county: 'Clark County',
    description: 'Sellersburg families rely on Henry Brothers for affordable, high-quality mini split installation and HVAC repair. We serve homes throughout the Sellersburg area with expert ductless heating and cooling solutions that improve comfort and cut energy costs.',
    geo: { latitude: 38.3981, longitude: -85.7550 },
  },
  {
    city: 'Georgetown',
    state: 'Indiana',
    stateAbbr: 'IN',
    slug: 'georgetown-indiana',
    county: 'Floyd County',
    description: 'Georgetown residents trust Henry Brothers for dependable mini split installation and service. We bring professional ductless HVAC expertise to homes throughout the Georgetown area, helping you stay comfortable without the hassle or expense of traditional duct systems.',
    geo: { latitude: 38.2931, longitude: -85.9689 },
  },
  {
    city: 'Floyd Knobs',
    state: 'Indiana',
    stateAbbr: 'IN',
    slug: 'floyd-knobs-indiana',
    county: 'Floyd County',
    description: 'Henry Brothers provides expert mini split installation and ductless HVAC service to Floyd Knobs homeowners. Whether you need zone cooling for a split-level home or efficient heating for a workshop, we have the right ductless solution for your property.',
    geo: { latitude: 38.3567, longitude: -85.8942 },
  },
  // Kentucky
  {
    city: 'Louisville',
    state: 'Kentucky',
    stateAbbr: 'KY',
    slug: 'louisville-kentucky',
    county: 'Jefferson County',
    description: 'Henry Brothers serves Louisville homeowners with professional mini split installation and ductless HVAC repair. From the Highlands to South Louisville, we install energy-efficient ductless systems that give you room-by-room comfort control.',
    geo: { latitude: 38.2527, longitude: -85.7585 },
  },
  {
    city: 'St. Matthews',
    state: 'Kentucky',
    stateAbbr: 'KY',
    slug: 'st-matthews-kentucky',
    county: 'Jefferson County',
    description: 'St. Matthews homeowners choose Henry Brothers for top-quality mini split installation and maintenance. We help families throughout St. Matthews upgrade to efficient ductless HVAC systems that deliver quiet, reliable comfort in every room.',
    geo: { latitude: 38.2531, longitude: -85.6558 },
  },
  {
    city: 'Jeffersontown',
    state: 'Kentucky',
    stateAbbr: 'KY',
    slug: 'jeffersontown-kentucky',
    county: 'Jefferson County',
    description: 'Jeffersontown residents trust Henry Brothers for dependable ductless mini split installation and HVAC service. We deliver professional heating and cooling solutions tailored to your home and budget throughout the Jeffersontown community.',
    geo: { latitude: 38.1937, longitude: -85.5638 },
  },
  {
    city: 'Middletown',
    state: 'Kentucky',
    stateAbbr: 'KY',
    slug: 'middletown-kentucky',
    county: 'Jefferson County',
    description: 'Henry Brothers brings expert mini split installation and maintenance to Middletown, KY. Whether you have a newer construction home or an older property that needs efficient heating and cooling, our ductless HVAC solutions fit the bill.',
    geo: { latitude: 38.2454, longitude: -85.5369 },
  },
  {
    city: 'Prospect',
    state: 'Kentucky',
    stateAbbr: 'KY',
    slug: 'prospect-kentucky',
    county: 'Jefferson County',
    description: 'Prospect homeowners rely on Henry Brothers for premium ductless mini split installation and HVAC service. We serve the Prospect area with professional, efficient heating and cooling solutions designed for homes that deserve the best.',
    geo: { latitude: 38.3451, longitude: -85.6150 },
  },
  {
    city: 'Okolona',
    state: 'Kentucky',
    stateAbbr: 'KY',
    slug: 'okolona-kentucky',
    county: 'Jefferson County',
    description: 'Okolona families trust Henry Brothers for affordable, reliable mini split installation and repair. We bring professional ductless HVAC service to the Okolona area, helping homeowners stay comfortable while keeping energy costs down.',
    geo: { latitude: 38.1412, longitude: -85.6827 },
  },
  {
    city: 'Shively',
    state: 'Kentucky',
    stateAbbr: 'KY',
    slug: 'shively-kentucky',
    county: 'Jefferson County',
    description: 'Henry Brothers provides expert mini split installation and ductless HVAC service to Shively residents. We help homeowners throughout Shively upgrade to energy-efficient heating and cooling systems that deliver room-by-room comfort.',
    geo: { latitude: 38.2001, longitude: -85.8227 },
  },
  {
    city: 'Valley Station',
    state: 'Kentucky',
    stateAbbr: 'KY',
    slug: 'valley-station-kentucky',
    county: 'Jefferson County',
    description: 'Valley Station homeowners count on Henry Brothers for professional mini split installation and ductless HVAC maintenance. We serve Valley Station with reliable, cost-effective heating and cooling solutions built to last.',
    geo: { latitude: 38.1112, longitude: -85.8700 },
  },
];

export function getServiceAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}
