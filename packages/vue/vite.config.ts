import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        // Treat all tags starting with 'mz-' as custom elements
        isCustomElement: (tag) => tag.startsWith('mz-')
      }
    }
  })],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'MaxzillaUIVue',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue', '@maxzilla/ui-core'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})