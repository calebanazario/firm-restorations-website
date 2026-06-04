import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { CTASection, FAQSection, Hero, SectionHeader } from "@/components/Sections";
import { company, servicePages } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.description,
    alternates: { canonical: `/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <main>
      <Hero title={service.hero} subtitle={service.description} imageLabel={service.imageLabel} imageSrc={service.imageSrc} />
      <section className="py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader eyebrow={service.title} title="Local mitigation, drying, and documentation from the first call." text={service.intro} />
          <div className="grid gap-3">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="flex gap-4 border hairline p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ca8a04]" aria-hidden="true" />
                <span className="font-bold text-[#0f172a]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#f8fafc] py-20">
        <div className="container">
          <SectionHeader eyebrow="Process" title={`How ${company.name} handles ${service.title.toLowerCase()}.`} />
          <div className="grid gap-4 md:grid-cols-4">
            {service.process.map((step, index) => (
              <div key={step} className="border hairline bg-white p-6">
                <div className="mb-8 text-4xl font-black text-[#d8c6a7]">{String(index + 1).padStart(2, "0")}</div>
                <p className="text-sm font-bold leading-7 text-[#0f172a]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <SectionHeader eyebrow="Local SEO" title={`${service.title} for Clermont, Groveland, and Central Florida.`} text={service.local} />
            <p className="max-w-3xl text-base leading-8 text-[#475569]">
              Whether the call comes from a homeowner, realtor, investor, landlord, business owner, or property manager, the priority is the same: respond quickly, reduce additional damage, document moisture conditions, and communicate clearly.
            </p>
          </div>
          <div className="overflow-hidden border hairline bg-[#f8fafc]">
            <img src={service.imageSrc} alt={service.imageAlt} className="aspect-[4/3] h-full w-full object-cover" />
          </div>
        </div>
      </section>
      <FAQSection faqs={service.faqs} />
      <CTASection title={`Need ${service.title.toLowerCase()} now?`} text={`Call ${company.name} at ${company.phone} for local help in Clermont, Groveland, Minneola, Mascotte, Four Corners, Leesburg, and nearby Central Florida communities.`} />
    </main>
  );
}
