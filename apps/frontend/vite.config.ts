import { vitePluginErrorOverlay } from "@hiogawa/vite-plugin-error-overlay";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig((env) => ({
  plugins: [react(), vitePluginErrorOverlay()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        manualChunks(id) {
          if (id.includes("echarts")) {
            return "echarts";
          }
          if (id.includes("monday-sdk-js")) {
            return "monday-sdk-js";
          }
          if (id.includes("react")) {
            return "react";
          }
          if (id.includes("firebase")) {
            return "firebase";
          }
        },
      },
    },
  },
  define: {
    __IS_PRODUCTION__: JSON.stringify(env.mode === "production"),
  },
}));
