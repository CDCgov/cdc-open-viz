import { defineWorkspace } from 'vitest/config'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'

export default defineWorkspace([
  // Main Vitest config for regular tests
  'vitest.config.ts',
  // Storybook specific config (standalone, not extending base config)
  {
    plugins: [storybookTest()],
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
    define: {
      global: 'globalThis'
    }
  }
])
