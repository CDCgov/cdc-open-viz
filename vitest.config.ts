/// <reference types="vitest" />
import { configDefaults, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'

const isQuickStorybookMode = process.env.COVE_QUICK_TESTS === '1'
const quickStorybookExcludePatterns = ['**/*.smoke.stories.{js,jsx,ts,tsx}']
const quickStorybookExclude = [...configDefaults.exclude, ...quickStorybookExcludePatterns]

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
          ...(isQuickStorybookMode ? { exclude: quickStorybookExclude } : {}),
          testTimeout: 600000,
          browser: {
            enabled: true,
            instances: [
              {
                browser: 'chromium',
                launch: {
                  args: ['--disable-web-security']
                }
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
