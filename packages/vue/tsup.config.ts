import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  external: ['vue', '@lottiepro-web/core'],
  esbuildOptions(options) {
    options.jsx = 'preserve';
  }
}); 