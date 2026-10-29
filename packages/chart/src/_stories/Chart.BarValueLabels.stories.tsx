import { useCallback, useRef, useState } from 'react'
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
  expect(original.labels).toEqual([[], [], []])
  const getSelect = () => canvas.getByRole('combobox', { name: /^Value label column/ })
  expect(within(getSelect()).getByRole('option', { name: 'percent' })).toBeInTheDocument()
  await performAndAssert(
    'Use source column for labels without changing bar geometry',
    getOutput,
    async () => userEvent.selectOptions(getSelect(), 'column:percent_label'),
    (before, after) =>
      after.labels[0].includes('<1.0') &&
      after.labels[1].includes('Below threshold') &&
      after.labels[2].length === 0 &&
      JSON.stringify(before.geometry) === JSON.stringify(after.geometry)
  )
  expect(getOutput().labels[0]).toEqual(['<1.0'])
  expect(getOutput().labels[1]).toEqual(['Below threshold'])
  await performAndAssert(
    'None hides both custom and zero labels without changing geometry',
    getOutput,
    async () => userEvent.selectOptions(getSelect(), 'none'),
    (_before, after) =>
      after.labels.every(labels => labels.length === 0) &&
      JSON.stringify(after.geometry) === JSON.stringify(original.geometry)
  )
  await performAndAssert(
    'Explicitly select numeric labels',
    getOutput,
    async () => userEvent.selectOptions(getSelect(), 'numeric'),
    (_before, after) =>
      after.labels[0].includes('0.3%') &&
      after.labels[2].includes('0.2%') &&
      JSON.stringify(after.geometry) === JSON.stringify(original.geometry)
  )
  await performAndAssert(
    'None also hides numeric labels',
    getOutput,
    async () => userEvent.selectOptions(getSelect(), 'none'),
    (_before, after) => after.labels.every(labels => labels.length === 0)
  )
}

const disabledLabels = (orientation: 'vertical' | 'horizontal') => ({
  ...makeConfig(orientation),
  labels: false,
  yAxis: { ...makeConfig(orientation).yAxis, displayNumbersOnBar: false },
  series: [{ dataKey: 'percent', type: 'Bar', axis: 'Left', tooltip: true }]
})

export const Vertical: Story = {
  args: { config: disabledLabels('vertical') as unknown as ChartConfig, isEditor: true },
  play: testLabelColumn
}
export const Horizontal: Story = {
  args: { config: disabledLabels('horizontal') as unknown as ChartConfig, isEditor: true },
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

export const MultipleSeries: Story = {
  args: {
    config: {
      ...disabledLabels('vertical'),
      series: [
        { dataKey: 'percent', type: 'Bar', axis: 'Left', tooltip: true },
        { dataKey: 'other', type: 'Bar', axis: 'Left', tooltip: true }
      ],
      data: [
        {
          day: 'Day 1',
          percent: 0.3,
          other: 0.5,
          percent_label: '<1.0',
          none: 'Column named none',
          numeric: 'Column named numeric'
        }
      ]
    } as unknown as ChartConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    await openAccordion(canvas, 'Data Series')
    await userEvent.click(canvasElement.querySelector('.series-item__title [role="button"]') as HTMLElement)
    const selector = () => canvas.getByRole('combobox', { name: /^Value label column/ })
    const labels = () =>
      Array.from(canvasElement.querySelectorAll('g[class*="bar-group-"] text'))
        .map(text => text.textContent)
        .filter(Boolean)
    await performAndAssert(
      'Enable only the selected series',
      labels,
      async () => userEvent.selectOptions(selector(), 'column:percent_label'),
      (_before, after) => JSON.stringify(after) === JSON.stringify(['<1.0'])
    )
    await performAndAssert(
      'Columns named none do not collide with None',
      labels,
      async () => userEvent.selectOptions(selector(), 'column:none'),
      (_before, after) => JSON.stringify(after) === JSON.stringify(['Column named none'])
    )
    await performAndAssert(
      'Columns named numeric do not collide with numeric mode',
      labels,
      async () => userEvent.selectOptions(selector(), 'column:numeric'),
      (_before, after) => JSON.stringify(after) === JSON.stringify(['Column named numeric'])
    )
    await performAndAssert(
      'None hides the selected series without enabling other labels',
      labels,
      async () => userEvent.selectOptions(selector(), 'none'),
      (_before, after) => after.length === 0
    )
  }
}

const testNumericVisibility: Story['play'] = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await waitForEditor(canvas)
  await assertVisualizationRendered(canvasElement)
  const labels = () =>
    Array.from(canvasElement.querySelectorAll('g[class*="bar-group-"] text'))
      .map(text => text.textContent)
      .filter(Boolean)
  expect(labels()).toContain('0.3%')
  expect(labels()).toContain('0.2%')
  const zeroBar = canvasElement.querySelectorAll('g[class*="bar-group-"]')[1]
  expect(within(zeroBar as HTMLElement).getByText('0', { exact: true })).toBeInTheDocument()
  await openAccordion(canvas, 'General')
  const toggle = canvas.getByRole('checkbox', { name: /Display label on data|Display Numbers on Bar/i })
  await performAndAssert(
    'The master control hides all numeric labels including zero',
    labels,
    async () => userEvent.click(toggle),
    (_before, after) => after.length === 0
  )
}

