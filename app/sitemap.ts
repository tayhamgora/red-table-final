import type { MetadataRoute } from "next";
import { routes } from "@/lib/site";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return Object.values(routes).map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === routes.contact ? 0.9 : 0.8,
  }));
}
