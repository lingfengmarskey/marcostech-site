import { defineConfig } from "astro/config";

export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja", "zh"],
    routing: {
      prefixDefaultLocale: true, // => /en 也会有（更统一）
    },
  },
});
