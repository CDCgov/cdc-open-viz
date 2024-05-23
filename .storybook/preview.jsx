import { previewTheme } from './coveSbThemes'

export const parameters = {
  options: {
    storySort: {
      includeNames: true,
      order: ['Guides', 'Components', ['Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages']]
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