const numericLabels = (orientation: 'vertical' | 'horizontal') => ({
  ...makeConfig(orientation),
  series: [{ dataKey: 'percent', type: 'Bar', axis: 'Left', tooltip: true, valueLabelMode: 'numeric' }]
})
export const VerticalNumericVisibility: Story = {
  args: { config: numericLabels('vertical') as unknown as ChartConfig, isEditor: true },
  play: testNumericVisibility
}
export const HorizontalNumericVisibility: Story = {
  args: { config: numericLabels('horizontal') as unknown as ChartConfig, isEditor: true },
  play: testNumericVisibility
}

// Use the editor's cleaned parent-config callback, then mount a fresh chart from serialized JSON.
const SavedConfigPreview = (args: React.ComponentProps<typeof Chart>) => {
  const exportedConfig = useRef<ChartConfig | null>(null)
  const [saved, setSaved] = useState({ config: args.config, json: '', revision: 0 })
  const captureConfig = useCallback((config: ChartConfig) => {
    exportedConfig.current = config
  }, [])

  const reloadConfig = () => {
    if (!exportedConfig.current) return
    const json = JSON.stringify(exportedConfig.current)
    setSaved(previous => ({ config: JSON.parse(json), json, revision: previous.revision + 1 }))
  }

  return (
    <>
      <button type='button' onClick={reloadConfig}>
        Reload exported configuration
      </button>
      <details>
        <summary>Exported configuration</summary>
        <pre data-testid='exported-configuration'>{saved.json}</pre>
      </details>
      <div key={saved.revision}>
        <Chart {...args} config={saved.config} setConfig={captureConfig} />
      </div>
    </>
  )
}

const testSavedConfig: Story['play'] = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await waitForEditor(canvas)
  await assertVisualizationRendered(canvasElement)
  const output = () => ({
    labels: Array.from(canvasElement.querySelectorAll('g[class*="bar-group-"]')).map(group =>
      Array.from(group.querySelectorAll('text'))
        .map(text => text.textContent)
        .filter(Boolean)
    ),
    geometry: Array.from(canvasElement.querySelectorAll('g[class*="bar-group-"] path')).map(path =>
      path.getAttribute('d')
    ),
    json: canvas.getByTestId('exported-configuration').textContent || ''
  })
  const initialGeometry = output().geometry
  expect(initialGeometry.length).toBeGreaterThan(0)

  for (const mode of ['column', 'none', 'numeric'] as const) {
    await openAccordion(canvas, 'Data Series')
    await userEvent.click(canvasElement.querySelector('.series-item__title [role="button"]') as HTMLElement)
    const expectedLabels =
      mode === 'column'
        ? [['<1.0'], ['Below threshold'], []]
        : mode === 'none'
        ? [[], [], []]
        : [['0.3%'], ['0'], ['0.2%']]
    await performAndAssert(
      `Select ${mode} labels before exporting`,
      output,
      async () =>
        userEvent.selectOptions(
          canvas.getByRole('combobox', { name: /^Value label column/ }),
          mode === 'column' ? 'column:percent_label' : mode
        ),
      (_before, after) => JSON.stringify(after.labels) === JSON.stringify(expectedLabels)
    )
    await performAndAssert(
      `Reload saved ${mode} labels with identical geometry`,
      output,
      async () => userEvent.click(canvas.getByRole('button', { name: 'Reload exported configuration' })),
      (_before, after) => {
        if (!after.json) return false
        const savedConfig = JSON.parse(after.json) as ChartConfig
        return (
          savedConfig.series[0].valueLabelMode === mode &&
          JSON.stringify(after.labels) === JSON.stringify(expectedLabels) &&
          JSON.stringify(after.geometry) === JSON.stringify(initialGeometry)
        )
      }
    )
    const savedConfig = JSON.parse(output().json) as ChartConfig
    expect(savedConfig).not.toHaveProperty('runtime')
    if (mode === 'column') expect(savedConfig.series[0].valueLabelColumn).toBe('percent_label')
    else expect(savedConfig.series[0]).not.toHaveProperty('valueLabelColumn')
    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
  }
}

export const VerticalSavedConfig: Story = {
  args: { config: disabledLabels('vertical') as unknown as ChartConfig, isEditor: true },
  render: args => <SavedConfigPreview {...args} />,
  play: testSavedConfig
}
export const HorizontalSavedConfig: Story = {
  args: { config: disabledLabels('horizontal') as unknown as ChartConfig, isEditor: true },
  render: args => <SavedConfigPreview {...args} />,
  play: testSavedConfig
}
