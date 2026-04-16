import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import CdcMarkupInclude from '../CdcMarkupInclude'
import MinimalExampleConfig from '../../examples/minimal-example.json'

const meta: Meta<typeof CdcMarkupInclude> = {
  title: 'Components/Pages/Markup Include',
  component: CdcMarkupInclude
}

export default meta
type Story = StoryObj<typeof CdcMarkupInclude>

export const Markup_Include_Minimal_Config: Story = {
  args: {
    config: MinimalExampleConfig,
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story:
          'Minimum working consumer config. This story validates the source-of-truth minimal example used by the package README and CONFIG reference.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    expect(canvasElement.textContent).toContain('Markup Include')
    expect(canvasElement.textContent).toContain('Markup include minimum example.')
  }
}
