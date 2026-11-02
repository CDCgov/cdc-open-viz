import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { assertVisualizationRendered, openAccordion, performAndAssert, waitForEditor } from '@cdc/core/helpers/testing'
import Chart from '../CdcChartComponent'
import pieConfig from './_mock/pie_config.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Editor Tests/Pie Data Format',
  component: Chart
}

export default meta
type Story = StoryObj<typeof Chart>

const data = [
  { category: 'Alpha', amount: 1234.567, alternate: 2500.25 },
  { category: 'Beta', amount: 765.4, alternate: 1000.5 }
]

const buildConfig = (overrides: Record<string, unknown> = {}) => ({
  ...pieConfig,
  animate: false,
  labels: true,
  data,
  formattedData: data,
  xAxis: { ...pieConfig.xAxis, dataKey: 'category' },
  yAxis: { ...pieConfig.yAxis, dataKey: 'amount', label: 'Amount' },
  table: { ...pieConfig.table, show: true, expanded: true, collapsible: false },
  legend: { ...pieConfig.legend, hide: true },
  dataFormat: {
    ...pieConfig.dataFormat,
    commas: false,
    abbreviated: false,
    showPiePercent: false,
    roundTo: 0,
    preserveOriginalDecimals: false,
    prefix: '',
    suffix: ''
  },
  ...overrides
})

const getPiePaths = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll<SVGPathElement>('svg.animated-pie path'))
    .map(path => path.getAttribute('d'))
    .join('|')

const getTableText = (canvasElement: HTMLElement) =>
  canvasElement.querySelector('.data-table')?.textContent?.replace(/\s+/g, ' ').trim() || ''

const getTooltipText = (canvasElement: HTMLElement) =>
  canvasElement.querySelector('.tooltip')?.textContent?.replace(/\s+/g, ' ').trim() || ''

const hoverFirstSlice = async (canvasElement: HTMLElement) => {
  const slices = canvasElement.querySelectorAll<SVGPathElement>('svg.animated-pie path')
  expect(slices.length).toBeGreaterThan(0)
  if (slices.length > 1) await userEvent.hover(slices[1])
  const firstSlice = canvasElement.querySelector<SVGPathElement>('svg.animated-pie path')
  expect(firstSlice).toBeTruthy()
  await userEvent.hover(firstSlice!)
}

const openDataFormat = async (canvas: ReturnType<typeof within>) => {
  await openAccordion(canvas, 'Data Format')
  const heading = canvas
    .getAllByRole('button', { name: /Data Format/i })
    .find(button => button.classList.contains('accordion__button'))
  expect(heading).toBeTruthy()
  if (heading?.getAttribute('aria-expanded') !== 'true') await userEvent.click(heading!)
  await waitFor(() => expect(canvas.getByRole('combobox', { name: /^Data Column/ })).toBeVisible())
}

export const FormattingControls: Story = {
  args: {
    config: buildConfig(),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    await openDataFormat(canvas)

    const dataColumn = canvas.getByRole('combobox', { name: /^Data Column/ })
    await performAndAssert(
      'Data Column changes rendered Pie geometry',
      () => getPiePaths(canvasElement),
      () => userEvent.selectOptions(dataColumn, 'alternate'),
      (before, after) => Boolean(before) && Boolean(after) && before !== after
    )

    const dataLabel = canvas.getByRole('textbox', { name: /^Data Label/ })
    await performAndAssert(
      'Data Label changes the rendered data-table heading',
      () => getTableText(canvasElement),
      async () => {
        await userEvent.clear(dataLabel)
        await userEvent.type(dataLabel, 'Revenue')
      },
      (before, after) => !before.includes('Revenue') && after.includes('Revenue')
    )

    await performAndAssert(
      'Add commas changes rendered Pie tooltip values',
      () => getTooltipText(canvasElement),
      async () => {
        await userEvent.click(canvas.getByRole('checkbox', { name: /^Add commas/ }))
        await hoverFirstSlice(canvasElement)
      },
      (before, after) => !before.includes('2,500') && after.includes('2,500')
    )

    await performAndAssert(
      'Abbreviate Axis Values preserves full Pie values because Pie has no value-axis ticks',
      () => getTooltipText(canvasElement),
      async () => {
        await userEvent.click(canvas.getByRole('checkbox', { name: /^Abbreviate Axis Values/ }))
        await hoverFirstSlice(canvasElement)
      },
      (before, after) => before.includes('2,500') && after.includes('2,500') && !after.includes('2.5k')
    )

    const roundTo = canvas.getByRole('spinbutton', { name: 'Round to decimal point' })
    await performAndAssert(
      'Round to decimal point changes rendered table precision',
      () => getTableText(canvasElement),
      async () => {
        await userEvent.clear(roundTo)
        await userEvent.type(roundTo, '3')
      },
      (before, after) => !before.includes('71.420%') && after.includes('71.420%')
    )

    await performAndAssert(
      'Preserve Original Decimal Places restores source precision',
      () => getTooltipText(canvasElement),
      async () => {
        await userEvent.click(canvas.getByRole('checkbox', { name: /^Preserve Original Decimal Places/ }))
        await hoverFirstSlice(canvasElement)
      },
      (before, after) => !before.includes('2,500.25') && after.includes('2,500.25')
    )
  }
}

