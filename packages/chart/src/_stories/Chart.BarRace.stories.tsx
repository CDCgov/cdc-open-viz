import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, userEvent, within } from 'storybook/test'
import {
  assertVisualizationRendered,
  openAccordion,
  performAndAssert,
  waitForEditor,
  waitForPresence
} from '@cdc/core/helpers/testing'
import Chart from '../CdcChartComponent'
import annualChangeConfig from '../../examples/feature/bar/bar-chart-race-annual-change.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Bar Race',
  component: Chart,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof Chart>

export const AnnualChangesOverTime: Story = {
  name: 'Annual Changes Over Time',
  args: {
    config: annualChangeConfig as any,
    isEditor: false,
    interactionLabel: 'Annual program reach bar race'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await assertVisualizationRendered(canvasElement)

    expect(canvasElement.querySelector('.bar-chart-race__frame')).toHaveTextContent('2018')
    expect(canvasElement.querySelectorAll('.bar-chart-race__row')).toHaveLength(8)
    const frameAxis = canvas.getByRole('group', { name: 'Year axis' })
    expect(frameAxis).toHaveTextContent('2018')
    expect(frameAxis).toHaveTextContent('2024')
    expect(frameAxis.querySelectorAll('.bar-chart-race__frame-axis-tick')).toHaveLength(7)
    expect(frameAxis.querySelector('[aria-current="step"]')).toHaveTextContent('2018')
    expect(canvasElement.querySelector('.component--has-accent')).not.toBeInTheDocument()
    expect(canvas.getByRole('button', { name: 'Play' })).toBeInTheDocument()
    expect(canvasElement.querySelector('[data-category="Northeast"] .bar-chart-race__value')).toHaveTextContent('74')
    expect(canvasElement.querySelector('[data-category="Mountain"] .bar-chart-race__value')).toHaveTextContent('61')

    await performAndAssert(
      'Advance the annual time series',
      () => canvasElement.querySelector('.bar-chart-race__frame')?.textContent?.trim(),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Play' })),
      (before, after) => before === '2018' && after === '2019'
    )

    expect(frameAxis.querySelector('[aria-current="step"]')).toHaveTextContent('2019')
    expect(canvasElement.querySelector('[data-category="Northeast"] .bar-chart-race__value')).toHaveTextContent('73')
    expect(canvasElement.querySelector('[data-category="Mountain"] .bar-chart-race__value')).toHaveTextContent('67')
  }
}

export const GeneralSectionTests: Story = {
  name: 'Editor: General Section',
  parameters: { test: { timeout: 30000 } },
  args: {
    config: {
      ...annualChangeConfig,
      visualizationSubType: 'regular',
      orientation: 'vertical'
    } as any,
    isEditor: true,
    interactionLabel: 'Bar race editor story'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'General')

    expect(canvasElement.querySelector('.bar-chart-race')).not.toBeInTheDocument()
    const subtype = canvas.getByLabelText(/chart subtype/i) as HTMLSelectElement
    expect(Array.from(subtype.options).map(option => option.value)).toEqual(['regular', 'stacked', 'racing'])
    await performAndAssert(
      'Enable racing mode',
      () => Boolean(canvasElement.querySelector('.bar-chart-race')),
      async () => userEvent.selectOptions(subtype, 'racing'),
      (_before, after) => after
    )

    await waitForPresence('.bar-chart-race', canvasElement)
    const timing = canvas.getByRole('slider', { name: /seconds per time step/i }) as HTMLInputElement
    expect(timing.valueAsNumber).toBe(0.5)
    expect(timing).toHaveAttribute('min', '0')
    expect(timing).toHaveAttribute('max', '1.5')
    expect(timing).toHaveAttribute('step', '0.5')

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

    await fireEvent.change(timing, { target: { value: '0' } })
    await performAndAssert(
      'Apply instant playback timing',
      () => canvasElement.querySelector('.bar-chart-race__frame')?.textContent?.trim(),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Play' })),
      (before, after) => before === '2018' && after === '2024'
    )
    expect(canvas.getByRole('button', { name: 'Replay' })).toBeInTheDocument()

    await performAndAssert(
      'Switch to stacked bars without playback',
      () => Boolean(canvasElement.querySelector('.bar-chart-race')),
      async () => userEvent.selectOptions(subtype, 'stacked'),
      (before, after) => before && !after
    )
  }
}
