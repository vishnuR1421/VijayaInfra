export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  division?: string;
  isFlagship?: boolean;
  image: string;
  overview: string;
  scope: string[];
  applications: string[];
  process: { step: string; title: string; description: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  city: string;
  state: string;
  category: "retail" | "commercial" | "office" | "facade" | "residential" | "renovation";
  categoryLabel: string;
  area: string;
  duration: string;
  scope: string;
  highlight?: string;
  image: string;
  isVerified: boolean;
}

export interface CapabilityItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface SectorItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  image: string;
}

export const COMPANY_DETAILS = {
  name: "Vijaya Infrastructures Private Limited",
  brandName: "Vijaya Infrastructures",
  legalName: "Vijaya Infrastructures Private Limited",
  origin: "Vijaya Constructions",
  establishedYear: 2015,
  cin: "U43299TS2025PTC208519",
  gstin: "36AALCV7125M1ZQ",
  address: {
    line1: "Flat No.503, Plot No.111–112, Siva Balaji Arcade",
    area: "Nizampet",
    city: "Hyderabad",
    district: "Medchal Malkajgiri District",
    state: "Telangana",
    pincode: "500090",
    fullAddress: "Flat No.503, Plot No.111–112, Siva Balaji Arcade, Nizampet, Hyderabad, Medchal Malkajgiri District, Telangana – 500090",
  },
  phones: ["9908942120", "7842077887"],
  primaryPhone: "+91 99089 42120",
  secondaryPhone: "+91 78420 77887",
  email: "projects@vijayainfrastructures.com",
  website: "https://www.vijayainfrastructures.com",
  coverage: "South India (Telangana, Andhra Pradesh, Karnataka, Tamil Nadu)",
  verifiedMetrics: {
    retailStoresDelivered: "20+",
    largestStoreSqFt: "~14,000",
    fastestRecordDays: "23",
    experienceSince: "2015",
    typicalTimeline: "30–45 Days",
  },
  directors: [
    {
      name: "Vishnu Vardhan Reddy Palagiri",
      role: "Managing Director",
      description:
        "Directing overall strategic vision, commercial fit-out execution, multi-disciplinary engineering operations, and turnkey delivery standards across South India.",
    },
  ],
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "retail-commercial-interiors",
    slug: "retail-commercial-interiors",
    title: "Retail & Commercial Interior Fit-Outs",
    shortTitle: "Retail & Commercial Interiors",
    tagline: "Turnkey retail showrooms, mall fit-outs, and commercial office spaces",
    isFlagship: true,
    image: "/retail_interior.png",
    overview:
      "Our primary core capability. We deliver end-to-end turnkey commercial and retail interior fit-outs across South India. With proven experience delivering 20+ retail stores—including flagship outlets up to ~14,000 sq ft and a 23-day record handover—we execute fast-track interior transformations under strict brand standards.",
    scope: [
      "Turnkey retail store interiors & brand showrooms",
      "Shopping mall store fit-outs with strict compliance coordination",
      "High-street retail store interiors & display fixtures",
      "Commercial office interiors & corporate workspace fit-outs",
      "Multi-city brand rollout execution across South India",
    ],
    applications: [
      "Large-format apparel and lifestyle brand outlets",
      "Regional retail store rollouts and anchor showrooms",
      "Corporate office fit-outs and IT workspace environments",
      "Shopping mall retail spaces and high-street storefronts",
    ],
    process: [
      {
        step: "01",
        title: "Site Survey & Mall Approvals",
        description: "Comprehensive site assessment, MEP alignment, and securing necessary commercial or shopping mall work clearances.",
      },
      {
        step: "02",
        title: "Offsite Fabrication & Vendor Coordination",
        description: "Parallel fabrication of brand fixtures, display units, and custom joinery within our vetted vendor network.",
      },
      {
        step: "03",
        title: "Fast-Track Onsite Execution",
        description: "Coordinated civil partitioning, MEP installations, flooring, ceiling, and storefront fit-outs under tight milestone schedules.",
      },
      {
        step: "04",
        title: "Quality Audit & Handover",
        description: "Rigorous quality check, brand specification audit, systems testing, and ready-to-trade site handover within 30–45 days.",
      },
    ],
  },
  {
    id: "electrical-works",
    slug: "electrical-works",
    title: "Electrical Works & Infrastructure",
    shortTitle: "Electrical Works",
    tagline: "Retail electrical installations, commercial infrastructure, and power distribution",
    image: "/retail_interior.png",
    overview:
      "Certified electrical engineering executed as a seamless part of our turnkey commercial fit-outs. We handle complete electrical infrastructure execution, from distribution board installations to high-specification retail lighting, power balancing, and structured data cabling.",
    scope: [
      "Retail electrical installations and specialized showroom display lighting",
      "Commercial electrical infrastructure & distribution board (DB) setups",
      "Lighting installations (ambient, track, accent, emergency, and cove lighting)",
      "Circuit load balancing, MCB/ELCB safety protections",
      "Power and data cabling for POS terminals, IT hardware, and networking",
    ],
    applications: [
      "Retail chain store electrical setups with centralized control",
      "Commercial office power distribution and server room cabling",
      "High-bay lighting and architectural display illumination",
      "Emergency backup and UPS infrastructure integration",
    ],
    process: [
      {
        step: "01",
        title: "Load Calculation & Conduit Layout",
        description: "Determining connected load, breaker capacities, conduit routing, and safety compliance.",
      },
      {
        step: "02",
        title: "Panel & DB Installation",
        description: "Setting up main distribution boards, sub-panels, MCBs/ELCBs, and dedicated power lines.",
      },
      {
        step: "03",
        title: "Wiring & Fixture Fitting",
        description: "Pulling fire-retardant cabling, installing track lights, spotlights, and dedicated POS outlets.",
      },
      {
        step: "04",
        title: "Load Testing & Certification",
        description: "Insulation testing, phase balancing, circuit labeling, and comprehensive safety audit.",
      },
    ],
  },
  {
    id: "facade-systems",
    slug: "facade-systems",
    title: "ACP & Glass Facade Systems",
    shortTitle: "ACP & Glass Facades",
    tagline: "Aluminum composite panels, structural glazing, and retail storefronts",
    image: "/hero_building.png",
    overview:
      "Exterior facades and glass storefronts define architectural presence and customer appeal. We engineer and execute high-precision Aluminum Composite Panel (ACP) cladding, structural glazing, and custom retail storefront glass systems across South India.",
    scope: [
      "Aluminum Composite Panel (ACP) cladding & portal frames",
      "Structural glazing systems and spider-fitting glass walls",
      "Retail storefront facade execution & brand signage backdrops",
      "Double-height entrance glass installations",
      "Weatherproofing, silicone joint sealing, and thermal/acoustic glazing",
    ],
    applications: [
      "High-street retail store entrance facades and display glazing",
      "Commercial building elevations and corporate plazas",
      "Mall exterior and atrium glass installations",
      "Modern brand showroom architectural cladding",
    ],
    process: [
      {
        step: "01",
        title: "Sub-Frame Engineering & Survey",
        description: "3D elevation measurements, wind-load calculation, and steel/aluminum sub-framing design.",
      },
      {
        step: "02",
        title: "Fabrication & Material Prep",
        description: "Precision CNC grooving of ACP sheets and toughened glass panel sizing with weather-seal gaskets.",
      },
      {
        step: "03",
        title: "Onsite Installation & Glazing",
        description: "Rigid anchor bracket mounting, panel fastening, and structural silicone joint sealing.",
      },
      {
        step: "04",
        title: "Weatherproofing & Inspection",
        description: "Water ingress testing, visual alignment verification, protective film removal, and audit.",
      },
    ],
  },
  {
    id: "site-renovations",
    slug: "site-renovations",
    title: "Site Renovations & Civil Modifications",
    shortTitle: "Renovations & Modifications",
    tagline: "In-house civil alterations, partition adjustments, and spatial remodeling during fit-outs",
    image: "/hero_building.png",
    overview:
      "When executing turnkey commercial and retail fit-outs, existing sites frequently require structural adjustments, partition modifications, slab leveling, or wall realignments. We handle all civil modifications and site renovation works in-house as an integrated part of our interior contracts, eliminating the need for outside civil sub-contractors.",
    scope: [
      "Interior partition wall modifications and lightweight drywall/blockwork",
      "Floor slab leveling, screeding, and tile/flooring preparation",
      "Doorway and display opening enlargements with structural lintels",
      "Civil touch-ups, plastering, and waterproofing for washrooms/pantries",
      "Tenant turnover refurbishment and commercial space remodeling",
    ],
    applications: [
      "Retail store remodelings and layout reconfigurations",
      "Shopping mall unit alterations prior to brand fit-out",
      "Commercial office partition modifications and spatial upgrades",
      "Complete commercial interior renovation works",
    ],
    process: [
      {
        step: "01",
        title: "Site Inspection & Structural Check",
        description: "Assessing existing site conditions, non-loadbearing partitions, and floor levels.",
      },
      {
        step: "02",
        title: "Selective Demolition & Modifications",
        description: "Clean removal of old partitions, debris management, and cutting new openings safely.",
      },
      {
        step: "03",
        title: "Civil Preparations & Surface Screeding",
        description: "Floor leveling, blockwork erection, plastering, and conduit routing.",
      },
      {
        step: "04",
        title: "Integration with Interior Finishes",
        description: "Seamless transition into paint, ceiling, flooring, and brand fixture installation.",
      },
    ],
  },
  {
    id: "residential-interiors",
    slug: "residential-interiors",
    title: "Turnkey Residential Interiors",
    shortTitle: "Residential Interiors",
    tagline: "Modular kitchens, wardrobes, and complete turnkey home interior execution",
    image: "/residential_interior.png",
    overview:
      "We provide comprehensive turnkey home interior solutions, combining factory-crafted modular precision with bespoke craftsmanship to deliver sophisticated living spaces for discerning homeowners.",
    scope: [
      "Modular kitchens with premium fittings and quartz/granite tops",
      "Wardrobes and storage systems (sliding, hinged, walk-in closets)",
      "Living and bedroom interior transformations",
      "False ceiling designs, ambient cove lighting, and acoustic styling",
      "Complete turnkey home interior execution from concept to handover",
    ],
    applications: [
      "Luxury apartments and gated community residences",
      "Custom villas and independent homes",
      "Turnkey home refurbishment and interior remodeling",
    ],
    process: [
      {
        step: "01",
        title: "Design Consultation & 3D Visuals",
        description: "Understanding client lifestyle, spatial planning, and finalized 3D realistic material renders.",
      },
      {
        step: "02",
        title: "Factory Modular Production",
        description: "Precision machine-cut cabinetry, edge-banding, and quality-tested hardware assembly.",
      },
      {
        step: "03",
        title: "Onsite Installation & Woodwork",
        description: "Clean modular fitment, electrical integration, false ceilings, and surface painting.",
      },
      {
        step: "04",
        title: "Deep Polish & Client Handover",
        description: "Hardware alignment checks, deep cleaning, warranty documentation, and keys handover.",
      },
    ],
  },
];

