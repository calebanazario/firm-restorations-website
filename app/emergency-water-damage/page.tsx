import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  FileCheck2,
  Gauge,
  Home,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Wind,
} from "lucide-react";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Emergency Water Damage Help Clermont FL",
  description:
    "Emergency water damage restoration for burst pipes, flooded rooms, ceiling leaks, storm damage, wet flooring, and hidden moisture in Clermont and Central Florida.",
  alternates: { canonical: "/emergency-water-damage" },
};

const emergencySituations = [
  ["Burst pipe", "Water spreading through flooring, walls, cabinetry, or nearby rooms.", Droplets],
  ["Flooded room", "Standing water from plumbing failures, appliance leaks, or overflow events.", Home],
  ["Ceiling leak", "Water stains, dripping drywall, wet insulation, or sagging ceiling materials.", AlertTriangle],
  ["Storm damage", "Wind-driven rain, roof leaks, and interior water intrusion after severe weather.", Wind],
  ["Wet flooring", "Saturated carpet, wood, laminate, baseboards, and subfloor concerns.", Gauge],
  ["Hidden moisture", "Water that moved behind trim, under cabinets, or inside wall cavities.", ShieldCheck],
];

const processSteps = [
  ["01", "Call and describe the emergency", "Tell us what happened, which rooms are wet, and whether water is still entering the home."],
  ["02", "Remove water and check moisture", "We focus on extraction, affected materials, moisture readings, and stopping damage from spreading."],
  ["03", "Dry, monitor, and document", "Drying equipment, moisture monitoring, photos, and notes help guide repairs and insurance communication."],
];

const trustIndicators = [
  ["Local Central Florida Company", MapPin],
  ["Moisture Mapping & Structural Drying", Gauge],
  ["Insurance Documentation Assistance", FileCheck2],
  ["Residential & Commercial Properties", Home],
];

const faqs = [
  [
    "What should I do first when I find water damage?",
    "If it is safe, stop the water source, avoid electrical hazards, move valuables out of the wet area, and call for emergency water damage help. Fast action can reduce additional material damage.",
  ],
  [
    "Is visible water the only problem?",
    "No. Water can move under flooring, behind baseboards, into cabinets, and inside wall cavities. Moisture checks help determine what is still wet after standing water is removed.",
  ],
  [
    "Can water damage cause mold?",
    "Yes. Mold is a secondary concern when materials stay wet or are not dried properly. The first priority is water removal, moisture control, and structural drying.",
  ],
  [
    "Do you provide insurance documentation?",
    "FIRM Restoration can provide photos, moisture readings, drying notes, affected-area details, and other documentation that may support your insurance claim.",
  ],
  [
    "Do I need drying after water extraction?",
    "Usually, yes. Extraction removes visible water, but drywall, trim, subfloors, cabinets, and other materials may still hold moisture and need controlled drying.",
  ],
];

