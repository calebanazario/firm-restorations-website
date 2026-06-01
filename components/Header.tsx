import Link from "next/link";
import { Menu, PhoneCall, X } from "lucide-react";
import { company } from "@/lib/data";

const nav = [
  ["Services", "/#services"],
  ["Service Areas", "/service-areas"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="bg-[#0f172a] text-white">
        <div className="container flex min-h-9 flex-col justify-center gap-1 py-2 text-xs font-bold sm:flex-row sm:items-center sm:justify-between sm:py-0 sm:text-sm">
          <span>Water damage + mold response in Central Florida</span>
          <a href={`tel:${company.phoneHref}`} className="whitespace-nowrap text-white">Call now: {company.phone}</a>
        </div>
      </div>
      <div className="container flex h-[88px] items-center justify-between gap-5 border-b hairline">
        <Link href="/" className="flex items-center" aria-label="FIRM Restoration home">
          <img
            src="/images/firm-restoration-logo-transparent.png"
            alt="FIRM Restoration logo"
            className="h-[52px] w-auto object-contain sm:h-[60px]"
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-bold text-[#1c1917] transition-colors hover:text-[#a16207]">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${company.phoneHref}`}
            className="hidden items-center bg-[#0f172a] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#17243a] sm:inline-flex"
          >
            <PhoneCall className="mr-2 h-4 w-4" aria-hidden="true" />
            {company.phone}
          </a>
          <details className="group md:hidden">
            <summary className="list-none border border-[#d8c6a7] p-3 text-[#0f172a]" aria-label="Open navigation menu">
              <Menu className="h-5 w-5 group-open:hidden" aria-hidden="true" />
              <X className="hidden h-5 w-5 group-open:block" aria-hidden="true" />
            </summary>
            <div className="absolute inset-x-0 top-[124px] border-b hairline bg-white p-4 shadow-xl">
              <nav className="container grid gap-2" aria-label="Mobile navigation">
                {nav.map(([label, href]) => (
                  <Link key={href} href={href} className="border hairline px-4 py-3 text-sm font-bold text-[#0f172a]">
                    {label}
                  </Link>
                ))}
                <a href={`tel:${company.phoneHref}`} className="bg-[#0f172a] px-4 py-3 text-center text-sm font-bold text-white">
                  Call {company.phone}
                </a>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
