import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  server: { port: 8080 },
  build: {
    sourcemap: false,
    rollupOptions: {
      external: [ 'react', 'reactDOM' ],
      output: {
        chunkFileNames: '[name].js',
        globals: {
          react: 'React',
          reactDOM: 'ReactDOM'
        },
      },
    },
  },
  plugins: [
    react(),
    svgr({
      exportAsDefault: true
    })
  ]
})
