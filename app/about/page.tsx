import type { Metadata } from "next";
import { CTASection, Hero, SectionHeader } from "@/components/Sections";

export const metadata: Metadata = {
  title: "About Us | Local Water Damage Restoration",
  description: "Learn about FIRM Restoration, a local Central Florida restoration company focused on water damage, drying, storm cleanup, and mold prevention.",
};

export default function AboutPage() {
  return (
    <main>
      <Hero
        title="A Local Restoration Company Built for Urgent Property Protection"
        subtitle="FIRM Restoration helps Central Florida homeowners and property professionals respond to water damage with clear communication, moisture-focused restoration, and practical next steps."
        imageLabel="Local Restoration Team Standards"
      />
      <section className="py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader eyebrow="About FIRM Restoration" title="Focused on water damage, structural drying, and mold protection." />
          <div className="space-y-6 text-base leading-8 text-[#475569]">
            <p>
              FIRM Restoration was created to serve local Central Florida properties when water damage interrupts a home, rental, transaction, or business. The work begins with urgency, but it depends on discipline: identify where water traveled, remove what can be removed, dry what can be saved, and explain what happens next.
            </p>
            <p>
              The company serves Groveland, Clermont, Minneola, Mascotte, Four Corners, Leesburg, and nearby communities with a restoration process designed for homeowners, property managers, realtors, investors, landlords, and business owners.
            </p>
            <p>
              Mold services are presented as a natural extension of water damage restoration. When moisture is controlled early and monitored carefully, property owners have a better chance of preventing mold-related problems before they become larger issues.
            </p>
          </div>
        </div>
      </section>
      <CTASection title="Work with a local team that treats water damage with urgency and care." />
    </main>
  );
}
