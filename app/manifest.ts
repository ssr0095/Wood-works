import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PSK Interiors",
    short_name: "PSK Interiors",
    description:
      "Expert interior design & carpentry with 25+ years experience. Custom kitchens, wardrobes, TV units & complete interior solutions. Free consultation available.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
