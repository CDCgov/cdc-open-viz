import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import Chart from '../CdcChart'
import simplifiedLine from './_mock/simplified_line.json'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import { assertVisualizationRendered, waitForPresence } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Defaults',
  component: Chart
}

type Story = StoryObj<typeof Chart>

const oldConfig = editConfigKeys(simplifiedLine, [
  { path: ['yAxis', 'hideAxis'], value: false },
  { path: ['yAxis', 'hideTicks'], value: false },
  { path: ['yAxis', 'gridLines'], value: false },
  { path: ['yAxis', 'numTicks'], value: '' },
  { path: ['xAxis', 'numTicks'], value: '' },
  { path: ['table', 'expanded'], value: true },
  { path: ['legend', 'position'], value: 'right' },
  { path: ['dataFormat', 'commas'], value: false },
  { path: ['tooltips', 'dateDisplayFormat'], value: '' }
])

const newConfig = editConfigKeys(simplifiedLine, [
  { path: ['yAxis', 'hideAxis'], value: true },
  { path: ['yAxis', 'hideTicks'], value: true },
  { path: ['yAxis', 'gridLines'], value: true },
  { path: ['yAxis', 'numTicks'], value: 4 },
  { path: ['xAxis', 'numTicks'], value: 6 },
  { path: ['table', 'expanded'], value: false },
  { path: ['legend', 'position'], value: 'top' },
  { path: ['dataFormat', 'commas'], value: true },
  { path: ['tooltips', 'dateDisplayFormat'], value: '%B %-d, %Y' }
])

export const OldConfig_Preserves_Legacy_Defaults: Story = {
  args: {
    config: oldConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    await waitForPresence('.legend-container', canvasElement)
    const legend = canvasElement.querySelector('.legend-container')
    expect(legend).toBeInTheDocument()
    expect(legend?.classList.contains('right')).toBe(true)

    const axisLine = canvasElement.querySelector('.left-axis line[stroke="#000"]')
    expect(axisLine).toBeInTheDocument()

    const gridlines = canvasElement.querySelectorAll('.left-axis line[stroke="#d6d6d6"]')
    expect(gridlines.length).toBe(0)

    const dataTable = canvasElement.querySelector('.data-table')
    expect(dataTable).toBeInTheDocument()
    expect(dataTable?.getAttribute('hidden')).toBeNull()

    const tickTexts = canvasElement.querySelectorAll('.left-axis .vx-axis-tick text')
    for (const tick of tickTexts) {
      expect(tick.textContent).not.toMatch(/,/)
    }
  }
}

export const NewConfig_Gets_New_Defaults: Story = {
  args: {
    config: newConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    await waitForPresence('.legend-container', canvasElement)
    const legend = canvasElement.querySelector('.legend-container')
    expect(legend).toBeInTheDocument()
    expect(legend?.classList.contains('top')).toBe(true)

    const axisLine = canvasElement.querySelector('.left-axis line[stroke="#000"]')
    expect(axisLine).toBeNull()

    await waitForPresence('.left-axis line[stroke="#d6d6d6"]', canvasElement)
    const gridlines = canvasElement.querySelectorAll('.left-axis line[stroke="#d6d6d6"]')
    expect(gridlines.length).toBeGreaterThan(0)

    const dataTable = canvasElement.querySelector('.data-table')
    expect(dataTable).toBeInTheDocument()
    expect(dataTable?.getAttribute('hidden')).not.toBeNull()
  }
}

export default meta
