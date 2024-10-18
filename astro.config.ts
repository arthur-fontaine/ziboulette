// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";
import { i18nRouting } from "./src/i18n/routing";

const BASE_URL = "https://www.ziboulette.org";

const notIncludedRoutes = Object.entries(i18nRouting).flatMap(
  ([lang, routeMapping]) =>
    Object.keys(routeMapping).map((route) => `${BASE_URL}/${lang}${route}/`),
);

// https://astro.build/config
export default defineConfig({
  site: BASE_URL,
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => !notIncludedRoutes.includes(page),
    }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: true,
      fallbackType: "rewrite",
    },
  },
});
