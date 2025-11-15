import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}`;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: ['/admin/', '/private/'], // Add any private pages
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
