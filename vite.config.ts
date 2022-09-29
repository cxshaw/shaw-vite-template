// @ts-ignore
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    // 可以开启 HTTPS 测试 wss 接口
    // https: true,
    cors: true,
  },
  resolve: {
    alias: [
      {
        find: "@/pages",
        replacement: path.resolve(__dirname, "./src/pages"),
      },
      {
        find: "@/components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
      {
        find: "@/types",
        replacement: path.resolve(__dirname, "./src/types"),
      },
      {
        find: "@/utils",
        replacement: path.resolve(__dirname, "./src/utils"),
      },
      {
        find: "@/styles",
        replacement: path.resolve(__dirname, "./src/styles"),
      },
      {
        find: "@/hooks",
        replacement: path.resolve(__dirname, "./src/hooks"),
      },
    ],
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
