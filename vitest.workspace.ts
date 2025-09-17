import { defineWorkspace } from 'vitest/config'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'

export default defineWorkspace([
  // Main Vitest config for regular tests
  'vitest.config.ts',
  // Storybook specific config
  {
    extends: 'vitest.config.ts',
    plugins: [
      storybookTest()
    ],
    test: {
      name: 'storybook',
      include: ['**/*.stories.?(m)[jt]s?(x)'],
      browser: {
        enabled: true,
        name: 'chromium',
        provider: 'playwright',
        headless: true
      }
    }
  }
])