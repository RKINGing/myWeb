import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 路径解析
import path, { resolve } from 'path'
// ElementPlus
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),

  ],
  // 设置别名
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },

});
