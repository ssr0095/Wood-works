import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
// import { Outfit } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { GoogleAnalytics } from "@next/third-parties/google";
import StructuredData from "@/components/StructuredData";
// import TermlyCMP from "@/components/TermlyCMP";
// import { StructuredData } from "@/components/StructuredData";

// const WEBSITE_UUID = "ffa24119-adec-42ac-ba8f-92c78747c0a1";

const outfit = localFont({
  src: [
    {
      path: "./fonts/Outfit-Variable.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-outfit",
  display: "swap",
});

// Default metadata - can be overridden by child pages
export const metadata: Metadata = {
  title: {
    default:
      "PSK Interiors - Custom Interior Design & Carpentry Services | 25+ Years Experience",
    template: "%s | PSK Interiors",
  },
  description:
    "Transform your space with PSK Interiors' expert carpentry & interior design services. Modular kitchens, wardrobes, TV units, false ceilings & more. 1500+ projects completed. Free consultation.",
  keywords: [
    "interior design",
    "carpentry services",
    "modular kitchen",
    "custom wardrobes",
    "TV units",
    "false ceiling",
    "aluminium partitions",
    "interior contractors",
    "home renovation",
    "bedroom",
    "dining room",
    "home office",
  ],
  authors: [{ name: "Sriram S", url: "" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
  },
  // Open Graph
  openGraph: {
    title: "PSK Interiors - Custom Interior Design & Carpentry Services",
    description:
      "Expert interior design & carpentry with 25+ years experience. Custom kitchens, wardrobes, TV units & complete interior solutions. Free consultation available.",
    url: `https://${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}/`,
    siteName: "PSK Interiors",
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}/assets/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "PSK Interiors - Custom Interior Design & Carpentry Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "PSK Interiors - Custom Interior Design & Carpentry Services",
    description:
      "Transform your space with expert interior design. 25+ years experience, 1500+ projects completed.",
    images: [
      `https://${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}/assets/images/og-image-twitter.png`,
    ],
    site: "@pskinteriors",
    creator: "@pskinteriors",
  },

  // Icons
  icons: {
    icon: [
      { url: "/logos/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/logos/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/logos/apple-touch-icon.png",
  },

  // Other metadata
  manifest: `https://${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}/site.webmanifest`,
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}/`),
};

export const viewport: Viewport = {
  themeColor: "black",
  colorScheme: "dark",
  //   themeColor: [
  //   { media: '(prefers-color-scheme: light)', color: 'cyan' },
  //   { media: '(prefers-color-scheme: dark)', color: 'black' },
  // ],
};

const Sdata = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PSK Interiors",
  description:
    "Expert interior design and carpentry services specializing in modular kitchens, wardrobes, TV units, and complete interior solutions.",
  email: `${process.env.NEXT_PUBLIC_EMAIL}`,
  telephone: `${process.env.NEXT_PUBLIC_PHONE_TEXT}`,
  url: `https://${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}`,
  priceRange: "$$",
  areaServed: "India",
  serviceType: "Interior Design and Carpentry Services",
  foundingDate: "1999",
  numberOfEmployees: "25+",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "1500",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Interior Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Modular Kitchen Design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Wardrobes",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "TV Units & Entertainment Centers",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "False Ceiling & POP Designs",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Aluminium Partition Systems",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/*<script src="https://app.termly.io/resource-blocker/ffa24119-adec-42ac-ba8f-92c78747c0a1?autoBlock=on"></script>*/}
        <StructuredData data={Sdata} />
      </head>
      <body className="font-sans select-none">
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem // toggle true
          disableTransitionOnChange
          // forcedTheme={Component.theme || null}
          scriptProps={{ "data-cfasync": "false" }} // require when cloudflare Rocket Loader used - to make it work
        >
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ThemeProvider>
        {/* <TermlyCMP websiteUUID={WEBSITE_UUID} /> */}
        {/* <StructuredData /> */}
      </body>
      <GoogleAnalytics gaId="G-RP7KM1DC3H" />
    </html>
  );
}
