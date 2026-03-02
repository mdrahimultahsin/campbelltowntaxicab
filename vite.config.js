import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 2500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (id.includes("react") || id.includes("react-dom") || id.includes("react-router")) {
            return "react-core";
          }

          if (id.includes("@react-google-maps/api") || id.includes("google-maps")) {
            return "maps";
          }

          if (id.includes("react-places-autocomplete")) return "places";

          if (id.includes("swiper")) return "swiper";

          if (id.includes("lottie-react")) return "lottie";

          if (id.includes("react-icons")) return "icons";

          if (id.includes("@emailjs/browser")) return "emailjs";

          return "vendor";
        },
      },
    },
  },
});