import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { mergeConfig } from 'vite'
import type { StorybookConfig } from '@storybook/react-vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' // Svg Support

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: [
    '../_stories/*.stories.@(js|jsx|ts|tsx)',
    '../packages/**/_stories/*.stories.@(js|jsx|ts|tsx)',
    '../_stories/private/**/*.stories.@(js|jsx|ts|tsx)'
  ],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    // getAbsolutePath("storybook-addon-fetch-mock"), // Incompatible with Storybook 9 - cannot resolve @storybook/preview-api
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-vitest")
  ],

  staticDirs: ['./assets'],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },

  features: {
    storyStoreV7: true
  },

  core: {
    builder: getAbsolutePath("@storybook/builder-vite"),
    disableTelemetry: true
  },

  typescript: {
    reactDocgen: false // https://github.com/storybookjs/storybook/issues/22164#issuecomment-1603627308
  },

  docs: {
    autodocs: 'tag'
  },

  viteFinal: async (config, { configType }) => {
    console.log('Storybook build mode: ', configType)

    // Common SVG configuration for both dev and build
    const svgrConfig = {
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: false,
        titleProp: true
      },
      include: '**/*.svg'
    }

    if (configType === 'DEVELOPMENT') {
      // run Storybook locally
      return mergeConfig(config, {
        plugins: [
          react({ jsxRuntime: 'automatic' }),
          svgr(svgrConfig)
        ]
      })
    }

    return mergeConfig(config, {
      commonjsOptions: {
        include: [/@cdc\/core/, /node_modules/]
      },
      build: {
        sourcemap: false,
        lib: {
          entry: `src/storybook`,
          formats: ['es'],
          fileName: format => `storybook.js`
        },
        rollupOptions: {
          output: {
            chunkFileNames: `storybook-[name]-[hash].[format].js`
          }
        }
      },
      plugins: [
        // changed from classic to automatic 02/21 for import React error.
        react({ jsxRuntime: 'automatic' }), //https://github.com/babel/babel/discussions/13013
        svgr(svgrConfig)
      ]
    })
  }
}

export default config

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
