import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        button: resolve(__dirname, 'src/components/button/index.ts'),
        card: resolve(__dirname, 'src/components/card/index.ts'),
        input: resolve(__dirname, 'src/components/input/index.ts'),
        badge: resolve(__dirname, 'src/components/badge/index.ts'),
        avatar: resolve(__dirname, 'src/components/avatar/index.ts'),
        modal: resolve(__dirname, 'src/components/modal/index.ts'),
        styles: resolve(__dirname, 'src/styles/index.ts'),
      },
      formats: ['es'],
    },
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      external: ['lit', 'lit/decorators.js', 'lit/directives/class-map.js'],
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name]-[hash].js',
      },
    },
  },
  esbuild: {
    target: 'es2020',
  },
});