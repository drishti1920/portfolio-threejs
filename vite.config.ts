import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio-threejs/", // Use your repo name here
  server: {
    allowedHosts: true,
  },
});
