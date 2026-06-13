import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://aqmaar.academy";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/", "/static/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
