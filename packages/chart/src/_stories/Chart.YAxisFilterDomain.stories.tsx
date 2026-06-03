import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import Chart from '../CdcChartComponent'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import smallestLeftAxisMaxConfig from './_mock/smallest_left_axis_max.json'
import { assertVisualizationRendered, openAccordion, waitForEditor } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Y Axis Filter Domain',
  component: Chart
}

type Story = StoryObj<typeof Chart>

const baseConfig = editConfigKeys(smallestLeftAxisMaxConfig, [
  { path: ['yAxis', 'smallestLeftAxisMax'], value: undefined },
  { path: ['yAxis', 'numTicks'], value: 4 }
])

export const Dynamic_Filter_Domain: Story = {
  args: {
    config: editConfigKeys(baseConfig, [{ path: ['yAxis', 'filterDomainBehavior'], value: 'dynamic' }])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Stable_Filter_Domain: Story = {
  args: {
    config: editConfigKeys(baseConfig, [{ path: ['yAxis', 'filterDomainBehavior'], value: 'stable' }])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Editor_Control: Story = {
  args: {
    config: editConfigKeys(baseConfig, [
      { path: ['yAxis', 'filterDomainBehavior'], value: 'stable' },
      { path: ['yAxis', 'autoMaxRounding'], value: 'nice-power-of-ten' }
    ]),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Left Value Axis')

    const filterDomainSelect = (await canvas.findByLabelText(/Filter Domain Behavior/i)) as HTMLSelectElement
    expect(filterDomainSelect.value).toBe('stable')
    expect(Array.from(filterDomainSelect.options).map(option => option.text)).toEqual(['Dynamic', 'Stable'])

    const autoMaxRoundingSelect = (await canvas.findByLabelText(/Auto Max Rounding/i)) as HTMLSelectElement
    expect(autoMaxRoundingSelect.value).toBe('nice-power-of-ten')
    expect(Array.from(autoMaxRoundingSelect.options).map(option => option.text)).toEqual(['None', 'Nice power-of-ten'])
  }
}

export default meta
