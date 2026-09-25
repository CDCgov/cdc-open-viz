import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, userEvent, within } from 'storybook/test'
import { assertVisualizationRendered, openAccordion, performAndAssert, waitForEditor } from '@cdc/core/helpers/testing'
import Chart from '../CdcChartComponent'
import lineRaceExample from '../../examples/feature/line/line-chart-race.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Line Race',
  component: Chart,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof Chart>

export const ChangesOverTime: Story = {
  name: 'Changes Over Time',
  args: {
    config: lineRaceExample as any,
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

export const GeneralSectionTests: Story = {
  name: 'Editor: General Section',
  parameters: { test: { timeout: 30000 } },
  args: {
    config: { ...lineRaceExample, visualizationSubType: 'regular' } as any,
    isEditor: true,
    interactionLabel: 'Line race editor story'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'General')
    expect(canvasElement.querySelector('.line-chart-race')).not.toBeInTheDocument()
    const subtype = canvas.getByLabelText(/chart subtype/i) as HTMLSelectElement
    expect(Array.from(subtype.options).map(option => option.value)).toEqual(['regular', 'racing'])

    await performAndAssert(
      'Enable Line racing mode',
      () => Boolean(canvasElement.querySelector('.line-chart-race')),
      async () => userEvent.selectOptions(subtype, 'racing'),
      (_before, after) => after
    )
    expect(canvasElement.querySelector('.line-chart-race__frame')).toHaveTextContent('1950')
    const timing = canvas.getByRole('slider', { name: /seconds per time step/i }) as HTMLInputElement
    expect(timing.valueAsNumber).toBe(0.5)
    expect(timing).toHaveAttribute('min', '0')
    expect(timing).toHaveAttribute('max', '1.5')
    expect(timing).toHaveAttribute('step', '0.5')

    await fireEvent.change(timing, { target: { value: '0' } })
    await performAndAssert(
      'Apply instant playback timing',
      () => canvasElement.querySelector('.line-chart-race__frame')?.textContent?.trim(),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Play' })),
      (before, after) => before === '1950' && after === '1955'
    )
    expect(canvas.getByRole('button', { name: 'Replay' })).toBeInTheDocument()
  }
}
