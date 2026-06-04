import {
  BeforeAfterSection,
  CTASection,
  FAQSection,
  Hero,
  ImageFeature,
  MoldPrevention,
  ProcessSection,
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
        title="Emergency Water Damage Restoration in Clermont & Central Florida"
        subtitle="Fast response for water extraction, structural drying, moisture detection, flood cleanup, and restoration services throughout Central Florida."
        imageLabel="Water extraction technician restoring a home after water damage"
        imageSrc="/images/water-extraction-technician.png"
        secondaryCta
      />
      <WhoWeAreSection />
      <ServiceCards />
      <ImageFeature
        eyebrow="Water damage restoration"
        title="Water removal, drying, and moisture mapping come first."
        text="FIRM Restoration responds to active leaks, standing water, burst pipes, flood cleanup, and storm-related water intrusion with extraction, drying equipment, moisture readings, and documentation."
        imageSrc="/images/water-extraction-technician.png"
        imageAlt="Restoration technician extracting water from a residential floor"
      />
      <ProcessSection />
      <WhyChoose />
      <BeforeAfterSection />
      <MoldPrevention />
      <ImageFeature
        eyebrow="Mold remediation"
        title="Mold remediation is often the next concern when moisture was left behind."
        text="When water damage is not addressed quickly or dried properly, mold can become a secondary issue. FIRM Restoration supports mold inspection and remediation as part of a moisture-focused restoration plan."
        imageSrc="/images/mold-remediation-containment.png"
        imageAlt="Mold remediation containment with a technician in protective equipment"
        reverse
      />
      <ServiceAreaGrid />
      <ReviewSection />
      <FAQSection />
      <CTASection title="Request immediate water damage assistance." text="Call FIRM Restoration for emergency water extraction, structural drying, flood cleanup, moisture detection, and mold-related concerns after water damage in Clermont, Groveland, and nearby Central Florida communities." />
    </main>
  );
}
