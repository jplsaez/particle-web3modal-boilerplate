import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  envPrefix: ['VITE_', 'REACT_'],
  server: {
    host: '0.0.0.0',
  },
  define: {
    'process.env': process.env
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
  },
  build: {
      target: ["esnext"],
  },
})
