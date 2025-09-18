/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'

export default defineConfig({
  plugins: [react({ jsxRuntime: 'automatic' }), (svgr as any)({ exportAsDefault: true })],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    include: [
      'packages/**/src/**/*.{test,spec}.{js,ts,jsx,tsx}',
      'packages/**/tests/**/*.{test,spec}.{js,ts,jsx,tsx}',
      'packages/**/components/**/*.{test,spec}.{js,ts,jsx,tsx}',
      'packages/**/helpers/**/*.{test,spec}.{js,ts,jsx,tsx}'
    ],
    projects: [
      {
        test: {
          name: 'storybook',
          environment: 'jsdom',
          globals: true,
          setupFiles: ['./vitest.setup.ts'],
          browser: {
            enabled: true,
            instances: [
              {
                browser: 'chromium'
              }
            ],
            provider: 'playwright',
            headless: true
          }
        },
        plugins: [storybookTest()]
      }
    ]
  },
  define: {
    global: 'globalThis'
  }
})
