import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['../../vitest.setup.ts'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/examples/private/**',
      '**/.storybook/**',
      '**/*.stories.*',
      '**/storybook-static/**'
    ]
  }
})
