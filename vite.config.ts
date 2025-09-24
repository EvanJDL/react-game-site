import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://www.freetogame.com",
        changeOrigin: true,
        // /api/games → https://www.freetogame.com/api/games
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
