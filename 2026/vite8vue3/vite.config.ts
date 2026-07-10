import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  experimental: {
    bundledDev: true,
    chunkImportMaps: true,
  },
  css: {
    // 明确声明使用 lightningcss，替换默认的 postcss
    transformer: "lightningcss",
    lightningcss: {
      // 可以在此处定义类似以前 autoprefixer/cssnano 的配置
      targets: {
        chrome: 108,
        safari: 16,
        firefox: 106,
      },
      // 启用 CSS 模块化功能
      cssModules: {
        pattern: "[name]__[local]_[hash]",
      },
    },
  },
  build: {
    // 在生产环境构建时同样使用 lightningcss 替代 esbuild 进行压缩
    cssMinify: "lightningcss",
  },
});
