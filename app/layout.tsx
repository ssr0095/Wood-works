import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
// import { Outfit } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { GoogleAnalytics } from "@next/third-parties/google";
import TermlyCMP from "@/components/TermlyCMP";
// import { StructuredData } from "@/components/StructuredData";

const WEBSITE_UUID = "ffa24119-adec-42ac-ba8f-92c78747c0a1";

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
      "PSK INTERIORS — Trendy Streetwear & Oversized T-Shirts Online India",
    template: "%s | PSK INTERIORS",
  },
  // description:
  //   "Shop the latest streetwear fashion at Cousins Fashion - premium oversized t-shirts, trendy clothing & accessories for men & women. Free shipping across India. 100% cotton comfort.",
  // keywords: [
  //   "Cousins Fashion",
  //   "streetwear",
  //   "oversized t-shirts",
  //   "Indian fashion brand",
  //   "unisex clothing",
  //   "urban streetwear",
  //   "affordable fashion India",
  // ],
  // authors: [{ name: "Sriram S" }],
  // robots: { index: true, follow: true },

  // // Open Graph
  // openGraph: {
  //   title: "PSK WOOD WORKS | Stylish & Affordable Clothing for Men & Women",
  //   description:
  //     "Explore fresh fashion drops for men and women. Shop stylish clothes, accessories, and more at Cousins Fashion.",
  //   url: "https://cousinsfashion.in/",
  //   siteName: "Cousins Fashion",
  //   images: [
  //     {
  //       url: "https://cousinsfashion.in/logos/og-image.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "PSK WOOD WORKS - Trendy Streetwear Collection",
  //     },
  //   ],
  //   locale: "en_IN",
  //   type: "website",
  // },

  // // Twitter
  // twitter: {
  //   card: "summary_large_image",
  //   title: "PSK WOOD WORKS — Trendy Looks for Men & Women",
  //   description:
  //     "Shop fashion-forward clothing and accessories online. Affordable prices. Fast shipping. Premium quality.",
  //   images: ["https://cousinsfashion.in/logos/og-image.jpg"],
  //   site: "@cousinsfashion",
  //   creator: "@cousinsfashion",
  // },

  // // Icons
  // icons: {
  //   icon: [
  //     { url: "/logos/favicon-96x96.png", sizes: "96x96", type: "image/png" },
  //     { url: "/logos/favicon.svg", type: "image/svg+xml" },
  //     { url: "/favicon.ico", type: "image/x-icon" },
  //   ],
  //   apple: "/logos/apple-touch-icon.png",
  // },

  // // Other metadata
  // manifest: "/site.webmanifest",
  // metadataBase: new URL("https://cousinsfashion.in"),
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
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
      <body className="font-sans select-none">
        <TermlyCMP websiteUUID={WEBSITE_UUID} />
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem // toggle true
          disableTransitionOnChange
          // forcedTheme={Component.theme || null}
          scriptProps={{ "data-cfasync": "false" }} // require when cloudflare Rocket Loader used - make it work
        >
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ThemeProvider>
        {/* <StructuredData /> */}
      </body>
      <GoogleAnalytics gaId="G-RP7KM1DC3H" />
    </html>
  );
}
