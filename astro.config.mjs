// @ts-check

import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    mdx(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  output: "server",
  adapter: cloudflare(),
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
});
