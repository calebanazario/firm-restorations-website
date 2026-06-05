"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __firmGoogleAdsInitialized?: boolean;
  }
}

const GOOGLE_ADS_ID = "AW-18217069726";

export function GoogleAdsInitializer() {
  useEffect(() => {
    if (window.__firmGoogleAdsInitialized) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
      };

    window.gtag("js", new Date());
    window.gtag("config", GOOGLE_ADS_ID);
    window.__firmGoogleAdsInitialized = true;
  }, []);

  return null;
}
