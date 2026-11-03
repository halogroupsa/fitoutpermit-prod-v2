import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { RevealOnScroll } from "@/components/layout/reveal-on-scroll";
import { WhatsappFab } from "@/components/layout/whatsapp-fab";
import { BackToTop } from "@/components/layout/back-to-top";
import { SITE } from "@/lib/site";
import { organizationSchema, JsonLd } from "@/lib/schema";
import { GoogleTagManager } from "@/components/analytics/google-tag-manager";
import { IS_PRODUCTION_SITE } from "@/lib/deployment";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Fit-Out Permits Dubai | DM, DCD & Free Zone Approvals — FitOutPermits.ae",
    template: "%s · FitOutPermits.ae",
  },
  description: SITE.description,
  robots: {
    index: IS_PRODUCTION_SITE,
    follow: IS_PRODUCTION_SITE,
    googleBot: { index: IS_PRODUCTION_SITE, follow: IS_PRODUCTION_SITE },
  },
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "en_AE",
    images: [{ url: "/images/logo.png", width: 1660, height: 340, alt: "FitOutPermits.ae — Driven by Halo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
  icons: {
    icon: [{ url: "/fitoutpermits-favicon.png", type: "image/png", sizes: "512x512" }],
  },
  alternates: {
    canonical: "/",
  },
  keywords: [
    "fit out permit dubai",
    "fit out approval dubai",
    "dubai municipality approval",
    "dcd approval",
    "trakhees approval",
    "authority approvals dubai",
  ],
};

export const viewport: Viewport = {
  themeColor: "#f8f6f1",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager />
      </head>
      <body className="antialiased">
        <JsonLd data={organizationSchema()} />
        <SmoothScroll />
        <RevealOnScroll />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsappFab />
        <BackToTop />
      </body>
    </html>
  );
}
