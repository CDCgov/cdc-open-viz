import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { openAccordion, performAndAssert, waitForEditor } from '@cdc/core/helpers/testing'
import Chart from '../CdcChartComponent'
import lineRaceExample from '../../examples/feature/line/line-chart-race.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Editor Tests/Line Race',
  component: Chart
}

export default meta
type Story = StoryObj<typeof Chart>

export const GeneralSectionTests: Story = {
  name: 'General Section Tests',
  parameters: { test: { timeout: 30000 } },
  args: {
    config: { ...lineRaceExample, visualizationSubType: 'regular' } as any,
    isEditor: true,
    interactionLabel: 'Line race editor story'
  },
  play: async ({ canvasElement }) => {
    window.history.replaceState({}, '', `${window.location.pathname}?isCoveDeveloper=true`)
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'General')
    const subtype = canvas.getByLabelText(/chart subtype/i) as HTMLSelectElement
    expect(Array.from(subtype.options).map(option => option.value)).toContain('racing')

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
    expect(timing.style.width).toBe('100%')
    expect(canvas.getByText('0s')).toBeInTheDocument()
    expect(canvas.getByText('0.5s')).toBeInTheDocument()
    expect(canvas.getByText('1s')).toBeInTheDocument()
    expect(canvas.getByText('1.5s')).toBeInTheDocument()
    expect(canvas.queryByTestId('line-race-playback-timing')).not.toBeInTheDocument()

    await performAndAssert(
      'Show live timing after playback starts',
      () => canvas.queryByTestId('line-race-playback-timing')?.textContent,
      async () => userEvent.click(canvas.getByRole('button', { name: 'Play' })),
      (_before, after) => Boolean(after?.includes('Playing') && after.includes('1950') && after.includes('/'))
    )

    window.history.replaceState({}, '', window.location.pathname)
    await userEvent.selectOptions(subtype, 'regular')
    await userEvent.selectOptions(subtype, 'racing')
    expect(canvas.getByRole('slider', { name: /seconds per time step/i })).toBeInTheDocument()
    expect(canvas.queryByTestId('line-race-playback-timing')).not.toBeInTheDocument()
  }
}
