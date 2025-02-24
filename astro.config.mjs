import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  plugins: [tailwindcss()],

  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: vercel(),
});
