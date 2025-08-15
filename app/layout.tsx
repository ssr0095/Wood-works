import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
// import { Outfit } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import { ThemeProvider } from "next-themes";
// import { StructuredData } from "@/components/StructuredData";

const outfit = localFont({
  src: [
    {
<<<<<<< Updated upstream
      path: "./fonts/Outfit-Variable.woff2",
=======
      path: "./fonts/Outfit-Variable.ttf",
>>>>>>> Stashed changes
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
      "PSK WOOD WORKS — Trendy Streetwear & Oversized T-Shirts Online India",
    template: "%s | PSK WOOD WORKS",
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
<<<<<<< Updated upstream
    <html
      lang="en"
      className={`${outfit.variable} scroll-smooth scrollbar-custom`}
    >
      <body className="font-sans">
        <Suspense fallback={<Loading />}>{children}</Suspense>
=======
    <html lang="en" className={`${outfit.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem // toggle true
          disableTransitionOnChange
          // forcedTheme={Component.theme || null}
          scriptProps={{ 'data-cfasync': 'false' }} // require when cloudflare Rocket Loader used - make it work
        >
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </ThemeProvider>
        {/* <StructuredData /> */}
>>>>>>> Stashed changes
      </body>
    </html>
  );
}