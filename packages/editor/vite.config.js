import GenerateViteConfig from '@cdc/core/generateViteConfig.js'
import sharedMapData from '@cdc/map/viteSharedData.js'
import { moduleName } from './package.json'

// Editor doesn't want the default padding CSS
const config = GenerateViteConfig(moduleName, {}, {}, {
  css: '',
  aggregateExamples: [
    'chart',
    'dashboard',
    'data-bite',
    'data-table',
    'map',
    'markup-include',
    'waffle-chart'
  ]
})
config.plugins.push(sharedMapData())

export default config