export const PrefixValue: Story = {
  args: {
    config: buildConfig({
      yAxis: { ...pieConfig.yAxis, dataKey: 'alternate', label: 'Revenue' },
      dataFormat: {
        ...buildConfig().dataFormat,
        commas: true,
        preserveOriginalDecimals: true,
        prefix: '',
        suffix: ''
      }
    }),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    await openDataFormat(canvas)

    const prefix = canvas.getByRole('textbox', { name: /^Prefix/ })
    const dataLabel = canvas.getByRole('textbox', { name: /^Data Label/ })
    await performAndAssert(
      'Prefix command updates rendered Pie tooltip values',
      () => getTooltipText(canvasElement),
      async () => {
        await userEvent.type(prefix, '$')
        await userEvent.clear(dataLabel)
        await userEvent.type(dataLabel, 'Prefixed Revenue')
        await waitFor(() => expect(getTableText(canvasElement)).toContain('Prefixed Revenue'))
        await hoverFirstSlice(canvasElement)
        await waitFor(() => expect(getTooltipText(canvasElement)).toContain('Prefixed Revenue: $2,500.25'))
      },
      (before, after) => !before.includes('$2,500.25') && after.includes('Prefixed Revenue: $2,500.25')
    )
  }
}

export const SuffixValue: Story = {
  args: {
    config: buildConfig({
      yAxis: { ...pieConfig.yAxis, dataKey: 'alternate', label: 'Revenue' },
      dataFormat: {
        ...buildConfig().dataFormat,
        commas: true,
        preserveOriginalDecimals: true,
        prefix: '',
        suffix: ''
      }
    }),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    await openDataFormat(canvas)

    const suffix = canvas.getByRole('textbox', { name: /^Suffix/ })
    const dataLabel = canvas.getByRole('textbox', { name: /^Data Label/ })
    await performAndAssert(
      'Suffix command updates rendered Pie tooltip values',
      () => getTooltipText(canvasElement),
      async () => {
        await userEvent.type(suffix, ' cases')
        await userEvent.clear(dataLabel)
        await userEvent.type(dataLabel, 'Suffixed Revenue')
        await waitFor(() => expect(getTableText(canvasElement)).toContain('Suffixed Revenue'))
        await hoverFirstSlice(canvasElement)
        await waitFor(() => expect(getTooltipText(canvasElement)).toContain('Suffixed Revenue: 2,500.25 cases'))
      },
      (before, after) => !before.includes('2,500.25 cases') && after.includes('Suffixed Revenue: 2,500.25 cases')
    )
  }
}

export const ExactPercentValues: Story = {
  args: {
    config: buildConfig({
      data: [
        { category: 'Alpha', amount: 12.5 },
        { category: 'Beta', amount: 20.25 }
      ],
      formattedData: [
        { category: 'Alpha', amount: 12.5 },
        { category: 'Beta', amount: 20.25 }
      ],
      dataFormat: { ...buildConfig().dataFormat, roundTo: 1 }
    }),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    await openDataFormat(canvas)

    await performAndAssert(
      'Display Value From Data adds the rendered Calculated Area slice',
      () => ({
        sliceCount: canvasElement.querySelectorAll('svg.animated-pie path').length,
        labels: Array.from(canvasElement.querySelectorAll('svg.animated-pie text'))
          .map(label => label.textContent)
          .join('|')
      }),
      () => userEvent.click(canvas.getByRole('checkbox', { name: /^Display Value From Data/ })),
      (before, after) =>
        before.sliceCount === 2 &&
        after.sliceCount === 3 &&
        !before.labels.includes('**') &&
        after.labels.includes('**')
    )

    expect(canvas.getByRole('combobox', { name: /^Data Column/ })).toHaveAttribute(
      'data-required-field-control',
      'pie-data-column'
    )
  }
}

export const ExactPercentValuesOverOneHundred: Story = {
  args: {
    config: buildConfig({
      data: [
        { category: 'Alpha', amount: 70 },
        { category: 'Beta', amount: 50 }
      ],
      formattedData: [
        { category: 'Alpha', amount: 70 },
        { category: 'Beta', amount: 50 }
      ],
      dataFormat: { ...buildConfig().dataFormat, roundTo: 1 }
    }),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    await openDataFormat(canvas)
    await hoverFirstSlice(canvasElement)

    await performAndAssert(
      'Display Value From Data preserves two slices when values total above 100',
      () => ({
        sliceCount: canvasElement.querySelectorAll('svg.animated-pie path').length,
        tooltip: getTooltipText(canvasElement)
      }),
      async () => {
        await userEvent.click(canvas.getByRole('checkbox', { name: /^Display Value From Data/ }))
        await hoverFirstSlice(canvasElement)
      },
      (before, after) =>
        before.sliceCount === 2 &&
        after.sliceCount === 2 &&
        before.tooltip.includes('Percent: 58.3%') &&
        after.tooltip.includes('Amount: 70.0%') &&
        !after.tooltip.includes('Calculated Area')
    )
  }
}
