import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NoMore",
    short_name: "NoMore",
    description: "Build mental toughness and break habits",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#6366f1",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
