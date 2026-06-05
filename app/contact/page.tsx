import type { Metadata } from "next";
import { CheckCircle2, MapPin, PhoneCall } from "lucide-react";
import { ContactForm, Hero, SectionHeader } from "@/components/Sections";
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
              <h2 className="text-xl font-black text-[#0f172a]">Emergency service details</h2>
              <div className="mt-5 grid gap-3">
                {["Active leaks or standing water", "Water extraction and drying", "Moisture detection", "Flood cleanup", "Mold concerns after water damage"].map((item) => (
                  <div key={item} className="flex items-start gap-3 border hairline bg-white p-4 text-sm font-bold leading-6 text-[#0f172a]">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ca8a04]" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 border hairline bg-white p-6">
              <h2 className="text-xl font-black text-[#0f172a]">Primary service areas</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {company.serviceAreas.map((area) => (
                  <div key={area} className="flex items-center justify-between border hairline bg-[#f8fafc] p-4 text-sm font-black text-[#0f172a]">
                    {area}
                    <MapPin className="h-4 w-4 text-[#ca8a04]" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
