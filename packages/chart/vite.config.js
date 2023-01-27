import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

import packageInfo from './package.json'

export default defineConfig({
  server: { port: 8080 },
  build: {
    root: 'src',
    outDir: 'dist',
    write: false,
    sourcemap: false,
    chunkSizeWarningLimit: 99999,
    rollupOptions: {
      external: [ 'react', 'reactDOM' ],
      output: {
        globals: {
          react: 'React',
          reactDOM: 'ReactDOM'
        },
      },
    },
    lib: {
      name: packageInfo.main,
      entry: resolve(__dirname, `src/${packageInfo.main}.tsx`),
      formats: [ 'es', 'umd' ],
      fileName: () => `${packageInfo.main}.js`,
    },
  },
  plugins: [
    react(),
    svgr({
      exportAsDefault: true
    })
  ]
})
