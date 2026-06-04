import {
  Building2,
  ClipboardCheck,
  Droplets,
  Fan,
  Home,
  MapPin,
  Microscope,
  PhoneCall,
  ShieldCheck,
  Waves,
  Wind,
  Wrench,
} from "lucide-react";

export const company = {
  name: "FIRM Restoration",
  phone: "(407) 900-4224",
  phoneHref: "+14079004224",
  serviceAreas: ["Clermont", "Groveland", "Minneola", "Mascotte", "Four Corners", "Leesburg"],
  widerAreas: ["Winter Garden", "Oakland", "Montverde", "Tavares", "Eustis", "The Villages", "Central Florida"],
  services: [
    { title: "Water Damage Restoration", href: "/water-damage-restoration" },
    { title: "Emergency Water Extraction", href: "/emergency-water-extraction" },
    { title: "Structural Drying", href: "/structural-drying" },
    { title: "Flood Cleanup", href: "/flood-cleanup" },
    { title: "Storm Damage Restoration", href: "/storm-damage-restoration" },
    { title: "Mold Inspection", href: "/mold-inspection" },
    { title: "Mold Remediation", href: "/mold-remediation" },
  ],
};

export const iconMap = {
  water: Droplets,
  extraction: Wrench,
  drying: Fan,
  flood: Waves,
  storm: Wind,
  inspection: Microscope,
  remediation: ShieldCheck,
  home: Home,
  building: Building2,
  clipboard: ClipboardCheck,
  map: MapPin,
  phone: PhoneCall,
};

