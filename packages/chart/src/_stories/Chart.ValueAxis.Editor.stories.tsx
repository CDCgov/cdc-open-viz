import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { assertVisualizationRendered, openAccordion, performAndAssert, waitForEditor } from '@cdc/core/helpers/testing'
import Chart from '../CdcChartComponent'
import type { ChartConfig } from '../types/ChartConfig'
import annualChangeConfig from '../../examples/feature/bar/bar-chart-race-annual-change.json'
import mockScatterPlot from './_mock/scatterplot_mock.json'
import horizontalBarConfig from './_mock/horizontal_bar.json'
import heatMapConfig from './_mock/heatmap-average-age-categorical.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Editor Tests/Value Axis',
  component: Chart
}

export default meta
type Story = StoryObj<typeof Chart>

const verticalConfig = {
  ...mockScatterPlot,
  animate: false,
  visualizationType: 'Bar',
  visualizationSubType: 'regular',
  orientation: 'vertical',
  xAxis: { ...mockScatterPlot.xAxis, type: 'categorical', dataKey: 'category' },
  yAxis: {
    ...mockScatterPlot.yAxis,
    type: 'linear',
    label: 'Rate',
    titlePlacement: 'side',
    numTicks: 4,
    hideAxis: false,
    hideLabel: false,
    hideTicks: false,
    gridLines: true,
    labelsAboveGridlines: false,
    categories: [
      { label: 'Lower range', height: '4000', color: '#d9e7f5' },
      { label: 'Upper range', height: '', color: '#8fb8de' }
    ],
    max: '',
    min: '',
    enablePadding: false
  },
  dataFormat: {
    ...mockScatterPlot.dataFormat,
    commas: false,
    abbreviated: false,
    roundTo: 0,
    preserveOriginalDecimals: false,
    prefix: '',
    suffix: ''
  },
  series: mockScatterPlot.series.slice(0, 2).map(series => ({ ...series, type: 'Bar' })),
  data: [
    { category: 'Q1', y1: 1000, y2: 2500 },
    { category: 'Q2', y1: 3000, y2: 4500 },
    { category: 'Q3', y1: 5000, y2: 7500 },
    { category: 'Q4', y1: 9000, y2: 12000 }
  ]
} as ChartConfig

const getLeftAxisState = (canvasElement: HTMLElement) => ({
  sideTitle:
    Array.from(canvasElement.querySelectorAll('text.y-label'))
      .find(title => title.textContent?.trim())
      ?.textContent?.trim() || '',
  topTitle: canvasElement.querySelector('.y-axis-top-title')?.textContent?.trim() || '',
  tickLabels: Array.from(canvasElement.querySelectorAll('.left-axis .vx-axis-tick text')).map(
    tick => tick.textContent?.trim() || ''
  ),
  axisLineCount: canvasElement.querySelectorAll('.left-axis > line').length,
  tickLineCount: canvasElement.querySelectorAll('.left-axis .vx-axis-tick > line').length,
  gridLineCount: canvasElement.querySelectorAll('.left-axis .vx-axis-tick line[stroke="#d6d6d6"]').length,
  inlineLabels: Array.from(canvasElement.querySelectorAll('svg text')).map(text => text.textContent?.trim() || '')
})

const getBottomAxisState = (canvasElement: HTMLElement) => ({
  tickLabels: Array.from(canvasElement.querySelectorAll('.bottom-axis .vx-axis-tick text')).map(
    tick => tick.textContent?.trim() || ''
  ),
  axisLineCount: canvasElement.querySelectorAll('.bottom-axis > line').length,
  tickLineCount: canvasElement.querySelectorAll('.bottom-axis .vx-axis-tick > line').length
})

