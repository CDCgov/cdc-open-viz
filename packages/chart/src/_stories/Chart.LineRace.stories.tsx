import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { assertVisualizationRendered, performAndAssert } from '@cdc/core/helpers/testing'
import Chart from '../CdcChartComponent'
import lineRaceExample from '../../examples/feature/line/line-chart-race.json'

const years = Array.from({ length: 2026 - 1950 + 1 }, (_, index) => String(1950 + index))
const data = years.map((Year, index) => ({
  Year,
  North: Math.round(54 + index * 0.28 + Math.sin(index / 7) * 2.4),
  South: Math.round(50 + index * 0.32 + Math.sin((index + 4) / 8) * 2),
  West: Math.round(46 + index * 0.37 + Math.sin((index + 8) / 6) * 2.2)
}))
const config = {
  ...lineRaceExample,
  title: 'Population Trends, 1950–2026',
  description: 'A long timeline for evaluating Line racing speed and motion.',
  xAxis: { ...lineRaceExample.xAxis, categoryOrder: years },
  data
} as any

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Line Race',
  component: Chart,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof Chart>

export const ChangesOverTime: Story = {
  name: 'Changes Over Time (1950–2026)',
  args: {
    config,
    isEditor: false,
    interactionLabel: 'Population trends Line race'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await assertVisualizationRendered(canvasElement)
    expect(canvasElement.querySelector('.line-chart-race__frame')).toHaveTextContent('1950')
    expect(canvasElement.querySelector('.bottom-axis')).toHaveTextContent('1950')
    expect(canvasElement.querySelector('.component--has-accent')).not.toBeInTheDocument()
    expect(canvas.getByRole('button', { name: 'Play' })).toBeInTheDocument()

    await performAndAssert(
      'Draw the Line path forward without pausing playback',
      () => ({
        frame: canvasElement.querySelector('.line-chart-race__frame')?.textContent?.trim(),
        dash: canvasElement.querySelector('.line-chart-group path.visx-linepath')?.getAttribute('stroke-dasharray'),
        axis: canvasElement.querySelector('.bottom-axis')?.textContent
      }),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Play' })),
      (before, after) =>
        before.frame === '1950' && after.frame === '1951' && after.dash !== before.dash && after.axis === before.axis
    )
  }
}
