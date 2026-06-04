import {
  BeforeAfterSection,
  CTASection,
  FAQSection,
  Hero,
  ImageFeature,
  MoldPrevention,
  ProcessSection,
  PropertyProfessionals,
  ReviewSection,
  ServiceAreaGrid,
  ServiceCards,
  WhoWeAreSection,
  WhyChoose,
} from "@/components/Sections";

export default function HomePage() {
  return (
    <main>
      <Hero
        title="Trusted Water Damage & Mold Remediation"
        subtitle="FIRM Restoration helps Clermont, Groveland, and Central Florida homeowners, landlords, property managers, and businesses recover from water damage and address mold risks with careful inspection, containment, and remediation."
        imageLabel="Water extraction technician restoring a home after water damage"
        imageSrc="/images/water-extraction-technician.png"
      />
      <WhoWeAreSection />
      <ServiceCards />
      <ImageFeature
        eyebrow="Water damage restoration"
        title="Water damage restoration is the core of the response."
        text="FIRM Restoration removes water, checks how far moisture traveled, places drying equipment, monitors materials, and documents the work so owners know what happened and what comes next."
        imageSrc="/images/water-extraction-technician.png"
        imageAlt="Restoration technician extracting water from a residential floor"
      />
      <ProcessSection />
      <WhyChoose />
      <BeforeAfterSection />
      <MoldPrevention />
      <ImageFeature
        eyebrow="Mold remediation"
        title="Mold remediation matters when moisture was missed or left behind."
        text="When water damage is not dried correctly, mold can become the next problem. FIRM Restoration supports mold inspection and remediation with containment-minded work practices, moisture correction, and clear communication."
        imageSrc="/images/mold-remediation-containment.png"
        imageAlt="Mold remediation containment with a technician in protective equipment"
        reverse
      />
      <ServiceAreaGrid />
      <PropertyProfessionals />
      <ReviewSection />
      <FAQSection />
      <CTASection title="Request immediate restoration service." text="Call FIRM Restoration for water damage, extraction, drying, flood cleanup, storm damage, mold inspection, or mold remediation in Clermont, Groveland, and nearby Central Florida communities." />
    </main>
  );
}
