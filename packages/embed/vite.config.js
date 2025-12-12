import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// For multi-page setup, we need custom config instead of generateViteConfig
// since that's designed for single-entry library builds

export default defineConfig(({ mode }) => ({
  plugins: [react()],

  base: mode === 'production' ? '/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/' : '/',

  server: {
    port: 8080
  },

  build: {
    ...(mode === 'production'
      ? {
          rollupOptions: {
            input: {
              embed: resolve(__dirname, 'index.html'),
              generator: resolve(__dirname, 'generator.html'),
              helper: resolve(__dirname, 'src/embed-helper/index.js')
            },
            output: {
              entryFileNames: chunkInfo => {
                if (chunkInfo.name === 'helper') {
                  return 'embed-helper.js'
                }
                return '[name]-[hash].js'
              }
            }
          }
        }
      : {})
  }
}))
