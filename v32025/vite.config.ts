import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import removeConsole from "vite-plugin-remove-console";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    VueI18nPlugin({
      include: resolve(__dirname, "./src/locales/**/*"),
    }),
    tailwindcss(),
    removeConsole(
      {
        includes: ["log", "info", "debug"],
      },
    ),
  ],
  server: {
    host: "0.0.0.0",
    open: true,
    port: 2233,
  },
  build: {
    cssMinify: "lightningcss",
    target: ["esnext"],
  },
  css: {
    transformer: "lightningcss",
    lightningcss: {
      targets: browserslistToTargets(browserslist(">= 0.25%")),
      drafts: {
        customMedia: true,
      },
      errorRecovery: true,
      nonStandard: {
        deepSelectorCombinator: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
