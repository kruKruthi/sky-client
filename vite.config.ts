import { defineConfig } from "vitest/config";
import tailwindcss from '@tailwindcss/vite'
 
export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/types/setup.ts"],
  },
  plugins: [
    tailwindcss(),
  ],
});
