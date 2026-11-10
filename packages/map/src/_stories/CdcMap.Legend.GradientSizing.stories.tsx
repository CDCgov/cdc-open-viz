import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { performAndAssert, waitForEditor, waitForPresence } from '@cdc/core/helpers/testing'
import CdcMap from '../CdcMap'
import config from './_mock/usa-state-gradient.json'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Legend/Gradient Sizing',
  component: CdcMap,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcMap>

export const Editor_Initial_Load_And_Sidebar_Toggle: Story = {
  args: { config, isEditor: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForPresence('.legend-container svg', canvasElement)

    const getSizing = () => {
      const svg = canvasElement.querySelector<SVGSVGElement>('.legend-container svg')!
      return {
        width: svg.viewBox.baseVal.width,
        scale: svg.getScreenCTM()?.a ?? 0
      }
    }

    // Assert before any editor interaction can trigger a corrective resize.
    await waitFor(() => expect(getSizing().scale).toBeCloseTo(1, 1))
    const initialWidth = getSizing().width
    await waitForEditor(canvas)

    await performAndAssert(
      'Collapse sidebar without shrinking gradient labels',
      getSizing,
      async () => userEvent.click(canvas.getByRole('button', { name: 'Collapse Editor' })),
      (before, after) => Math.abs(after.width - before.width - 350) < 1 && Math.abs(after.scale - 1) < 0.05
    )

    await performAndAssert(
      'Expand sidebar without shrinking gradient labels',
      getSizing,
      async () => userEvent.click(canvas.getByRole('button', { name: 'Expand Editor' })),
      (_before, after) => Math.abs(after.width - initialWidth) < 1 && Math.abs(after.scale - 1) < 0.05
    )
  }
}
