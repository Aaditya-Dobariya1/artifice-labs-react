import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["swiper"],
  },
  plugins: [react(), svgr()],
});