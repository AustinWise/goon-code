import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      build: {
        sourcemap: true,
        // sourcemapFile: 'source.map'
      },
      plugins: [
        react(),
        tailwindcss(),
        visualizer({
          emitFile: true,
          filename: 'stats.html',
          sourcemap: true,
        }),
      ],
      define: {
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
