import { previewTheme } from './coveSbThemes'
import '@cdc/core/styles/cove-main.scss'

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
  a11y: {
    test: 'error',
    options: {
      runOnly: {
        type: 'rule',
        values: ['aria-command-name']
      }
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
