import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite is the build tool: it runs the dev server and bundles the site for production.
export default defineConfig({
  plugins: [react()],
});