export const VerticalNumericControls: Story = {
  args: { config: verticalConfig, isEditor: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    await openAccordion(canvas, 'Left Value Axis')
    expect(canvas.queryByLabelText(/Label offset/i)).not.toBeInTheDocument()

    const axisType = canvas.getByLabelText(/Axis Type/i) as HTMLSelectElement
    await performAndAssert(
      'Axis Type changes rendered tick spacing',
      () => getLeftAxisState(canvasElement).tickLabels,
      () => userEvent.selectOptions(axisType, 'logarithmic'),
      (before, after) => before.join('|') !== after.join('|') && after.length > 0
    )
    await userEvent.selectOptions(axisType, 'linear')

    const label = canvasElement.querySelector('#input-yAxis-none-label') as HTMLInputElement
    await performAndAssert(
      'Label updates the rendered side title',
      () => getLeftAxisState(canvasElement).sideTitle,
      async () => {
        await userEvent.clear(label)
        await userEvent.type(label, 'Updated Rate')
      },
      (before, after) => before === 'Rate' && after === 'Updated Rate'
    )

    const placement = canvasElement.querySelector('#select-yAxis-none-titlePlacement') as HTMLSelectElement
    await performAndAssert(
      'Label Placement moves the rendered title to the top',
      () => getLeftAxisState(canvasElement),
      () => userEvent.selectOptions(placement, 'top'),
      (before, after) =>
        before.sideTitle === 'Updated Rate' && after.sideTitle === '' && after.topTitle === 'Updated Rate'
    )

    const inlineLabel = canvasElement.querySelector('#input-yAxis-none-inlineLabel') as HTMLInputElement
    await performAndAssert(
      'Inline Label adds rendered axis text',
      () => getLeftAxisState(canvasElement).inlineLabels,
      () => userEvent.type(inlineLabel, 'Units'),
      (before, after) => !before.includes('Units') && after.includes('Units')
    )

    const numTicks = canvasElement.querySelector('#input-yAxis-none-numTicks') as HTMLInputElement
    await performAndAssert(
      'Number of ticks increases rendered tick density',
      () => getLeftAxisState(canvasElement).tickLabels,
      async () => {
        await userEvent.clear(numTicks)
        await userEvent.type(numTicks, '15')
      },
      (before, after) => after.length > before.length
    )

    await performAndAssert(
      'Add commas updates rendered tick labels',
      () => getLeftAxisState(canvasElement).tickLabels,
      () => userEvent.click(canvasElement.querySelector('#checkbox-dataFormat-none-commas') as HTMLInputElement),
      (before, after) => !before.some(value => value.includes(',')) && after.some(value => value.includes(','))
    )

    await performAndAssert(
      'Show Gridlines removes rendered value-axis gridlines',
      () => getLeftAxisState(canvasElement).gridLineCount,
      () => userEvent.click(canvas.getByLabelText(/^Show Gridlines$/i)),
      (before, after) => before > 0 && after === 0
    )

    await performAndAssert(
      'Value-axis padding expands the rendered tick domain',
      () => getLeftAxisState(canvasElement).tickLabels,
      () => userEvent.click(canvas.getByLabelText(/^Add Padding to Value Axis Scale$/i)),
      (before, after) => before.join('|') !== after.join('|') && after.length > 0
    )

    const prefix = canvasElement.querySelector('#input-dataFormat-none-prefix') as HTMLInputElement
    const preserveDecimals = canvasElement.querySelector(
      '#checkbox-dataFormat-none-preserveOriginalDecimals'
    ) as HTMLInputElement
    await performAndAssert(
      'Debounced formatting preserves a newer unrelated config update',
      () => ({
        preserveDecimals: preserveDecimals.checked,
        tickLabels: getLeftAxisState(canvasElement).tickLabels
      }),
      async () => {
        await userEvent.type(prefix, '$')
        await userEvent.click(preserveDecimals)
      },
      (_before, after) => after.preserveDecimals && after.tickLabels.some(value => value.startsWith('$'))
    )

    await performAndAssert(
      'Hide Axis removes the rendered left-axis line',
      () => getLeftAxisState(canvasElement).axisLineCount,
      () => userEvent.click(canvasElement.querySelector('#checkbox-yAxis-none-hideAxis') as HTMLInputElement),
      (before, after) => before === 1 && after === 0
    )

    const max = canvasElement.querySelector('#input-yAxis-none-max') as HTMLInputElement
    await performAndAssert(
      'Value Axis maximum changes the rendered domain',
      () => getLeftAxisState(canvasElement).tickLabels,
      async () => {
        await userEvent.clear(max)
        await userEvent.type(max, '20000')
      },
      (before, after) => before.join('|') !== after.join('|') && after.some(value => value.includes('20,000'))
    )
  }
}

