import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { assertVisualizationRendered, openAccordion, performAndAssert, waitForEditor } from '@cdc/core/helpers/testing'
import Chart from '../CdcChartComponent'
import type { ChartConfig } from '../types/ChartConfig'
import baseConfig from './_mock/editor-tests/bar-chart-editor-test.json'

const makeConfig = (orientation: 'vertical' | 'horizontal') => ({
  ...baseConfig,
  title: 'Custom bar value labels',
  orientation,
  labels: true,
  animate: false,
  barStyle: 'flat',
  preliminaryData: [],
  general: { ...baseConfig.general, showZeroValueData: true },
  xAxis: { ...baseConfig.xAxis, dataKey: 'day', label: 'Day', type: 'categorical' },
  yAxis: {
    ...baseConfig.yAxis,
    min: '0',
    max: '2',
    displayNumbersOnBar: true,
    label: 'Percent',
    labelPlacement: 'On Date/Category Axis'
  },
  dataFormat: { ...baseConfig.dataFormat, suffix: '%', roundTo: 1 },
  series: [{ dataKey: 'percent', type: 'Bar', axis: 'Left', tooltip: true }],
  columns: {},
  data: [
    { day: 'Day 1', percent: 0.3, percent_label: '<1.0' },
    { day: 'Day 2', percent: 0, percent_label: 'Below threshold' },
    { day: 'Day 3', percent: 0.2, percent_label: '' }
  ]
})

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Bar Value Labels',
  component: Chart
}
export default meta
type Story = StoryObj<typeof Chart>

const testLabelColumn: Story['play'] = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await waitForEditor(canvas)
  await assertVisualizationRendered(canvasElement)
  await openAccordion(canvas, 'Data Series')
  await userEvent.click(canvasElement.querySelector('.series-item__title [role="button"]') as HTMLElement)
  const getBars = () => Array.from(canvasElement.querySelectorAll('g[class*="bar-group-"]'))
  const getOutput = () => ({
    labels: getBars().map(group =>
      Array.from(group.querySelectorAll('text'))
        .map(text => text.textContent)
        .filter(Boolean)
    ),
    geometry: getBars().map(group => Array.from(group.querySelectorAll('path')).map(path => path.getAttribute('d')))
  })
  expect(getBars()).toHaveLength(3)
  const original = getOutput()
  original.geometry.forEach(paths => expect(paths.length).toBeGreaterThan(0))
  const getSelect = () => canvas.getByRole('combobox', { name: /^Value label column/ })
  expect(within(getSelect()).getByRole('option', { name: 'percent' })).toBeInTheDocument()
  await performAndAssert(
    'Use source column for labels without changing bar geometry',
    getOutput,
    async () => userEvent.selectOptions(getSelect(), 'percent_label'),
    (before, after) =>
      after.labels[0].includes('<1.0') &&
      after.labels[1].includes('Below threshold') &&
      after.labels[2].length === 0 &&
      JSON.stringify(before.geometry) === JSON.stringify(after.geometry)
  )
  expect(getOutput().labels[0]).toEqual(['<1.0'])
  expect(getOutput().labels[1]).toEqual(['Below threshold'])
  await performAndAssert(
    'Clear the label column to restore numeric labels',
    getOutput,
    async () => userEvent.selectOptions(getSelect(), ''),
    (_before, after) =>
      JSON.stringify(after.labels) === JSON.stringify(original.labels) &&
      JSON.stringify(after.geometry) === JSON.stringify(original.geometry)
  )
}

export const Vertical: Story = {
  args: { config: makeConfig('vertical') as unknown as ChartConfig, isEditor: true },
  play: testLabelColumn
}
export const Horizontal: Story = {
  args: { config: makeConfig('horizontal') as unknown as ChartConfig, isEditor: true },
  play: testLabelColumn
}

const configuredLabels = (orientation: 'vertical' | 'horizontal') => ({
  ...makeConfig(orientation),
  series: [{ dataKey: 'percent', type: 'Bar', axis: 'Left', tooltip: true, valueLabelColumn: 'percent_label' }]
})

const testVisibility: Story['play'] = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await waitForEditor(canvas)
  await assertVisualizationRendered(canvasElement)
  const getLabels = () =>
    Array.from(canvasElement.querySelectorAll('g[class*="bar-group-"] text'))
      .map(text => text.textContent)
      .filter(Boolean)
  expect(getLabels()).toEqual(['<1.0', 'Below threshold'])
  await openAccordion(canvas, 'General')
  const toggle = canvas.getByRole('checkbox', { name: /Display label on data|Display Numbers on Bar/i })
  await performAndAssert(
    'Hide custom labels including a zero measurement',
    getLabels,
    async () => userEvent.click(toggle),
    (_before, after) => after.length === 0
  )
  await performAndAssert(
    'Restore custom labels',
    getLabels,
    async () => userEvent.click(toggle),
    (_before, after) => after.includes('<1.0') && after.includes('Below threshold')
  )
}

export const VerticalVisibility: Story = {
  args: { config: configuredLabels('vertical') as unknown as ChartConfig, isEditor: true },
  play: testVisibility
}
export const HorizontalVisibility: Story = {
  args: { config: configuredLabels('horizontal') as unknown as ChartConfig, isEditor: true },
  play: testVisibility
}

const suppressionConfig = (orientation: 'vertical' | 'horizontal') => ({
  ...configuredLabels(orientation),
  general: { ...makeConfig(orientation).general, showMissingDataLabel: true },
  preliminaryData: [
    {
      type: 'suppression',
      column: 'percent',
      value: '0.3',
      symbol: 'Double Asterisk',
      iconCode: '**',
      hideBarSymbol: false
    }
  ],
  data: [
    { day: 'Day 1', percent: 0.3, percent_label: 'Should not appear' },
    { day: 'Day 2', percent: '', percent_label: 'Should not appear' },
    { day: 'Day 3', percent: 0.2, percent_label: 0 }
  ]
})
const testSpecialValues: Story['play'] = async ({ canvasElement }) => {
  await assertVisualizationRendered(canvasElement)
  const groups = Array.from(canvasElement.querySelectorAll('g[class*="bar-group-"]'))
  expect(groups).toHaveLength(3)
  const labels = groups.map(group =>
    Array.from(group.querySelectorAll('text'))
      .map(text => text.textContent)
      .filter(Boolean)
  )
  expect(labels).toEqual([['**'], ['N/A'], ['0']])
}
export const VerticalSpecialValues: Story = {
  args: { config: suppressionConfig('vertical') as unknown as ChartConfig, isEditor: false },
  play: testSpecialValues
}
export const HorizontalSpecialValues: Story = {
  args: { config: suppressionConfig('horizontal') as unknown as ChartConfig, isEditor: false },
  play: testSpecialValues
}
