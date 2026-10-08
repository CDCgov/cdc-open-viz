import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import svgr from 'vite-plugin-svgr'

const repositoryRoot = resolve(__dirname, '../../../../../../..')

export default defineConfig({
  root: repositoryRoot,
  plugins: [react({ jsxRuntime: 'automatic' }), (svgr as any)({ exportAsDefault: true })],
  resolve: {
    alias: [
      { find: /.*(?:^|\/)ui\/Icon$/, replacement: resolve(__dirname, 'stubs/Icon.tsx') },
      { find: /.*\.svg$/, replacement: resolve(__dirname, 'stubs/Svg.tsx') }
    ]
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [resolve(repositoryRoot, 'vitest.setup.ts')],
    include: ['packages/core/helpers/ver/tests/effective-config/audit/**/*.audit.tsx'],
    testTimeout: 30000
  },
  define: {
    global: 'globalThis'
  }
})
