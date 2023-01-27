import { defineConfig } from 'vite'
import commonViteConfig from '../../vite.config'

import { moduleName } from './package.json'

let customBuild = {
  ...commonViteConfig,
  build: {
    ...commonViteConfig.build,
    lib: {
      name: moduleName,
      entry: `src/${moduleName}.jsx`,
      fileName: (format) => `${moduleName.toLowerCase()}.${format}.js`,
    }
  }
}
export default defineConfig(customBuild)
