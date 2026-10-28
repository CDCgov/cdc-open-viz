import GenerateViteConfig from '@cdc/core/generateViteConfig.js'
import sharedMapData from '@cdc/map/viteSharedData.js'
import { moduleName } from './package.json'

// Dashboard uses is-dashboard-editor instead of is-editor for the padding selector
const dashboardCss = `
      .cove-visualization.type-dashboard:not(.is-dashboard-editor) {
        padding: 1rem;
      }`

const config = GenerateViteConfig(moduleName, {}, {}, { css: dashboardCss })
config.plugins.push(sharedMapData())

export default config
