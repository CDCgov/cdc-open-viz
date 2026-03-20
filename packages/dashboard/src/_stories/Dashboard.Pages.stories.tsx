import type { Meta, StoryObj } from '@storybook/react-vite'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import Dashboard from '../CdcDashboard'

const meta: Meta<typeof Dashboard> = {
  title: 'Pages/NWSS',
  component: Dashboard
}

export default meta
type Story = StoryObj<typeof Dashboard>

export const FluA_Top_Modules: Story = {
  name: 'FluA Top Modules',
  args: {
    configUrl: 'https://www.cdc.gov/nwss/rv/modules/flua/flua-top-modules.json',
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}
