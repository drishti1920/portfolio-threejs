import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ghPages from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), ghPages()],
  server: {
    allowedHosts: true,
  },
  base:"https://github.com/drishti1920/portfolio-threejs"
});