export const servicePages = [
  {
    slug: "water-damage-restoration",
    title: "Water Damage Restoration",
    icon: "water",
    seoTitle: "Water Damage Restoration Clermont & Groveland FL",
    description:
      "Water damage restoration for homes, rental properties, and businesses in Clermont, Groveland, Minneola, Mascotte, Four Corners, Leesburg, and nearby Central Florida communities.",
    hero: "Water Damage Restoration in Clermont & Groveland",
    intro:
      "When water enters flooring, drywall, baseboards, cabinetry, or structural materials, quick action matters. FIRM Restoration helps property owners stabilize the damage, remove water, document moisture, dry affected materials, and protect the property from secondary issues.",
    imageLabel: "Water Extraction Response Documentation",
    imageSrc: "/images/water-extraction-technician.png",
    imageAlt: "Restoration technician extracting standing water from a home after water damage",
    benefits: [
      "Rapid response for active leaks and standing water",
      "Moisture mapping to identify hidden water migration",
      "Professional drying plans based on affected materials",
      "Clear communication for homeowners, managers, and insurers",
    ],
    process: ["Inspect the source and affected areas", "Extract water and remove damaged debris when needed", "Place drying equipment and monitor moisture", "Document progress and prepare the property for repairs"],
    faqs: [
      ["How fast should water damage be addressed?", "Water damage should be addressed immediately. The longer moisture remains in materials, the greater the risk of swelling, staining, odor, and mold-related issues."],
      ["Can water damage hide behind walls?", "Yes. Water can move under flooring, behind trim, into wall cavities, and beneath cabinets. Moisture readings help determine how far the damage traveled."],
      ["Do you help with insurance documentation?", "FIRM Restoration can provide moisture notes, photos, scope details, and drying documentation that may support an insurance claim."],
    ],
    local:
      "Homeowners and property professionals call FIRM Restoration for water damage restoration in Clermont FL, Groveland FL, and surrounding Lake County and Central Florida communities.",
  },
  {
    slug: "emergency-water-extraction",
    title: "Emergency Water Extraction",
    icon: "extraction",
    seoTitle: "Emergency Water Extraction Clermont FL",
    description:
      "Emergency water extraction for burst pipes, appliance leaks, flooded rooms, and storm-related water in Clermont, Groveland, and Central Florida.",
    hero: "Emergency Water Extraction in Clermont",
    intro:
      "Standing water can quickly move into flooring systems, walls, and adjacent rooms. FIRM Restoration responds with extraction equipment and a practical plan to remove water, limit spread, and begin the drying process.",
    imageLabel: "Emergency Extraction Equipment Plan",
    imageSrc: "/images/water-extraction-technician.png",
    imageAlt: "Emergency water extraction equipment removing water from residential flooring",
    benefits: ["Water removal from rooms, flooring, and affected contents", "Support for plumbing leaks, appliance failures, and storm water", "Reduced risk of material damage from prolonged saturation", "Drying recommendations after extraction is complete"],
    process: ["Confirm safety and stop the source when possible", "Extract standing water from affected areas", "Evaluate flooring, trim, and wall moisture", "Set up drying equipment or next-step restoration work"],
    faqs: [
      ["What should I do before help arrives?", "If it is safe, stop the water source, avoid electrical hazards, move valuables away from affected areas, and call for extraction as quickly as possible."],
      ["Is extraction enough to dry my property?", "Not usually. Extraction removes visible water, but absorbed moisture often remains in structural materials and requires controlled drying."],
      ["Do you handle commercial water extraction?", "Yes. FIRM Restoration works with homeowners, property managers, landlords, and business owners."],
    ],
    local:
      "For emergency water extraction in Clermont, Groveland, Minneola, Mascotte, Four Corners, and Leesburg, FIRM Restoration helps property owners act before damage spreads.",
  },
  {
    slug: "structural-drying",
    title: "Structural Drying",
    icon: "drying",
    seoTitle: "Structural Drying Central Florida",
    description:
      "Professional structural drying and moisture monitoring for water-damaged homes and businesses in Central Florida.",
    hero: "Structural Drying for Central Florida Properties",
    intro:
      "After extraction, moisture can remain inside drywall, framing, subfloors, cabinets, and other building materials. FIRM Restoration uses drying equipment, moisture monitoring, and documentation to help return materials to acceptable dry standards.",
    imageLabel: "Structural Drying Equipment Plan",
    imageSrc: "/images/structural-drying-moisture-monitoring.png",
    imageAlt: "Restoration technician checking wall moisture readings with drying equipment in place",
    benefits: ["Moisture monitoring throughout the drying cycle", "Equipment placement based on affected materials", "Reduced risk of odor and mold-related concerns", "Documentation for property owners and claim files"],
    process: ["Map affected areas with moisture tools", "Create a drying plan for materials and room conditions", "Install air movers and dehumidification", "Monitor and adjust until target readings are reached"],
    faqs: [
      ["How long does structural drying take?", "Many drying projects take several days, but timing depends on materials, saturation level, airflow, humidity, and whether the water source has been corrected."],
      ["Can walls dry without demolition?", "Sometimes. The answer depends on contamination, saturation, material condition, insulation, and how long the materials have been wet."],
      ["Why is monitoring important?", "Monitoring confirms whether materials are drying as expected and helps avoid removing equipment too early."],
    ],
    local:
      "FIRM Restoration provides structural drying in Central Florida, including Clermont, Groveland, Minneola, Mascotte, Four Corners, and Leesburg.",
  },
  {
    slug: "flood-cleanup",
    title: "Flood Cleanup",
    icon: "flood",
    seoTitle: "Flood Cleanup Groveland & Clermont FL",
    description:
      "Flood cleanup for water-damaged homes, rentals, and businesses in Groveland, Clermont, and nearby Central Florida service areas.",
    hero: "Flood Cleanup in Groveland & Clermont",
    intro:
      "Flooded rooms create urgency and uncertainty. FIRM Restoration helps remove water, assess affected materials, clean impacted areas, and coordinate drying so property owners can move forward with confidence.",
    imageLabel: "Flood Cleanup Stabilization Plan",
    imageSrc: "/images/water-extraction-technician.png",
    imageAlt: "Flood cleanup technician extracting water from wet flooring",
    benefits: ["Cleanup for storm water, plumbing failures, and overflow events", "Removal guidance for unsalvageable materials", "Drying support after flood water is removed", "Clear next steps for owners, tenants, and property managers"],
    process: ["Assess water source, category, and affected rooms", "Remove standing water and saturated debris", "Clean affected surfaces as appropriate", "Begin drying and document moisture conditions"],
    faqs: [
      ["Is flood water always unsafe?", "Flood water can carry contaminants depending on the source. A professional inspection helps determine cleanup and safety requirements."],
      ["Can carpet be saved after flooding?", "It depends on the water source, how long it was wet, and the carpet construction. Some situations require removal."],
      ["Do you help rental properties?", "Yes. FIRM Restoration works with landlords, investors, and property managers who need prompt response and clear communication."],
    ],
    local:
      "FIRM Restoration supports flood cleanup in Groveland FL, Clermont FL, and surrounding Central Florida communities where fast action can reduce additional property damage.",
  },
  {
    slug: "storm-damage-restoration",
    title: "Storm Damage Restoration",
    icon: "storm",
    seoTitle: "Storm Damage Restoration Clermont & Groveland FL",
    description:
      "Storm damage restoration for wind-driven rain, roof leaks, water intrusion, and storm-related flooding in Clermont, Groveland, and Central Florida.",
    hero: "Storm Damage Restoration After Central Florida Weather",
    intro:
      "Heavy rain, wind, and roof leaks can create water intrusion that spreads quickly. FIRM Restoration helps property owners respond to storm-related water damage with water removal, drying, documentation, and practical restoration planning.",
    imageLabel: "Storm Intrusion Response Plan",
    imageSrc: "/images/structural-drying-moisture-monitoring.png",
    imageAlt: "Drying equipment and moisture monitoring after storm water intrusion",
    benefits: ["Response for roof leaks and wind-driven rain", "Moisture checks after storms pass", "Water removal and drying for interior materials", "Documentation for homeowners and property professionals"],
    process: ["Identify interior water intrusion points", "Stabilize affected areas and remove water", "Dry wet materials with professional equipment", "Document damage and recommend next steps"],
    faqs: [
      ["Should I call after a roof leak?", "Yes. Even a small roof leak can wet insulation, ceilings, walls, and flooring. Moisture checks help confirm the extent of the damage."],
      ["Can you work after major storms?", "FIRM Restoration supports local storm response as conditions allow and prioritizes urgent water intrusion situations."],
      ["Do you repair roofs?", "The focus is interior water mitigation, drying, and restoration support. Roof repair may require a licensed roofing contractor."],
    ],
    local:
      "Storm damage restoration is available for Clermont, Groveland, Minneola, Mascotte, Four Corners, Leesburg, and surrounding Central Florida communities.",
  },
  {
    slug: "mold-inspection",
    title: "Mold Inspection",
    icon: "inspection",
    seoTitle: "Mold Inspection Clermont FL",
    description:
      "Mold inspection and moisture investigation for suspected mold issues after leaks, humidity, or water damage in Clermont and Central Florida.",
    hero: "Mold Inspection After Water Damage",
    intro:
      "Mold concerns often begin with unresolved moisture. FIRM Restoration evaluates visible concerns, moisture conditions, building materials, and water history to help property owners understand what may be happening and what should happen next.",
    imageLabel: "Mold and Moisture Inspection Readings",
    imageSrc: "/images/mold-remediation-containment.png",
    imageAlt: "Mold inspection and containment setup with protective barriers",
    benefits: ["Inspection for suspected mold after water damage", "Moisture investigation to locate contributing conditions", "Clear recommendations for drying or remediation needs", "Support for homeowners, realtors, and property managers"],
    process: ["Discuss the water history and visible concerns", "Inspect affected materials and nearby rooms", "Check moisture and humidity conditions", "Recommend next steps based on findings"],
    faqs: [
      ["Can water damage cause mold?", "Yes. If building materials stay wet, mold can begin growing within days under the right conditions."],
      ["Do I need an inspection before remediation?", "An inspection helps identify moisture sources, affected areas, and whether remediation is likely needed."],
      ["Is a musty smell a concern?", "A musty odor can indicate moisture or microbial activity and should be investigated, especially after a leak or flood."],
    ],
    local:
      "FIRM Restoration provides mold inspection in Clermont FL, Groveland FL, and nearby Central Florida communities where water damage and humidity can create moisture concerns.",
  },
  {
    slug: "mold-remediation",
    title: "Mold Remediation",
    icon: "remediation",
    seoTitle: "Mold Remediation Clermont & Groveland FL",
    description:
      "Mold remediation services for properties affected by water damage, leaks, humidity, and confirmed mold conditions in Clermont, Groveland, and Central Florida.",
    hero: "Mold Remediation for Water-Damaged Properties",
    intro:
      "When mold is connected to water damage or persistent moisture, remediation must address both the affected materials and the conditions that allowed growth. FIRM Restoration helps property owners move from concern to a practical remediation plan.",
    imageLabel: "Mold Remediation Containment Plan",
    imageSrc: "/images/mold-remediation-containment.png",
    imageAlt: "Mold remediation technician working inside containment with filtration equipment",
    benefits: ["Remediation planning for water-related mold issues", "Containment-minded work practices", "Removal guidance for affected materials", "Coordination with drying and moisture correction"],
    process: ["Confirm affected areas and moisture conditions", "Establish a remediation plan and containment approach", "Remove or clean affected materials as appropriate", "Verify moisture control and recommend prevention steps"],
    faqs: [
      ["Do I need mold remediation?", "If mold growth is present or suspected after water damage, an inspection can determine whether remediation is appropriate."],
      ["Can mold come back after remediation?", "Mold can return if the underlying moisture problem is not corrected. Moisture control is central to the process."],
      ["Is mold removal the same as remediation?", "People often use the terms interchangeably, but remediation focuses on correcting affected conditions and reducing mold-related issues, not making unrealistic guarantees."],
    ],
    local:
      "FIRM Restoration provides mold remediation in Clermont FL, Groveland FL, and surrounding Central Florida areas as a natural extension of protecting properties after water damage.",
  },
] as const;

