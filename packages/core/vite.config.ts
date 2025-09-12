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
        accordion: resolve(__dirname, 'src/components/accordion/index.ts'),
        divider: resolve(__dirname, 'src/components/divider/index.ts'),
        stack: resolve(__dirname, 'src/components/stack/index.ts'),
        container: resolve(__dirname, 'src/components/container/index.ts'),
        checkbox: resolve(__dirname, 'src/components/checkbox/index.ts'),
        switch: resolve(__dirname, 'src/components/switch/index.ts'),
        textarea: resolve(__dirname, 'src/components/textarea/index.ts'),
        navbar: resolve(__dirname, 'src/components/navbar/index.ts'),
        breadcrumb: resolve(__dirname, 'src/components/breadcrumb/index.ts'),
        drawer: resolve(__dirname, 'src/components/drawer/index.ts'),
        radio: resolve(__dirname, 'src/components/radio/index.ts'),
        tabs: resolve(__dirname, 'src/components/tabs/index.ts'),
        select: resolve(__dirname, 'src/components/select/index.ts'),
        tooltip: resolve(__dirname, 'src/components/tooltip/index.ts'),
        toast: resolve(__dirname, 'src/components/toast/index.ts'),
        sidebar: resolve(__dirname, 'src/components/sidebar/index.ts'),
        row: resolve(__dirname, 'src/components/grid/index.ts'),
        popover: resolve(__dirname, 'src/components/popover/index.ts'),
        table: resolve(__dirname, 'src/components/table/index.ts'),
        form: resolve(__dirname, 'src/components/form/index.ts'),
        pagination: resolve(__dirname, 'src/components/pagination/index.ts'),
        alert: resolve(__dirname, 'src/components/alert/index.ts'),
        progress: resolve(__dirname, 'src/components/progress/index.ts'),
        loading: resolve(__dirname, 'src/components/loading/index.ts'),
        toastcontainer: resolve(__dirname, 'src/components/toast-container/index.ts'),
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
