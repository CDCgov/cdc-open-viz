import GenerateViteConfig from '../../generateViteConfig.js'
import { moduleName } from './package.json'

let configOptions = {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js'
  }
}

export default GenerateViteConfig(moduleName, configOptions, {
  jsxImportSource: '@emotion/react',
  babel: {
    plugins: ['@emotion/babel-plugin']
  }
})
