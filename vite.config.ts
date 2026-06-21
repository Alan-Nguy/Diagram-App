import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import agents from "agents/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [agents(), react(), cloudflare(), tailwindcss()],
});
