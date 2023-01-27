import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

import { name, moduleName } from './package.json'

export default defineConfig({
  server: { port: 8080 },
  build: {
    sourcemap: false,
    lib: {
      name: name,
      entry: `src/${moduleName}.jsx`,
      fileName: (format) => `${moduleName.toLowerCase()}.${format}.js`,
    },
    rollupOptions: {
      external: [ 'react', 'reactDOM' ],
      output: {
        globals: {
          react: 'React',
          reactDOM: 'ReactDOM'
        },
      },
    },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: [ '@emotion/babel-plugin' ],
      },
    }),
    svgr({
      exportAsDefault: true
    })
  ]
})
