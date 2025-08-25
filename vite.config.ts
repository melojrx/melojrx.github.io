import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Site de usuário GitHub Pages (melojrx.github.io) sempre em raiz '/'
export default defineConfig(() => ({
  // Caminhos relativos para evitar problemas de MIME/404 no Pages
  base: './',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [dyadComponentTagger(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
