import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://firmrestorations.com"),
  title: {
    default: "FIRM Restoration | Water Damage Restoration Clermont & Groveland FL",
    template: "%s | FIRM Restoration",
  },
  description:
    "Fast water damage restoration, emergency water extraction, flood cleanup, structural drying, storm damage restoration, mold inspection, and mold remediation in Clermont, Groveland, and Central Florida.",
  keywords: [
    "water damage restoration Clermont FL",
    "water damage restoration Groveland FL",
    "emergency water extraction Clermont",
    "flood cleanup Groveland",
    "structural drying Central Florida",
    "water damage company near me",
    "mold inspection Clermont FL",
    "mold remediation Clermont FL",
    "mold removal Groveland FL",
  ],
  openGraph: {
    title: "FIRM Restoration",
    description: "Local emergency restoration services for water, flood, storm, drying, and mold issues in Central Florida.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    telephone: company.phone,
    image: "https://firmrestorations.com/og-image.jpg",
    url: "https://firmrestorations.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Clermont",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: company.serviceAreas.map((area) => ({ "@type": "City", name: area })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    makesOffer: company.services.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.title },
    })),
  };

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WPTLVKBW');
          `}
        </Script>
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18217069726" strategy="beforeInteractive" />
        <Script id="google-ads-gtag" strategy="beforeInteractive">
          {`
            if (!window.__firmGoogleAdsInitialized) {
              window.dataLayer = window.dataLayer || [];
              window.gtag = window.gtag || function gtag(){window.dataLayer.push(arguments);}
              window.gtag('js', new Date());

              window.gtag('config', 'AW-18217069726');
              window.__firmGoogleAdsInitialized = true;
            }
          `}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WPTLVKBW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Header />
        {children}
        <Footer />
        <a
          href={`tel:${company.phoneHref}`}
          className="fixed inset-x-3 bottom-3 z-50 flex items-center justify-center bg-[#ca8a04] px-5 py-4 text-sm font-bold text-white shadow-2xl md:hidden"
        >
          Call Now: {company.phone}
        </a>
      </body>
    </html>
  );
}
