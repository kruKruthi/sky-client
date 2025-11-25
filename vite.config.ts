import { defineConfig } from "vitest/config";
import react from '@vitejs/plugin-react';
 
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    coverage: {
      reporter: ['text', 'html'],
      reportsDirectory: './coverage',
      // exclude these files or folders from coverage
      exclude: [
        "**/postcss.config.ts",
        "**/tailwind.config.ts",
        "**/vite.config.ts",
        "**/eslint.config.js",
        "**/main.tsx",
        "**/*.d.ts",
        "**/vitest.d.ts",
        "**/App.tsx",
        "**/dist/**",
        "**/coverage/sky-client/**",
        "**/src/types/**",
        "**/src/graphql/**",
      ],
    },

  },
});