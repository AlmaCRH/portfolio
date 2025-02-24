import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  plugins: [tailwindcss()],

  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: vercel(),
});
