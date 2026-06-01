import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { BeforeAfterSection, CTASection, FAQSection, Hero, ImageFeature, PropertyProfessionals, ReviewSection, SectionHeader, ServiceCards } from "@/components/Sections";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Service Areas | Water Damage Restoration Central Florida",
  description: "FIRM Restoration serves Clermont, Groveland, Minneola, Mascotte, Four Corners, Leesburg, and surrounding Central Florida communities.",
};

export default function ServiceAreasPage() {
  return (
    <main>
      <Hero
        title="Trusted Water Damage & Mold Remediation"
        subtitle="For Clermont, Groveland, and nearby Central Florida properties, FIRM Restoration brings extraction, drying, cleanup, inspection, remediation, and documentation when water damage or mold concerns threaten a home or business."
        imageLabel="Water extraction technician serving Central Florida properties"
        imageSrc="/images/water-extraction-technician.png"
      />
      <ImageFeature
        eyebrow="What we do"
        title="Help for the damage you can see and the moisture you can’t."
        text="A water or mold problem is stressful because you do not always know how far it went. FIRM Restoration checks the visible damage, investigates hidden moisture, dries affected materials, and explains when mold inspection or remediation should be part of the plan."
        imageSrc="/images/structural-drying-moisture-monitoring.png"
        imageAlt="Technician checking moisture levels with drying equipment in a water damaged room"
      />
      <ServiceCards />
      <BeforeAfterSection />
      <PropertyProfessionals />
      <section className="py-20">
        <div className="container">
          <SectionHeader
            eyebrow="Who we serve"
            title="Local service areas for property owners who need water damage or mold help."
            text="Service areas should support the decision, not replace the services. FIRM Restoration serves these communities with water damage restoration, drying, mold inspection, and mold remediation."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[...company.serviceAreas, ...company.widerAreas].map((area) => (
              <div key={area} className="flex items-center justify-between border hairline p-6 text-lg font-black text-[#0f172a]">
                {area}
                <MapPin className="h-5 w-5 text-[#ca8a04]" aria-hidden="true" />
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-base leading-8 text-[#475569]">
            FIRM Restoration supports water damage restoration Clermont FL, water damage restoration Groveland FL, emergency water extraction Clermont, flood cleanup Groveland, structural drying Central Florida, mold inspection Clermont FL, and mold remediation Clermont FL searches because the company is built around local property protection rather than distant call-center coverage.
          </p>
        </div>
      </section>
      <ReviewSection />
      <FAQSection />
      <CTASection title="Request immediate restoration service." text="Call FIRM Restoration for water damage, mold remediation, flood cleanup, storm damage, or moisture investigation in Clermont, Groveland, and nearby Central Florida communities." />
    </main>
  );
}
