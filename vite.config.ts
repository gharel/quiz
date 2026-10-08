import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Publié sur https://gharel.github.io/quiz/
export default defineConfig({
  base: '/quiz/',
  plugins: [react()],
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 700,
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
} as Parameters<typeof defineConfig>[0]);
