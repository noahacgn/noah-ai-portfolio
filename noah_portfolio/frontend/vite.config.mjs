import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    outDir: "build",
    emptyOutDir: true,
    lib: {
      entry: "./src/index.jsx",
      formats: ["es"],
      fileName: "index-[hash]",
    },
    rollupOptions: {
      output: {
        assetFileNames: "style-[hash][extname]",
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom/client"],
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"],
    warmup: {
      clientFiles: ["./src/index.jsx"],
    },
  },
  plugins: [react()],
});
