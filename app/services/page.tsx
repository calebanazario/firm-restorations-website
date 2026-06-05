import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2, Gauge, PhoneCall, Waves } from "lucide-react";
import { CTASection, InteriorHero, SectionHeader } from "@/components/Sections";
import { company, iconMap, servicePages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Water Damage Restoration Services Clermont & Central Florida",
  description:
    "FIRM Restoration provides emergency water damage restoration, water extraction, structural drying, flood cleanup, storm damage restoration, mold inspection, and mold remediation in Clermont, Groveland, and Central Florida.",
};

export default function ServicesPage() {
  const waterServices = servicePages.filter((service) => !service.slug.includes("mold"));
  const moldServices = servicePages.filter((service) => service.slug.includes("mold"));

  return (
    <main>
      <InteriorHero
        eyebrow="Restoration services"
        title="Emergency water damage restoration services for Clermont and Central Florida."
        text="FIRM Restoration helps homeowners and businesses respond to water damage with extraction, drying, moisture detection, flood cleanup, storm water response, and documentation. Mold inspection and remediation are available when unresolved moisture creates a secondary concern."
        panelTitle="What the first response focuses on"
        highlights={["Stop additional water damage", "Extract standing water", "Map moisture in walls and floors", "Dry affected building materials", "Document conditions for insurance"]}
      />

      <section className="border-b hairline bg-white py-20">
        <div className="container">
          <SectionHeader
            eyebrow="Primary services"
            title="Emergency water damage services come first."
            text="When water affects flooring, walls, trim, cabinets, or structural materials, the priority is to remove water, locate hidden moisture, dry affected areas, and document the response."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {waterServices.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <Link key={service.slug} href={`/${service.slug}`} className="group flex min-h-72 flex-col border hairline bg-white p-6 transition-colors hover:border-[#ca8a04] hover:bg-[#f8fafc]">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center border hairline bg-[#0f172a]">
                    <Icon className="h-7 w-7 text-[#d8c6a7]" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-black text-[#0f172a]">{service.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#475569]">{service.description}</p>
                  <span className="mt-auto inline-flex items-center pt-6 text-sm font-bold text-[#0f172a]">
                    Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b hairline bg-[#0f172a] py-20 text-white">
        <div className="container">
          <SectionHeader
            eyebrow="How the work connects"
            title="Water damage restoration is a sequence, not a single service."
            text="The right service depends on what happened, where water traveled, how long materials were wet, and whether moisture is still present behind finished surfaces."
            inverse
          />
          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["Call and stabilize", PhoneCall, "Identify the water source, affected rooms, safety concerns, and whether water is still entering the property."],
              ["Extract water", Waves, "Remove standing water from flooring, rooms, and affected areas before moisture spreads farther."],
              ["Map and dry", Gauge, "Use moisture detection, air movement, and dehumidification to dry affected materials."],
              ["Document progress", FileCheck2, "Capture readings, photos, drying notes, and next steps for the owner or claim file."],
            ].map(([title, Icon, text]) => {
              const StepIcon = Icon as typeof PhoneCall;
              return (
                <div key={title as string} className="border border-white/15 bg-white/[0.03] p-6">
                  <StepIcon className="h-7 w-7 text-[#d8c6a7]" aria-hidden="true" />
                  <h2 className="mt-6 text-xl font-black">{title as string}</h2>
                  <p className="mt-3 text-sm leading-7 text-white/75">{text as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b hairline bg-[#f8fafc] py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeader
              eyebrow="Secondary moisture services"
              title="Mold inspection and remediation when moisture creates a second concern."
              text="Mold services remain part of the restoration process, especially when water damage was missed, left untreated, or not dried correctly."
            />
            <div className="grid gap-3 text-sm font-bold text-[#0f172a]">
              {["Moisture source review", "Mold inspection", "Containment-minded remediation", "Prevention recommendations"].map((item) => (
                <div key={item} className="flex items-center gap-3 border hairline bg-white p-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#ca8a04]" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {moldServices.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <Link key={service.slug} href={`/${service.slug}`} className="group flex min-h-64 flex-col border hairline bg-white p-6 transition-colors hover:border-[#ca8a04]">
                  <Icon className="h-8 w-8 text-[#ca8a04]" aria-hidden="true" />
                  <h2 className="mt-6 text-xl font-black text-[#0f172a]">{service.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#475569]">{service.description}</p>
                  <span className="mt-auto inline-flex items-center pt-6 text-sm font-bold text-[#0f172a]">
                    Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionHeader
            eyebrow="Local response"
            title="Built around water damage restoration in Clermont, Groveland, and nearby Central Florida communities."
            text={`FIRM Restoration provides emergency water damage restoration and mold-related moisture services in ${company.serviceAreas.join(", ")} and surrounding areas. The services on this page support searches for water damage restoration Clermont FL, emergency water extraction Clermont, flood cleanup Groveland, structural drying Central Florida, and mold remediation after water damage.`}
          />
        </div>
      </section>

      <CTASection title="Call for emergency water damage service." text={`Speak with ${company.name} about water extraction, drying, flood cleanup, storm water intrusion, or moisture concerns in Central Florida.`} />
    </main>
  );
}
