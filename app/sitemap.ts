import type { MetadataRoute } from "next";
import { deploy } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/generator-services",
    "/lubricants-filtration",
    "/industries",
    "/case-studies",
    "/about",
    "/safety-compliance",
    "/contact",
  ];
  const now = new Date();
  return routes.map((path) => ({
    url: `${deploy.url}${path}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
