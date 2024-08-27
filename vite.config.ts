import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5173"
      : "https://api.pan-dong.net/react/",
  build: {
    rollupOptions: {
      external: [/^src\//]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
});
