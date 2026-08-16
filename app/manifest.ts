import type { MetadataRoute } from "next";
import { site, deploy } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Gas'Lam",
    description: site.description,
    start_url: `${deploy.basePath}/`,
    display: "standalone",
    background_color: "#0C0F14",
    theme_color: "#0C0F14",
    icons: [{ src: `${deploy.basePath}/icon`, sizes: "32x32", type: "image/png" }],
  };
}
