import type { MetadataRoute } from "next";
import { realisaties } from "@/lib/realisaties";

const BASE_URL = "https://www.mfkstukadoors.be";

export default function sitemap(): MetadataRoute.Sitemap {
  const realisatieUrls = realisaties.map((r) => ({
    url: `${BASE_URL}/realisaties/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...realisatieUrls,
  ];
}
