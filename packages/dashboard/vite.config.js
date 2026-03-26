import GenerateViteConfig from '@cdc/core/generateViteConfig.js'
import { moduleName } from './package.json'

// Dashboard uses is-dashboard-editor instead of is-editor for the padding selector
const dashboardCss = `
      .cove-visualization.type-dashboard:not(.is-dashboard-editor) {
        padding: 1rem;
      }`

export default GenerateViteConfig(moduleName, {}, {}, { css: dashboardCss })
