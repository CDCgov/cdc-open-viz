import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { assertVisualizationRendered, openAccordion, performAndAssert, waitForEditor } from '@cdc/core/helpers/testing'
import Chart from '../CdcChartComponent'
import mockScatterPlot from './_mock/scatterplot_mock.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Editor Tests/Data Series',
  component: Chart
}

export default meta
type Story = StoryObj<typeof Chart>

const categories = ['Q1', 'Q2', 'Q3', 'Q4']
const config = {
  ...mockScatterPlot,
  visualizationType: 'Bar',
  title: 'Bar Chart Data Series Test',
  orientation: 'vertical',
  xAxis: {
    ...mockScatterPlot.xAxis,
    type: 'categorical',
    dataKey: 'category',
    sortDates: false
  },
  yAxis: {
    ...mockScatterPlot.yAxis,
    type: 'linear'
  },
  series: [
    {
      dataKey: 'y1',
      type: 'Bar',
      axis: 'Left',
      tooltip: true
    }
  ],
  rankByValue: undefined,
  data: [
    { category: 'Q1', y1: 19000, y2: 47000, y3: 59000, y4: 91000 },
    { category: 'Q2', y1: 18000, y2: 32000, y3: 68000, y4: 89000 },
    { category: 'Q3', y1: 7000, y2: 38000, y3: 74000, y4: 89000 },
    { category: 'Q4', y1: 15000, y2: 41000, y3: 67000, y4: 95000 }
  ]
}

const getLegendSeriesCount = (canvasElement: HTMLElement) =>
  canvasElement.querySelectorAll('.legend-item[class*="legend-text--y"]').length

const getRenderedCategoryOrder = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll<SVGTextElement>('svg text'))
    .filter(element => categories.includes(element.textContent?.trim() || ''))
    .sort((a, b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left)
    .map(element => element.textContent?.trim())
    .join(', ')

export const StandardDataSeriesSection: Story = {
  name: 'Standard Data Series Section',
  parameters: {
    test: {
      timeout: 30000
    }
  },
  args: {
    config,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Data Series')
    await assertVisualizationRendered(canvasElement)

    const addSeries = canvas.getByRole('combobox', { name: 'Add Data Series' }) as HTMLSelectElement
    expect(Array.from(addSeries.options).map(option => option.value)).not.toContain('category')

    await performAndAssert(
      'Add Data Series adds rendered legend output',
      () => getLegendSeriesCount(canvasElement),
      () => userEvent.selectOptions(addSeries, 'y2'),
      (before, after) => before > 0 && after === before + 1
    )

    const y2Heading = canvas
      .getAllByRole('button')
      .find(button => button.textContent?.includes('y2') && button.classList.contains('accordion__button'))
    expect(y2Heading).toBeTruthy()
    await userEvent.click(y2Heading!)
    const y2Container = y2Heading!.closest('.series-item')
    expect(y2Container).toBeTruthy()
    const y2Panel = within(y2Container as HTMLElement)
    const removeSeries = y2Panel.getByRole('button', { name: 'Remove' })

    await performAndAssert(
      'Remove Data Series removes rendered legend output',
      () => getLegendSeriesCount(canvasElement),
      () => userEvent.click(removeSeries),
      (before, after) => before > 1 && after === before - 1
    )

    const rankByValue = canvas.getByLabelText('Rank by Value') as HTMLSelectElement
    await performAndAssert(
      'Rank by Value updates rendered category order',
      () => getRenderedCategoryOrder(canvasElement),
      () => userEvent.selectOptions(rankByValue, 'asc'),
      (before, after) => before === 'Q1, Q2, Q3, Q4' && after === 'Q3, Q4, Q2, Q1'
    )
  }
}
