import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { assertVisualizationRendered, performAndAssert } from '@cdc/core/helpers/testing'
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
