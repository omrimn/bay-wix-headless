// @ts-check
import { defineConfig } from "astro/config";
import wix from "@wix/astro";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import cloudProviderFetchAdapter from "@wix/cloud-provider-fetch-adapter";
const isBuild = process.env.NODE_ENV == "production";


// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [wix(), react()],

  security: {
    checkOrigin: false
  },

  image: {
    domains: ["static.wixstatic.com", "www.wixstatic.com"],
  },
  
  vite: {
    plugins: [tailwindcss()],
  },
  
  ...(isBuild && { adapter: cloudProviderFetchAdapter({}) })
});
