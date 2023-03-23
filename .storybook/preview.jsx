import React from 'react'
import { previewTheme } from './coveSbThemes'

import  '../packages/core/styles/v2/main.scss'

export const parameters = {
  options: {
    storySort: {
      includeNames: true,
      order: [
        'Introduction',
        'Guides',
        'CSS Systems',
        'Visualizations',
        'Stores',
        'Components',
        'Helpers',
        ['CoveHelper', 'DataTransform', 'configHelpers', 'coveUpdateWorker', 'validateFipsCodeLength', '*'],
        'Hooks'
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
