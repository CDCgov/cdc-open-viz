import GenerateViteConfig from '@cdc/core/generateViteConfig.js'
import { moduleName } from './package.json'

// Dashboard uses isDashboardEditor instead of isEditor for the padding selector
const dashboardCss = `
      .cdc-open-viz-module.type-dashboard:not(.isDashboardEditor) {
        padding: 1rem;
      }`

export default GenerateViteConfig(moduleName, {}, {}, { css: dashboardCss })
