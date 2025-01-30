import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
// import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // react(),
    reactRouter(),
    tailwindcss(),
  ],
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //     "@components": path.resolve(__dirname, "./src/components"),
  //     "@assets": path.resolve(__dirname, "./src/assets"),
  //     "@routes": path.resolve(__dirname, "./src/routes"),
  //     "@data": path.resolve(__dirname, "./src/data"),
  //   },
  // },
});