export default function EmergencyWaterDamagePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <main className="emergency-water-damage-page bg-white pb-20 text-[#1c1917] md:pb-0">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body:has(.emergency-water-damage-page) > header,
            body:has(.emergency-water-damage-page) > footer,
            body:has(.emergency-water-damage-page) > a[href^="tel:"].fixed {
              display: none;
            }
          `,
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="sticky top-0 z-40 border-b hairline bg-white">
        <div className="container flex h-[78px] items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center" aria-label="FIRM Restoration home">
            <img src="/images/firm-restoration-logo-transparent.png" alt="FIRM Restoration logo" className="h-[52px] w-auto object-contain sm:h-[58px]" />
          </Link>
          <a
            href={`tel:${company.phoneHref}`}
            className="inline-flex min-h-12 shrink-0 items-center justify-center bg-[#ca8a04] px-4 text-sm font-black text-white transition hover:bg-[#a16207] sm:px-5"
          >
            <PhoneCall className="mr-2 h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Call&nbsp;</span>
            {company.phone}
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#0f172a] text-white">
        <div className="absolute inset-0 opacity-25" aria-hidden="true">
          <div className="absolute inset-x-0 top-0 h-3 emergency-strip" />
          <div className="absolute bottom-0 right-0 h-72 w-72 border border-white/10" />
        </div>
        <div className="container relative grid gap-10 py-14 md:grid-cols-[1fr_0.82fr] md:items-center md:py-20">
          <div>
            <div className="mb-5 inline-flex items-center border border-white/15 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#d8c6a7]">
              <AlertTriangle className="mr-2 h-4 w-4" aria-hidden="true" />
              24/7 Emergency Water Damage Restoration
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
              Emergency Water Damage Restoration in Groveland, Clermont & Central Florida
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78 md:text-xl">
              Call FIRM Restoration for water extraction, structural drying, moisture checks, storm water cleanup, and insurance-friendly documentation in Clermont and nearby Central Florida communities. Available for emergency water damage response.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={`tel:${company.phoneHref}`} className="inline-flex min-h-14 items-center justify-center bg-[#ca8a04] px-6 text-base font-black text-white transition hover:bg-[#a16207]">
                <PhoneCall className="mr-2 h-5 w-5" aria-hidden="true" />
                Call Now: {company.phone}
              </a>
              <a href="#emergency-form" className="inline-flex min-h-14 items-center justify-center border border-white/25 bg-white/10 px-6 text-base font-black text-white transition hover:bg-white hover:text-[#0f172a]">
                Request Help Online
              </a>
            </div>
            <p className="mt-4 max-w-xl text-sm font-bold text-white/60">For water still entering the home, call now for immediate assistance.</p>
            <div className="mt-9 grid border border-white/15 bg-white/[0.03] sm:grid-cols-3">
              {["Water extraction", "Structural drying", "Moisture readings"].map((item) => (
                <div key={item} className="flex min-h-16 items-center gap-3 border-b border-white/15 p-4 text-sm font-black last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#d8c6a7]" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden border border-white/15 bg-white/5">
            <div className="relative">
              <img src="/images/water-extraction-technician.png" alt="Technician extracting water from residential flooring" className="aspect-[4/3] min-h-[340px] w-full object-cover object-[65%_center] md:min-h-[480px]" />
              <div className="image-scrim absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="mb-3 inline-flex bg-[#ca8a04] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white">Emergency response</div>
                <p className="max-w-sm text-xl font-black leading-tight">Remove water, find hidden moisture, start drying, and document the damage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b hairline bg-white">
        <div className="container grid gap-0 py-0 sm:grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map(([label, Icon]) => {
            const TrustIcon = Icon as typeof MapPin;
            return (
              <div key={label as string} className="flex min-h-20 items-center gap-3 border-b hairline p-5 last:border-b-0 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0">
                <TrustIcon className="h-5 w-5 shrink-0 text-[#ca8a04]" aria-hidden="true" />
                <span className="text-sm font-black text-[#0f172a]">{label as string}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-b hairline bg-white py-16 md:py-20">
        <div className="container">
          <SectionIntro eyebrow="Emergency situations" title="Water damage calls that need fast action." text="The visible water matters, but so does what has soaked into flooring, trim, drywall, and nearby rooms." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {emergencySituations.map(([title, text, Icon]) => {
              const SituationIcon = Icon as typeof Droplets;
              return (
                <div key={title as string} className="border hairline bg-[#f8fafc] p-6">
                  <SituationIcon className="h-7 w-7 text-[#ca8a04]" aria-hidden="true" />
                  <h3 className="mt-6 text-xl font-black text-[#0f172a]">{title as string}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#475569]">{text as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b hairline bg-[#f8fafc] py-16 md:py-20">
        <div className="container">
          <SectionIntro eyebrow="3-step process" title="A simple response when the house is wet." />
          <div className="grid gap-4 md:grid-cols-3">
            {processSteps.map(([number, title, text]) => (
              <div key={number} className="border hairline bg-white p-7">
                <div className="mb-8 text-5xl font-black text-[#d8c6a7]">{number}</div>
                <h3 className="text-xl font-black text-[#0f172a]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#475569]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b hairline bg-white py-16 md:py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionIntro
              eyebrow="Insurance documentation"
              title="Photos, moisture readings, and drying notes for a clearer claim file."
              text="Water damage claims often need more than a description of what happened. FIRM Restoration documents affected areas, moisture conditions, equipment placement, drying progress, and next steps."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {["Moisture readings", "Damage photos", "Drying notes", "Affected-area details"].map((item) => (
                <div key={item} className="flex items-center gap-3 border hairline bg-[#f8fafc] p-4 text-sm font-black text-[#0f172a]">
                  <FileCheck2 className="h-5 w-5 shrink-0 text-[#ca8a04]" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="border hairline bg-[#0f172a] p-6 text-white">
            <div className="flex items-center justify-between border-b border-white/15 pb-5">
              <div>
                <div className="text-xs font-black uppercase tracking-[0.16em] text-[#d8c6a7]">Documentation focus</div>
                <h3 className="mt-2 text-2xl font-black">What gets tracked</h3>
              </div>
              <ClipboardCheck className="h-9 w-9 text-[#d8c6a7]" aria-hidden="true" />
            </div>
            <div className="mt-5 grid gap-3">
              {["Where water traveled", "Which materials are wet", "How drying is progressing", "When mold inspection may be needed"].map((item) => (
                <div key={item} className="border border-white/15 bg-white/[0.04] p-4 text-sm font-bold text-white/82">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="emergency-form" className="border-b hairline bg-[#f8fafc] py-16 md:py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.82fr_1fr]">
          <div>
            <SectionIntro
              eyebrow="Request emergency help"
              title="Tell us what happened."
              text={`Available for emergency water damage response. For active water damage, call ${company.phone}. If you cannot call right now, send the form and include the affected rooms, water source, and whether water is still entering the home.`}
            />
            <a href={`tel:${company.phoneHref}`} className="inline-flex min-h-12 items-center justify-center bg-[#0f172a] px-5 text-sm font-black text-white transition hover:bg-[#17243a]">
              <PhoneCall className="mr-2 h-4 w-4" aria-hidden="true" />
              Call {company.phone}
            </a>
          </div>
          <EmergencyContactForm />
        </div>
      </section>

      <section className="border-b hairline bg-white py-16 md:py-20">
        <div className="container">
          <SectionIntro
            eyebrow="Service areas"
            title="Emergency water damage response in Clermont and nearby Central Florida communities."
            text="FIRM Restoration helps homeowners with water extraction, drying, storm water cleanup, moisture checks, and mold concerns caused by improper drying."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[...company.serviceAreas, ...company.widerAreas].map((area) => (
              <div key={area} className="flex items-center justify-between border hairline p-5 font-black text-[#0f172a]">
                {area}
                <MapPin className="h-5 w-5 text-[#ca8a04]" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b hairline bg-[#f8fafc] py-16 md:py-20">
        <div className="container">
          <SectionIntro eyebrow="FAQ" title="Questions homeowners ask during a water damage emergency." />
          <div className="grid gap-3">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group border hairline bg-white p-6">
                <summary className="cursor-pointer list-none text-lg font-black text-[#0f172a]">
                  <span className="inline-flex w-full items-center justify-between gap-4">
                    {question}
                    <span className="text-[#ca8a04]">+</span>
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#475569]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f172a] py-16 text-white">
        <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="max-w-2xl text-3xl font-black tracking-tight md:text-5xl">Need emergency water damage help now?</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
              Call FIRM Restoration for burst pipes, flooded rooms, ceiling leaks, storm water intrusion, wet flooring, hidden moisture, and mold concerns caused by improper drying. Call now for immediate assistance.
            </p>
          </div>
          <a href={`tel:${company.phoneHref}`} className="inline-flex min-h-14 shrink-0 items-center justify-center bg-[#ca8a04] px-6 text-base font-black text-white transition hover:bg-[#a16207]">
            <PhoneCall className="mr-2 h-5 w-5" aria-hidden="true" />
            Call {company.phone}
          </a>
        </div>
      </section>

      <a
        href={`tel:${company.phoneHref}`}
        className="fixed inset-x-3 bottom-3 z-50 flex min-h-14 items-center justify-center bg-[#ca8a04] px-5 text-base font-black text-white shadow-2xl md:hidden"
      >
        <PhoneCall className="mr-2 h-5 w-5" aria-hidden="true" />
        Call Now: {company.phone}
      </a>
      <a
        href={`tel:${company.phoneHref}`}
        className="fixed bottom-5 right-5 z-50 hidden border hairline bg-white px-5 py-4 text-sm font-black text-[#0f172a] shadow-xl transition hover:border-[#ca8a04] md:inline-flex md:items-center"
      >
        <PhoneCall className="mr-2 h-4 w-4 text-[#ca8a04]" aria-hidden="true" />
        Call now: {company.phone}
      </a>
    </main>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.14em] text-[#a16207]">{eyebrow}</div>
      <h2 className="text-3xl font-black leading-tight tracking-tight text-[#0f172a] md:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-8 text-[#475569] md:text-lg">{text}</p> : null}
    </div>
  );
}

function EmergencyContactForm() {
  return (
    <form className="grid gap-4 border hairline bg-white p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-[#0f172a]">
          Name
          <input className="min-h-12 border hairline px-3 font-normal outline-none focus:border-[#ca8a04]" name="name" type="text" autoComplete="name" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#0f172a]">
          Phone Number
          <input className="min-h-12 border hairline px-3 font-normal outline-none focus:border-[#ca8a04]" name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-[#0f172a]">
        Property Address
        <input className="min-h-12 border hairline px-3 font-normal outline-none focus:border-[#ca8a04]" name="property-address" type="text" autoComplete="street-address" />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-[#0f172a]">
          Type of Water Damage
          <select className="min-h-12 border hairline px-3 font-normal outline-none focus:border-[#ca8a04]" name="water-damage-type" defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Burst pipe</option>
            <option>Flooded room</option>
            <option>Ceiling leak</option>
            <option>Storm damage</option>
            <option>Wet flooring</option>
            <option>Hidden moisture</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#0f172a]">
          Is water still entering?
          <select className="min-h-12 border hairline px-3 font-normal outline-none focus:border-[#ca8a04]" name="active-water" defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Yes</option>
            <option>No</option>
            <option>Not sure</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-[#0f172a]">
        What areas are wet?
        <textarea className="min-h-32 border hairline p-3 font-normal outline-none focus:border-[#ca8a04]" name="message" />
      </label>
      <button type="submit" className="min-h-12 cursor-pointer bg-[#0f172a] px-5 text-sm font-black text-white transition-colors duration-200 hover:bg-[#17243a]">
        Request Emergency Help
      </button>
      <p className="text-xs leading-6 text-[#64717f]">For active water damage, call {company.phone} for the fastest response.</p>
    </form>
  );
}
