import { previewTheme } from './coveSbThemes'
import * as React from 'react'
import '@cdc/core/dist/cove-main.css'

export const parameters = {
  options: {
    storySort: {
      method: 'alphabetical',
      includeNames: true,
      order: ['Guides', 'Components', ['Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages'], 'Regression Tests']
    }
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  docs: {
    theme: previewTheme,
    source: {
      excludeDecorators: true
    }
  },
  fetchMock: { mocks: [] }
}

export const decorators = [
  Story => (
    <div className='cove-storybook'>
      <Story />
    </div>
  )
]