export const homeFaqs = [
  [
    "How quickly should water damage be addressed?",
    "Water damage should be addressed as soon as it is discovered. Fast water extraction, moisture detection, and structural drying can reduce the chance of swollen materials, staining, odors, and mold-related problems. If water is still entering the property, calling immediately is the fastest way to begin stabilization.",
  ],
  [
    "Will my insurance cover water damage restoration?",
    "Coverage depends on your policy, the cause of the water damage, and how quickly the issue is addressed. Sudden events such as burst pipes or appliance leaks may be handled differently than long-term seepage. FIRM Restoration can provide photos, moisture readings, drying notes, and scope documentation that may support an insurance claim.",
  ],
  [
    "What is structural drying?",
    "Structural drying is the controlled process of drying affected building materials such as drywall, framing, subfloors, baseboards, cabinets, and flooring systems. It typically involves moisture mapping, air movement, dehumidification, monitoring, and documentation so equipment is placed where it is actually needed.",
  ],
  [
    "Do I need flood cleanup if the standing water is already gone?",
    "Yes, it may still be needed. Water can travel under flooring, behind baseboards, into wall cavities, and into adjacent rooms even after visible water is removed. Flood cleanup and moisture detection help determine what materials are affected and what drying or removal steps may be needed.",
  ],
  [
    "Can water damage cause mold?",
    "Yes. Mold can begin growing when wet materials are left untreated or are not dried properly. Florida humidity can make moisture control even more important. Proper extraction, structural drying, moisture monitoring, and follow-up inspection help reduce the risk of water damage turning into a mold concern.",
  ],
  [
    "When do I need mold inspection or remediation?",
    "Mold inspection or remediation may be needed when there is visible growth, musty odor, repeated moisture, or water damage that was not addressed quickly. FIRM Restoration treats mold remediation as a secondary service connected to moisture control, not as a replacement for proper water damage restoration.",
  ],
];

export const reviews = [
  {
    name: "Customer review placeholder",
    text: "Verified customer testimonial will be added here.",
  },
  {
    name: "Customer review placeholder",
    text: "Customer review coming soon.",
  },
  {
    name: "Customer review placeholder",
    text: "Verified customer testimonial will be added here.",
  },
];
