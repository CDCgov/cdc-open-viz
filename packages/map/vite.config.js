import GenerateViteConfig from '@cdc/core/generateViteConfig.js'
import { moduleName } from './package.json'
import sharedMapData from './viteSharedData.js'

const config = GenerateViteConfig(moduleName)
config.plugins.push(sharedMapData())

export default config
