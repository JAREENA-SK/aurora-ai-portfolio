import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shaik Jareena Portfolio",
    short_name: "SJ Portfolio",
    description:
      "Portfolio of Shaik Jareena — Senior Software Engineer, Project Manager and Automation Enthusiast.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#0B1020",
    theme_color: "#0B1020",
    categories: ["portfolio", "productivity", "business"],
    icons: [
      {
        src: "/icons/sj-app-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icons/sj-app-icon-maskable.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
