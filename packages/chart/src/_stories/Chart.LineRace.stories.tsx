import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, userEvent, within } from 'storybook/test'
import { assertVisualizationRendered, openAccordion, performAndAssert, waitForEditor } from '@cdc/core/helpers/testing'
import Chart from '../CdcChartComponent'
import lineRaceExample from '../../examples/feature/line/line-chart-race.json'

const lineRaceStyledExample = {
  ...lineRaceExample,
  series: lineRaceExample.series.map((series, index) =>
    index === 0 ? { ...series, type: 'dashed-md', weight: 7 } : series
  )
}

const newestFirstLineRaceExample = {
  ...lineRaceExample,
  title: 'Newest-first population trends',
  xAxis: {
    ...lineRaceExample.xAxis,
    type: 'date',
    dataKey: 'Date',
    dateParseFormat: '%Y-%m-%d',
    dateDisplayFormat: '%Y-%m-%d',
    sortByRecentDate: true
  },
  data: lineRaceExample.data.map(({ Year, ...row }) => ({ Date: `${Year}-01-01`, ...row }))
}

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
    config: lineRaceStyledExample as any,
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
    expect(canvasElement.querySelector('[data-line-race-series-path]')).toHaveAttribute('stroke-dasharray', '10 5')
    expect(canvasElement.querySelector('[data-line-race-series-path]')).toHaveAttribute('stroke-width', '7')
    expect(canvasElement.querySelector('[data-line-race-series-path]')).not.toHaveAttribute('pathLength')
    expect(canvasElement.querySelector('[data-line-race-reveal-path]')).toHaveAttribute('pathLength', '1')

    await performAndAssert(
      'Draw the styled Line path forward without pausing playback',
      () => ({
        frame: canvasElement.querySelector('.line-chart-race__frame')?.textContent?.trim(),
        revealDash: canvasElement.querySelector('[data-line-race-reveal-path]')?.getAttribute('stroke-dasharray'),
        seriesDash: canvasElement.querySelector('[data-line-race-series-path]')?.getAttribute('stroke-dasharray'),
        seriesWeight: canvasElement.querySelector('[data-line-race-series-path]')?.getAttribute('stroke-width'),
        axis: canvasElement.querySelector('.bottom-axis')?.textContent
      }),
      async () => userEvent.click(canvas.getByRole('button', { name: 'Play' })),
      (before, after) =>
        before.frame === '1950' &&
        after.frame === '1951' &&
        after.revealDash !== before.revealDash &&
        after.seriesDash === before.seriesDash &&
        after.seriesDash === '10 5' &&
        after.seriesWeight === '7' &&
        after.axis === before.axis
    )
  }
}

export const NewestFirstDates: Story = {
  name: 'Newest-first dates',
  args: {
    config: newestFirstLineRaceExample as any,
    isEditor: false,
    interactionLabel: 'Newest-first population trends Line race'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await assertVisualizationRendered(canvasElement)
    expect(canvasElement.querySelector('.line-chart-race__frame')).toHaveTextContent('1955-01-01')

    const getRaceState = () => {
      const path = canvasElement.querySelector('[data-line-race-series-path]') as SVGPathElement | null
      expect(path).not.toBeNull()
      if (!path) throw new Error('Expected the Line race series path to render')
      const length = path.getAttribute('d') ? path.getTotalLength() : 0
      return {
        frame: canvasElement.querySelector('.line-chart-race__frame')?.textContent?.trim(),
        startsLeft: length > 0 && path.getPointAtLength(0).x < path.getPointAtLength(length).x
      }
    }

    await performAndAssert(
      'Advance newest-first playback while drawing left to right',
      getRaceState,
      async () => userEvent.click(canvas.getByRole('button', { name: 'Play' })),
      (before, after) =>
        before.frame === '1955-01-01' && after.frame === '1954-01-01' && before.startsLeft && after.startsLeft
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
