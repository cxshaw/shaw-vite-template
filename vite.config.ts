// @ts-ignore
import path from "path";
import { defineConfig } from "vite";
import { createStyleImportPlugin } from "vite-plugin-style-import";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createStyleImportPlugin({
      resolves: [
        // AntdResolve(),
      ],
    }),
  ],
  server: {
    // 可以开启 HTTPS 测试 wss 接口
    // https: true,
    cors: true,
  },
  resolve: {
    alias: [
      {
        find: "@/routes",
        replacement: path.resolve(__dirname, "./src/common"),
      },
      {
        find: "@/layouts",
        replacement: path.resolve(__dirname, "./src/layouts"),
      },
      {
        find: "@/pages",
        replacement: path.resolve(__dirname, "./src/pages"),
      },
      {
        find: "@/components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
      {
        find: "@/routes",
        replacement: path.resolve(__dirname, "./src/routes"),
      },
      {
        find: "@/types",
        replacement: path.resolve(__dirname, "./src/types"),
      },
      {
        find: "@/api",
        replacement: path.resolve(__dirname, "./src/api"),
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
      {
        find: "@/contexts",
        replacement: path.resolve(__dirname, "./src/contexts"),
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
        additionalData: '@import "./src/styles/var.less";',
      },
    },
  },
});