export const SECTORS: SectorItem[] = [
  {
    id: "retail-chains",
    title: "Retail Chains & Brand Showrooms",
    tagline: "Fast-track multi-location rollouts with brand compliance",
    description:
      "Our premier focus area. Proven execution capability for national and regional retail brands. We understand the critical importance of store launch dates, mall compliance frameworks, midnight access schedules, and exact brand aesthetic fidelity.",
    capabilities: [
      "Turnkey interior, electrical, facade, and renovation delivery",
      "Average retail store handover in 30–45 days",
      "Demonstrated 23-day fast-track record (Style Union Guntur-2)",
      "Experience with high-street and shopping mall formats",
    ],
    image: "/retail_interior.png",
  },
  {
    id: "it-office-spaces",
    title: "IT Office Spaces & Workplaces",
    tagline: "Contemporary corporate interiors and high-performance workspaces",
    description:
      "Modern corporate workspace fit-outs balancing spatial ergonomics, acoustic comfort, robust power/data cabling, and elegant architectural finishes for technology enterprises and commercial organizations.",
    capabilities: [
      "Turnkey corporate interior execution and glass partitions",
      "Power, data, and structured cabling infrastructure",
      "Acoustic false ceilings and energy-efficient lighting",
      "Executive suites, meeting zones, and collaborative hubs",
    ],
    image: "/retail_interior.png",
  },
  {
    id: "commercial-buildings",
    title: "Commercial Buildings & Storefronts",
    tagline: "Storefronts, facades, electrical infrastructure, and interior fit-outs",
    description:
      "Turnkey fit-out capability for commercial building lobbies, storefront elevations, ACP cladding, structural glazing, and commercial electrical distribution systems.",
    capabilities: [
      "High-durability ACP cladding and structural glazing facades",
      "Commercial entrance lobbies and storefront fit-outs",
      "Heavy commercial electrical panels and distribution",
      "Civil modifications and space remodeling during fit-outs",
    ],
    image: "/hero_building.png",
  },
];

