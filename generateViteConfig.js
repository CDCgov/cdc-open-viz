import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import svgr from 'vite-plugin-svgr' // Svg Support
import dsv from '@rollup/plugin-dsv' // CSV Support
import dns from 'dns' // nodeJS
import * as path from 'path'

// Force load dev server on `localhost` vs 127.0.0.1
dns.setDefaultResultOrder('verbatim')

// DEV NOTE: Modifications made to this file will not be hot-loaded through HMR for component.
// - Active dev servers ('lerna run start') must be restarted in order to view the changed settings.
const generateViteConfig = (componentName, configOptions = {}, reactOptions = {}) => {
  let configOptionsDefault = {
    server: { port: 8080 },
    build: {
      commonjsOptions: {
        include: [/@cdc\/core/, /node_modules/]
      },
      sourcemap: false,
      lib: {
        entry: `src/${componentName}`,
        formats: ['es'],
        fileName: format => `${componentName.toLowerCase()}.js`
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          chunkFileNames: `${componentName.toLowerCase()}-[hash].[format].js`,
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          }
        }
      }
    },
    plugins: [
      react(reactOptions),
      svgr({
        exportAsDefault: true
      }),
      cssInjectedByJsPlugin(),
      dsv()
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: path.resolve(__dirname, 'testing-setup.js')
    },
    ...configOptions
  }

  return defineConfig({
    ...configOptionsDefault,
    ...configOptions
  })
}

export default generateViteConfig
