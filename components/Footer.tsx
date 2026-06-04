import Link from "next/link";
import { company } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t hairline bg-[#0f172a] pb-20 text-white md:pb-0">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <img
            src="/images/firm-restoration-logo-transparent.png"
            alt="FIRM Restoration logo"
            className="mb-5 h-auto w-56 object-contain"
          />
          <p className="max-w-md text-sm leading-7 text-white/75">
            Local water damage restoration, emergency extraction, structural drying, storm damage support, and mold services for Central Florida properties.
          </p>
          <a href={`tel:${company.phoneHref}`} className="mt-6 inline-flex bg-[#ca8a04] px-5 py-3 text-sm font-bold text-white">
            Call {company.phone}
          </a>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-black uppercase tracking-[0.12em]">Services</h2>
          <div className="grid gap-3">
            {company.services.map((service) => (
              <Link key={service.href} href={service.href} className="text-sm text-white/75 hover:text-white">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-black uppercase tracking-[0.12em]">Service Areas</h2>
          <p className="text-sm leading-7 text-white/75">{company.serviceAreas.join(", ")} and nearby Central Florida communities.</p>
          <Link href="/service-areas" className="mt-5 inline-flex text-sm font-bold text-[#d8c6a7]">
            View service areas
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-col gap-2 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} FIRM Restoration. All rights reserved.</span>
          <span>Emergency restoration support for homeowners and property professionals.</span>
        </div>
      </div>
    </footer>
  );
}
