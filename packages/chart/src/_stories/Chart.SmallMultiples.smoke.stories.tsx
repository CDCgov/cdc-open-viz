import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import smallMultiplesBars from './_mock/small_multiples/small_multiples_bars.json'
import smallMultiplesBigDataBars from './_mock/small_multiples/small_multiples_big_data_bars.json'
import smallMultiplesLinesColors from './_mock/small_multiples/small_multiples_lines_colors.json'
import smallMultiplesLines from './_mock/small_multiples/small_multiples_lines.json'
import smallMultiplesStackedBars from './_mock/small_multiples/small_multiples_stacked_bars.json'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import { assertVisualizationRendered, waitForPresence } from '@cdc/core/helpers/testing'
import { expect } from 'storybook/test'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Small Multiples',
  component: Chart
}

type Story = StoryObj<typeof Chart>

const getTooltipHtmlValues = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll('[data-tooltip-html]')).map(
    element => element.getAttribute('data-tooltip-html') || ''
  )

export const smallMultiples_Bars: Story = {
  args: {
    config: smallMultiplesBars,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('[data-tooltip-html]', canvasElement)

    const tooltipHtmlValues = getTooltipHtmlValues(canvasElement)
    expect(tooltipHtmlValues.length).toBeGreaterThan(0)
    expect(tooltipHtmlValues.some(html => html.includes('tooltip-marker-swatch'))).toBe(false)
  }
}

export const smallMultiples_BigDataBars: Story = {
  args: {
    config: smallMultiplesBigDataBars,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}
export const smallMultiples_LinesColors: Story = {
  args: {
    config: smallMultiplesLinesColors,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}
export const smallMultiples_Lines: Story = {
  args: {
    config: smallMultiplesLines,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}
export const smallMultiples_TopYAxisTitle: Story = {
  args: {
    config: editConfigKeys(smallMultiplesLines, [
      { path: ['yAxis', 'label'], value: 'Percentage of emergency department visits' },
      { path: ['runtime', 'yAxis', 'label'], value: 'Percentage of emergency department visits' },
      { path: ['yAxis', 'inlineLabel'], value: ' percent' },
      { path: ['yAxis', 'titlePlacement'], value: 'top' }
    ]),
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}
export const smallMultiples_TopYAxisTitle2: Story = {
  args: {
    config: editConfigKeys(smallMultiplesLines, [
      { path: ['yAxis', 'label'], value: 'Percentage of emergency department visits' },
      { path: ['runtime', 'yAxis', 'label'], value: 'Percentage of emergency department visits' },
      { path: ['yAxis', 'inlineLabel'], value: '%' },
      { path: ['yAxis', 'titlePlacement'], value: 'top' }
    ]),
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}
export const smallMultiples_StackedBars: Story = {
  args: {
    config: smallMultiplesStackedBars,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('[data-tooltip-html]', canvasElement)

    const tooltipHtmlValues = getTooltipHtmlValues(canvasElement)
    expect(tooltipHtmlValues.length).toBeGreaterThan(0)
    expect(tooltipHtmlValues.some(html => html.includes('tooltip-marker-swatch'))).toBe(true)
  }
}
export default meta
