import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const base = (process.env as { VITE_APP_BASE?: string }).VITE_APP_BASE ?? '/';

export default defineConfig({
  plugins: [react()],
  base,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  assetsInclude: ['**/*.json'],
  define: {
    'process.env.BASE_URL': JSON.stringify(base),
  },
});
