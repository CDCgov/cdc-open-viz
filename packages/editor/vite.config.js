import GenerateViteConfig from '@cdc/core/generateViteConfig.js'
import { moduleName } from './package.json'

// Editor doesn't want the default padding CSS
export default GenerateViteConfig(moduleName, {}, {}, { css: '' })
