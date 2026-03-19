/** Central site configuration — edit here, every page updates. */
export const site = {
  name: 'Henry Brothers HVAC',
  shortName: 'Henry Brothers',
  url: 'https://thehenrybros.com',
  phone: '(812) 994-1008',
  phoneTel: '+18129941008',
  email: 'team@thehenrybros.com',
  address: {
    street: '',
    city: 'Charlestown',
    state: 'IN',
    zip: '47111',
    country: 'US',
  },
  geo: {
    latitude: 38.4531,
    longitude: -85.6717,
  },
  hours: {
    weekday: '9:00 AM - 6:00 PM',
    saturday: '9:00 AM - 4:00 PM',
    sunday: 'Closed',
    schema: ['Mo-Fr 09:00-18:00', 'Sa 09:00-16:00'],
  },
  social: {
    facebook: 'https://www.facebook.com/thehenrybros/',
  },
  founders: [
    { name: 'Justin Henry' },
    { name: 'Nick Henry' },
  ],
  serviceRadius: '18 miles',
  description:
    'Expert ductless mini split installation and heating/cooling repair near Charlestown, IN. We serve Clark and Floyd County families and homes.',
  ogImage: '/images/og-image.png',
} as const;
