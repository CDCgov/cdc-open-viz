import GenerateViteConfig from '../../generateViteConfig.js'
import { moduleName } from './package.json'
import react from '@vitejs/plugin-react'

export default GenerateViteConfig(moduleName, null, {
  jsxImportSource: '@emotion/react',
  babel: {
    plugins: ['@emotion/babel-plugin']
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js'
  }
})
