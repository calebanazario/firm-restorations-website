import Link from "next/link";
import { AlertTriangle, ArrowRight, CheckCircle2, Clock, FileCheck2, Gauge, MapPin, PhoneCall, ShieldCheck } from "lucide-react";
import { Button, CallButton } from "@/components/Button";
import { company, homeFaqs, iconMap, reviews, servicePages } from "@/lib/data";

export function Hero({
  title,
  subtitle,
  imageLabel = "Documented restoration response",
  imageSrc = "/images/water-extraction-technician.png",
}: {
  title: string;
  subtitle: string;
  imageLabel?: string;
  imageSrc?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#0f172a] text-white">
      <div className="absolute inset-0 opacity-25" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-3 emergency-strip" />
        <div className="absolute bottom-0 right-0 h-72 w-72 border border-white/10" />
      </div>
      <div className="container relative grid gap-10 py-16 md:grid-cols-[1fr_0.88fr] md:items-center md:py-20">
        <div>
          <div className="mb-6 inline-flex items-center border border-white/15 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#d8c6a7]">
            <Clock className="mr-2 h-4 w-4" aria-hidden="true" />
            Trusted restoration response
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78 md:text-xl">{subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CallButton />
          </div>
          <p className="mt-4 max-w-xl text-sm font-bold text-white/58">For active leaks, standing water, storm intrusion, or mold concerns, calling is the fastest way to start.</p>
          <div className="mt-8 overflow-hidden border border-white/15 bg-white md:hidden">
            <img src={imageSrc} alt={imageLabel} className="aspect-[16/10] w-full object-cover" />
          </div>
          <div className="mt-10 grid overflow-hidden border border-white/15 bg-white/[0.03] md:grid-cols-4">
            {["Water Damage Restoration", "Mold Remediation", "Structural Drying", "Insurance-Friendly Documentation"].map((item) => (
              <div key={item} className="flex min-h-20 items-center gap-3 border-b border-white/15 p-5 text-sm font-black text-white md:border-b-0 md:border-r last:md:border-r-0">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#d8c6a7]" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <div className="overflow-hidden border border-white/15 bg-white/5">
            <div className="relative">
              <img src={imageSrc} alt={imageLabel} className="aspect-[4/5] w-full object-cover" />
              <div className="image-scrim absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="mb-3 inline-flex bg-[#ca8a04] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white">Water Damage • Mold Remediation</div>
                <p className="max-w-sm text-xl font-black leading-tight">Extraction, drying, cleanup, containment, and documentation for property owners who need clarity fast.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ImageFeature({
  title,
  text,
  imageSrc,
  imageAlt,
  eyebrow = "Restoration work",
  reverse = false,
}: {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  eyebrow?: string;
  reverse?: boolean;
}) {
  return (
    <section className="border-b hairline bg-white py-20">
      <div className={`container grid gap-10 md:grid-cols-2 md:items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
        <div className="overflow-hidden border hairline bg-[#f8fafc]">
          <img src={imageSrc} alt={imageAlt} className="aspect-[4/3] h-full w-full object-cover" />
        </div>
        <div>
          <SectionHeader eyebrow={eyebrow} title={title} text={text} />
          <div className="grid gap-3 text-sm font-bold text-[#17202a] sm:grid-cols-2">
            {["Water extraction", "Structural drying", "Moisture documentation", "Mold prevention"].map((item) => (
              <div key={item} className="border hairline bg-[#f8fafc] p-4">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function RestorationVisual({ title, variant = "response" }: { title: string; variant?: "response" | "moisture" | "map" | "drying" }) {
  const rows =
    variant === "map"
      ? [
          ["Clermont", "Primary response area"],
          ["Groveland", "Primary response area"],
          ["Minneola", "Nearby coverage"],
          ["Leesburg", "Nearby coverage"],
        ]
      : variant === "moisture"
        ? [
            ["Moisture readings", "Documented"],
            ["Drying equipment", "Placed by material need"],
            ["Humidity checks", "Monitored"],
            ["Mold prevention", "Reviewed"],
          ]
        : variant === "drying"
          ? [
              ["Air movement", "Balanced"],
              ["Dehumidification", "Active"],
              ["Affected rooms", "Tracked"],
              ["Dry standard", "Targeted"],
            ]
          : [
              ["Initial call", "Prioritized"],
              ["Affected areas", "Inspected"],
              ["Photos and notes", "Captured"],
              ["Next steps", "Explained"],
            ];

  return (
    <div className="field-visual border hairline bg-white p-5 shadow-sm" role="img" aria-label={title}>
      <div className="flex items-center justify-between border-b hairline pb-4">
        <div>
          <div className="text-xs font-black uppercase tracking-[0.16em] text-[#a16207]">FIRM Restoration</div>
          <div className="mt-1 text-xl font-black text-[#0f172a]">{title}</div>
        </div>
        <ShieldCheck className="h-8 w-8 text-[#ca8a04]" aria-hidden="true" />
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-52 border hairline bg-[#f8fafc] p-4">
          <div className="absolute left-6 top-6 h-16 w-24 border-2 border-[#ca8a04]/70" />
          <div className="absolute bottom-8 left-12 h-20 w-32 border border-[#0f172a]/20" />
          <div className="absolute right-8 top-14 h-28 w-20 border border-[#0f172a]/20" />
          <div className="absolute bottom-12 right-10 h-3 w-20 bg-[#ca8a04]" />
          <div className="absolute left-6 right-6 top-1/2 border-t border-dashed border-[#0f172a]/20" />
          <div className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-[0.12em] text-[#64717f]">Property moisture map</div>
        </div>
        <div className="grid gap-3">
          {rows.map(([label, value]) => (
            <div key={label} className="grid grid-cols-[1fr_auto] gap-3 border hairline bg-[#f8fafc] p-3 text-sm">
              <span className="font-bold text-[#1c1917]">{label}</span>
              <span className="text-right font-bold text-[#a16207]">{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 border hairline text-center text-xs font-bold uppercase tracking-[0.1em] text-[#64717f]">
        <div className="border-r hairline p-3">Inspect</div>
        <div className="border-r hairline p-3">Document</div>
        <div className="p-3">Dry</div>
      </div>
    </div>
  );
}

export function SectionHeader({ eyebrow, title, text, inverse = false }: { eyebrow?: string; title: string; text?: string; inverse?: boolean }) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow ? <div className="mb-3 text-xs font-black uppercase tracking-[0.14em] text-[#a16207]">{eyebrow}</div> : null}
      <h2 className={`text-3xl font-black leading-tight tracking-tight md:text-5xl ${inverse ? "text-white" : "text-[#0f172a]"}`}>{title}</h2>
      {text ? <p className={`mt-4 text-base leading-8 md:text-lg ${inverse ? "text-white/75" : "text-[#475569]"}`}>{text}</p> : null}
    </div>
  );
}

export function ServiceCards() {
  const waterServices = servicePages.filter((service) => !service.slug.includes("mold"));
  const moldServices = servicePages.filter((service) => service.slug.includes("mold"));

  const renderCard = (service: (typeof servicePages)[number]) => {
    const Icon = iconMap[service.icon as keyof typeof iconMap];
    const isMold = service.slug.includes("mold");
    return (
      <Link key={service.slug} href={`/${service.slug}`} className="group flex min-h-80 cursor-pointer flex-col border hairline bg-white p-6 transition-colors duration-200 hover:border-[#ca8a04] hover:bg-[#f8fafc]">
        <div className="mb-8 flex h-14 w-14 items-center justify-center border hairline bg-[#0f172a]">
          <Icon className="h-7 w-7 text-[#d8c6a7]" aria-hidden="true" />
        </div>
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="h-1.5 w-16 bg-[#ca8a04]" aria-hidden="true" />
          <span className="border hairline px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-[#475569]">{isMold ? "Mold" : "Water"}</span>
        </div>
        <h3 className="text-xl font-black text-[#0f172a]">{service.title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#475569]">{service.description}</p>
        <span className="mt-auto inline-flex pt-6 text-sm font-bold text-[#0f172a]">
          Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </Link>
    );
  };

  return (
    <section id="services" className="border-b hairline bg-white py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Restoration services"
          title="When damage disrupts the property, these are the calls we handle."
          text="From an active leak to a mold concern that needs answers, FIRM Restoration helps owners understand what is affected, what needs to happen next, and how to move the property toward a cleaner, drier, safer condition."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {waterServices.map(renderCard)}
          {moldServices.map(renderCard)}
        </div>
      </div>
    </section>
  );
}

export function WhoWeAreSection() {
  return (
    <section className="border-b hairline bg-white py-20">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Who we are"
            title="A local restoration company built for stressful property damage calls."
            text="FIRM Restoration serves homeowners, landlords, property managers, realtors, investors, and business owners who need calm guidance when water damage or mold concerns interrupt a property."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {["Locally focused", "Clear next steps", "Documented moisture conditions", "Residential and commercial"].map((item) => (
              <div key={item} className="border hairline bg-[#f8fafc] p-4 text-sm font-black text-[#0f172a]">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden border hairline">
          <img src="/images/structural-drying-moisture-monitoring.png" alt="Technician checking moisture readings during structural drying" className="aspect-[4/3] w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export function BeforeAfterSection() {
  return (
    <section className="border-b hairline bg-[#f8fafc] py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Example before and after"
          title="What a stabilized property can look like after the right response."
          text="This example shows the kind of change a property owner is looking for: visible water addressed, hidden moisture checked, drying started, and the next steps explained clearly."
        />
        <div className="mb-6 border-l-4 border-[#ca8a04] bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-black text-[#0f172a]">Example: a supply line leak wets flooring, baseboards, and lower wall materials.</h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#475569]">
            The homeowner can see water on the floor, but the bigger question is what happened underneath trim, behind walls, and in nearby rooms. FIRM Restoration would focus on extraction, moisture readings, drying equipment, documentation, and whether mold inspection or remediation should be considered.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="overflow-hidden border hairline bg-white">
            <div className="relative">
              <img src="/images/water-extraction-technician.png" alt="Before restoration response with standing water being extracted" className="aspect-[4/3] w-full object-cover" />
              <div className="absolute left-4 top-4 bg-[#0f172a] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white">Before: active water damage</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black text-[#0f172a]">Wet flooring, baseboards, and nearby wall materials.</h3>
              <p className="mt-3 text-sm leading-7 text-[#475569]">Water has moved across the floor and may be sitting under trim or inside adjacent materials. The concern is not only what is visible, but what is still wet after the standing water is gone.</p>
              <div className="mt-5 grid grid-cols-2 gap-2 text-xs font-black uppercase tracking-[0.08em] text-[#475569]">
                {["Standing water", "Wet trim", "Hidden moisture", "Mold risk"].map((item) => (
                  <div key={item} className="border hairline bg-[#f8fafc] p-3">{item}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="overflow-hidden border hairline bg-white">
            <div className="relative">
              <img src="/images/structural-drying-moisture-monitoring.png" alt="After stabilization with drying equipment and moisture readings" className="aspect-[4/3] w-full object-cover" />
              <div className="absolute left-4 top-4 bg-[#ca8a04] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white">After: stabilized and documented</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black text-[#0f172a]">Water removed, drying plan active, moisture readings documented.</h3>
              <p className="mt-3 text-sm leading-7 text-[#475569]">Extraction, air movement, dehumidification, moisture monitoring, and mold-related recommendations give the owner a clearer path forward.</p>
              <div className="mt-5 grid grid-cols-2 gap-2 text-xs font-black uppercase tracking-[0.08em] text-[#475569]">
                {["Extraction complete", "Drying equipment", "Readings tracked", "Next steps clear"].map((item) => (
                  <div key={item} className="border hairline bg-[#f8fafc] p-3">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    ["01", "Call FIRM Restoration", "Reach a local restoration team and explain what happened, what rooms are affected, and whether water is still entering the property."],
    ["02", "Stop Further Damage", "We help stabilize the situation with extraction, moisture checks, containment decisions, and practical next steps."],
    ["03", "Restore Your Property", "Drying, cleanup, documentation, and restoration planning help move your home or business toward normal again."],
  ];
  return (
    <section className="bg-[#f8fafc] py-20">
      <div className="container">
        <SectionHeader eyebrow="When water damage happens" title="A clear response when the property feels uncertain." />
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map(([number, title, text]) => (
            <div key={number} className="border hairline bg-white p-7">
              <div className="mb-10 text-5xl font-black text-[#d8c6a7]">{number}</div>
              <h3 className="text-xl font-black text-[#0f172a]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#475569]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  const items = [
    ["Fast response", Clock],
    ["Moisture mapping", Gauge],
    ["Professional drying equipment", WindIcon],
    ["Insurance-friendly documentation", FileCheck2],
    ["Clear communication", PhoneCall],
    ["Local ownership", MapPin],
    ["Experienced restoration process", ShieldCheck],
  ];
  return (
    <section className="py-20">
      <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader eyebrow="Why choose FIRM" title="Trust comes from what gets checked, documented, and explained." />
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map(([label, Icon]) => {
            const RealIcon = Icon as typeof Clock;
            return (
              <div key={label as string} className="flex items-center gap-4 border hairline p-5">
                <RealIcon className="h-6 w-6 text-[#ca8a04]" aria-hidden="true" />
                <span className="font-bold text-[#0f172a]">{label as string}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WindIcon(props: React.ComponentProps<typeof AlertTriangle>) {
  return <AlertTriangle {...props} />;
}

export function MoldPrevention() {
  return (
    <section className="bg-[#0f172a] py-20 text-white">
      <div className="container grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="overflow-hidden border border-white/15">
          <img src="/images/mold-remediation-containment.png" alt="Mold remediation containment with protective barriers and filtration equipment" className="aspect-[4/3] h-full w-full object-cover" />
        </div>
        <div>
          <SectionHeader
            eyebrow="Moisture control"
            title="Prevent Mold Before It Starts"
            text="When water damage isn't properly dried, mold can begin growing within days. FIRM Restoration uses moisture monitoring, structural drying, and professional restoration techniques to help protect your property from mold-related issues."
            inverse
          />
          <Button href="/contact">Schedule an Inspection</Button>
        </div>
      </div>
    </section>
  );
}

export function ServiceAreaGrid() {
  return (
    <section className="border-b hairline bg-white py-20">
      <div className="container">
        <SectionHeader eyebrow="Local service areas" title="Water damage and mold response for Clermont, Groveland, and nearby communities." text="The work is restoration first: extraction, drying, cleanup, inspection, and remediation. These are the Central Florida communities where FIRM Restoration brings that response." />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {company.serviceAreas.map((area) => (
            <Link key={area} href="/service-areas" className="flex cursor-pointer items-center justify-between border hairline p-5 font-black text-[#0f172a] transition-colors duration-200 hover:border-[#ca8a04]">
              {area}
              <MapPin className="h-5 w-5 text-[#ca8a04]" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PropertyProfessionals() {
  return (
    <section className="bg-[#f8fafc] py-20">
      <div className="container grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeader
            eyebrow="Realtors and property managers"
            title="Emergency response for properties that need responsible communication."
            text="FIRM Restoration helps realtors, property managers, investors, and landlords respond to water emergencies, protect building materials, and keep owners informed with clear documentation."
          />
          <Button href="/contact" variant="dark">Contact FIRM Restoration</Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {["Realtors", "Property Managers", "Investors", "Landlords"].map((item) => (
            <div key={item} className="border hairline bg-white p-6">
              <BuildingIcon />
              <h3 className="mt-6 text-xl font-black text-[#0f172a]">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-[#475569]">Prompt restoration support, practical next steps, and communication that respects tenants, owners, and transaction timelines.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BuildingIcon() {
  return <ShieldCheck className="h-7 w-7 text-[#ca8a04]" aria-hidden="true" />;
}

export function ReviewSection() {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeader eyebrow="Reviews" title="Calm, clear help when water damage interrupts the day." />
        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.name} className="border hairline p-7">
              <blockquote className="text-base leading-8 text-[#475569]">"{review.text}"</blockquote>
              <figcaption className="mt-6 font-black text-[#0f172a]">{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection({ faqs = homeFaqs }: { faqs?: readonly (readonly string[])[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <section className="border-y hairline bg-[#f8fafc] py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container">
        <SectionHeader eyebrow="FAQ" title="Common questions before and after a water damage call." />
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
  );
}

export function CTASection({ title = "Water damage needs a fast, local response.", text = "Call FIRM Restoration for emergency water extraction, drying, cleanup, storm damage support, and mold-related moisture concerns in Central Florida." }) {
  return (
    <section className="bg-[#0f172a] py-16 text-white">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="max-w-2xl text-3xl font-black tracking-tight md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">{text}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <CallButton />
        </div>
      </div>
    </section>
  );
}

export function ContactForm() {
  return (
    <form className="grid gap-4 border hairline bg-white p-6">
      {["Name", "Phone Number", "Email", "Property Address"].map((label) => (
        <label key={label} className="grid gap-2 text-sm font-bold text-[#0f172a]">
          {label}
          <input className="min-h-12 border hairline px-3 font-normal outline-none focus:border-[#ca8a04]" type={label === "Email" ? "email" : "text"} name={label.toLowerCase().replaceAll(" ", "-")} />
        </label>
      ))}
      <label className="grid gap-2 text-sm font-bold text-[#0f172a]">
        Type of Damage
        <select className="min-h-12 border hairline px-3 font-normal outline-none focus:border-[#ca8a04]" name="type-of-damage" defaultValue="">
          <option value="" disabled>Select one</option>
          <option>Water damage</option>
          <option>Flooding</option>
          <option>Storm damage</option>
          <option>Mold concern</option>
          <option>Moisture investigation</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-[#0f172a]">
        Message
        <textarea className="min-h-32 border hairline p-3 font-normal outline-none focus:border-[#ca8a04]" name="message" />
      </label>
      <button type="submit" className="min-h-12 cursor-pointer bg-[#0f172a] px-5 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#17243a]">
        Request Emergency Help
      </button>
      <p className="text-xs leading-6 text-[#64717f]">For active water damage, call {company.phone} for the fastest response.</p>
    </form>
  );
}
