import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'LottiePro',
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`
    },
    rollupOptions: {
      external: ['vue', '@lottiepro-web/core'],
      output: {
        globals: {
          vue: 'Vue',
          '@lottiepro-web/core': 'LottieProCore'
        }
      }
    }
  }
}); 