export const VERIFIED_PROJECTS: ProjectItem[] = [
  {
    id: "style-union-guntur-2",
    title: "Style Union — Guntur-2 Store",
    client: "Style Union — Nexon Omniverse",
    city: "Guntur",
    state: "Andhra Pradesh",
    category: "retail",
    categoryLabel: "Retail Rollout",
    area: "Fast-Track Store Format",
    duration: "23 Days",
    scope: "Complete turnkey fit-out: interior layout, retail electrical, display lighting, facade branding, and partition modifications.",
    highlight: "Fastest Handover Record (23 Days)",
    image: "/retail_interior.png",
    isVerified: true,
  },
  {
    id: "style-union-flagship",
    title: "Style Union — Flagship Retail Store",
    client: "Style Union — Nexon Omniverse",
    city: "South India Region",
    state: "South India",
    category: "retail",
    categoryLabel: "Flagship Retail",
    area: "~14,000 Sq Ft",
    duration: "35–45 Days",
    scope: "Turnkey execution including large-format retail interiors, full electrical distribution, site modifications, and double-height storefront glazing.",
    highlight: "Largest Store Executed (~14,000 Sq Ft)",
    image: "/retail_interior.png",
    isVerified: true,
  },
  {
    id: "style-union-mall-format",
    title: "Style Union — Shopping Mall Store",
    client: "Style Union — Nexon Omniverse",
    city: "Hyderabad",
    state: "Telangana",
    category: "retail",
    categoryLabel: "Mall Store Fit-Out",
    area: "Mall Format Retail Space",
    duration: "30 Days",
    scope: "Turnkey interior execution under strict shopping mall coordination frameworks, offsite fixture fabrication, and night-shift execution.",
    highlight: "Mall Framework Compliance",
    image: "/retail_interior.png",
    isVerified: true,
  },
  {
    id: "commercial-facade-hyd",
    title: "Commercial Center ACP & Glass Facade",
    client: "Commercial Partner",
    city: "Hyderabad",
    state: "Telangana",
    category: "facade",
    categoryLabel: "Facade Systems",
    area: "Commercial Building Elevation",
    duration: "40 Days",
    scope: "Aluminum Composite Panel (ACP) cladding, structural glazing systems, and weather-seal glass facade installation.",
    highlight: "Engineered ACP & Structural Glazing",
    image: "/hero_building.png",
    isVerified: true,
  },
  {
    id: "corporate-it-office",
    title: "Corporate Commercial Office Fit-Out",
    client: "Commercial IT Partner",
    city: "Hyderabad",
    state: "Telangana",
    category: "office",
    categoryLabel: "Office Interiors",
    area: "Commercial Workspace",
    duration: "35 Days",
    scope: "Turnkey office interior execution: glass partitions, acoustic ceilings, power & data cabling, and executive suites.",
    highlight: "Complete Workspace Execution",
    image: "/retail_interior.png",
    isVerified: true,
  },
  {
    id: "commercial-renovation-fitout",
    title: "Commercial Plaza Interior & Renovation Fit-Out",
    client: "Commercial Partner",
    city: "Hyderabad",
    state: "Telangana",
    category: "renovation",
    categoryLabel: "Renovation & Modifications",
    area: "Commercial Space",
    duration: "30 Days",
    scope: "Internal partition modifications, civil alterations, floor leveling, electrical infrastructure, and interior remodeling for tenant handover.",
    highlight: "Turnkey Renovation & Fit-Out",
    image: "/hero_building.png",
    isVerified: true,
  },
  {
    id: "residential-interior-residence",
    title: "Luxury Home Interior",
    client: "Private Residential Client",
    city: "Hyderabad",
    state: "Telangana",
    category: "residential",
    categoryLabel: "Residential Interiors",
    area: "Complete Home Interior",
    duration: "45 Days",
    scope: "Turnkey home interior: modular kitchen, custom wardrobes, living and bedroom styling, and cove lighting.",
    highlight: "Residential Interiors",
    image: "/residential_interior.png",
    isVerified: true,
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    number: "01",
    title: "Turnkey Commercial Fit-Outs",
    description:
      "Complete coordination across retail interiors, certified electrical installations, glass/ACP facades, and in-house site renovations eliminates vendor friction and ensures unified accountability.",
    highlight: "Interiors • Electrical • Facades • Renovations",
  },
  {
    number: "02",
    title: "Retail Rollout Experience",
    description:
      "Over 20+ retail stores successfully delivered across South India for established brands like Style Union (Part of Nexon Omniverse), managing both high-street and shopping mall formats.",
    highlight: "20+ Retail Stores Delivered",
  },
  {
    number: "03",
    title: "Fast-Track Delivery Capability",
    description:
      "Engineered workflows allow standard retail delivery in 30–45 days, with a verified record handover completed in 23 days for the Style Union Guntur-2 project.",
    highlight: "23-Day Record Handover",
  },
  {
    number: "04",
    title: "Strict Brand & Site Compliance",
    description:
      "Thorough understanding of mall operational rules, midnight work schedules, MEP safety codes, and rigorous adherence to client architectural brand guidelines.",
    highlight: "100% Brand Spec Adherence",
  },
  {
    number: "05",
    title: "Multi-Location South India Reach",
    description:
      "Headquartered in Hyderabad with proven operational capacity to mobilize project teams and resources across Telangana, Andhra Pradesh, Karnataka, and Tamil Nadu.",
    highlight: "Active South India Coverage",
  },
  {
    number: "06",
    title: "Experienced Vendor & Fabrication Network",
    description:
      "Established supply chain and offsite fabrication partnerships ensure rapid material procurement, pre-assembled modular fittings, and consistent build quality.",
    highlight: "Pre-Engineered Offsite Speed",
  },
];

export const ABOUT_STORY = {
  paragraph1:
    "Vijaya Infrastructures Private Limited is a turnkey contracting company specializing in commercial fit-outs, retail store execution, electrical installations, ACP & glass facade works, and interior renovations across South India.",
  paragraph2:
    "The company builds on the operational experience of Vijaya Constructions, which has been delivering interior and fit-out projects since 2015. With expanding project scale and operations, the business has been structured under Vijaya Infrastructures Private Limited to undertake larger commercial contracts and multi-location retail rollouts.",
  paragraph3:
    "The team has developed experience in large-format retail store fit-outs, fast-track interior execution, facade installations, and turnkey project delivery for commercial brands alongside bespoke turnkey residential interiors.",
};
