import React from 'react'
import { previewTheme } from './coveSbThemes'

import  '../packages/core/styles/v2/main.scss'

export const parameters = {
  options: {
    storySort: {
      includeNames: true,
      order: [
        'Introduction',
        'Contributions',
        'Guides',
        'CSS Systems',
        'Visualizations',
        'Components',
        'Store',
        ['COVE Store', 'Slices', ['globalSlice', 'visConfigSlice', 'dataSlice']],
        'Hooks',
        'Helpers',
        ['CoveHelper', 'DataTransform', 'configHelpers', 'coveUpdateWorker', 'validateFipsCodeLength', '*']
      ],
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: previewTheme,
    source: {
      excludeDecorators: true,
    },
  },
}

export const decorators = [
  (Story) => (
    <div className="cove cove-storybook">
      <Story />
    </div>
  ),
]
