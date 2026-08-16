import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Gas'Lam",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0C0F14",
    theme_color: "#0C0F14",
    icons: [{ src: "/icon", sizes: "32x32", type: "image/png" }],
  };
}
