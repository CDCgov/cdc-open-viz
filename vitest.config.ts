/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react({ jsxRuntime: 'automatic' }),
    svgr({ exportAsDefault: true })
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    include: ['packages/**/src/**/*.{test,spec}.{js,ts,jsx,tsx}', 'packages/**/tests/**/*.{test,spec}.{js,ts,jsx,tsx}', 'packages/**/components/**/*.{test,spec}.{js,ts,jsx,tsx}', 'packages/**/helpers/**/*.{test,spec}.{js,ts,jsx,tsx}']
  },
  define: {
    global: 'globalThis'
  }
})