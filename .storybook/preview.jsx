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
        'Components',
        'Helpers',
        'Stores',
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
  },
}

export const decorators = [
  (Story) => (
    <div className="cove">
      <Story />
    </div>
  ),
]