export const CategoricalControls: Story = {
  args: { config: verticalConfig, isEditor: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    await openAccordion(canvas, 'Left Value Axis')

    const axisType = canvas.getByLabelText(/Axis Type/i) as HTMLSelectElement
    await performAndAssert(
      'Categorical Axis Type replaces the numeric value-axis rendering',
      () => ({
        numericTicks: getLeftAxisState(canvasElement).tickLabels,
        hasCategoricalBars: Boolean(canvasElement.querySelector('g.stack.vertical'))
      }),
      () => userEvent.selectOptions(axisType, 'categorical'),
      (before, after) =>
        before.numericTicks.length > 0 &&
        after.numericTicks.length === 0 &&
        !before.hasCategoricalBars &&
        after.hasCategoricalBars
    )
  }
}

export const HorizontalNumericControls: Story = {
  args: {
    config: {
      ...horizontalBarConfig,
      animate: false,
      yAxis: { ...horizontalBarConfig.yAxis, type: 'linear', smallestLeftAxisMax: '' },
      xAxis: { ...horizontalBarConfig.xAxis, max: '', hideAxis: false, hideLabel: false, hideTicks: false }
    } as ChartConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    await openAccordion(canvas, 'Value Axis')

    const max = canvasElement.querySelector('#input-xAxis-none-max') as HTMLInputElement
    const beforeLabels = getBottomAxisState(canvasElement).tickLabels
    const numericLabels = beforeLabels.map(label => Number(label.replace(/[^0-9.-]/g, ''))).filter(Number.isFinite)
    const nextMax = String(Math.ceil(Math.max(...numericLabels, 1) * 1.5))
    await performAndAssert(
      'Horizontal maximum updates bottom-axis ticks',
      () => getBottomAxisState(canvasElement).tickLabels,
      async () => {
        await userEvent.clear(max)
        await userEvent.type(max, nextMax)
      },
      (before, after) => before.join('|') !== after.join('|') && after.length > 0
    )

    await performAndAssert(
      'Horizontal Hide Ticks removes bottom-axis tick lines',
      () => getBottomAxisState(canvasElement).tickLineCount,
      () => userEvent.click(canvas.getByLabelText(/^Hide Ticks$/i)),
      (before, after) => before > 0 && after === 0
    )
  }
}

export const HeatMapControls: Story = {
  args: {
    config: {
      ...heatMapConfig,
      animate: false,
      yAxis: { ...heatMapConfig.yAxis, label: 'City', titlePlacement: 'side', hideTicks: false }
    } as ChartConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    await openAccordion(canvas, 'Left Value Axis')

    const getTitle = () =>
      Array.from(canvasElement.querySelectorAll('.cdc-heatmap__axis-title')).find(
        title => title.textContent?.includes('City') || title.textContent?.includes('Region')
      )
    const label = canvasElement.querySelector('#input-yAxis-none-label') as HTMLInputElement
    await performAndAssert(
      'HeatMap Label updates the rendered row-axis title',
      () => getTitle()?.textContent?.trim() || '',
      async () => {
        await userEvent.clear(label)
        await userEvent.type(label, 'Region')
      },
      (before, after) => before === 'City' && after === 'Region'
    )

    const placement = canvasElement.querySelector('#select-yAxis-none-titlePlacement') as HTMLSelectElement
    await performAndAssert(
      'HeatMap Label Placement moves the rendered row-axis title',
      () => getTitle()?.getAttribute('transform') || '',
      () => userEvent.selectOptions(placement, 'top'),
      (before, after) => before.includes('rotate(-90)') && after === ''
    )
  }
}

export const BarRaceFormattingAndVisibility: Story = {
  args: { config: annualChangeConfig as ChartConfig, isEditor: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    await openAccordion(canvas, 'Value Axis')

    expect(canvas.queryByLabelText('Axis Type')).not.toBeInTheDocument()
    expect(canvas.queryByLabelText('Hide Axis')).not.toBeInTheDocument()
    expect(canvas.queryByLabelText('Abbreviate Axis Values')).not.toBeInTheDocument()
    expect(canvasElement.querySelector('#checkbox-dataFormat-none-commas')).toBeInTheDocument()
    expect(canvasElement.querySelector('#input-dataFormat-none-roundTo')).toBeInTheDocument()

    const prefix = canvasElement.querySelector('#input-dataFormat-none-prefix') as HTMLInputElement
    await performAndAssert(
      'Bar Race formatting updates rendered values',
      () => canvasElement.querySelector('[data-category="Northeast"] .bar-chart-race__value')?.textContent,
      async () => {
        await userEvent.type(prefix, '$')
        await userEvent.tab()
      },
      (before, after) => before === '74K' && after === '$74K'
    )
  }
}
