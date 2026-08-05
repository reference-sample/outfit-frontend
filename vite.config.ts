import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { checker } from "vite-plugin-checker";
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    createStyleImportPlugin({ resolvers: [VantResolver()] }),
    Components({
      resolvers: [VantResolver()],
    }),
    // 关闭TS实时类型检测，开发时不会弹窗报类型错误
    checker({
      typescript: false,
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  build: {
    // 打包分包
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name.split(".").pop();
          if (/png|jpe?g|gif|svg/i.test(ext)) {
            return `images/[name]-[hash].[ext]`;
          }
          return `assets/[name]-[hash].[ext]`;
        },
      },
    },
    // 开启gzip压缩
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // 打包删除console
      },
    },
  },
});
