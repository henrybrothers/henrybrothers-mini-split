export interface DictionaryTerm {
  slug: string;
  title: string;
  description: string;
  category: "Installation" | "Maintenance" | "Parts & Components" | "Efficiency";
  relatedSlugs: string[];
  datePublished: string;
}

export const dictionaryTerms: DictionaryTerm[] = [
  {
    slug: "btu",
    title: "BTU (British Thermal Unit)",
    description:
      "A BTU is just a way to measure heating and cooling power. The higher the BTU number, the more air a system can heat or cool. When someone says a mini split is 12,000 BTUs, that means it can comfortably handle a typical bedroom or garage. Getting the right BTU size for your space matters — too small and it runs constantly, too big and it cycles on and off without properly controlling humidity. A quick square-footage calculation usually points you in the right direction, but ceiling height, insulation, and how many windows you have all play a role too.",
    category: "Efficiency",
    relatedSlugs: ["mini-split", "zone-cooling", "indoor-air-handler"],
    datePublished: "2025-03-01",
  },
  {
    slug: "ductless-hvac",
    title: "Ductless HVAC",
    description:
      'Ductless HVAC is exactly what it sounds like — a heating and cooling system that doesn\'t need ductwork. Instead of pushing air through a maze of metal ducts in your walls and ceiling, a <a href="/dictionary/mini-split">mini split</a> delivers conditioned air directly into the room from a wall-mounted <a href="/dictionary/indoor-air-handler">air handler</a>. This makes it a great fit for older homes that were never built with duct systems, finished basements, sunrooms, and garage workshops. No ducts also means no duct leaks — which is where traditional systems lose a surprising amount of energy.',
    category: "Installation",
    relatedSlugs: ["mini-split", "mini-split-installation", "indoor-air-handler"],
    datePublished: "2025-03-01",
  },
  {
    slug: "heat-pump",
    title: "Heat Pump",
    description:
      'A heat pump moves heat from one place to another instead of generating it from scratch. In the summer, it pulls heat out of your room and dumps it outside. In the winter, it does the reverse — pulling heat from the outdoor air (yes, even when it\'s cold) and moving it inside. Every <a href="/dictionary/mini-split">mini split</a> is a heat pump, which means one system handles both heating and cooling. Modern <a href="/dictionary/inverter-compressor">inverter compressors</a> make them efficient enough to handle Southern Indiana winters without breaking a sweat.',
    category: "Parts & Components",
    relatedSlugs: ["mini-split", "inverter-compressor", "outdoor-condenser-unit"],
    datePublished: "2025-03-01",
  },
  {
    slug: "indoor-air-handler",
    title: "Indoor Air Handler",
    description:
      'The indoor air handler is the unit mounted on your wall inside the room. It\'s the part of the <a href="/dictionary/mini-split">mini split</a> you actually see and feel — it blows conditioned air into the space and pulls room air back in to be cooled or heated. Most are slim, quiet, and come with a remote control. Each room gets its own air handler, which is what makes <a href="/dictionary/zone-cooling">zone cooling</a> possible. They connect to the <a href="/dictionary/outdoor-condenser-unit">outdoor unit</a> through a small set of <a href="/dictionary/refrigerant-line-set">refrigerant lines</a> that run through a small hole in the wall.',
    category: "Parts & Components",
    relatedSlugs: ["mini-split", "outdoor-condenser-unit", "refrigerant-line-set", "zone-cooling"],
    datePublished: "2025-03-01",
  },
  {
    slug: "inverter-compressor",
    title: "Inverter Compressor",
    description:
      'An inverter compressor adjusts its speed to match what your room actually needs, instead of just slamming on at full blast and shutting off over and over. Think of it like cruise control versus stomping the gas and brake. This means steadier temperatures, quieter operation, and lower energy bills. Most modern <a href="/dictionary/mini-split">mini splits</a> use inverter technology, which is a big part of why they score so well on <a href="/dictionary/seer-rating">SEER ratings</a>. It\'s one of those things you don\'t think about, but you definitely notice the difference.',
    category: "Efficiency",
    relatedSlugs: ["mini-split", "seer-rating", "heat-pump"],
    datePublished: "2025-03-01",
  },
  {
    slug: "mini-split",
    title: "Mini Split",
    description:
      'A mini split is a compact heating and cooling system made up of two main parts: an <a href="/dictionary/outdoor-condenser-unit">outdoor condenser unit</a> and one or more <a href="/dictionary/indoor-air-handler">indoor air handlers</a>. They\'re connected by <a href="/dictionary/refrigerant-line-set">refrigerant lines</a> instead of ductwork, which is why they\'re also called <a href="/dictionary/ductless-hvac">ductless systems</a>. Mini splits are popular for spaces where running ducts isn\'t practical — garages, sunrooms, additions, older homes, or any room that\'s always too hot or too cold. They give you <a href="/dictionary/zone-cooling">room-by-room control</a> and tend to be more energy-efficient than traditional forced-air systems.',
    category: "Installation",
    relatedSlugs: ["ductless-hvac", "indoor-air-handler", "outdoor-condenser-unit", "mini-split-installation"],
  },
  {
    slug: "mini-split-installation",
    title: "Mini Split Installation",
    description:
      'Installing a <a href="/dictionary/mini-split">mini split</a> is usually a one-day job. It involves mounting the <a href="/dictionary/indoor-air-handler">indoor air handler</a> on the wall, placing the <a href="/dictionary/outdoor-condenser-unit">outdoor condenser</a> on a pad or bracket outside, and running <a href="/dictionary/refrigerant-line-set">refrigerant lines</a> between the two through a small hole in the wall — typically around three inches. There\'s no tearing open walls for ductwork, which keeps things clean and simple. Proper sizing matters — getting the right <a href="/dictionary/btu">BTU capacity</a> for your space means the system runs efficiently instead of working harder than it needs to.',
    category: "Installation",
    relatedSlugs: ["mini-split", "indoor-air-handler", "outdoor-condenser-unit", "btu"],
  },
  {
    slug: "mini-split-maintenance",
    title: "Mini Split Maintenance",
    description:
      'Keeping a <a href="/dictionary/mini-split">mini split</a> running well doesn\'t take much, but it does take consistency. The basics include cleaning or replacing the filters in your <a href="/dictionary/indoor-air-handler">indoor air handler</a> every few weeks and keeping the <a href="/dictionary/outdoor-condenser-unit">outdoor unit</a> clear of leaves, dirt, and debris. Beyond that, an annual professional tune-up — like a <a href="/#clean-check">Clean and Check℠</a> — catches small issues before they turn into expensive repairs. Things like refrigerant levels, electrical connections, and coil condition all get looked at. A well-maintained mini split lasts longer and keeps your energy bills where they should be.',
    category: "Maintenance",
    relatedSlugs: ["mini-split", "indoor-air-handler", "outdoor-condenser-unit", "refrigerant-line-set"],
  },
  {
    slug: "outdoor-condenser-unit",
    title: "Outdoor Condenser Unit",
    description:
      'The outdoor condenser unit is the box that sits outside your home — it\'s the other half of your <a href="/dictionary/mini-split">mini split system</a>. It houses the <a href="/dictionary/inverter-compressor">compressor</a> and a big coil that either releases heat (in cooling mode) or absorbs it (in heating mode). It connects to your <a href="/dictionary/indoor-air-handler">indoor air handler</a> through <a href="/dictionary/refrigerant-line-set">refrigerant lines</a>. One outdoor unit can sometimes serve multiple indoor units, which is useful if you want to control several rooms. It needs decent airflow around it, so keeping bushes trimmed back and debris cleared is part of basic <a href="/dictionary/mini-split-maintenance">maintenance</a>.',
    category: "Parts & Components",
    relatedSlugs: ["mini-split", "indoor-air-handler", "inverter-compressor", "refrigerant-line-set"],
  },
  {
    slug: "refrigerant-line-set",
    title: "Refrigerant Line Set",
    description:
      'The refrigerant line set is the pair of copper tubes that connect your <a href="/dictionary/indoor-air-handler">indoor air handler</a> to the <a href="/dictionary/outdoor-condenser-unit">outdoor condenser unit</a>. One line carries cold refrigerant to the indoor unit, and the other carries warm refrigerant back outside. They run through a small hole drilled through your exterior wall — usually around three inches — and are insulated to keep them working efficiently. The length and routing of the line set can vary depending on where you want the indoor and outdoor units placed. During <a href="/dictionary/mini-split-installation">installation</a>, getting this part right matters for long-term performance.',
    category: "Parts & Components",
    relatedSlugs: ["indoor-air-handler", "outdoor-condenser-unit", "mini-split-installation"],
  },
  {
    slug: "seer-rating",
    title: "SEER Rating",
    description:
      'SEER stands for Seasonal Energy Efficiency Ratio, and it tells you how efficiently a cooling system uses electricity over a typical cooling season. A higher number means lower energy bills. Most older window units or central air systems land around 10-14 SEER. Modern <a href="/dictionary/mini-split">mini splits</a> often hit 20 SEER or higher, especially ones with <a href="/dictionary/inverter-compressor">inverter compressors</a>. It\'s not the only thing that matters when choosing a system, but it gives you a solid apples-to-apples comparison of operating costs. Think of it like MPG for your car — the higher the number, the further your dollar goes.',
    category: "Efficiency",
    relatedSlugs: ["mini-split", "inverter-compressor", "btu"],
  },
  {
    slug: "zone-cooling",
    title: "Zone Cooling",
    description:
      'Zone cooling means controlling the temperature in each room independently instead of heating or cooling your entire home to one setting. With <a href="/dictionary/mini-split">mini splits</a>, every <a href="/dictionary/indoor-air-handler">indoor air handler</a> has its own thermostat, so you can keep your bedroom cool at night without wasting energy on the living room nobody\'s using. It\'s especially useful in homes where some rooms run hot (like a sunroom or upstairs bedroom) while others stay comfortable. You only use energy where you need it, which is why zoned systems tend to be more efficient than traditional setups.',
    category: "Efficiency",
    relatedSlugs: ["mini-split", "indoor-air-handler", "btu", "seer-rating"],
  },
];

export const dictionaryCategories = [
  "Installation",
  "Maintenance",
  "Parts & Components",
  "Efficiency",
] as const;

export function getTermBySlug(slug: string): DictionaryTerm | undefined {
  return dictionaryTerms.find((t) => t.slug === slug);
}

export function getTermsByCategory(category: string): DictionaryTerm[] {
  return dictionaryTerms.filter((t) => t.category === category);
}

export function getRelatedTerms(term: DictionaryTerm): DictionaryTerm[] {
  return term.relatedSlugs
    .map((slug) => dictionaryTerms.find((t) => t.slug === slug))
    .filter(Boolean) as DictionaryTerm[];
}
