import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Goldika - Buy and Sell Gold",
    short_name: "Goldika",
    description:
      "Experience seamless gold trading on Goldika. Created by @Ajahann (on GITHUB).",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/logo192.jpg",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/logo1024.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
  };
}
