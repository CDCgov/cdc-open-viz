import GenerateViteConfig from '@cdc/core/generateViteConfig.js'
import { moduleName } from './package.json'

export default GenerateViteConfig(moduleName, null, {
  jsxImportSource: '@emotion/react',
  babel: {
    plugins: ['@emotion/babel-plugin']
  }
})
