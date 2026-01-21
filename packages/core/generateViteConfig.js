import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import svgr from 'vite-plugin-svgr' // Svg Support
import dsv from '@rollup/plugin-dsv' // CSV Support
import dns from 'dns' // nodeJS
import fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

// Force load dev server on `localhost` vs 127.0.0.1
dns.setDefaultResultOrder('verbatim')

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Path to dev template files
const devTemplatePath = path.join(__dirname, 'devTemplate')

// Default editor padding CSS - can be overridden by passing custom CSS to devOptions
// Dashboard overrides this with .cdc-open-viz-module.type-dashboard:not(.isDashboardEditor)
const DEFAULT_PACKAGE_CSS = `
      .cdc-open-viz-module:not(.isEditor) {
        padding: 1rem;
      }`

// Read dev template files
const readTemplate = () => {
  const html = fs.readFileSync(path.join(devTemplatePath, 'index.html'), 'utf-8')
  const sidebarCss = fs.readFileSync(path.join(devTemplatePath, 'sidebar.css'), 'utf-8')
  const devJs = fs.readFileSync(path.join(devTemplatePath, 'dev.js'), 'utf-8')
  return { html, sidebarCss, devJs }
}

// Generate dev index.html content by combining template files
const generateDevIndexHtml = (packageCss = DEFAULT_PACKAGE_CSS) => {
  const { html, sidebarCss, devJs } = readTemplate()

  return html
    .replace('/* {{PACKAGE_CSS}} */', packageCss)
    .replace('/* {{SIDEBAR_CSS}} */', sidebarCss)
    .replace('// {{DEV_JS}}', devJs)
}

// Vite plugin to serve /__examples endpoint
const examplesApiPlugin = () => ({
  name: 'cove-examples-api',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/__examples') {
        // Get the package root (where vite.config.js is)
        const packageRoot = server.config.root || process.cwd()
        const examplesDir = path.join(packageRoot, 'examples')

        try {
          const files = listJsonFiles(examplesDir, examplesDir)
          res.setHeader('Content-Type', 'application/json')
          res.setHeader('Access-Control-Allow-Origin', '*')
          res.end(JSON.stringify(files))
        } catch (err) {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify([]))
        }
        return
      }
      next()
    })
  }
})

// Recursively list JSON files in a directory
function listJsonFiles(dir, baseDir) {
  const files = []
  if (!fs.existsSync(dir)) return files

  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...listJsonFiles(fullPath, baseDir))
    } else if (entry.name.endsWith('.json')) {
      // Get relative path from examples dir
      files.push(path.relative(baseDir, fullPath))
    }
  }
  return files.sort()
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
      minify: true, // toggle this line for debugging
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
      examplesApiPlugin(),
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
