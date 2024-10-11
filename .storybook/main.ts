import { mergeConfig } from 'vite'
import type { StorybookConfig } from '@storybook/react-vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' // Svg Support

const config: StorybookConfig = {
  stories: ['../_stories/*.mdx', '../packages/**/_stories/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-fetch-mock',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook'
  ],
  staticDirs: ['./assets'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  features: {
    storyStoreV7: true
  },
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true
  },
  docs: {
    autodocs: 'tag'
  },
  typescript: {
    reactDocgen: false // https://github.com/storybookjs/storybook/issues/22164#issuecomment-1603627308
  },
  viteFinal: async (config, { configType }) => {
    console.log('Storybook build mode: ', configType)

    if (configType === 'DEVELOPMENT') {
      // run Storybook locally
      return mergeConfig(config, {
        plugins: [svgr({ exportAsDefault: true })]
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
        react({ jsxRuntime: 'classic' }), //https://github.com/babel/babel/discussions/13013
        svgr({
          exportAsDefault: true
        })
      ]
    })
  }
}

export default config
