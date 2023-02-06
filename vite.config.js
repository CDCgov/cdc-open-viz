// Dummy file for Storybook setup to detect Vite environment ONLY!
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' // SVG Support

export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true
    })
  ]
})
