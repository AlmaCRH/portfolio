import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  plugins: [tailwindcss()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});
