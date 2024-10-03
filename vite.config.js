/* eslint-disable no-undef */
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    base: mode === "production" ? "/" : "/", // Ensure correct base path
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined, // This helps avoid some chunk issues during deployment
        },
      },
    },
    server: {
      watch: {
        usePolling: true, // Fixes certain environments like Docker, VMs, etc.
      },
      open: true, // Automatically opens the app in the browser during dev
    },
  };
});
