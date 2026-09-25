import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { openAccordion, performAndAssert, waitForEditor, waitForPresence } from '@cdc/core/helpers/testing'
import Chart from '../CdcChartComponent'
import barChartEditorTest from './_mock/editor-tests/bar-chart-editor-test.json'

const config = {
  ...barChartEditorTest,
  version: '4.26.8',
  title: 'Population ranking by year',
  visualizationType: 'Bar',
  visualizationSubType: 'regular',
  orientation: 'vertical',
  visual: {
    ...barChartEditorTest.visual,
    accent: false,
    border: false,
    borderColorTheme: false,
    background: false,
    tp5Treatment: false
  },
  xAxis: {
    ...barChartEditorTest.xAxis,
    type: 'categorical',
    dataKey: 'Year',
    sortDates: false
  },
  series: [
    {
      dataKey: 'Population',
      name: 'Population',
      type: 'Bar',
      axis: 'left',
      tooltip: true,
      dynamicCategory: 'Place'
    }
  ],
  columns: {
    ...barChartEditorTest.columns,
    Population: {
      name: 'Population',
      label: 'Population',
      prefix: '',
      suffix: '',
      commas: true,
      dataTable: true,
      showInViz: true,
      startingPoint: '0',
      tooltips: true
    }
  },
  data: [
    { Year: '2020', Place: 'Alpha', Population: 10 },
    { Year: '2020', Place: 'Beta', Population: 30 },
    { Year: '2020', Place: 'Gamma', Population: 20 },
    { Year: '2021', Place: 'Alpha', Population: 40 },
    { Year: '2021', Place: 'Beta', Population: 25 },
    { Year: '2021', Place: 'Gamma', Population: 35 }
  ]
} as any

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Editor Tests/Bar Race',
  component: Chart
}

export default meta
type Story = StoryObj<typeof Chart>

export const GeneralSectionTests: Story = {
  name: 'General Section Tests',
  parameters: { test: { timeout: 30000 } },
  args: {
    config,
    isEditor: true,
    interactionLabel: 'Bar race editor story'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'General')

    const subtype = canvas.getByLabelText(/chart subtype/i) as HTMLSelectElement
    expect(Array.from(subtype.options).map(option => option.value)).toContain('racing')

    await performAndAssert(
      'Enable racing mode',
      () => ({
        hasRace: Boolean(canvasElement.querySelector('.bar-chart-race')),
        frame: canvasElement.querySelector('.bar-chart-race__frame')?.textContent?.trim()
      }),
      async () => userEvent.selectOptions(subtype, 'racing'),
      (_before, after) => after.hasRace && after.frame === '2020'
    )

    await waitForPresence('.bar-chart-race', canvasElement)
    expect(canvasElement.querySelector('.component--has-accent')).not.toBeInTheDocument()
    const timing = canvas.getByRole('slider', { name: /seconds per time step/i }) as HTMLInputElement
    expect(timing.valueAsNumber).toBe(0.5)
    expect(timing).toHaveAttribute('min', '0')
    expect(timing).toHaveAttribute('max', '1.5')
    expect(timing).toHaveAttribute('step', '0.5')
    expect(timing.style.width).toBe('100%')
    const maximumBars = canvas.getByLabelText(/maximum bars/i) as HTMLInputElement
    await performAndAssert(
      'Limit visible bars',
      () => canvasElement.querySelectorAll('.bar-chart-race__row').length,
      async () => {
        await userEvent.clear(maximumBars)
        await userEvent.type(maximumBars, '2')
        await userEvent.tab()
      },
      (_before, after) => after === 2
    )

    await performAndAssert(
      'Play through frames',
      () => canvasElement.querySelector('.bar-chart-race__frame')?.textContent?.trim(),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Play' })),
      (before, after) => before === '2020' && after === '2021'
    )
    expect(canvas.getByRole('button', { name: 'Replay' })).toBeInTheDocument()
    expect(canvas.queryByTestId('bar-race-playback-timing')).not.toBeInTheDocument()

    window.history.replaceState({}, '', `${window.location.pathname}?isCoveDeveloper=true`)
    await userEvent.click(canvas.getByRole('button', { name: 'Replay' }))
    expect(canvas.getByTestId('bar-race-playback-timing')).toBeInTheDocument()
    window.history.replaceState({}, '', window.location.pathname)
  }
}

export const OrdinaryBarRemainsUnchanged: Story = {
  name: 'Ordinary Bar Remains Unchanged',
  args: {
    config: { ...config, visualizationSubType: 'regular' },
    isEditor: false,
    interactionLabel: 'Ordinary Bar story'
  },
  play: async ({ canvasElement }) => {
    await waitForPresence('.chart-container svg', canvasElement)
    expect(canvasElement.querySelector('.bar-chart-race')).not.toBeInTheDocument()
    expect(canvasElement.querySelector('.component--has-accent')).not.toBeInTheDocument()
    expect(canvasElement.querySelector('.chart-container svg')).toBeInTheDocument()
  }
}
