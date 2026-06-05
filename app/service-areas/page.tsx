import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, PhoneCall } from "lucide-react";
import { CTASection, FAQSection, InteriorHero, SectionHeader } from "@/components/Sections";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Service Areas | Water Damage Restoration Clermont, Groveland & Central Florida",
  description: "FIRM Restoration provides emergency water damage restoration, water extraction, structural drying, flood cleanup, mold inspection, and mold remediation in Clermont, Groveland, Minneola, Mascotte, Four Corners, Leesburg, and nearby Central Florida communities.",
};

const primaryAreas = [
  ["Clermont", "Emergency water damage restoration, water extraction, structural drying, flood cleanup, and mold inspection support for Clermont homes and businesses."],
  ["Groveland", "Local water damage response for Groveland properties affected by leaks, flooding, storm water intrusion, wet flooring, and hidden moisture."],
  ["Minneola", "Water extraction, moisture detection, drying, and mold-related restoration support for Minneola property owners."],
  ["Mascotte", "Water damage restoration and flood cleanup support for Mascotte homes, rentals, and small businesses."],
  ["Four Corners", "Emergency restoration response for Four Corners properties dealing with water intrusion, wet materials, and moisture concerns."],
  ["Leesburg", "Water damage cleanup, drying documentation, storm water response, and mold prevention support in Leesburg and nearby areas."],
];

const serviceAreaFaqs = [
  [
    "Does FIRM Restoration provide water damage restoration in Clermont FL?",
    "Yes. FIRM Restoration serves Clermont homeowners and businesses with emergency water extraction, structural drying, moisture detection, flood cleanup, and mold-related services after water damage.",
  ],
  [
    "Do you handle water damage restoration in Groveland FL?",
    "Yes. Groveland is a primary service area for FIRM Restoration. The team helps with leaks, standing water, storm water intrusion, flood cleanup, drying, and moisture documentation.",
  ],
  [
    "What Central Florida communities do you serve?",
    `FIRM Restoration serves ${company.serviceAreas.join(", ")} and nearby Central Florida communities. Availability can depend on current emergency call volume and the urgency of the water damage situation.`,
  ],
  [
    "Can mold services be scheduled in the same service areas?",
    "Yes. Mold inspection and mold remediation are available in the same local service areas when moisture conditions, visible growth, musty odor, or previous water damage create a concern.",
  ],
  [
    "Should I call if I am outside the listed service areas?",
    "Yes. If you are near Clermont, Groveland, Minneola, Mascotte, Four Corners, Leesburg, or surrounding Central Florida communities, call FIRM Restoration to confirm availability.",
  ],
];

export default function ServiceAreasPage() {
  return (
    <main>
      <InteriorHero
        eyebrow="Central Florida service areas"
        title="Emergency water damage restoration in Clermont, Groveland, and nearby communities."
        text="FIRM Restoration provides local response for water extraction, structural drying, flood cleanup, storm water intrusion, moisture detection, and mold-related concerns throughout Central Florida."
        panelTitle="Primary local coverage"
        highlights={["Clermont water damage restoration", "Groveland emergency water extraction", "Minneola structural drying", "Mascotte flood cleanup", "Four Corners and Leesburg response"]}
      />

      <section className="border-b hairline bg-white py-20">
        <div className="container">
          <SectionHeader
            eyebrow="Primary service areas"
            title="Local water damage response by community."
            text="These area summaries are written for property owners searching for a water damage company near them. The priority remains the same in every city: remove water, detect hidden moisture, dry affected materials, and explain the next step clearly."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {primaryAreas.map(([area, text]) => (
              <article key={area} className="border hairline bg-white p-6">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-black text-[#0f172a]">{area}</h2>
                  <MapPin className="h-5 w-5 shrink-0 text-[#ca8a04]" aria-hidden="true" />
                </div>
                <p className="mt-4 text-sm leading-7 text-[#475569]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b hairline bg-[#0f172a] py-20 text-white">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Emergency coverage"
            title="Service area matters most when water is still spreading."
            text="For active leaks, flooded rooms, storm water intrusion, or wet flooring, the fastest next step is to call. FIRM Restoration uses the initial call to understand the source, affected rooms, property location, and whether immediate water extraction or drying support is needed."
            inverse
          />
          <div className="grid gap-3">
            {["Water extraction for standing water", "Structural drying after leaks or flooding", "Moisture mapping behind walls and trim", "Flood cleanup for homes, rentals, and businesses", "Mold inspection when moisture was left behind"].map((item) => (
              <div key={item} className="flex items-start gap-3 border border-white/15 bg-white/[0.03] p-4 text-sm font-bold leading-6">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d8c6a7]" aria-hidden="true" />
                {item}
              </div>
            ))}
            <a href={`tel:${company.phoneHref}`} className="mt-2 inline-flex min-h-12 items-center justify-center bg-[#ca8a04] px-5 text-sm font-black text-white transition hover:bg-[#a16207]">
              <PhoneCall className="mr-2 h-4 w-4" aria-hidden="true" />
              Call {company.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="border-b hairline bg-white py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Nearby communities"
              title="Additional Central Florida coverage."
              text="FIRM Restoration also supports nearby communities when scheduling and emergency response availability allow. Call to confirm service for your property address."
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {company.widerAreas.map((area) => (
              <Link key={area} href="/contact" className="flex items-center justify-between border hairline p-5 font-black text-[#0f172a] transition-colors hover:border-[#ca8a04]">
                {area}
                <MapPin className="h-5 w-5 text-[#ca8a04]" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b hairline bg-[#f8fafc] py-20">
        <div className="container">
          <SectionHeader
            eyebrow="Local restoration coverage"
            title="Water damage help for the way Central Florida property owners search."
            text="FIRM Restoration is built around the urgent services local property owners look for after a leak, flood, storm, or moisture concern: water damage restoration in Clermont and Groveland, emergency water extraction, flood cleanup, structural drying, mold inspection, and mold remediation after water damage."
          />
        </div>
      </section>

      <FAQSection faqs={serviceAreaFaqs} />
      <CTASection title="Call for water damage help in your service area." text="Speak with FIRM Restoration about emergency water extraction, drying, flood cleanup, storm water intrusion, moisture investigation, or mold concerns in Clermont, Groveland, and nearby Central Florida communities." />
    </main>
  );
}
