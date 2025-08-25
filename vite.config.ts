import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Ajuste de base para publicação no GitHub Pages.
// Em desenvolvimento, usa base "/" para localhost funcionar
// Em produção/build, usa "/portifoliomelojrx/" para GitHub Pages
export default defineConfig(({ mode }) => {
  const base = mode === 'production' ? (process.env.BASE_PATH || "/portifoliomelojrx/") : "/";
  return {
    base,
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
  };
});
