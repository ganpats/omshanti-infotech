import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://omshantiinfotech.in";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/", // Disallow search engines from indexing API routes (if any)
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
