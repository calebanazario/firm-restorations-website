import type { Metadata } from "next";
import { PhoneCall } from "lucide-react";
import { ContactForm, Hero, RestorationVisual, SectionHeader } from "@/components/Sections";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact FIRM Restoration | Emergency Water Damage Help",
  description: "Call or request help from FIRM Restoration for emergency water extraction, water damage restoration, structural drying, storm damage, flood cleanup, mold inspection, and mold remediation.",
};

export default function ContactPage() {
  return (
    <main>
      <Hero
        title="Request Emergency Restoration Help"
        subtitle="Call now for active water damage or send the form with the property details. FIRM Restoration serves Clermont, Groveland, and Central Florida."
        imageLabel="Emergency Call Intake & Property Protection"
        imageSrc="/images/water-extraction-technician.png"
      />
      <section className="py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader eyebrow="Contact" title="For active water damage, calling is the fastest next step." />
            <a href={`tel:${company.phoneHref}`} className="inline-flex items-center bg-[#ca8a04] px-6 py-4 text-base font-black text-white">
              <PhoneCall className="mr-3 h-5 w-5" aria-hidden="true" />
              {company.phone}
            </a>
            <div className="mt-8 border hairline bg-[#f8fafc] p-6">
              <h2 className="text-xl font-black text-[#0f172a]">Service area map</h2>
              <div className="mt-5">
                <RestorationVisual title="Central Florida Response Coverage" variant="map" />
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
