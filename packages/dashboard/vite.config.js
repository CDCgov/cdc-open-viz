import { defineConfig } from 'vite'
import commonViteConfig from '../../vite.config'

import { name, moduleName } from './package.json'

let customBuild = {
  ...commonViteConfig,
  build: {
    ...commonViteConfig.build,
    lib: {
      name: name,
      entry: `src/${moduleName}.jsx`,
      fileName: (format) => `${moduleName.toLowerCase()}.${format}.js`,
    }
  }
}
export default defineConfig(customBuild)
