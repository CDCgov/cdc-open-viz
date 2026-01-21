import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import svgr from 'vite-plugin-svgr' // Svg Support
import dsv from '@rollup/plugin-dsv' // CSV Support
import dns from 'dns' // nodeJS
import * as path from 'path'
import { fileURLToPath } from 'url'

// Force load dev server on `localhost` vs 127.0.0.1
dns.setDefaultResultOrder('verbatim')

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Default editor padding CSS - can be overridden by passing custom CSS to devOptions
// Dashboard overrides this with .cdc-open-viz-module.type-dashboard:not(.isDashboardEditor)
const PACKAGE_CSS = `
      .cdc-open-viz-module:not(.isEditor) {
        padding: 1rem;
      }`

// Generate dev index.html content
const generateDevIndexHtml = (css = PACKAGE_CSS) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <style>
      body {
        margin: 0;
        border-top: none !important;
        min-height: calc(100vh + 1px);
      }
${css}
    </style>
    <link rel="stylesheet prefetch" href="https://www.cdc.gov/TemplatePackage/5.0/css/app.min.css?_=71669" />
  </head>
  <body>
    <div class="react-container" data-config="/examples/default.json"></div>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <script>
      // Allow config override via ?config= URL parameter
      (function() {
        var configParam = new URLSearchParams(window.location.search).get('config');
        if (configParam) {
          document.querySelector('.react-container').setAttribute('data-config', configParam);
        }
      })();
    </script>
    <script type="module" src="./src/index"></script>
  </body>
</html>`
}

// Vite plugin to transform index.html for development
// Uses transformIndexHtml so React plugin can still inject its preamble
const coveDevIndexPlugin = css => ({
  name: 'cove-dev-index',
  transformIndexHtml: {
    order: 'pre',
    handler() {
      // Replace the entire HTML with our generated version
      // This runs early ('pre') so other plugins like React can still transform it
      return generateDevIndexHtml(css)
    }
  }
})

// DEV NOTE: Modifications made to this file will not be hot-loaded through HMR for component.
// - Active dev servers ('lerna run start') must be restarted in order to view the changed settings.
const generateViteConfig = (componentName, configOptions = {}, reactOptions = {}, devOptions = {}) => {
  const { css: devCss } = devOptions
  let configOptionsDefault = {
    css: {
      preprocessorOptions: {
        scss: {
          // Suppress legacy JS API warnings from Vite's internal Sass usage
          quietDeps: true,
          silenceDeprecations: ['legacy-js-api', 'import']
        }
      }
    },
    server: {
      port: 8080,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    build: {
      minify: true,  // toggle this line for debugging
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
      coveDevIndexPlugin(devCss),
      react(reactOptions),
      svgr({
        svgrOptions: {
          exportType: 'default',
          ref: true,
          svgo: false,
          titleProp: true
        },
        include: '**/*.svg'
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
