import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const base = (process.env as { VITE_APP_BASE?: string }).VITE_APP_BASE ?? '/';

export default defineConfig({
  plugins: [react()],
  base,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
  assetsInclude: ['**/*.json'],
  define: {
    'process.env.BASE_URL': JSON.stringify(base),
  },
});
