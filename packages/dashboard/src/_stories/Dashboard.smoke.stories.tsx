import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import Dashboard from '../CdcDashboard'
import MinimalExampleConfig from '../../examples/minimal-example.json'

const meta: Meta<typeof Dashboard> = {
  title: 'Components/Pages/Dashboard',
  component: Dashboard
}

export default meta
type Story = StoryObj<typeof Dashboard>

export const Dashboard_Minimal_Config: Story = {
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
    expect(canvasElement.textContent).toContain('Dashboard Example')
    expect(canvasElement.textContent).toContain('Minimal dashboard example')
  }
}
