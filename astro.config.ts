import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://presentation.wolf-yuan.dev",
  integrations: [
    icon({
      iconDir: "public",
      include: {
        "material-symbols": [
          "home-rounded",
          "arrow-back-rounded",
          "favorite-rounded",
        ],
        "simple-icons": [
          "gitlab",
          "astro",
          "tailwindcss",
          "facebook",
          "instagram",
        ],
      },
    }),
  ],
  output: "static",
  image: {
    service: {
      entrypoint: "astro/assets/services/noop",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
